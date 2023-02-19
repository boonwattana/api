import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateActiveTimeDto, SearchActiveTimeDto, UpdateActiveTimeDto } from "./active-time.dto";
import { ActiveTimeService } from "./active-time.service";
@ApiTags("active-time")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('active-time')
export class ActiveTimeController extends BaseController{
    constructor(private readonly activetimeService:ActiveTimeService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.activetimeService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchActiveTimeDto) {
    try{      
      return this.success(await this.activetimeService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateActiveTimeDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.activetimeService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateActiveTimeDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.activetimeService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.activetimeService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
