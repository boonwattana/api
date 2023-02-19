import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SarInvitedSpeakerController } from './sar-invited-speaker.controller';
import { SarInvitedSpeaker, VwSarInvitedSpeakerDropdown, VwSarInvitedSpeakerItem, VwSarInvitedSpeakerList } from './sar-invited-speaker.entity';
import { SarInvitedSpeakerService } from './sar-invited-speaker.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SarInvitedSpeaker,VwSarInvitedSpeakerList,VwSarInvitedSpeakerItem,VwSarInvitedSpeakerDropdown,
    VwTeacherDropdown,
    ])
  ],
  controllers: [SarInvitedSpeakerController],
  providers: [SarInvitedSpeakerService,DropdownService],
  exports: [SarInvitedSpeakerService,DropdownService]
})
export class SarInvitedSpeakerModule {}
