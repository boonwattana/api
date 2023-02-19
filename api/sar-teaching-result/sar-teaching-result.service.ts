import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarTeachingResultDto, SarTeachingResultDto, SearchSarTeachingResultDto, UpdateSarTeachingResultDto } from './sar-teaching-result.dto';
import { SarTeachingResult, VwSarTeachingResultDropdown, VwSarTeachingResultItem, VwSarTeachingResultList } from './sar-teaching-result.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { SearchYearTermDto } from 'src/api/year-term/year-term.dto';

@Injectable()
export class SarTeachingResultService extends BaseService {

    constructor(
        @InjectRepository(SarTeachingResult)
        private readonly sarteachingresultRepository: Repository<SarTeachingResult>,
        @InjectRepository(VwSarTeachingResultList)
        private readonly vwSarTeachingResultRepository: Repository<VwSarTeachingResultList>,
        @InjectRepository(VwSarTeachingResultItem)
        private readonly itemRepository:Repository<VwSarTeachingResultItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwDropdownYearTermRepository:Repository<VwYearTermDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
      }
    async list(dto:SearchSarTeachingResultDto):Promise<SearchResult<VwSarTeachingResultList>>{
        const builder = this.createQueryBuider<VwSarTeachingResultList>(dto,this.vwSarTeachingResultRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarTeachingResultList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarTeachingResultDto,req:CustomRequest):Promise<SarTeachingResult>{        
        const en = this.toCreateModel(dto,req) as SarTeachingResult  
        return await this.sarteachingresultRepository.save(
            this.sarteachingresultRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarTeachingResultDto,req:CustomRequest):Promise<SarTeachingResultDto>{
        const m = await this.sarteachingresultRepository.findOne({where:{id:id}})
        return await this.sarteachingresultRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarTeachingResultDto>{
        let m = await this.sarteachingresultRepository.findOne({where:{id:id}})
        return await this.sarteachingresultRepository.softRemove(
            await this.sarteachingresultRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
}
