import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarPresonalDataController } from './sar-presonal-data.controller';
import { SarPresonalData, VwSarPresonalDataDropdown, VwSarPresonalDataItem, VwSarPresonalDataList } from './sar-presonal-data.entity';
import { SarPresonalDataService } from './sar-presonal-data.service';
import { EducationBackgroundModule } from 'src/api/education-background/education-background.module';
import { TeacherModule } from 'src/api/teacher/teacher.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarPresonalData,VwSarPresonalDataList,VwSarPresonalDataItem,VwSarPresonalDataDropdown,
    VwTeacherDropdown,
    ]),
    TeacherModule,
    EducationBackgroundModule
  ],
      
  controllers: [SarPresonalDataController],
  providers: [SarPresonalDataService,DropdownService],
  exports: [SarPresonalDataService,DropdownService]
})
export class SarPresonalDataModule {}
