import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImagesService } from 'src/core/images/images.service';
import { ImageType } from 'src/core/shared/constans/enum-system';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { savefileWithName } from 'src/core/shared/services/files.service';
import { filename } from 'src/core/shared/utils/image.util';
import { Repository } from 'typeorm';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { SearchClassroomDto } from '../classroom/classroom.dto';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { SearchStudentDto } from '../student/student.dto';
import { StudentService } from '../student/student.service';
import { VwYearTermDropdown } from '../year-term/year-term.entity';
import { YearTermService } from '../year-term/year-term.service';
import { CreateStudentHomeVisitDto, StudentHomeVisitDto, SearchStudentHomeVisitDto, UpdateStudentHomeVisitDto } from './student-home-visit.dto';
import { StudentHomeVisit, VwStudentHomeVisitDropdown, VwStudentHomeVisitItem, VwStudentHomeVisitList } from './student-home-visit.entity';
import { VwYearTermItem } from 'src/api/year-term/year-term.entity';
import { VwStudentItem } from '../student/student.entity';
import { VwTeacherItem } from 'src/api/teacher/teacher.entity';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { getStatusLabel } from 'src/core/shared/functions';

//import { VwnullDropdown } from 'src/api/null/null.entity';
//import { SearchnullDto } from 'src/api/null/null.dto';

@Injectable()
export class StudentHomeVisitService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:StudentHomeVisit[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.studenthomevisitRepository.save(
            this.studenthomevisitRepository.create(dataBulkInsert)
        )
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwStudentHomeVisitList>(dto,this.vwStudentHomeVisitRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'ชื่อนักเรียน':m.studentValue,
               'ชั้นเรียน':m.classroomTypeValue ,
               'ห้อง':m.classroomValue ,
               'สถานะ':getStatusLabel(m.yearTermId),
    
            }
        })
        return exportExcel(filterData)
        return exportExcel(data)
      }
    constructor(
        @InjectRepository(StudentHomeVisit)
        private readonly studenthomevisitRepository: Repository<StudentHomeVisit>,
        @InjectRepository(VwStudentHomeVisitList)
        private readonly vwStudentHomeVisitRepository: Repository<VwStudentHomeVisitList>,
        @InjectRepository(VwStudentHomeVisitItem)
        private readonly itemRepository:Repository<VwStudentHomeVisitItem>,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwYearTermDropdownRepository:Repository<VwYearTermDropdown>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        private readonly dropdownService: DropdownService,
        @InjectRepository(VwStudentItem)
        private readonly itemStudentRepository:Repository<VwStudentItem>,
        @InjectRepository(VwYearTermItem)
        private readonly itemYearTermRepository:Repository<VwYearTermItem>,
        private readonly imageService:ImagesService,
        private readonly yearTermService:YearTermService,
        private readonly studentService:StudentService,
        @InjectRepository(VwTeacherItem)
        private readonly itemTeacherRepository:Repository<VwTeacherItem>,
        ){
        super()
    }
  //  async nullDropdown(dto: SearchnullDto):Promise<SelectItems[]> {
  //      return await this.dropdownService.nullDropdown(dto,this.vwDropdownnullRepository);
   //   }
    async list(dto:SearchStudentHomeVisitDto):Promise<SearchResult<VwStudentHomeVisitList>>{
        const builder = this.createQueryBuider<VwStudentHomeVisitList>(dto,this.vwStudentHomeVisitRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwStudentHomeVisitList>(dto.paginator,count,data);
    }
    async create(dto:CreateStudentHomeVisitDto,req:CustomRequest):Promise<StudentHomeVisit>{    
        const en = this.toCreateModel(dto,req) as StudentHomeVisit  
        const result = await this.studenthomevisitRepository.save(
            this.studenthomevisitRepository.create(en)
        );
        const moduleName = 'images'

        if(dto.images?.length>0){
            for (const iterator of dto.images) {
                const fileName = filename()
                await savefileWithName(iterator,fileName,moduleName)
                await this.imageService.create({imageUrl:fileName,refId:result.id,refType:ImageType.HOME_VISIT,imageType:0},req)

            }

        }    
        return result

    }
    async update(id:number,dto:UpdateStudentHomeVisitDto,req:CustomRequest):Promise<StudentHomeVisitDto>{
        const yearTerm = await this.yearTermService.findCurrrentTerm()
        const m = await this.studenthomevisitRepository.findOne({where:{studentId:id,yearTermId:yearTerm.id}})
        const result = await this.studenthomevisitRepository.save(
            this.toUpdateModel(m,dto,req)
        );
        const moduleName = 'images'

        if(dto.images?.length>0){
            for (const iterator of dto.images) {
                const fileName = filename()
                await savefileWithName(iterator,fileName,moduleName)
                await this.imageService.create({imageUrl:fileName,refId:result.id,refType:ImageType.HOME_VISIT,imageType:0},req)

            }

        }  
        return result
    }
    async delete(id:number,req:CustomRequest):Promise<StudentHomeVisitDto>{
        let m = await this.studenthomevisitRepository.findOne({where:{id:id}})
        return await this.studenthomevisitRepository.softRemove(
            await this.studenthomevisitRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        const yearTerm = await this.yearTermService.findCurrrentTerm()
        return await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearTerm.id}})
    }
    async classroomDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomDropdown(dto,this.vwDropdownClassroomRepository);
      }
      async classroomTypeDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }

      async getStudentHomeVisitInitialData(id:number):Promise<any>{
        let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
        // console.log("yearInit",yearInit)
         let std = await this.itemStudentRepository.findOne({where:{id:id}})
         let stdTeacher = await this.itemTeacherRepository.findOne({where:{classroomTypeId:std.classroomTypeId , classroomId:std.classroomId}})
         var atSemester =null;
         var atYear=null;
         if(yearInit!=undefined){
            atYear=yearInit.year;
            atSemester =yearInit.term;
        }
         return {
             atYear: atYear, 
             atSemester: atSemester,
            studentTitle:std?.title,
            parentTitle:std?.parentTitle,
             firstname : std?.firstname,
             lastname: std?.lastname,
             classroomTypeValue:std?.classroomTypeValue,
             birthDate:std?.birthDate,
             parentFirstName:std?.parentFirstname,
             parentLastName:std?.parentLastname,
             houseNumber:std?.houseNumber,
             village:std?.village,
             road:std?.road,
             subDistrictValue:std?.subDistrictValue,
             districtValue:std?.districtValue,
             provinceValue:std?.provinceValue,
             subDistrictId:std?.subDistrictId,
             districtId:std?.districtId,
             provinceId:std?.provinceId,
             phoneNumber:std?.phoneNumber,
             parentPhone:std?.parentPhone,
             adviserNameValue:stdTeacher?.firstname+" "+stdTeacher?.lastname
         }

   
 



      

    }
    async yearTermDropdown(dto: SearchStudentDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwYearTermDropdownRepository);
      }
      async currentTerm() {
        return this.yearTermService.findCurrrentTerm()
     }
     async itemStudent(id:number):Promise<any>{
        return await this.studentService.item(id)
    }
    async getCurrentTermData(id:number):Promise<any>{
        let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
        let CurrentTermData = await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearInit.id}})
      
     if(CurrentTermData!=undefined){
        return true;
     }else{
        return false;
     }
    }
    async stditem(id:number):Promise<any>{
        const yearTerm = await this.yearTermService.findCurrrentTerm()
        let result= await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearTerm.id}})
        let std = await this.itemStudentRepository.findOne({where:{id:id}})
        let stdTeacher = await this.itemTeacherRepository.findOne({where:{classroomTypeId:std.classroomTypeId , classroomId:std.classroomId}})
     
         return {
            ...result,
            studentTitle:std.title,
            parentTitle:std.parentTitle,
            firstname : std.firstname,
            lastname: std.lastname,
            classroomTypeValue:std.classroomTypeValue,
            birthDate:std.birthDate,
            parentFirstName:std.parentFirstname,
            parentLastName:std.parentLastname,
            houseNumber:std.houseNumber,
            village:std.village,
            road:std.road,
            subDistrictValue:std.subDistrictValue,
            districtValue:std.districtValue,
            provinceValue:std.provinceValue,
            subDistrictId:std.subDistrictId,
            districtId:std.districtId,
            provinceId:std.provinceId,
            phoneNumber:std.phoneNumber,
            parentPhone:std.parentPhone,
            adviserNameValue:stdTeacher?.firstname+" "+stdTeacher?.lastname
        };
    }
}
