import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchDistrictDto } from "src/api/district/district.dto";
import { ImportExcelDto, SearchExportExcelDto } from "./excel.dto";
import { ModuleName } from "../shared/constans/enum-constans";
import { ExcelService } from "./excel.service";
@ApiTags("excel")
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@Controller('excel')
export class ExcelController extends BaseController{
    constructor(private readonly service:ExcelService,
      ){
      super()
    }
  @Post('export/:module')
  async export(@Param('module') module: string,@Body() dto: SearchExportExcelDto) {
    try{
      return this.success(await this.service.export(module,dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('export-th/:module')
  async exportTh(@Param('module') module: string,@Body() dto: SearchExportExcelDto) {
    try{
      return this.success(await this.service.exportTh(module,dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('import')
  async import(@Body() dto: ImportExcelDto) {
    
    try{            
      return this.success(await this.service.import(dto))
    }catch(e){
      console.log(e);
      
      return this.error(e)
    }
  }
  
}
