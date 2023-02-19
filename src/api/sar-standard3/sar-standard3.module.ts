import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarStandard3Controller } from './sar-standard3.controller';
import { SarStandard3, VwSarStandard3Dropdown, VwSarStandard3Item, VwSarStandard3List } from './sar-standard3.entity';
import { SarStandard3Service } from './sar-standard3.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarStandard3,VwSarStandard3List,VwSarStandard3Item,VwSarStandard3Dropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarStandard3Controller],
  providers: [SarStandard3Service,DropdownService],
  exports: [SarStandard3Service,DropdownService]
})
export class SarStandard3Module {}
