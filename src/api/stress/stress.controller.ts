import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchStudentDto } from "src/api/student/student.dto";
import { SearchYearTermDto } from "src/api/year-term/year-term.dto";
import { CreateStressDto, SearchStressDto, UpdateStressDto } from "./stress.dto";
import { StressService } from "./stress.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
@ApiTags("stress")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('stress')
export class StressController extends BaseController{
    constructor(private readonly stressService:StressService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.stressService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('current-term')
  async currentTerm() {
    try{
      return this.success(await this.stressService.currentTerm())
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.stressService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.stressService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }

  @Get('item-student/:id')
  async itemStudent(@Param('id') id: number) {
    try{
      return this.success(await this.stressService.itemStudent(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchStressDto) {
    try{      
      return this.success(await this.stressService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('student-dropdown')
  async studentDropdown(@Body() dto: SearchStudentDto) {
    try{      
      return this.success(await this.stressService.studentDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.stressService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateStressDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.stressService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateStressDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.stressService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.stressService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
