import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarCrudAssessmentDto, SarCrudAssessmentDto, SearchSarCrudAssessmentDto, UpdateSarCrudAssessmentDto } from './sar-crud-assessment.dto';
import { SarCrudAssessment, VwSarCrudAssessmentDropdown, VwSarCrudAssessmentItem, VwSarCrudAssessmentList } from './sar-crud-assessment.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { SearchYearTermDto } from '../year-term/year-term.dto';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
@Injectable()
export class SarCrudAssessmentService extends BaseService {

    constructor(
        @InjectRepository(SarCrudAssessment)
        private readonly sarcrudassessmentRepository: Repository<SarCrudAssessment>,
        @InjectRepository(VwSarCrudAssessmentList)
        private readonly vwSarCrudAssessmentRepository: Repository<VwSarCrudAssessmentList>,
        @InjectRepository(VwSarCrudAssessmentItem)
        private readonly itemRepository:Repository<VwSarCrudAssessmentItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwDropdownYearTermRepository:Repository<VwYearTermDropdown>,
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarCrudAssessmentDto):Promise<SearchResult<VwSarCrudAssessmentList>>{
        const builder = this.createQueryBuider<VwSarCrudAssessmentList>(dto,this.vwSarCrudAssessmentRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarCrudAssessmentList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarCrudAssessmentDto,req:CustomRequest):Promise<SarCrudAssessment>{        
        const en = this.toCreateModel(dto,req) as SarCrudAssessment  
        return await this.sarcrudassessmentRepository.save(
            this.sarcrudassessmentRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarCrudAssessmentDto,req:CustomRequest):Promise<SarCrudAssessmentDto>{
        const m = await this.sarcrudassessmentRepository.findOne({where:{id:id}})
        return await this.sarcrudassessmentRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarCrudAssessmentDto>{
        let m = await this.sarcrudassessmentRepository.findOne({where:{id:id}})
        return await this.sarcrudassessmentRepository.softRemove(
            await this.sarcrudassessmentRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<any>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
    async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
      }
}
