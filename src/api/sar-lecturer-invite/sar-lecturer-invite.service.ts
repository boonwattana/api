import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarLecturerInviteDto, SarLecturerInviteDto, SearchSarLecturerInviteDto, UpdateSarLecturerInviteDto } from './sar-lecturer-invite.dto';
import { SarLecturerInvite, VwSarLecturerInviteDropdown, VwSarLecturerInviteItem, VwSarLecturerInviteList } from './sar-lecturer-invite.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarLecturerInviteService extends BaseService {

    constructor(
        @InjectRepository(SarLecturerInvite)
        private readonly sarlecturerinviteRepository: Repository<SarLecturerInvite>,
        @InjectRepository(VwSarLecturerInviteList)
        private readonly vwSarLecturerInviteRepository: Repository<VwSarLecturerInviteList>,
        @InjectRepository(VwSarLecturerInviteItem)
        private readonly itemRepository:Repository<VwSarLecturerInviteItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarLecturerInviteDto):Promise<SearchResult<VwSarLecturerInviteList>>{
        const builder = this.createQueryBuider<VwSarLecturerInviteList>(dto,this.vwSarLecturerInviteRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarLecturerInviteList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarLecturerInviteDto,req:CustomRequest):Promise<SarLecturerInvite>{        
        const en = this.toCreateModel(dto,req) as SarLecturerInvite  
        return await this.sarlecturerinviteRepository.save(
            this.sarlecturerinviteRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarLecturerInviteDto,req:CustomRequest):Promise<SarLecturerInviteDto>{
        const m = await this.sarlecturerinviteRepository.findOne({where:{id:id}})
        return await this.sarlecturerinviteRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarLecturerInviteDto>{
        let m = await this.sarlecturerinviteRepository.findOne({where:{id:id}})
        return await this.sarlecturerinviteRepository.softRemove(
            await this.sarlecturerinviteRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarLecturerInviteItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
