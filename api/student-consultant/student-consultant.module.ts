import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { StudentConsultantController } from './student-consultant.controller';
import { StudentConsultant, VwStudentConsultantDropdown, VwStudentConsultantItem, VwStudentConsultantList } from './student-consultant.entity';
import { StudentConsultantService } from './student-consultant.service';
import { YearTermModule } from '../year-term/year-term.module';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentConsultant,VwStudentConsultantList,VwStudentConsultantItem,VwStudentConsultantDropdown,
    VwStudentDropdown,
    VwTeacherDropdown,
    VwClassroomDropdown,
    VwClassroomTypeDropdown
    ]),
    YearTermModule

  ],
  controllers: [StudentConsultantController],
  providers: [StudentConsultantService,DropdownService],
  exports: [StudentConsultantService,DropdownService]
})
export class StudentConsultantModule {}
