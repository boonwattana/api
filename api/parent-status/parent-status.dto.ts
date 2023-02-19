import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchParentStatusDto extends SearchParameter {
    parentStatusName?:string
}
export class ParentStatusDto {
    parentStatusName:string
    parentStatusDescription:string
} 
export class CreateParentStatusDto extends ParentStatusDto{
    parentStatusName:string
    parentStatusDescription:string
}
export class UpdateParentStatusDto extends ParentStatusDto{
    parentStatusName:string
    parentStatusDescription:string
}
