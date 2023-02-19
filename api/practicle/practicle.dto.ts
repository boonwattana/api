import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchPracticleDto extends SearchParameter {
@ApiPropertyOptional({ type: String})
    name?:string
@ApiPropertyOptional({ type: String})
    descrition?:string
}
export class PracticleDto {
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: String})
    descrition:string
} 
export class CreatePracticleDto extends PracticleDto{
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: String})
    descrition:string
}
export class UpdatePracticleDto extends PracticleDto{
@ApiPropertyOptional({ type: String})
    name:string
@ApiPropertyOptional({ type: String})
    descrition:string
}
