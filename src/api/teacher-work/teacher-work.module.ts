import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { TeacherWorkController } from './teacher-work.controller';
import { TeacherWork, VwTeacherWorkDropdown, VwTeacherWorkItem, VwTeacherWorkList } from './teacher-work.entity';
import { TeacherWorkService } from './teacher-work.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherWork,VwTeacherWorkList,VwTeacherWorkItem,VwTeacherWorkDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [TeacherWorkController],
  providers: [TeacherWorkService,DropdownService],
  exports: [TeacherWorkService,DropdownService]
})
export class TeacherWorkModule {}
