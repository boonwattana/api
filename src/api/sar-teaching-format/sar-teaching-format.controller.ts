import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateSarTeachingFormatDto, SearchSarTeachingFormatDto, UpdateSarTeachingFormatDto } from "./sar-teaching-format.dto";
import { SarTeachingFormatService } from "./sar-teaching-format.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
@ApiTags("sar-teaching-format")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-teaching-format')
export class SarTeachingFormatController extends BaseController{
    constructor(private readonly sarteachingformatService:SarTeachingFormatService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarteachingformatService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarTeachingFormatDto) {
    try{      
      return this.success(await this.sarteachingformatService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarTeachingFormatDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarteachingformatService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarTeachingFormatDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarteachingformatService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarteachingformatService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarteachingformatService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
}
