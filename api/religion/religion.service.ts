import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateReligionDto, ReligionDto, SearchReligionDto, UpdateReligionDto } from './religion.dto';
import { Religion, VwReligionDropdown, VwReligionItem, VwReligionList } from './religion.entity';

@Injectable()
export class ReligionService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Religion[] = []
        data.forEach(el=>{
            dataBulkInsert.push({...el})
        })
        return this.religionRepository.save(
            this.religionRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwReligionItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(Religion)
        private readonly religionRepository: Repository<Religion>,
        @InjectRepository(VwReligionList)
        private readonly vwReligionRepository: Repository<VwReligionList>,
        @InjectRepository(VwReligionItem)
        private readonly itemRepository:Repository<VwReligionItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchReligionDto):Promise<SearchResult<VwReligionList>>{
        const builder = this.createQueryBuider<VwReligionList>(dto,this.vwReligionRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwReligionList>(dto.paginator,count,data);
    }
    async create(dto:CreateReligionDto,req:CustomRequest):Promise<Religion>{        
        const en = this.toCreateModel(dto,req) as Religion  
        return this.religionRepository.save(
            this.religionRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateReligionDto,req:CustomRequest):Promise<ReligionDto>{
        const m = await this.religionRepository.findOne({where:{id:id}})
        return this.religionRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<ReligionDto>{
        let m = await this.religionRepository.findOne({where:{id:id}})
        return this.religionRepository.softRemove(
            await this.religionRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
