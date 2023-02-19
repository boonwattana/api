import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateEducationBackgroundDto, SearchEducationBackgroundDto, UpdateEducationBackgroundDto } from "./education-background.dto";
import { EducationBackgroundService } from "./education-background.service";
@ApiTags("education-background")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('education-background')
export class EducationBackgroundController extends BaseController{
    constructor(private readonly educationbackgroundService:EducationBackgroundService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.educationbackgroundService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchEducationBackgroundDto) {
    try{      
      return this.success(await this.educationbackgroundService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.educationbackgroundService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateEducationBackgroundDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.educationbackgroundService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateEducationBackgroundDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.educationbackgroundService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.educationbackgroundService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
