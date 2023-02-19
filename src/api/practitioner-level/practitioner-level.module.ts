import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { PractitionerLevelController } from './practitioner-level.controller';
import { PractitionerLevel, VwPractitionerLevelDropdown, VwPractitionerLevelItem, VwPractitionerLevelList } from './practitioner-level.entity';
import { PractitionerLevelService } from './practitioner-level.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PractitionerLevel,VwPractitionerLevelList,VwPractitionerLevelItem,VwPractitionerLevelDropdown,
    ])
  ],
  controllers: [PractitionerLevelController],
  providers: [PractitionerLevelService,DropdownService],
  exports: [PractitionerLevelService,DropdownService]
})
export class PractitionerLevelModule {}
