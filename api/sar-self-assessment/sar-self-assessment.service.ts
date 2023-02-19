import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarSelfAssessmentDto, SarSelfAssessmentDto, SearchSarSelfAssessmentDto, UpdateSarSelfAssessmentDto } from './sar-self-assessment.dto';
import { SarSelfAssessment, VwSarSelfAssessmentDropdown, VwSarSelfAssessmentItem, VwSarSelfAssessmentList } from './sar-self-assessment.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarSelfAssessmentService extends BaseService {

    constructor(
        @InjectRepository(SarSelfAssessment)
        private readonly sarselfassessmentRepository: Repository<SarSelfAssessment>,
        @InjectRepository(VwSarSelfAssessmentList)
        private readonly vwSarSelfAssessmentRepository: Repository<VwSarSelfAssessmentList>,
        @InjectRepository(VwSarSelfAssessmentItem)
        private readonly itemRepository:Repository<VwSarSelfAssessmentItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarSelfAssessmentDto):Promise<SearchResult<VwSarSelfAssessmentList>>{
        const builder = this.createQueryBuider<VwSarSelfAssessmentList>(dto,this.vwSarSelfAssessmentRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarSelfAssessmentList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarSelfAssessmentDto,req:CustomRequest):Promise<SarSelfAssessment>{        
        const en = this.toCreateModel(dto,req) as SarSelfAssessment  
        return await this.sarselfassessmentRepository.save(
            this.sarselfassessmentRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarSelfAssessmentDto,req:CustomRequest):Promise<SarSelfAssessmentDto>{
        const m = await this.sarselfassessmentRepository.findOne({where:{id:id}})
        return await this.sarselfassessmentRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarSelfAssessmentDto>{
        let m = await this.sarselfassessmentRepository.findOne({where:{id:id}})
        return await this.sarselfassessmentRepository.softRemove(
            await this.sarselfassessmentRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getItemByRefId(refIdValue:string):Promise<VwSarSelfAssessmentItem>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
