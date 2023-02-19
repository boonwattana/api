import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarPresonalDataDto, SarPresonalDataDto, SearchSarPresonalDataDto, UpdateSarPresonalDataDto } from './sar-presonal-data.dto';
import { SarPresonalData, VwSarPresonalDataDropdown, VwSarPresonalDataItem, VwSarPresonalDataList } from './sar-presonal-data.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { TeacherService } from 'src/api/teacher/teacher.service';
import { EducationBackgroundService } from 'src/api/education-background/education-background.service';
@Injectable()
export class SarPresonalDataService extends BaseService {

    constructor(
        @InjectRepository(SarPresonalData)
        private readonly sarpresonaldataRepository: Repository<SarPresonalData>,
        @InjectRepository(VwSarPresonalDataList)
        private readonly vwSarPresonalDataRepository: Repository<VwSarPresonalDataList>,
        @InjectRepository(VwSarPresonalDataItem)
        private readonly itemRepository:Repository<VwSarPresonalDataItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService,
        private readonly teacherService: TeacherService,
        private readonly educationbackground: EducationBackgroundService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarPresonalDataDto):Promise<SearchResult<VwSarPresonalDataList>>{
        const builder = this.createQueryBuider<VwSarPresonalDataList>(dto,this.vwSarPresonalDataRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarPresonalDataList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarPresonalDataDto,req:CustomRequest):Promise<SarPresonalData>{        
        const en = this.toCreateModel(dto,req) as SarPresonalData  
        return await this.sarpresonaldataRepository.save(
            this.sarpresonaldataRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarPresonalDataDto,req:CustomRequest):Promise<SarPresonalDataDto>{
        const m = await this.sarpresonaldataRepository.findOne({where:{id:id}})
        return await this.sarpresonaldataRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarPresonalDataDto>{
        let m = await this.sarpresonaldataRepository.findOne({where:{id:id}})
        return await this.sarpresonaldataRepository.softRemove(
            await this.sarpresonaldataRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }

    async initialByTeacherId(id:number):Promise<any>{
        const teacher = await this.teacherService.item(id);
        const education = await this.educationbackground.getListByTeacherId(id)
       // console.log("teacher>>>?",teacher)
       var dob = new Date(teacher.birthDate.toLocaleDateString("en-US"));
       //calculate month difference from current date in time
       var month_diff = Date.now() - dob.getTime();
       
       //convert the calculated difference in date format
       var age_dt = new Date(month_diff); 
       
       //extract year from date    
       var year = age_dt.getUTCFullYear();
       
       //now calculate the age of the user
       var age = Math.abs(year - 1970);
       var dob2 = new Date(teacher.setInDate.toLocaleDateString("en-US"));
       var month_diff2 = Date.now() - dob2.getTime();
       var month_diff2_dt = new Date(month_diff2); 
       var year2 = month_diff2_dt.getUTCFullYear();
       var setInTotalYear = Math.abs(year2 - 1970);
        return {
            teacherId:teacher.id,
            practitionerLevelNameValue:teacher.practitionerLevelNameValue,
            age:age,
            setInTotalYear:setInTotalYear, //ปฏิบัติราชการ..........ปี
            positionName:teacher.positionName,
            birthDate:teacher.birthDate,
            setInDate:teacher.setInDate,
            subjectGroupId:teacher.subjectGroupId,  
            subjectGroupValue:teacher.subjectGroupValue,  //ปฏิบัติการสอนกลุ่มสาระการเรียนรู้  
            actionWorkSpecial: teacher.actionWorkSpecial,//ปฎิบัติงานพิเศษ
            education:education
        };
    }
    async getItemByRefId(refIdValue:string):Promise<VwSarPresonalDataItem>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
