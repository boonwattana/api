import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/api/student/student.entity';
import { Teacher } from 'src/api/teacher/teacher.entity';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Images } from '../images/images.entity';
import { ImagesModule } from '../images/images.module';
import { ImagesService } from '../images/images.service';
import { DemoController } from './demo.controller';
import { Demo, VwbStudentByClass, VwbStudentByGendar, VwbTeacherByGendar, VwDemoDropdown, VwDemoItem, VwDemoList } from './demo.entity';
import { DemoService } from './demo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Demo,VwDemoList,VwDemoItem,VwDemoDropdown,VwbTeacherByGendar,VwbStudentByGendar,VwbStudentByClass,Student,Teacher]),
    ImagesModule
  ],
  controllers: [DemoController],
  providers: [DemoService,DropdownService],
  exports: [DemoService,DropdownService]
})
export class DemoModule {}
