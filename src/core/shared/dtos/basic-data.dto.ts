import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { TransformBoolean } from '../decorators/transform-boolean.decorator';

export abstract class BasicDataDto {
  @IsBoolean()
  @TransformBoolean()
  @ApiPropertyOptional({ type: Boolean})
  @IsOptional()
  active?: boolean;

  deleted?: boolean;

  createdAt?: Date;

  createdBy?: string;

  updatedAt?: Date;

  updatedBy?: string;

  deletedAt?: Date;

  deletedBy?: string;
}
export abstract class BootsBasicDataDto {
  
  creatorAccount?: string;

  createdDateTime?: Date;

  updaterAccount?: string;

  updatedDateTime?: Date;
}
export abstract class LogBasicDataDto {
  createdAt?: Date;

  createdBy?: string;
}