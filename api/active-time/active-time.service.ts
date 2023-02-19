import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateActiveTimeDto, ActiveTimeDto, SearchActiveTimeDto, UpdateActiveTimeDto } from './active-time.dto';
import { ActiveTime, VwActiveTimeDropdown, VwActiveTimeItem, VwActiveTimeList } from './active-time.entity';

@Injectable()
export class ActiveTimeService extends BaseService {

    constructor(
        @InjectRepository(ActiveTime)
        private readonly activetimeRepository: Repository<ActiveTime>,
        @InjectRepository(VwActiveTimeList)
        private readonly vwActiveTimeRepository: Repository<VwActiveTimeList>,
        @InjectRepository(VwActiveTimeItem)
        private readonly itemRepository:Repository<VwActiveTimeItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchActiveTimeDto):Promise<SearchResult<VwActiveTimeList>>{
        const builder = this.createQueryBuider<VwActiveTimeList>(dto,this.vwActiveTimeRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwActiveTimeList>(dto.paginator,count,data);
    }
    async create(dto:CreateActiveTimeDto,req:CustomRequest):Promise<ActiveTime>{        
        const en = this.toCreateModel(dto,req) as ActiveTime  
        return this.activetimeRepository.save(
            this.activetimeRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateActiveTimeDto,req:CustomRequest):Promise<ActiveTimeDto>{
        const m = await this.activetimeRepository.findOne({where:{id:id}})
        return this.activetimeRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<ActiveTimeDto>{
        let m = await this.activetimeRepository.findOne({where:{id:id}})
        return this.activetimeRepository.softRemove(
            await this.activetimeRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
