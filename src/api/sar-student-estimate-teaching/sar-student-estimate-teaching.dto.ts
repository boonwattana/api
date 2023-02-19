import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarStudentEstimateTeachingDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarStudentEstimateTeachingDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string

    @ApiPropertyOptional({ type: Number})
    choice1_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_1P: number;
    @ApiPropertyOptional({ type: Number})
    @ApiPropertyOptional({ type: Number})
    choice2_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_1P: number;

@ApiPropertyOptional({ type: Number})
    result:number
} 
export class CreateSarStudentEstimateTeachingDto extends SarStudentEstimateTeachingDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
 @ApiPropertyOptional({ type: Number})
choice1_5P: number;
@ApiPropertyOptional({ type: Number})
choice1_4P: number;
@ApiPropertyOptional({ type: Number})
choice1_3P: number;
@ApiPropertyOptional({ type: Number})
choice1_2P: number;
@ApiPropertyOptional({ type: Number})
choice1_1P: number;
@ApiPropertyOptional({ type: Number})
@ApiPropertyOptional({ type: Number})
choice2_5P: number;
@ApiPropertyOptional({ type: Number})
choice3_5P: number;
@ApiPropertyOptional({ type: Number})
choice4_5P: number;
@ApiPropertyOptional({ type: Number})
choice5_5P: number;
@ApiPropertyOptional({ type: Number})
choice6_5P: number;
@ApiPropertyOptional({ type: Number})
choice7_5P: number;
@ApiPropertyOptional({ type: Number})
choice8_5P: number;
@ApiPropertyOptional({ type: Number})
choice9_5P: number;
@ApiPropertyOptional({ type: Number})
choice10_5P: number;
@ApiPropertyOptional({ type: Number})
choice11_5P: number;
@ApiPropertyOptional({ type: Number})
choice12_5P: number;
@ApiPropertyOptional({ type: Number})
choice13_5P: number;
@ApiPropertyOptional({ type: Number})
choice14_5P: number;
@ApiPropertyOptional({ type: Number})
choice15_5P: number;
@ApiPropertyOptional({ type: Number})
choice16_5P: number;
@ApiPropertyOptional({ type: Number})
choice17_5P: number;
@ApiPropertyOptional({ type: Number})
choice18_5P: number;
@ApiPropertyOptional({ type: Number})
choice19_5P: number;
@ApiPropertyOptional({ type: Number})
choice20_5P: number;
@ApiPropertyOptional({ type: Number})
choice2_4P: number;
@ApiPropertyOptional({ type: Number})
choice3_4P: number;
@ApiPropertyOptional({ type: Number})
choice4_4P: number;
@ApiPropertyOptional({ type: Number})
choice5_4P: number;
@ApiPropertyOptional({ type: Number})
choice6_4P: number;
@ApiPropertyOptional({ type: Number})
choice7_4P: number;
@ApiPropertyOptional({ type: Number})
choice8_4P: number;
@ApiPropertyOptional({ type: Number})
choice9_4P: number;
@ApiPropertyOptional({ type: Number})
choice10_4P: number;
@ApiPropertyOptional({ type: Number})
choice11_4P: number;
@ApiPropertyOptional({ type: Number})
choice12_4P: number;
@ApiPropertyOptional({ type: Number})
choice13_4P: number;
@ApiPropertyOptional({ type: Number})
choice14_4P: number;
@ApiPropertyOptional({ type: Number})
choice15_4P: number;
@ApiPropertyOptional({ type: Number})
choice16_4P: number;
@ApiPropertyOptional({ type: Number})
choice17_4P: number;
@ApiPropertyOptional({ type: Number})
choice18_4P: number;
@ApiPropertyOptional({ type: Number})
choice19_4P: number;
@ApiPropertyOptional({ type: Number})
choice20_4P: number;
@ApiPropertyOptional({ type: Number})
choice2_3P: number;
@ApiPropertyOptional({ type: Number})
choice3_3P: number;
@ApiPropertyOptional({ type: Number})
choice4_3P: number;
@ApiPropertyOptional({ type: Number})
choice5_3P: number;
@ApiPropertyOptional({ type: Number})
choice6_3P: number;
@ApiPropertyOptional({ type: Number})
choice7_3P: number;
@ApiPropertyOptional({ type: Number})
choice8_3P: number;
@ApiPropertyOptional({ type: Number})
choice9_3P: number;
@ApiPropertyOptional({ type: Number})
choice10_3P: number;
@ApiPropertyOptional({ type: Number})
choice11_3P: number;
@ApiPropertyOptional({ type: Number})
choice12_3P: number;
@ApiPropertyOptional({ type: Number})
choice13_3P: number;
@ApiPropertyOptional({ type: Number})
choice14_3P: number;
@ApiPropertyOptional({ type: Number})
choice15_3P: number;
@ApiPropertyOptional({ type: Number})
choice16_3P: number;
@ApiPropertyOptional({ type: Number})
choice17_3P: number;
@ApiPropertyOptional({ type: Number})
choice18_3P: number;
@ApiPropertyOptional({ type: Number})
choice19_3P: number;
@ApiPropertyOptional({ type: Number})
choice20_3P: number;
@ApiPropertyOptional({ type: Number})
choice2_2P: number;
@ApiPropertyOptional({ type: Number})
choice3_2P: number;
@ApiPropertyOptional({ type: Number})
choice4_2P: number;
@ApiPropertyOptional({ type: Number})
choice5_2P: number;
@ApiPropertyOptional({ type: Number})
choice6_2P: number;
@ApiPropertyOptional({ type: Number})
choice7_2P: number;
@ApiPropertyOptional({ type: Number})
choice8_2P: number;
@ApiPropertyOptional({ type: Number})
choice9_2P: number;
@ApiPropertyOptional({ type: Number})
choice10_2P: number;
@ApiPropertyOptional({ type: Number})
choice11_2P: number;
@ApiPropertyOptional({ type: Number})
choice12_2P: number;
@ApiPropertyOptional({ type: Number})
choice13_2P: number;
@ApiPropertyOptional({ type: Number})
choice14_2P: number;
@ApiPropertyOptional({ type: Number})
choice15_2P: number;
@ApiPropertyOptional({ type: Number})
choice16_2P: number;
@ApiPropertyOptional({ type: Number})
choice17_2P: number;
@ApiPropertyOptional({ type: Number})
choice18_2P: number;
@ApiPropertyOptional({ type: Number})
choice19_2P: number;
@ApiPropertyOptional({ type: Number})
choice20_2P: number;
@ApiPropertyOptional({ type: Number})
choice2_1P: number;
@ApiPropertyOptional({ type: Number})
choice3_1P: number;
@ApiPropertyOptional({ type: Number})
choice4_1P: number;
@ApiPropertyOptional({ type: Number})
choice5_1P: number;
@ApiPropertyOptional({ type: Number})
choice6_1P: number;
@ApiPropertyOptional({ type: Number})
choice7_1P: number;
@ApiPropertyOptional({ type: Number})
choice8_1P: number;
@ApiPropertyOptional({ type: Number})
choice9_1P: number;
@ApiPropertyOptional({ type: Number})
choice10_1P: number;
@ApiPropertyOptional({ type: Number})
choice11_1P: number;
@ApiPropertyOptional({ type: Number})
choice12_1P: number;
@ApiPropertyOptional({ type: Number})
choice13_1P: number;
@ApiPropertyOptional({ type: Number})
choice14_1P: number;
@ApiPropertyOptional({ type: Number})
choice15_1P: number;
@ApiPropertyOptional({ type: Number})
choice16_1P: number;
@ApiPropertyOptional({ type: Number})
choice17_1P: number;
@ApiPropertyOptional({ type: Number})
choice18_1P: number;
@ApiPropertyOptional({ type: Number})
choice19_1P: number;
@ApiPropertyOptional({ type: Number})
choice20_1P: number;
@ApiPropertyOptional({ type: Number})
    result:number
}
export class UpdateSarStudentEstimateTeachingDto extends SarStudentEstimateTeachingDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
    @ApiPropertyOptional({ type: Number})
    choice1_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice1_1P: number;
    @ApiPropertyOptional({ type: Number})
    @ApiPropertyOptional({ type: Number})
    choice2_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_5P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_4P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_3P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_2P: number;
    @ApiPropertyOptional({ type: Number})
    choice2_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice3_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice4_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice5_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice6_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice7_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice8_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice9_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice10_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice11_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice12_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice13_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice14_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice15_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice16_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice17_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice18_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice19_1P: number;
    @ApiPropertyOptional({ type: Number})
    choice20_1P: number;
@ApiPropertyOptional({ type: Number})
    result:number
}
