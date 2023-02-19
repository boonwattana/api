import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarSelfDevelopmentDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarSelfDevelopmentDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    title:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    place:string
@ApiPropertyOptional({ type: String})
    organization:string
@ApiPropertyOptional({ type: String})
    evidence:string
} 
export class CreateSarSelfDevelopmentDto extends SarSelfDevelopmentDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    title:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    place:string
@ApiPropertyOptional({ type: String})
    organization:string
@ApiPropertyOptional({ type: String})
    evidence:string
}
export class UpdateSarSelfDevelopmentDto extends SarSelfDevelopmentDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    title:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    place:string
@ApiPropertyOptional({ type: String})
    organization:string
@ApiPropertyOptional({ type: String})
    evidence:string
}
