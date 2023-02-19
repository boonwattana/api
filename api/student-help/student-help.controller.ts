import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchStudentDto } from "src/api/student/student.dto";
import { CreateStudentHelpDto, SearchStudentHelpDto, UpdateStudentHelpDto } from "./student-help.dto";
import { StudentHelpService } from "./student-help.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
@ApiTags("student-help")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('student-help')
export class StudentHelpController extends BaseController{
    constructor(private readonly studenthelpService:StudentHelpService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.studenthelpService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchStudentHelpDto) {
    try{      
      return this.success(await this.studenthelpService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('student-dropdown')
  async studentDropdown(@Body() dto: SearchStudentDto) {
    try{      
      return this.success(await this.studenthelpService.studentDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studenthelpService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studenthelpService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateStudentHelpDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.studenthelpService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateStudentHelpDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.studenthelpService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.studenthelpService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
