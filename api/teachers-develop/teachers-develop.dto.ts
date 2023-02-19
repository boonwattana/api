import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchTeachersDevelopDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    subjectName?:string
}
export class TeachersDevelopDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    educationYear:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: Number})
    curriculumId:number
@ApiPropertyOptional({ type: Number})
    practitionerLevelId:number
@ApiPropertyOptional({ type: Number})
    totalHour:number
@ApiPropertyOptional({ type: String})
    institutionName:string
} 
export class CreateTeachersDevelopDto extends TeachersDevelopDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    educationYear:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: Number})
    curriculumId:number
@ApiPropertyOptional({ type: Number})
    practitionerLevelId:number
@ApiPropertyOptional({ type: Number})
    totalHour:number
@ApiPropertyOptional({ type: String})
    institutionName:string
}
export class UpdateTeachersDevelopDto extends TeachersDevelopDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    educationYear:string
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: Number})
    curriculumId:number
@ApiPropertyOptional({ type: Number})
    practitionerLevelId:number
@ApiPropertyOptional({ type: Number})
    totalHour:number
@ApiPropertyOptional({ type: String})
    institutionName:string
}
