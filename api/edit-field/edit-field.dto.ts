import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchEditFieldDto extends SearchParameter {
    editFieldName?:string
}
export class EditFieldDto {
    editFieldName:string
    editFieldDescription:string
} 
export class CreateEditFieldDto extends EditFieldDto{
    editFieldName:string
    editFieldDescription:string
}
export class UpdateEditFieldDto extends EditFieldDto{
    editFieldName:string
    editFieldDescription:string
}
