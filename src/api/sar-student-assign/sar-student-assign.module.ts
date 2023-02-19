import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarStudentAssignController } from './sar-student-assign.controller';
import { SarStudentAssign, VwSarStudentAssignDropdown, VwSarStudentAssignItem, VwSarStudentAssignList } from './sar-student-assign.entity';
import { SarStudentAssignService } from './sar-student-assign.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarStudentAssign,VwSarStudentAssignList,VwSarStudentAssignItem,VwSarStudentAssignDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarStudentAssignController],
  providers: [SarStudentAssignService,DropdownService],
  exports: [SarStudentAssignService,DropdownService]
})
export class SarStudentAssignModule {}
