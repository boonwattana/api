import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarInvitedSpeakerDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: String})
    schoolyear?:string
}
export class SarInvitedSpeakerDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    organization:string
} 
export class CreateSarInvitedSpeakerDto extends SarInvitedSpeakerDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    organization:string
}
export class UpdateSarInvitedSpeakerDto extends SarInvitedSpeakerDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: String})
    date:string
@ApiPropertyOptional({ type: String})
    organization:string
}
