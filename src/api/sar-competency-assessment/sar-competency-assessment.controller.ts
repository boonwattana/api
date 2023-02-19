import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarCompetencyAssessmentDto, SearchSarCompetencyAssessmentDto, UpdateSarCompetencyAssessmentDto } from "./sar-competency-assessment.dto";
import { SarCompetencyAssessmentService } from "./sar-competency-assessment.service";
import { SearchYearTermDto } from "../year-term/year-term.dto";
@ApiTags("sar-competency-assessment")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-competency-assessment')
export class SarCompetencyAssessmentController extends BaseController{
    constructor(private readonly sarcompetencyassessmentService:SarCompetencyAssessmentService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarcompetencyassessmentService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarCompetencyAssessmentDto) {
    try{      
      return this.success(await this.sarcompetencyassessmentService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarcompetencyassessmentService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarCompetencyAssessmentDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarcompetencyassessmentService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarCompetencyAssessmentDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarcompetencyassessmentService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarcompetencyassessmentService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.sarcompetencyassessmentService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
}
