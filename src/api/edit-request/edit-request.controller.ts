import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchEditFieldDto } from "src/api/edit-field/edit-field.dto";
import { CreateEditRequestDto, SearchEditRequestDto, UpdateEditRequestDto } from "./edit-request.dto";
import { EditRequestService } from "./edit-request.service";
@ApiTags("edit-request")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('edit-request')
export class EditRequestController extends BaseController{
    constructor(private readonly editrequestService:EditRequestService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.editrequestService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchEditRequestDto) {
    try{      
      return this.success(await this.editrequestService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('edit-field-dropdown')
  async editFieldDropdown(@Body() dto: SearchEditFieldDto) {
    try{      
      return this.success(await this.editrequestService.editFieldDropdown(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateEditRequestDto, @Req() req:CustomRequest,){     
    try{      
      return this.success(await this.editrequestService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateEditRequestDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.editrequestService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('approve/:id')
  async approve(@Param('id') id: number,@Body() dto: UpdateEditRequestDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.editrequestService.approve(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('reject/:id')
  async reject(@Param('id') id: number,@Body() dto: UpdateEditRequestDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.editrequestService.reject(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.editrequestService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
