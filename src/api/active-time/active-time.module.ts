import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { ActiveTimeController } from './active-time.controller';
import { ActiveTime, VwActiveTimeDropdown, VwActiveTimeItem, VwActiveTimeList } from './active-time.entity';
import { ActiveTimeService } from './active-time.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActiveTime,VwActiveTimeList,VwActiveTimeItem,VwActiveTimeDropdown,
    ])
  ],
  controllers: [ActiveTimeController],
  providers: [ActiveTimeService,DropdownService],
  exports: [ActiveTimeService,DropdownService]
})
export class ActiveTimeModule {}
