import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarOrderedPositionDto, SearchSarOrderedPositionDto, UpdateSarOrderedPositionDto } from "./sar-ordered-position.dto";
import { SarOrderedPositionService } from "./sar-ordered-position.service";
@ApiTags("sar-ordered-position")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-ordered-position')
export class SarOrderedPositionController extends BaseController{
    constructor(private readonly sarorderedpositionService:SarOrderedPositionService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarorderedpositionService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarOrderedPositionDto) {
    try{      
      return this.success(await this.sarorderedpositionService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarorderedpositionService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarOrderedPositionDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarorderedpositionService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarOrderedPositionDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarorderedpositionService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarorderedpositionService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
