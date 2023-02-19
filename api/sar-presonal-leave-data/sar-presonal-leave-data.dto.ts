import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarPresonalLeaveDataDto extends SearchParameter {
    @ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    refId?:string
}
export class SarPresonalLeaveDataDto {
    @ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolYear:string
@ApiPropertyOptional({ type: String})
    leaveDate:string
@ApiPropertyOptional({ type: Number})
    sickLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    sickLeaveDays:number
@ApiPropertyOptional({ type: Number})
    businessLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    businessLeaveDays:number
@ApiPropertyOptional({ type: Number})
    ordinationLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    ordinationLeaveDays:number
@ApiPropertyOptional({ type: Number})
    deliverLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    deliverLeaveDays:number
@ApiPropertyOptional({ type: Number})
    lateTimes:number
@ApiPropertyOptional({ type: Number})
    lateLeaveDays:number


} 
export class CreateSarPresonalLeaveDataDto extends SarPresonalLeaveDataDto{
    @ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolYear:string
@ApiPropertyOptional({ type: String})
    leaveDate:string

@ApiPropertyOptional({ type: Number})
    sickLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    sickLeaveDays:number
@ApiPropertyOptional({ type: Number})
    businessLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    businessLeaveDays:number
@ApiPropertyOptional({ type: Number})
    ordinationLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    ordinationLeaveDays:number
@ApiPropertyOptional({ type: Number})
    deliverLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    deliverLeaveDays:number
@ApiPropertyOptional({ type: Number})
    lateTimes:number
@ApiPropertyOptional({ type: Number})
    lateLeaveDays:number


}
export class UpdateSarPresonalLeaveDataDto extends SarPresonalLeaveDataDto{
    @ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolYear:string
@ApiPropertyOptional({ type: String})
    leaveDate:string

@ApiPropertyOptional({ type: Number})
    sickLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    sickLeaveDays:number
@ApiPropertyOptional({ type: Number})
    businessLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    businessLeaveDays:number
@ApiPropertyOptional({ type: Number})
    ordinationLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    ordinationLeaveDays:number
@ApiPropertyOptional({ type: Number})
    deliverLeaveTimes:number
@ApiPropertyOptional({ type: Number})
    deliverLeaveDays:number
@ApiPropertyOptional({ type: Number})
    lateTimes:number
@ApiPropertyOptional({ type: Number})
    lateLeaveDays:number

}
