import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarStandard4Dto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarStandard4Dto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    choice1:number
@ApiPropertyOptional({ type: Number})
    choice2:number
@ApiPropertyOptional({ type: Number})
    choice3:number
@ApiPropertyOptional({ type: Number})
    result:number
} 
export class CreateSarStandard4Dto extends SarStandard4Dto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    choice1:number
@ApiPropertyOptional({ type: Number})
    choice2:number
@ApiPropertyOptional({ type: Number})
    choice3:number
@ApiPropertyOptional({ type: Number})
    result:number
}
export class UpdateSarStandard4Dto extends SarStandard4Dto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Number})
    choice1:number
@ApiPropertyOptional({ type: Number})
    choice2:number
@ApiPropertyOptional({ type: Number})
    choice3:number
@ApiPropertyOptional({ type: Number})
    result:number
}
