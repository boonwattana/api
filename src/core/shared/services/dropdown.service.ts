
import { Injectable } from "@nestjs/common";
import { VwActiveTimeDropdown } from "src/api/active-time/active-time.entity";
import { VwPracticleDropdown } from "src/api/practicle/practicle.entity";
import { VwActivityStudentDropdown } from "src/api/activity-student/activity-student.entity";
import { VwAliveWithDropdown } from "src/api/alive-with/alive-with.entity";
import { VwClassroomTypeDropdown } from "src/api/classroom-type/classroom-type.entity";
import { VwClassroomDropdown } from "src/api/classroom/classroom.entity";
import { VwCountryDropdown } from "src/api/country/country.entity";
import { VwCurriculumDropdown } from "src/api/curriculum/curriculum.entity";
import { VwDistrictDropdown } from "src/api/district/district.entity";
import { VwEditFieldDropdown } from "src/api/edit-field/edit-field.entity";
import { VwEditRequestDropdown } from "src/api/edit-request/edit-request.entity";
import { VwEducationBackgroundDropdown } from "src/api/education-background/education-background.entity";
import { VwEthnicityDropdown } from "src/api/ethnicity/ethnicity.entity";
import { VwGendarDropdown } from "src/api/gendar/gendar.entity";
import { VwNationalityDropdown } from "src/api/nationality/nationality.entity";
import { VwParentStatusDropdown } from "src/api/parent-status/parent-status.entity";
import { VwPractitionerLevelDropdown } from "src/api/practitioner-level/practitioner-level.entity";
import { VwProvinceDropdown } from "src/api/province/province.entity";
import { VwReligionDropdown } from "src/api/religion/religion.entity";
import { VwStudentDropdown } from "src/api/student/student.entity";
import { VwSubDistrictDropdown } from "src/api/sub-district/sub-district.entity";
import { VwTeacherWorkDropdown } from "src/api/teacher-work/teacher-work.entity";
import { VwTeacherDropdown } from "src/api/teacher/teacher.entity";
import { VwTeachersDevelopDropdown } from "src/api/teachers-develop/teachers-develop.entity";
import { VwStudentHomeVisitDropdown } from "src/api/student-home-visit/student-home-visit.entity";
import { VwDemoDropdown } from "src/core/demo/demo.entity";
import { Repository } from "typeorm";
import { SearchParameter, SelectItems } from "../models/search-param-model";
import { BaseService } from "./base.service";
import { VwSdqTableDropdown } from "src/api/sdq-table/sdq-table.entity";
import { VwYearTermDropdown } from "src/api/year-term/year-term.entity";
import { VwCheckStudentDropdown } from "src/api/check-student/check-student.entity";
import { VwDepressionDropdown } from "src/api/depression/depression.entity";
import { VwEmotionalQuotientDropdown } from "src/api/emotional-quotient/emotional-quotient.entity";
import { VwStressDropdown } from "src/api/stress/stress.entity";
import { VwStudentConsultantDropdown } from "src/api/student-consultant/student-consultant.entity";
import { VwStudentFilterDropdown } from "src/api/student-filter/student-filter.entity";
import { VwStudentHelpDropdown } from "src/api/student-help/student-help.entity";
import { VwStudentScolarDropdown } from "src/api/student-scolar/student-scolar.entity";
import { VwStudentSupportDropdown } from "src/api/student-support/student-support.entity";
import { VwTeachingScheduleDropdown } from "src/api/teaching-schedule/teaching-schedule.entity";
import { VwSarPresonalDataDropdown } from "src/api/sar-presonal-data/sar-presonal-data.entity";
import { VwSarPresonalLeaveDataDropdown } from "src/api/sar-presonal-leave-data/sar-presonal-leave-data.entity";
import { VwSarCoursesYearTermDropdown } from "src/api/sar-courses-year-term/sar-courses-year-term.entity";
import { VwSarAnotherSpeacialDutyDropdown } from "src/api/sar-another-speacial-duty/sar-another-speacial-duty.entity";
import { VwSarLearningManagementPlanDropdown } from "src/api/sar-learning-management-plan/sar-learning-management-plan.entity";
import { VwSarMediaProductionDropdown } from "src/api/sar-media-production/sar-media-production.entity";
import { VwSarIntegratedLearningDropdown } from "src/api/sar-integrated-learning/sar-integrated-learning.entity";
import { VwSarResearchInClassDropdown } from "src/api/sar-research-in-class/sar-research-in-class.entity";
import { VwSarStudentAssignDropdown } from "src/api/sar-student-assign/sar-student-assign.entity";
import { VwSarLecturerInviteDropdown } from "src/api/sar-lecturer-invite/sar-lecturer-invite.entity";
import { VwSarTeachingFormatDropdown } from "src/api/sar-teaching-format/sar-teaching-format.entity";
import { VwSarTeachingConditionDropdown } from "src/api/sar-teaching-condition/sar-teaching-condition.entity";
import { VwSarSelfDevelopmentDropdown } from "src/api/sar-self-development/sar-self-development.entity";
import { VwSarAwardDropdown } from "src/api/sar-award/sar-award.entity";
import { VwSarInvitedSpeakerDropdown } from "src/api/sar-invited-speaker/sar-invited-speaker.entity";
import { VwSarTeachingResultDropdown } from "src/api/sar-teaching-result/sar-teaching-result.entity";
import { VwSarPerformingSpecialDutiesDropdown } from "src/api/sar-performing-special-duties/sar-performing-special-duties.entity";
import { VwSarStudentEstimateTeachingDropdown } from "src/api/sar-student-estimate-teaching/sar-student-estimate-teaching.entity";
import { VwSarSelfAssessmentDropdown } from "src/api/sar-self-assessment/sar-self-assessment.entity";
import { VwSarQualityOfLearnersDropdown } from "src/api/sar-quality-of-learners/sar-quality-of-learners.entity";
import { VwSarQualityEvidenceDropdown } from "src/api/sar-quality-evidence/sar-quality-evidence.entity";
import { VwSarStandard4Dropdown } from "src/api/sar-standard4/sar-standard4.entity";
import { VwSarStandard3Dropdown } from "src/api/sar-standard3/sar-standard3.entity";
import { VwSarStandard2Dropdown } from "src/api/sar-standard2/sar-standard2.entity";
import { VwSarCompetencyAssessmentDropdown } from "src/api/sar-competency-assessment/sar-competency-assessment.entity";
import { VwSarCrudAssessmentDropdown } from "src/api/sar-crud-assessment/sar-crud-assessment.entity";
import { VwSarDropdown } from "src/api/sar/sar.entity";
import { VwSarActivitiesDropdown } from "src/api/sar-activities/sar-activities.entity";
import { VwSarAdviseClassDropdown } from "src/api/sar-advise-class/sar-advise-class.entity";
import { VwSarUploadImgDropdown } from "src/api/sar-upload-img/sar-upload-img.entity";
import { VwSarOrderedPositionDropdown } from "src/api/sar-ordered-position/sar-ordered-position.entity";

@Injectable()
export class DropdownService extends BaseService{
    constructor(
    ){
        super()
    }
    async studentconsultantDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStudentConsultantDropdown = el as unknown as VwStudentConsultantDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async studentfilterDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStudentFilterDropdown = el as unknown as VwStudentFilterDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async studenthelpDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStudentHelpDropdown = el as unknown as VwStudentHelpDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async studentscolarDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStudentScolarDropdown = el as unknown as VwStudentScolarDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async studentsupportDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStudentSupportDropdown = el as unknown as VwStudentSupportDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }


    async stressDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStressDropdown = el as unknown as VwStressDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async emotionalquotientDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwEmotionalQuotientDropdown = el as unknown as VwEmotionalQuotientDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async checkstudentDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{   
        dto.tableKey = 'check_student'     
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwCheckStudentDropdown = el as unknown as VwCheckStudentDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async depressionDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwDepressionDropdown = el as unknown as VwDepressionDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async yeartermDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{ 
        dto.tableKey = 'practicle'       
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwYearTermDropdown = el as unknown as VwYearTermDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async practicleDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{    
        dto.tableKey = 'practicle'    
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwPracticleDropdown = el as unknown as VwPracticleDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async teachersdevelopDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{  
        dto.tableKey = 'teachers_develop'        
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwTeachersDevelopDropdown = el as unknown as VwTeachersDevelopDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async teacherworkDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{   
        dto.tableKey = 'teacher_work'           
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwTeacherWorkDropdown = el as unknown as VwTeacherWorkDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async teacherDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{  
        dto.tableKey = 'teacher'            
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwTeacherDropdown = el as unknown as VwTeacherDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async practitionerlevelDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{ 
        dto.tableKey = 'practitioner_level'             
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwPractitionerLevelDropdown = el as unknown as VwPractitionerLevelDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async educationbackgroundDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{ 
        dto.tableKey = 'education_background'             
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwEducationBackgroundDropdown = el as unknown as VwEducationBackgroundDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async curriculumDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{     
        dto.tableKey = 'curriculum'         
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwCurriculumDropdown = el as unknown as VwCurriculumDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async activitystudentDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{    
        dto.tableKey = 'activity_student'          
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwActivityStudentDropdown = el as unknown as VwActivityStudentDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async editRequestDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{   
        dto.tableKey = 'edit_request'           
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwEditRequestDropdown = el as unknown as VwEditRequestDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async editFieldDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{    
        dto.tableKey = 'edit_field'          
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwEditFieldDropdown = el as unknown as VwEditFieldDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async activeTimeDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        dto.tableKey = 'active_time'      
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwActiveTimeDropdown = el as unknown as VwActiveTimeDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async demoDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{     
        dto.tableKey = 'demo'         
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwDemoDropdown = el as unknown as VwDemoDropdown
            const dropdownModel:SelectItems ={
                label:model.demoEmail,
                value:model.id,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
  
    async countryDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{  
        dto.tableKey = 'country'            
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwCountryDropdown = el as unknown as VwCountryDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
  
    async districtDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{       
        dto.tableKey = 'district'       
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwDistrictDropdown = el as unknown as VwDistrictDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
  
    async provinceDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{    
        dto.tableKey = 'province'          
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwProvinceDropdown = el as unknown as VwProvinceDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
      async subDistrictDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{    
        dto.tableKey = 'sub_district'          
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSubDistrictDropdown = el as unknown as VwSubDistrictDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async aliveWithDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        dto.tableKey = 'alive_with'      
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwAliveWithDropdown = el as unknown as VwAliveWithDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async classroomDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{   
        dto.tableKey = 'classroom'           
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwClassroomDropdown = el as unknown as VwClassroomDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async classroomTypeDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        dto.tableKey = 'classroom_type'      
        const buider = this.createQueryBuiderDropdown(dto,repository)

        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwClassroomTypeDropdown = el as unknown as VwClassroomTypeDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async gendarDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{       
        dto.tableKey = 'gendar'       
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwGendarDropdown = el as unknown as VwGendarDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async studentDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{      
        dto.tableKey = 'student'        
        const buider = this.createQueryBuiderDropdown(dto,repository)
       // console.log(buider.getSql());
        
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStudentDropdown = el as unknown as VwStudentDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async parentStatusDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{     
        dto.tableKey = 'parent_status'         
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwParentStatusDropdown = el as unknown as VwParentStatusDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async ethnicityDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        dto.tableKey = 'ethnicity'      
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwEthnicityDropdown = el as unknown as VwEthnicityDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async nationalityDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{       
        dto.tableKey = 'nationality'       
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwNationalityDropdown = el as unknown as VwNationalityDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async religionDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        dto.tableKey = 'religion'      
        const buider = this.createQueryBuiderDropdown(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwReligionDropdown = el as unknown as VwReligionDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async studenthomevisitDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwStudentHomeVisitDropdown = el as unknown as VwStudentHomeVisitDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async sdqtableDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSdqTableDropdown = el as unknown as VwSdqTableDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async teachingscheduleDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwTeachingScheduleDropdown = el as unknown as VwTeachingScheduleDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async sarpresonaldataDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarPresonalDataDropdown = el as unknown as VwSarPresonalDataDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarpresonalleavedataDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarPresonalLeaveDataDropdown = el as unknown as VwSarPresonalLeaveDataDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarcoursesyeartermDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarCoursesYearTermDropdown = el as unknown as VwSarCoursesYearTermDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async saranotherspeacialdutyDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarAnotherSpeacialDutyDropdown = el as unknown as VwSarAnotherSpeacialDutyDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarlearningmanagementplanDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarLearningManagementPlanDropdown = el as unknown as VwSarLearningManagementPlanDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async sarmediaproductionDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarMediaProductionDropdown = el as unknown as VwSarMediaProductionDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarintegratedlearningDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarIntegratedLearningDropdown = el as unknown as VwSarIntegratedLearningDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarresearchinclassDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarResearchInClassDropdown = el as unknown as VwSarResearchInClassDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async sarstudentassignDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarStudentAssignDropdown = el as unknown as VwSarStudentAssignDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarlecturerinviteDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarLecturerInviteDropdown = el as unknown as VwSarLecturerInviteDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarteachingformatDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarTeachingFormatDropdown = el as unknown as VwSarTeachingFormatDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarteachingconditionDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarTeachingConditionDropdown = el as unknown as VwSarTeachingConditionDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarselfdevelopmentDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarSelfDevelopmentDropdown = el as unknown as VwSarSelfDevelopmentDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarawardDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarAwardDropdown = el as unknown as VwSarAwardDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarinvitedspeakerDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarInvitedSpeakerDropdown = el as unknown as VwSarInvitedSpeakerDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarteachingresultDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarTeachingResultDropdown = el as unknown as VwSarTeachingResultDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarperformingspecialdutiesDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarPerformingSpecialDutiesDropdown = el as unknown as VwSarPerformingSpecialDutiesDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarstudentestimateteachingDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarStudentEstimateTeachingDropdown = el as unknown as VwSarStudentEstimateTeachingDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarselfassessmentDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarSelfAssessmentDropdown = el as unknown as VwSarSelfAssessmentDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarqualityoflearnersDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarQualityOfLearnersDropdown = el as unknown as VwSarQualityOfLearnersDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async sarqualityevidenceDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarQualityEvidenceDropdown = el as unknown as VwSarQualityEvidenceDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarstandard2Dropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarStandard2Dropdown = el as unknown as VwSarStandard2Dropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarstandard3Dropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarStandard3Dropdown = el as unknown as VwSarStandard3Dropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarstandard4Dropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarStandard4Dropdown = el as unknown as VwSarStandard4Dropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarcompetencyassessmentDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarCompetencyAssessmentDropdown = el as unknown as VwSarCompetencyAssessmentDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarcrudassessmentDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarCrudAssessmentDropdown = el as unknown as VwSarCrudAssessmentDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async sarDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarDropdown = el as unknown as VwSarDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async saractivitiesDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarActivitiesDropdown = el as unknown as VwSarActivitiesDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async saradviseclassDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarAdviseClassDropdown = el as unknown as VwSarAdviseClassDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }

    async saruploadimgDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarUploadImgDropdown = el as unknown as VwSarUploadImgDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }
    async sarorderedpositionDropdown(dto:SearchParameter,repository: Repository<any>):Promise<SelectItems[]>{        
        const buider = this.createQueryBuider(dto,repository)
        const data =await buider.getMany();
        const dropdownList:SelectItems[]=[]
        data.forEach(el => {
            const model:VwSarOrderedPositionDropdown = el as unknown as VwSarOrderedPositionDropdown
            const dropdownModel:SelectItems ={
                label:model.label,
                value:model.value,
                rowData:model
            }
            dropdownList.push(dropdownModel)
        });        
        return dropdownList;
    }


}