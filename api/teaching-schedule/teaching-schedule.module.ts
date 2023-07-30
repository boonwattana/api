import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown,VwTeachingScheduleTeacherList } from 'src/api/teacher/teacher.entity';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { TeachingScheduleController } from './teaching-schedule.controller';
import { TeachingSchedule, VwTeachingScheduleDropdown, VwTeachingScheduleItem, VwTeachingScheduleList } from './teaching-schedule.entity';
import { TeachingScheduleService } from './teaching-schedule.service';
import { YearTermModule } from '../year-term/year-term.module';
import { TeacherModule } from 'src/api/teacher/teacher.module';
import { VwPractitionerLevelDropdown } from 'src/api/practitioner-level/practitioner-level.entity';
import { PractitionerLevelModule } from 'src/api/practitioner-level/practitioner-level.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([TeachingSchedule,VwTeachingScheduleList,VwTeachingScheduleItem,VwTeachingScheduleDropdown,
    VwTeacherDropdown,
    VwYearTermDropdown,VwTeachingScheduleTeacherList,VwPractitionerLevelDropdown
    ]),
    YearTermModule,
    TeacherModule,
    PractitionerLevelModule
  ],
  controllers: [TeachingScheduleController],
  providers: [TeachingScheduleService,DropdownService],
  exports: [TeachingScheduleService,DropdownService]
})
export class TeachingScheduleModule {}
