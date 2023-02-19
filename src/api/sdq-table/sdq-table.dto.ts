import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSdqTableDto extends SearchParameter {
@ApiPropertyOptional({ type: String})
    atSemester?:string
@ApiPropertyOptional({ type: String})
    atYear?:string
}
export class SdqTableDto {
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: String})
    atSemester:string
@ApiPropertyOptional({ type: String})
    atYear:string
@ApiPropertyOptional({ type: Number})
    evaluateId:number
@ApiPropertyOptional({ type: Date})
    evaluateDate:Date
@ApiPropertyOptional({ type: Number})
    estimateType:number
@ApiPropertyOptional({ type: Number})
    choice01:number
@ApiPropertyOptional({ type: Number})
    choice02:number
@ApiPropertyOptional({ type: Number})
    choice03:number
@ApiPropertyOptional({ type: Number})
    choice04:number
@ApiPropertyOptional({ type: Number})
    choice05:number
@ApiPropertyOptional({ type: Number})
    choice06:number
@ApiPropertyOptional({ type: Number})
    choice07:number
@ApiPropertyOptional({ type: Number})
    choice08:number
@ApiPropertyOptional({ type: Number})
    choice09:number
@ApiPropertyOptional({ type: Number})
    choice10:number
@ApiPropertyOptional({ type: Number})
    choice11:number
@ApiPropertyOptional({ type: Number})
    choice12:number
@ApiPropertyOptional({ type: Number})
    choice13:number
@ApiPropertyOptional({ type: Number})
    choice14:number
@ApiPropertyOptional({ type: Number})
    choice15:number
@ApiPropertyOptional({ type: Number})
    choice16:number
@ApiPropertyOptional({ type: Number})
    choice17:number
@ApiPropertyOptional({ type: Number})
    choice18:number
@ApiPropertyOptional({ type: Number})
    choice19:number
@ApiPropertyOptional({ type: Number})
    choice20:number
@ApiPropertyOptional({ type: Number})
    choice21:number
@ApiPropertyOptional({ type: Number})
    choice22:number
@ApiPropertyOptional({ type: Number})
    choice23:number
@ApiPropertyOptional({ type: Number})
    choice24:number
@ApiPropertyOptional({ type: Number})
    choice25:number
    @ApiPropertyOptional({ type: Number})
    socialBehaviorScore05:number
    @ApiPropertyOptional({ type: Number})
    friendBehaviorScore04:number
    @ApiPropertyOptional({ type: Number})
    ADHDBehaviorScore03:number
    @ApiPropertyOptional({ type: Number})
    nomalBehaviorScore02:number
    @ApiPropertyOptional({ type: Number})
    emotionalBehaviorScore01:number
    @ApiPropertyOptional({ type: String})
    socialBehaviorScore05_value:string
    @ApiPropertyOptional({ type: String})
    friendBehaviorScore04_value:string
    @ApiPropertyOptional({ type: String})
    ADHDBehaviorScore03_value:string
    @ApiPropertyOptional({ type: String})
    nomalBehaviorScore02_value:string
    @ApiPropertyOptional({ type: String})
    emotionalBehaviorScore01_value:string
    @ApiPropertyOptional({ type: Number})
    sumScore:number
    @ApiPropertyOptional({ type: String})
    sumScore_value:string
    @ApiPropertyOptional({ type: Number})
    yearTermId?: number;
} 
export class CreateSdqTableDto extends SdqTableDto{
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: String})
    atSemester:string
@ApiPropertyOptional({ type: String})
    atYear:string
@ApiPropertyOptional({ type: Number})
    evaluateId:number
@ApiPropertyOptional({ type: Date})
    evaluateDate:Date
@ApiPropertyOptional({ type: Number})
    estimateType:number
@ApiPropertyOptional({ type: Number})
    choice01:number
@ApiPropertyOptional({ type: Number})
    choice02:number
@ApiPropertyOptional({ type: Number})
    choice03:number
@ApiPropertyOptional({ type: Number})
    choice04:number
@ApiPropertyOptional({ type: Number})
    choice05:number
@ApiPropertyOptional({ type: Number})
    choice06:number
@ApiPropertyOptional({ type: Number})
    choice07:number
@ApiPropertyOptional({ type: Number})
    choice08:number
@ApiPropertyOptional({ type: Number})
    choice09:number
@ApiPropertyOptional({ type: Number})
    choice10:number
@ApiPropertyOptional({ type: Number})
    choice11:number
@ApiPropertyOptional({ type: Number})
    choice12:number
@ApiPropertyOptional({ type: Number})
    choice13:number
@ApiPropertyOptional({ type: Number})
    choice14:number
@ApiPropertyOptional({ type: Number})
    choice15:number
@ApiPropertyOptional({ type: Number})
    choice16:number
@ApiPropertyOptional({ type: Number})
    choice17:number
@ApiPropertyOptional({ type: Number})
    choice18:number
@ApiPropertyOptional({ type: Number})
    choice19:number
@ApiPropertyOptional({ type: Number})
    choice20:number
@ApiPropertyOptional({ type: Number})
    choice21:number
@ApiPropertyOptional({ type: Number})
    choice22:number
@ApiPropertyOptional({ type: Number})
    choice23:number
@ApiPropertyOptional({ type: Number})
    choice24:number
@ApiPropertyOptional({ type: Number})
    choice25:number
    @ApiPropertyOptional({ type: Number})
    socialBehaviorScore05:number
    @ApiPropertyOptional({ type: Number})
    friendBehaviorScore04:number
    @ApiPropertyOptional({ type: Number})
    ADHDBehaviorScore03:number
    @ApiPropertyOptional({ type: Number})
    nomalBehaviorScore02:number
    @ApiPropertyOptional({ type: Number})
    emotionalBehaviorScore01:number
    @ApiPropertyOptional({ type: String})
    socialBehaviorScore05_value:string
    @ApiPropertyOptional({ type: String})
    friendBehaviorScore04_value:string
    @ApiPropertyOptional({ type: String})
    ADHDBehaviorScore03_value:string
    @ApiPropertyOptional({ type: String})
    nomalBehaviorScore02_value:string
    @ApiPropertyOptional({ type: String})
    emotionalBehaviorScore01_value:string
    @ApiPropertyOptional({ type: Number})
    sumScore:number
    @ApiPropertyOptional({ type: String})
    sumScore_value:string
}
export class UpdateSdqTableDto extends SdqTableDto{
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: String})
    atSemester:string
@ApiPropertyOptional({ type: String})
    atYear:string
@ApiPropertyOptional({ type: Number})
    evaluateId:number
@ApiPropertyOptional({ type: Date})
    evaluateDate:Date
@ApiPropertyOptional({ type: Number})
    estimateType:number
@ApiPropertyOptional({ type: Number})
    choice01:number
@ApiPropertyOptional({ type: Number})
    choice02:number
@ApiPropertyOptional({ type: Number})
    choice03:number
@ApiPropertyOptional({ type: Number})
    choice04:number
@ApiPropertyOptional({ type: Number})
    choice05:number
@ApiPropertyOptional({ type: Number})
    choice06:number
@ApiPropertyOptional({ type: Number})
    choice07:number
@ApiPropertyOptional({ type: Number})
    choice08:number
@ApiPropertyOptional({ type: Number})
    choice09:number
@ApiPropertyOptional({ type: Number})
    choice10:number
@ApiPropertyOptional({ type: Number})
    choice11:number
@ApiPropertyOptional({ type: Number})
    choice12:number
@ApiPropertyOptional({ type: Number})
    choice13:number
@ApiPropertyOptional({ type: Number})
    choice14:number
@ApiPropertyOptional({ type: Number})
    choice15:number
@ApiPropertyOptional({ type: Number})
    choice16:number
@ApiPropertyOptional({ type: Number})
    choice17:number
@ApiPropertyOptional({ type: Number})
    choice18:number
@ApiPropertyOptional({ type: Number})
    choice19:number
@ApiPropertyOptional({ type: Number})
    choice20:number
@ApiPropertyOptional({ type: Number})
    choice21:number
@ApiPropertyOptional({ type: Number})
    choice22:number
@ApiPropertyOptional({ type: Number})
    choice23:number
@ApiPropertyOptional({ type: Number})
    choice24:number
@ApiPropertyOptional({ type: Number})
    choice25:number
    @ApiPropertyOptional({ type: Number})
    socialBehaviorScore05:number
    @ApiPropertyOptional({ type: Number})
    friendBehaviorScore04:number
    @ApiPropertyOptional({ type: Number})
    ADHDBehaviorScore03:number
    @ApiPropertyOptional({ type: Number})
    nomalBehaviorScore02:number
    @ApiPropertyOptional({ type: Number})
    emotionalBehaviorScore01:number
    @ApiPropertyOptional({ type: String})
    socialBehaviorScore05_value:string
    @ApiPropertyOptional({ type: String})
    friendBehaviorScore04_value:string
    @ApiPropertyOptional({ type: String})
    ADHDBehaviorScore03_value:string
    @ApiPropertyOptional({ type: String})
    nomalBehaviorScore02_value:string
    @ApiPropertyOptional({ type: String})
    emotionalBehaviorScore01_value:string
    @ApiPropertyOptional({ type: Number})
    sumScore:number
    @ApiPropertyOptional({ type: String})
    sumScore_value:string
}
