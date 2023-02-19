import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarInvitedSpeakerDto, SarInvitedSpeakerDto, SearchSarInvitedSpeakerDto, UpdateSarInvitedSpeakerDto } from './sar-invited-speaker.dto';
import { SarInvitedSpeaker, VwSarInvitedSpeakerDropdown, VwSarInvitedSpeakerItem, VwSarInvitedSpeakerList } from './sar-invited-speaker.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarInvitedSpeakerService extends BaseService {

    constructor(
        @InjectRepository(SarInvitedSpeaker)
        private readonly sarinvitedspeakerRepository: Repository<SarInvitedSpeaker>,
        @InjectRepository(VwSarInvitedSpeakerList)
        private readonly vwSarInvitedSpeakerRepository: Repository<VwSarInvitedSpeakerList>,
        @InjectRepository(VwSarInvitedSpeakerItem)
        private readonly itemRepository:Repository<VwSarInvitedSpeakerItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarInvitedSpeakerDto):Promise<SearchResult<VwSarInvitedSpeakerList>>{
        const builder = this.createQueryBuider<VwSarInvitedSpeakerList>(dto,this.vwSarInvitedSpeakerRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarInvitedSpeakerList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarInvitedSpeakerDto,req:CustomRequest):Promise<SarInvitedSpeaker>{        
        const en = this.toCreateModel(dto,req) as SarInvitedSpeaker  
        return await this.sarinvitedspeakerRepository.save(
            this.sarinvitedspeakerRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarInvitedSpeakerDto,req:CustomRequest):Promise<SarInvitedSpeakerDto>{
        const m = await this.sarinvitedspeakerRepository.findOne({where:{id:id}})
        return await this.sarinvitedspeakerRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarInvitedSpeakerDto>{
        let m = await this.sarinvitedspeakerRepository.findOne({where:{id:id}})
        return await this.sarinvitedspeakerRepository.softRemove(
            await this.sarinvitedspeakerRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarInvitedSpeakerItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
