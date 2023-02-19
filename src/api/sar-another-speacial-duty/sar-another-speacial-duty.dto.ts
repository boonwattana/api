import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarAnotherSpeacialDutyDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarAnotherSpeacialDutyDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    dutyName:string
@ApiPropertyOptional({ type: String})
    referenceDoc:string
} 
export class CreateSarAnotherSpeacialDutyDto extends SarAnotherSpeacialDutyDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    dutyName:string
@ApiPropertyOptional({ type: String})
    referenceDoc:string
}
export class UpdateSarAnotherSpeacialDutyDto extends SarAnotherSpeacialDutyDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    dutyName:string
@ApiPropertyOptional({ type: String})
    referenceDoc:string
}
