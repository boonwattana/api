import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarSelfDevelopmentController } from './sar-self-development.controller';
import { SarSelfDevelopment, VwSarSelfDevelopmentDropdown, VwSarSelfDevelopmentItem, VwSarSelfDevelopmentList } from './sar-self-development.entity';
import { SarSelfDevelopmentService } from './sar-self-development.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarSelfDevelopment,VwSarSelfDevelopmentList,VwSarSelfDevelopmentItem,VwSarSelfDevelopmentDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarSelfDevelopmentController],
  providers: [SarSelfDevelopmentService,DropdownService],
  exports: [SarSelfDevelopmentService,DropdownService]
})
export class SarSelfDevelopmentModule {}
