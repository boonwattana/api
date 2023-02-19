import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateEmotionalQuotientDto, EmotionalQuotientDto, SearchEmotionalQuotientDto, UpdateEmotionalQuotientDto } from './emotional-quotient.dto';
import { EmotionalQuotient, VwEmotionalQuotientDropdown, VwEmotionalQuotientItem, VwEmotionalQuotientList } from './emotional-quotient.entity';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { SearchStudentDto } from 'src/api/student/student.dto';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { SearchYearTermDto } from 'src/api/year-term/year-term.dto';
import { SearchClassroomDto } from '../classroom/classroom.dto';
import { StudentService } from '../student/student.service';
import { YearTermService } from '../year-term/year-term.service';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { getStatusLabel } from 'src/core/shared/functions';

@Injectable()
export class EmotionalQuotientService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:EmotionalQuotient[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.emotionalquotientRepository.save(
            this.emotionalquotientRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwEmotionalQuotientList>(dto,this.vwEmotionalQuotientRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'รหัสประจำตัว':m.studentCode,
               'ชื่อนักเรียน':m.studentValue,
               'ชั้นเรียน':m.typeName,
               'ห้อง':m.room,
               'องค์ประกอบดี':this.getEqGood(m.eqGood) ,
               'องค์ประกอบเก่ง':this.getEqGreet(m.eqGreet) ,
               'องค์ประกอบสุข':this.getEqHappy(m.eqHappy) ,
               'คะแนน EQ รวม':this.getEqSum(m.eqSum) ,
               'สถานะ':getStatusLabel(m.eqSum),
            }
        })
        return exportExcel(filterData)
      }
      getEqGreet(value: any) {
        let des = "-";
        if (value > 0 && value < 45) {
          des = "ต่ำกว่าปกติ";
        }
        if (value >= 45 && value <= 57) {
          des = "เกณฑ์ปกติ";
        }
        if (value > 170) {
          des = "สูงกว่าปกติ";
        }
        return des;
      }
      getEqGood(value: any) {
        let des = "-";
        if (value > 0 && value < 48) {
          des = "ต่ำกว่าปกติ";
        }
        if (value >= 48 && value <= 58) {
          des = "เกณฑ์ปกติ";
        }
        if (value > 170) {
          des = "สูงกว่าปกติ";
        }
        return des;
      }
      getEqHappy(value: any) {
        let des = "-";
        if (value > 0 && value < 40) {
          des = "ต่ำกว่าปกติ";
        }
        if (value >= 40 && value <= 55) {
          des = "เกณฑ์ปกติ";
        }
        if (value > 55) {
          des = "สูงกว่าปกติ";
        }
        return des;
      }
      getEqSum(value: any) {
        let des = "-";
        if (value > 0 && value < 140) {
          des = "ต่ำกว่าปกติ";
        }
        if (value >= 140 && value <= 140) {
          des = "เกณฑ์ปกติ";
        }
        if (value > 170) {
          des = "สูงกว่าปกติ";
        }
        return des;
      }
    constructor(
        @InjectRepository(EmotionalQuotient)
        private readonly emotionalquotientRepository: Repository<EmotionalQuotient>,
        @InjectRepository(VwEmotionalQuotientList)
        private readonly vwEmotionalQuotientRepository: Repository<VwEmotionalQuotientList>,
        @InjectRepository(VwEmotionalQuotientItem)
        private readonly itemRepository:Repository<VwEmotionalQuotientItem>,
        @InjectRepository(VwStudentDropdown)
        private readonly vwDropdownStudentRepository:Repository<VwStudentDropdown>,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwDropdownYearTermRepository:Repository<VwYearTermDropdown>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        private readonly dropdownService: DropdownService,
        private readonly studentService:StudentService,
        private readonly yearTermService:YearTermService
        ){
        super()
    }
    async studentDropdown(dto: SearchStudentDto):Promise<SelectItems[]> {
        return await this.dropdownService.studentDropdown(dto,this.vwDropdownStudentRepository);
      }
    async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
      }
    async list(dto:SearchEmotionalQuotientDto):Promise<SearchResult<VwEmotionalQuotientList>>{
        const builder = this.createQueryBuider<VwEmotionalQuotientList>(dto,this.vwEmotionalQuotientRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwEmotionalQuotientList>(dto.paginator,count,data);
    }
    async create(dto:CreateEmotionalQuotientDto,req:CustomRequest):Promise<EmotionalQuotient>{        
        const en = this.toCreateModel(dto,req) as EmotionalQuotient  
        return await this.emotionalquotientRepository.save(
            this.emotionalquotientRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateEmotionalQuotientDto,req:CustomRequest):Promise<EmotionalQuotientDto>{
        const m = await this.emotionalquotientRepository.findOne({where:{id:dto.id}})
        return await this.emotionalquotientRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<EmotionalQuotientDto>{
        let m = await this.emotionalquotientRepository.findOne({where:{id:id}})
        return await this.emotionalquotientRepository.softRemove(
            await this.emotionalquotientRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        const yearTerm = await this.yearTermService.findCurrrentTerm()

        const model = await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearTerm.id}})
        if(model){
            return {...model,isUpdateMode:true}
        }
        return {studentId:id,yearTermId:yearTerm.id,isUpdateMode:false}
    }
    async itemStudent(id:number):Promise<any>{
        return await this.studentService.item(id)
    }
    async classroomDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomDropdown(dto,this.vwDropdownClassroomRepository);
      }
      async classroomTypeDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }

      async currentTerm() {
        return this.yearTermService.findCurrrentTerm()
     }
}
