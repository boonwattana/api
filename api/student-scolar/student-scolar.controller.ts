import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchStudentDto } from "src/api/student/student.dto";
import { CreateStudentScolarDto, SearchStudentScolarDto, UpdateStudentScolarDto } from "./student-scolar.dto";
import { StudentScolarService } from "./student-scolar.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
@ApiTags("student-scolar")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('student-scolar')
export class StudentScolarController extends BaseController{
    constructor(private readonly studentscolarService:StudentScolarService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.studentscolarService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchStudentScolarDto) {
    try{      
      return this.success(await this.studentscolarService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('student-dropdown')
  async studentDropdown(@Body() dto: SearchStudentDto) {
    try{      
      return this.success(await this.studentscolarService.studentDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentscolarService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studentscolarService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateStudentScolarDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.studentscolarService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateStudentScolarDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.studentscolarService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.studentscolarService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
