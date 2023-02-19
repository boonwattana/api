import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchStudentHelpDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    studentId?:number
@ApiPropertyOptional({ type: String})
    activityName?:string
}
export class StudentHelpDto {
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: String})
    activityName:string
@ApiPropertyOptional({ type: Date})
    startDate:Date
@ApiPropertyOptional({ type: Date})
    endDate:Date
@ApiPropertyOptional({ type: Number})
    resultHelpType:number
@ApiPropertyOptional({ type: String})
    resultText:string
    @ApiPropertyOptional({ type: Number})
    yearTermId:number
    @ApiPropertyOptional({ type: String})
    nickName:string
} 
export class CreateStudentHelpDto extends StudentHelpDto{

}
export class UpdateStudentHelpDto extends StudentHelpDto{

}
