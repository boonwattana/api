import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchPractitionerLevelDto extends SearchParameter {
@ApiPropertyOptional({ type: String})
    levelName?:string
@ApiPropertyOptional({ type: String})
    levelDescription?:string
}
export class PractitionerLevelDto {
@ApiPropertyOptional({ type: String})
    levelName:string
@ApiPropertyOptional({ type: String})
    levelDescription:string
} 
export class CreatePractitionerLevelDto extends PractitionerLevelDto{
@ApiPropertyOptional({ type: String})
    levelName:string
@ApiPropertyOptional({ type: String})
    levelDescription:string
}
export class UpdatePractitionerLevelDto extends PractitionerLevelDto{
@ApiPropertyOptional({ type: String})
    levelName:string
@ApiPropertyOptional({ type: String})
    levelDescription:string
}
