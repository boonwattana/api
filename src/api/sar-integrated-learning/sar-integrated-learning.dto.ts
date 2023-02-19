import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarIntegratedLearningDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarIntegratedLearningDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    hourCount:number
    @ApiPropertyOptional({ type: String})
    mediaProductionName:string
    @ApiPropertyOptional({ type: String})
    mediaProductionUnit:string

    
} 
export class CreateSarIntegratedLearningDto extends SarIntegratedLearningDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    hourCount:number
    @ApiPropertyOptional({ type: String})
    mediaProductionName:string
    @ApiPropertyOptional({ type: String})
    mediaProductionUnit:string

}
export class UpdateSarIntegratedLearningDto extends SarIntegratedLearningDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    hourCount:number
    @ApiPropertyOptional({ type: String})
    mediaProductionName:string
    @ApiPropertyOptional({ type: String})
    mediaProductionUnit:string

}
