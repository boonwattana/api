import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwClassroomTypeDropdown } from 'src/api/classroom-type/classroom-type.entity';
import { ClassroomController } from './classroom.controller';
import { Classroom, VwClassroomDropdown, VwClassroomItem, VwClassroomList } from './classroom.entity';
import { ClassroomService } from './classroom.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Classroom,VwClassroomList,VwClassroomItem,VwClassroomDropdown,
    VwClassroomTypeDropdown,
    ])
  ],
  controllers: [ClassroomController],
  providers: [ClassroomService,DropdownService],
  exports: [ClassroomService,DropdownService]
})
export class ClassroomModule {}
