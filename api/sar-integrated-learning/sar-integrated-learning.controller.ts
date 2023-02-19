import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarIntegratedLearningDto, SearchSarIntegratedLearningDto, UpdateSarIntegratedLearningDto } from "./sar-integrated-learning.dto";
import { SarIntegratedLearningService } from "./sar-integrated-learning.service";
@ApiTags("sar-integrated-learning")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-integrated-learning')
export class SarIntegratedLearningController extends BaseController{
    constructor(private readonly sarintegratedlearningService:SarIntegratedLearningService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarintegratedlearningService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarIntegratedLearningDto) {
    try{      
      return this.success(await this.sarintegratedlearningService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarintegratedlearningService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarIntegratedLearningDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarintegratedlearningService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarIntegratedLearningDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarintegratedlearningService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarintegratedlearningService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
