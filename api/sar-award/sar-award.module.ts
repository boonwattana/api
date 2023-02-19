import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarAwardController } from './sar-award.controller';
import { SarAward, VwSarAwardDropdown, VwSarAwardItem, VwSarAwardList } from './sar-award.entity';
import { SarAwardService } from './sar-award.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarAward,VwSarAwardList,VwSarAwardItem,VwSarAwardDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarAwardController],
  providers: [SarAwardService,DropdownService],
  exports: [SarAwardService,DropdownService]
})
export class SarAwardModule {}
