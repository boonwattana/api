import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateActivityStudentDto, SearchActivityStudentDto, UpdateActivityStudentDto } from "./activity-student.dto";
import { ActivityStudentService } from "./activity-student.service";
@ApiTags("activity-student")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('activity-student')
export class ActivityStudentController extends BaseController{
    constructor(private readonly activitystudentService:ActivityStudentService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.activitystudentService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchActivityStudentDto) {
    try{      
      return this.success(await this.activitystudentService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateActivityStudentDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.activitystudentService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateActivityStudentDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.activitystudentService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.activitystudentService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
