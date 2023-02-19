import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarOrderedPositionController } from './sar-ordered-position.controller';
import { SarOrderedPosition, VwSarOrderedPositionDropdown, VwSarOrderedPositionItem, VwSarOrderedPositionList } from './sar-ordered-position.entity';
import { SarOrderedPositionService } from './sar-ordered-position.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarOrderedPosition,VwSarOrderedPositionList,VwSarOrderedPositionItem,VwSarOrderedPositionDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarOrderedPositionController],
  providers: [SarOrderedPositionService,DropdownService],
  exports: [SarOrderedPositionService,DropdownService]
})
export class SarOrderedPositionModule {}
