import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarSelfAssessmentDto, SearchSarSelfAssessmentDto, UpdateSarSelfAssessmentDto } from "./sar-self-assessment.dto";
import { SarSelfAssessmentService } from "./sar-self-assessment.service";
@ApiTags("sar-self-assessment")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-self-assessment')
export class SarSelfAssessmentController extends BaseController{
    constructor(private readonly sarselfassessmentService:SarSelfAssessmentService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarselfassessmentService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarSelfAssessmentDto) {
    try{      
      return this.success(await this.sarselfassessmentService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarselfassessmentService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarSelfAssessmentDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarselfassessmentService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarSelfAssessmentDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarselfassessmentService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarselfassessmentService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
