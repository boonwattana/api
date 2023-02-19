import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { EducationBackgroundController } from './education-background.controller';
import { EducationBackground, VwEducationBackgroundDropdown, VwEducationBackgroundItem, VwEducationBackgroundList } from './education-background.entity';
import { EducationBackgroundService } from './education-background.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EducationBackground,VwEducationBackgroundList,VwEducationBackgroundItem,VwEducationBackgroundDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [EducationBackgroundController],
  providers: [EducationBackgroundService,DropdownService],
  exports: [EducationBackgroundService,DropdownService]
})
export class EducationBackgroundModule {}
