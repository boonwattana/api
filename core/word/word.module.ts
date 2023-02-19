import { Module } from '@nestjs/common';
import { ActivityStudentModule } from 'src/api/activity-student/activity-student.module';
import { AliveWithModule } from 'src/api/alive-with/alive-with.module';
import { CheckStudentModule } from 'src/api/check-student/check-student.module';
import { ClassroomTypeModule } from 'src/api/classroom-type/classroom-type.module';
import { ClassroomModule } from 'src/api/classroom/classroom.module';
import { CountryModule } from 'src/api/country/country.module';
import { CurriculumModule } from 'src/api/curriculum/curriculum.module';
import { DepressionModule } from 'src/api/depression/depression.module';
import { DistrictModule } from 'src/api/district/district.module';
import { EducationBackgroundModule } from 'src/api/education-background/education-background.module';
import { EmotionalQuotientModule } from 'src/api/emotional-quotient/emotional-quotient.module';
import { EthnicityModule } from 'src/api/ethnicity/ethnicity.module';
import { GendarModule } from 'src/api/gendar/gendar.module';
import { NationalityModule } from 'src/api/nationality/nationality.module';
import { ParentStatusModule } from 'src/api/parent-status/parent-status.module';
import { PracticleModule } from 'src/api/practicle/practicle.module';
import { PractitionerLevelModule } from 'src/api/practitioner-level/practitioner-level.module';
import { ProvinceModule } from 'src/api/province/province.module';
import { ReligionModule } from 'src/api/religion/religion.module';
import { SdqTableModule } from 'src/api/sdq-table/sdq-table.module';
import { StressModule } from 'src/api/stress/stress.module';
import { StudentConsultantModule } from 'src/api/student-consultant/student-consultant.module';
import { StudentFilterModule } from 'src/api/student-filter/student-filter.module';
import { StudentHelpModule } from 'src/api/student-help/student-help.module';
import { StudentHomeVisitModule } from 'src/api/student-home-visit/student-home-visit.module';
import { StudentScolarModule } from 'src/api/student-scolar/student-scolar.module';
import { StudentSupportModule } from 'src/api/student-support/student-support.module';
import { StudentModule } from 'src/api/student/student.module';
import { SubDistrictModule } from 'src/api/sub-district/sub-district.module';
import { TeacherWorkModule } from 'src/api/teacher-work/teacher-work.module';
import { TeacherModule } from 'src/api/teacher/teacher.module';
import { TeachersDevelopModule } from 'src/api/teachers-develop/teachers-develop.module';
import { TeachingScheduleModule } from 'src/api/teaching-schedule/teaching-schedule.module';
import { WordController } from './word.controller';
import { WordService } from './word.service';

@Module({
  imports: [
   

  ],
  controllers: [WordController],
  providers: [WordService],
  exports: [WordService]
})
export class WordModule {}


