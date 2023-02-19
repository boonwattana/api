import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarAwardDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarAwardDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    awardName:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    organization:string
@ApiPropertyOptional({ type: String})
    evidence:string
} 
export class CreateSarAwardDto extends SarAwardDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    awardName:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    organization:string
@ApiPropertyOptional({ type: String})
    evidence:string
}
export class UpdateSarAwardDto extends SarAwardDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    awardName:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    organization:string
@ApiPropertyOptional({ type: String})
    evidence:string
}
