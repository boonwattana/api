import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { CheckStudentController } from './check-student.controller';
import { CheckStudent, VwCheckStudentItem, VwCheckStudentList } from './check-student.entity';
import { CheckStudentService } from './check-student.service';
import { StudentModule } from '../student/student.module';
import { VwYearTermDropdown, YearTerm } from '../year-term/year-term.entity';
import { YearTermModule } from '../year-term/year-term.module';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CheckStudent,VwCheckStudentList,VwCheckStudentItem,VwYearTermDropdown,
    VwStudentDropdown,
    VwClassroomDropdown,
    VwClassroomTypeDropdown
    ]),
    StudentModule,
    YearTermModule
  ],
  controllers: [CheckStudentController],
  providers: [CheckStudentService,DropdownService],
  exports: [CheckStudentService,DropdownService]
})
export class CheckStudentModule {}
