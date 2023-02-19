import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarResearchInClassController } from './sar-research-in-class.controller';
import { SarResearchInClass, VwSarResearchInClassDropdown, VwSarResearchInClassItem, VwSarResearchInClassList } from './sar-research-in-class.entity';
import { SarResearchInClassService } from './sar-research-in-class.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarResearchInClass,VwSarResearchInClassList,VwSarResearchInClassItem,VwSarResearchInClassDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarResearchInClassController],
  providers: [SarResearchInClassService,DropdownService],
  exports: [SarResearchInClassService,DropdownService]
})
export class SarResearchInClassModule {}
