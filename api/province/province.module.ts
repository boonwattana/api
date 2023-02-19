import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwCountryDropdown } from 'src/api/country/country.entity';
import { ProvinceController } from './province.controller';
import { Province, VwProvinceDropdown, VwProvinceItem, VwProvinceList } from './province.entity';
import { ProvinceService } from './province.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Province,VwProvinceList,VwProvinceItem,VwProvinceDropdown,
    VwCountryDropdown,
    ])
  ],
  controllers: [ProvinceController],
  providers: [ProvinceService,DropdownService],
  exports: [ProvinceService,DropdownService]
})
export class ProvinceModule {}
