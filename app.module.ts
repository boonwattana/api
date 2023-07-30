import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './core/users/users.module';
import { DemoModule } from './core/demo/demo.module';
import { CountryModule } from './api/country/country.module';
import { DistrictModule } from './api/district/district.module';
import { ProvinceModule } from './api/province/province.module';
import { SubDistrictModule } from './api/sub-district/sub-district.module';
import { AuthenticationsModule } from './core/authentications/authentications.module';
import { ImagesModule } from './core/images/images.module';
import { AliveWithModule } from './api/alive-with/alive-with.module';
import { ClassroomModule } from './api/classroom/classroom.module';
import { ClassroomTypeModule } from './api/classroom-type/classroom-type.module';
import { EthnicityModule } from './api/ethnicity/ethnicity.module';
import { GendarModule } from './api/gendar/gendar.module';
import { NationalityModule } from './api/nationality/nationality.module';
import { ParentStatusModule } from './api/parent-status/parent-status.module';
import { ReligionModule } from './api/religion/religion.module';
import { StudentModule } from './api/student/student.module';
import { ExcelModule } from './core/excel/excel.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ActiveTimeModule } from './api/active-time/active-time.module';
import { EditField } from './api/edit-field/edit-field.entity';
import { EditFieldModule } from './api/edit-field/edit-field.module';
import { EditRequest } from './api/edit-request/edit-request.entity';
import { EditRequestModule } from './api/edit-request/edit-request.module';
import { ActivityStudentModule } from './api/activity-student/activity-student.module';
import { CurriculumModule } from './api/curriculum/curriculum.module';
import { EducationBackgroundModule } from './api/education-background/education-background.module';
import { PractitionerLevelModule } from './api/practitioner-level/practitioner-level.module';
import { TeacherModule } from './api/teacher/teacher.module';
import { TeacherWorkModule } from './api/teacher-work/teacher-work.module';
import { TeachersDevelopModule } from './api/teachers-develop/teachers-develop.module';
import { PracticleModule } from './api/practicle/practicle.module';
import { StudentHomeVisitModule } from './api/student-home-visit/student-home-visit.module';
import { SdqTableModule } from './api/sdq-table/sdq-table.module';
import { SdqTeacherModule } from './api/sdq-table/sdq-teacher.module';
import { SdqParentModule } from './api/sdq-table/sdq-parent.module';
import { YearTermModule } from './api/year-term/year-term.module';
import { CheckStudentModule } from './api/check-student/check-student.module';
import { DepressionModule } from './api/depression/depression.module';
import { EmotionalQuotientModule } from './api/emotional-quotient/emotional-quotient.module';
import { StressModule } from './api/stress/stress.module';
import { StudentConsultantModule } from './api/student-consultant/student-consultant.module';
import { StudentFilterModule } from './api/student-filter/student-filter.module';
import { StudentHelpModule } from './api/student-help/student-help.module';
import { StudentScolarModule } from './api/student-scolar/student-scolar.module';
import { StudentSupportModule } from './api/student-support/student-support.module';
import { SarPresonalDataModule } from './api/sar-presonal-data/sar-presonal-data.module';
import { TeachingScheduleModule } from './api/teaching-schedule/teaching-schedule.module';
import { ReportModule } from './api/report/report.module';
import { SarPresonalLeaveDataModule } from './api/sar-presonal-leave-data/sar-presonal-leave-data.module';
import { SarCoursesYearTermModule } from './api/sar-courses-year-term/sar-courses-year-term.module';
import { SarAnotherSpeacialDutyModule } from './api/sar-another-speacial-duty/sar-another-speacial-duty.module';
import { SarLearningManagementPlanModule } from './api/sar-learning-management-plan/sar-learning-management-plan.module';
import { SarMediaProductionModule } from './api/sar-media-production/sar-media-production.module';
import { SarIntegratedLearningModule } from './api/sar-integrated-learning/sar-integrated-learning.module';
import { SarResearchInClassModule } from './api/sar-research-in-class/sar-research-in-class.module';
import { SarStudentAssignModule } from './api/sar-student-assign/sar-student-assign.module';
import { SarLecturerInviteModule } from './api/sar-lecturer-invite/sar-lecturer-invite.module';
import { SarTeachingFormatModule } from './api/sar-teaching-format/sar-teaching-format.module';
import { SarTeachingConditionModule } from './api/sar-teaching-condition/sar-teaching-condition.module';
import { SarSelfDevelopmentModule } from './api/sar-self-development/sar-self-development.module';
import { SarAwardModule } from './api/sar-award/sar-award.module';
import { SarInvitedSpeakerModule } from './api/sar-invited-speaker/sar-invited-speaker.module';
import { SarTeachingResultModule } from './api/sar-teaching-result/sar-teaching-result.module';
import { SarPerformingSpecialDutiesModule } from './api/sar-performing-special-duties/sar-performing-special-duties.module';
import { SarStudentEstimateTeachingModule } from './api/sar-student-estimate-teaching/sar-student-estimate-teaching.module';
import { SarSelfAssessmentModule } from './api/sar-self-assessment/sar-self-assessment.module';
import { SarQualityOfLearnersModule } from './api/sar-quality-of-learners/sar-quality-of-learners.module';
import { SarQualityEvidenceModule } from './api/sar-quality-evidence/sar-quality-evidence.module';
import { SarStandard2Module } from './api/sar-standard2/sar-standard2.module';
import { SarStandard3Module } from './api/sar-standard3/sar-standard3.module';
import { SarStandard4Module  } from './api/sar-standard4/sar-standard4.module';
import { SarCompetencyAssessmentModule  } from './api/sar-competency-assessment/sar-competency-assessment.module';
import { SarCrudAssessmentModule  } from './api/sar-crud-assessment/sar-crud-assessment.module';
import { SarModule  } from './api/sar/sar.module';
import { SarActivitiesModule  } from './api/sar-activities/sar-activities.module';
import { SarAdviseClassModule  } from './api/sar-advise-class/sar-advise-class.module';
import { SarUploadImgModule  } from './api/sar-upload-img/sar-upload-img.module';
import { SarOrderedPositionModule  } from './api/sar-ordered-position/sar-ordered-position.module';
import { WordModule } from './core/word/word.module';
@Module({
  imports: [
    ConfigModule.forRoot(
      {isGlobal:true}
    ),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'dbuser',
      password:"pEM8F^hZBHuMfJYK",
      // autoLoadEntities:true,
      database:'bwn_db',
      // synchronize:true,
      entities: ["dist/**/*.entity{.ts,.js}"]
    }),
    ConfigModule.forRoot({
      isGlobal: false,
      envFilePath:['.env']
    }),

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     return {
    //       type: "postgres",
    //       // host: configService.get('DATABASE_URL', 'localhost'),
    //       // port: Number(configService.get<number>('DATABASE_PORT', 5432)),
    //       // username: configService.get('DATABASE_USERNAME', 'postgres'),
    //       // password: configService.get('DATABASE_PASSWORD', 'postgres'),
    //       // database: configService.get<string>('DATABASE_SCHEMA', 'bwn4'),
    //       // useUTC: true,
    //       // logging: false,
    //       // synchronize: configService.get<string>('SYNC_DATABASE', 'true')!='false',
    //       host: configService.get('DB_HOST', 'localhost'),
    //       port: Number(configService.get<number>('DATABASE_PORT', 5432)),
    //       username: configService.get('POSTGRES_USER', 'postgres'),
    //       password: configService.get('POSTGRES_PASSWORD', 'password'),
    //       database: configService.get<string>('POSTGRES_DB', 'bwn_db'),
    //       useUTC: true,
    //       logging: false,
    //       synchronize: false,
    //       entities: ["dist/**/**/*.entity{.ts,.js}"],

    //     };
    //   },
    // }),
    UsersModule,
    DemoModule,
    AuthenticationsModule,
    CountryModule,
    DistrictModule,
    ProvinceModule,
    SubDistrictModule,
    ImagesModule,
    AliveWithModule,
    ClassroomModule,
    ClassroomTypeModule,
    EthnicityModule,
    GendarModule,
    NationalityModule,
    ParentStatusModule,
    ReligionModule,
    StudentModule,
    ExcelModule,
    ActiveTimeModule,
    EditFieldModule,
    EditRequestModule,
    ActivityStudentModule,
    CurriculumModule,
    EducationBackgroundModule,
    PractitionerLevelModule,
    TeacherModule,
    TeacherWorkModule,
    TeachersDevelopModule,
    PracticleModule,
    StudentHomeVisitModule,
    SdqTableModule,
    SdqTeacherModule,
    SdqParentModule,

    YearTermModule,
    CheckStudentModule,
    StressModule,
    DepressionModule,
    EmotionalQuotientModule,
    StudentConsultantModule,
    StudentFilterModule,
    StudentHelpModule,
    StudentScolarModule,
    StudentSupportModule,
    TeachingScheduleModule,
    ReportModule,
    SarPresonalDataModule,
    SarPresonalLeaveDataModule,
    SarCoursesYearTermModule,
    SarAnotherSpeacialDutyModule,
    SarLearningManagementPlanModule,
    SarMediaProductionModule,
    SarIntegratedLearningModule,
    SarResearchInClassModule,
    SarStudentAssignModule,
    SarLecturerInviteModule,
    SarTeachingFormatModule,
    SarTeachingConditionModule,
    SarSelfDevelopmentModule,
    SarAwardModule,
    SarInvitedSpeakerModule,
    SarTeachingResultModule,
    SarPerformingSpecialDutiesModule,
    SarStudentEstimateTeachingModule,
    SarSelfAssessmentModule,
    SarQualityOfLearnersModule,
    SarQualityEvidenceModule,
    SarStandard2Module,
    SarStandard3Module,
    SarStandard4Module,
    SarCompetencyAssessmentModule,
    SarCrudAssessmentModule,
    SarModule,
    SarActivitiesModule,
    SarAdviseClassModule,
    SarUploadImgModule,
    SarOrderedPositionModule,
    WordModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
