import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { StudentSupportController } from './student-support.controller';
import { StudentHasSupport, StudentSupport, VwHasStudentList, VwStudentSupportDropdown, VwStudentSupportItem, VwStudentSupportList } from './student-support.entity';
import { StudentSupportService } from './student-support.service';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { StudentModule } from '../student/student.module';
import { YearTermModule } from '../year-term/year-term.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentSupport,VwStudentSupportList,VwStudentSupportItem,VwStudentSupportDropdown,
    VwTeacherDropdown,
    StudentHasSupport,
    VwClassroomTypeDropdown,
    VwClassroomDropdown,
    VwHasStudentList
    ]),
    StudentModule,
    YearTermModule
  ],
  controllers: [StudentSupportController],
  providers: [StudentSupportService,DropdownService],
  exports: [StudentSupportService,DropdownService]
})
export class StudentSupportModule {}
