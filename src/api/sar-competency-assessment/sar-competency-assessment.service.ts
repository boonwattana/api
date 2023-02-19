import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarCompetencyAssessmentDto, SarCompetencyAssessmentDto, SearchSarCompetencyAssessmentDto, UpdateSarCompetencyAssessmentDto } from './sar-competency-assessment.dto';
import { SarCompetencyAssessment, VwSarCompetencyAssessmentDropdown, VwSarCompetencyAssessmentItem, VwSarCompetencyAssessmentList } from './sar-competency-assessment.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { SearchYearTermDto } from '../year-term/year-term.dto';
@Injectable()
export class SarCompetencyAssessmentService extends BaseService {

    constructor(
        @InjectRepository(SarCompetencyAssessment)
        private readonly sarcompetencyassessmentRepository: Repository<SarCompetencyAssessment>,
        @InjectRepository(VwSarCompetencyAssessmentList)
        private readonly vwSarCompetencyAssessmentRepository: Repository<VwSarCompetencyAssessmentList>,
        @InjectRepository(VwSarCompetencyAssessmentItem)
        private readonly itemRepository:Repository<VwSarCompetencyAssessmentItem>,
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
    async list(dto:SearchSarCompetencyAssessmentDto):Promise<SearchResult<VwSarCompetencyAssessmentList>>{
        const builder = this.createQueryBuider<VwSarCompetencyAssessmentList>(dto,this.vwSarCompetencyAssessmentRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarCompetencyAssessmentList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarCompetencyAssessmentDto,req:CustomRequest):Promise<SarCompetencyAssessment>{        
        const en = this.toCreateModel(dto,req) as SarCompetencyAssessment  
        return await this.sarcompetencyassessmentRepository.save(
            this.sarcompetencyassessmentRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarCompetencyAssessmentDto,req:CustomRequest):Promise<SarCompetencyAssessmentDto>{
        const m = await this.sarcompetencyassessmentRepository.findOne({where:{id:id}})
        return await this.sarcompetencyassessmentRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarCompetencyAssessmentDto>{
        let m = await this.sarcompetencyassessmentRepository.findOne({where:{id:id}})
        return await this.sarcompetencyassessmentRepository.softRemove(
            await this.sarcompetencyassessmentRepository.save(
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
