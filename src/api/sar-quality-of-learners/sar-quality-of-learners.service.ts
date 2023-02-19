import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarQualityOfLearnersDto, SarQualityOfLearnersDto, SearchSarQualityOfLearnersDto, UpdateSarQualityOfLearnersDto } from './sar-quality-of-learners.dto';
import { SarQualityOfLearners, VwSarQualityOfLearnersDropdown, VwSarQualityOfLearnersItem, VwSarQualityOfLearnersList } from './sar-quality-of-learners.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarQualityOfLearnersService extends BaseService {

    constructor(
        @InjectRepository(SarQualityOfLearners)
        private readonly sarqualityoflearnersRepository: Repository<SarQualityOfLearners>,
        @InjectRepository(VwSarQualityOfLearnersList)
        private readonly vwSarQualityOfLearnersRepository: Repository<VwSarQualityOfLearnersList>,
        @InjectRepository(VwSarQualityOfLearnersItem)
        private readonly itemRepository:Repository<VwSarQualityOfLearnersItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarQualityOfLearnersDto):Promise<SearchResult<VwSarQualityOfLearnersList>>{
        const builder = this.createQueryBuider<VwSarQualityOfLearnersList>(dto,this.vwSarQualityOfLearnersRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarQualityOfLearnersList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarQualityOfLearnersDto,req:CustomRequest):Promise<SarQualityOfLearners>{        
        const en = this.toCreateModel(dto,req) as SarQualityOfLearners  
        return await this.sarqualityoflearnersRepository.save(
            this.sarqualityoflearnersRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarQualityOfLearnersDto,req:CustomRequest):Promise<SarQualityOfLearnersDto>{
        const m = await this.sarqualityoflearnersRepository.findOne({where:{id:id}})
        return await this.sarqualityoflearnersRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarQualityOfLearnersDto>{
        let m = await this.sarqualityoflearnersRepository.findOne({where:{id:id}})
        return await this.sarqualityoflearnersRepository.softRemove(
            await this.sarqualityoflearnersRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getItemByRefId(refIdValue:string):Promise<VwSarQualityOfLearnersItem>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
