import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateProvinceDto, ProvinceDto, SearchProvinceDto, UpdateProvinceDto } from './province.dto';
import { Province, VwProvinceDropdown, VwProvinceItem, VwProvinceList } from './province.entity';
import { VwCountryDropdown } from 'src/api/country/country.entity';
import { SearchCountryDto } from 'src/api/country/country.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';

@Injectable()
export class ProvinceService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Province[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
           
        })
        return this.provinceRepository.save(
            this.provinceRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwProvinceItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(Province)
        private readonly provinceRepository: Repository<Province>,
        @InjectRepository(VwProvinceList)
        private readonly vwProvinceRepository: Repository<VwProvinceList>,
        @InjectRepository(VwProvinceItem)
        private readonly itemRepository:Repository<VwProvinceItem>,
        @InjectRepository(VwCountryDropdown)
        private readonly vwDropdownCountryRepository:Repository<VwCountryDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async countryDropdown(dto: SearchCountryDto):Promise<SelectItems[]> {
        return this.dropdownService.countryDropdown(dto,this.vwDropdownCountryRepository);
      }
    async list(dto:SearchProvinceDto):Promise<SearchResult<VwProvinceList>>{
        const builder = this.createQueryBuider<VwProvinceList>(dto,this.vwProvinceRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwProvinceList>(dto.paginator,count,data);
    }
    async create(dto:CreateProvinceDto,req:CustomRequest):Promise<Province>{  
        dto.id = +dto.code  
        const en = this.toCreateModel(dto,req) as Province  
        return this.provinceRepository.save(
            this.provinceRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateProvinceDto,req:CustomRequest):Promise<ProvinceDto>{
        const m = await this.provinceRepository.findOne({where:{id:id}})
        return this.provinceRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<ProvinceDto>{
        let m = await this.provinceRepository.findOne({where:{id:id}})
        return this.provinceRepository.softRemove(
            await this.provinceRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
