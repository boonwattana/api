import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchAliveWithDto extends SearchParameter {
    aliveWithName?:string
}
export class AliveWithDto {
    aliveWithName:string
    aliveWithDescription:string
} 
export class CreateAliveWithDto extends AliveWithDto{
    aliveWithName:string
    aliveWithDescription:string
}
export class UpdateAliveWithDto extends AliveWithDto{
    aliveWithName:string
    aliveWithDescription:string
}
