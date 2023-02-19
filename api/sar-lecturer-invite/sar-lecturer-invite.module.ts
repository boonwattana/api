import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarLecturerInviteController } from './sar-lecturer-invite.controller';
import { SarLecturerInvite, VwSarLecturerInviteDropdown, VwSarLecturerInviteItem, VwSarLecturerInviteList } from './sar-lecturer-invite.entity';
import { SarLecturerInviteService } from './sar-lecturer-invite.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarLecturerInvite,VwSarLecturerInviteList,VwSarLecturerInviteItem,VwSarLecturerInviteDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarLecturerInviteController],
  providers: [SarLecturerInviteService,DropdownService],
  exports: [SarLecturerInviteService,DropdownService]
})
export class SarLecturerInviteModule {}
