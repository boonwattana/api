import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { EmotionalQuotientController } from './emotional-quotient.controller';
import { EmotionalQuotient, VwEmotionalQuotientDropdown, VwEmotionalQuotientItem, VwEmotionalQuotientList } from './emotional-quotient.entity';
import { EmotionalQuotientService } from './emotional-quotient.service';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { StudentModule } from '../student/student.module';
import { YearTermModule } from '../year-term/year-term.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmotionalQuotient,VwEmotionalQuotientList,VwEmotionalQuotientItem,VwEmotionalQuotientDropdown,
    VwStudentDropdown,
    VwYearTermDropdown,
    VwClassroomDropdown,
    VwClassroomTypeDropdown
    ]),
    StudentModule,
    YearTermModule
  ],
  controllers: [EmotionalQuotientController],
  providers: [EmotionalQuotientService,DropdownService],
  exports: [EmotionalQuotientService,DropdownService]
})
export class EmotionalQuotientModule {}
