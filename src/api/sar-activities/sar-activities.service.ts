import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarActivitiesDto, SarActivitiesDto, SearchSarActivitiesDto, UpdateSarActivitiesDto } from './sar-activities.dto';
import { SarActivities, VwSarActivitiesDropdown, VwSarActivitiesItem, VwSarActivitiesList } from './sar-activities.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarActivitiesService extends BaseService {

    constructor(
        @InjectRepository(SarActivities)
        private readonly saractivitiesRepository: Repository<SarActivities>,
        @InjectRepository(VwSarActivitiesList)
        private readonly vwSarActivitiesRepository: Repository<VwSarActivitiesList>,
        @InjectRepository(VwSarActivitiesItem)
        private readonly itemRepository:Repository<VwSarActivitiesItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarActivitiesDto):Promise<SearchResult<VwSarActivitiesList>>{
        const builder = this.createQueryBuider<VwSarActivitiesList>(dto,this.vwSarActivitiesRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarActivitiesList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarActivitiesDto,req:CustomRequest):Promise<SarActivities>{        
        const en = this.toCreateModel(dto,req) as SarActivities  
        return await this.saractivitiesRepository.save(
            this.saractivitiesRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarActivitiesDto,req:CustomRequest):Promise<SarActivitiesDto>{
        const m = await this.saractivitiesRepository.findOne({where:{id:id}})
        return await this.saractivitiesRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarActivitiesDto>{
        let m = await this.saractivitiesRepository.findOne({where:{id:id}})
        return await this.saractivitiesRepository.softRemove(
            await this.saractivitiesRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }

async getListByRefId(refIdValue:string):Promise<VwSarActivitiesItem[]>{
    return await this.itemRepository.find({where:{refId:refIdValue}})
}
    
}
