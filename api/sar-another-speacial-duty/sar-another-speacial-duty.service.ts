import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarAnotherSpeacialDutyDto, SarAnotherSpeacialDutyDto, SearchSarAnotherSpeacialDutyDto, UpdateSarAnotherSpeacialDutyDto } from './sar-another-speacial-duty.dto';
import { SarAnotherSpeacialDuty, VwSarAnotherSpeacialDutyDropdown, VwSarAnotherSpeacialDutyItem, VwSarAnotherSpeacialDutyList } from './sar-another-speacial-duty.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarAnotherSpeacialDutyService extends BaseService {

    constructor(
        @InjectRepository(SarAnotherSpeacialDuty)
        private readonly saranotherspeacialdutyRepository: Repository<SarAnotherSpeacialDuty>,
        @InjectRepository(VwSarAnotherSpeacialDutyList)
        private readonly vwSarAnotherSpeacialDutyRepository: Repository<VwSarAnotherSpeacialDutyList>,
        @InjectRepository(VwSarAnotherSpeacialDutyItem)
        private readonly itemRepository:Repository<VwSarAnotherSpeacialDutyItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarAnotherSpeacialDutyDto):Promise<SearchResult<VwSarAnotherSpeacialDutyList>>{
        const builder = this.createQueryBuider<VwSarAnotherSpeacialDutyList>(dto,this.vwSarAnotherSpeacialDutyRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarAnotherSpeacialDutyList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarAnotherSpeacialDutyDto,req:CustomRequest):Promise<SarAnotherSpeacialDuty>{        
        const en = this.toCreateModel(dto,req) as SarAnotherSpeacialDuty  
        return await this.saranotherspeacialdutyRepository.save(
            this.saranotherspeacialdutyRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarAnotherSpeacialDutyDto,req:CustomRequest):Promise<SarAnotherSpeacialDutyDto>{
        const m = await this.saranotherspeacialdutyRepository.findOne({where:{id:id}})
        return await this.saranotherspeacialdutyRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarAnotherSpeacialDutyDto>{
        let m = await this.saranotherspeacialdutyRepository.findOne({where:{id:id}})
        return await this.saranotherspeacialdutyRepository.softRemove(
            await this.saranotherspeacialdutyRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarAnotherSpeacialDutyItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
