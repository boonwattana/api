import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwStudentDropdown } from 'src/api/student/student.entity';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { DepressionController } from './depression.controller';
import { Depression, VwDepressionDropdown, VwDepressionItem, VwDepressionList } from './depression.entity';
import { DepressionService } from './depression.service';
import { VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { VwClassroomDropdown } from '../classroom/classroom.entity';
import { StudentModule } from '../student/student.module';
import { YearTermModule } from '../year-term/year-term.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Depression,VwDepressionList,VwDepressionItem,VwDepressionDropdown,
    VwStudentDropdown,
    VwYearTermDropdown,
    VwClassroomDropdown,
    VwClassroomTypeDropdown
    ]),
    StudentModule,
    YearTermModule
  ],
  controllers: [DepressionController],
  providers: [DepressionService,DropdownService],
  exports: [DepressionService,DropdownService]
})
export class DepressionModule {}
