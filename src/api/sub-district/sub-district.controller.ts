import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchDistrictDto } from "src/api/district/district.dto";
import { CreateSubDistrictDto, SearchSubDistrictDto, UpdateSubDistrictDto } from "./sub-district.dto";
import { SubDistrictService } from "./sub-district.service";
@ApiTags("sub-district")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sub-district')
export class SubDistrictController extends BaseController{
    constructor(private readonly subdistrictService:SubDistrictService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.subdistrictService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSubDistrictDto) {
    try{      
      return this.success(await this.subdistrictService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('district-dropdown')
  async districtDropdown(@Body() dto: SearchDistrictDto) {
    try{      
      return this.success(await this.subdistrictService.districtDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSubDistrictDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.subdistrictService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSubDistrictDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.subdistrictService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.subdistrictService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
