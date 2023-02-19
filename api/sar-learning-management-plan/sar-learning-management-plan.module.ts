import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarLearningManagementPlanController } from './sar-learning-management-plan.controller';
import { SarLearningManagementPlan, VwSarLearningManagementPlanDropdown, VwSarLearningManagementPlanItem, VwSarLearningManagementPlanList } from './sar-learning-management-plan.entity';
import { SarLearningManagementPlanService } from './sar-learning-management-plan.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarLearningManagementPlan,VwSarLearningManagementPlanList,VwSarLearningManagementPlanItem,VwSarLearningManagementPlanDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarLearningManagementPlanController],
  providers: [SarLearningManagementPlanService,DropdownService],
  exports: [SarLearningManagementPlanService,DropdownService]
})
export class SarLearningManagementPlanModule {}
