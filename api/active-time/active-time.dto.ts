import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchActiveTimeDto extends SearchParameter {
    activeStart?:Date
    activeEnd?:Date
}
export class ActiveTimeDto {
    activeStart:Date
    activeEnd:Date
    description:string
    remark:string
} 
export class CreateActiveTimeDto extends ActiveTimeDto{
    activeStart:Date
    activeEnd:Date
    description:string
    remark:string
}
export class UpdateActiveTimeDto extends ActiveTimeDto{
    activeStart:Date
    activeEnd:Date
    description:string
    remark:string
}
