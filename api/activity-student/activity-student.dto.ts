import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchActivityStudentDto extends SearchParameter {
@ApiPropertyOptional({ type: String})
    activityMainName?:string
}
export class ActivityStudentDto {
@ApiPropertyOptional({ type: String})
    activityMainName:string
@ApiPropertyOptional({ type: String})
    activitySubName:string
} 
export class CreateActivityStudentDto extends ActivityStudentDto{
@ApiPropertyOptional({ type: String})
    activityMainName:string
@ApiPropertyOptional({ type: String})
    activitySubName:string
}
export class UpdateActivityStudentDto extends ActivityStudentDto{
@ApiPropertyOptional({ type: String})
    activityMainName:string
@ApiPropertyOptional({ type: String})
    activitySubName:string
}
