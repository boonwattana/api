import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateTeachersDevelopDto, TeachersDevelopDto, SearchTeachersDevelopDto, UpdateTeachersDevelopDto } from './teachers-develop.dto';
import { TeachersDevelop, VwTeachersDevelopDropdown, VwTeachersDevelopItem, VwTeachersDevelopList } from './teachers-develop.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { VwCurriculumDropdown } from 'src/api/curriculum/curriculum.entity';
import { SearchCurriculumDto } from 'src/api/curriculum/curriculum.dto';
import { VwPractitionerLevelDropdown } from 'src/api/practitioner-level/practitioner-level.entity';
import { SearchPractitionerLevelDto } from 'src/api/practitioner-level/practitioner-level.dto';
import { VwPracticleDropdown } from '../practicle/practicle.entity';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';

@Injectable()
export class TeachersDevelopService extends BaseService {
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwTeachersDevelopItem>(dto,this.itemRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'ชื่อครู':m.teacherValue,

                'ปีการศึกษา':m.educationYear,

                'ชื่อหลักสูตร':m.subjectName,

                'ประเภทหลักสูตร':m.curriculumValue,
                'สังกัดกลุ่มสาระ':m.practicleValue,
                'จำนวนชั่วโมง':m.totalHour,
                'หน่วยงานที่จัด':m.institutionName

            }
        })
        console.log(filterData);
        
        return exportExcel(filterData)
      }
      async import(data: any[]): Promise<any> {        
        const dataBulkInsert:TeachersDevelop[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.teachersdevelopRepository.save(
            this.teachersdevelopRepository.create(dataBulkInsert)
        )
    }
    constructor(
        @InjectRepository(TeachersDevelop)
        private readonly teachersdevelopRepository: Repository<TeachersDevelop>,
        @InjectRepository(VwTeachersDevelopList)
        private readonly vwTeachersDevelopRepository: Repository<VwTeachersDevelopList>,
        @InjectRepository(VwTeachersDevelopItem)
        private readonly itemRepository:Repository<VwTeachersDevelopItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        @InjectRepository(VwCurriculumDropdown)
        private readonly vwDropdownCurriculumRepository:Repository<VwCurriculumDropdown>,
        @InjectRepository(VwPracticleDropdown)
        private readonly vwPracticleDropdownRepository:Repository<VwPracticleDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async curriculumDropdown(dto: SearchCurriculumDto):Promise<SelectItems[]> {
        return this.dropdownService.curriculumDropdown(dto,this.vwDropdownCurriculumRepository);
      }
    async practicleDropdown(dto: SearchPractitionerLevelDto):Promise<SelectItems[]> {
        return this.dropdownService.practicleDropdown(dto,this.vwPracticleDropdownRepository);
      }
    async list(dto:SearchTeachersDevelopDto):Promise<SearchResult<VwTeachersDevelopList>>{
        const builder = this.createQueryBuider<VwTeachersDevelopList>(dto,this.vwTeachersDevelopRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwTeachersDevelopList>(dto.paginator,count,data);
    }
    async create(dto:CreateTeachersDevelopDto,req:CustomRequest):Promise<TeachersDevelop>{        
        const en = this.toCreateModel(dto,req) as TeachersDevelop  
        return this.teachersdevelopRepository.save(
            this.teachersdevelopRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateTeachersDevelopDto,req:CustomRequest):Promise<TeachersDevelopDto>{
        const m = await this.teachersdevelopRepository.findOne({where:{id:id}})
        return this.teachersdevelopRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<TeachersDevelopDto>{
        let m = await this.teachersdevelopRepository.findOne({where:{id:id}})
        return this.teachersdevelopRepository.softRemove(
            await this.teachersdevelopRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
