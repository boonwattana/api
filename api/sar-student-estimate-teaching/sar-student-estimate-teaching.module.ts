import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarStudentEstimateTeachingController } from './sar-student-estimate-teaching.controller';
import { SarStudentEstimateTeaching, VwSarStudentEstimateTeachingDropdown, VwSarStudentEstimateTeachingItem, VwSarStudentEstimateTeachingList } from './sar-student-estimate-teaching.entity';
import { SarStudentEstimateTeachingService } from './sar-student-estimate-teaching.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarStudentEstimateTeaching,VwSarStudentEstimateTeachingList,VwSarStudentEstimateTeachingItem,VwSarStudentEstimateTeachingDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarStudentEstimateTeachingController],
  providers: [SarStudentEstimateTeachingService,DropdownService],
  exports: [SarStudentEstimateTeachingService,DropdownService]
})
export class SarStudentEstimateTeachingModule {}
