import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchStudentScolarDto extends SearchParameter {
    @ApiPropertyOptional({ type: Number })
    studentId?: number
    @ApiPropertyOptional({ type: String })
    name?: string
}
export class StudentScolarDto {
    @ApiPropertyOptional({ type: Number })
    studentId: number
    @ApiPropertyOptional({ type: String })
    name: string
    @ApiPropertyOptional({ type: Number })
    amount: number
    @ApiPropertyOptional({ type: String })
    year: string

    @ApiPropertyOptional({ type: String })
    term: string

    @ApiPropertyOptional({ type: String })
    getFrom: string
}
export class CreateStudentScolarDto extends StudentScolarDto {


}
export class UpdateStudentScolarDto extends StudentScolarDto {

}
