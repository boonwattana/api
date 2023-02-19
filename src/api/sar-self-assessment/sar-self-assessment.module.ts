import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarSelfAssessmentController } from './sar-self-assessment.controller';
import { SarSelfAssessment, VwSarSelfAssessmentDropdown, VwSarSelfAssessmentItem, VwSarSelfAssessmentList } from './sar-self-assessment.entity';
import { SarSelfAssessmentService } from './sar-self-assessment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarSelfAssessment,VwSarSelfAssessmentList,VwSarSelfAssessmentItem,VwSarSelfAssessmentDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarSelfAssessmentController],
  providers: [SarSelfAssessmentService,DropdownService],
  exports: [SarSelfAssessmentService,DropdownService]
})
export class SarSelfAssessmentModule {}
