import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarActivitiesDto, SearchSarActivitiesDto, UpdateSarActivitiesDto } from "./sar-activities.dto";
import { SarActivitiesService } from "./sar-activities.service";
@ApiTags("sar-activities")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-activities')
export class SarActivitiesController extends BaseController{
    constructor(private readonly saractivitiesService:SarActivitiesService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.saractivitiesService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarActivitiesDto) {
    try{      
      return this.success(await this.saractivitiesService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.saractivitiesService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarActivitiesDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.saractivitiesService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarActivitiesDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.saractivitiesService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.saractivitiesService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
