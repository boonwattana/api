import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarPerformingSpecialDutiesDto, SearchSarPerformingSpecialDutiesDto, UpdateSarPerformingSpecialDutiesDto } from "./sar-performing-special-duties.dto";
import { SarPerformingSpecialDutiesService } from "./sar-performing-special-duties.service";
@ApiTags("sar-performing-special-duties")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-performing-special-duties')
export class SarPerformingSpecialDutiesController extends BaseController{
    constructor(private readonly sarperformingspecialdutiesService:SarPerformingSpecialDutiesService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarperformingspecialdutiesService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarPerformingSpecialDutiesDto) {
    try{      
      return this.success(await this.sarperformingspecialdutiesService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarperformingspecialdutiesService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarPerformingSpecialDutiesDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarperformingspecialdutiesService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarPerformingSpecialDutiesDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarperformingspecialdutiesService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarperformingspecialdutiesService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
