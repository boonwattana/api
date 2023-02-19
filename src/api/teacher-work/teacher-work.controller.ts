import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateTeacherWorkDto, SearchTeacherWorkDto, UpdateTeacherWorkDto } from "./teacher-work.dto";
import { TeacherWorkService } from "./teacher-work.service";
@ApiTags("teacher-work")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('teacher-work')
export class TeacherWorkController extends BaseController{
    constructor(private readonly teacherworkService:TeacherWorkService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.teacherworkService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchTeacherWorkDto) {
    try{      
      return this.success(await this.teacherworkService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.teacherworkService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateTeacherWorkDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.teacherworkService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateTeacherWorkDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.teacherworkService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.teacherworkService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
