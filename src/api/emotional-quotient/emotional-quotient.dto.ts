import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchEmotionalQuotientDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    studentId?:number
}
export class EmotionalQuotientDto {
    @ApiPropertyOptional({ type: Number})
    id:number
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: Number})
    eqCh1:number
@ApiPropertyOptional({ type: Number})
    eqCh2:number
@ApiPropertyOptional({ type: Number})
    eqCh3:number
@ApiPropertyOptional({ type: Number})
    eqCh4:number
@ApiPropertyOptional({ type: Number})
    eqCh5:number
@ApiPropertyOptional({ type: Number})
    eqCh6:number
@ApiPropertyOptional({ type: Number})
    eqCh7:number
@ApiPropertyOptional({ type: Number})
    eqCh8:number
@ApiPropertyOptional({ type: Number})
    eqCh9:number
@ApiPropertyOptional({ type: Number})
    eqCh10:number
@ApiPropertyOptional({ type: Number})
    eqCh11:number
@ApiPropertyOptional({ type: Number})
    eqCh12:number
@ApiPropertyOptional({ type: Number})
    eqCh13:number
@ApiPropertyOptional({ type: Number})
    eqCh14:number
@ApiPropertyOptional({ type: Number})
    eqCh15:number
@ApiPropertyOptional({ type: Number})
    eqCh16:number
@ApiPropertyOptional({ type: Number})
    eqCh17:number
@ApiPropertyOptional({ type: Number})
    eqCh18:number
@ApiPropertyOptional({ type: Number})
    eqCh19:number
@ApiPropertyOptional({ type: Number})
    eqCh20:number
@ApiPropertyOptional({ type: Number})
    eqCh21:number
@ApiPropertyOptional({ type: Number})
    eqCh22:number
@ApiPropertyOptional({ type: Number})
    eqCh23:number
@ApiPropertyOptional({ type: Number})
    eqCh24:number
@ApiPropertyOptional({ type: Number})
    eqCh25:number
@ApiPropertyOptional({ type: Number})
    eqCh26:number
@ApiPropertyOptional({ type: Number})
    eqCh27:number
@ApiPropertyOptional({ type: Number})
    eqCh28:number
@ApiPropertyOptional({ type: Number})
    eqCh29:number
@ApiPropertyOptional({ type: Number})
    eqCh30:number
@ApiPropertyOptional({ type: Number})
    eqCh31:number
@ApiPropertyOptional({ type: Number})
    eqCh32:number
@ApiPropertyOptional({ type: Number})
    eqCh33:number
@ApiPropertyOptional({ type: Number})
    eqCh34:number
@ApiPropertyOptional({ type: Number})
    eqCh35:number
@ApiPropertyOptional({ type: Number})
    eqCh36:number
@ApiPropertyOptional({ type: Number})
    eqCh37:number
@ApiPropertyOptional({ type: Number})
    eqCh38:number
@ApiPropertyOptional({ type: Number})
    eqCh39:number
@ApiPropertyOptional({ type: Number})
    eqCh40:number
@ApiPropertyOptional({ type: Number})
    eqCh41:number
@ApiPropertyOptional({ type: Number})
    eqCh42:number
@ApiPropertyOptional({ type: Number})
    eqCh43:number
@ApiPropertyOptional({ type: Number})
    eqCh44:number
@ApiPropertyOptional({ type: Number})
    eqCh45:number
@ApiPropertyOptional({ type: Number})
    eqCh46:number
@ApiPropertyOptional({ type: Number})
    eqCh47:number
@ApiPropertyOptional({ type: Number})
    eqCh48:number
@ApiPropertyOptional({ type: Number})
    eqCh49:number
@ApiPropertyOptional({ type: Number})
    eqCh50:number
@ApiPropertyOptional({ type: Number})
    eqCh51:number
@ApiPropertyOptional({ type: Number})
    eqCh52:number
@ApiPropertyOptional({ type: Number})
    handleSalf:number
@ApiPropertyOptional({ type: Number})
    consider:number
@ApiPropertyOptional({ type: Number})
    responsible:number
@ApiPropertyOptional({ type: Number})
    motivated:number
@ApiPropertyOptional({ type: Number})
    decide:number
@ApiPropertyOptional({ type: Number})
    relationship:number
@ApiPropertyOptional({ type: Number})
    selfEsteem:number
@ApiPropertyOptional({ type: Number})
    lifeGood:number
@ApiPropertyOptional({ type: Number})
    happy:number
} 
export class CreateEmotionalQuotientDto extends EmotionalQuotientDto{

}
export class UpdateEmotionalQuotientDto extends EmotionalQuotientDto{

}
