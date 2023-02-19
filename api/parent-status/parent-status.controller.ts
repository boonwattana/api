import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateParentStatusDto, SearchParentStatusDto, UpdateParentStatusDto } from "./parent-status.dto";
import { ParentStatusService } from "./parent-status.service";
@ApiTags("parent-status")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('parent-status')
export class ParentStatusController extends BaseController{
    constructor(private readonly parentstatusService:ParentStatusService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.parentstatusService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchParentStatusDto) {
    try{      
      return this.success(await this.parentstatusService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateParentStatusDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.parentstatusService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateParentStatusDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.parentstatusService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.parentstatusService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
