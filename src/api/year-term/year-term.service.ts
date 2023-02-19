import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { StudentService } from '../student/student.service';
import { CreateYearTermDto, YearTermDto, SearchYearTermDto, UpdateYearTermDto } from './year-term.dto';
import { YearTerm, VwYearTermDropdown, VwYearTermItem, VwYearTermList } from './year-term.entity';

@Injectable()
export class YearTermService extends BaseService {

    constructor(
        @InjectRepository(YearTerm)
        private readonly yeartermRepository: Repository<YearTerm>,
        @InjectRepository(VwYearTermList)
        private readonly vwYearTermRepository: Repository<VwYearTermList>,
        @InjectRepository(VwYearTermItem)
        private readonly itemRepository:Repository<VwYearTermItem>,
        private readonly dropdownService: DropdownService,

        ){
        super()
    }
    async list(dto:SearchYearTermDto):Promise<SearchResult<VwYearTermList>>{
        const builder = this.createQueryBuider<VwYearTermList>(dto,this.vwYearTermRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwYearTermList>(dto.paginator,count,data);
    }
    async create(dto:CreateYearTermDto,req:CustomRequest):Promise<YearTerm>{        
        if(dto.isParent){
            await this.yeartermRepository.update({active:true},{isParent:false})
        }
        const en = this.toCreateModel(dto,req) as YearTerm  
        return await this.yeartermRepository.save(
            this.yeartermRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateYearTermDto,req:CustomRequest):Promise<YearTermDto>{
        const m = await this.yeartermRepository.findOne({where:{id:id}})
        return await this.yeartermRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<YearTermDto>{
        let m = await this.yeartermRepository.findOne({where:{id:id}})
        return await this.yeartermRepository.softRemove(
            await this.yeartermRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async findCurrrentTerm(){
        return this.itemRepository.findOne({where:{isParent:true}})
    }
    
}
