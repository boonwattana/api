import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarLecturerInviteDto, SearchSarLecturerInviteDto, UpdateSarLecturerInviteDto } from "./sar-lecturer-invite.dto";
import { SarLecturerInviteService } from "./sar-lecturer-invite.service";
@ApiTags("sar-lecturer-invite")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-lecturer-invite')
export class SarLecturerInviteController extends BaseController{
    constructor(private readonly sarlecturerinviteService:SarLecturerInviteService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarlecturerinviteService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarLecturerInviteDto) {
    try{      
      return this.success(await this.sarlecturerinviteService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarlecturerinviteService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarLecturerInviteDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarlecturerinviteService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarLecturerInviteDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarlecturerinviteService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarlecturerinviteService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
