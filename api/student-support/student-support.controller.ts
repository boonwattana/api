import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateStudentSupportDto, SearchStudentExistDto, SearchStudentSupportDto, UpdateStudentSupportDto } from "./student-support.dto";
import { StudentSupportService } from "./student-support.service";
import { SearchClassroomTypeDto } from "../classroom-type/classroom-type.dto";
import { SearchClassroomDto } from "../classroom/classroom.dto";
import { SearchStudentDto } from "../student/student.dto";
@ApiTags("student-support")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('student-support')
export class StudentSupportController extends BaseController{
    constructor(private readonly studentsupportService:StudentSupportService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.studentsupportService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchStudentSupportDto) {
    try{      
      return this.success(await this.studentsupportService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('check-is-exist')
  async findExist(@Body() dto: SearchStudentExistDto) {
    try{      
      return this.success(await this.studentsupportService.findExist(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list-student')
  async findAllStudent(@Body() dto: SearchStudentDto) {
    try{ 
           
      return this.success(await this.studentsupportService.listStudent(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list-has-student')
  async findAllHasStudent(@Body() dto: SearchStudentDto) {
    try{ 
           
      return this.success(await this.studentsupportService.listHasStudent(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.studentsupportService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentsupportService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomTypeDto) {
    try{      
      return this.success(await this.studentsupportService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }

  @Post('create')
  async create(@Body() dto: CreateStudentSupportDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.studentsupportService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateStudentSupportDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.studentsupportService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.studentsupportService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
