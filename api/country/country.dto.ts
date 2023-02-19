import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchCountryDto extends SearchParameter {
    code?:string
    name?:string
}
export class CountryDto {
    id:number
    code:string
    name:string
} 
export class CreateCountryDto extends CountryDto{
    code:string
    name:string
}
export class UpdateCountryDto extends CountryDto{
    code:string
    name:string
}
