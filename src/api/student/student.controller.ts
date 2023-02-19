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
import { SearchCountryDto } from "src/api/country/country.dto";
import { SearchSubDistrictDto } from "src/api/sub-district/sub-district.dto";
import { SearchDistrictDto } from "src/api/district/district.dto";
import { SearchProvinceDto } from "src/api/province/province.dto";
import { SearchAliveWithDto } from "src/api/alive-with/alive-with.dto";
import { SearchClassroomDto } from "src/api/classroom/classroom.dto";
import { CreateStudentDto, SearchStudentDto, UpdateStudentDto } from "./student.dto";
import { StudentService } from "./student.service";
@ApiTags("student")
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@Controller('student')
export class StudentController extends BaseController{
    constructor(private readonly studentService:StudentService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.studentService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  // @Get('export')
  // async export() {
  //   try{
  //     return this.success(await this.studentService.export())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  @Post('list')
  async findAll(@Body() dto: SearchStudentDto) {
    try{ 
           
      return this.success(await this.studentService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('gendar-dropdown')
  async gendarDropdown(@Body() dto: SearchGendarDto) {
    try{      
      return this.success(await this.studentService.gendarDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('nationality-dropdown')
  async nationalityDropdown(@Body() dto: SearchNationalityDto) {
    try{      
      return this.success(await this.studentService.nationalityDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('ethnicity-dropdown')
  async ethnicityDropdown(@Body() dto: SearchEthnicityDto) {
    try{      
      return this.success(await this.studentService.ethnicityDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('religion-dropdown')
  async religionDropdown(@Body() dto: SearchReligionDto) {
    try{      
      return this.success(await this.studentService.religionDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('birth-country-dropdown')
  async birthCountryDropdown(@Body() dto: SearchCountryDto) {
    try{      
      return this.success(await this.studentService.countryDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('country-dropdown')
  async countryDropdown(@Body() dto: SearchCountryDto) {
    try{      
      return this.success(await this.studentService.countryDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('province-dropdown/:id')
  async provinceDropdown(@Body() dto: SearchProvinceDto,@Param('id') id:number) {
    try{      
      return this.success(await this.studentService.provinceDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('district-dropdown/:id')
  async districtDropdown(@Body() dto: SearchDistrictDto,@Param('id') id:number) {
    try{      
      return this.success(await this.studentService.districtDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('sub-district-dropdown/:id')
  async subDistrictDropdown(@Body() dto: SearchSubDistrictDto,@Param('id') id:number) {
    try{      
      return this.success(await this.studentService.subDistrictDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('contract-country-dropdown')
  async contractCountryDropdown(@Body() dto: SearchCountryDto) {
    try{      
      return this.success(await this.studentService.countryDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('contract-province-dropdown/:id')
  async contractProvinceDropdown(@Body() dto: SearchProvinceDto,@Param('id') id:number) {
    try{      
      return this.success(await this.studentService.provinceDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('contract-district-dropdown/:id')
  async contractDistrictDropdown(@Body() dto: SearchDistrictDto,@Param('id') id:number) {
    try{      
      return this.success(await this.studentService.districtDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('contract-sub-district-dropdown/:id')
  async contractSubDistrictDropdown(@Body() dto: SearchSubDistrictDto,@Param('id') id:number) {
    try{      
      return this.success(await this.studentService.subDistrictDropdown(dto,id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('alive-with-dropdown')
  async aliveWithDropdown(@Body() dto: SearchAliveWithDto) {
    try{      
      return this.success(await this.studentService.aliveWithDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('parent-status-dropdown')
  async parentStatusDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentService.parentStatusDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  
  @Post('create')
  async create(@Body() dto: CreateStudentDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.studentService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateStudentDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.studentService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.studentService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
