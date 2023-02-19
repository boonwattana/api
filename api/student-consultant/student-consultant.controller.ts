import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchStudentDto } from "src/api/student/student.dto";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateStudentConsultantDto, SearchStudentConsultantDto, UpdateStudentConsultantDto } from "./student-consultant.dto";
import { StudentConsultantService } from "./student-consultant.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
@ApiTags("student-consultant")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('student-consultant')
export class StudentConsultantController extends BaseController{
    constructor(private readonly studentconsultantService:StudentConsultantService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.studentconsultantService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchStudentConsultantDto) {
    try{      
      return this.success(await this.studentconsultantService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('student-dropdown')
  async studentDropdown(@Body() dto: SearchStudentDto) {
    try{      
      return this.success(await this.studentconsultantService.studentDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.studentconsultantService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentconsultantService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentconsultantService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateStudentConsultantDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.studentconsultantService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateStudentConsultantDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.studentconsultantService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.studentconsultantService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
