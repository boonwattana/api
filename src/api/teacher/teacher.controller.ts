import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchGendarDto } from "src/api/gendar/gendar.dto";
import { SearchNationalityDto } from "src/api/nationality/nationality.dto";
import { SearchEthnicityDto } from "src/api/ethnicity/ethnicity.dto";
import { SearchReligionDto } from "src/api/religion/religion.dto";
import { SearchPractitionerLevelDto } from "src/api/practitioner-level/practitioner-level.dto";
import { SearchEducationBackgroundDto } from "src/api/education-background/education-background.dto";
import { SearchCountryDto } from "src/api/country/country.dto";
import { SearchProvinceDto } from "src/api/province/province.dto";
import { SearchDistrictDto } from "src/api/district/district.dto";
import { SearchSubDistrictDto } from "src/api/sub-district/sub-district.dto";
import { CreateTeacherDto, SearchTeacherDto, UpdateTeacherDto } from "./teacher.dto";
import { TeacherService } from "./teacher.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
import { SearchActivityStudentDto } from "../activity-student/activity-student.dto";
import { SearchPracticleDto } from "../practicle/practicle.dto";
@ApiTags("teacher")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('teacher')
export class TeacherController extends BaseController{
    constructor(private readonly teacherService:TeacherService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.teacherService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.teacherService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('gendar-dropdown')
  async gendarDropdown(@Body() dto: SearchGendarDto) {
    try{      
      return this.success(await this.teacherService.gendarDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('nationality-dropdown')
  async nationalityDropdown(@Body() dto: SearchNationalityDto) {
    try{      
      return this.success(await this.teacherService.nationalityDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('ethnicity-dropdown')
  async ethnicityDropdown(@Body() dto: SearchEthnicityDto) {
    try{      
      return this.success(await this.teacherService.ethnicityDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('religion-dropdown')
  async religionDropdown(@Body() dto: SearchReligionDto) {
    try{      
      return this.success(await this.teacherService.religionDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  
  @Get('practicle-dropdown')
  async practicleDropdown(@Body() dto: SearchPracticleDto) {
    try{      
      return this.success(await this.teacherService.practicleDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('practitioner-level-dropdown')
  async practitionerLevelDropdown(@Body() dto: SearchPractitionerLevelDto) {
    try{      
      return this.success(await this.teacherService.practitionerLevelDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('education-background-dropdown')
  async educationBackgroundDropdown(@Body() dto: SearchEducationBackgroundDto) {
    try{      
      return this.success(await this.teacherService.educationBackgroundDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('country-dropdown')
  async countryDropdown(@Body() dto: SearchCountryDto) {
    try{      
      return this.success(await this.teacherService.countryDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  // @Get('province-dropdown')
  // async provinceDropdown(@Body() dto: SearchProvinceDto) {
  //   try{      
  //     return this.success(await this.teacherService.provinceDropdown(dto))
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('district-dropdown')
  // async districtDropdown(@Body() dto: SearchDistrictDto) {
  //   try{      
  //     return this.success(await this.teacherService.districtDropdown(dto))
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('sub-district-dropdown')
  // async subDistrictDropdown(@Body() dto: SearchSubDistrictDto) {
  //   try{      
  //     return this.success(await this.teacherService.subDistrictDropdown(dto))
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
 
  @Get('activity-student-dropdown')
  async activityStudentDropdown(@Body() dto: SearchActivityStudentDto) {
    try{      
      return this.success(await this.teacherService.activityStudentDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('subject-group-dropdown')
  async subjectGroupDropdown(@Body() dto: SearchSubDistrictDto) {
    try{      
      return this.success(await this.teacherService.subjectGroupDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('province-dropdown/:id')
  async provinceDropdown(@Body() dto: SearchProvinceDto,@Param('id') id:number) {
    try{      
      return this.success(await this.teacherService.provinceDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('district-dropdown/:id')
  async districtDropdown(@Body() dto: SearchDistrictDto,@Param('id') id:number) {
    try{      
      return this.success(await this.teacherService.districtDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('sub-district-dropdown/:id')
  async subDistrictDropdown(@Body() dto: SearchSubDistrictDto,@Param('id') id:number) {
    try{      
      return this.success(await this.teacherService.subDistrictDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.teacherService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.teacherService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateTeacherDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.teacherService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateTeacherDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.teacherService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.teacherService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
