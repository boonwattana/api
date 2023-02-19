import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesModule } from 'src/core/images/images.module';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { StudentModule } from '../student/student.module';
import { VwYearTermDropdown } from '../year-term/year-term.entity';
import { YearTermModule } from '../year-term/year-term.module';
import { StudentHomeVisitController } from './student-home-visit.controller';
import { StudentHomeVisit, VwStudentHomeVisitDropdown, VwStudentHomeVisitItem, VwStudentHomeVisitList } from './student-home-visit.entity';
import { StudentHomeVisitService } from './student-home-visit.service';
import { VwStudentItem } from 'src/api/student/student.entity';
import { VwYearTermItem } from 'src/api/year-term/year-term.entity';
import { VwTeacherItem } from 'src/api/teacher/teacher.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([StudentHomeVisit,VwStudentHomeVisitList,VwStudentHomeVisitItem,VwStudentHomeVisitDropdown,
      VwClassroomDropdown,VwClassroomTypeDropdown,VwStudentItem,VwYearTermItem,VwYearTermDropdown,VwTeacherItem
    ]),
    YearTermModule,
    ImagesModule,
    StudentModule
  ],
  controllers: [StudentHomeVisitController],
  providers: [StudentHomeVisitService,DropdownService],
  exports: [StudentHomeVisitService,DropdownService]
})
export class StudentHomeVisitModule {}
