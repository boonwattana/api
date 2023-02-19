import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { StudentFilterController } from './student-filter.controller';
import { StudentFilter, VwStudentFilterDropdown, VwStudentFilterItem, VwStudentFilterList } from './student-filter.entity';
import { StudentFilterService } from './student-filter.service';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { YearTermService } from '../year-term/year-term.service';
import { YearTermModule } from '../year-term/year-term.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentFilter,VwStudentFilterList,VwStudentFilterItem,VwStudentFilterDropdown,
    VwStudentDropdown,
    VwYearTermDropdown,
    VwClassroomDropdown,
    VwClassroomTypeDropdown
    ]),
    YearTermModule
  ],
  controllers: [StudentFilterController],
  providers: [StudentFilterService,DropdownService],
  exports: [StudentFilterService,DropdownService]
})
export class StudentFilterModule {}
