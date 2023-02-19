import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarAdviseClassDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarAdviseClassDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalBoy:number
@ApiPropertyOptional({ type: Number})
    totalGirl:number
} 
export class CreateSarAdviseClassDto extends SarAdviseClassDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalBoy:number
@ApiPropertyOptional({ type: Number})
    totalGirl:number
}
export class UpdateSarAdviseClassDto extends SarAdviseClassDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    totalStudent:number
@ApiPropertyOptional({ type: String})
    class:string
@ApiPropertyOptional({ type: Number})
    totalBoy:number
@ApiPropertyOptional({ type: Number})
    totalGirl:number
}
