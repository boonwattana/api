import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarStandard3Dto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarStandard3Dto {
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
    choice4:number
@ApiPropertyOptional({ type: Number})
    choice5:number
@ApiPropertyOptional({ type: Number})
    choice6:number
@ApiPropertyOptional({ type: Number})
    choice7:number
@ApiPropertyOptional({ type: Number})
    choice8:number
@ApiPropertyOptional({ type: Number})
    choice9:number
@ApiPropertyOptional({ type: Number})
    choice10:number
@ApiPropertyOptional({ type: Number})
    choice11:number
@ApiPropertyOptional({ type: Number})
    choice12:number
@ApiPropertyOptional({ type: Number})
    result:number
} 
export class CreateSarStandard3Dto extends SarStandard3Dto{
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
    choice4:number
@ApiPropertyOptional({ type: Number})
    choice5:number
@ApiPropertyOptional({ type: Number})
    choice6:number
@ApiPropertyOptional({ type: Number})
    choice7:number
@ApiPropertyOptional({ type: Number})
    choice8:number
@ApiPropertyOptional({ type: Number})
    choice9:number
@ApiPropertyOptional({ type: Number})
    choice10:number
@ApiPropertyOptional({ type: Number})
    choice11:number
@ApiPropertyOptional({ type: Number})
    choice12:number
@ApiPropertyOptional({ type: Number})
    result:number
}
export class UpdateSarStandard3Dto extends SarStandard3Dto{
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
    choice4:number
@ApiPropertyOptional({ type: Number})
    choice5:number
@ApiPropertyOptional({ type: Number})
    choice6:number
@ApiPropertyOptional({ type: Number})
    choice7:number
@ApiPropertyOptional({ type: Number})
    choice8:number
@ApiPropertyOptional({ type: Number})
    choice9:number
@ApiPropertyOptional({ type: Number})
    choice10:number
@ApiPropertyOptional({ type: Number})
    choice11:number
@ApiPropertyOptional({ type: Number})
    choice12:number
@ApiPropertyOptional({ type: Number})
    result:number
}
