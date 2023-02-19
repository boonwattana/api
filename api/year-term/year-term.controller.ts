import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateYearTermDto, SearchYearTermDto, UpdateYearTermDto } from "./year-term.dto";
import { YearTermService } from "./year-term.service";
@ApiTags("year-term")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('year-term')
export class YearTermController extends BaseController{
    constructor(private readonly yeartermService:YearTermService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.yeartermService.item(id))
    }catch(e){
      return this.error(e)
    }
  }

  
  @Post('list')
  async findAll(@Body() dto: SearchYearTermDto) {
    try{      
      return this.success(await this.yeartermService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateYearTermDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.yeartermService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateYearTermDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.yeartermService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.yeartermService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
