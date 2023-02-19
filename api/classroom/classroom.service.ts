import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateClassroomDto, ClassroomDto, SearchClassroomDto, UpdateClassroomDto } from './classroom.dto';
import { Classroom, VwClassroomDropdown, VwClassroomItem, VwClassroomList } from './classroom.entity';
import { VwClassroomTypeDropdown } from 'src/api/classroom-type/classroom-type.entity';
import { SearchClassroomTypeDto } from 'src/api/classroom-type/classroom-type.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';

@Injectable()
export class ClassroomService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Classroom[] = []
        data.forEach(el=>{
            dataBulkInsert.push({...el})
        })
        return this.classroomRepository.save(
            this.classroomRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwClassroomItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
      return exportExcel(data)
    }

    constructor(
        @InjectRepository(Classroom)
        private readonly classroomRepository: Repository<Classroom>,
        @InjectRepository(VwClassroomList)
        private readonly vwClassroomRepository: Repository<VwClassroomList>,
        @InjectRepository(VwClassroomItem)
        private readonly itemRepository:Repository<VwClassroomItem>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async classroomTypeDropdown(dto: SearchClassroomTypeDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }
    async list(dto:SearchClassroomDto):Promise<SearchResult<VwClassroomList>>{
        const builder = this.createQueryBuider<VwClassroomList>(dto,this.vwClassroomRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwClassroomList>(dto.paginator,count,data);
    }
    async create(dto:CreateClassroomDto,req:CustomRequest):Promise<Classroom>{        
        const en = this.toCreateModel(dto,req) as Classroom  
        return this.classroomRepository.save(
            this.classroomRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateClassroomDto,req:CustomRequest):Promise<ClassroomDto>{
        const m = await this.classroomRepository.findOne({where:{id:id}})
        return this.classroomRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<ClassroomDto>{
        let m = await this.classroomRepository.findOne({where:{id:id}})
        return this.classroomRepository.softRemove(
            await this.classroomRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
