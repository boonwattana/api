import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchTeacherWorkDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    workYear?:string
@ApiPropertyOptional({ type: Number})
    status?:number
}
export class TeacherWorkDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    workYear:string
@ApiPropertyOptional({ type: String})
    institutionName:string
@ApiPropertyOptional({ type: String})
    positionName:string
@ApiPropertyOptional({ type: Number})
    status:number
} 
export class CreateTeacherWorkDto extends TeacherWorkDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    workYear:string
@ApiPropertyOptional({ type: String})
    institutionName:string
@ApiPropertyOptional({ type: String})
    positionName:string
@ApiPropertyOptional({ type: Number})
    status:number
}
export class UpdateTeacherWorkDto extends TeacherWorkDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    workYear:string
@ApiPropertyOptional({ type: String})
    institutionName:string
@ApiPropertyOptional({ type: String})
    positionName:string
@ApiPropertyOptional({ type: Number})
    status:number
}
