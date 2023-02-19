import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { VwCurriculumDropdown } from 'src/api/curriculum/curriculum.entity';
import { VwPractitionerLevelDropdown } from 'src/api/practitioner-level/practitioner-level.entity';
import { TeachersDevelopController } from './teachers-develop.controller';
import { TeachersDevelop, VwTeachersDevelopDropdown, VwTeachersDevelopItem, VwTeachersDevelopList } from './teachers-develop.entity';
import { TeachersDevelopService } from './teachers-develop.service';
import { VwPracticleDropdown } from '../practicle/practicle.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeachersDevelop,VwTeachersDevelopList,VwTeachersDevelopItem,VwTeachersDevelopDropdown,
    VwTeacherDropdown,
    VwCurriculumDropdown,
    VwPracticleDropdown,
    ])
  ],
  controllers: [TeachersDevelopController],
  providers: [TeachersDevelopService,DropdownService],
  exports: [TeachersDevelopService,DropdownService]
})
export class TeachersDevelopModule {}
