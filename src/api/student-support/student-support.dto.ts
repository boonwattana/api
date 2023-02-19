import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchStudentSupportDto extends SearchParameter {
@ApiPropertyOptional({ type: Date})
    startDate?:Date
@ApiPropertyOptional({ type: Date})
    endDate?:Date
}
export class SearchStudentExistDto{
    @ApiPropertyOptional({ type: Number})
    studentId:number
    @ApiPropertyOptional({ type: Number})
    id:number
}
export class StudentSupportDto {
@ApiPropertyOptional({ type: Date})
    startDate:Date
@ApiPropertyOptional({ type: Date})
    endDate:Date
@ApiPropertyOptional({ type: String})
    activityName:string
@ApiPropertyOptional({ type: String})
    performance:string
@ApiPropertyOptional({ type: String})
    department:string
@ApiPropertyOptional({ type: String})
    result:string
    @ApiPropertyOptional({ type: String})
    performanceText:string
    
@ApiPropertyOptional({ type: Number})
    teacherId:number
    @ApiPropertyOptional({ type: [String]})
    studentIdAdd:string[]
    @ApiPropertyOptional({ type: [String]})
    studentIdRemove:string[]
} 
export class CreateStudentSupportDto extends StudentSupportDto{

}
export class UpdateStudentSupportDto extends StudentSupportDto{

}
