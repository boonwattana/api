import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchStudentDto } from "src/api/student/student.dto";
import { SearchYearTermDto } from "src/api/year-term/year-term.dto";
import { CreateEmotionalQuotientDto, SearchEmotionalQuotientDto, UpdateEmotionalQuotientDto } from "./emotional-quotient.dto";
import { EmotionalQuotientService } from "./emotional-quotient.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
@ApiTags("emotional-quotient")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('emotional-quotient')
export class EmotionalQuotientController extends BaseController{
    constructor(private readonly emotionalquotientService:EmotionalQuotientService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.emotionalquotientService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('current-term')
  async currentTerm() {
    try{
      return this.success(await this.emotionalquotientService.currentTerm())
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.emotionalquotientService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.emotionalquotientService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }

  @Get('item-student/:id')
  async itemStudent(@Param('id') id: number) {
    try{
      return this.success(await this.emotionalquotientService.itemStudent(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchEmotionalQuotientDto) {
    try{      
      return this.success(await this.emotionalquotientService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('student-dropdown')
  async studentDropdown(@Body() dto: SearchStudentDto) {
    try{      
      return this.success(await this.emotionalquotientService.studentDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.emotionalquotientService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateEmotionalQuotientDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.emotionalquotientService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateEmotionalQuotientDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.emotionalquotientService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.emotionalquotientService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
