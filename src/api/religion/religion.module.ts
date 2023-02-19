import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { ReligionController } from './religion.controller';
import { Religion, VwReligionDropdown, VwReligionItem, VwReligionList } from './religion.entity';
import { ReligionService } from './religion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Religion,VwReligionList,VwReligionItem,VwReligionDropdown,
    ])
  ],
  controllers: [ReligionController],
  providers: [ReligionService,DropdownService],
  exports: [ReligionService,DropdownService]
})
export class ReligionModule {}
