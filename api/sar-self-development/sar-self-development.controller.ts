import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarSelfDevelopmentDto, SearchSarSelfDevelopmentDto, UpdateSarSelfDevelopmentDto } from "./sar-self-development.dto";
import { SarSelfDevelopmentService } from "./sar-self-development.service";
@ApiTags("sar-self-development")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-self-development')
export class SarSelfDevelopmentController extends BaseController{
    constructor(private readonly sarselfdevelopmentService:SarSelfDevelopmentService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarselfdevelopmentService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarSelfDevelopmentDto) {
    try{      
      return this.success(await this.sarselfdevelopmentService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarselfdevelopmentService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarSelfDevelopmentDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarselfdevelopmentService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarSelfDevelopmentDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarselfdevelopmentService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarselfdevelopmentService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
