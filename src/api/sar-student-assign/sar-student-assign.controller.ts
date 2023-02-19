import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarStudentAssignDto, SearchSarStudentAssignDto, UpdateSarStudentAssignDto } from "./sar-student-assign.dto";
import { SarStudentAssignService } from "./sar-student-assign.service";
@ApiTags("sar-student-assign")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-student-assign')
export class SarStudentAssignController extends BaseController{
    constructor(private readonly sarstudentassignService:SarStudentAssignService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarstudentassignService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarStudentAssignDto) {
    try{      
      return this.success(await this.sarstudentassignService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarstudentassignService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarStudentAssignDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarstudentassignService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarStudentAssignDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarstudentassignService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarstudentassignService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
