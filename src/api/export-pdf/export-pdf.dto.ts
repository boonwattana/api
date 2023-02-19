import { ApiProperty } from "@nestjs/swagger"

export class ExportPdfDto{
    @ApiProperty({type:Number,description:'id ของ contract'})
    id:number
}