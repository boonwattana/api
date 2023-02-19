import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarQualityEvidenceDto, SarQualityEvidenceDto, SearchSarQualityEvidenceDto, UpdateSarQualityEvidenceDto } from './sar-quality-evidence.dto';
import { SarQualityEvidence, VwSarQualityEvidenceDropdown, VwSarQualityEvidenceItem, VwSarQualityEvidenceList } from './sar-quality-evidence.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarQualityEvidenceService extends BaseService {

    constructor(
        @InjectRepository(SarQualityEvidence)
        private readonly sarqualityevidenceRepository: Repository<SarQualityEvidence>,
        @InjectRepository(VwSarQualityEvidenceList)
        private readonly vwSarQualityEvidenceRepository: Repository<VwSarQualityEvidenceList>,
        @InjectRepository(VwSarQualityEvidenceItem)
        private readonly itemRepository:Repository<VwSarQualityEvidenceItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarQualityEvidenceDto):Promise<SearchResult<VwSarQualityEvidenceList>>{
        const builder = this.createQueryBuider<VwSarQualityEvidenceList>(dto,this.vwSarQualityEvidenceRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarQualityEvidenceList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarQualityEvidenceDto,req:CustomRequest):Promise<SarQualityEvidence>{        
        const en = this.toCreateModel(dto,req) as SarQualityEvidence  
        return await this.sarqualityevidenceRepository.save(
            this.sarqualityevidenceRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarQualityEvidenceDto,req:CustomRequest):Promise<SarQualityEvidenceDto>{
        const m = await this.sarqualityevidenceRepository.findOne({where:{id:id}})
        return await this.sarqualityevidenceRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarQualityEvidenceDto>{
        let m = await this.sarqualityevidenceRepository.findOne({where:{id:id}})
        return await this.sarqualityevidenceRepository.softRemove(
            await this.sarqualityevidenceRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefIdAndFilter(refIdValue:string,standard_type:number,evidenceType:number):Promise<any>{
        return await this.itemRepository.find({where:{refId:refIdValue,standard_type:standard_type,evidenceType:evidenceType}})
    }
}
