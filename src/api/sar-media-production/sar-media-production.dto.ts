import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarMediaProductionDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarMediaProductionDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    mediaProductionName:string
@ApiPropertyOptional({ type: Number})
    mediaProductionCount:number
@ApiPropertyOptional({ type: String})
    mediaProductionUnit:string
} 
export class CreateSarMediaProductionDto extends SarMediaProductionDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    mediaProductionName:string
@ApiPropertyOptional({ type: Number})
    mediaProductionCount:number
    @ApiPropertyOptional({ type: String})
    mediaProductionUnit:string
}
export class UpdateSarMediaProductionDto extends SarMediaProductionDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    mediaProductionName:string
@ApiPropertyOptional({ type: Number})
    mediaProductionCount:number
    @ApiPropertyOptional({ type: String})
    mediaProductionUnit:string
}
