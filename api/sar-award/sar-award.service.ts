import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarAwardDto, SarAwardDto, SearchSarAwardDto, UpdateSarAwardDto } from './sar-award.dto';
import { SarAward, VwSarAwardDropdown, VwSarAwardItem, VwSarAwardList } from './sar-award.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarAwardService extends BaseService {

    constructor(
        @InjectRepository(SarAward)
        private readonly sarawardRepository: Repository<SarAward>,
        @InjectRepository(VwSarAwardList)
        private readonly vwSarAwardRepository: Repository<VwSarAwardList>,
        @InjectRepository(VwSarAwardItem)
        private readonly itemRepository:Repository<VwSarAwardItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarAwardDto):Promise<SearchResult<VwSarAwardList>>{
        const builder = this.createQueryBuider<VwSarAwardList>(dto,this.vwSarAwardRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarAwardList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarAwardDto,req:CustomRequest):Promise<SarAward>{        
        const en = this.toCreateModel(dto,req) as SarAward  
        return await this.sarawardRepository.save(
            this.sarawardRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarAwardDto,req:CustomRequest):Promise<SarAwardDto>{
        const m = await this.sarawardRepository.findOne({where:{id:id}})
        return await this.sarawardRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarAwardDto>{
        let m = await this.sarawardRepository.findOne({where:{id:id}})
        return await this.sarawardRepository.softRemove(
            await this.sarawardRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarAwardItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
