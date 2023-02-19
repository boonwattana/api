import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarLearningManagementPlanDto, SarLearningManagementPlanDto, SearchSarLearningManagementPlanDto, UpdateSarLearningManagementPlanDto } from './sar-learning-management-plan.dto';
import { SarLearningManagementPlan, VwSarLearningManagementPlanDropdown, VwSarLearningManagementPlanItem, VwSarLearningManagementPlanList } from './sar-learning-management-plan.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarLearningManagementPlanService extends BaseService {

    constructor(
        @InjectRepository(SarLearningManagementPlan)
        private readonly sarlearningmanagementplanRepository: Repository<SarLearningManagementPlan>,
        @InjectRepository(VwSarLearningManagementPlanList)
        private readonly vwSarLearningManagementPlanRepository: Repository<VwSarLearningManagementPlanList>,
        @InjectRepository(VwSarLearningManagementPlanItem)
        private readonly itemRepository:Repository<VwSarLearningManagementPlanItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarLearningManagementPlanDto):Promise<SearchResult<VwSarLearningManagementPlanList>>{
        const builder = this.createQueryBuider<VwSarLearningManagementPlanList>(dto,this.vwSarLearningManagementPlanRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarLearningManagementPlanList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarLearningManagementPlanDto,req:CustomRequest):Promise<SarLearningManagementPlan>{        
        const en = this.toCreateModel(dto,req) as SarLearningManagementPlan  
        return await this.sarlearningmanagementplanRepository.save(
            this.sarlearningmanagementplanRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarLearningManagementPlanDto,req:CustomRequest):Promise<SarLearningManagementPlanDto>{
        const m = await this.sarlearningmanagementplanRepository.findOne({where:{id:id}})
        return await this.sarlearningmanagementplanRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarLearningManagementPlanDto>{
        let m = await this.sarlearningmanagementplanRepository.findOne({where:{id:id}})
        return await this.sarlearningmanagementplanRepository.softRemove(
            await this.sarlearningmanagementplanRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarLearningManagementPlanItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }

}
