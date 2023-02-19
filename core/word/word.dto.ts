import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";
import { ModuleName } from "../shared/constans/enum-constans";
export class ImportWordDto {
    moduleName:string
    base64:string
} 
export class SearchExportWordDto  extends SearchParameter{
    
}
export class ExportWordDto {
    @ApiProperty({type:Number,description:'id SAR'})
    id:number
}
