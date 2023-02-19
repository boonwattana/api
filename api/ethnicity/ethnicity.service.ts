import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateEthnicityDto, EthnicityDto, SearchEthnicityDto, UpdateEthnicityDto } from './ethnicity.dto';
import { Ethnicity, VwEthnicityDropdown, VwEthnicityItem, VwEthnicityList } from './ethnicity.entity';

@Injectable()
export class EthnicityService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Ethnicity[] = []
        data.forEach(el=>{
            dataBulkInsert.push({...el})
        })
        return this.ethnicityRepository.save(
            this.ethnicityRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwEthnicityItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(Ethnicity)
        private readonly ethnicityRepository: Repository<Ethnicity>,
        @InjectRepository(VwEthnicityList)
        private readonly vwEthnicityRepository: Repository<VwEthnicityList>,
        @InjectRepository(VwEthnicityItem)
        private readonly itemRepository:Repository<VwEthnicityItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchEthnicityDto):Promise<SearchResult<VwEthnicityList>>{
        const builder = this.createQueryBuider<VwEthnicityList>(dto,this.vwEthnicityRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwEthnicityList>(dto.paginator,count,data);
    }
    async create(dto:CreateEthnicityDto,req:CustomRequest):Promise<Ethnicity>{        
        const en = this.toCreateModel(dto,req) as Ethnicity  
        return this.ethnicityRepository.save(
            this.ethnicityRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateEthnicityDto,req:CustomRequest):Promise<EthnicityDto>{
        const m = await this.ethnicityRepository.findOne({where:{id:id}})
        return this.ethnicityRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<EthnicityDto>{
        let m = await this.ethnicityRepository.findOne({where:{id:id}})
        return this.ethnicityRepository.softRemove(
            await this.ethnicityRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
