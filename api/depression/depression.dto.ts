import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchDepressionDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    studentId?:number
}
export class DepressionDto {
    @ApiPropertyOptional({ type: Number})
    id:number
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: Number})
    depressionCh1:number
@ApiPropertyOptional({ type: Number})
    depressionCh2:number
@ApiPropertyOptional({ type: Number})
    depressionCh3:number
@ApiPropertyOptional({ type: Number})
    depressionCh4:number
@ApiPropertyOptional({ type: Number})
    depressionCh5:number
@ApiPropertyOptional({ type: Number})
    depressionCh6:number
@ApiPropertyOptional({ type: Number})
    depressionCh7:number
@ApiPropertyOptional({ type: Number})
    depressionCh8:number
@ApiPropertyOptional({ type: Number})
    depressionCh9:number
@ApiPropertyOptional({ type: Number})
    depressionCh10:number
@ApiPropertyOptional({ type: Number})
    depressionCh11:number
@ApiPropertyOptional({ type: Number})
    depressionCh12:number
@ApiPropertyOptional({ type: Number})
    depressionCh13:number
@ApiPropertyOptional({ type: Number})
    depressionCh14:number
@ApiPropertyOptional({ type: Number})
    depressionCh15:number
@ApiPropertyOptional({ type: Number})
    depressionCh16:number
@ApiPropertyOptional({ type: Number})
    depressionCh17:number
@ApiPropertyOptional({ type: Number})
    depressionCh18:number
@ApiPropertyOptional({ type: Number})
    depressionCh19:number
@ApiPropertyOptional({ type: String})
    depressionCh20:number
} 
export class CreateDepressionDto extends DepressionDto{
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: Number})
    depressionCh1:number
@ApiPropertyOptional({ type: Number})
    depressionCh2:number
@ApiPropertyOptional({ type: Number})
    depressionCh3:number
@ApiPropertyOptional({ type: Number})
    depressionCh4:number
@ApiPropertyOptional({ type: Number})
    depressionCh5:number
@ApiPropertyOptional({ type: Number})
    depressionCh6:number
@ApiPropertyOptional({ type: Number})
    depressionCh7:number
@ApiPropertyOptional({ type: Number})
    depressionCh8:number
@ApiPropertyOptional({ type: Number})
    depressionCh9:number
@ApiPropertyOptional({ type: Number})
    depressionCh10:number
@ApiPropertyOptional({ type: Number})
    depressionCh11:number
@ApiPropertyOptional({ type: Number})
    depressionCh12:number
@ApiPropertyOptional({ type: Number})
    depressionCh13:number
@ApiPropertyOptional({ type: Number})
    depressionCh14:number
@ApiPropertyOptional({ type: Number})
    depressionCh15:number
@ApiPropertyOptional({ type: Number})
    depressionCh16:number
@ApiPropertyOptional({ type: Number})
    depressionCh17:number
@ApiPropertyOptional({ type: Number})
    depressionCh18:number
@ApiPropertyOptional({ type: Number})
    depressionCh19:number
@ApiPropertyOptional({ type: String})
    depressionCh20:number
}
export class UpdateDepressionDto extends DepressionDto{
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: Number})
    depressionCh1:number
@ApiPropertyOptional({ type: Number})
    depressionCh2:number
@ApiPropertyOptional({ type: Number})
    depressionCh3:number
@ApiPropertyOptional({ type: Number})
    depressionCh4:number
@ApiPropertyOptional({ type: Number})
    depressionCh5:number
@ApiPropertyOptional({ type: Number})
    depressionCh6:number
@ApiPropertyOptional({ type: Number})
    depressionCh7:number
@ApiPropertyOptional({ type: Number})
    depressionCh8:number
@ApiPropertyOptional({ type: Number})
    depressionCh9:number
@ApiPropertyOptional({ type: Number})
    depressionCh10:number
@ApiPropertyOptional({ type: Number})
    depressionCh11:number
@ApiPropertyOptional({ type: Number})
    depressionCh12:number
@ApiPropertyOptional({ type: Number})
    depressionCh13:number
@ApiPropertyOptional({ type: Number})
    depressionCh14:number
@ApiPropertyOptional({ type: Number})
    depressionCh15:number
@ApiPropertyOptional({ type: Number})
    depressionCh16:number
@ApiPropertyOptional({ type: Number})
    depressionCh17:number
@ApiPropertyOptional({ type: Number})
    depressionCh18:number
@ApiPropertyOptional({ type: Number})
    depressionCh19:number
@ApiPropertyOptional({ type: String})
    depressionCh20:number
}
