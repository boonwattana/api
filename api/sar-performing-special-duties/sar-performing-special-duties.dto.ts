import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarPerformingSpecialDutiesDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarPerformingSpecialDutiesDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    group1Text1:string
@ApiPropertyOptional({ type: String})
    group1Text2:string
@ApiPropertyOptional({ type: String})
    group1Text3:string
@ApiPropertyOptional({ type: Number})
    group1Result:number
@ApiPropertyOptional({ type: String})
    group2Text1:string
@ApiPropertyOptional({ type: String})
    group2Text2:string
@ApiPropertyOptional({ type: String})
    group2Text3:string
@ApiPropertyOptional({ type: String})
    group2Text4:string
@ApiPropertyOptional({ type: String})
    group2Text5:string
@ApiPropertyOptional({ type: Number})
    group2Result:number
@ApiPropertyOptional({ type: String})
    group3Text1:string
@ApiPropertyOptional({ type: String})
    group3Text2:string
@ApiPropertyOptional({ type: Number})
    group3Result:number
@ApiPropertyOptional({ type: String})
    group4Text1:string
@ApiPropertyOptional({ type: String})
    group4Text2:string
@ApiPropertyOptional({ type: Number})
    group4Result:number
@ApiPropertyOptional({ type: String})
    group4Text3:string

    @ApiPropertyOptional({ type: String})
    group1Text4:string
    @ApiPropertyOptional({ type: String})
    group1Text5:string
    @ApiPropertyOptional({ type: String})
    group5Text1:string
    @ApiPropertyOptional({ type: String})
    group5Text2:string
    @ApiPropertyOptional({ type: Number})
    group5Result:number
} 
export class CreateSarPerformingSpecialDutiesDto extends SarPerformingSpecialDutiesDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    group1Text1:string
@ApiPropertyOptional({ type: String})
    group1Text2:string
@ApiPropertyOptional({ type: String})
    group1Text3:string
@ApiPropertyOptional({ type: Number})
    group1Result:number
@ApiPropertyOptional({ type: String})
    group2Text1:string
@ApiPropertyOptional({ type: String})
    group2Text2:string
@ApiPropertyOptional({ type: String})
    group2Text3:string
@ApiPropertyOptional({ type: String})
    group2Text4:string
@ApiPropertyOptional({ type: String})
    group2Text5:string
@ApiPropertyOptional({ type: Number})
    group2Result:number
@ApiPropertyOptional({ type: String})
    group3Text1:string
@ApiPropertyOptional({ type: String})
    group3Text2:string
@ApiPropertyOptional({ type: Number})
    group3Result:number
@ApiPropertyOptional({ type: String})
    group4Text1:string
@ApiPropertyOptional({ type: String})
    group4Text2:string
@ApiPropertyOptional({ type: Number})
    group4Result:number
@ApiPropertyOptional({ type: String})
    group4Text3:string
    @ApiPropertyOptional({ type: String})
    group1Text4:string
    @ApiPropertyOptional({ type: String})
    group1Text5:string
    @ApiPropertyOptional({ type: String})
    group5Text1:string
    @ApiPropertyOptional({ type: String})
    group5Text2:string
    @ApiPropertyOptional({ type: Number})
    group5Result:number
}
export class UpdateSarPerformingSpecialDutiesDto extends SarPerformingSpecialDutiesDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    group1Text1:string
@ApiPropertyOptional({ type: String})
    group1Text2:string
@ApiPropertyOptional({ type: String})
    group1Text3:string
@ApiPropertyOptional({ type: Number})
    group1Result:number
@ApiPropertyOptional({ type: String})
    group2Text1:string
@ApiPropertyOptional({ type: String})
    group2Text2:string
@ApiPropertyOptional({ type: String})
    group2Text3:string
@ApiPropertyOptional({ type: String})
    group2Text4:string
@ApiPropertyOptional({ type: String})
    group2Text5:string
@ApiPropertyOptional({ type: Number})
    group2Result:number
@ApiPropertyOptional({ type: String})
    group3Text1:string
@ApiPropertyOptional({ type: String})
    group3Text2:string
@ApiPropertyOptional({ type: Number})
    group3Result:number
@ApiPropertyOptional({ type: String})
    group4Text1:string
@ApiPropertyOptional({ type: String})
    group4Text2:string
@ApiPropertyOptional({ type: Number})
    group4Result:number
@ApiPropertyOptional({ type: String})
    group4Text3:string
    @ApiPropertyOptional({ type: String})
    group1Text4:string
    @ApiPropertyOptional({ type: String})
    group1Text5:string
    @ApiPropertyOptional({ type: String})
    group5Text1:string
    @ApiPropertyOptional({ type: String})
    group5Text2:string
    @ApiPropertyOptional({ type: Number})
    group5Result:number
}
