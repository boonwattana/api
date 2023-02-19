import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarResearchInClassDto, SearchSarResearchInClassDto, UpdateSarResearchInClassDto } from "./sar-research-in-class.dto";
import { SarResearchInClassService } from "./sar-research-in-class.service";
@ApiTags("sar-research-in-class")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-research-in-class')
export class SarResearchInClassController extends BaseController{
    constructor(private readonly sarresearchinclassService:SarResearchInClassService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarresearchinclassService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarResearchInClassDto) {
    try{      
      return this.success(await this.sarresearchinclassService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarresearchinclassService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarResearchInClassDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarresearchinclassService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarResearchInClassDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarresearchinclassService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarresearchinclassService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
