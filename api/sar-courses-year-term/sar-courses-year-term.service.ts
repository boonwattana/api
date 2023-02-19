import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarCoursesYearTermDto, SarCoursesYearTermDto, SearchSarCoursesYearTermDto, UpdateSarCoursesYearTermDto } from './sar-courses-year-term.dto';
import { SarCoursesYearTerm, VwSarCoursesYearTermDropdown, VwSarCoursesYearTermItem, VwSarCoursesYearTermList } from './sar-courses-year-term.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { VwYearTermDropdown } from 'src/api/year-term/year-term.entity';
import { SearchYearTermDto } from 'src/api/year-term/year-term.dto';

@Injectable()
export class SarCoursesYearTermService extends BaseService {

    constructor(
        @InjectRepository(SarCoursesYearTerm)
        private readonly sarcoursesyeartermRepository: Repository<SarCoursesYearTerm>,
        @InjectRepository(VwSarCoursesYearTermList)
        private readonly vwSarCoursesYearTermRepository: Repository<VwSarCoursesYearTermList>,
        @InjectRepository(VwSarCoursesYearTermItem)
        private readonly itemRepository:Repository<VwSarCoursesYearTermItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwDropdownYearTermRepository:Repository<VwYearTermDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
      }
    async list(dto:SearchSarCoursesYearTermDto):Promise<SearchResult<VwSarCoursesYearTermList>>{
        const builder = this.createQueryBuider<VwSarCoursesYearTermList>(dto,this.vwSarCoursesYearTermRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarCoursesYearTermList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarCoursesYearTermDto,req:CustomRequest):Promise<SarCoursesYearTerm>{        
        const en = this.toCreateModel(dto,req) as SarCoursesYearTerm  
        return await this.sarcoursesyeartermRepository.save(
            this.sarcoursesyeartermRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarCoursesYearTermDto,req:CustomRequest):Promise<SarCoursesYearTermDto>{
        const m = await this.sarcoursesyeartermRepository.findOne({where:{id:id}})
        return await this.sarcoursesyeartermRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarCoursesYearTermDto>{
        let m = await this.sarcoursesyeartermRepository.findOne({where:{id:id}})
        return await this.sarcoursesyeartermRepository.softRemove(
            await this.sarcoursesyeartermRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    
    async getListByRefIdAndTerm(refIdValue:string,term:string):Promise<VwSarCoursesYearTermItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue,term:term}})
    }
}
