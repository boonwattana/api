import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { SearchCurriculumDto } from "src/api/curriculum/curriculum.dto";
import { SearchPractitionerLevelDto } from "src/api/practitioner-level/practitioner-level.dto";
import { CreateTeachersDevelopDto, SearchTeachersDevelopDto, UpdateTeachersDevelopDto } from "./teachers-develop.dto";
import { TeachersDevelopService } from "./teachers-develop.service";
import { SearchPracticleDto } from "../practicle/practicle.dto";
@ApiTags("teachers-develop")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('teachers-develop')
export class TeachersDevelopController extends BaseController{
    constructor(private readonly teachersdevelopService:TeachersDevelopService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.teachersdevelopService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchTeachersDevelopDto) {
    try{      
      return this.success(await this.teachersdevelopService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.teachersdevelopService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('curriculum-dropdown')
  async curriculumDropdown(@Body() dto: SearchCurriculumDto) {
    try{      
      return this.success(await this.teachersdevelopService.curriculumDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('practicle-dropdown')
  async practicleDropdown(@Body() dto: SearchPracticleDto) {
    try{      
      return this.success(await this.teachersdevelopService.practicleDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateTeachersDevelopDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.teachersdevelopService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateTeachersDevelopDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.teachersdevelopService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.teachersdevelopService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
