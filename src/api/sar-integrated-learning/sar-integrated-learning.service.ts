import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarIntegratedLearningDto, SarIntegratedLearningDto, SearchSarIntegratedLearningDto, UpdateSarIntegratedLearningDto } from './sar-integrated-learning.dto';
import { SarIntegratedLearning, VwSarIntegratedLearningDropdown, VwSarIntegratedLearningItem, VwSarIntegratedLearningList } from './sar-integrated-learning.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarIntegratedLearningService extends BaseService {

    constructor(
        @InjectRepository(SarIntegratedLearning)
        private readonly sarintegratedlearningRepository: Repository<SarIntegratedLearning>,
        @InjectRepository(VwSarIntegratedLearningList)
        private readonly vwSarIntegratedLearningRepository: Repository<VwSarIntegratedLearningList>,
        @InjectRepository(VwSarIntegratedLearningItem)
        private readonly itemRepository:Repository<VwSarIntegratedLearningItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarIntegratedLearningDto):Promise<SearchResult<VwSarIntegratedLearningList>>{
        const builder = this.createQueryBuider<VwSarIntegratedLearningList>(dto,this.vwSarIntegratedLearningRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarIntegratedLearningList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarIntegratedLearningDto,req:CustomRequest):Promise<SarIntegratedLearning>{        
        const en = this.toCreateModel(dto,req) as SarIntegratedLearning  
        return await this.sarintegratedlearningRepository.save(
            this.sarintegratedlearningRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarIntegratedLearningDto,req:CustomRequest):Promise<SarIntegratedLearningDto>{
        const m = await this.sarintegratedlearningRepository.findOne({where:{id:id}})
        return await this.sarintegratedlearningRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarIntegratedLearningDto>{
        let m = await this.sarintegratedlearningRepository.findOne({where:{id:id}})
        return await this.sarintegratedlearningRepository.softRemove(
            await this.sarintegratedlearningRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarIntegratedLearningItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
