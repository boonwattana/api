import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { EthnicityController } from './ethnicity.controller';
import { Ethnicity, VwEthnicityDropdown, VwEthnicityItem, VwEthnicityList } from './ethnicity.entity';
import { EthnicityService } from './ethnicity.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ethnicity,VwEthnicityList,VwEthnicityItem,VwEthnicityDropdown,
    ])
  ],
  controllers: [EthnicityController],
  providers: [EthnicityService,DropdownService],
  exports: [EthnicityService,DropdownService]
})
export class EthnicityModule {}
