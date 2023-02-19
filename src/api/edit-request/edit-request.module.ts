import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwEditFieldDropdown } from 'src/api/edit-field/edit-field.entity';
import { EditRequestController } from './edit-request.controller';
import { EditRequest, VwEditRequestDropdown, VwEditRequestItem, VwEditRequestList } from './edit-request.entity';
import { EditRequestService } from './edit-request.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EditRequest,VwEditRequestList,VwEditRequestItem,VwEditRequestDropdown,
    VwEditFieldDropdown,
    ])
  ],
  controllers: [EditRequestController],
  providers: [EditRequestService,DropdownService],
  exports: [EditRequestService,DropdownService]
})
export class EditRequestModule {}
