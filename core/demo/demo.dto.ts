import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchDemoDto extends SearchParameter {
    demoEmail:string
    demoNumber:string
    demoDate:string
    demoEnum:string
}
export class DemoDto {
    demoEmail:string
    demoNumber:string
    demoDate:string
    demoEnum:string
} 
export class CreateDemoDto extends DemoDto{
    demoImages:string[]

}
export class UpdateDemoDto extends DemoDto{
    @ApiProperty()
    id:number

}
export class DashboardDto {
    studentByClass:{name:string,count:number}[]
    studentByGendar:{name:string,count:number}[]
    teacherByGendar:{name:string,count:number}[]
    studentCount:number
    teacherCount:number
    dataDate:string
}