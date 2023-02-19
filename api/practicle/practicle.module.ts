import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { PracticleController } from './practicle.controller';
import { Practicle, VwPracticleDropdown, VwPracticleItem, VwPracticleList } from './practicle.entity';
import { PracticleService } from './practicle.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Practicle,VwPracticleList,VwPracticleItem,VwPracticleDropdown,
    ])
  ],
  controllers: [PracticleController],
  providers: [PracticleService,DropdownService],
  exports: [PracticleService,DropdownService]
})
export class PracticleModule {}
