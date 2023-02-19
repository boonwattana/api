import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarMediaProductionController } from './sar-media-production.controller';
import { SarMediaProduction, VwSarMediaProductionDropdown, VwSarMediaProductionItem, VwSarMediaProductionList } from './sar-media-production.entity';
import { SarMediaProductionService } from './sar-media-production.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarMediaProduction,VwSarMediaProductionList,VwSarMediaProductionItem,VwSarMediaProductionDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarMediaProductionController],
  providers: [SarMediaProductionService,DropdownService],
  exports: [SarMediaProductionService,DropdownService]
})
export class SarMediaProductionModule {}
