import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarQualityOfLearnersDto, SearchSarQualityOfLearnersDto, UpdateSarQualityOfLearnersDto } from "./sar-quality-of-learners.dto";
import { SarQualityOfLearnersService } from "./sar-quality-of-learners.service";
@ApiTags("sar-quality-of-learners")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-quality-of-learners')
export class SarQualityOfLearnersController extends BaseController{
    constructor(private readonly sarqualityoflearnersService:SarQualityOfLearnersService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarqualityoflearnersService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarQualityOfLearnersDto) {
    try{      
      return this.success(await this.sarqualityoflearnersService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarqualityoflearnersService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarQualityOfLearnersDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarqualityoflearnersService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarQualityOfLearnersDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarqualityoflearnersService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarqualityoflearnersService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
