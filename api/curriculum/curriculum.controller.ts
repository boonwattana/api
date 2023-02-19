import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateCurriculumDto, SearchCurriculumDto, UpdateCurriculumDto } from "./curriculum.dto";
import { CurriculumService } from "./curriculum.service";
@ApiTags("curriculum")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('curriculum')
export class CurriculumController extends BaseController{
    constructor(private readonly curriculumService:CurriculumService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.curriculumService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchCurriculumDto) {
    try{      
      return this.success(await this.curriculumService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateCurriculumDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.curriculumService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateCurriculumDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.curriculumService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.curriculumService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
