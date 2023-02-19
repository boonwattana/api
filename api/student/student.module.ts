import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwGendarDropdown } from 'src/api/gendar/gendar.entity';
import { VwNationalityDropdown } from 'src/api/nationality/nationality.entity';
import { VwEthnicityDropdown } from 'src/api/ethnicity/ethnicity.entity';
import { VwReligionDropdown } from 'src/api/religion/religion.entity';
import { VwCountryDropdown } from 'src/api/country/country.entity';
import { VwSubDistrictDropdown } from 'src/api/sub-district/sub-district.entity';
import { VwDistrictDropdown } from 'src/api/district/district.entity';
import { VwProvinceDropdown } from 'src/api/province/province.entity';
import { VwAliveWithDropdown } from 'src/api/alive-with/alive-with.entity';
import { VwClassroomDropdown } from 'src/api/classroom/classroom.entity';
import { StudentController } from './student.controller';
import { Student, VwStudentDropdown, VwStudentItem, VwStudentList } from './student.entity';
import { StudentService } from './student.service';
import { VwParentStatusDropdown } from '../parent-status/parent-status.entity';
import { ImagesModule } from 'src/core/images/images.module';
import { AuthenticationsModule } from 'src/core/authentications/authentications.module';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { Teacher } from '../teacher/teacher.entity';
import { Users } from 'src/core/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student,VwStudentList,VwStudentItem,VwStudentDropdown,
    VwGendarDropdown,
    VwNationalityDropdown,
    VwEthnicityDropdown,
    VwReligionDropdown,
    VwCountryDropdown,
    VwSubDistrictDropdown,
    VwDistrictDropdown,
    VwProvinceDropdown,
    VwAliveWithDropdown,
    VwClassroomDropdown,
    VwParentStatusDropdown,
    VwClassroomTypeDropdown,
    Teacher,
    Users
    ]),
    ImagesModule,
    AuthenticationsModule

  ],
  controllers: [StudentController],
  providers: [StudentService,DropdownService],
  exports: [StudentService,DropdownService]
})
export class StudentModule {}
