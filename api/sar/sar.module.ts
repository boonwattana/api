import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarController } from './sar.controller';
import { Sar, VwSarDropdown, VwSarItem, VwSarList } from './sar.entity';
import { SarService } from './sar.service';
import { TeacherModule } from '../teacher/teacher.module';
import { EducationBackgroundModule } from '../education-background/education-background.module';
import { SarPresonalDataModule } from '../sar-presonal-data/sar-presonal-data.module';
import { SarPresonalLeaveDataModule } from '../sar-presonal-leave-data/sar-presonal-leave-data.module';
import { SarCoursesYearTermModule } from '../sar-courses-year-term/sar-courses-year-term.module';
import {  VwTeachingScheduleItem} from 'src/api/teaching-schedule/teaching-schedule.entity'
import { SarAnotherSpeacialDutyModule } from '../sar-another-speacial-duty/sar-another-speacial-duty.module';
import { SarLearningManagementPlanModule } from '../sar-learning-management-plan/sar-learning-management-plan.module';
import { SarMediaProductionModule } from '../sar-media-production/sar-media-production.module';
import { SarIntegratedLearningModule } from '../sar-integrated-learning/sar-integrated-learning.module';
import { SarResearchInClassModule } from '../sar-research-in-class/sar-research-in-class.module';
import { SarStudentAssignModule } from '../sar-student-assign/sar-student-assign.module';
import { SarLecturerInviteModule } from '../sar-lecturer-invite/sar-lecturer-invite.module';
import { SarTeachingFormatModule } from '../sar-teaching-format/sar-teaching-format.module';
import { SarTeachingConditionModule } from '../sar-teaching-condition/sar-teaching-condition.module';
import { SarSelfDevelopmentModule } from '../sar-self-development/sar-self-development.module';
import { SarAwardModule } from '../sar-award/sar-award.module';
import { SarInvitedSpeakerModule } from '../sar-invited-speaker/sar-invited-speaker.module';
import { VwSarTeachingResultItem,VwSarTeachingResultList} from 'src/api/sar-teaching-result/sar-teaching-result.entity'
import { SarPerformingSpecialDutiesModule } from '../sar-performing-special-duties/sar-performing-special-duties.module';
import { SarStudentEstimateTeachingModule } from '../sar-student-estimate-teaching/sar-student-estimate-teaching.module';
import { SarSelfAssessmentModule } from '../sar-self-assessment/sar-self-assessment.module';
import { SarQualityOfLearnersModule } from '../sar-quality-of-learners/sar-quality-of-learners.module';
import { SarQualityEvidenceModule } from '../sar-quality-evidence/sar-quality-evidence.module';
import { SarStandard2Module } from '../sar-standard2/sar-standard2.module';
import { SarStandard3Module } from '../sar-standard3/sar-standard3.module';
import { SarStandard4Module } from '../sar-standard4/sar-standard4.module';
import { SarCompetencyAssessmentModule } from '../sar-competency-assessment/sar-competency-assessment.module';
import { SarCrudAssessmentModule } from '../sar-crud-assessment/sar-crud-assessment.module';
import { SarActivitiesModule } from '../sar-activities/sar-activities.module';
import { SarAdviseClassModule } from '../sar-advise-class/sar-advise-class.module';
import { VwSarCrudAssessmentList} from 'src/api/sar-crud-assessment/sar-crud-assessment.entity'
import { VwSarCompetencyAssessmentList} from 'src/api/sar-competency-assessment/sar-competency-assessment.entity'
import { SarUploadImgModule } from '../sar-upload-img/sar-upload-img.module';
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
