import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreatePractitionerLevelDto, SearchPractitionerLevelDto, UpdatePractitionerLevelDto } from "./practitioner-level.dto";
import { PractitionerLevelService } from "./practitioner-level.service";
@ApiTags("practitioner-level")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('practitioner-level')
export class PractitionerLevelController extends BaseController{
    constructor(private readonly practitionerlevelService:PractitionerLevelService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.practitionerlevelService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchPractitionerLevelDto) {
    try{      
      return this.success(await this.practitionerlevelService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreatePractitionerLevelDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.practitionerlevelService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdatePractitionerLevelDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.practitionerlevelService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.practitionerlevelService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
