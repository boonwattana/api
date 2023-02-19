import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarTeachingConditionController } from './sar-teaching-condition.controller';
import { SarTeachingCondition, VwSarTeachingConditionDropdown, VwSarTeachingConditionItem, VwSarTeachingConditionList } from './sar-teaching-condition.entity';
import { SarTeachingConditionService } from './sar-teaching-condition.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarTeachingCondition,VwSarTeachingConditionList,VwSarTeachingConditionItem,VwSarTeachingConditionDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarTeachingConditionController],
  providers: [SarTeachingConditionService,DropdownService],
  exports: [SarTeachingConditionService,DropdownService]
})
export class SarTeachingConditionModule {}
