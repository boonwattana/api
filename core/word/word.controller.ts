import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchDistrictDto } from "src/api/district/district.dto";
import { ExportWordDto, ImportWordDto, SearchExportWordDto } from "./word.dto";
import { ModuleName } from "../shared/constans/enum-constans";
import { WordService } from "./word.service";
@ApiTags("word")
// @UseGuards(JwtAuthGuard)
// @ApiBearerAuth()
@Controller('word')
export class WordController extends BaseController{
    constructor(private readonly service:WordService,
      ){
      super()
    }
    @Post('demo')
    async downloadReport(@Body() dto:ExportWordDto,@Res() response) {
  
      // try {
      //   const pdfFile = await this.service.demo(dto);
      //   const fileName = 'test'
      //   response.writeHead(200, {
      //    'Content-Type': 'application/docx',
      //    'Content-disposition': `attachment;filename=${fileName}.docx`,
      //   });
      //   response.end(pdfFile);
      // } catch (e){      
      //   console.log(e);
      //   throw new BadRequestException('ไม่มีข้อมูล')
      // }
    }
  
}
