import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarSelfAssessmentDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarSelfAssessmentDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    choice1:number
@ApiPropertyOptional({ type: Number})
    choice2:number
@ApiPropertyOptional({ type: Number})
    choice3:number
@ApiPropertyOptional({ type: Number})
    choice4:number
@ApiPropertyOptional({ type: Number})
    choice5:number
@ApiPropertyOptional({ type: String})
    result:string
} 
export class CreateSarSelfAssessmentDto extends SarSelfAssessmentDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    choice1:number
@ApiPropertyOptional({ type: Number})
    choice2:number
@ApiPropertyOptional({ type: Number})
    choice3:number
@ApiPropertyOptional({ type: Number})
    choice4:number
@ApiPropertyOptional({ type: Number})
    choice5:number
@ApiPropertyOptional({ type: String})
    result:string
}
export class UpdateSarSelfAssessmentDto extends SarSelfAssessmentDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    choice1:number
@ApiPropertyOptional({ type: Number})
    choice2:number
@ApiPropertyOptional({ type: Number})
    choice3:number
@ApiPropertyOptional({ type: Number})
    choice4:number
@ApiPropertyOptional({ type: Number})
    choice5:number
@ApiPropertyOptional({ type: String})
    result:string
}
