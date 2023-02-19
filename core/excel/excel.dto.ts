import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";
import { ModuleName } from "../shared/constans/enum-constans";
export class ImportExcelDto {
    moduleName:string
    base64:string
} 
export class SearchExportExcelDto  extends SearchParameter{
    @ApiPropertyOptional({type:[String]})
    bindingField:{
        en:string,
        th:string,
        active:boolean
    }[]
}
