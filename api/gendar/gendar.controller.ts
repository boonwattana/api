import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateGendarDto, SearchGendarDto, UpdateGendarDto } from "./gendar.dto";
import { GendarService } from "./gendar.service";
@ApiTags("gendar")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('gendar')
export class GendarController extends BaseController{
    constructor(private readonly gendarService:GendarService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.gendarService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchGendarDto) {
    try{      
      return this.success(await this.gendarService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateGendarDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.gendarService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateGendarDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.gendarService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.gendarService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
