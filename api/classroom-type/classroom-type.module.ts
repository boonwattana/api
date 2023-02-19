import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { ClassroomTypeController } from './classroom-type.controller';
import { ClassroomType, VwClassroomTypeDropdown, VwClassroomTypeItem, VwClassroomTypeList } from './classroom-type.entity';
import { ClassroomTypeService } from './classroom-type.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClassroomType,VwClassroomTypeList,VwClassroomTypeItem,VwClassroomTypeDropdown,
    ])
  ],
  controllers: [ClassroomTypeController],
  providers: [ClassroomTypeService,DropdownService],
  exports: [ClassroomTypeService,DropdownService]
})
export class ClassroomTypeModule {}
