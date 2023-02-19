import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateTeachingScheduleDto, TeachingScheduleDto, SearchTeachingScheduleDto, UpdateTeachingScheduleDto } from './teaching-schedule.dto';
import { TeachingSchedule, VwTeachingScheduleDropdown, VwTeachingScheduleItem, VwTeachingScheduleList } from './teaching-schedule.entity';
import { VwTeacherDropdown, VwTeachingScheduleTeacherList} from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { SearchYearTermDto } from 'src/api/year-term/year-term.dto';
import { YearTermService } from '../year-term/year-term.service';
import { TeacherService } from 'src/api/teacher/teacher.service';
import { VwPractitionerLevelDropdown } from 'src/api/practitioner-level/practitioner-level.entity';
import { SearchPractitionerLevelDto } from "src/api/practitioner-level/practitioner-level.dto";
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';

@Injectable()
export class TeachingScheduleService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:TeachingSchedule[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.teachingscheduleRepository.save(
            this.teachingscheduleRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwTeachingScheduleItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
        return exportExcel(data)
      }
    constructor(
        @InjectRepository(TeachingSchedule)
        private readonly teachingscheduleRepository: Repository<TeachingSchedule>,
        @InjectRepository(VwTeachingScheduleList)
        private readonly vwTeachingScheduleRepository: Repository<VwTeachingScheduleList>,
        @InjectRepository(VwTeachingScheduleTeacherList)
        private readonly vwTeachingScheduleTeacherRepository: Repository<VwTeachingScheduleTeacherList>,
        @InjectRepository(VwTeachingScheduleItem)
        private readonly itemRepository:Repository<VwTeachingScheduleItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        @InjectRepository(VwPractitionerLevelDropdown)
        private readonly vwDropdownPractitionerLevelRepository:Repository<VwPractitionerLevelDropdown>,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwDropdownYearTermRepository:Repository<VwYearTermDropdown>,
        private readonly dropdownService: DropdownService,
        private readonly yearTermService:YearTermService,
        private readonly teacherService:TeacherService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    /*async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
      }*/
    async list(dto:SearchTeachingScheduleDto):Promise<SearchResult<VwTeachingScheduleList>>{
        const builder = this.createQueryBuider<VwTeachingScheduleList>(dto,this.vwTeachingScheduleRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwTeachingScheduleList>(dto.paginator,count,data);
    }
    async create(dto:CreateTeachingScheduleDto,req:CustomRequest):Promise<TeachingSchedule>{        
        const en = this.toCreateModel(dto,req) as TeachingSchedule  
        return await this.teachingscheduleRepository.save(
            this.teachingscheduleRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateTeachingScheduleDto,req:CustomRequest):Promise<TeachingScheduleDto>{
        const m = await this.teachingscheduleRepository.findOne({where:{id:id}})
        return await this.teachingscheduleRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<TeachingScheduleDto>{
        let m = await this.teachingscheduleRepository.findOne({where:{id:id}})
        return await this.teachingscheduleRepository.softRemove(
            await this.teachingscheduleRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }

    async itemByTeacher(id:number):Promise<any>{
        const currentYearTerm = await this.yearTermService.findCurrrentTerm();
        return await this.itemRepository.findOne({where:{teacherId:id,yearTermId: currentYearTerm.id}})
    }
    async initialByTeacher(id:number):Promise<any>{
        const currentYearTerm = await this.yearTermService.findCurrrentTerm();
        const teacher = await this.teacherService.item(id);
        return {
            yearTermId:currentYearTerm.id,
            year:currentYearTerm.year,
            term:currentYearTerm.term,
            teacherId:teacher.id,
            teacher_firstname:teacher.firstname,
            teacher_lastname:teacher.lastname,
            teacher_title:teacher.title
        }
    }

    async isHasTeachingSchedule(id:number):Promise<any>{
        let currentYearTerm = await this.yearTermService.findCurrrentTerm();
        let teachingSchedule = await this.itemRepository.findOne({where:{teacherId:id,yearTermId: currentYearTerm.id}})
        if(teachingSchedule!=undefined){
            return true;
         }else{
            return false;
         }
        
    }

     async listForTeacher(dto:SearchTeacherDto):Promise<SearchResult<VwTeachingScheduleTeacherList>>{
        const builder = this.createQueryBuider<VwTeachingScheduleTeacherList>(dto,this.vwTeachingScheduleTeacherRepository)
        const [data, count] = await builder.getManyAndCount();
        return this.toSearchResult<VwTeachingScheduleTeacherList>(dto.paginator,count,data);
    }

    async practitionerLevelDropdown(dto: SearchPractitionerLevelDto):Promise<SelectItems[]> {
        return this.dropdownService.practitionerlevelDropdown(dto,this.vwDropdownPractitionerLevelRepository);
      }
      async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
      }

     
}
