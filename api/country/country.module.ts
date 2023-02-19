import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { CountryController } from './country.controller';
import { Country, VwCountryDropdown, VwCountryItem, VwCountryList } from './country.entity';
import { CountryService } from './country.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Country,VwCountryList,VwCountryItem,VwCountryDropdown,
    ])
  ],
  controllers: [CountryController],
  providers: [CountryService,DropdownService],
  exports: [CountryService,DropdownService]
})
export class CountryModule {}
