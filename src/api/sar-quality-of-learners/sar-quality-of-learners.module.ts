import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarQualityOfLearnersController } from './sar-quality-of-learners.controller';
import { SarQualityOfLearners, VwSarQualityOfLearnersDropdown, VwSarQualityOfLearnersItem, VwSarQualityOfLearnersList } from './sar-quality-of-learners.entity';
import { SarQualityOfLearnersService } from './sar-quality-of-learners.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarQualityOfLearners,VwSarQualityOfLearnersList,VwSarQualityOfLearnersItem,VwSarQualityOfLearnersDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarQualityOfLearnersController],
  providers: [SarQualityOfLearnersService,DropdownService],
  exports: [SarQualityOfLearnersService,DropdownService]
})
export class SarQualityOfLearnersModule {}
