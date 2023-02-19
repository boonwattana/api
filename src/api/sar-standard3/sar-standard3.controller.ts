import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarStandard3Dto, SearchSarStandard3Dto, UpdateSarStandard3Dto } from "./sar-standard3.dto";
import { SarStandard3Service } from "./sar-standard3.service";
@ApiTags("sar-standard3")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-standard3')
export class SarStandard3Controller extends BaseController{
    constructor(private readonly sarstandard3Service:SarStandard3Service,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarstandard3Service.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarStandard3Dto) {
    try{      
      return this.success(await this.sarstandard3Service.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarstandard3Service.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarStandard3Dto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarstandard3Service.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarStandard3Dto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarstandard3Service.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarstandard3Service.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
