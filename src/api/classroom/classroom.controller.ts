import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchClassroomTypeDto } from "src/api/classroom-type/classroom-type.dto";
import { CreateClassroomDto, SearchClassroomDto, UpdateClassroomDto } from "./classroom.dto";
import { ClassroomService } from "./classroom.service";
@ApiTags("classroom")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('classroom')
export class ClassroomController extends BaseController{
    constructor(private readonly classroomService:ClassroomService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.classroomService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchClassroomDto) {
    try{      
      return this.success(await this.classroomService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('classroom-type-dropdown')
  async classroomTypeDropdown(@Body() dto: SearchClassroomTypeDto) {
    try{      
      return this.success(await this.classroomService.classroomTypeDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateClassroomDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.classroomService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateClassroomDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.classroomService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.classroomService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
