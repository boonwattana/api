import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarPerformingSpecialDutiesController } from './sar-performing-special-duties.controller';
import { SarPerformingSpecialDuties, VwSarPerformingSpecialDutiesDropdown, VwSarPerformingSpecialDutiesItem, VwSarPerformingSpecialDutiesList } from './sar-performing-special-duties.entity';
import { SarPerformingSpecialDutiesService } from './sar-performing-special-duties.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarPerformingSpecialDuties,VwSarPerformingSpecialDutiesList,VwSarPerformingSpecialDutiesItem,VwSarPerformingSpecialDutiesDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarPerformingSpecialDutiesController],
  providers: [SarPerformingSpecialDutiesService,DropdownService],
  exports: [SarPerformingSpecialDutiesService,DropdownService]
})
export class SarPerformingSpecialDutiesModule {}
