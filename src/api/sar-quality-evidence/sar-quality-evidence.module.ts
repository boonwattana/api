import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarQualityEvidenceController } from './sar-quality-evidence.controller';
import { SarQualityEvidence, VwSarQualityEvidenceDropdown, VwSarQualityEvidenceItem, VwSarQualityEvidenceList } from './sar-quality-evidence.entity';
import { SarQualityEvidenceService } from './sar-quality-evidence.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarQualityEvidence,VwSarQualityEvidenceList,VwSarQualityEvidenceItem,VwSarQualityEvidenceDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarQualityEvidenceController],
  providers: [SarQualityEvidenceService,DropdownService],
  exports: [SarQualityEvidenceService,DropdownService]
})
export class SarQualityEvidenceModule {}
