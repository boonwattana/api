import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchProvinceDto extends SearchParameter {
    countryId?:number
    code?:string
    name?:string
}
export class ProvinceDto {
    id:number
    countryId:number
    code:string
    name:string
} 
export class CreateProvinceDto extends ProvinceDto{
    countryId:number
    code:string
    name:string
}
export class UpdateProvinceDto extends ProvinceDto{
    countryId:number
    code:string
    name:string
}
