import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateParentStatusDto, ParentStatusDto, SearchParentStatusDto, UpdateParentStatusDto } from './parent-status.dto';
import { ParentStatus, VwParentStatusDropdown, VwParentStatusItem, VwParentStatusList } from './parent-status.entity';

@Injectable()
export class ParentStatusService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:ParentStatus[] = []
        data.forEach(el=>{
            dataBulkInsert.push({...el})
        })
        return this.parentstatusRepository.save(
            this.parentstatusRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwParentStatusItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(ParentStatus)
        private readonly parentstatusRepository: Repository<ParentStatus>,
        @InjectRepository(VwParentStatusList)
        private readonly vwParentStatusRepository: Repository<VwParentStatusList>,
        @InjectRepository(VwParentStatusItem)
        private readonly itemRepository:Repository<VwParentStatusItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchParentStatusDto):Promise<SearchResult<VwParentStatusList>>{
        const builder = this.createQueryBuider<VwParentStatusList>(dto,this.vwParentStatusRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwParentStatusList>(dto.paginator,count,data);
    }
    async create(dto:CreateParentStatusDto,req:CustomRequest):Promise<ParentStatus>{        
        const en = this.toCreateModel(dto,req) as ParentStatus  
        return this.parentstatusRepository.save(
            this.parentstatusRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateParentStatusDto,req:CustomRequest):Promise<ParentStatusDto>{
        const m = await this.parentstatusRepository.findOne({where:{id:id}})
        return this.parentstatusRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<ParentStatusDto>{
        let m = await this.parentstatusRepository.findOne({where:{id:id}})
        return this.parentstatusRepository.softRemove(
            await this.parentstatusRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
