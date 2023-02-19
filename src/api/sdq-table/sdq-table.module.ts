import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { SdqTableController } from './sdq-table.controller';
import { SdqTable, VwSdqTableDropdown, VwSdqTableItem, VwSdqTableList } from './sdq-table.entity';
import { SdqTableService } from './sdq-table.service';
import { VwClassroomDropdown } from 'src/api/classroom/classroom.entity';
import { VwClassroomTypeDropdown } from 'src/api/classroom-type/classroom-type.entity';
import { VwStudentItem ,VwSdqTableListForTeacher,VwSdqTableListForParent,VwSdqTableListForStudent, VwStudentDropdown} from 'src/api/student/student.entity';
import { VwYearTermDropdown, VwYearTermItem } from 'src/api/year-term/year-term.entity';
import { VwTeacherItem } from "src/api/teacher/teacher.entity";
@Module({
  imports: [
    TypeOrmModule.forFeature([SdqTable,VwSdqTableList,VwSdqTableItem,VwSdqTableDropdown,VwClassroomDropdown,VwClassroomTypeDropdown
    ,VwStudentItem,VwYearTermItem,VwSdqTableListForTeacher,VwSdqTableListForParent,VwSdqTableListForStudent,VwTeacherItem,VwStudentDropdown,VwYearTermDropdown])
  ],
  controllers: [SdqTableController],
  providers: [SdqTableService,DropdownService],
  exports: [SdqTableService,DropdownService]
})
export class SdqTableModule {}
