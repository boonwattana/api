import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { Repository } from 'typeorm';
import { CreateActivityStudentDto, ActivityStudentDto, SearchActivityStudentDto, UpdateActivityStudentDto } from './activity-student.dto';
import { ActivityStudent, VwActivityStudentDropdown, VwActivityStudentItem, VwActivityStudentList } from './activity-student.entity';

@Injectable()
export class ActivityStudentService extends BaseService {
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwActivityStudentItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
        return exportExcel(data)
      }
      async import(data: any[]): Promise<any> {        
        const dataBulkInsert:ActivityStudent[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.activitystudentRepository.save(
            this.activitystudentRepository.create(dataBulkInsert)
        )
    }
    constructor(
        @InjectRepository(ActivityStudent)
        private readonly activitystudentRepository: Repository<ActivityStudent>,
        @InjectRepository(VwActivityStudentList)
        private readonly vwActivityStudentRepository: Repository<VwActivityStudentList>,
        @InjectRepository(VwActivityStudentItem)
        private readonly itemRepository:Repository<VwActivityStudentItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchActivityStudentDto):Promise<SearchResult<VwActivityStudentList>>{
        const builder = this.createQueryBuider<VwActivityStudentList>(dto,this.vwActivityStudentRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwActivityStudentList>(dto.paginator,count,data);
    }
    async create(dto:CreateActivityStudentDto,req:CustomRequest):Promise<ActivityStudent>{        
        const en = this.toCreateModel(dto,req) as ActivityStudent  
        return this.activitystudentRepository.save(
            this.activitystudentRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateActivityStudentDto,req:CustomRequest):Promise<ActivityStudentDto>{
        const m = await this.activitystudentRepository.findOne({where:{id:id}})
        return this.activitystudentRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<ActivityStudentDto>{
        let m = await this.activitystudentRepository.findOne({where:{id:id}})
        return this.activitystudentRepository.softRemove(
            await this.activitystudentRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
