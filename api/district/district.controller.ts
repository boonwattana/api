import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchProvinceDto } from "src/api/province/province.dto";
import { CreateDistrictDto, SearchDistrictDto, UpdateDistrictDto } from "./district.dto";
import { DistrictService } from "./district.service";
@ApiTags("district")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('district')
export class DistrictController extends BaseController{
    constructor(private readonly districtService:DistrictService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.districtService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchDistrictDto) {
    try{      
      return this.success(await this.districtService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('province-dropdown')
  async provinceDropdown(@Body() dto: SearchProvinceDto) {
    try{      
      return this.success(await this.districtService.provinceDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateDistrictDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.districtService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateDistrictDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.districtService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.districtService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
