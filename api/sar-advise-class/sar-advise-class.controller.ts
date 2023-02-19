import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarAdviseClassDto, SearchSarAdviseClassDto, UpdateSarAdviseClassDto } from "./sar-advise-class.dto";
import { SarAdviseClassService } from "./sar-advise-class.service";
@ApiTags("sar-advise-class")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-advise-class')
export class SarAdviseClassController extends BaseController{
    constructor(private readonly saradviseclassService:SarAdviseClassService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.saradviseclassService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarAdviseClassDto) {
    try{      
      return this.success(await this.saradviseclassService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.saradviseclassService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarAdviseClassDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.saradviseclassService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarAdviseClassDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.saradviseclassService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.saradviseclassService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
