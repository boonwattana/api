import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarAdviseClassController } from './sar-advise-class.controller';
import { SarAdviseClass, VwSarAdviseClassDropdown, VwSarAdviseClassItem, VwSarAdviseClassList } from './sar-advise-class.entity';
import { SarAdviseClassService } from './sar-advise-class.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarAdviseClass,VwSarAdviseClassList,VwSarAdviseClassItem,VwSarAdviseClassDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarAdviseClassController],
  providers: [SarAdviseClassService,DropdownService],
  exports: [SarAdviseClassService,DropdownService]
})
export class SarAdviseClassModule {}
