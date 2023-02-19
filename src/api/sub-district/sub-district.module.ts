import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwDistrictDropdown } from 'src/api/district/district.entity';
import { SubDistrictController } from './sub-district.controller';
import { SubDistrict, VwSubDistrictDropdown, VwSubDistrictItem, VwSubDistrictList } from './sub-district.entity';
import { SubDistrictService } from './sub-district.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubDistrict,VwSubDistrictList,VwSubDistrictItem,VwSubDistrictDropdown,
    VwDistrictDropdown,
    ])
  ],
  controllers: [SubDistrictController],
  providers: [SubDistrictService,DropdownService],
  exports: [SubDistrictService,DropdownService]
})
export class SubDistrictModule {}
