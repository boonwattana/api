import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarTeachingFormatDto, SarTeachingFormatDto, SearchSarTeachingFormatDto, UpdateSarTeachingFormatDto } from './sar-teaching-format.dto';
import { SarTeachingFormat, VwSarTeachingFormatDropdown, VwSarTeachingFormatItem, VwSarTeachingFormatList } from './sar-teaching-format.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
@Injectable()
export class SarTeachingFormatService extends BaseService {

    constructor(
        @InjectRepository(SarTeachingFormat)
        private readonly sarteachingformatRepository: Repository<SarTeachingFormat>,
        @InjectRepository(VwSarTeachingFormatList)
        private readonly vwSarTeachingFormatRepository: Repository<VwSarTeachingFormatList>,
        @InjectRepository(VwSarTeachingFormatItem)
        private readonly itemRepository:Repository<VwSarTeachingFormatItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchSarTeachingFormatDto):Promise<SearchResult<VwSarTeachingFormatList>>{
        const builder = this.createQueryBuider<VwSarTeachingFormatList>(dto,this.vwSarTeachingFormatRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarTeachingFormatList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarTeachingFormatDto,req:CustomRequest):Promise<SarTeachingFormat>{        
        const en = this.toCreateModel(dto,req) as SarTeachingFormat  
        return await this.sarteachingformatRepository.save(
            this.sarteachingformatRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarTeachingFormatDto,req:CustomRequest):Promise<SarTeachingFormatDto>{
        const m = await this.sarteachingformatRepository.findOne({where:{id:id}})
        return await this.sarteachingformatRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarTeachingFormatDto>{
        let m = await this.sarteachingformatRepository.findOne({where:{id:id}})
        return await this.sarteachingformatRepository.softRemove(
            await this.sarteachingformatRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
      async getItemByRefId(refIdValue:string):Promise<VwSarTeachingFormatItem>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
