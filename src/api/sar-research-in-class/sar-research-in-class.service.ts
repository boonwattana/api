import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarResearchInClassDto, SarResearchInClassDto, SearchSarResearchInClassDto, UpdateSarResearchInClassDto } from './sar-research-in-class.dto';
import { SarResearchInClass, VwSarResearchInClassDropdown, VwSarResearchInClassItem, VwSarResearchInClassList } from './sar-research-in-class.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarResearchInClassService extends BaseService {

    constructor(
        @InjectRepository(SarResearchInClass)
        private readonly sarresearchinclassRepository: Repository<SarResearchInClass>,
        @InjectRepository(VwSarResearchInClassList)
        private readonly vwSarResearchInClassRepository: Repository<VwSarResearchInClassList>,
        @InjectRepository(VwSarResearchInClassItem)
        private readonly itemRepository:Repository<VwSarResearchInClassItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarResearchInClassDto):Promise<SearchResult<VwSarResearchInClassList>>{
        const builder = this.createQueryBuider<VwSarResearchInClassList>(dto,this.vwSarResearchInClassRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarResearchInClassList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarResearchInClassDto,req:CustomRequest):Promise<SarResearchInClass>{        
        const en = this.toCreateModel(dto,req) as SarResearchInClass  
        return await this.sarresearchinclassRepository.save(
            this.sarresearchinclassRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarResearchInClassDto,req:CustomRequest):Promise<SarResearchInClassDto>{
        const m = await this.sarresearchinclassRepository.findOne({where:{id:id}})
        return await this.sarresearchinclassRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarResearchInClassDto>{
        let m = await this.sarresearchinclassRepository.findOne({where:{id:id}})
        return await this.sarresearchinclassRepository.softRemove(
            await this.sarresearchinclassRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarResearchInClassItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
