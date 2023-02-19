import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarTeachingResultDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: Number})
    yearTermId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarTeachingResultDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: Number})
    resultGrad1:number
@ApiPropertyOptional({ type: Number})
    resultGrad2:number
@ApiPropertyOptional({ type: Number})
    resultGrad3:number
@ApiPropertyOptional({ type: Number})
    resultGrad4:number
@ApiPropertyOptional({ type: Number})
    resultGrad5:number
@ApiPropertyOptional({ type: Number})
    resultGrad6:number
@ApiPropertyOptional({ type: Number})
    resultGrad7:number
@ApiPropertyOptional({ type: Number})
    resultGrad8:number
@ApiPropertyOptional({ type: Number})
    resultGrad9:number
@ApiPropertyOptional({ type: Number})
    resultGrad10:number
@ApiPropertyOptional({ type: Number})
    totalResultGrad:number
} 
export class CreateSarTeachingResultDto extends SarTeachingResultDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: Number})
    resultGrad1:number
@ApiPropertyOptional({ type: Number})
    resultGrad2:number
@ApiPropertyOptional({ type: Number})
    resultGrad3:number
@ApiPropertyOptional({ type: Number})
    resultGrad4:number
@ApiPropertyOptional({ type: Number})
    resultGrad5:number
@ApiPropertyOptional({ type: Number})
    resultGrad6:number
@ApiPropertyOptional({ type: Number})
    resultGrad7:number
@ApiPropertyOptional({ type: Number})
    resultGrad8:number
@ApiPropertyOptional({ type: Number})
    resultGrad9:number
@ApiPropertyOptional({ type: Number})
    resultGrad10:number
@ApiPropertyOptional({ type: Number})
    totalResultGrad:number
}
export class UpdateSarTeachingResultDto extends SarTeachingResultDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: Number})
    resultGrad1:number
@ApiPropertyOptional({ type: Number})
    resultGrad2:number
@ApiPropertyOptional({ type: Number})
    resultGrad3:number
@ApiPropertyOptional({ type: Number})
    resultGrad4:number
@ApiPropertyOptional({ type: Number})
    resultGrad5:number
@ApiPropertyOptional({ type: Number})
    resultGrad6:number
@ApiPropertyOptional({ type: Number})
    resultGrad7:number
@ApiPropertyOptional({ type: Number})
    resultGrad8:number
@ApiPropertyOptional({ type: Number})
    resultGrad9:number
@ApiPropertyOptional({ type: Number})
    resultGrad10:number
@ApiPropertyOptional({ type: Number})
    totalResultGrad:number
}
