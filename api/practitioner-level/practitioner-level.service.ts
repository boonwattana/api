import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreatePractitionerLevelDto, PractitionerLevelDto, SearchPractitionerLevelDto, UpdatePractitionerLevelDto } from './practitioner-level.dto';
import { PractitionerLevel, VwPractitionerLevelDropdown, VwPractitionerLevelItem, VwPractitionerLevelList } from './practitioner-level.entity';

@Injectable()
export class PractitionerLevelService extends BaseService {
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwPractitionerLevelItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
        return exportExcel(data)
      }
      async import(data: any[]): Promise<any> {        
        const dataBulkInsert:PractitionerLevel[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.practitionerlevelRepository.save(
            this.practitionerlevelRepository.create(dataBulkInsert)
        )
    }
    constructor(
        @InjectRepository(PractitionerLevel)
        private readonly practitionerlevelRepository: Repository<PractitionerLevel>,
        @InjectRepository(VwPractitionerLevelList)
        private readonly vwPractitionerLevelRepository: Repository<VwPractitionerLevelList>,
        @InjectRepository(VwPractitionerLevelItem)
        private readonly itemRepository:Repository<VwPractitionerLevelItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchPractitionerLevelDto):Promise<SearchResult<VwPractitionerLevelList>>{
        const builder = this.createQueryBuider<VwPractitionerLevelList>(dto,this.vwPractitionerLevelRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwPractitionerLevelList>(dto.paginator,count,data);
    }
    async create(dto:CreatePractitionerLevelDto,req:CustomRequest):Promise<PractitionerLevel>{        
        const en = this.toCreateModel(dto,req) as PractitionerLevel  
        return this.practitionerlevelRepository.save(
            this.practitionerlevelRepository.create(en)
        );
    }
    async update(id:number,dto:UpdatePractitionerLevelDto,req:CustomRequest):Promise<PractitionerLevelDto>{
        const m = await this.practitionerlevelRepository.findOne({where:{id:id}})
        return this.practitionerlevelRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<PractitionerLevelDto>{
        let m = await this.practitionerlevelRepository.findOne({where:{id:id}})
        return this.practitionerlevelRepository.softRemove(
            await this.practitionerlevelRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
