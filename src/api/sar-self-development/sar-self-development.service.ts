import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarSelfDevelopmentDto, SarSelfDevelopmentDto, SearchSarSelfDevelopmentDto, UpdateSarSelfDevelopmentDto } from './sar-self-development.dto';
import { SarSelfDevelopment, VwSarSelfDevelopmentDropdown, VwSarSelfDevelopmentItem, VwSarSelfDevelopmentList } from './sar-self-development.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarSelfDevelopmentService extends BaseService {

    constructor(
        @InjectRepository(SarSelfDevelopment)
        private readonly sarselfdevelopmentRepository: Repository<SarSelfDevelopment>,
        @InjectRepository(VwSarSelfDevelopmentList)
        private readonly vwSarSelfDevelopmentRepository: Repository<VwSarSelfDevelopmentList>,
        @InjectRepository(VwSarSelfDevelopmentItem)
        private readonly itemRepository:Repository<VwSarSelfDevelopmentItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarSelfDevelopmentDto):Promise<SearchResult<VwSarSelfDevelopmentList>>{
        const builder = this.createQueryBuider<VwSarSelfDevelopmentList>(dto,this.vwSarSelfDevelopmentRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarSelfDevelopmentList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarSelfDevelopmentDto,req:CustomRequest):Promise<SarSelfDevelopment>{        
        const en = this.toCreateModel(dto,req) as SarSelfDevelopment  
        return await this.sarselfdevelopmentRepository.save(
            this.sarselfdevelopmentRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarSelfDevelopmentDto,req:CustomRequest):Promise<SarSelfDevelopmentDto>{
        const m = await this.sarselfdevelopmentRepository.findOne({where:{id:id}})
        return await this.sarselfdevelopmentRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarSelfDevelopmentDto>{
        let m = await this.sarselfdevelopmentRepository.findOne({where:{id:id}})
        return await this.sarselfdevelopmentRepository.softRemove(
            await this.sarselfdevelopmentRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarSelfDevelopmentItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
