import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
import { SearchYearTermDto } from "../year-term/year-term.dto";
//import { SearchnullDto } from "src/api/null/null.dto";
import { CreateStudentHomeVisitDto, SearchStudentHomeVisitDto, UpdateStudentHomeVisitDto } from "./student-home-visit.dto";
import { StudentHomeVisitService } from "./student-home-visit.service";
@ApiTags("student-home-visit")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('student-home-visit')
export class StudentHomeVisitController extends BaseController{
    constructor(private readonly studenthomevisitService:StudentHomeVisitService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.studenthomevisitService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('item-student/:id')
  async itemStudent(@Param('id') id: number) {
    try{
      return this.success(await this.studenthomevisitService.itemStudent(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchStudentHomeVisitDto) {
    try{      
      return this.success(await this.studenthomevisitService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }

  @Get('current-term')
  async currentTerm() {
    try{
      return this.success(await this.studenthomevisitService.currentTerm())
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-dropdown')
  async classroomDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studenthomevisitService.classroomDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.studenthomevisitService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('year-term-dropdown')
  async yearTermDropdown(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.studenthomevisitService.yearTermDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateStudentHomeVisitDto, @Req() req:CustomRequest,){ 
    try{
      return this.success(await this.studenthomevisitService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateStudentHomeVisitDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.studenthomevisitService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.studenthomevisitService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }

  // @Get('classroom-dropdown')
  // async classroomDropdown(@Body() dto: SearchClassroomDto) {
  //   try{      
  //     return this.success(await this.studenthomevisitService.classroomDropdown(dto))
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('classroom-type-dropdown')
  // async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
  //   try{      
  //     return this.success(await this.studenthomevisitService.classroomTypeDropdown(dto))
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }

  @Get('student-home-visit-initialData/:id')
  async getStudentHomeVisitInitialData(@Param('id') id: number) {
    try{
      return this.success(await this.studenthomevisitService.getStudentHomeVisitInitialData(id))
    }catch(e){
      return this.error(e)
    }
  }

  @Get('get-current-term-data/:id')
async getSDQCurrentTermDataPRT(@Param('id') id: number) {
  try{
    return this.success(await this.studenthomevisitService.getCurrentTermData(id))
  }catch(e){
    return this.error(e)
  }
}
@Get('student-home-item/:id')
async stditem(@Param('id') id: number) {
  try{
    return this.success(await this.studenthomevisitService.stditem(id))
  }catch(e){
    return this.error(e)
  }
}
}
