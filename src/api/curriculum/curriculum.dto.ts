import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchCurriculumDto extends SearchParameter {
@ApiPropertyOptional({ type: String})
    curriculumName?:string
}
export class CurriculumDto {
@ApiPropertyOptional({ type: String})
    curriculumName:string
@ApiPropertyOptional({ type: String})
    curriculumDescription:string
} 
export class CreateCurriculumDto extends CurriculumDto{
@ApiPropertyOptional({ type: String})
    curriculumName:string
@ApiPropertyOptional({ type: String})
    curriculumDescription:string
}
export class UpdateCurriculumDto extends CurriculumDto{
@ApiPropertyOptional({ type: String})
    curriculumName:string
@ApiPropertyOptional({ type: String})
    curriculumDescription:string
}
