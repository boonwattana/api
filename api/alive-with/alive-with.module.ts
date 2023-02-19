import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { AliveWithController } from './alive-with.controller';
import { AliveWith, VwAliveWithDropdown, VwAliveWithItem, VwAliveWithList } from './alive-with.entity';
import { AliveWithService } from './alive-with.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AliveWith,VwAliveWithList,VwAliveWithItem,VwAliveWithDropdown,
    ])
  ],
  controllers: [AliveWithController],
  providers: [AliveWithService,DropdownService],
  exports: [AliveWithService,DropdownService]
})
export class AliveWithModule {}
