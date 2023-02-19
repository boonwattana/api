import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchEditRequestDto extends SearchParameter {
    editFieldId?:number
}
export class EditRequestDto {
    editFieldId:number
    changeTo:string
    documentUrl:string
    editRequestStatus:number
    fileName:string
    requestId: number;
    approveId: number;
} 
export class CreateEditRequestDto extends EditRequestDto{

}
export class UpdateEditRequestDto extends EditRequestDto{

}
