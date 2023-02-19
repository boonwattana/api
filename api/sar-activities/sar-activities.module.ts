import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarActivitiesController } from './sar-activities.controller';
import { SarActivities, VwSarActivitiesDropdown, VwSarActivitiesItem, VwSarActivitiesList } from './sar-activities.entity';
import { SarActivitiesService } from './sar-activities.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarActivities,VwSarActivitiesList,VwSarActivitiesItem,VwSarActivitiesDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarActivitiesController],
  providers: [SarActivitiesService,DropdownService],
  exports: [SarActivitiesService,DropdownService]
})
export class SarActivitiesModule {}
