import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarCrudAssessmentDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarCrudAssessmentDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    result:string
@ApiPropertyOptional({ type: Number})
    assessment:number
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: String})
    class:string
    @ApiPropertyOptional({ type: Number})
    assessment1:number
    @ApiPropertyOptional({ type: Number})
    assessment2:number
    @ApiPropertyOptional({ type: Number})
    assessment3:number
    @ApiPropertyOptional({ type: Number})
    assessment4:number
    @ApiPropertyOptional({ type: String})
    subject:string
    @ApiPropertyOptional({ type: Number})
    yearTermId:number
} 
export class CreateSarCrudAssessmentDto extends SarCrudAssessmentDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    result:string
@ApiPropertyOptional({ type: Number})
    assessment:number
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: String})
    class:string
    @ApiPropertyOptional({ type: Number})
    assessment1:number
    @ApiPropertyOptional({ type: Number})
    assessment2:number
    @ApiPropertyOptional({ type: Number})
    assessment3:number
    @ApiPropertyOptional({ type: Number})
    assessment4:number
    @ApiPropertyOptional({ type: String})
    subject:string
    @ApiPropertyOptional({ type: Number})
    yearTermId:number
}
export class UpdateSarCrudAssessmentDto extends SarCrudAssessmentDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    result:string
@ApiPropertyOptional({ type: Number})
    assessment:number
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: String})
    class:string
    @ApiPropertyOptional({ type: Number})
    assessment1:number
    @ApiPropertyOptional({ type: Number})
    assessment2:number
    @ApiPropertyOptional({ type: Number})
    assessment3:number
    @ApiPropertyOptional({ type: Number})
    assessment4:number
    @ApiPropertyOptional({ type: String})
    subject:string
    @ApiPropertyOptional({ type: Number})
    yearTermId:number
}
