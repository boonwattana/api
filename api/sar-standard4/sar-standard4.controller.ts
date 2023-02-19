import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarStandard4Dto, SearchSarStandard4Dto, UpdateSarStandard4Dto } from "./sar-standard4.dto";
import { SarStandard4Service } from "./sar-standard4.service";
@ApiTags("sar-standard4")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-standard4')
export class SarStandard4Controller extends BaseController{
    constructor(private readonly sarstandard4Service:SarStandard4Service,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarstandard4Service.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarStandard4Dto) {
    try{      
      return this.success(await this.sarstandard4Service.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarstandard4Service.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarStandard4Dto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarstandard4Service.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarStandard4Dto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarstandard4Service.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarstandard4Service.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
