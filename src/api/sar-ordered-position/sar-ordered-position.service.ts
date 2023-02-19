import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarOrderedPositionDto, SarOrderedPositionDto, SearchSarOrderedPositionDto, UpdateSarOrderedPositionDto } from './sar-ordered-position.dto';
import { SarOrderedPosition, VwSarOrderedPositionDropdown, VwSarOrderedPositionItem, VwSarOrderedPositionList } from './sar-ordered-position.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarOrderedPositionService extends BaseService {

    constructor(
        @InjectRepository(SarOrderedPosition)
        private readonly sarorderedpositionRepository: Repository<SarOrderedPosition>,
        @InjectRepository(VwSarOrderedPositionList)
        private readonly vwSarOrderedPositionRepository: Repository<VwSarOrderedPositionList>,
        @InjectRepository(VwSarOrderedPositionItem)
        private readonly itemRepository:Repository<VwSarOrderedPositionItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarOrderedPositionDto):Promise<SearchResult<VwSarOrderedPositionList>>{
        const builder = this.createQueryBuider<VwSarOrderedPositionList>(dto,this.vwSarOrderedPositionRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarOrderedPositionList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarOrderedPositionDto,req:CustomRequest):Promise<SarOrderedPosition>{        
        const en = this.toCreateModel(dto,req) as SarOrderedPosition  
        return await this.sarorderedpositionRepository.save(
            this.sarorderedpositionRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarOrderedPositionDto,req:CustomRequest):Promise<SarOrderedPositionDto>{
        const m = await this.sarorderedpositionRepository.findOne({where:{id:id}})
        return await this.sarorderedpositionRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarOrderedPositionDto>{
        let m = await this.sarorderedpositionRepository.findOne({where:{id:id}})
        return await this.sarorderedpositionRepository.softRemove(
            await this.sarorderedpositionRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarOrderedPositionItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
