import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarTeachingConditionDto, SarTeachingConditionDto, SearchSarTeachingConditionDto, UpdateSarTeachingConditionDto } from './sar-teaching-condition.dto';
import { SarTeachingCondition, VwSarTeachingConditionDropdown, VwSarTeachingConditionItem, VwSarTeachingConditionList } from './sar-teaching-condition.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarTeachingConditionService extends BaseService {

    constructor(
        @InjectRepository(SarTeachingCondition)
        private readonly sarteachingconditionRepository: Repository<SarTeachingCondition>,
        @InjectRepository(VwSarTeachingConditionList)
        private readonly vwSarTeachingConditionRepository: Repository<VwSarTeachingConditionList>,
        @InjectRepository(VwSarTeachingConditionItem)
        private readonly itemRepository:Repository<VwSarTeachingConditionItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarTeachingConditionDto):Promise<SearchResult<VwSarTeachingConditionList>>{
        const builder = this.createQueryBuider<VwSarTeachingConditionList>(dto,this.vwSarTeachingConditionRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarTeachingConditionList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarTeachingConditionDto,req:CustomRequest):Promise<SarTeachingCondition>{        
        const en = this.toCreateModel(dto,req) as SarTeachingCondition  
        return await this.sarteachingconditionRepository.save(
            this.sarteachingconditionRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarTeachingConditionDto,req:CustomRequest):Promise<SarTeachingConditionDto>{
        const m = await this.sarteachingconditionRepository.findOne({where:{id:id}})
        return await this.sarteachingconditionRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarTeachingConditionDto>{
        let m = await this.sarteachingconditionRepository.findOne({where:{id:id}})
        return await this.sarteachingconditionRepository.softRemove(
            await this.sarteachingconditionRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getItemByRefId(refIdValue:string):Promise<VwSarTeachingConditionItem>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
