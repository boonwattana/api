import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarPresonalDataDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    refId?:string
}
export class SarPresonalDataDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolYear:string

    @ApiPropertyOptional({ type: String})
    positionNumber:string
    @ApiPropertyOptional({ type: String})
    salary:string
    @ApiPropertyOptional({ type: String})
    practitionerMoney:string
    @ApiPropertyOptional({ type: String})
    affiliation:string
} 
export class CreateSarPresonalDataDto extends SarPresonalDataDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolYear:string
    @ApiPropertyOptional({ type: String})
    positionNumber:string
    @ApiPropertyOptional({ type: String})
    salary:string
    @ApiPropertyOptional({ type: String})
    practitionerMoney:string
    @ApiPropertyOptional({ type: String})
    affiliation:string
}
export class UpdateSarPresonalDataDto extends SarPresonalDataDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolYear:string
    @ApiPropertyOptional({ type: String})
    positionNumber:string
    @ApiPropertyOptional({ type: String})
    salary:string
    @ApiPropertyOptional({ type: String})
    practitionerMoney:string
    @ApiPropertyOptional({ type: String})
    affiliation:string

}
