import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchCountryDto } from "src/api/country/country.dto";
import { CreateProvinceDto, SearchProvinceDto, UpdateProvinceDto } from "./province.dto";
import { ProvinceService } from "./province.service";
@ApiTags("province")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('province')
export class ProvinceController extends BaseController{
    constructor(private readonly provinceService:ProvinceService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.provinceService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchProvinceDto) {
    try{      
      return this.success(await this.provinceService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('country-dropdown')
  async countryDropdown(@Body() dto: SearchCountryDto) {
    try{      
      return this.success(await this.provinceService.countryDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateProvinceDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.provinceService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateProvinceDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.provinceService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.provinceService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
