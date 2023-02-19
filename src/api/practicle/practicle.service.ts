import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreatePracticleDto, PracticleDto, SearchPracticleDto, UpdatePracticleDto } from './practicle.dto';
import { Practicle, VwPracticleDropdown, VwPracticleItem, VwPracticleList } from './practicle.entity';

@Injectable()
export class PracticleService extends BaseService {
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwPracticleItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
        return exportExcel(data)
      }
      async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Practicle[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.practicleRepository.save(
            this.practicleRepository.create(dataBulkInsert)
        )
    }
    constructor(
        @InjectRepository(Practicle)
        private readonly practicleRepository: Repository<Practicle>,
        @InjectRepository(VwPracticleList)
        private readonly vwPracticleRepository: Repository<VwPracticleList>,
        @InjectRepository(VwPracticleItem)
        private readonly itemRepository:Repository<VwPracticleItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchPracticleDto):Promise<SearchResult<VwPracticleList>>{
        const builder = this.createQueryBuider<VwPracticleList>(dto,this.vwPracticleRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwPracticleList>(dto.paginator,count,data);
    }
    async create(dto:CreatePracticleDto,req:CustomRequest):Promise<Practicle>{        
        const en = this.toCreateModel(dto,req) as Practicle  
        return this.practicleRepository.save(
            this.practicleRepository.create(en)
        );
    }
    async update(id:number,dto:UpdatePracticleDto,req:CustomRequest):Promise<PracticleDto>{
        const m = await this.practicleRepository.findOne({where:{id:id}})
        return this.practicleRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<PracticleDto>{
        let m = await this.practicleRepository.findOne({where:{id:id}})
        return this.practicleRepository.softRemove(
            await this.practicleRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
