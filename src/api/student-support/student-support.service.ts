import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { In, Repository } from 'typeorm';
import { CreateStudentSupportDto, StudentSupportDto, SearchStudentSupportDto, UpdateStudentSupportDto, SearchStudentExistDto } from './student-support.dto';
import { StudentHasSupport, StudentSupport, VwHasStudentList, VwStudentSupportDropdown, VwStudentSupportItem, VwStudentSupportList } from './student-support.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { SearchClassroomDto } from '../classroom/classroom.dto';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { SearchClassroomTypeDto } from '../classroom-type/classroom-type.dto';
import { SearchStudentDto } from '../student/student.dto';
import { VwStudentList } from '../student/student.entity';
import { StudentService } from '../student/student.service';
import { YearTermService } from '../year-term/year-term.service';
import { getDateLabel } from 'src/core/shared/functions';

@Injectable()
export class StudentSupportService extends BaseService {
    async findExist(dto: SearchStudentExistDto): Promise<boolean> {
    const count = await this.studentHasSupportRepository.count({where:{studentId:dto.studentId,studentSupportId:dto.id}})
    if(count == 0){
    return true
    }else{
        return false
    }
  }
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:StudentSupport[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.studentsupportRepository.save(
            this.studentsupportRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwStudentSupportList>(dto,this.vwStudentSupportRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'วันที่ทำกิจกรรม':getDateLabel(m.startDate),
               'วันที่สิ้นสุดกิจกรรม':getDateLabel(m.endDate),
               'กิจกรรมที่เข้าร่วม':m.activityName,
               'ศักยภาพด้าน':m.performance ,
               'หน่วยงานที่จัด':m.department,
               'ผลกิจกรรม':m.result ,
               'ชื่อครู':m.teacherValue ,

            }
        })
        return exportExcel(filterData)
      }
    constructor(
        @InjectRepository(StudentSupport)
        private readonly studentsupportRepository: Repository<StudentSupport>,
        @InjectRepository(VwStudentSupportList)
        private readonly vwStudentSupportRepository: Repository<VwStudentSupportList>,
        @InjectRepository(VwStudentSupportItem)
        private readonly itemRepository:Repository<VwStudentSupportItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        @InjectRepository(StudentHasSupport)
        private readonly studentHasSupportRepository:Repository<StudentHasSupport>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        @InjectRepository(VwHasStudentList)
        private readonly vwHasStudentRepository:Repository<VwHasStudentList>,
        private readonly studentService:StudentService,
        
        private readonly dropdownService: DropdownService,
        private readonly yearTermService:YearTermService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchStudentSupportDto):Promise<SearchResult<VwStudentSupportList>>{
        const builder = this.createQueryBuider<VwStudentSupportList>(dto,this.vwStudentSupportRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwStudentSupportList>(dto.paginator,count,data);
    }
    async listStudent(dto:SearchStudentDto):Promise<SearchResult<VwStudentList>>{
        return this.studentService.list(dto)
        // const builder = this.createQueryBuider<VwStudentList>(dto,this.vwStudentRepository)
        // const [data, count] = await builder
        // .getManyAndCount();
        // return this.toSearchResult<VwStudentList>(dto.paginator,count,data);
    }
    async listHasStudent(dto:SearchStudentDto):Promise<SearchResult<VwHasStudentList>>{
        const builder = this.createQueryBuider<VwHasStudentList>(dto,this.vwHasStudentRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwHasStudentList>(dto.paginator,count,data);
    }
    async create(dto:CreateStudentSupportDto,req:CustomRequest):Promise<StudentSupport>{   
        const yearTerm = await this.yearTermService.findCurrrentTerm()     
        const en = this.toCreateModel(dto,req) as StudentSupport  
        en.yearTermId = yearTerm?.id
        const result = await this.studentsupportRepository.save(
            this.studentsupportRepository.create(en)
        );
        await this.createHasStudent(dto.studentIdAdd,result.id)
        return result
    }
    async update(id:number,dto:UpdateStudentSupportDto,req:CustomRequest):Promise<StudentSupportDto>{
        console.log('dto',dto);
        
        const m = await this.studentsupportRepository.findOne({where:{id:id}})
        if(dto.studentIdAdd){
            await this.createHasStudent(dto.studentIdAdd,id)
        }
        if(dto.studentIdRemove){
            console.log('remove');
            
            await this.studentHasSupportRepository.softRemove(
                await this.studentHasSupportRepository.find({where:{studentId:In(dto.studentIdRemove), studentSupportId:id}})
            )
        }
        return await this.studentsupportRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<StudentSupportDto>{
        let m = await this.studentsupportRepository.findOne({where:{id:id}})
       await this.studentHasSupportRepository.softRemove(
            await this.studentHasSupportRepository.find({where:{studentSupportId:id}})
        )
        return await this.studentsupportRepository.softRemove(
            await this.studentsupportRepository.save(
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
      async classroomTypeDropdown(dto: SearchClassroomTypeDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }
    async createHasStudent(studentIds:string[],supportId:number){

        const dataList:StudentHasSupport[] = studentIds.map(m=>{
            return {
                id:undefined,
                studentId:+m,
                studentSupportId:supportId
            }
        })
        await this.studentHasSupportRepository.save(
            this.studentHasSupportRepository.create(dataList)
        )
    }
}
