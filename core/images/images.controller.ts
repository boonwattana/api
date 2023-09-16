import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { join } from "path";
import { of } from "rxjs";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { ImagesService } from "./images.service";
@ApiTags("images")
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@Controller('images')
export class ImagesController extends BaseController{
    constructor(private readonly service:ImagesService,
      ){
      super()
    }
  @Get(':image')
  async item(@Param('image') image: string,@Res() res) {  
    try{
      console.log('me tired');

      return of(res.sendFile(join(process.cwd(),'public/uploads/images',image))) 

    }catch(e){
      console.log('loaderror');
      
      return of(res.sendFile(join(process.cwd(),'public/uploads/images',image.split('.')[0]+'.jpeg'))) 

    }
  }
  @Get('/url/:id/:type')
  async urlList(@Param('id') id: number,@Param('type') type: number) {    
    try{
      return this.success(await this.service.list(id,type))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete(':id')
  async delete(@Param('id') id: number,@Req() req:CustomRequest) {  

    try{
      return this.success(await this.service.delete(id,req))
    }catch(e){
      return this.error(e)
    }   
  }
}