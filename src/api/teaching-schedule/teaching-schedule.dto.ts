import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchTeachingScheduleDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    teacherId?:number
@ApiPropertyOptional({ type: Number})
    yearTermId?:number
}
export class TeachingScheduleDto {
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    monSubjectName01:string
@ApiPropertyOptional({ type: String})
    monSubjectName02:string
@ApiPropertyOptional({ type: String})
    monSubjectName03:string
@ApiPropertyOptional({ type: String})
    monSubjectName04:string
@ApiPropertyOptional({ type: String})
    monSubjectName05:string
@ApiPropertyOptional({ type: String})
    monSubjectName06:string
@ApiPropertyOptional({ type: String})
    monSubjectName07:string
@ApiPropertyOptional({ type: String})
    monSubjectName08:string
@ApiPropertyOptional({ type: String})
    monSubjectName09:string
@ApiPropertyOptional({ type: String})
    monSubjectName10:string
@ApiPropertyOptional({ type: String})
    monSubjectId01:string
@ApiPropertyOptional({ type: String})
    monSubjectId02:string
@ApiPropertyOptional({ type: String})
    monSubjectId03:string
@ApiPropertyOptional({ type: String})
    monSubjectId04:string
@ApiPropertyOptional({ type: String})
    monSubjectId05:string
@ApiPropertyOptional({ type: String})
    monSubjectId06:string
@ApiPropertyOptional({ type: String})
    monSubjectId07:string
@ApiPropertyOptional({ type: String})
    monSubjectId08:string
@ApiPropertyOptional({ type: String})
    monSubjectId09:string
@ApiPropertyOptional({ type: String})
    monSubjectId10:string
@ApiPropertyOptional({ type: String})
    monClass01:string
@ApiPropertyOptional({ type: String})
    monClass02:string
@ApiPropertyOptional({ type: String})
    monClass03:string
@ApiPropertyOptional({ type: String})
    monClass04:string
@ApiPropertyOptional({ type: String})
    monClass05:string
@ApiPropertyOptional({ type: String})
    monClass06:string
@ApiPropertyOptional({ type: String})
    monClass07:string
@ApiPropertyOptional({ type: String})
    monClass08:string
@ApiPropertyOptional({ type: String})
    monClass09:string
@ApiPropertyOptional({ type: String})
    monClass10:string
@ApiPropertyOptional({ type: String})
    tueSubjectName01:string
@ApiPropertyOptional({ type: String})
    tueSubjectName02:string
@ApiPropertyOptional({ type: String})
    tueSubjectName03:string
@ApiPropertyOptional({ type: String})
    tueSubjectName04:string
@ApiPropertyOptional({ type: String})
    tueSubjectName05:string
@ApiPropertyOptional({ type: String})
    tueSubjectName06:string
@ApiPropertyOptional({ type: String})
    tueSubjectName07:string
@ApiPropertyOptional({ type: String})
    tueSubjectName08:string
@ApiPropertyOptional({ type: String})
    tueSubjectName09:string
@ApiPropertyOptional({ type: String})
    tueSubjectName10:string
@ApiPropertyOptional({ type: String})
    tueSubjectId01:string
@ApiPropertyOptional({ type: String})
    tueSubjectId02:string
@ApiPropertyOptional({ type: String})
    tueSubjectId03:string
@ApiPropertyOptional({ type: String})
    tueSubjectId04:string
@ApiPropertyOptional({ type: String})
    tueSubjectId05:string
@ApiPropertyOptional({ type: String})
    tueSubjectId06:string
@ApiPropertyOptional({ type: String})
    tueSubjectId07:string
@ApiPropertyOptional({ type: String})
    tueSubjectId08:string
@ApiPropertyOptional({ type: String})
    tueSubjectId09:string
@ApiPropertyOptional({ type: String})
    tueSubjectId10:string
@ApiPropertyOptional({ type: String})
    tueClass01:string
@ApiPropertyOptional({ type: String})
    tueClass02:string
@ApiPropertyOptional({ type: String})
    tueClass03:string
@ApiPropertyOptional({ type: String})
    tueClass04:string
@ApiPropertyOptional({ type: String})
    tueClass05:string
@ApiPropertyOptional({ type: String})
    tueClass06:string
@ApiPropertyOptional({ type: String})
    tueClass07:string
@ApiPropertyOptional({ type: String})
    tueClass08:string
@ApiPropertyOptional({ type: String})
    tueClass09:string
@ApiPropertyOptional({ type: String})
    tueClass10:string
@ApiPropertyOptional({ type: String})
    wedSubjectName01:string
@ApiPropertyOptional({ type: String})
    wedSubjectName02:string
@ApiPropertyOptional({ type: String})
    wedSubjectName03:string
@ApiPropertyOptional({ type: String})
    wedSubjectName04:string
@ApiPropertyOptional({ type: String})
    wedSubjectName05:string
@ApiPropertyOptional({ type: String})
    wedSubjectName06:string
@ApiPropertyOptional({ type: String})
    wedSubjectName07:string
@ApiPropertyOptional({ type: String})
    wedSubjectName08:string
@ApiPropertyOptional({ type: String})
    wedSubjectName09:string
@ApiPropertyOptional({ type: String})
    wedSubjectName10:string
@ApiPropertyOptional({ type: String})
    wedSubjectId01:string
@ApiPropertyOptional({ type: String})
    wedSubjectId02:string
@ApiPropertyOptional({ type: String})
    wedSubjectId03:string
@ApiPropertyOptional({ type: String})
    wedSubjectId04:string
@ApiPropertyOptional({ type: String})
    wedSubjectId05:string
@ApiPropertyOptional({ type: String})
    wedSubjectId06:string
@ApiPropertyOptional({ type: String})
    wedSubjectId07:string
@ApiPropertyOptional({ type: String})
    wedSubjectId08:string
@ApiPropertyOptional({ type: String})
    wedSubjectId09:string
@ApiPropertyOptional({ type: String})
    wedSubjectId10:string
@ApiPropertyOptional({ type: String})
    wedClass01:string
@ApiPropertyOptional({ type: String})
    wedClass02:string
@ApiPropertyOptional({ type: String})
    wedClass03:string
@ApiPropertyOptional({ type: String})
    wedClass04:string
@ApiPropertyOptional({ type: String})
    wedClass05:string
@ApiPropertyOptional({ type: String})
    wedClass06:string
@ApiPropertyOptional({ type: String})
    wedClass07:string
@ApiPropertyOptional({ type: String})
    wedClass08:string
@ApiPropertyOptional({ type: String})
    wedClass09:string
@ApiPropertyOptional({ type: String})
    wedClass10:string
@ApiPropertyOptional({ type: String})
    thursSubjectName01:string
@ApiPropertyOptional({ type: String})
    thursSubjectName02:string
@ApiPropertyOptional({ type: String})
    thursSubjectName03:string
@ApiPropertyOptional({ type: String})
    thursSubjectName04:string
@ApiPropertyOptional({ type: String})
    thursSubjectName05:string
@ApiPropertyOptional({ type: String})
    thursSubjectName06:string
@ApiPropertyOptional({ type: String})
    thursSubjectName07:string
@ApiPropertyOptional({ type: String})
    thursSubjectName08:string
@ApiPropertyOptional({ type: String})
    thursSubjectName09:string
@ApiPropertyOptional({ type: String})
    thursSubjectName10:string
@ApiPropertyOptional({ type: String})
    thursSubjectId01:string
@ApiPropertyOptional({ type: String})
    thursSubjectId02:string
@ApiPropertyOptional({ type: String})
    thursSubjectId03:string
@ApiPropertyOptional({ type: String})
    thursSubjectId04:string
@ApiPropertyOptional({ type: String})
    thursSubjectId05:string
@ApiPropertyOptional({ type: String})
    thursSubjectId06:string
@ApiPropertyOptional({ type: String})
    thursSubjectId07:string
@ApiPropertyOptional({ type: String})
    thursSubjectId08:string
@ApiPropertyOptional({ type: String})
    thursSubjectId09:string
@ApiPropertyOptional({ type: String})
    thursSubjectId10:string
@ApiPropertyOptional({ type: String})
    thursClass01:string
@ApiPropertyOptional({ type: String})
    thursClass02:string
@ApiPropertyOptional({ type: String})
    thursClass03:string
@ApiPropertyOptional({ type: String})
    thursClass04:string
@ApiPropertyOptional({ type: String})
    thursClass05:string
@ApiPropertyOptional({ type: String})
    thursClass06:string
@ApiPropertyOptional({ type: String})
    thursClass07:string
@ApiPropertyOptional({ type: String})
    thursClass08:string
@ApiPropertyOptional({ type: String})
    thursClass09:string
@ApiPropertyOptional({ type: String})
    thursClass10:string
@ApiPropertyOptional({ type: String})
    firSubjectName01:string
@ApiPropertyOptional({ type: String})
    firSubjectName02:string
@ApiPropertyOptional({ type: String})
    firSubjectName03:string
@ApiPropertyOptional({ type: String})
    firSubjectName04:string
@ApiPropertyOptional({ type: String})
    firSubjectName05:string
@ApiPropertyOptional({ type: String})
    firSubjectName06:string
@ApiPropertyOptional({ type: String})
    firSubjectName07:string
@ApiPropertyOptional({ type: String})
    firSubjectName08:string
@ApiPropertyOptional({ type: String})
    firSubjectName09:string
@ApiPropertyOptional({ type: String})
    firSubjectName10:string
@ApiPropertyOptional({ type: String})
    firSubjectId01:string
@ApiPropertyOptional({ type: String})
    firSubjectId02:string
@ApiPropertyOptional({ type: String})
    firSubjectId03:string
@ApiPropertyOptional({ type: String})
    firSubjectId04:string
@ApiPropertyOptional({ type: String})
    firSubjectId05:string
@ApiPropertyOptional({ type: String})
    firSubjectId06:string
@ApiPropertyOptional({ type: String})
    firSubjectId07:string
@ApiPropertyOptional({ type: String})
    firSubjectId08:string
@ApiPropertyOptional({ type: String})
    firSubjectId09:string
@ApiPropertyOptional({ type: String})
    firSubjectId10:string
@ApiPropertyOptional({ type: String})
    firClass01:string
@ApiPropertyOptional({ type: String})
    firClass02:string
@ApiPropertyOptional({ type: String})
    firClass03:string
@ApiPropertyOptional({ type: String})
    firClass04:string
@ApiPropertyOptional({ type: String})
    firClass05:string
@ApiPropertyOptional({ type: String})
    firClass06:string
@ApiPropertyOptional({ type: String})
    firClass07:string
@ApiPropertyOptional({ type: String})
    firClass08:string
@ApiPropertyOptional({ type: String})
    firClass09:string
@ApiPropertyOptional({ type: String})
    firClass10:string
} 
export class CreateTeachingScheduleDto extends TeachingScheduleDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    monSubjectName01:string
@ApiPropertyOptional({ type: String})
    monSubjectName02:string
@ApiPropertyOptional({ type: String})
    monSubjectName03:string
@ApiPropertyOptional({ type: String})
    monSubjectName04:string
@ApiPropertyOptional({ type: String})
    monSubjectName05:string
@ApiPropertyOptional({ type: String})
    monSubjectName06:string
@ApiPropertyOptional({ type: String})
    monSubjectName07:string
@ApiPropertyOptional({ type: String})
    monSubjectName08:string
@ApiPropertyOptional({ type: String})
    monSubjectName09:string
@ApiPropertyOptional({ type: String})
    monSubjectName10:string
@ApiPropertyOptional({ type: String})
    monSubjectId01:string
@ApiPropertyOptional({ type: String})
    monSubjectId02:string
@ApiPropertyOptional({ type: String})
    monSubjectId03:string
@ApiPropertyOptional({ type: String})
    monSubjectId04:string
@ApiPropertyOptional({ type: String})
    monSubjectId05:string
@ApiPropertyOptional({ type: String})
    monSubjectId06:string
@ApiPropertyOptional({ type: String})
    monSubjectId07:string
@ApiPropertyOptional({ type: String})
    monSubjectId08:string
@ApiPropertyOptional({ type: String})
    monSubjectId09:string
@ApiPropertyOptional({ type: String})
    monSubjectId10:string
@ApiPropertyOptional({ type: String})
    monClass01:string
@ApiPropertyOptional({ type: String})
    monClass02:string
@ApiPropertyOptional({ type: String})
    monClass03:string
@ApiPropertyOptional({ type: String})
    monClass04:string
@ApiPropertyOptional({ type: String})
    monClass05:string
@ApiPropertyOptional({ type: String})
    monClass06:string
@ApiPropertyOptional({ type: String})
    monClass07:string
@ApiPropertyOptional({ type: String})
    monClass08:string
@ApiPropertyOptional({ type: String})
    monClass09:string
@ApiPropertyOptional({ type: String})
    monClass10:string
@ApiPropertyOptional({ type: String})
    tueSubjectName01:string
@ApiPropertyOptional({ type: String})
    tueSubjectName02:string
@ApiPropertyOptional({ type: String})
    tueSubjectName03:string
@ApiPropertyOptional({ type: String})
    tueSubjectName04:string
@ApiPropertyOptional({ type: String})
    tueSubjectName05:string
@ApiPropertyOptional({ type: String})
    tueSubjectName06:string
@ApiPropertyOptional({ type: String})
    tueSubjectName07:string
@ApiPropertyOptional({ type: String})
    tueSubjectName08:string
@ApiPropertyOptional({ type: String})
    tueSubjectName09:string
@ApiPropertyOptional({ type: String})
    tueSubjectName10:string
@ApiPropertyOptional({ type: String})
    tueSubjectId01:string
@ApiPropertyOptional({ type: String})
    tueSubjectId02:string
@ApiPropertyOptional({ type: String})
    tueSubjectId03:string
@ApiPropertyOptional({ type: String})
    tueSubjectId04:string
@ApiPropertyOptional({ type: String})
    tueSubjectId05:string
@ApiPropertyOptional({ type: String})
    tueSubjectId06:string
@ApiPropertyOptional({ type: String})
    tueSubjectId07:string
@ApiPropertyOptional({ type: String})
    tueSubjectId08:string
@ApiPropertyOptional({ type: String})
    tueSubjectId09:string
@ApiPropertyOptional({ type: String})
    tueSubjectId10:string
@ApiPropertyOptional({ type: String})
    tueClass01:string
@ApiPropertyOptional({ type: String})
    tueClass02:string
@ApiPropertyOptional({ type: String})
    tueClass03:string
@ApiPropertyOptional({ type: String})
    tueClass04:string
@ApiPropertyOptional({ type: String})
    tueClass05:string
@ApiPropertyOptional({ type: String})
    tueClass06:string
@ApiPropertyOptional({ type: String})
    tueClass07:string
@ApiPropertyOptional({ type: String})
    tueClass08:string
@ApiPropertyOptional({ type: String})
    tueClass09:string
@ApiPropertyOptional({ type: String})
    tueClass10:string
@ApiPropertyOptional({ type: String})
    wedSubjectName01:string
@ApiPropertyOptional({ type: String})
    wedSubjectName02:string
@ApiPropertyOptional({ type: String})
    wedSubjectName03:string
@ApiPropertyOptional({ type: String})
    wedSubjectName04:string
@ApiPropertyOptional({ type: String})
    wedSubjectName05:string
@ApiPropertyOptional({ type: String})
    wedSubjectName06:string
@ApiPropertyOptional({ type: String})
    wedSubjectName07:string
@ApiPropertyOptional({ type: String})
    wedSubjectName08:string
@ApiPropertyOptional({ type: String})
    wedSubjectName09:string
@ApiPropertyOptional({ type: String})
    wedSubjectName10:string
@ApiPropertyOptional({ type: String})
    wedSubjectId01:string
@ApiPropertyOptional({ type: String})
    wedSubjectId02:string
@ApiPropertyOptional({ type: String})
    wedSubjectId03:string
@ApiPropertyOptional({ type: String})
    wedSubjectId04:string
@ApiPropertyOptional({ type: String})
    wedSubjectId05:string
@ApiPropertyOptional({ type: String})
    wedSubjectId06:string
@ApiPropertyOptional({ type: String})
    wedSubjectId07:string
@ApiPropertyOptional({ type: String})
    wedSubjectId08:string
@ApiPropertyOptional({ type: String})
    wedSubjectId09:string
@ApiPropertyOptional({ type: String})
    wedSubjectId10:string
@ApiPropertyOptional({ type: String})
    wedClass01:string
@ApiPropertyOptional({ type: String})
    wedClass02:string
@ApiPropertyOptional({ type: String})
    wedClass03:string
@ApiPropertyOptional({ type: String})
    wedClass04:string
@ApiPropertyOptional({ type: String})
    wedClass05:string
@ApiPropertyOptional({ type: String})
    wedClass06:string
@ApiPropertyOptional({ type: String})
    wedClass07:string
@ApiPropertyOptional({ type: String})
    wedClass08:string
@ApiPropertyOptional({ type: String})
    wedClass09:string
@ApiPropertyOptional({ type: String})
    wedClass10:string
@ApiPropertyOptional({ type: String})
    thursSubjectName01:string
@ApiPropertyOptional({ type: String})
    thursSubjectName02:string
@ApiPropertyOptional({ type: String})
    thursSubjectName03:string
@ApiPropertyOptional({ type: String})
    thursSubjectName04:string
@ApiPropertyOptional({ type: String})
    thursSubjectName05:string
@ApiPropertyOptional({ type: String})
    thursSubjectName06:string
@ApiPropertyOptional({ type: String})
    thursSubjectName07:string
@ApiPropertyOptional({ type: String})
    thursSubjectName08:string
@ApiPropertyOptional({ type: String})
    thursSubjectName09:string
@ApiPropertyOptional({ type: String})
    thursSubjectName10:string
@ApiPropertyOptional({ type: String})
    thursSubjectId01:string
@ApiPropertyOptional({ type: String})
    thursSubjectId02:string
@ApiPropertyOptional({ type: String})
    thursSubjectId03:string
@ApiPropertyOptional({ type: String})
    thursSubjectId04:string
@ApiPropertyOptional({ type: String})
    thursSubjectId05:string
@ApiPropertyOptional({ type: String})
    thursSubjectId06:string
@ApiPropertyOptional({ type: String})
    thursSubjectId07:string
@ApiPropertyOptional({ type: String})
    thursSubjectId08:string
@ApiPropertyOptional({ type: String})
    thursSubjectId09:string
@ApiPropertyOptional({ type: String})
    thursSubjectId10:string
@ApiPropertyOptional({ type: String})
    thursClass01:string
@ApiPropertyOptional({ type: String})
    thursClass02:string
@ApiPropertyOptional({ type: String})
    thursClass03:string
@ApiPropertyOptional({ type: String})
    thursClass04:string
@ApiPropertyOptional({ type: String})
    thursClass05:string
@ApiPropertyOptional({ type: String})
    thursClass06:string
@ApiPropertyOptional({ type: String})
    thursClass07:string
@ApiPropertyOptional({ type: String})
    thursClass08:string
@ApiPropertyOptional({ type: String})
    thursClass09:string
@ApiPropertyOptional({ type: String})
    thursClass10:string
@ApiPropertyOptional({ type: String})
    firSubjectName01:string
@ApiPropertyOptional({ type: String})
    firSubjectName02:string
@ApiPropertyOptional({ type: String})
    firSubjectName03:string
@ApiPropertyOptional({ type: String})
    firSubjectName04:string
@ApiPropertyOptional({ type: String})
    firSubjectName05:string
@ApiPropertyOptional({ type: String})
    firSubjectName06:string
@ApiPropertyOptional({ type: String})
    firSubjectName07:string
@ApiPropertyOptional({ type: String})
    firSubjectName08:string
@ApiPropertyOptional({ type: String})
    firSubjectName09:string
@ApiPropertyOptional({ type: String})
    firSubjectName10:string
@ApiPropertyOptional({ type: String})
    firSubjectId01:string
@ApiPropertyOptional({ type: String})
    firSubjectId02:string
@ApiPropertyOptional({ type: String})
    firSubjectId03:string
@ApiPropertyOptional({ type: String})
    firSubjectId04:string
@ApiPropertyOptional({ type: String})
    firSubjectId05:string
@ApiPropertyOptional({ type: String})
    firSubjectId06:string
@ApiPropertyOptional({ type: String})
    firSubjectId07:string
@ApiPropertyOptional({ type: String})
    firSubjectId08:string
@ApiPropertyOptional({ type: String})
    firSubjectId09:string
@ApiPropertyOptional({ type: String})
    firSubjectId10:string
@ApiPropertyOptional({ type: String})
    firClass01:string
@ApiPropertyOptional({ type: String})
    firClass02:string
@ApiPropertyOptional({ type: String})
    firClass03:string
@ApiPropertyOptional({ type: String})
    firClass04:string
@ApiPropertyOptional({ type: String})
    firClass05:string
@ApiPropertyOptional({ type: String})
    firClass06:string
@ApiPropertyOptional({ type: String})
    firClass07:string
@ApiPropertyOptional({ type: String})
    firClass08:string
@ApiPropertyOptional({ type: String})
    firClass09:string
@ApiPropertyOptional({ type: String})
    firClass10:string
}
export class UpdateTeachingScheduleDto extends TeachingScheduleDto{
@ApiPropertyOptional({ type: Number})
    teacherId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: String})
    monSubjectName01:string
@ApiPropertyOptional({ type: String})
    monSubjectName02:string
@ApiPropertyOptional({ type: String})
    monSubjectName03:string
@ApiPropertyOptional({ type: String})
    monSubjectName04:string
@ApiPropertyOptional({ type: String})
    monSubjectName05:string
@ApiPropertyOptional({ type: String})
    monSubjectName06:string
@ApiPropertyOptional({ type: String})
    monSubjectName07:string
@ApiPropertyOptional({ type: String})
    monSubjectName08:string
@ApiPropertyOptional({ type: String})
    monSubjectName09:string
@ApiPropertyOptional({ type: String})
    monSubjectId01:string
@ApiPropertyOptional({ type: String})
    monSubjectId02:string
@ApiPropertyOptional({ type: String})
    monSubjectId03:string
@ApiPropertyOptional({ type: String})
    monSubjectId04:string
@ApiPropertyOptional({ type: String})
    monSubjectId05:string
@ApiPropertyOptional({ type: String})
    monSubjectId06:string
@ApiPropertyOptional({ type: String})
    monSubjectId07:string
@ApiPropertyOptional({ type: String})
    monSubjectId08:string
@ApiPropertyOptional({ type: String})
    monSubjectId09:string
@ApiPropertyOptional({ type: String})
    monSubjectId10:string
@ApiPropertyOptional({ type: String})
    monClass01:string
@ApiPropertyOptional({ type: String})
    monClass02:string
@ApiPropertyOptional({ type: String})
    monClass03:string
@ApiPropertyOptional({ type: String})
    monClass04:string
@ApiPropertyOptional({ type: String})
    monClass05:string
@ApiPropertyOptional({ type: String})
    monClass06:string
@ApiPropertyOptional({ type: String})
    monClass07:string
@ApiPropertyOptional({ type: String})
    monClass08:string
@ApiPropertyOptional({ type: String})
    monClass09:string
@ApiPropertyOptional({ type: String})
    monClass10:string
@ApiPropertyOptional({ type: String})
    tueSubjectName01:string
@ApiPropertyOptional({ type: String})
    tueSubjectName02:string
@ApiPropertyOptional({ type: String})
    tueSubjectName03:string
@ApiPropertyOptional({ type: String})
    tueSubjectName04:string
@ApiPropertyOptional({ type: String})
    tueSubjectName05:string
@ApiPropertyOptional({ type: String})
    tueSubjectName06:string
@ApiPropertyOptional({ type: String})
    tueSubjectName07:string
@ApiPropertyOptional({ type: String})
    tueSubjectName08:string
@ApiPropertyOptional({ type: String})
    tueSubjectName09:string
@ApiPropertyOptional({ type: String})
    tueSubjectName10:string
@ApiPropertyOptional({ type: String})
    tueSubjectId02:string
@ApiPropertyOptional({ type: String})
    tueSubjectId03:string
@ApiPropertyOptional({ type: String})
    tueSubjectId04:string
@ApiPropertyOptional({ type: String})
    tueSubjectId05:string
@ApiPropertyOptional({ type: String})
    tueSubjectId06:string
@ApiPropertyOptional({ type: String})
    tueSubjectId07:string
@ApiPropertyOptional({ type: String})
    tueSubjectId08:string
@ApiPropertyOptional({ type: String})
    tueSubjectId09:string
@ApiPropertyOptional({ type: String})
    tueSubjectId10:string
@ApiPropertyOptional({ type: String})
    tueClass01:string
@ApiPropertyOptional({ type: String})
    tueClass02:string
@ApiPropertyOptional({ type: String})
    tueClass03:string
@ApiPropertyOptional({ type: String})
    tueClass04:string
@ApiPropertyOptional({ type: String})
    tueClass05:string
@ApiPropertyOptional({ type: String})
    tueClass06:string
@ApiPropertyOptional({ type: String})
    tueClass07:string
@ApiPropertyOptional({ type: String})
    tueClass08:string
@ApiPropertyOptional({ type: String})
    tueClass09:string
@ApiPropertyOptional({ type: String})
    tueClass10:string
@ApiPropertyOptional({ type: String})
    wedSubjectName01:string
@ApiPropertyOptional({ type: String})
    wedSubjectName02:string
@ApiPropertyOptional({ type: String})
    wedSubjectName03:string
@ApiPropertyOptional({ type: String})
    wedSubjectName04:string
@ApiPropertyOptional({ type: String})
    wedSubjectName05:string
@ApiPropertyOptional({ type: String})
    wedSubjectName06:string
@ApiPropertyOptional({ type: String})
    wedSubjectName07:string
@ApiPropertyOptional({ type: String})
    wedSubjectName08:string
@ApiPropertyOptional({ type: String})
    wedSubjectName09:string
@ApiPropertyOptional({ type: String})
    wedSubjectName10:string
@ApiPropertyOptional({ type: String})
    wedSubjectId01:string
@ApiPropertyOptional({ type: String})
    wedSubjectId02:string
@ApiPropertyOptional({ type: String})
    wedSubjectId04:string
@ApiPropertyOptional({ type: String})
    wedSubjectId05:string
@ApiPropertyOptional({ type: String})
    wedSubjectId06:string
@ApiPropertyOptional({ type: String})
    wedSubjectId07:string
@ApiPropertyOptional({ type: String})
    wedSubjectId08:string
@ApiPropertyOptional({ type: String})
    wedSubjectId09:string
@ApiPropertyOptional({ type: String})
    wedSubjectId10:string
@ApiPropertyOptional({ type: String})
    wedClass01:string
@ApiPropertyOptional({ type: String})
    wedClass02:string
@ApiPropertyOptional({ type: String})
    wedClass03:string
@ApiPropertyOptional({ type: String})
    wedClass04:string
@ApiPropertyOptional({ type: String})
    wedClass05:string
@ApiPropertyOptional({ type: String})
    wedClass06:string
@ApiPropertyOptional({ type: String})
    wedClass07:string
@ApiPropertyOptional({ type: String})
    wedClass08:string
@ApiPropertyOptional({ type: String})
    wedClass09:string
@ApiPropertyOptional({ type: String})
    wedClass10:string
@ApiPropertyOptional({ type: String})
    thursSubjectName01:string
@ApiPropertyOptional({ type: String})
    thursSubjectName02:string
@ApiPropertyOptional({ type: String})
    thursSubjectName03:string
@ApiPropertyOptional({ type: String})
    thursSubjectName04:string
@ApiPropertyOptional({ type: String})
    thursSubjectName05:string
@ApiPropertyOptional({ type: String})
    thursSubjectName06:string
@ApiPropertyOptional({ type: String})
    thursSubjectName07:string
@ApiPropertyOptional({ type: String})
    thursSubjectName08:string
@ApiPropertyOptional({ type: String})
    thursSubjectName09:string
@ApiPropertyOptional({ type: String})
    thursSubjectName10:string
@ApiPropertyOptional({ type: String})
    thursSubjectId01:string
@ApiPropertyOptional({ type: String})
    thursSubjectId02:string
@ApiPropertyOptional({ type: String})
    thursSubjectId03:string
@ApiPropertyOptional({ type: String})
    thursSubjectId05:string
@ApiPropertyOptional({ type: String})
    thursSubjectId06:string
@ApiPropertyOptional({ type: String})
    thursSubjectId07:string
@ApiPropertyOptional({ type: String})
    thursSubjectId08:string
@ApiPropertyOptional({ type: String})
    thursSubjectId09:string
@ApiPropertyOptional({ type: String})
    thursSubjectId10:string
@ApiPropertyOptional({ type: String})
    thursClass01:string
@ApiPropertyOptional({ type: String})
    thursClass02:string
@ApiPropertyOptional({ type: String})
    thursClass03:string
@ApiPropertyOptional({ type: String})
    thursClass04:string
@ApiPropertyOptional({ type: String})
    thursClass05:string
@ApiPropertyOptional({ type: String})
    thursClass06:string
@ApiPropertyOptional({ type: String})
    thursClass07:string
@ApiPropertyOptional({ type: String})
    thursClass08:string
@ApiPropertyOptional({ type: String})
    thursClass09:string
@ApiPropertyOptional({ type: String})
    thursClass10:string
@ApiPropertyOptional({ type: String})
    firSubjectName01:string
@ApiPropertyOptional({ type: String})
    firSubjectName02:string
@ApiPropertyOptional({ type: String})
    firSubjectName03:string
@ApiPropertyOptional({ type: String})
    firSubjectName04:string
@ApiPropertyOptional({ type: String})
    firSubjectName05:string
@ApiPropertyOptional({ type: String})
    firSubjectName06:string
@ApiPropertyOptional({ type: String})
    firSubjectName07:string
@ApiPropertyOptional({ type: String})
    firSubjectName08:string
@ApiPropertyOptional({ type: String})
    firSubjectName09:string
@ApiPropertyOptional({ type: String})
    firSubjectName10:string
@ApiPropertyOptional({ type: String})
    firSubjectId01:string
@ApiPropertyOptional({ type: String})
    firSubjectId02:string
@ApiPropertyOptional({ type: String})
    firSubjectId03:string
@ApiPropertyOptional({ type: String})
    firSubjectId04:string
@ApiPropertyOptional({ type: String})
    firSubjectId06:string
@ApiPropertyOptional({ type: String})
    firSubjectId07:string
@ApiPropertyOptional({ type: String})
    firSubjectId08:string
@ApiPropertyOptional({ type: String})
    firSubjectId09:string
@ApiPropertyOptional({ type: String})
    firSubjectId10:string
@ApiPropertyOptional({ type: String})
    firClass01:string
@ApiPropertyOptional({ type: String})
    firClass02:string
@ApiPropertyOptional({ type: String})
    firClass03:string
@ApiPropertyOptional({ type: String})
    firClass04:string
@ApiPropertyOptional({ type: String})
    firClass05:string
@ApiPropertyOptional({ type: String})
    firClass06:string
@ApiPropertyOptional({ type: String})
    firClass07:string
@ApiPropertyOptional({ type: String})
    firClass08:string
@ApiPropertyOptional({ type: String})
    firClass09:string
@ApiPropertyOptional({ type: String})
    firClass10:string
}
