import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarIntegratedLearningController } from './sar-integrated-learning.controller';
import { SarIntegratedLearning, VwSarIntegratedLearningDropdown, VwSarIntegratedLearningItem, VwSarIntegratedLearningList } from './sar-integrated-learning.entity';
import { SarIntegratedLearningService } from './sar-integrated-learning.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarIntegratedLearning,VwSarIntegratedLearningList,VwSarIntegratedLearningItem,VwSarIntegratedLearningDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarIntegratedLearningController],
  providers: [SarIntegratedLearningService,DropdownService],
  exports: [SarIntegratedLearningService,DropdownService]
})
export class SarIntegratedLearningModule {}
