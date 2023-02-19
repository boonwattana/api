import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchDistrictDto extends SearchParameter {
    provinceId?:number
    code?:string
    name?:string
}
export class DistrictDto {
    id:number
    provinceId:number
    code:string
    name:string
} 
export class CreateDistrictDto extends DistrictDto{
    provinceId:number
    code:string
    name:string
}
export class UpdateDistrictDto extends DistrictDto{
    provinceId:number
    code:string
    name:string
}
