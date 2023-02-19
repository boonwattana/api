import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchStressDto extends SearchParameter {
@ApiPropertyOptional({ type: Number})
    studentId?:number
}
export class StressDto {
    @ApiPropertyOptional({ type: Number})
    id:number
@ApiPropertyOptional({ type: Number})
    studentId:number
@ApiPropertyOptional({ type: Number})
    yearTermId:number
@ApiPropertyOptional({ type: Number})
    stressCh1:number
@ApiPropertyOptional({ type: Number})
    stressCh2:number
@ApiPropertyOptional({ type: Number})
    stressCh3:number
@ApiPropertyOptional({ type: Number})
    stressCh4:number
@ApiPropertyOptional({ type: Number})
    stressCh5:number
@ApiPropertyOptional({ type: Number})
    stressCh6:number
@ApiPropertyOptional({ type: Number})
    stressCh7:number
@ApiPropertyOptional({ type: Number})
    stressCh8:number
@ApiPropertyOptional({ type: Number})
    stressCh9:number
@ApiPropertyOptional({ type: Number})
    stressCh10:number
@ApiPropertyOptional({ type: Number})
    stressCh11:number
@ApiPropertyOptional({ type: Number})
    stressCh12:number
@ApiPropertyOptional({ type: Number})
    stressCh13:number
@ApiPropertyOptional({ type: Number})
    stressCh14:number
@ApiPropertyOptional({ type: Number})
    stressCh15:number
@ApiPropertyOptional({ type: Number})
    stressCh16:number
@ApiPropertyOptional({ type: Number})
    stressCh17:number
@ApiPropertyOptional({ type: Number})
    stressCh18:number
@ApiPropertyOptional({ type: Number})
    stressCh19:number
@ApiPropertyOptional({ type: Number})
    stressCh20:number
} 
export class CreateStressDto extends StressDto{

}
export class UpdateStressDto extends StressDto{

}
