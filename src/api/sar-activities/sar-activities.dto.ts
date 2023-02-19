import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarActivitiesDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarActivitiesDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    activitieName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: Number})
    passValue:number
} 
export class CreateSarActivitiesDto extends SarActivitiesDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    activitieName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: Number})
    passValue:number
}
export class UpdateSarActivitiesDto extends SarActivitiesDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    activitieName:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: Number})
    passValue:number
}
