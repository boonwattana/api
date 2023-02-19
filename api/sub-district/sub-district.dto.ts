import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSubDistrictDto extends SearchParameter {
    districtId?:number
    code?:string
    name?:string
    postCode?:string
}
export class SubDistrictDto {
    id:number
    districtId:number
    code:string
    name:string
    postCode:string
} 
export class CreateSubDistrictDto extends SubDistrictDto{
    districtId:number
    code:string
    name:string
    postCode:string
}
export class UpdateSubDistrictDto extends SubDistrictDto{
    districtId:number
    code:string
    name:string
    postCode:string
}
