import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateCountryDto, SearchCountryDto, UpdateCountryDto } from "./country.dto";
import { CountryService } from "./country.service";
@ApiTags("country")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('country')
export class CountryController extends BaseController{
    constructor(private readonly countryService:CountryService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.countryService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchCountryDto) {
    try{      
      return this.success(await this.countryService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateCountryDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.countryService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateCountryDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.countryService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.countryService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
