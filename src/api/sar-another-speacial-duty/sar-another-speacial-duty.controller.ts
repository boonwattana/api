import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarAnotherSpeacialDutyDto, SearchSarAnotherSpeacialDutyDto, UpdateSarAnotherSpeacialDutyDto } from "./sar-another-speacial-duty.dto";
import { SarAnotherSpeacialDutyService } from "./sar-another-speacial-duty.service";
@ApiTags("sar-another-speacial-duty")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-another-speacial-duty')
export class SarAnotherSpeacialDutyController extends BaseController{
    constructor(private readonly saranotherspeacialdutyService:SarAnotherSpeacialDutyService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.saranotherspeacialdutyService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarAnotherSpeacialDutyDto) {
    try{      
      return this.success(await this.saranotherspeacialdutyService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.saranotherspeacialdutyService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarAnotherSpeacialDutyDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.saranotherspeacialdutyService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarAnotherSpeacialDutyDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.saranotherspeacialdutyService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.saranotherspeacialdutyService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
