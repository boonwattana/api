import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateAliveWithDto, SearchAliveWithDto, UpdateAliveWithDto } from "./alive-with.dto";
import { AliveWithService } from "./alive-with.service";
@ApiTags("alive-with")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('alive-with')
export class AliveWithController extends BaseController{
    constructor(private readonly alivewithService:AliveWithService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.alivewithService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchAliveWithDto) {
    try{      
      return this.success(await this.alivewithService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateAliveWithDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.alivewithService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateAliveWithDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.alivewithService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.alivewithService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
