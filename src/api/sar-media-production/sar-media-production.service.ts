import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarMediaProductionDto, SarMediaProductionDto, SearchSarMediaProductionDto, UpdateSarMediaProductionDto } from './sar-media-production.dto';
import { SarMediaProduction, VwSarMediaProductionDropdown, VwSarMediaProductionItem, VwSarMediaProductionList } from './sar-media-production.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarMediaProductionService extends BaseService {

    constructor(
        @InjectRepository(SarMediaProduction)
        private readonly sarmediaproductionRepository: Repository<SarMediaProduction>,
        @InjectRepository(VwSarMediaProductionList)
        private readonly vwSarMediaProductionRepository: Repository<VwSarMediaProductionList>,
        @InjectRepository(VwSarMediaProductionItem)
        private readonly itemRepository:Repository<VwSarMediaProductionItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarMediaProductionDto):Promise<SearchResult<VwSarMediaProductionList>>{
        const builder = this.createQueryBuider<VwSarMediaProductionList>(dto,this.vwSarMediaProductionRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarMediaProductionList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarMediaProductionDto,req:CustomRequest):Promise<SarMediaProduction>{        
        const en = this.toCreateModel(dto,req) as SarMediaProduction  
        return await this.sarmediaproductionRepository.save(
            this.sarmediaproductionRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarMediaProductionDto,req:CustomRequest):Promise<SarMediaProductionDto>{
        const m = await this.sarmediaproductionRepository.findOne({where:{id:id}})
        return await this.sarmediaproductionRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarMediaProductionDto>{
        let m = await this.sarmediaproductionRepository.findOne({where:{id:id}})
        return await this.sarmediaproductionRepository.softRemove(
            await this.sarmediaproductionRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarMediaProductionItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
