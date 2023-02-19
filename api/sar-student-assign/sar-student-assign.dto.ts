import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarStudentAssignDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarStudentAssignDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: Number})
    timesCount:number
@ApiPropertyOptional({ type: String})
    sourceName:string
} 
export class CreateSarStudentAssignDto extends SarStudentAssignDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: Number})
    timesCount:number
@ApiPropertyOptional({ type: String})
    sourceName:string
}
export class UpdateSarStudentAssignDto extends SarStudentAssignDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: Number})
    timesCount:number
@ApiPropertyOptional({ type: String})
    sourceName:string
}
