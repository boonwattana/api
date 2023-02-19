import {BasicDataDto} from "../shared/dtos/basic-data.dto";
import {BaseSearchDataDto} from "../shared/dtos/base-search-data.dto";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";
import {Column} from "typeorm";
import {ToBoolean} from "../shared/services/dto.service";
import { SearchParameter } from "../shared/models/search-param-model";

export class UsersDto extends BasicDataDto {
  @ApiPropertyOptional({ type: String})
  username:string
@ApiPropertyOptional({ type: String})
  password:string
@ApiPropertyOptional({ type: String})
  token:any
@ApiPropertyOptional({ type: String})
  firstname:string
@ApiPropertyOptional({ type: String})
  lastname:string
@ApiPropertyOptional({ type: String})
  type:string
@ApiPropertyOptional({ type: String})
  inforid:string
  @ApiPropertyOptional({ type: Boolean})
  isGuid:boolean
}

export class SearchUsersDto extends SearchParameter {
  // @ApiPropertyOptional()
  // username: string;

  // @ApiPropertyOptional()
  // typeCodeId: string;

  // @ApiPropertyOptional()
  // departmentCodeId: string;

  // @ApiPropertyOptional({description: 'Supplier Funding | Property Contract'})
  // module: string;

  // @ApiPropertyOptional({description: 'Active | In Active'})
  // status: string;
}

export class CreateUsersDto extends UsersDto {
  // id: null;
  // token: null;
  // @ApiProperty({required: true})
  // @IsString()
  // username: string;

  // @ApiProperty({required: true})
  // @IsNumber()
  // typeCodeId: number;

  // @ApiProperty({required: true})
  // @IsNumber()
  // departmentCodeId: number;
}

export class UpdateUsersDto extends UsersDto {
  // id: number;

  // @ApiProperty({required: true})
  // @IsNumber()
  // typeCodeId: number;

  // @ApiProperty({required: true})
  // @IsNumber()
  // departmentCodeId: number;
}

export class DeleteUsersDto extends BasicDataDto {
  id: number;
}
