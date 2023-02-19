import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateAliveWithDto, AliveWithDto, SearchAliveWithDto, UpdateAliveWithDto } from './alive-with.dto';
import { AliveWith, VwAliveWithDropdown, VwAliveWithItem, VwAliveWithList } from './alive-with.entity';

@Injectable()
export class AliveWithService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:AliveWith[] = []
        data.forEach(el=>{
            dataBulkInsert.push({...el})
        })
        return this.alivewithRepository.save(
            this.alivewithRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwAliveWithItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(AliveWith)
        private readonly alivewithRepository: Repository<AliveWith>,
        @InjectRepository(VwAliveWithList)
        private readonly vwAliveWithRepository: Repository<VwAliveWithList>,
        @InjectRepository(VwAliveWithItem)
        private readonly itemRepository:Repository<VwAliveWithItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchAliveWithDto):Promise<SearchResult<VwAliveWithList>>{
        const builder = this.createQueryBuider<VwAliveWithList>(dto,this.vwAliveWithRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwAliveWithList>(dto.paginator,count,data);
    }
    async create(dto:CreateAliveWithDto,req:CustomRequest):Promise<AliveWith>{        
        const en = this.toCreateModel(dto,req) as AliveWith  
        return this.alivewithRepository.save(
            this.alivewithRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateAliveWithDto,req:CustomRequest):Promise<AliveWithDto>{
        const m = await this.alivewithRepository.findOne({where:{id:id}})
        return this.alivewithRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<AliveWithDto>{
        let m = await this.alivewithRepository.findOne({where:{id:id}})
        return this.alivewithRepository.softRemove(
            await this.alivewithRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
