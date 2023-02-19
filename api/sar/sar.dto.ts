import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
    @ApiPropertyOptional({ type: Number})
    sarCoursesYearTermToTalSubject:number
    @ApiPropertyOptional({ type: Number})
sarCoursesYearTermToTalActivities:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTermToTalHour:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalSubject:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalActivities:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalHour:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalTimes:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTaldays:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalHour:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalTimes2:number
@ApiPropertyOptional({ type: String})
sacompetencyassessmentresult :string
@ApiPropertyOptional({ type: String})
sarcrudassessmentresult :string
@ApiPropertyOptional({ type: String})
sarattributeassessmentresult :string
@ApiPropertyOptional({ type: String})
sarPersonalLeaveschoolYearValue :string


@ApiPropertyOptional({ type: String})
sarqualityoflearnersNote:string;
@ApiPropertyOptional({ type: String})
sarstandard2Note:string;
@ApiPropertyOptional({ type: String})
sarstandard3Note:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_3:string;

} 
export class CreateSarDto extends SarDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
    @ApiPropertyOptional({ type: Number})
    sarCoursesYearTermToTalSubject:number
    @ApiPropertyOptional({ type: Number})
sarCoursesYearTermToTalActivities:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTermToTalHour:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalSubject:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalActivities:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalHour:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalTimes:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTaldays:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalHour:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalTimes2:number
@ApiPropertyOptional({ type: String})
sacompetencyassessmentresult :string
@ApiPropertyOptional({ type: String})
sarcrudassessmentresult :string
@ApiPropertyOptional({ type: String})
sarattributeassessmentresult :string
@ApiPropertyOptional({ type: String})
sarPersonalLeaveschoolYearValue :string


@ApiPropertyOptional({ type: String})
sarqualityoflearnersNote:string;
@ApiPropertyOptional({ type: String})
sarstandard2Note:string;
@ApiPropertyOptional({ type: String})
sarstandard3Note:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_3:string;

}
export class UpdateSarDto extends SarDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
    @ApiPropertyOptional({ type: Number})
    sarCoursesYearTermToTalSubject:number
    @ApiPropertyOptional({ type: Number})
sarCoursesYearTermToTalActivities:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTermToTalHour:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalSubject:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalActivities:number
@ApiPropertyOptional({ type: Number})
sarCoursesYearTerm2ToTalHour:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalTimes:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTaldays:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalHour:number
@ApiPropertyOptional({ type: Number})
sarselfdevelopmentToTalTimes2:number
@ApiPropertyOptional({ type: String})
sacompetencyassessmentresult :string
@ApiPropertyOptional({ type: String})
sarcrudassessmentresult :string
@ApiPropertyOptional({ type: String})
sarattributeassessmentresult :string
@ApiPropertyOptional({ type: String})
sarPersonalLeaveschoolYearValue :string


@ApiPropertyOptional({ type: String})
sarqualityoflearnersNote:string;
@ApiPropertyOptional({ type: String})
sarstandard2Note:string;
@ApiPropertyOptional({ type: String})
sarstandard3Note:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment1_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment2_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment3_3:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_1:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_2:string;
@ApiPropertyOptional({ type: String})
SelfAssessment4_3:string;

}
