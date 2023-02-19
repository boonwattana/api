import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { VwDistrictDropdown } from 'src/api/district/district.entity';
import { SearchDistrictDto } from 'src/api/district/district.dto';
import { ModuleName } from '../shared/constans/enum-constans';
import { StudentService } from 'src/api/student/student.service';
import { ImportExcelDto, SearchExportExcelDto } from './excel.dto';
import { AliveWith } from 'src/api/alive-with/alive-with.entity';
import { Classroom } from 'src/api/classroom/classroom.entity';
import { ClassroomType } from 'src/api/classroom-type/classroom-type.entity';
import { CountryService } from 'src/api/country/country.service';
import { DistrictService } from 'src/api/district/district.service';
import { EthnicityService } from 'src/api/ethnicity/ethnicity.service';
import { GendarService } from 'src/api/gendar/gendar.service';
import { NationalityService } from 'src/api/nationality/nationality.service';
import { ParentStatusService } from 'src/api/parent-status/parent-status.service';
import { ProvinceService } from 'src/api/province/province.service';
import { ReligionService } from 'src/api/religion/religion.service';
import { SubDistrictService } from 'src/api/sub-district/sub-district.service';
import { AliveWithService } from 'src/api/alive-with/alive-with.service';
import { ClassroomService } from 'src/api/classroom/classroom.service';
import { ClassroomTypeService } from 'src/api/classroom-type/classroom-type.service';
import * as Excel from 'exceljs';
import * as XLSX from "xlsx";
import { IsNumber, IsNumberString } from 'class-validator';
import { ActivityStudentService } from 'src/api/activity-student/activity-student.service';
import { CurriculumService } from 'src/api/curriculum/curriculum.service';
import { EducationBackgroundService } from 'src/api/education-background/education-background.service';
import { PractitionerLevelService } from 'src/api/practitioner-level/practitioner-level.service';
import { Practicle } from 'src/api/practicle/practicle.entity';
import { PracticleService } from 'src/api/practicle/practicle.service';
import { TeacherService } from 'src/api/teacher/teacher.service';
import { TeacherWorkService } from 'src/api/teacher-work/teacher-work.service';
import { TeachersDevelopService } from 'src/api/teachers-develop/teachers-develop.service';
import { TeachingScheduleService } from 'src/api/teaching-schedule/teaching-schedule.service';
import { StudentHomeVisitService } from 'src/api/student-home-visit/student-home-visit.service';
import { CheckStudentService } from 'src/api/check-student/check-student.service';
import { SdqTableService } from 'src/api/sdq-table/sdq-table.service';
import { StressService } from 'src/api/stress/stress.service';
import { EmotionalQuotientService } from 'src/api/emotional-quotient/emotional-quotient.service';
import { DepressionService } from 'src/api/depression/depression.service';
import { StudentFilterService } from 'src/api/student-filter/student-filter.service';
import { StudentSupportService } from 'src/api/student-support/student-support.service';
import { StudentConsultantService } from 'src/api/student-consultant/student-consultant.service';
import { StudentScolarService } from 'src/api/student-scolar/student-scolar.service';
import { StudentHelpService } from 'src/api/student-help/student-help.service';

@Injectable()
export class ExcelService extends BaseService {
    constructor(
        private readonly studentService: StudentService,
        private readonly aliveWithService: AliveWithService,
        private readonly classroomService: ClassroomService,
        private readonly classroomTypeService: ClassroomTypeService,
        private readonly countryService: CountryService,
        private readonly districtService: DistrictService,
        private readonly ethnicityService: EthnicityService,
        private readonly gendarService: GendarService,
        private readonly nationalityService: NationalityService,
        private readonly parentStatusService: ParentStatusService,
        private readonly provinceService: ProvinceService,
        private readonly religionService: ReligionService,
        private readonly subDistrictService: SubDistrictService,

        private readonly activityStudentService: ActivityStudentService,
        private readonly curriculumService: CurriculumService,
        private readonly educationBackgroundService: EducationBackgroundService,
        private readonly practitionerLevelService: PractitionerLevelService,
        private readonly practicleService: PracticleService,
        private readonly teacherService: TeacherService,
        private readonly teacherWorkService: TeacherWorkService,
        private readonly teachersDevelopService: TeachersDevelopService,

        private readonly teachingScheduleService:TeachingScheduleService,
        private readonly studentHomeVisitService:StudentHomeVisitService,
        private readonly checkStudentService:CheckStudentService,
        private readonly sdqTableService:SdqTableService,
        private readonly sdqTeacherService:SdqTableService,
        private readonly sdqParentService:SdqTableService,
        private readonly stressService:StressService,
        private readonly emotionalQuotientService:EmotionalQuotientService,
        private readonly depressionService:DepressionService,
        private readonly studentFilterService:StudentFilterService,
        private readonly studentSupportService:StudentSupportService,
        private readonly studentConsultantService:StudentConsultantService,
        private readonly studentScolarService:StudentScolarService,
        private readonly studentHelpService:StudentHelpService
        ){
        super()
    }
    async exportTh(module:string,dto:SearchExportExcelDto):Promise<any> {
        switch(module){
            case ModuleName.STUDENT:
            return this.studentService.exportTH(dto)
            case ModuleName.TEACHER:
            return this.teacherService.exportTH(dto)
            default :
            throw new BadRequestException('Module incorrect')
        }
    }
    async export(module:string,dto:SearchExportExcelDto):Promise<any> {
        console.log(module);
        
        switch(module){
            case ModuleName.STUDENT:
            return this.studentService.export(dto)
            case ModuleName.ALIVE_WITH:
            return this.aliveWithService.export(dto)
            case ModuleName.CLASSROOM:
            return this.classroomService.export(dto)
            case ModuleName.CLASSROOM_TYPE:
            return this.classroomTypeService.export(dto)
            case ModuleName.COUNTRY:
            return this.countryService.export(dto)
            case ModuleName.DISTRICT:
            return this.districtService.export(dto)
            case ModuleName.ETHNICITY:
            return this.ethnicityService.export(dto)
            case ModuleName.GENDAR:
            return this.gendarService.export(dto)
            case ModuleName.NATIONALITY:
            return this.nationalityService.export(dto)
            case ModuleName.PARENT_STATUS:
            return this.parentStatusService.export(dto)
            case ModuleName.PROVINCE:
            return this.provinceService.export(dto)
            case ModuleName.RELIGION:
            return this.religionService.export(dto)
            case ModuleName.SUB_DISTRICT:
            return this.subDistrictService.export(dto)


            case ModuleName.ACTIVITY_STUDENT:
            return this.activityStudentService.export(dto)
            case ModuleName.CURRICULUM:
            return this.curriculumService.export(dto)

            case ModuleName.PRACTITIONER_LEVEL:
            return this.practitionerLevelService.export(dto)
            case ModuleName.PRACTICLE:
            return this.practicleService.export(dto)
            case ModuleName.TEACHER:
            return this.teacherService.export(dto)

            case ModuleName.TEACHER_WORK:
            return this.teacherWorkService.export(dto)
            case ModuleName.TEACHER_DEVELOP:
            return this.teachersDevelopService.export(dto)
            case ModuleName.EDUCATION_BACKGROUND:
            return this.educationBackgroundService.export(dto)

            case ModuleName.TEACHER_SCHEDULE :
            return this.teachingScheduleService.export(dto)
            case ModuleName.STUDENT_HOME_VISIT :
            return this.studentHomeVisitService.export(dto)
            case ModuleName.CHECK_STUDENT :
            return this.checkStudentService.export(dto)
            case ModuleName.SDQ_TABLE :
            return this.sdqTableService.exportStd(dto)
            case ModuleName.SDQ_TEACHER :
            return this.sdqTeacherService.exportTea(dto)
            case ModuleName.SDQ_PARENT :
            return this.sdqParentService.exportPar(dto)
            case ModuleName.STRESS :
            return this.stressService.export(dto)
            case ModuleName.EQ :
            return this.emotionalQuotientService.export(dto)
            case ModuleName.DEPRESSION :
            return this.depressionService.export(dto)
            case ModuleName.STUDENT_FILTER :
            return this.studentFilterService.export(dto)
            case ModuleName.STUDENT_SUPPORT :
            return this.studentSupportService.export(dto)
            case ModuleName.STUDENT_CONSULTANT :
            return this.studentConsultantService.export(dto)
            case ModuleName.STUDENT_SCOLAR  :
            return this.studentScolarService.export(dto)
            case ModuleName.STUDENT_HELP :
            return this.studentHelpService.export(dto)






            default :
            throw new BadRequestException('Module incorrect')
        }
    }
    async import(dto: ImportExcelDto):Promise<any> {
        const data = await this.getDataFromBase64(dto.base64.split(',')[1])
        switch(dto.moduleName){
            case ModuleName.STUDENT:
                return this.studentService.import(data)
            case ModuleName.ALIVE_WITH:
                return this.aliveWithService.import(data)
            case ModuleName.CLASSROOM:
                return this.classroomService.import(data)
            case ModuleName.CLASSROOM_TYPE:
                return this.classroomTypeService.import(data)
            case ModuleName.COUNTRY:
                return this.countryService.import(data)
            case ModuleName.DISTRICT:
                return this.districtService.import(data)
            case ModuleName.ETHNICITY:
                return this.ethnicityService.import(data)
            case ModuleName.GENDAR:
                return this.gendarService.import(data)
            case ModuleName.NATIONALITY:
                return this.nationalityService.import(data)
            case ModuleName.PARENT_STATUS:
                return this.parentStatusService.import(data)
            case ModuleName.PROVINCE:
                return this.provinceService.import(data)
            case ModuleName.RELIGION:
                return this.religionService.import(data)
            case ModuleName.SUB_DISTRICT:
                return this.subDistrictService.import(data)

            case ModuleName.ACTIVITY_STUDENT:
                return this.activityStudentService.import(data)
            case ModuleName.CURRICULUM:
                return this.curriculumService.import(data)
            case ModuleName.EDUCATION_BACKGROUND:
                return this.educationBackgroundService.import(data)
            case ModuleName.PRACTITIONER_LEVEL:
                return this.practitionerLevelService.import(data)
            case ModuleName.PRACTICLE:
                return this.practicleService.import(data)
            case ModuleName.TEACHER:
                return this.teacherService.import(data,null)
            case ModuleName.TEACHER_WORK:
                return this.teacherWorkService.import(data)
            case ModuleName.TEACHER_DEVELOP:
                return this.teachersDevelopService.import(data)

                case ModuleName.TEACHER_SCHEDULE :
                    return this.teachingScheduleService.import(data)
                    case ModuleName.STUDENT_HOME_VISIT :
                    return this.studentHomeVisitService.import(data)
                    case ModuleName.CHECK_STUDENT :
                    return this.checkStudentService.import(data)
                    case ModuleName.SDQ_TABLE :
                    return this.sdqTableService.import(data)
                    case ModuleName.SDQ_TEACHER :
                    return this.sdqTeacherService.import(data)
                    case ModuleName.SDQ_PARENT :
                    return this.sdqParentService.import(data)
                    case ModuleName.STRESS :
                    return this.stressService.import(data)
                    case ModuleName.EQ :
                    return this.emotionalQuotientService.import(data)
                    case ModuleName.DEPRESSION :
                    return this.depressionService.import(data)
                    case ModuleName.STUDENT_FILTER :
                    return this.studentFilterService.import(data)
                    case ModuleName.STUDENT_SUPPORT :
                    return this.studentSupportService.import(data)
                    case ModuleName.STUDENT_CONSULTANT :
                    return this.studentConsultantService.import(data)
                    case ModuleName.STUDENT_SCOLAR  :
                    return this.studentScolarService.import(data)
                    case ModuleName.STUDENT_HELP :
                    return this.studentHelpService.import(data)
             
                
            default :
                throw new BadRequestException('Module incorrect')
        }
    }
    async getDataFromBase64(base64: string):Promise<any[]> {        
        const workbook = XLSX.read(base64, {type:'base64'})
        let col:string[] =[] 
        let row:any[] =[]
        let masterKey:string[] = [] 
        let masterModel:{} = {}
        
        const cell = Object.keys(workbook.Sheets.sheet1)
        const modelList:{}[] =[]
        // console.log('wordking');
        // console.log('cell',cell);
        
        cell.forEach((el,index)=>{
            console.log(cell.length,':',index);
            
            col = []
            if(index == 1){                
                masterKey =cell.filter(fl=>this.checkFirstRow(fl,index))
                // console.log('masterKey',masterKey);
            }else if(index>1){                
                masterModel = {}
                const keyList = cell.filter(fl=> this.checkKeyRow(fl,index))
                // console.log('keyList',keyList);
                
                let hasValue:boolean = false
                masterKey.forEach(ev=>{
                    let value = undefined
                    keyList.forEach(key=>{
                        // console.log(key,ev);
                        const keyArr = key.split('')
                        const evArr = ev.split('')
                        let firstKey:string =''
                        let secondKey:string =''
                        keyArr.forEach(gg=>{
                            if(!Number(gg)){
                                if(gg!='0'){
                                    firstKey = firstKey+gg
                                }
                                
                            }
                        })
                        evArr.forEach(ff=>{
                            if(!Number(ff)){
                                if(ff!='0'){
                                    secondKey = secondKey+ff
                                }
                                
                            }
                        })
                        // if(firstKey.indexOf('0')){
                        //     console.log(firstKey);
                            
                        // }
                        // if(secondKey.indexOf('0')){
                        //     console.log(secondKey);
                            
                        // }
                        // console.log(firstKey,secondKey);
                        if(firstKey==secondKey){   
                                                     
                            value = workbook.Sheets.sheet1[key].v
                            // console.log(value);
                            // console.log(firstKey,secondKey,key,value);

                            hasValue = true
                        }
                    })   
                    //  console.log(ev);                 
                    masterModel[workbook.Sheets.sheet1[ev].v] = value
                })
                
                // console.log(index); 
                // console.log(masterModel);
                
                if(hasValue){
                    // if(masterModel['id']==15){
                    //     console.log(masterModel);
                    // }
                    
                    
                    modelList.push(masterModel)
                }
            }
        })
        // console.log('modelList.length',modelList.length);
        
        return modelList
    }
    checkKeyRow(fl: string, index: number): boolean {
        const str = fl.split('')
        let numstr:string = ''
        str.forEach(el=>{
            if(Number(el)||Number(el)===0){
                numstr = numstr+`${el}`
            }
        })
        
        return index===Number(numstr)
    }
    checkFirstRow(fl: string, index: number): boolean {
        const str = fl.split('')
        let numstr:string = ''
        str.forEach(el=>{
            if(Number(el)||Number(el)===0){
                numstr = numstr+`${el}`
            }
        })
        if(index===Number(numstr)){

        }
        return index===Number(numstr)
    }
}
