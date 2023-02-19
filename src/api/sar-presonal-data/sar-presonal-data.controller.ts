import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarPresonalDataDto, SearchSarPresonalDataDto, UpdateSarPresonalDataDto } from "./sar-presonal-data.dto";
import { SarPresonalDataService } from "./sar-presonal-data.service";
@ApiTags("sar-presonal-data")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-presonal-data')
export class SarPresonalDataController extends BaseController{
    constructor(private readonly sarpresonaldataService:SarPresonalDataService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarpresonaldataService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarPresonalDataDto) {
    try{      
      return this.success(await this.sarpresonaldataService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarpresonaldataService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarPresonalDataDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarpresonaldataService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarPresonalDataDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarpresonaldataService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarpresonaldataService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }

  @Get('initial-by-teacher/:id')
  async initialByTeacherId(@Param('id') id: number) {
    try{
      return this.success(await this.sarpresonaldataService.initialByTeacherId(id))
    }catch(e){
      return this.error(e)
    }
  }
}
