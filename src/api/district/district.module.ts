import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwProvinceDropdown } from 'src/api/province/province.entity';
import { DistrictController } from './district.controller';
import { District, VwDistrictDropdown, VwDistrictItem, VwDistrictList } from './district.entity';
import { DistrictService } from './district.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([District,VwDistrictList,VwDistrictItem,VwDistrictDropdown,
    VwProvinceDropdown,
    ])
  ],
  controllers: [DistrictController],
  providers: [DistrictService,DropdownService],
  exports: [DistrictService,DropdownService]
})
export class DistrictModule {}
