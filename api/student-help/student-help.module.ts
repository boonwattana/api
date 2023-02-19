import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { StudentHelpController } from './student-help.controller';
import { StudentHelp, VwStudentHelpDropdown, VwStudentHelpItem, VwStudentHelpList } from './student-help.entity';
import { StudentHelpService } from './student-help.service';
import { YearTermService } from '../year-term/year-term.service';
import { YearTermModule } from '../year-term/year-term.module';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentHelp,VwStudentHelpList,VwStudentHelpItem,VwStudentHelpDropdown,
    VwStudentDropdown,VwClassroomTypeDropdown,VwClassroomDropdown
    ]),
    YearTermModule
  ],
  controllers: [StudentHelpController],
  providers: [StudentHelpService,DropdownService],
  exports: [StudentHelpService,DropdownService]
})
export class StudentHelpModule {}
