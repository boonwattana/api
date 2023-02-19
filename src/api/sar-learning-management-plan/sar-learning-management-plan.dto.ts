import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarLearningManagementPlanDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarLearningManagementPlanDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    subjectCode:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    planCount:number
} 
export class CreateSarLearningManagementPlanDto extends SarLearningManagementPlanDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    subjectCode:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    planCount:number
}
export class UpdateSarLearningManagementPlanDto extends SarLearningManagementPlanDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    subjectCode:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    planCount:number
}
