import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchEducationBackgroundDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: Number})
    educationId?:number
@ApiPropertyOptional({ type: String})
    educationShotNameEn?:string
}
export class EducationBackgroundDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: Number})
    educationId:number
@ApiPropertyOptional({ type: String})
    educationMajor:string
@ApiPropertyOptional({ type: String})
    educationShotNameTh:string
@ApiPropertyOptional({ type: String})
    educationShotNameEn:string
@ApiPropertyOptional({ type: String})
    educationYear:string
@ApiPropertyOptional({ type: String})
    institutionName:string
@ApiPropertyOptional({ type: Number})
    status:number
} 
export class CreateEducationBackgroundDto extends EducationBackgroundDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: Number})
    educationId:number
@ApiPropertyOptional({ type: String})
    educationMajor:string
@ApiPropertyOptional({ type: String})
    educationShotNameTh:string
@ApiPropertyOptional({ type: String})
    educationShotNameEn:string
@ApiPropertyOptional({ type: String})
    educationYear:string
@ApiPropertyOptional({ type: String})
    institutionName:string
@ApiPropertyOptional({ type: Number})
    status:number
}
export class UpdateEducationBackgroundDto extends EducationBackgroundDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: Number})
    educationId:number
@ApiPropertyOptional({ type: String})
    educationMajor:string
@ApiPropertyOptional({ type: String})
    educationShotNameTh:string
@ApiPropertyOptional({ type: String})
    educationShotNameEn:string
@ApiPropertyOptional({ type: String})
    educationYear:string
@ApiPropertyOptional({ type: String})
    institutionName:string
@ApiPropertyOptional({ type: Number})
    status:number
}
