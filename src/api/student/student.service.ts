import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import {Not, Repository } from 'typeorm';
import { CreateStudentDto, StudentDto, SearchStudentDto, UpdateStudentDto } from './student.dto';
import { Student, VwStudentDropdown, VwStudentItem, VwStudentList } from './student.entity';
import { VwGendarDropdown } from 'src/api/gendar/gendar.entity';
import { SearchGendarDto } from 'src/api/gendar/gendar.dto';
import { VwNationalityDropdown } from 'src/api/nationality/nationality.entity';
import { SearchNationalityDto } from 'src/api/nationality/nationality.dto';
import { VwEthnicityDropdown } from 'src/api/ethnicity/ethnicity.entity';
import { SearchEthnicityDto } from 'src/api/ethnicity/ethnicity.dto';
import { VwReligionDropdown } from 'src/api/religion/religion.entity';
import { SearchReligionDto } from 'src/api/religion/religion.dto';
import { VwCountryDropdown } from 'src/api/country/country.entity';
import { SearchCountryDto } from 'src/api/country/country.dto';
import { VwSubDistrictDropdown } from 'src/api/sub-district/sub-district.entity';
import { SearchSubDistrictDto } from 'src/api/sub-district/sub-district.dto';
import { VwDistrictDropdown } from 'src/api/district/district.entity';
import { SearchDistrictDto } from 'src/api/district/district.dto';
import { VwProvinceDropdown } from 'src/api/province/province.entity';
import { SearchProvinceDto } from 'src/api/province/province.dto';
import { VwAliveWithDropdown } from 'src/api/alive-with/alive-with.entity';
import { SearchAliveWithDto } from 'src/api/alive-with/alive-with.dto';
import { VwClassroomDropdown } from 'src/api/classroom/classroom.entity';
import { SearchClassroomDto } from 'src/api/classroom/classroom.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { ImportExcelDto, SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { VwParentStatusDropdown } from '../parent-status/parent-status.entity';
import { savefileWithName } from 'src/core/shared/services/files.service';
import { filename } from 'src/core/shared/utils/image.util';
import { ImagesService } from 'src/core/images/images.service';
import { Operators } from 'src/core/shared/constans/constanst';
import { ColumnType, ImageType } from 'src/core/shared/constans/enum-system';
import { AuthenticationsService } from 'src/core/authentications/authentications.service';
import { RegisterDto } from 'src/core/authentications/authentications.dto';
import { UserType } from 'src/core/shared/constans/enum-constans';
import { BadRequestException, Injectable } from '@nestjs/common';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { Teacher } from '../teacher/teacher.entity';
import {  BLOOD_TYPE, CLASS_SPECIAL, STUDENT_STATUS, TITLE, TITLE_EN } from 'src/core/shared/constans/dropdown-constanst';
import { getLabelEnum } from 'src/core/shared/functions';
import { Users } from 'src/core/users/users.entity';

@Injectable()
export class StudentService extends BaseService {
    async countByClassRoom(classId: number, roomId: number) {
      //console.log('classId',classId);
      //console.log('roomId',roomId);
        const countStd = await this.studentRepository.count({where:{classroomId:roomId,classroomTypeId:classId,deleted:null}})
      //  console.log('countStd',countStd);
        return countStd
    }
    async import(data: any[]): Promise<any> {   
      const dataMapped:any[] = data.map(m=>{
        return{
          studentCode:m['รหัสประจำตัว']==''?0:m['รหัสประจำตัว'],
          studentNumber:m['เลขที่'],
          personalCode:m['รหัสบัตรประชาชน'],
          classroomTypeId:m['รหัสชั้นเรียน']==''?0:m['รหัสชั้นเรียน'],
          classroomId:m['รหัสห้อง']==''?0:m['รหัสห้อง'],
          classSpecial:m['รหัสห้องเรียนพิเศษ']==''?0:m['รหัสห้องเรียนพิเศษ'],
          classSpecialText:m['ห้องเรียนพิเศษอื่นๆ'],
          status:m['รหัสสถานะ']==''?0:m['รหัสสถานะ'],
          leaveDate:m['วันที่ออกย้ายพัก'],
          title:m['รหัสคำนำหน้า']==''?0:m['รหัสคำนำหน้า'],
          firstname:m['ชื่อ'],
          lastname:m['นามสกุล'],
          titleEn:m['รหัสคำนำหน้าEn']==''?0:m['รหัสคำนำหน้าEn'],
          firstnameEn:m['ชื่อEn'],
          lastnameEn:m['นามสกุลEn'],
          gendarId:m['รหัสเพศ']==''?0:m['รหัสเพศ'],
          acceptDate:m['วันมอบตัว'],
          birthDate:m['วันที่เกิด'],
          nationalityId:m['รหัสสัญชาติ']==''?0:m['รหัสสัญชาติ'],
          ethnicityId:m['รหัสเชื้อชาติ']==''?0:m['รหัสเชื้อชาติ'],
          religionId:m['รหัสศาสนา']==''?0:m['รหัสศาสนา'],
          email:m['ที่อยู่อีเมลล์'],
          phoneNumber:m['เบอร์โทรศํพท์'],
          specialAbility:m['ความสามารถพิเศษ'],

          birthHospital:m['โรงพยาบาล'],
          birthCountryId:m['รหัสประเทศโรงพยาบาล']==''?0:m['รหัสประเทศโรงพยาบาล'],
          birthProvinceId:m['รหัสจังหวัดโรงพยาบาล']==''?0:m['รหัสจังหวัดโรงพยาบาล'],
          birthDistrictId:m['รหัสอำเภอโรงพยาบาล']==''?0:m['รหัสอำเภอโรงพยาบาล'],
          birthSubDistrictId:m['รหัสตำบลโรงพยาบาล']==''?0:m['รหัสตำบลโรงพยาบาล'],
          birthPostCode:m['รหัสไปรษณีย์โรงพยาบาล'],

          houseNumber:m['บ้านเลขที่ตามทะเบียนบ้าน'],
          village:m['หมู่ที่ตามทะเบียนบ้าน'],
          road:m['ถนนตามทะเบียนบ้าน'],
          countryId:m['รหัสประเทศตามทะเบียนบ้าน']==''?0:m['รหัสประเทศตามทะเบียนบ้าน'],
          provinceId:m['รหัสจังหวัดตามทะเบียนบ้าน']==''?0:m['รหัสจังหวัดตามทะเบียนบ้าน'],
          districtId:m['รหัสอำเภอตามทะเบียนบ้าน']==''?0:m['รหัสอำเภอตามทะเบียนบ้าน'],
          subDistrictId:m['รหัสตำบลตามทะเบียนบ้าน']==''?0:m['รหัสตำบลตามทะเบียนบ้าน'],
          postCode:m['รหัสไปรษณีย์ตามทะเบียนบ้าน']==''?0:m['รหัสไปรษณีย์ตามทะเบียนบ้าน'],

          contractHouseNumber:m['บ้านเลขที่ติดต่อ'],
          contractVillage:m['หมู่ที่ติดต่อ'],
          contractRoad:m['ถนนติดต่อ'],
          contractCountryId:m['รหัสประเทศติดต่อ']==''?0:m['รหัสประเทศติดต่อ'],
          contractProvinceId:m['รหัสจังหวัดติดต่อ']==''?0:m['รหัสจังหวัดติดต่อ'],
          contractDistrictId:m['รหัสอำเภอติดต่อ']==''?0:m['รหัสอำเภอติดต่อ'],
          contractSubDistrictId:m['รหัสตำบลติดต่อ']==''?0:m['รหัสตำบลติดต่อ'],
          contractPostCode:m['รหัสไปรษณีย์ติดต่อ'],

          oldSchoolName:m['ชื่อโรงเรียน'],
          oldSchoolCountryId:m['รหัสประเทศโรงเรียนเดิม']==''?0:m['รหัสประเทศโรงเรียนเดิม'],
          oldSchoolProvinceId:m['รหัสจังหวัดโรงเรียนเดิม']==''?0:m['รหัสจังหวัดโรงเรียนเดิม'],
          oldSchoolDistrictId:m['รหัสอำเภอโรงเรียนเดิม']==''?0:m['รหัสอำเภอโรงเรียนเดิม'],
          oldSchoolSubDistrictId:m['รหัสตำบลโรงเรียนเดิม']==''?0:m['รหัสตำบลโรงเรียนเดิม'],
          oldSchoolPostCode:m['รหัสไปรษณีย์โรงเรียนเดิม'],

          closeFriendInClass:m['ชื่อเพื่อนสนิทในชั้นเรียน'],
          closeFriendInClassNickname:m['ชื่อเล่นเพื่อนสนิทในชั้นเรียน'],
          closeFriendInClassSchool:m['โรงเรียนเพื่อนสนิทในชั้นเรียน'],
          closeFriendInClassPhone:m['เบอร์โทรเพื่อนสนิทในชั้นเรียน'],

          closeFriendOtherClass:m['ชื่อเพื่อนสนิทต่างชั้นเรียน'],
          closeFriendOtherClassNickname:m['ชื่อเล่นเพื่อนสนิทต่างชั้นเรียน'],
          closeFriendOtherClassSchool:m['โรงเรียนเพื่อนสนิทต่างชั้นเรียน'],
          closeFriendOtherClassPhone:m['เบอร์โทรเพื่อนสนิทต่างชั้นเรียน'],

          bloodType:m['รหัสหมู่เลือด']==''?0:m['รหัสหมู่เลือด'],
          congenitalDisease:m['โรคประจำตัว'],
          height:m['ส่วนสูง']==''?0:m['ส่วนสูง'],
          weight:m['น้ําหนัก']==''?0:m['น้ําหนัก'],
          defect:m['ข้อบกพร่อง'],

          aliveWithId:m['รหัสปัจจุบันอาศัยอยู่กับ']==''?0:m['รหัสปัจจุบันอาศัยอยู่กับ'],
          parentStatus:m['รหัสสถานะผู้ปกครองปัจจุบัน']==''?0:m['รหัสสถานะผู้ปกครองปัจจุบัน'],

          fatherTitle:m['รหัสคำนำหน้าบิดา']==''?0:m['รหัสคำนำหน้าบิดา'],
          fatherFirstname:m['ชื่อบิดา'],
          fatherLastname:m['นามสกุลบิดา'],
          fatherPersonalCode:m['หมายเลขบัตรประชาชนบิดา'],
          fatherBloodType:m['รหัสหมู่เลือดบิดา']==''?0:m['รหัสหมู่เลือดบิดา'],
          fatherIncome:m['รายได้บิดา'],
          fatherOccupation:m['อาชีพบิดา'],
          fatherPhone:m['เบอร์โทรศํพท์บิดา'],

          motherTitle:m['รหัสคำนำหน้ามารดา']==''?0:m['รหัสคำนำหน้ามารดา'],
          motherFirstname:m['ชื่อมารดา'],
          motherLastname:m['นามสกุลมารดา'],
          motherPersonalCode:m['หมายเลขบัตรประชาชนมารดา'],
          motherBloodType:m['รหัสหมู่เลือดมารดา']==''?0:m['รหัสหมู่เลือดมารดา'],
          motherIncome:m['รายได้มารดา'],
          motherOccupation:m['อาชีพมารดา'],
          motherPhone:m['เบอร์โทรศํพท์มารดา'],

          parentTitle:m['รหัสคำนำหน้าผู้ปกครอง']==''?0:m['รหัสคำนำหน้าผู้ปกครอง'],
          parentFirstname:m['ชื่อผู้ปกครอง'],
          parentLastname:m['นามสกุลผู้ปกครอง'],
          parentPersonalCode:m['หมายเลขบัตรประชาชนผู้ปกครอง'],
          parentBloodType:m['รหัสหมู่เลือดผู้ปกครอง']==''?0:m['รหัสหมู่เลือดผู้ปกครอง'],
          parentIncome:m['รายได้ผู้ปกครอง'],
          parentOccupation:m['อาชีพผู้ปกครอง'],
          parentPhone:m['เบอร์โทรศํพท์ผู้ปกครอง'],
          reasonResign:m['เหตุผลการลาออก'],
        }
      })
      
        for (const el of dataMapped) {
          const birthDate = this.getDate(el.birthDate)  
          const leaveDate = this.getDate(el.leaveDate)  
          const acceptDate = this.getDate(el.acceptDate)
          const model:Student = {...el,birthDate:birthDate,acceptDate:acceptDate,leaveDate:leaveDate}
          const studentIsexist = await this.studentRepository.findOne({where:{studentCode:el.studentCode,deleted:false}})
          if(!studentIsexist){
            const info = await this.studentRepository.save(
              this.studentRepository.create(model)
            )
            const regisModel:RegisterDto = {
              email:`${el.studentCode}`,
              password:`${el.studentCode}`,
              firstname:el.firstname,
              lastname:el.lastname,
              inforId:info.id,
              type:UserType.STUDENT
            }
            const user = await this.authService.register(regisModel)
          }
          
        }
        return {}

    }
  getDate(birthDate: any) {
    if(!birthDate){
      return undefined
    }
    const datArr = birthDate.split('/')
    if(datArr.length == 3){
      const year = this.getYear(datArr[2])
      return new Date(`${year}/${datArr[1]}/${datArr[0]}`) 
    }
    return undefined
  }
  getBirthDate(birthDate: any) {
    if(!birthDate){
      return undefined
    }
    const datArr = birthDate.split('/')
    if(datArr.length == 3){
      const year = this.getYear(datArr[2])
      return `${year}/${datArr[1]}/${datArr[0]}`
    }
    return undefined

  }

  getLeaveDate(leaveDate: any) {
    if(leaveDate){
      const datArr = leaveDate.split('/')
      if(datArr.length == 3){
        const year = this.getYear(datArr[2])
        return `${year}/${datArr[1]}/${datArr[0]}`
      }
      return
    }

  }

  getDateExport(date: Date): any {
    if(!date){
      return ''
    }
    const day = date.getDate()
    const mount = date.getMonth()+1
    const year = date.getFullYear()+543
    return `${day}/${mount}/${year}`
  }
  getYear(arg0: any) {
    return (+arg0)-543
  }

    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(VwStudentList)
        private readonly vwStudentRepository: Repository<VwStudentList>,
        @InjectRepository(VwStudentItem)
        private readonly itemRepository:Repository<VwStudentItem>,
        @InjectRepository(VwGendarDropdown)
        private readonly vwDropdownGendarRepository:Repository<VwGendarDropdown>,
        @InjectRepository(VwNationalityDropdown)
        private readonly vwDropdownNationalityRepository:Repository<VwNationalityDropdown>,
        @InjectRepository(VwEthnicityDropdown)
        private readonly vwDropdownEthnicityRepository:Repository<VwEthnicityDropdown>,
        @InjectRepository(VwReligionDropdown)
        private readonly vwDropdownReligionRepository:Repository<VwReligionDropdown>,
        @InjectRepository(VwCountryDropdown)
        private readonly vwDropdownCountryRepository:Repository<VwCountryDropdown>,
        @InjectRepository(VwSubDistrictDropdown)
        private readonly vwDropdownSubDistrictRepository:Repository<VwSubDistrictDropdown>,
        @InjectRepository(VwDistrictDropdown)
        private readonly vwDropdownDistrictRepository:Repository<VwDistrictDropdown>,
        @InjectRepository(VwProvinceDropdown)
        private readonly vwDropdownProvinceRepository:Repository<VwProvinceDropdown>,
        @InjectRepository(VwAliveWithDropdown)
        private readonly vwDropdownAliveWithRepository:Repository<VwAliveWithDropdown>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        
        @InjectRepository(VwParentStatusDropdown)
        private readonly vwDropdownParentStatusRepository:Repository<VwParentStatusDropdown>,
        @InjectRepository(Teacher)
        private readonly teacherRepository:Repository<Teacher>,
        @InjectRepository(Users)
        private readonly usersRepository:Repository<Users>,
        
        private readonly dropdownService: DropdownService,
        private readonly imagesService:ImagesService,
        private readonly authService: AuthenticationsService
        ){
        super()
    }
    async gendarDropdown(dto: SearchGendarDto):Promise<SelectItems[]> {
        return this.dropdownService.gendarDropdown(dto,this.vwDropdownGendarRepository);
      }
    async nationalityDropdown(dto: SearchNationalityDto):Promise<SelectItems[]> {
        return this.dropdownService.nationalityDropdown(dto,this.vwDropdownNationalityRepository);
      }
    async ethnicityDropdown(dto: SearchEthnicityDto):Promise<SelectItems[]> {
        return this.dropdownService.ethnicityDropdown(dto,this.vwDropdownEthnicityRepository);
      }
    async religionDropdown(dto: SearchReligionDto):Promise<SelectItems[]> {
        return this.dropdownService.religionDropdown(dto,this.vwDropdownReligionRepository);
      }
    async countryDropdown(dto: SearchCountryDto):Promise<SelectItems[]> {

        return this.dropdownService.countryDropdown(dto,this.vwDropdownCountryRepository);
      }
    async subDistrictDropdown(dto: SearchSubDistrictDto,id:number):Promise<SelectItems[]> {
      if(id==0){
        return []
      }
      const searchDto = new SearchCountryDto()
      searchDto.refTable = 'sub_district'
      searchDto.tableKey = 'sub_district'
      searchDto.searchCondition = [{
          columnName:'refId',
          tableName:'sub_district',
          feildName:'refId',
          value:`${id}`,
          inputType:ColumnType.INT,
          equalityOperator: Operators.EQUAL,
          operator:Operators.EQUAL
      }]
        return this.dropdownService.subDistrictDropdown(searchDto,this.vwDropdownSubDistrictRepository);
      }
    async districtDropdown(dto: SearchDistrictDto,id:number):Promise<SelectItems[]> {
      if(id==0){
        return []
      }
      const searchDto = new SearchCountryDto()
      searchDto.refTable = 'district'
      searchDto.tableKey = 'district'
      searchDto.searchCondition = [{
          columnName:'refId',
          tableName:'district',
          feildName:'refId',
          value:`${id}`,
          inputType:ColumnType.INT,
          equalityOperator: Operators.EQUAL,
          operator:Operators.EQUAL
      }]
        return this.dropdownService.districtDropdown(searchDto,this.vwDropdownDistrictRepository);
      }
    async provinceDropdown(dto: SearchProvinceDto,id:number):Promise<SelectItems[]> {
      if(id==0){
        return []
      }
      const searchDto = new SearchCountryDto()
      searchDto.refTable = 'province'
      searchDto.tableKey = 'province'
      searchDto.searchCondition = [{
          columnName:'refId',
          tableName:'province',
          feildName:'refId',
          value:`${id}`,
          inputType:ColumnType.INT,
          equalityOperator: Operators.EQUAL,
          operator:Operators.EQUAL
      }]
        return this.dropdownService.provinceDropdown(searchDto,this.vwDropdownProvinceRepository);
      }
    async aliveWithDropdown(dto: SearchAliveWithDto):Promise<SelectItems[]> {
        return this.dropdownService.aliveWithDropdown(dto,this.vwDropdownAliveWithRepository);
      }
    async classroomDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomDropdown(dto,this.vwDropdownClassroomRepository);
      }
      async classroomTypeDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }
      async parentStatusDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.parentStatusDropdown(dto,this.vwDropdownParentStatusRepository);
      }
      
    async list(dto:SearchStudentDto):Promise<SearchResult<VwStudentList>>{
        const builder = this.createQueryBuider<VwStudentList>(dto,this.vwStudentRepository)

        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwStudentList>(dto.paginator,count,data);
    }
    async create(dto:CreateStudentDto,req:CustomRequest):Promise<Student>{   
      const duplicat = await this.studentRepository.findOne({where:{deleted:false,studentCode:dto.studentCode}})
      if(duplicat){
        throw new BadRequestException('รหัสนักเรียนมีอยู่แล้ว')
      }
      const moduleName = 'images'
      const fileName = filename()
      if(dto.imageProfile){
        await savefileWithName(dto.imageProfile[0],fileName,moduleName)
      }
        const en = this.toCreateModel(dto,req) as Student  
        const result = await this.studentRepository.save(
            this.studentRepository.create(en)
        );
        if(dto.imageProfile){
          await this.imagesService.create({imageUrl:fileName,refId:result.id,refType:ImageType.STUDENT,imageType:0},req)
        }
        const regisModel:RegisterDto = {
          email:`${result.studentCode}`,
          password:`${result.studentCode}`,
          firstname:`${result.firstname}`,
          lastname:`${result.lastname}`,
          inforId:result.id,
          type:UserType.STUDENT
        }
        const user = await this.authService.register(regisModel)
        return result

    }
    async update(id:number,dto:UpdateStudentDto,req:CustomRequest):Promise<StudentDto>{
      const duplicat = await this.studentRepository.findOne({where:{deleted:false,studentCode:dto.studentCode,id:Not(id)}})
      console.log(duplicat);
      
      if(duplicat){
        throw new BadRequestException('รหัสนักเรียนมีอยู่แล้ว')
      }
      const moduleName = 'images'
      const fileName = filename()

      if(dto.imageProfile){
        await savefileWithName(dto.imageProfile[0],fileName,moduleName)
      }
      const m = await this.studentRepository.findOne({where:{id:id}})
      const result = await this.studentRepository.save(
          this.toUpdateModel(m,dto,req)
      );
      if(dto.imageProfile){
        await this.imagesService.create({imageUrl:fileName,refId:result.id,refType:ImageType.STUDENT,imageType:0},req)
      }
        return result
    }
    async delete(id:number,req:CustomRequest):Promise<StudentDto>{
        let m = await this.studentRepository.findOne({where:{id:id}})
        const user = await this.usersRepository.findOne({where:{inforId:m.id}})
        await this.usersRepository.softRemove(
          await this.usersRepository.save(this.toDeleteModel(user,req))
        )
        return this.studentRepository.softRemove(
            await this.studentRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
      let mentorName:string = ''
      const result = await this.itemRepository.findOne({where:{id:id}})
      if(result.classroomId!=null&& result.classroomTypeId!=null){
    
        const mentorList = await this.teacherRepository.find({where:{classroomId:result.classroomId,classroomTypeId:result.classroomTypeId,deleted:false}})
        mentorList.forEach(el=>{
          mentorName = mentorName+=` ${el.firstname} - ${el.lastname}   `
        })
      }
      return {...result, mentorTeacher:mentorName}
      
    }
    async export(dto:SearchExportExcelDto):Promise<any>{
      const builder = this.createQueryBuider<VwStudentItem>(dto,this.itemRepository)
      const data = await builder
      .getMany();
      const dataMapped:any[] = data.map(m=>{
        return{
          'รหัสประจำตัว':m.studentCode,
          'เลขที่':m.studentNumber,
          'รหัสบัตรประชาชน':m.personalCode,
          'รหัสชั้นเรียน':m.classroomTypeId,
          'รหัสห้อง':m.classroomId,
          'รหัสห้องเรียนพิเศษ':m.classSpecial,
          'ห้องเรียนพิเศษอื่นๆ':m.classSpecialText,
          'รหัสสถานะ':m.status,
          'วันที่ออกย้ายพัก':this.getDateExport( m.leaveDate),
          'รหัสคำนำหน้า':m.title,
          'ชื่อ':m.firstname,
          'นามสกุล':m.lastname,
          'รหัสคำนำหน้าEn':m.titleEn,
          'ชื่อEn':m.firstnameEn,
          'นามสกุลEn':m.lastnameEn,
          'รหัสเพศ':m.gendarId,
          'วันมอบตัว':this.getDateExport(m.acceptDate) ,
          'วันที่เกิด':this.getDateExport(m.birthDate) ,
          'รหัสสัญชาติ':m.nationalityId,
          'รหัสเชื้อชาติ':m.ethnicityId,
          'รหัสศาสนา':m.religionId,
          'ที่อยู่อีเมลล์':m.email,
          'เบอร์โทรศํพท์':m.phoneNumber,
          'ความสามารถพิเศษ':m.specialAbility,

          'โรงพยาบาล':m.birthHospital,
          'รหัสประเทศโรงพยาบาล':m.birthCountryId,
          'รหัสจังหวัดโรงพยาบาล':m.birthProvinceId,
          'รหัสอำเภอโรงพยาบาล':m.birthDistrictId,
          'รหัสตำบลโรงพยาบาล':m.birthSubDistrictId,
          'รหัสไปรษณีย์โรงพยาบาล':m.birthPostCode,

          'บ้านเลขที่ตามทะเบียนบ้าน':m.houseNumber,
          'หมู่ที่ตามทะเบียนบ้าน':m.village,
          'ถนนตามทะเบียนบ้าน':m.road,
          'รหัสประเทศตามทะเบียนบ้าน':m.countryId,
          'รหัสจังหวัดตามทะเบียนบ้าน':m.provinceId,
          'รหัสอำเภอตามทะเบียนบ้าน':m.districtId,
          'รหัสตำบลตามทะเบียนบ้าน':m.subDistrictId,
          'รหัสไปรษณีย์ตามทะเบียนบ้าน':m.postCode,

          'บ้านเลขที่ติดต่อ':m.contractHouseNumber,
          'หมู่ที่ติดต่อ':m.contractVillage,
          'ถนนติดต่อ':m.contractRoad,
          'รหัสประเทศติดต่อ':m.contractCountryId,
          'รหัสจังหวัดติดต่อ':m.contractProvinceId,
          'รหัสอำเภอติดต่อ':m.contractDistrictId,
          'รหัสตำบลติดต่อ':m.contractSubDistrictId,
          'รหัสไปรษณีย์ติดต่อ':m.contractPostCode,

          'ชื่อโรงเรียน':m.oldSchoolName,
          'รหัสประเทศโรงเรียนเดิม':m.oldSchoolCountryId,
          'รหัสจังหวัดโรงเรียนเดิม':m.oldSchoolProvinceId,
          'รหัสอำเภอโรงเรียนเดิม':m.oldSchoolDistrictId,
          'รหัสตำบลโรงเรียนเดิม':m.oldSchoolSubDistrictId,
          'รหัสไปรษณีย์โรงเรียนเดิม':m.oldSchoolPostCode,

          'ชื่อเพื่อนสนิทในชั้นเรียน':m.closeFriendInClass,
          'ชื่อเล่นเพื่อนสนิทในชั้นเรียน':m.closeFriendInClassNickname,
          'โรงเรียนเพื่อนสนิทในชั้นเรียน':m.closeFriendInClassSchool,
          'เบอร์โทรเพื่อนสนิทในชั้นเรียน':m.closeFriendInClassPhone,

          'ชื่อเพื่อนสนิทต่างชั้นเรียน':m.closeFriendOtherClass,
          'ชื่อเล่นเพื่อนสนิทต่างชั้นเรียน':m.closeFriendOtherClassNickname,
          'โรงเรียนเพื่อนสนิทต่างชั้นเรียน':m.closeFriendOtherClassSchool,
          'เบอร์โทรเพื่อนสนิทต่างชั้นเรียน':m.closeFriendOtherClassPhone,

          'รหัสหมู่เลือด':m.bloodType,
          'โรคประจำตัว':m.congenitalDisease,
          'ส่วนสูง':m.height,
          'น้ําหนัก':m.weight,
          'ข้อบกพร่อง':m.defect,

          'รหัสปัจจุบันอาศัยอยู่กับ':m.aliveWithId,
          'รหัสสถานะผู้ปกครองปัจจุบัน':m.parentStatus,

          'รหัสคำนำหน้าบิดา':m.fatherTitle,
          'ชื่อบิดา':m.fatherFirstname,
          'นามสกุลบิดา':m.fatherLastname,
          'หมายเลขบัตรประชาชนบิดา':m.fatherPersonalCode,
          'รหัสหมู่เลือดบิดา':m.fatherBloodType,
          'รายได้บิดา':m.fatherIncome,
          'อาชีพบิดา':m.fatherOccupation,
          'เบอร์โทรศํพท์บิดา':m.fatherPhone,

          'รหัสคำนำหน้ามารดา':m.motherTitle,
          'ชื่อมารดา':m.motherFirstname,
          'นามสกุลมารดา':m.motherLastname,
          'หมายเลขบัตรประชาชนมารดา':m.motherPersonalCode,
          'รหัสหมู่เลือดมารดา':m.motherBloodType,
          'รายได้มารดา':m.motherIncome,
          'อาชีพมารดา':m.motherOccupation,
          'เบอร์โทรศํพท์มารดา':m.motherPhone,

          'รหัสคำนำหน้าผู้ปกครอง':m.parentTitle,
          'ชื่อผู้ปกครอง':m.parentFirstname,
          'นามสกุลผู้ปกครอง':m.parentLastname,
          'หมายเลขบัตรประชาชนผู้ปกครอง':m.parentPersonalCode,
          'รหัสหมู่เลือดผู้ปกครอง':m.parentBloodType,
          'รายได้ผู้ปกครอง':m.parentIncome,
          'อาชีพผู้ปกครอง':m.parentOccupation,
          'เบอร์โทรศํพท์ผู้ปกครอง':m.parentPhone,
          'เหตุผลการลาออก':m.reasonResign
        }
      })
      return exportExcel(dataMapped)
    }
    async exportTH(dto:SearchExportExcelDto):Promise<any>{
      const builder = this.createQueryBuider<VwStudentItem>(dto,this.itemRepository)
      const data = await builder
      .getMany();
      let dataFilter = []
      data.forEach(el=>{
        let model={}
        dto.bindingField.forEach(en=>{
          if(en.active){
            model[en.th] = el[en.en]
            if(en.en=='title'){
              model[en.th] =getLabelEnum(TITLE, el[en.en]) 
            }
            if(en.en=='titleEn'){
              model[en.th] = getLabelEnum(TITLE_EN, el[en.en]) 
            }
            if(en.en=='status'){
              model[en.th] = getLabelEnum(STUDENT_STATUS, el[en.en]) 
            }
            if(en.en=='bloodType'){
              model[en.th] = getLabelEnum(BLOOD_TYPE, el[en.en]) 
            }
            if(en.en=='motherBloodType'){
              model[en.th] = getLabelEnum(BLOOD_TYPE, el[en.en]) 
            }
            if(en.en=='fatherBloodType'){
              model[en.th] = getLabelEnum(BLOOD_TYPE, el[en.en]) 
            }
            if(en.en=='parentBloodType'){
              model[en.th] = getLabelEnum(BLOOD_TYPE, el[en.en]) 
            }
            if(en.en=='fatherTitle'){
              model[en.th] =getLabelEnum(TITLE, el[en.en]) 
            }
            if(en.en=='motherTitle'){
              model[en.th] =getLabelEnum(TITLE, el[en.en]) 
            }
            if(en.en=='parentTitle'){
              model[en.th] =getLabelEnum(TITLE, el[en.en]) 
            }
            if(en.en=='classSpecial'){
              model[en.th] =getLabelEnum(CLASS_SPECIAL, el[en.en]) 
            }
            if(en.en=='acceptDate'){
              model[en.th] =this.getDateExport(el[en.en])
            }
            if(en.en=='birthDate'){
              model[en.th] =this.getDateExport(el[en.en])
            }
            if(en.en=='leaveDate'){
              model[en.th] =this.getDateExport( el[en.en])
            }

          }

        })
        dataFilter.push(model)
      })
      return exportExcel(dataFilter)
    }
}
