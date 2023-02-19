import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarUploadImgDto, SearchSarUploadImgDto, UpdateSarUploadImgDto } from "./sar-upload-img.dto";
import { SarUploadImgService } from "./sar-upload-img.service";
@ApiTags("sar-upload-img")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-upload-img')
export class SarUploadImgController extends BaseController{
    constructor(private readonly saruploadimgService:SarUploadImgService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.saruploadimgService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarUploadImgDto) {
    try{      
      return this.success(await this.saruploadimgService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.saruploadimgService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarUploadImgDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.saruploadimgService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarUploadImgDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.saruploadimgService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.saruploadimgService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
