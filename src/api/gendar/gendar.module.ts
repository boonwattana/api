import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { GendarController } from './gendar.controller';
import { Gendar, VwGendarDropdown, VwGendarItem, VwGendarList } from './gendar.entity';
import { GendarService } from './gendar.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Gendar,VwGendarList,VwGendarItem,VwGendarDropdown,
    ])
  ],
  controllers: [GendarController],
  providers: [GendarService,DropdownService],
  exports: [GendarService,DropdownService]
})
export class GendarModule {}
