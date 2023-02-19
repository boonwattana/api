import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { SearchYearTermDto } from "src/api/year-term/year-term.dto";
import { CreateSarCoursesYearTermDto, SearchSarCoursesYearTermDto, UpdateSarCoursesYearTermDto } from "./sar-courses-year-term.dto";
import { SarCoursesYearTermService } from "./sar-courses-year-term.service";
@ApiTags("sar-courses-year-term")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-courses-year-term')
export class SarCoursesYearTermController extends BaseController{
    constructor(private readonly sarcoursesyeartermService:SarCoursesYearTermService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarcoursesyeartermService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarCoursesYearTermDto) {
    try{      
      return this.success(await this.sarcoursesyeartermService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarcoursesyeartermService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.sarcoursesyeartermService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarCoursesYearTermDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarcoursesyeartermService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarCoursesYearTermDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarcoursesyeartermService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarcoursesyeartermService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
