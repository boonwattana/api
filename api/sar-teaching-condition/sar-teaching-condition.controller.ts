import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarTeachingConditionDto, SearchSarTeachingConditionDto, UpdateSarTeachingConditionDto } from "./sar-teaching-condition.dto";
import { SarTeachingConditionService } from "./sar-teaching-condition.service";
@ApiTags("sar-teaching-condition")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-teaching-condition')
export class SarTeachingConditionController extends BaseController{
    constructor(private readonly sarteachingconditionService:SarTeachingConditionService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarteachingconditionService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarTeachingConditionDto) {
    try{      
      return this.success(await this.sarteachingconditionService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarteachingconditionService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarTeachingConditionDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarteachingconditionService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarTeachingConditionDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarteachingconditionService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarteachingconditionService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
