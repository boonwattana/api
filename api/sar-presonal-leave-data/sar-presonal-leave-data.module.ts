import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { SarPresonalLeaveDataController } from './sar-presonal-leave-data.controller';
import { SarPresonalLeaveData, VwSarPresonalLeaveDataDropdown, VwSarPresonalLeaveDataItem, VwSarPresonalLeaveDataList } from './sar-presonal-leave-data.entity';
import { SarPresonalLeaveDataService } from './sar-presonal-leave-data.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([SarPresonalLeaveData,VwSarPresonalLeaveDataList,VwSarPresonalLeaveDataItem,VwSarPresonalLeaveDataDropdown,
      VwTeacherDropdown,
    ])
  ],
  controllers: [SarPresonalLeaveDataController],
  providers: [SarPresonalLeaveDataService,DropdownService],
  exports: [SarPresonalLeaveDataService,DropdownService]
})
export class SarPresonalLeaveDataModule {}
