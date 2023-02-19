import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateStressDto, StressDto, SearchStressDto, UpdateStressDto } from './stress.dto';
import { Stress, VwStressDropdown, VwStressItem, VwStressList } from './stress.entity';
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
import { getDateLabel, getStatusLabel } from 'src/core/shared/functions';

@Injectable()
export class StressService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:Stress[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.stressRepository.save(
            this.stressRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwStressList>(dto,this.vwStressRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'รหัสประจำตัว':m.studentCode,
               'ชื่อสกุล':m.studentValue,
               'ชั้นเรียน':m.typeName,
               'ห้อง':m.room,
               'ผลประเมินความเครียด':this.getStress(m.sumValue) ,
               'วันที่ทำแบบประเมิน':getDateLabel(m.updatedAt) ,
               'สถานะ':getStatusLabel(m.sumValue) ,

            }
        })
        console.log(filterData);
        
        return exportExcel(filterData)
      }
      getStress(value: any) {
        let des = "-";
        // if(value == 0){
        //   des = 'ไม่มี'
        // }
        if (value > 0) {
          des = "ระดับความเครียดน้อย";
        }
        if (value > 23) {
          des = "ระดับความเครียดปานกลาง";
        }
        if (value > 41) {
          des = "มีความเครียดในระดับสูง";
        }
        if (value > 61) {
          des = "มีระดับความเครียดรุนแรง";
        }
        return des;
      }
    constructor(
        @InjectRepository(Stress)
        private readonly stressRepository: Repository<Stress>,
        @InjectRepository(VwStressList)
        private readonly vwStressRepository: Repository<VwStressList>,
        @InjectRepository(VwStressItem)
        private readonly itemRepository:Repository<VwStressItem>,
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
    async list(dto:SearchStressDto):Promise<SearchResult<VwStressList>>{
        const builder = this.createQueryBuider<VwStressList>(dto,this.vwStressRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwStressList>(dto.paginator,count,data);
    }
    async create(dto:CreateStressDto,req:CustomRequest):Promise<Stress>{        
        const en = this.toCreateModel(dto,req) as Stress  
        return await this.stressRepository.save(
            this.stressRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateStressDto,req:CustomRequest):Promise<StressDto>{
     //   console.log('update',id,dto);
        
        const m = await this.stressRepository.findOne({where:{id:dto.id}})
        return await this.stressRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<StressDto>{
        let m = await this.stressRepository.findOne({where:{id:id}})
        return await this.stressRepository.softRemove(
            await this.stressRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        const yearTerm = await this.yearTermService.findCurrrentTerm()

        const model = await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearTerm.id}})
      //  console.log(model);
        
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


