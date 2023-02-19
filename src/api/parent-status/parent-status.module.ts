import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { ParentStatusController } from './parent-status.controller';
import { ParentStatus, VwParentStatusDropdown, VwParentStatusItem, VwParentStatusList } from './parent-status.entity';
import { ParentStatusService } from './parent-status.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParentStatus,VwParentStatusList,VwParentStatusItem,VwParentStatusDropdown,
    ])
  ],
  controllers: [ParentStatusController],
  providers: [ParentStatusService,DropdownService],
  exports: [ParentStatusService,DropdownService]
})
export class ParentStatusModule {}
