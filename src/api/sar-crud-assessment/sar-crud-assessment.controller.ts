import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarCrudAssessmentDto, SearchSarCrudAssessmentDto, UpdateSarCrudAssessmentDto } from "./sar-crud-assessment.dto";
import { SarCrudAssessmentService } from "./sar-crud-assessment.service";
import { SearchYearTermDto } from "../year-term/year-term.dto";
@ApiTags("sar-crud-assessment")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-crud-assessment')
export class SarCrudAssessmentController extends BaseController{
    constructor(private readonly sarcrudassessmentService:SarCrudAssessmentService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarcrudassessmentService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarCrudAssessmentDto) {
    try{      
      return this.success(await this.sarcrudassessmentService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarcrudassessmentService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarCrudAssessmentDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarcrudassessmentService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarCrudAssessmentDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarcrudassessmentService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarcrudassessmentService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.sarcrudassessmentService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
}
