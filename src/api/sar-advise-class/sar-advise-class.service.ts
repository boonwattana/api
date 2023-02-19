import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarAdviseClassDto, SarAdviseClassDto, SearchSarAdviseClassDto, UpdateSarAdviseClassDto } from './sar-advise-class.dto';
import { SarAdviseClass, VwSarAdviseClassDropdown, VwSarAdviseClassItem, VwSarAdviseClassList } from './sar-advise-class.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarAdviseClassService extends BaseService {

    constructor(
        @InjectRepository(SarAdviseClass)
        private readonly saradviseclassRepository: Repository<SarAdviseClass>,
        @InjectRepository(VwSarAdviseClassList)
        private readonly vwSarAdviseClassRepository: Repository<VwSarAdviseClassList>,
        @InjectRepository(VwSarAdviseClassItem)
        private readonly itemRepository:Repository<VwSarAdviseClassItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarAdviseClassDto):Promise<SearchResult<VwSarAdviseClassList>>{
        const builder = this.createQueryBuider<VwSarAdviseClassList>(dto,this.vwSarAdviseClassRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarAdviseClassList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarAdviseClassDto,req:CustomRequest):Promise<SarAdviseClass>{        
        const en = this.toCreateModel(dto,req) as SarAdviseClass  
        return await this.saradviseclassRepository.save(
            this.saradviseclassRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarAdviseClassDto,req:CustomRequest):Promise<SarAdviseClassDto>{
        const m = await this.saradviseclassRepository.findOne({where:{id:id}})
        return await this.saradviseclassRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarAdviseClassDto>{
        let m = await this.saradviseclassRepository.findOne({where:{id:id}})
        return await this.saradviseclassRepository.softRemove(
            await this.saradviseclassRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarAdviseClassItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
