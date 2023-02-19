import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { SarTeachingResultController } from './sar-teaching-result.controller';
import { SarTeachingResult, VwSarTeachingResultDropdown, VwSarTeachingResultItem, VwSarTeachingResultList } from './sar-teaching-result.entity';
import { SarTeachingResultService } from './sar-teaching-result.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarTeachingResult,VwSarTeachingResultList,VwSarTeachingResultItem,VwSarTeachingResultDropdown,
    VwTeacherDropdown,
    VwYearTermDropdown,
    ])
  ],
  controllers: [SarTeachingResultController],
  providers: [SarTeachingResultService,DropdownService],
  exports: [SarTeachingResultService,DropdownService]
})
export class SarTeachingResultModule {}
