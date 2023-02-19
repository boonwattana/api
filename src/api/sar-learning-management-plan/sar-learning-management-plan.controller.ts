import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarLearningManagementPlanDto, SearchSarLearningManagementPlanDto, UpdateSarLearningManagementPlanDto } from "./sar-learning-management-plan.dto";
import { SarLearningManagementPlanService } from "./sar-learning-management-plan.service";
@ApiTags("sar-learning-management-plan")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-learning-management-plan')
export class SarLearningManagementPlanController extends BaseController{
    constructor(private readonly sarlearningmanagementplanService:SarLearningManagementPlanService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarlearningmanagementplanService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarLearningManagementPlanDto) {
    try{      
      return this.success(await this.sarlearningmanagementplanService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarlearningmanagementplanService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarLearningManagementPlanDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarlearningmanagementplanService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarLearningManagementPlanDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarlearningmanagementplanService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarlearningmanagementplanService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
