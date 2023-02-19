import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarUploadImgController } from './sar-upload-img.controller';
import { SarUploadImg, VwSarUploadImgDropdown, VwSarUploadImgItem, VwSarUploadImgList } from './sar-upload-img.entity';
import { SarUploadImgService } from './sar-upload-img.service';
import { ImagesService } from 'src/core/images/images.service';
import { ImagesModule } from 'src/core/images/images.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([SarUploadImg,VwSarUploadImgList,VwSarUploadImgItem,VwSarUploadImgDropdown,
    VwTeacherDropdown,
    ]),ImagesModule
  ],
  controllers: [SarUploadImgController],
  providers: [SarUploadImgService,DropdownService],
  exports: [SarUploadImgService,DropdownService]
})
export class SarUploadImgModule {}
