import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateNationalityDto, SearchNationalityDto, UpdateNationalityDto } from "./nationality.dto";
import { NationalityService } from "./nationality.service";
@ApiTags("nationality")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('nationality')
export class NationalityController extends BaseController{
    constructor(private readonly nationalityService:NationalityService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.nationalityService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchNationalityDto) {
    try{      
      return this.success(await this.nationalityService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateNationalityDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.nationalityService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateNationalityDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.nationalityService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.nationalityService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
