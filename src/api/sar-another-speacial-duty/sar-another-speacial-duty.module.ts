import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarAnotherSpeacialDutyController } from './sar-another-speacial-duty.controller';
import { SarAnotherSpeacialDuty, VwSarAnotherSpeacialDutyDropdown, VwSarAnotherSpeacialDutyItem, VwSarAnotherSpeacialDutyList } from './sar-another-speacial-duty.entity';
import { SarAnotherSpeacialDutyService } from './sar-another-speacial-duty.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarAnotherSpeacialDuty,VwSarAnotherSpeacialDutyList,VwSarAnotherSpeacialDutyItem,VwSarAnotherSpeacialDutyDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarAnotherSpeacialDutyController],
  providers: [SarAnotherSpeacialDutyService,DropdownService],
  exports: [SarAnotherSpeacialDutyService,DropdownService]
})
export class SarAnotherSpeacialDutyModule {}
