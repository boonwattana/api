import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchSarTeachingFormatDto extends SearchParameter {
@ApiPropertyOptional({ type: String})
    schoolyear?:string
    @ApiPropertyOptional({ type: Number})
    teacherId:number
}
export class SarTeachingFormatDto {
    @ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Boolean})
    teachingFormat1:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat2:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat3:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat4:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat5:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat6:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat7:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat8:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat9:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat10:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat11:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat12:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat13:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat14:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat15:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat16:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat17:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat18:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat19:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat20:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat21:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat22:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat23:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat24:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat25:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat26:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormatOther:boolean
@ApiPropertyOptional({ type: String})
    teachingFormatOtherNote:string
} 
export class CreateSarTeachingFormatDto extends SarTeachingFormatDto{
    @ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Boolean})
    teachingFormat1:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat2:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat3:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat4:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat5:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat6:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat7:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat8:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat9:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat10:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat11:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat12:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat13:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat14:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat15:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat16:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat17:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat18:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat19:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat20:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat21:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat22:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat23:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat24:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat25:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat26:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormatOther:boolean
@ApiPropertyOptional({ type: String})
    teachingFormatOtherNote:string
}
export class UpdateSarTeachingFormatDto extends SarTeachingFormatDto{
    @ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: String})
    refId:string
@ApiPropertyOptional({ type: String})
    schoolyear:string
@ApiPropertyOptional({ type: Boolean})
    teachingFormat1:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat2:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat3:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat4:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat5:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat6:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat7:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat8:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat9:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat10:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat11:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat12:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat13:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat14:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat15:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat16:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat17:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat18:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat19:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat20:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat21:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat22:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat23:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat24:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat25:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormat26:boolean
@ApiPropertyOptional({ type: Boolean})
    teachingFormatOther:boolean
@ApiPropertyOptional({ type: String})
    teachingFormatOtherNote:string
}
