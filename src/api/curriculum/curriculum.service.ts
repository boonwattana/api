import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateCurriculumDto, CurriculumDto, SearchCurriculumDto, UpdateCurriculumDto } from './curriculum.dto';
import { Curriculum, VwCurriculumDropdown, VwCurriculumItem, VwCurriculumList } from './curriculum.entity';

@Injectable()
export class CurriculumService extends BaseService {
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwCurriculumItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
        return exportExcel(data)
      }
      async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Curriculum[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.curriculumRepository.save(
            this.curriculumRepository.create(dataBulkInsert)
        )
    }
    constructor(
        @InjectRepository(Curriculum)
        private readonly curriculumRepository: Repository<Curriculum>,
        @InjectRepository(VwCurriculumList)
        private readonly vwCurriculumRepository: Repository<VwCurriculumList>,
        @InjectRepository(VwCurriculumItem)
        private readonly itemRepository:Repository<VwCurriculumItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchCurriculumDto):Promise<SearchResult<VwCurriculumList>>{
        const builder = this.createQueryBuider<VwCurriculumList>(dto,this.vwCurriculumRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwCurriculumList>(dto.paginator,count,data);
    }
    async create(dto:CreateCurriculumDto,req:CustomRequest):Promise<Curriculum>{        
        const en = this.toCreateModel(dto,req) as Curriculum  
        return this.curriculumRepository.save(
            this.curriculumRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateCurriculumDto,req:CustomRequest):Promise<CurriculumDto>{
        const m = await this.curriculumRepository.findOne({where:{id:id}})
        return this.curriculumRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<CurriculumDto>{
        let m = await this.curriculumRepository.findOne({where:{id:id}})
        return this.curriculumRepository.softRemove(
            await this.curriculumRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
