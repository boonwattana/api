import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { StudentModule } from '../student/student.module';
import { YearTermController } from './year-term.controller';
import { YearTerm, VwYearTermDropdown, VwYearTermItem, VwYearTermList } from './year-term.entity';
import { YearTermService } from './year-term.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([YearTerm,VwYearTermList,VwYearTermItem,VwYearTermDropdown,
    ]),
  ],
  controllers: [YearTermController],
  providers: [YearTermService,DropdownService],
  exports: [YearTermService,DropdownService]
})
export class YearTermModule {}
