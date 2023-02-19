import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchImagesDto extends SearchParameter {
    demoEmail:string
    demoNumber:string
    demoDate:string
    demoEnum:string
}
export class ImagesDto {
    demoEmail:string
    demoNumber:string
    demoDate:string
    demoEnum:string
} 
export class CreateImagesDto {
    imageUrl:string
    refId:number
    refType:number
    imageType:number
}
export class UpdateImagesDto extends ImagesDto{
    @ApiProperty()
    id:number

}