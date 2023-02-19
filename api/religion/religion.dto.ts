import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchReligionDto extends SearchParameter {
    religionName?:string
}
export class ReligionDto {
    religionName:string
    religionDescription:string
    remark:string
} 
export class CreateReligionDto extends ReligionDto{
    religionName:string
    religionDescription:string
    remark:string
}
export class UpdateReligionDto extends ReligionDto{
    religionName:string
    religionDescription:string
    remark:string
}
