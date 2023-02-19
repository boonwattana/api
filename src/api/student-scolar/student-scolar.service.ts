import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateStudentScolarDto, StudentScolarDto, SearchStudentScolarDto, UpdateStudentScolarDto } from './student-scolar.dto';
import { StudentScolar, VwStudentScolarDropdown, VwStudentScolarItem, VwStudentScolarList } from './student-scolar.entity';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { SearchStudentDto } from 'src/api/student/student.dto';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { SearchClassroomDto } from '../classroom/classroom.dto';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';

@Injectable()
export class StudentScolarService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:StudentScolar[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.studentscolarRepository.save(
            this.studentscolarRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwStudentScolarList>(dto,this.vwStudentScolarRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'นักเรียน':m.studentValue,
               'ชื่อทุนการศึกษา':m.name,
               'จำนวน(บาท)':m.amount ,
               'ปี':m.year,
               'ภาคเรียน':m.inTerm ,
               'ได้รับจาก':m.getFrom ,

            }
        })
        return exportExcel(filterData)
      }
    constructor(
        @InjectRepository(StudentScolar)
        private readonly studentscolarRepository: Repository<StudentScolar>,
        @InjectRepository(VwStudentScolarList)
        private readonly vwStudentScolarRepository: Repository<VwStudentScolarList>,
        @InjectRepository(VwStudentScolarItem)
        private readonly itemRepository:Repository<VwStudentScolarItem>,
        @InjectRepository(VwStudentDropdown)
        private readonly vwDropdownStudentRepository:Repository<VwStudentDropdown>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async studentDropdown(dto: SearchStudentDto):Promise<SelectItems[]> {
        return await this.dropdownService.studentDropdown(dto,this.vwDropdownStudentRepository);
      }
    async list(dto:SearchStudentScolarDto):Promise<SearchResult<VwStudentScolarList>>{
        const builder = this.createQueryBuider<VwStudentScolarList>(dto,this.vwStudentScolarRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwStudentScolarList>(dto.paginator,count,data);
    }
    async create(dto:CreateStudentScolarDto,req:CustomRequest):Promise<StudentScolar>{        
        const en = this.toCreateModel(dto,req) as StudentScolar  
        return await this.studentscolarRepository.save(
            this.studentscolarRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateStudentScolarDto,req:CustomRequest):Promise<StudentScolarDto>{
        const m = await this.studentscolarRepository.findOne({where:{id:id}})
        return await this.studentscolarRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<StudentScolarDto>{
        let m = await this.studentscolarRepository.findOne({where:{id:id}})
        return await this.studentscolarRepository.softRemove(
            await this.studentscolarRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async classroomDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomDropdown(dto,this.vwDropdownClassroomRepository);
      }
      async classroomTypeDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }
}
