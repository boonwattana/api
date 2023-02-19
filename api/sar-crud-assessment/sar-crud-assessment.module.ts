import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarCrudAssessmentController } from './sar-crud-assessment.controller';
import { SarCrudAssessment, VwSarCrudAssessmentDropdown, VwSarCrudAssessmentItem, VwSarCrudAssessmentList } from './sar-crud-assessment.entity';
import { SarCrudAssessmentService } from './sar-crud-assessment.service';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarCrudAssessment,VwSarCrudAssessmentList,VwSarCrudAssessmentItem,VwSarCrudAssessmentDropdown,
    VwTeacherDropdown,VwYearTermDropdown
    ])
  ],
  controllers: [SarCrudAssessmentController],
  providers: [SarCrudAssessmentService,DropdownService],
  exports: [SarCrudAssessmentService,DropdownService]
})
export class SarCrudAssessmentModule {}
