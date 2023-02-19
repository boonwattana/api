import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateSarPresonalLeaveDataDto, SearchSarPresonalLeaveDataDto, UpdateSarPresonalLeaveDataDto } from "./sar-presonal-leave-data.dto";
import { SarPresonalLeaveDataService } from "./sar-presonal-leave-data.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
@ApiTags("sar-presonal-leave-data")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-presonal-leave-data')
export class SarPresonalLeaveDataController extends BaseController{
    constructor(private readonly sarpresonalleavedataService:SarPresonalLeaveDataService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarpresonalleavedataService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarPresonalLeaveDataDto) {
    try{      
      return this.success(await this.sarpresonalleavedataService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarPresonalLeaveDataDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarpresonalleavedataService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarPresonalLeaveDataDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarpresonalleavedataService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarpresonalleavedataService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }

  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarpresonalleavedataService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
}
