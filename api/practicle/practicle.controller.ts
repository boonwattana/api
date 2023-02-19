import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreatePracticleDto, SearchPracticleDto, UpdatePracticleDto } from "./practicle.dto";
import { PracticleService } from "./practicle.service";
@ApiTags("practicle")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('practicle')
export class PracticleController extends BaseController{
    constructor(private readonly practicleService:PracticleService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.practicleService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchPracticleDto) {
    try{      
      return this.success(await this.practicleService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreatePracticleDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.practicleService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdatePracticleDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.practicleService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.practicleService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
