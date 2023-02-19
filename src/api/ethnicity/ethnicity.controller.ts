import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateEthnicityDto, SearchEthnicityDto, UpdateEthnicityDto } from "./ethnicity.dto";
import { EthnicityService } from "./ethnicity.service";
@ApiTags("ethnicity")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('ethnicity')
export class EthnicityController extends BaseController{
    constructor(private readonly ethnicityService:EthnicityService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.ethnicityService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchEthnicityDto) {
    try{      
      return this.success(await this.ethnicityService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateEthnicityDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.ethnicityService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateEthnicityDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.ethnicityService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.ethnicityService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
