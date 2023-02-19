import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarStudentEstimateTeachingDto, SearchSarStudentEstimateTeachingDto, UpdateSarStudentEstimateTeachingDto } from "./sar-student-estimate-teaching.dto";
import { SarStudentEstimateTeachingService } from "./sar-student-estimate-teaching.service";
@ApiTags("sar-student-estimate-teaching")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-student-estimate-teaching')
export class SarStudentEstimateTeachingController extends BaseController{
    constructor(private readonly sarstudentestimateteachingService:SarStudentEstimateTeachingService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarstudentestimateteachingService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarStudentEstimateTeachingDto) {
    try{      
      return this.success(await this.sarstudentestimateteachingService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarstudentestimateteachingService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarStudentEstimateTeachingDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarstudentestimateteachingService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarStudentEstimateTeachingDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarstudentestimateteachingService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarstudentestimateteachingService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
