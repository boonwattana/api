import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchStudentDto } from "src/api/student/student.dto";
import { CreateCheckStudentDto, SearchCheckStudentDto, UpdateCheckStudentDto } from "./check-student.dto";
import { CheckStudentService } from "./check-student.service";
import { SearchYearTermDto } from "../year-term/year-term.dto";
import { SearchClassroomDto } from "../classroom/classroom.dto";
@ApiTags("check-student")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('check-student')
export class CheckStudentController extends BaseController{
    constructor(private readonly checkstudentService:CheckStudentService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.checkstudentService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('current-term')
  async currentTerm() {
    try{
      return this.success(await this.checkstudentService.currentTerm())
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.checkstudentService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.checkstudentService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.checkstudentService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('item-student/:id')
  async itemStudent(@Param('id') id: number) {
    try{
      return this.success(await this.checkstudentService.itemStudent(id))
    }catch(e){
      return this.error(e)
    }
  }
  
  @Post('list')
  async findAll(@Body() dto: SearchCheckStudentDto) {
    try{      
      return this.success(await this.checkstudentService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }

  @Post('create')
  async create(@Body() dto: CreateCheckStudentDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.checkstudentService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateCheckStudentDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.checkstudentService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.checkstudentService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
