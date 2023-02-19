import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarStandard2Controller } from './sar-standard2.controller';
import { SarStandard2, VwSarStandard2Dropdown, VwSarStandard2Item, VwSarStandard2List } from './sar-standard2.entity';
import { SarStandard2Service } from './sar-standard2.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarStandard2,VwSarStandard2List,VwSarStandard2Item,VwSarStandard2Dropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarStandard2Controller],
  providers: [SarStandard2Service,DropdownService],
  exports: [SarStandard2Service,DropdownService]
})
export class SarStandard2Module {}
