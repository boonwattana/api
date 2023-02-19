import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarCoursesYearTermDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: Number})
    yearTermId?:number
}
export class SarCoursesYearTermDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    subjectCode:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    hourPerWeek:number
    @ApiPropertyOptional({ type: Number})
    totalRoom:number
} 
export class CreateSarCoursesYearTermDto extends SarCoursesYearTermDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    subjectCode:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    hourPerWeek:number
    @ApiPropertyOptional({ type: Number})
    totalRoom:number
}
export class UpdateSarCoursesYearTermDto extends SarCoursesYearTermDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    subjectName:string
@ApiPropertyOptional({ type: String})
    subjectCode:string
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    hourPerWeek:number
    @ApiPropertyOptional({ type: Number})
    totalRoom:number
}
