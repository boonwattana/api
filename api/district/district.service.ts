import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateDistrictDto, DistrictDto, SearchDistrictDto, UpdateDistrictDto } from './district.dto';
import { District, VwDistrictDropdown, VwDistrictItem, VwDistrictList } from './district.entity';
import { VwProvinceDropdown } from 'src/api/province/province.entity';
import { SearchProvinceDto } from 'src/api/province/province.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';

@Injectable()
export class DistrictService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:District[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.districtRepository.save(
            this.districtRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwDistrictItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(District)
        private readonly districtRepository: Repository<District>,
        @InjectRepository(VwDistrictList)
        private readonly vwDistrictRepository: Repository<VwDistrictList>,
        @InjectRepository(VwDistrictItem)
        private readonly itemRepository:Repository<VwDistrictItem>,
        @InjectRepository(VwProvinceDropdown)
        private readonly vwDropdownProvinceRepository:Repository<VwProvinceDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async provinceDropdown(dto: SearchProvinceDto):Promise<SelectItems[]> {
        return this.dropdownService.provinceDropdown(dto,this.vwDropdownProvinceRepository);
      }
    async list(dto:SearchDistrictDto):Promise<SearchResult<VwDistrictList>>{
        const builder = this.createQueryBuider<VwDistrictList>(dto,this.vwDistrictRepository)
        const [data, count] = await builder
        .getManyAndCount();

        return this.toSearchResult<VwDistrictList>(dto.paginator,count,data);
    }
    async create(dto:CreateDistrictDto,req:CustomRequest):Promise<District>{     
        dto.id = +dto.code     
        const en = this.toCreateModel(dto,req) as District  
        
        return this.districtRepository.save(
            this.districtRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateDistrictDto,req:CustomRequest):Promise<DistrictDto>{
        const m = await this.districtRepository.findOne({where:{id:id}})
        return this.districtRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<DistrictDto>{
        let m = await this.districtRepository.findOne({where:{id:id}})
        return this.districtRepository.softRemove(
            await this.districtRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
