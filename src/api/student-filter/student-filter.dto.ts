import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchStudentFilterDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    studentId?:number
}
export class StudentFilterDto {
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: Boolean})
    specialSkill:boolean
@ApiPropertyOptional({ type: String})
    skill1:string
@ApiPropertyOptional({ type: String})
    skill2:string
@ApiPropertyOptional({ type: String})
    skill3:string
@ApiPropertyOptional({ type: Number})
    lernStatus:number
@ApiPropertyOptional({ type: Boolean})
    lern1:boolean
@ApiPropertyOptional({ type: Boolean})
    lern2:boolean
@ApiPropertyOptional({ type: Boolean})
    lern3:boolean
@ApiPropertyOptional({ type: Boolean})
    lern4:boolean
@ApiPropertyOptional({ type: Boolean})
    lern5:boolean
@ApiPropertyOptional({ type: Boolean})
    lern6:boolean
@ApiPropertyOptional({ type: Boolean})
    lern7:boolean
@ApiPropertyOptional({ type: Boolean})
    lern8:boolean
@ApiPropertyOptional({ type: Boolean})
    lern9:boolean
@ApiPropertyOptional({ type: Boolean})
    lern10:boolean
@ApiPropertyOptional({ type: Boolean})
    lern11:boolean
@ApiPropertyOptional({ type: Boolean})
    lern12:boolean
@ApiPropertyOptional({ type: Boolean})
    lern13:boolean
@ApiPropertyOptional({ type: Boolean})
    lern14:boolean
@ApiPropertyOptional({ type: Boolean})
    lern15:boolean
@ApiPropertyOptional({ type: Boolean})
    lern16:boolean
@ApiPropertyOptional({ type: Boolean})
    lern17:boolean
@ApiPropertyOptional({ type: Boolean})
    lern18:boolean
@ApiPropertyOptional({ type: Boolean})
    lern19:boolean
@ApiPropertyOptional({ type: Boolean})
    lern20:boolean
@ApiPropertyOptional({ type: Boolean})
    lern21:boolean
@ApiPropertyOptional({ type: Boolean})
    lern22:boolean
@ApiPropertyOptional({ type: Boolean})
    lern23:boolean
@ApiPropertyOptional({ type: Boolean})
    lern24:boolean
@ApiPropertyOptional({ type: Number})
    healtyStatus:number
@ApiPropertyOptional({ type: Boolean})
    healty1:boolean
@ApiPropertyOptional({ type: Boolean})
    healty2:boolean
@ApiPropertyOptional({ type: Boolean})
    healty3:boolean
@ApiPropertyOptional({ type: Boolean})
    healty4:boolean
@ApiPropertyOptional({ type: Boolean})
    healty5:boolean
@ApiPropertyOptional({ type: Boolean})
    healty6:boolean
@ApiPropertyOptional({ type: Boolean})
    healty7:boolean
@ApiPropertyOptional({ type: Boolean})
    healty8:boolean
@ApiPropertyOptional({ type: Boolean})
    healty9:boolean
@ApiPropertyOptional({ type: Number})
    sexualStatus:number
@ApiPropertyOptional({ type: Boolean})
    sexual1:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual2:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual3:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual4:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual5:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual6:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual7:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual8:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual9:boolean
@ApiPropertyOptional({ type: Boolean})
    sexual10:boolean
@ApiPropertyOptional({ type: Number})
    drugStatus:number
@ApiPropertyOptional({ type: Boolean})
    drug1:boolean
@ApiPropertyOptional({ type: Boolean})
    drug2:boolean
@ApiPropertyOptional({ type: Boolean})
    drug3:boolean
@ApiPropertyOptional({ type: Boolean})
    drug4:boolean
@ApiPropertyOptional({ type: Boolean})
    drug5:boolean
@ApiPropertyOptional({ type: Boolean})
    drug6:boolean
@ApiPropertyOptional({ type: Boolean})
    drug7:boolean
@ApiPropertyOptional({ type: Boolean})
    drug8:boolean
@ApiPropertyOptional({ type: Boolean})
    drug9:boolean
@ApiPropertyOptional({ type: Boolean})
    drug10:boolean
@ApiPropertyOptional({ type: Boolean})
    drug11:boolean
@ApiPropertyOptional({ type: Boolean})
    drug12:boolean
@ApiPropertyOptional({ type: Boolean})
    drug13:boolean
@ApiPropertyOptional({ type: Number})
    gameStatus:number
@ApiPropertyOptional({ type: Boolean})
    game1:boolean
@ApiPropertyOptional({ type: Boolean})
    game2:boolean
@ApiPropertyOptional({ type: Boolean})
    game3:boolean
@ApiPropertyOptional({ type: Boolean})
    game4:boolean
@ApiPropertyOptional({ type: Boolean})
    game5:boolean
@ApiPropertyOptional({ type: Boolean})
    game6:boolean
@ApiPropertyOptional({ type: Boolean})
    game7:boolean
@ApiPropertyOptional({ type: Boolean})
    game8:boolean
@ApiPropertyOptional({ type: Boolean})
    game9:boolean
@ApiPropertyOptional({ type: Boolean})
    game10:boolean
@ApiPropertyOptional({ type: Boolean})
    game11:boolean
@ApiPropertyOptional({ type: Boolean})
    game12:boolean
@ApiPropertyOptional({ type: Number})
    economicStatus:number
@ApiPropertyOptional({ type: Boolean})
    economic1:boolean
@ApiPropertyOptional({ type: Boolean})
    economic2:boolean
@ApiPropertyOptional({ type: Boolean})
    economic3:boolean
@ApiPropertyOptional({ type: Boolean})
    economic4:boolean
@ApiPropertyOptional({ type: Boolean})
    economic5:boolean
@ApiPropertyOptional({ type: Boolean})
    economic6:boolean
@ApiPropertyOptional({ type: Number})
    securityStatus:number
@ApiPropertyOptional({ type: Boolean})
    security1:boolean
@ApiPropertyOptional({ type: Boolean})
    security2:boolean
@ApiPropertyOptional({ type: Boolean})
    security3:boolean
@ApiPropertyOptional({ type: Boolean})
    security4:boolean
@ApiPropertyOptional({ type: Boolean})
    security5:boolean
@ApiPropertyOptional({ type: Boolean})
    security6:boolean
@ApiPropertyOptional({ type: Boolean})
    security7:boolean
@ApiPropertyOptional({ type: Boolean})
    security8:boolean
@ApiPropertyOptional({ type: Boolean})
    security9:boolean
@ApiPropertyOptional({ type: Boolean})
    security10:boolean
@ApiPropertyOptional({ type: Boolean})
    security11:boolean
@ApiPropertyOptional({ type: Boolean})
    security12:boolean
@ApiPropertyOptional({ type: Boolean})
    security13:boolean
@ApiPropertyOptional({ type: Number})
    specialStatus:number
@ApiPropertyOptional({ type: Boolean})
    special1:boolean
@ApiPropertyOptional({ type: Boolean})
    special2:boolean
@ApiPropertyOptional({ type: Boolean})
    special3:boolean
@ApiPropertyOptional({ type: Boolean})
    special4:boolean
@ApiPropertyOptional({ type: Boolean})
    special5:boolean
@ApiPropertyOptional({ type: Boolean})
    special6:boolean
@ApiPropertyOptional({ type: Boolean})
    special7:boolean
@ApiPropertyOptional({ type: Boolean})
    special8:boolean
@ApiPropertyOptional({ type: Boolean})
    special9:boolean
@ApiPropertyOptional({ type: Boolean})
    special10:boolean
@ApiPropertyOptional({ type: Boolean})
    special11:boolean
@ApiPropertyOptional({ type: String})
    specialText:string
@ApiPropertyOptional({ type: Number})
    electronicStatus:number
@ApiPropertyOptional({ type: Boolean})
    electronic1:boolean
@ApiPropertyOptional({ type: Boolean})
    electronic2:boolean
@ApiPropertyOptional({ type: Boolean})
    electronic3:boolean
@ApiPropertyOptional({ type: Boolean})
    electronic4:boolean
@ApiPropertyOptional({ type: Number})
    summarize:number

    @ApiPropertyOptional({ type: Number})
    feelingStatus?: number;
    @ApiPropertyOptional({ type: Number})
    behaviorStatus?: number;
    @ApiPropertyOptional({ type: Number})
    notStayStatus?: number;
    @ApiPropertyOptional({ type: Number})
    relationStatus?: number;
    @ApiPropertyOptional({ type: Number})
    sumarizeFeelingStatus?: number;
    @ApiPropertyOptional({ type: Number})
    socialStatus?: number;
} 
export class CreateStudentFilterDto extends StudentFilterDto{

}
export class UpdateStudentFilterDto extends StudentFilterDto{

}
