import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { CreateEditFieldDto, SearchEditFieldDto, UpdateEditFieldDto } from "./edit-field.dto";
import { EditFieldService } from "./edit-field.service";
@ApiTags("edit-field")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('edit-field')
export class EditFieldController extends BaseController{
    constructor(private readonly editfieldService:EditFieldService,
      ){
      super()
    }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.editfieldService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchEditFieldDto) {
    try{      
      return this.success(await this.editfieldService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateEditFieldDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.editfieldService.create(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateEditFieldDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.editfieldService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.editfieldService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
