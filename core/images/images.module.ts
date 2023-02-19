import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { ImagesController } from './images.controller';
import { Images } from './images.entity';
import { ImagesService } from './images.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Images])
  ],
  controllers:[ImagesController],
  providers: [ImagesService],
  exports: [ImagesService]
})
export class ImagesModule {}
