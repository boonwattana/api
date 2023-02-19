import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateReligionDto, SearchReligionDto, UpdateReligionDto } from "./religion.dto";
import { ReligionService } from "./religion.service";
@ApiTags("religion")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('religion')
export class ReligionController extends BaseController{
    constructor(private readonly religionService:ReligionService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.religionService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchReligionDto) {
    try{      
      return this.success(await this.religionService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateReligionDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.religionService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateReligionDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.religionService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.religionService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
