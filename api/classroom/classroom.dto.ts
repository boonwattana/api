import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchClassroomDto extends SearchParameter {
    name:string
}
export class ClassroomDto {
    mentorFirst:string
    mentoeSecond:string
} 
export class CreateClassroomDto extends ClassroomDto{

}
export class UpdateClassroomDto extends ClassroomDto{

}
