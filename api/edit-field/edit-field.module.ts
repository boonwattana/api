import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { EditFieldController } from './edit-field.controller';
import { EditField, VwEditFieldDropdown, VwEditFieldItem, VwEditFieldList } from './edit-field.entity';
import { EditFieldService } from './edit-field.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EditField,VwEditFieldList,VwEditFieldItem,VwEditFieldDropdown,
    ])
  ],
  controllers: [EditFieldController],
  providers: [EditFieldService,DropdownService],
  exports: [EditFieldService,DropdownService]
})
export class EditFieldModule {}
