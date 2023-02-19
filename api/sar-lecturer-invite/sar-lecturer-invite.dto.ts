import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarLecturerInviteDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarLecturerInviteDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    title:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    lecturerName:string
} 
export class CreateSarLecturerInviteDto extends SarLecturerInviteDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    title:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    lecturerName:string
}
export class UpdateSarLecturerInviteDto extends SarLecturerInviteDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    title:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    lecturerName:string
}
