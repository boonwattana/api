import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarStandard2Dto, SearchSarStandard2Dto, UpdateSarStandard2Dto } from "./sar-standard2.dto";
import { SarStandard2Service } from "./sar-standard2.service";
@ApiTags("sar-standard2")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-standard2')
export class SarStandard2Controller extends BaseController{
    constructor(private readonly sarstandard2Service:SarStandard2Service,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarstandard2Service.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarStandard2Dto) {
    try{      
      return this.success(await this.sarstandard2Service.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarstandard2Service.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarStandard2Dto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarstandard2Service.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarStandard2Dto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarstandard2Service.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarstandard2Service.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
