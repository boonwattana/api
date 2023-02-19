import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchNationalityDto extends SearchParameter {
    nationalityName?:string
}
export class NationalityDto {
    nationalityName:string
    nationalityDescription:string
    remark:string
} 
export class CreateNationalityDto extends NationalityDto{
    nationalityName:string
    nationalityDescription:string
    remark:string
}
export class UpdateNationalityDto extends NationalityDto{
    nationalityName:string
    nationalityDescription:string
    remark:string
}
