import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { SearchYearTermDto } from "src/api/year-term/year-term.dto";
import { CreateTeachingScheduleDto, SearchTeachingScheduleDto, UpdateTeachingScheduleDto } from "./teaching-schedule.dto";
import { TeachingScheduleService } from "./teaching-schedule.service";
import { SearchPractitionerLevelDto } from "src/api/practitioner-level/practitioner-level.dto";
@ApiTags("teaching-schedule")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('teaching-schedule')
export class TeachingScheduleController extends BaseController{
    constructor(private readonly teachingscheduleService:TeachingScheduleService,
      ){
      super()
    }
  @Get('sar-item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.teachingscheduleService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchTeachingScheduleDto) {
    try{      
      return this.success(await this.teachingscheduleService.listForTeacher(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.teachingscheduleService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.teachingscheduleService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateTeachingScheduleDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.teachingscheduleService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateTeachingScheduleDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.teachingscheduleService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.teachingscheduleService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
  @Get('item-by-teacher/:id')
  async itemByTeacher(@Param('id') id: number) {
    try{
      return this.success(await this.teachingscheduleService.itemByTeacher(id))
    }catch(e){
      return this.error(e)
    }
  }

  @Get('initial-by-teacher/:id')
  async initialByTeacher(@Param('id') id: number) {
    try{
      return this.success(await this.teachingscheduleService.initialByTeacher(id))
    }catch(e){
      return this.error(e)
    }
  }

  @Get('is-has-teaching-schedule/:id')
  async isHasTeachingSchedule(@Param('id') id: number) {
    try{
   //   console.log("isHasTeachingSchedule>>>",id)
      return this.success(await this.teachingscheduleService.isHasTeachingSchedule(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('practitioner-level-dropdown')
  async practitionerLevelDropdown(@Body() dto: SearchPractitionerLevelDto) {
    try{      
      return this.success(await this.teachingscheduleService.practitionerLevelDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }

  @Post('sar-list')
  async sarList(@Body() dto: SearchTeachingScheduleDto) {
    try{      
      return this.success(await this.teachingscheduleService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
}
