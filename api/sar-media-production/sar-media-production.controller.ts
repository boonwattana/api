import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarMediaProductionDto, SearchSarMediaProductionDto, UpdateSarMediaProductionDto } from "./sar-media-production.dto";
import { SarMediaProductionService } from "./sar-media-production.service";
@ApiTags("sar-media-production")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-media-production')
export class SarMediaProductionController extends BaseController{
    constructor(private readonly sarmediaproductionService:SarMediaProductionService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarmediaproductionService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarMediaProductionDto) {
    try{      
      return this.success(await this.sarmediaproductionService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarmediaproductionService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarMediaProductionDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarmediaproductionService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarMediaProductionDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarmediaproductionService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarmediaproductionService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
