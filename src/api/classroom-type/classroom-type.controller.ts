import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateClassroomTypeDto, SearchClassroomTypeDto, UpdateClassroomTypeDto } from "./classroom-type.dto";
import { ClassroomTypeService } from "./classroom-type.service";
@ApiTags("classroom-type")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('classroom-type')
export class ClassroomTypeController extends BaseController{
    constructor(private readonly classroomtypeService:ClassroomTypeService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.classroomtypeService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchClassroomTypeDto) {
    try{      
      return this.success(await this.classroomtypeService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateClassroomTypeDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.classroomtypeService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateClassroomTypeDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.classroomtypeService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.classroomtypeService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
