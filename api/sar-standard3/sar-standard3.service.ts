import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarStandard3Dto, SarStandard3Dto, SearchSarStandard3Dto, UpdateSarStandard3Dto } from './sar-standard3.dto';
import { SarStandard3, VwSarStandard3Dropdown, VwSarStandard3Item, VwSarStandard3List } from './sar-standard3.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarStandard3Service extends BaseService {

    constructor(
        @InjectRepository(SarStandard3)
        private readonly sarstandard3Repository: Repository<SarStandard3>,
        @InjectRepository(VwSarStandard3List)
        private readonly vwSarStandard3Repository: Repository<VwSarStandard3List>,
        @InjectRepository(VwSarStandard3Item)
        private readonly itemRepository:Repository<VwSarStandard3Item>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarStandard3Dto):Promise<SearchResult<VwSarStandard3List>>{
        const builder = this.createQueryBuider<VwSarStandard3List>(dto,this.vwSarStandard3Repository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarStandard3List>(dto.paginator,count,data);
    }
    async create(dto:CreateSarStandard3Dto,req:CustomRequest):Promise<SarStandard3>{        
        const en = this.toCreateModel(dto,req) as SarStandard3  
        return await this.sarstandard3Repository.save(
            this.sarstandard3Repository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarStandard3Dto,req:CustomRequest):Promise<SarStandard3Dto>{
        const m = await this.sarstandard3Repository.findOne({where:{id:id}})
        return await this.sarstandard3Repository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarStandard3Dto>{
        let m = await this.sarstandard3Repository.findOne({where:{id:id}})
        return await this.sarstandard3Repository.softRemove(
            await this.sarstandard3Repository.save(
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
