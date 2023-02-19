import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarAwardDto, SearchSarAwardDto, UpdateSarAwardDto } from "./sar-award.dto";
import { SarAwardService } from "./sar-award.service";
@ApiTags("sar-award")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-award')
export class SarAwardController extends BaseController{
    constructor(private readonly sarawardService:SarAwardService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarawardService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarAwardDto) {
    try{      
      return this.success(await this.sarawardService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarawardService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarAwardDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarawardService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarAwardDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarawardService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarawardService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
