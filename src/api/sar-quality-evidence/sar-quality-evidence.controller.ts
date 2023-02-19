import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarQualityEvidenceDto, SearchSarQualityEvidenceDto, UpdateSarQualityEvidenceDto } from "./sar-quality-evidence.dto";
import { SarQualityEvidenceService } from "./sar-quality-evidence.service";
@ApiTags("sar-quality-evidence")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('sar-quality-evidence')
export class SarQualityEvidenceController extends BaseController{
    constructor(private readonly sarqualityevidenceService:SarQualityEvidenceService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarqualityevidenceService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarQualityEvidenceDto) {
    try{      
      return this.success(await this.sarqualityevidenceService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarqualityevidenceService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarQualityEvidenceDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarqualityevidenceService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarQualityEvidenceDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarqualityevidenceService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarqualityevidenceService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
