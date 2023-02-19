import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { CurriculumController } from './curriculum.controller';
import { Curriculum, VwCurriculumDropdown, VwCurriculumItem, VwCurriculumList } from './curriculum.entity';
import { CurriculumService } from './curriculum.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Curriculum,VwCurriculumList,VwCurriculumItem,VwCurriculumDropdown,
    ])
  ],
  controllers: [CurriculumController],
  providers: [CurriculumService,DropdownService],
  exports: [CurriculumService,DropdownService]
})
export class CurriculumModule {}
