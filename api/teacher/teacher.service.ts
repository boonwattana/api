import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Not, Repository } from 'typeorm';
import { CreateTeacherDto, TeacherDto, SearchTeacherDto, UpdateTeacherDto } from './teacher.dto';
import { Teacher, VwTeacherDropdown, VwTeacherItem, VwTeacherList } from './teacher.entity';
import { VwGendarDropdown } from 'src/api/gendar/gendar.entity';
import { SearchGendarDto } from 'src/api/gendar/gendar.dto';
import { VwNationalityDropdown } from 'src/api/nationality/nationality.entity';
import { SearchNationalityDto } from 'src/api/nationality/nationality.dto';
import { VwEthnicityDropdown } from 'src/api/ethnicity/ethnicity.entity';
import { SearchEthnicityDto } from 'src/api/ethnicity/ethnicity.dto';
import { VwReligionDropdown } from 'src/api/religion/religion.entity';
import { SearchReligionDto } from 'src/api/religion/religion.dto';
import { VwPractitionerLevelDropdown } from 'src/api/practitioner-level/practitioner-level.entity';
import { SearchPractitionerLevelDto } from 'src/api/practitioner-level/practitioner-level.dto';
import { VwEducationBackgroundDropdown } from 'src/api/education-background/education-background.entity';
import { SearchEducationBackgroundDto } from 'src/api/education-background/education-background.dto';
import { VwCountryDropdown } from 'src/api/country/country.entity';
import { SearchCountryDto } from 'src/api/country/country.dto';
import { VwProvinceDropdown } from 'src/api/province/province.entity';
import { SearchProvinceDto } from 'src/api/province/province.dto';
import { VwDistrictDropdown } from 'src/api/district/district.entity';
import { SearchDistrictDto } from 'src/api/district/district.dto';
import { VwSubDistrictDropdown } from 'src/api/sub-district/sub-district.entity';
import { SearchSubDistrictDto } from 'src/api/sub-district/sub-district.dto';
import { VwPracticleDropdown } from '../practicle/practicle.entity';
import { filename } from 'src/core/shared/utils/image.util';
import { savefileWithName } from 'src/core/shared/services/files.service';
import { ImagesService } from 'src/core/images/images.service';
import { RegisterDto } from 'src/core/authentications/authentications.dto';
import { UserType } from 'src/core/shared/constans/enum-constans';
import { AuthenticationsService } from 'src/core/authentications/authentications.service';
import { Student } from '../student/student.entity';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { Operators } from 'src/core/shared/constans/constanst';
import { ColumnType, ImageType } from 'src/core/shared/constans/enum-system';
import { SearchClassroomDto } from '../classroom/classroom.dto';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { SearchActivityStudentDto } from '../activity-student/activity-student.dto';
import { VwActivityStudentDropdown } from '../activity-student/activity-student.entity';
import { getLabelEnum } from 'src/core/shared/functions';
import { EDUCATION, PRACTITIONER_NO, TEACER_POSITION_NAME, TEACHER_STATUS, TITLE, TITLE_EN } from 'src/core/shared/constans/dropdown-constanst';
import { Users } from 'core/users/users.entity';

@Injectable()
export class TeacherService extends BaseService {
  async import(data: any[],req:CustomRequest): Promise<any> {    
    const dataMapped:any[] = data.map(m=>{
      return {
        posonalCode:m['เลขบัตรประชาชน']	,
      status:m['รหัสสถานะ']	,
      ernlyDate:m['วันที่ย้ายเกษียนออก']	,
      teacherCode:m['เลขประจำตำแหน่ง']	,
      title:m['รหัสคำนำหน้า']	,
      firstname:m['ชื่อ']	,
      lastname:m['นามสกุล']	,
      titleEn:m['รหัสคำนำหน้าEn']	,
      firstnameEn:m['ชื่อEn']	,
      lastnameEn:m['นามสกุลEn']	,
      birthDate:m['วันที่เกิด']	,
      gendarId:m['รหัสเพศ']	,
      nationalityId:m['รหัสสัญชาติ']	,
      ethnicityId:m['รหัสเชื้อชาติ']	,
      religionId:m['รหัสศาสนา']	,
      isTeacher:m['ครู']	,
      positionNumber:m['เลขที่ตำแหน่ง']	,
      positionName:m['ตำแหน่ง']	,
      practitionerLevelId:m['รหัสวิทยฐานะ']	,
      practitionerNo:m['รหัสอันดับ']	,
      educationBackgroundId:m['รหัสวุฒิการศึกษาสูงสุด']	,
      otherEducationText:m['วุฒิการศึกษาสูงสุดอื่นๆ']	,
      educationMajor:m['สาขาวิชาเอก']	,
      educationMinor:m['วิชาโท']	,
      setInDate:m['วันที่เข้ารับราชการ']	,
      setInDateSchool:m['วันที่ดำรงตำแหน่งที่โรงเรียนบุญวัฒนา']	,
      classroomTypeId :m['รหัสประจำชั้น']	,
      classroomId:m['รหัสประจำห้อง']	,
      actionTeach:m['รหัสปฎิบัติหน้าที่สอน']	,
      actionTeachText:m['ปฎิบัติหน้าที่สอนอื่นๆ']	,
      teacherClass1:m['ระดับชั้นที่สอนม1']	,
      teacherClass2:m['ระดับชั้นที่สอนม2']	,
      teacherClass3:m['ระดับชั้นที่สอนม3']	,
      teacherClass4:m['ระดับชั้นที่สอนม4']	,
      teacherClass5:m['ระดับชั้นที่สอนม5']	,
      teacherClass6:m['ระดับชั้นที่สอนม6']	,
      subjectGroupId:m['รหัสสังกัด']	,
      isOtherSubjectGroup:m['ใช้สังกัดอื่นๆ']	,
      subjectGroupText:m['สังกัดอื่นๆ']	,
      actionWork:m['วิชาหลักที่สอน']	,
      actionWorkSpecial :m['ฝ่ายวิชาการ']	,
      actionWorkSpecial2:m['ฝ่ายอำนวยการ']	,
      actionWorkSpecial3:m['ฝ่ายกิจการนักเรียน'],
      actionWorkSpecial4:m['ฝ่ายบริหารทั่วไป']	,
      activityStudentId:m['รหัสกิจกรรมพัฒนาผู้เรียน']	,
      teacherEmail:m['ที่อยู่อีเมลล์']	,
      phoneNumber:m['เบอร์โทรศํพท์']	,
      houseNumber:m['บ้านเลขที่']	,
      village:m['หมู่ที่']	,
      road:m['ถนน']	,
      countryId:m['รหัสประเทศ']	,
      provinceId:m['รหัสจังหวัด']	,
      districtId:m['รหัสอำเภอ']	,
      subDistrictId:m['รหัสตำบล']	,
      postCode:m['รหัสไปรษณีย์']	,
      }
    })
        
    for (const el of dataMapped) {
  
      const  birthDate=this.getDate(el.birthDate)
      const setInDate=this.getDate(el.setInDate)
      const setInDateSchool=this.getDate(el.setInDateSchool)
      const  ernlyDate=this.getDate(el.ernlyDate)
      console.log(birthDate,setInDate,setInDateSchool,ernlyDate);
      
      const model:Teacher = {...el
        ,birthDate:birthDate
        ,setInDate:setInDate
        ,setInDateSchool:setInDateSchool
        ,ernlyDate:ernlyDate
      }
      console.log(model);
      
      const studentIsexist = await this.teacherRepository.findOne({where:{teacherCode:el.teacherCode,deleted:false}})
      if(!studentIsexist){
        const info = await this.teacherRepository.save(
          this.teacherRepository.create(
            model
            )
        )
        
        const regisModel:RegisterDto = {
          email:`${info.teacherCode}`,
          password:`${info.teacherCode}`,
          firstname:`${info.firstname}`,
          lastname:`${info.lastname}`,
          inforId:info.id,
          type:UserType.TEACHER
        }
        await this.authService.register(regisModel)
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
getYear(arg0: any) {
  return (+arg0)-543
}
async export(dto:SearchExportExcelDto):Promise<any>{
  const builder = this.createQueryBuider<VwTeacherItem>(dto,this.itemRepository)
  const data = await builder
  .getMany();
  const mapedData:any[] = data.map(m=>{
    return{
      'เลขบัตรประชาชน':m.posonalCode	,
      'รหัสสถานะ':m.status	,
      'วันที่ย้ายเกษียนออก':this.getDateExport(m.ernlyDate)	,
      'เลขประจำตำแหน่ง':m.teacherCode	,
      'รหัสคำนำหน้า':m.title	,
      'ชื่อ':m.firstname	,
      'นามสกุล':m.lastname	,
      'รหัสคำนำหน้าEn':m.titleEn	,
      'ชื่อEn':m.firstnameEn	,
      'นามสกุลEn':m.lastnameEn	,
      'วันที่เกิด':this.getDateExport( m.birthDate)	,
      'รหัสเพศ':m.gendarId	,
      'รหัสสัญชาติ':m.nationalityId	,
      'รหัสเชื้อชาติ':m.ethnicityId	,
      'รหัสศาสนา':m.religionId	,
      'ครู':m.isTeacher	,
      'เลขที่ตำแหน่ง':m.positionNumber	,
      'ตำแหน่ง':m.positionName	,
      'รหัสวิทยฐานะ':m.practitionerLevelId	,
      'รหัสอันดับ':m.practitionerNo	,
      'รหัสวุฒิการศึกษาสูงสุด':m.educationBackgroundId	,
      'วุฒิการศึกษาสูงสุดอื่นๆ':m.otherEducationText	,
      'สาขาวิชาเอก':m.educationMajor	,
      'วิชาโท':m.educationMinor	,
      'วันที่เข้ารับราชการ':this.getDateExport(m.setInDate)	,
      'วันที่ดำรงตำแหน่งที่โรงเรียนบุญวัฒนา':this.getDateExport(m.setInDateSchool)	,
      'รหัสประจำชั้น':m.classroomTypeId	,
      'รหัสประจำห้อง':m.classroomId	,
      'รหัสปฎิบัติหน้าที่สอน':m.actionTeach	,
      'ปฎิบัติหน้าที่สอนอื่นๆ':m.actionTeachText	,
      'ระดับชั้นที่สอนม1':m.teacherClass1	,
      'ระดับชั้นที่สอนม2':m.teacherClass2	,
      'ระดับชั้นที่สอนม3':m.teacherClass3	,
      'ระดับชั้นที่สอนม4':m.teacherClass4	,
      'ระดับชั้นที่สอนม5':m.teacherClass5	,
      'ระดับชั้นที่สอนม6':m.teacherClass6	,
      'รหัสสังกัด':m.subjectGroupId	,
      'ใช้สังกัดอื่นๆ':m.isOtherSubjectGroup	,
      'สังกัดอื่นๆ':m.subjectGroupText	,
      'วิชาหลักที่สอน':m.actionWork	,
      'ฝ่ายวิชาการ':m.actionWorkSpecial	,
      'ฝ่ายอำนวยการ':m.actionWorkSpecial2	,
      'ฝ่ายกิจการนักเรียน':m.actionWorkSpecial3,
      'ฝ่ายบริหารทั่วไป':m.actionWorkSpecial4	,
      'รหัสกิจกรรมพัฒนาผู้เรียน':m.activityStudentId	,
      'ที่อยู่อีเมลล์':m.teacherEmail	,
      'เบอร์โทรศํพท์':m.phoneNumber	,
      'บ้านเลขที่':m.houseNumber	,
      'หมู่ที่':m.village	,
      'ถนน':m.road	,
      'รหัสประเทศ':m.countryId	,
      'รหัสจังหวัด':m.provinceId	,
      'รหัสอำเภอ':m.districtId	,
      'รหัสตำบล':m.subDistrictId	,
      'รหัสไปรษณีย์':m.postCode	,
    }
  })
  return exportExcel(mapedData)
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

async exportTH(dto:SearchExportExcelDto):Promise<any>{
  const builder = this.createQueryBuider<VwTeacherItem>(dto,this.itemRepository)
  const data = await builder
  .getMany();
  // const dataList = data.map(m=>{
  //   return {
  //     "คำนำหน้าชื่อ":getLabelEnum(TITLE,m.title),
  //     "ชื่อ":m.firstname
  //   }
  // })
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
          model[en.th] = getLabelEnum(TEACHER_STATUS, el[en.en]) 
        }
        if(en.en=='positionName'){
          model[en.th] = getLabelEnum(TEACER_POSITION_NAME, el[en.en]) 
        }
        if(en.en=='practitionerNo'){
          model[en.th] = getLabelEnum(PRACTITIONER_NO, el[en.en]) 
        }

        if(en.en=='educationBackgroundId'){
          model[en.th] = getLabelEnum(EDUCATION, el[en.en]) 
        }
        if(en.en=='setInDateSchool'){
          model[en.th] =this.getDateExport( el[en.en])
        }
        if(en.en=='setInDate'){
          model[en.th] =this.getDateExport( el[en.en])
        }
        if(en.en=='leaveDate'){
          model[en.th] =this.getDateExport( el[en.en])
        }
        if(en.en=='ernlyDate'){
          model[en.th] =this.getDateExport( el[en.en])
        }
      }
    })
    dataFilter.push(model)
  })
  return exportExcel(dataFilter)
}
    constructor(
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,
        @InjectRepository(VwTeacherList)
        private readonly vwTeacherRepository: Repository<VwTeacherList>,
        @InjectRepository(VwTeacherItem)
        private readonly itemRepository:Repository<VwTeacherItem>,
        @InjectRepository(VwGendarDropdown)
        private readonly vwDropdownGendarRepository:Repository<VwGendarDropdown>,
        @InjectRepository(VwNationalityDropdown)
        private readonly vwDropdownNationalityRepository:Repository<VwNationalityDropdown>,
        @InjectRepository(VwEthnicityDropdown)
        private readonly vwDropdownEthnicityRepository:Repository<VwEthnicityDropdown>,
        @InjectRepository(VwReligionDropdown)
        private readonly vwDropdownReligionRepository:Repository<VwReligionDropdown>,
        @InjectRepository(VwPractitionerLevelDropdown)
        private readonly vwDropdownPractitionerLevelRepository:Repository<VwPractitionerLevelDropdown>,
        @InjectRepository(VwEducationBackgroundDropdown)
        private readonly vwDropdownEducationBackgroundRepository:Repository<VwEducationBackgroundDropdown>,
        @InjectRepository(VwCountryDropdown)
        private readonly vwDropdownCountryRepository:Repository<VwCountryDropdown>,
        @InjectRepository(VwProvinceDropdown)
        private readonly vwDropdownProvinceRepository:Repository<VwProvinceDropdown>,
        @InjectRepository(VwDistrictDropdown)
        private readonly vwDropdownDistrictRepository:Repository<VwDistrictDropdown>,
        @InjectRepository(VwSubDistrictDropdown)
        private readonly vwDropdownSubDistrictRepository:Repository<VwSubDistrictDropdown>,
        @InjectRepository(VwPracticleDropdown)
        private readonly vwPracticleDropdownRepository:Repository<VwPracticleDropdown>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        @InjectRepository(VwActivityStudentDropdown)
        private readonly vwActivityStudentDropdownRepository:Repository<VwActivityStudentDropdown>,
        @InjectRepository(VwPracticleDropdown)
        private readonly vwDropdownPracticleRepository:Repository<VwPracticleDropdown>,
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
      
      async practicleDropdown(dto: SearchPractitionerLevelDto):Promise<SelectItems[]> {
        return this.dropdownService.practicleDropdown(dto,this.vwDropdownPracticleRepository);
      }
    async practitionerLevelDropdown(dto: SearchPractitionerLevelDto):Promise<SelectItems[]> {
        return this.dropdownService.practitionerlevelDropdown(dto,this.vwDropdownPractitionerLevelRepository);
      }
    async educationBackgroundDropdown(dto: SearchEducationBackgroundDto):Promise<SelectItems[]> {
        return this.dropdownService.educationbackgroundDropdown(dto,this.vwDropdownEducationBackgroundRepository);
      }
    async countryDropdown(dto: SearchCountryDto):Promise<SelectItems[]> {
        return this.dropdownService.countryDropdown(dto,this.vwDropdownCountryRepository);
      }
    // async provinceDropdown(dto: SearchProvinceDto):Promise<SelectItems[]> {
    //     return this.dropdownService.provinceDropdown(dto,this.vwDropdownProvinceRepository);
    //   }
    // async districtDropdown(dto: SearchDistrictDto):Promise<SelectItems[]> {
    //     return this.dropdownService.districtDropdown(dto,this.vwDropdownDistrictRepository);
    //   }
    // async subDistrictDropdown(dto: SearchSubDistrictDto):Promise<SelectItems[]> {
    //     return this.dropdownService.subDistrictDropdown(dto,this.vwDropdownSubDistrictRepository);
    //   }
    
    async activityStudentDropdown(dto: SearchActivityStudentDto):Promise<SelectItems[]> {
      return this.dropdownService.activitystudentDropdown(dto,this.vwActivityStudentDropdownRepository);
    }
      async subjectGroupDropdown(dto: SearchSubDistrictDto):Promise<SelectItems[]> {
        return this.dropdownService.practicleDropdown(dto,this.vwPracticleDropdownRepository);
      }
    async list(dto:SearchTeacherDto):Promise<SearchResult<VwTeacherList>>{
        const builder = this.createQueryBuider<VwTeacherList>(dto,this.vwTeacherRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwTeacherList>(dto.paginator,count,data);
    }
    async create(dto:CreateTeacherDto,req:CustomRequest):Promise<Teacher>{       
      const duplicat = await this.teacherRepository.findOne({where:{deleted:false,teacherCode:dto.teacherCode}})
      if(duplicat){
        throw new BadRequestException('รหัสครูมีอยู่แล้ว')
      } 
        const en = this.toCreateModel(dto,req) as Teacher  
        const moduleName = 'images'
        const fileName = filename()
        if(dto.teacherPhoto){
          await savefileWithName(dto.teacherPhoto[0],fileName,moduleName)
        }
        const result = await this.teacherRepository.save(
          this.teacherRepository.create(en)
      );
        if(dto.teacherPhoto){
          await this.imagesService.create({imageUrl:fileName,refId:result.id,refType:ImageType.TEACHER,imageType:0},req)
        }
        const regisModel:RegisterDto = {
          email:`${result.teacherCode}`,
          password:`${result.teacherCode}`,
          firstname:result.firstname,
          lastname:result.lastname,
          inforId:result.id,
          type:UserType.TEACHER
        }
         await this.authService.register(regisModel)
        return result
    }
    async update(id:number,dto:UpdateTeacherDto,req:CustomRequest):Promise<TeacherDto>{
      const duplicat = await this.teacherRepository.findOne({where:{deleted:false,teacherCode:dto.teacherCode,id:Not(id)}})
      console.log(duplicat);
      
      if(duplicat){
        throw new BadRequestException('รหัสครูมีอยู่แล้ว')
      }
      const moduleName = 'images'
      const fileName = filename()

      if(dto.teacherPhoto){
        await this.imagesService.removeWithRefId(id)
        await savefileWithName(dto.teacherPhoto[0],fileName,moduleName)
      }
        const m = await this.teacherRepository.findOne({where:{id:id}})
        const result =  await this.teacherRepository.save(
            this.toUpdateModel(m,dto,req)
        );
        if(dto.teacherPhoto){
          await this.imagesService.create({imageUrl:fileName,refId:result.id,refType:ImageType.TEACHER,imageType:0},req)
        }
        return result
    }
    async delete(id:number,req:CustomRequest):Promise<TeacherDto>{
        let m = await this.teacherRepository.findOne({where:{id:id}})
        const user = await this.usersRepository.findOne({where:{inforId:m.id}})
        await this.usersRepository.softRemove(
          await this.usersRepository.save(this.toDeleteModel(user,req))
        )
        return this.teacherRepository.softRemove(
            await this.teacherRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        const model = await this.itemRepository.findOne({where:{id:id}})
        // model.birthDate?.setDate(model.birthDate.getDate() + 1)
        // model.setInDate?.setDate(model.setInDate.getDate() + 1)
        // model.setInDate?.setDate(model.setInDate.getDate() + 1)
        return model
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
      async classroomDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomDropdown(dto,this.vwDropdownClassroomRepository);
      }
      async classroomTypeDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }
      
}
