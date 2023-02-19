import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchEthnicityDto extends SearchParameter {
    ethnicityName?:string
}
export class EthnicityDto {
    ethnicityName:string
    ethnicityDescription:string
    remark:string
} 
export class CreateEthnicityDto extends EthnicityDto{
    ethnicityName:string
    ethnicityDescription:string
    remark:string
}
export class UpdateEthnicityDto extends EthnicityDto{
    ethnicityName:string
    ethnicityDescription:string
    remark:string
}
