import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarPerformingSpecialDutiesDto, SarPerformingSpecialDutiesDto, SearchSarPerformingSpecialDutiesDto, UpdateSarPerformingSpecialDutiesDto } from './sar-performing-special-duties.dto';
import { SarPerformingSpecialDuties, VwSarPerformingSpecialDutiesDropdown, VwSarPerformingSpecialDutiesItem, VwSarPerformingSpecialDutiesList } from './sar-performing-special-duties.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarPerformingSpecialDutiesService extends BaseService {

    constructor(
        @InjectRepository(SarPerformingSpecialDuties)
        private readonly sarperformingspecialdutiesRepository: Repository<SarPerformingSpecialDuties>,
        @InjectRepository(VwSarPerformingSpecialDutiesList)
        private readonly vwSarPerformingSpecialDutiesRepository: Repository<VwSarPerformingSpecialDutiesList>,
        @InjectRepository(VwSarPerformingSpecialDutiesItem)
        private readonly itemRepository:Repository<VwSarPerformingSpecialDutiesItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarPerformingSpecialDutiesDto):Promise<SearchResult<VwSarPerformingSpecialDutiesList>>{
        const builder = this.createQueryBuider<VwSarPerformingSpecialDutiesList>(dto,this.vwSarPerformingSpecialDutiesRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarPerformingSpecialDutiesList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarPerformingSpecialDutiesDto,req:CustomRequest):Promise<SarPerformingSpecialDuties>{        
        const en = this.toCreateModel(dto,req) as SarPerformingSpecialDuties  
        return await this.sarperformingspecialdutiesRepository.save(
            this.sarperformingspecialdutiesRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarPerformingSpecialDutiesDto,req:CustomRequest):Promise<SarPerformingSpecialDutiesDto>{
        const m = await this.sarperformingspecialdutiesRepository.findOne({where:{id:id}})
        return await this.sarperformingspecialdutiesRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarPerformingSpecialDutiesDto>{
        let m = await this.sarperformingspecialdutiesRepository.findOne({where:{id:id}})
        return await this.sarperformingspecialdutiesRepository.softRemove(
            await this.sarperformingspecialdutiesRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getItemByRefId(refIdValue:string):Promise<VwSarPerformingSpecialDutiesItem>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
