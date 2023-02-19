import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarStandard4Dto, SarStandard4Dto, SearchSarStandard4Dto, UpdateSarStandard4Dto } from './sar-standard4.dto';
import { SarStandard4, VwSarStandard4Dropdown, VwSarStandard4Item, VwSarStandard4List } from './sar-standard4.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarStandard4Service extends BaseService {

    constructor(
        @InjectRepository(SarStandard4)
        private readonly sarstandard4Repository: Repository<SarStandard4>,
        @InjectRepository(VwSarStandard4List)
        private readonly vwSarStandard4Repository: Repository<VwSarStandard4List>,
        @InjectRepository(VwSarStandard4Item)
        private readonly itemRepository:Repository<VwSarStandard4Item>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarStandard4Dto):Promise<SearchResult<VwSarStandard4List>>{
        const builder = this.createQueryBuider<VwSarStandard4List>(dto,this.vwSarStandard4Repository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarStandard4List>(dto.paginator,count,data);
    }
    async create(dto:CreateSarStandard4Dto,req:CustomRequest):Promise<SarStandard4>{        
        const en = this.toCreateModel(dto,req) as SarStandard4  
        return await this.sarstandard4Repository.save(
            this.sarstandard4Repository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarStandard4Dto,req:CustomRequest):Promise<SarStandard4Dto>{
        const m = await this.sarstandard4Repository.findOne({where:{id:id}})
        return await this.sarstandard4Repository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarStandard4Dto>{
        let m = await this.sarstandard4Repository.findOne({where:{id:id}})
        return await this.sarstandard4Repository.softRemove(
            await this.sarstandard4Repository.save(
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
