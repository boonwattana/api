import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { NationalityController } from './nationality.controller';
import { Nationality, VwNationalityDropdown, VwNationalityItem, VwNationalityList } from './nationality.entity';
import { NationalityService } from './nationality.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Nationality,VwNationalityList,VwNationalityItem,VwNationalityDropdown,
    ])
  ],
  controllers: [NationalityController],
  providers: [NationalityService,DropdownService],
  exports: [NationalityService,DropdownService]
})
export class NationalityModule {}
