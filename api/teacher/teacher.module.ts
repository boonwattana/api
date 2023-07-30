import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwGendarDropdown } from 'src/api/gendar/gendar.entity';
import { VwNationalityDropdown } from 'src/api/nationality/nationality.entity';
import { VwEthnicityDropdown } from 'src/api/ethnicity/ethnicity.entity';
import { VwReligionDropdown } from 'src/api/religion/religion.entity';
import { VwPractitionerLevelDropdown } from 'src/api/practitioner-level/practitioner-level.entity';
import { VwEducationBackgroundDropdown } from 'src/api/education-background/education-background.entity';
import { VwCountryDropdown } from 'src/api/country/country.entity';
import { VwProvinceDropdown } from 'src/api/province/province.entity';
import { VwDistrictDropdown } from 'src/api/district/district.entity';
import { VwSubDistrictDropdown } from 'src/api/sub-district/sub-district.entity';
import { TeacherController } from './teacher.controller';
import { Teacher, VwTeacherDropdown, VwTeacherItem, VwTeacherList , VwTeachingScheduleTeacherList} from './teacher.entity';
import { TeacherService } from './teacher.service';
import { VwPracticleDropdown } from '../practicle/practicle.entity';
import { ImagesModule } from 'src/core/images/images.module';
import { AuthenticationsModule } from 'src/core/authentications/authentications.module';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwActivityStudentDropdown } from '../activity-student/activity-student.entity';
import { Users } from 'core/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher,VwTeacherList,VwTeacherItem,VwTeacherDropdown,
    VwGendarDropdown,
    VwNationalityDropdown,
    VwEthnicityDropdown,
    VwReligionDropdown,
    VwPractitionerLevelDropdown,
    VwEducationBackgroundDropdown,
    VwCountryDropdown,
    VwProvinceDropdown,
    VwDistrictDropdown,
    VwSubDistrictDropdown,
    VwPracticleDropdown,
    VwClassroomDropdown,
    VwClassroomTypeDropdown,
    VwActivityStudentDropdown,
    VwTeachingScheduleTeacherList,
    Users
    ]),
    ImagesModule,
    AuthenticationsModule
  ],
  controllers: [TeacherController],
  providers: [TeacherService,DropdownService],
  exports: [DropdownService,TeacherService],
})
export class TeacherModule {}
