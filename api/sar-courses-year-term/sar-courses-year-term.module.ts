import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { SarCoursesYearTermController } from './sar-courses-year-term.controller';
import { SarCoursesYearTerm, VwSarCoursesYearTermDropdown, VwSarCoursesYearTermItem, VwSarCoursesYearTermList } from './sar-courses-year-term.entity';
import { SarCoursesYearTermService } from './sar-courses-year-term.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarCoursesYearTerm,VwSarCoursesYearTermList,VwSarCoursesYearTermItem,VwSarCoursesYearTermDropdown,
    VwTeacherDropdown,
    VwYearTermDropdown,
    ])
  ],
  controllers: [SarCoursesYearTermController],
  providers: [SarCoursesYearTermService,DropdownService],
  exports: [SarCoursesYearTermService,DropdownService]
})
export class SarCoursesYearTermModule {}
