import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarStandard2Dto, SarStandard2Dto, SearchSarStandard2Dto, UpdateSarStandard2Dto } from './sar-standard2.dto';
import { SarStandard2, VwSarStandard2Dropdown, VwSarStandard2Item, VwSarStandard2List } from './sar-standard2.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarStandard2Service extends BaseService {

    constructor(
        @InjectRepository(SarStandard2)
        private readonly sarstandard2Repository: Repository<SarStandard2>,
        @InjectRepository(VwSarStandard2List)
        private readonly vwSarStandard2Repository: Repository<VwSarStandard2List>,
        @InjectRepository(VwSarStandard2Item)
        private readonly itemRepository:Repository<VwSarStandard2Item>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarStandard2Dto):Promise<SearchResult<VwSarStandard2List>>{
        const builder = this.createQueryBuider<VwSarStandard2List>(dto,this.vwSarStandard2Repository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarStandard2List>(dto.paginator,count,data);
    }
    async create(dto:CreateSarStandard2Dto,req:CustomRequest):Promise<SarStandard2>{        
        const en = this.toCreateModel(dto,req) as SarStandard2  
        return await this.sarstandard2Repository.save(
            this.sarstandard2Repository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarStandard2Dto,req:CustomRequest):Promise<SarStandard2Dto>{
        const m = await this.sarstandard2Repository.findOne({where:{id:id}})
        return await this.sarstandard2Repository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarStandard2Dto>{
        let m = await this.sarstandard2Repository.findOne({where:{id:id}})
        return await this.sarstandard2Repository.softRemove(
            await this.sarstandard2Repository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getItemByRefId(refIdValue:string):Promise<any>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
