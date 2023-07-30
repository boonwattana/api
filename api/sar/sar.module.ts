import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarController } from './sar.controller';
import { Sar, VwSarDropdown, VwSarItem, VwSarList } from './sar.entity';
import { SarService } from './sar.service';
import { TeacherModule } from 'src/api/teacher/teacher.module';
import { EducationBackgroundModule } from 'src/api/education-background/education-background.module';
import { SarPresonalDataModule } from 'src/api/sar-presonal-data/sar-presonal-data.module';
import { SarPresonalLeaveDataModule } from 'src/api/sar-presonal-leave-data/sar-presonal-leave-data.module';
import { SarCoursesYearTermModule } from 'src/api/sar-courses-year-term/sar-courses-year-term.module';
import {  VwTeachingScheduleItem} from 'src/api/teaching-schedule/teaching-schedule.entity'
import { SarAnotherSpeacialDutyModule } from 'src/api/sar-another-speacial-duty/sar-another-speacial-duty.module';
import { SarLearningManagementPlanModule } from 'src/api/sar-learning-management-plan/sar-learning-management-plan.module';
import { SarMediaProductionModule } from 'src/api/sar-media-production/sar-media-production.module';
import { SarIntegratedLearningModule } from 'src/api/sar-integrated-learning/sar-integrated-learning.module';
import { SarResearchInClassModule } from 'src/api/sar-research-in-class/sar-research-in-class.module';
import { SarStudentAssignModule } from 'src/api/sar-student-assign/sar-student-assign.module';
import { SarLecturerInviteModule } from 'src/api/sar-lecturer-invite/sar-lecturer-invite.module';
import { SarTeachingFormatModule } from 'src/api/sar-teaching-format/sar-teaching-format.module';
import { SarTeachingConditionModule } from 'src/api/sar-teaching-condition/sar-teaching-condition.module';
import { SarSelfDevelopmentModule } from 'src/api/sar-self-development/sar-self-development.module';
import { SarAwardModule } from 'src/api/sar-award/sar-award.module';
import { SarInvitedSpeakerModule } from 'src/api/sar-invited-speaker/sar-invited-speaker.module';
import { VwSarTeachingResultItem,VwSarTeachingResultList} from 'src/api/sar-teaching-result/sar-teaching-result.entity'
import { SarPerformingSpecialDutiesModule } from 'src/api/sar-performing-special-duties/sar-performing-special-duties.module';
import { SarStudentEstimateTeachingModule } from 'src/api/sar-student-estimate-teaching/sar-student-estimate-teaching.module';
import { SarSelfAssessmentModule } from 'src/api/sar-self-assessment/sar-self-assessment.module';
import { SarQualityOfLearnersModule } from 'src/api/sar-quality-of-learners/sar-quality-of-learners.module';
import { SarQualityEvidenceModule } from 'src/api/sar-quality-evidence/sar-quality-evidence.module';
import { SarStandard2Module } from 'src/api/sar-standard2/sar-standard2.module';
import { SarStandard3Module } from 'src/api/sar-standard3/sar-standard3.module';
import { SarStandard4Module } from 'src/api/sar-standard4/sar-standard4.module';
import { SarCompetencyAssessmentModule } from 'src/api/sar-competency-assessment/sar-competency-assessment.module';
import { SarCrudAssessmentModule } from 'src/api/sar-crud-assessment/sar-crud-assessment.module';
import { SarActivitiesModule } from 'src/api/sar-activities/sar-activities.module';
import { SarAdviseClassModule } from 'src/api/sar-advise-class/sar-advise-class.module';
import { VwSarCrudAssessmentList} from 'src/api/sar-crud-assessment/sar-crud-assessment.entity'
import { VwSarCompetencyAssessmentList} from 'src/api/sar-competency-assessment/sar-competency-assessment.entity'
import { SarUploadImgModule } from 'src/api/sar-upload-img/sar-upload-img.module';
import { SarOrderedPositionModule} from 'src/api/sar-ordered-position/sar-ordered-position.module'
import { WordModule } from 'src/core/word/word.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Sar,VwSarList,VwSarItem,VwSarDropdown,
    VwTeacherDropdown,VwTeachingScheduleItem,VwSarTeachingResultItem,VwSarTeachingResultList,VwSarCrudAssessmentList,VwSarCompetencyAssessmentList
    ]), TeacherModule,EducationBackgroundModule,SarPresonalDataModule,
    SarPresonalLeaveDataModule,SarCoursesYearTermModule,SarAnotherSpeacialDutyModule,
    SarLearningManagementPlanModule,SarMediaProductionModule,SarLecturerInviteModule,SarStudentAssignModule,
    SarResearchInClassModule,SarIntegratedLearningModule,SarTeachingFormatModule,SarTeachingConditionModule,
    SarSelfDevelopmentModule,SarAwardModule,SarInvitedSpeakerModule,SarPerformingSpecialDutiesModule,SarStudentEstimateTeachingModule,
    SarSelfAssessmentModule,SarQualityOfLearnersModule,SarQualityEvidenceModule,SarStandard2Module,SarStandard3Module,SarStandard4Module,
    SarCompetencyAssessmentModule,SarCrudAssessmentModule,SarActivitiesModule,SarAdviseClassModule,SarUploadImgModule,SarOrderedPositionModule,
    WordModule
  ],
  controllers: [SarController],
  providers: [SarService,DropdownService],
  exports: [SarService,DropdownService]
})
export class SarModule {}
