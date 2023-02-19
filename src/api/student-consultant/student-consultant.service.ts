import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateStudentConsultantDto, StudentConsultantDto, SearchStudentConsultantDto, UpdateStudentConsultantDto } from './student-consultant.dto';
import { StudentConsultant, VwStudentConsultantDropdown, VwStudentConsultantItem, VwStudentConsultantList } from './student-consultant.entity';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { SearchStudentDto } from 'src/api/student/student.dto';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { YearTermService } from '../year-term/year-term.service';
import { getDateLabel, getLabelEnum } from 'src/core/shared/functions';
import { CONSULTANT_TYPE, RESULT_TYPE, SENT_TYPE, STORY_TYPE } from 'src/core/shared/constans/dropdown-constanst';
import { SearchClassroomDto } from '../classroom/classroom.dto';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';

@Injectable()
export class StudentConsultantService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:StudentConsultant[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.studentconsultantRepository.save(
            this.studentconsultantRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwStudentConsultantList>(dto,this.vwStudentConsultantRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'ชื่อนักเรียน':m.studentValue,
               'วันที่ให้คำปรึกษา':getDateLabel(m.activityDate) ,
               'เวลาที่ให้คำปรึกษา':m.startTime ,
               'เวลาที่สิ้นสุดให้คำปรึกษา':m.endTime,
               'เรื่องที่ให้คำปรึกษา':getLabelEnum(STORY_TYPE,m.storyType)  ,
               'ผลการให้คำปรึกษา':getLabelEnum(RESULT_TYPE,m.resultType)  ,
               'การส่งต่อ':getLabelEnum(SENT_TYPE,m.sentType) ,
    
            }
        })
        return exportExcel(filterData)
      }
    constructor(
        @InjectRepository(StudentConsultant)
        private readonly studentconsultantRepository: Repository<StudentConsultant>,
        @InjectRepository(VwStudentConsultantList)
        private readonly vwStudentConsultantRepository: Repository<VwStudentConsultantList>,
        @InjectRepository(VwStudentConsultantItem)
        private readonly itemRepository:Repository<VwStudentConsultantItem>,
        @InjectRepository(VwStudentDropdown)
        private readonly vwDropdownStudentRepository:Repository<VwStudentDropdown>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        private readonly dropdownService: DropdownService,
        private readonly yearTrmService:YearTermService
        ){
        super()
    }
    async studentDropdown(dto: SearchStudentDto):Promise<SelectItems[]> {
        return await this.dropdownService.studentDropdown(dto,this.vwDropdownStudentRepository);
      }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchStudentConsultantDto):Promise<SearchResult<VwStudentConsultantList>>{
        const builder = this.createQueryBuider<VwStudentConsultantList>(dto,this.vwStudentConsultantRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwStudentConsultantList>(dto.paginator,count,data);
    }
    async create(dto:CreateStudentConsultantDto,req:CustomRequest):Promise<StudentConsultant>{   
        const yearTerm = await this.yearTrmService.findCurrrentTerm()     
        const en = this.toCreateModel(dto,req) as StudentConsultant  
        en.yearTermId = yearTerm?.id
        return await this.studentconsultantRepository.save(
            this.studentconsultantRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateStudentConsultantDto,req:CustomRequest):Promise<StudentConsultantDto>{
        const m = await this.studentconsultantRepository.findOne({where:{id:id}})
        return await this.studentconsultantRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<StudentConsultantDto>{
        let m = await this.studentconsultantRepository.findOne({where:{id:id}})
        return await this.studentconsultantRepository.softRemove(
            await this.studentconsultantRepository.save(
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
