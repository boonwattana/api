import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchClassroomTypeDto extends SearchParameter {
    typeName?:string
}
export class ClassroomTypeDto {
    typeName:string
    typeDescription:string
    remark:string
} 
export class CreateClassroomTypeDto extends ClassroomTypeDto{
    typeName:string
    typeDescription:string
    remark:string
}
export class UpdateClassroomTypeDto extends ClassroomTypeDto{
    typeName:string
    typeDescription:string
    remark:string
}
