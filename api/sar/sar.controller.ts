import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { CreateSarDto, SearchSarDto, UpdateSarDto } from "./sar.dto";
import { SarService } from "./sar.service";
import { ExportWordDto } from "src/core/word/word.dto";
@ApiTags("sar")
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@Controller('sar')
export class SarController extends BaseController{
    constructor(private readonly sarService:SarService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.sarService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchSarDto) {
    try{      
      return this.success(await this.sarService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('export-to-word')
  async downloadReport(@Body() dto:ExportWordDto,@Res() response) {

    try {
      const pdfFile = await this.sarService.exportReport(dto.id);
      const fileName = 'test'
      response.writeHead(200, {
       'Content-Type': 'application/docx',
       'Content-disposition': `attachment;filename=${fileName}.docx`,
      });
      response.end(pdfFile);
    } catch (e){      
      console.log(e);
      throw new BadRequestException('ไม่มีข้อมูล')
    }
  }
  @Get('teacher-dropdown')
  async teacherDropdown(@Body() dto: SearchTeacherDto) {
    try{      
      return this.success(await this.sarService.teacherDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateSarDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.sarService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateSarDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.sarService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.sarService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }

  @Get('initialSarDetail/:refIdValue')
  async initialSarDetail(@Param('refIdValue') refIdValue: string) {
    try{
      return this.success(await this.sarService.initialSarDetail(refIdValue))
    }catch(e){
      return this.error(e)
    }
  }
}
