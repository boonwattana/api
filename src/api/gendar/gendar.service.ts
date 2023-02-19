import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateGendarDto, GendarDto, SearchGendarDto, UpdateGendarDto } from './gendar.dto';
import { Gendar, VwGendarDropdown, VwGendarItem, VwGendarList } from './gendar.entity';

@Injectable()
export class GendarService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Gendar[] = []
        data.forEach(el=>{
            dataBulkInsert.push({...el})
        })
        return this.gendarRepository.save(
            this.gendarRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwGendarItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(Gendar)
        private readonly gendarRepository: Repository<Gendar>,
        @InjectRepository(VwGendarList)
        private readonly vwGendarRepository: Repository<VwGendarList>,
        @InjectRepository(VwGendarItem)
        private readonly itemRepository:Repository<VwGendarItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchGendarDto):Promise<SearchResult<VwGendarList>>{
        const builder = this.createQueryBuider<VwGendarList>(dto,this.vwGendarRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwGendarList>(dto.paginator,count,data);
    }
    async create(dto:CreateGendarDto,req:CustomRequest):Promise<Gendar>{        
        const en = this.toCreateModel(dto,req) as Gendar  
        return this.gendarRepository.save(
            this.gendarRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateGendarDto,req:CustomRequest):Promise<GendarDto>{
        const m = await this.gendarRepository.findOne({where:{id:id}})
        return this.gendarRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<GendarDto>{
        let m = await this.gendarRepository.findOne({where:{id:id}})
        return this.gendarRepository.softRemove(
            await this.gendarRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
