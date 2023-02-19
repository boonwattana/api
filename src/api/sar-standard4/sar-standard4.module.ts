import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarStandard4Controller } from './sar-standard4.controller';
import { SarStandard4, VwSarStandard4Dropdown, VwSarStandard4Item, VwSarStandard4List } from './sar-standard4.entity';
import { SarStandard4Service } from './sar-standard4.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarStandard4,VwSarStandard4List,VwSarStandard4Item,VwSarStandard4Dropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarStandard4Controller],
  providers: [SarStandard4Service,DropdownService],
  exports: [SarStandard4Service,DropdownService]
})
export class SarStandard4Module {}
