import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarQualityEvidenceDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarQualityEvidenceDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    evidenceName:string
@ApiPropertyOptional({ type: Number})
    evidenceType:number
    @ApiPropertyOptional({ type: Number})
    standard_type:number
} 
export class CreateSarQualityEvidenceDto extends SarQualityEvidenceDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    evidenceName:string
@ApiPropertyOptional({ type: Number})
    evidenceType:number
    @ApiPropertyOptional({ type: Number})
    standard_type:number
}
export class UpdateSarQualityEvidenceDto extends SarQualityEvidenceDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    evidenceName:string
@ApiPropertyOptional({ type: Number})
    evidenceType:number
    @ApiPropertyOptional({ type: Number})
    standard_type:number
}
