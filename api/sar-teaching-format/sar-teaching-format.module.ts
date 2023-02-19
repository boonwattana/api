import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { SarTeachingFormatController } from './sar-teaching-format.controller';
import { SarTeachingFormat, VwSarTeachingFormatDropdown, VwSarTeachingFormatItem, VwSarTeachingFormatList } from './sar-teaching-format.entity';
import { SarTeachingFormatService } from './sar-teaching-format.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([SarTeachingFormat,VwSarTeachingFormatList,VwSarTeachingFormatItem,VwSarTeachingFormatDropdown,
      VwTeacherDropdown,
    ])
  ],
  controllers: [SarTeachingFormatController],
  providers: [SarTeachingFormatService,DropdownService],
  exports: [SarTeachingFormatService,DropdownService]
})
export class SarTeachingFormatModule {}
