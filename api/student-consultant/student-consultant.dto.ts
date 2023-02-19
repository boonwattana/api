import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchStudentConsultantDto extends SearchParameter {
    @ApiPropertyOptional({ type: Number })
    studentId?: number
    @ApiPropertyOptional({ type: Number })
    teacherId?: number
}
export class StudentConsultantDto {
    @ApiPropertyOptional({ type: Number })
    studentId: number
    @ApiPropertyOptional({ type: Number })
    teacherId: number
    @ApiPropertyOptional({ type: Date })
    activityDate: Date
    @ApiPropertyOptional({ type: String })
    startTime: string
    @ApiPropertyOptional({ type: String })
    endTime: string
    @ApiPropertyOptional({ type: Number })
    consultantType: number
    @ApiPropertyOptional({ type: Number })
    storyType: number
    @ApiPropertyOptional({ type: Number })
    resultType: number
    @ApiPropertyOptional({ type: Number })
    sentType: number
    @ApiPropertyOptional({ type: String })
    sentText: string
    @ApiPropertyOptional({ type: String })
    nickName: string
    @ApiPropertyOptional({ type: String })
    sendNote: string
}

export class CreateStudentConsultantDto extends StudentConsultantDto {

}
export class UpdateStudentConsultantDto extends StudentConsultantDto {

}
