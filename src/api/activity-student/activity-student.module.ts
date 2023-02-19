import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { ActivityStudentController } from './activity-student.controller';
import { ActivityStudent, VwActivityStudentDropdown, VwActivityStudentItem, VwActivityStudentList } from './activity-student.entity';
import { ActivityStudentService } from './activity-student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActivityStudent,VwActivityStudentList,VwActivityStudentItem,VwActivityStudentDropdown,
    ])
  ],
  controllers: [ActivityStudentController],
  providers: [ActivityStudentService,DropdownService],
  exports: [ActivityStudentService,DropdownService]
})
export class ActivityStudentModule {}
