import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateNationalityDto, NationalityDto, SearchNationalityDto, UpdateNationalityDto } from './nationality.dto';
import { Nationality, VwNationalityDropdown, VwNationalityItem, VwNationalityList } from './nationality.entity';

@Injectable()
export class NationalityService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Nationality[] = []
        data.forEach(el=>{
            dataBulkInsert.push({...el})
        })
        return this.nationalityRepository.save(
            this.nationalityRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwNationalityItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(Nationality)
        private readonly nationalityRepository: Repository<Nationality>,
        @InjectRepository(VwNationalityList)
        private readonly vwNationalityRepository: Repository<VwNationalityList>,
        @InjectRepository(VwNationalityItem)
        private readonly itemRepository:Repository<VwNationalityItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchNationalityDto):Promise<SearchResult<VwNationalityList>>{
        const builder = this.createQueryBuider<VwNationalityList>(dto,this.vwNationalityRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwNationalityList>(dto.paginator,count,data);
    }
    async create(dto:CreateNationalityDto,req:CustomRequest):Promise<Nationality>{        
        const en = this.toCreateModel(dto,req) as Nationality  
        return this.nationalityRepository.save(
            this.nationalityRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateNationalityDto,req:CustomRequest):Promise<NationalityDto>{
        const m = await this.nationalityRepository.findOne({where:{id:id}})
        return this.nationalityRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<NationalityDto>{
        let m = await this.nationalityRepository.findOne({where:{id:id}})
        return this.nationalityRepository.softRemove(
            await this.nationalityRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
