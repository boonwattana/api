import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarStudentEstimateTeachingDto, SarStudentEstimateTeachingDto, SearchSarStudentEstimateTeachingDto, UpdateSarStudentEstimateTeachingDto } from './sar-student-estimate-teaching.dto';
import { SarStudentEstimateTeaching, VwSarStudentEstimateTeachingDropdown, VwSarStudentEstimateTeachingItem, VwSarStudentEstimateTeachingList } from './sar-student-estimate-teaching.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarStudentEstimateTeachingService extends BaseService {

    constructor(
        @InjectRepository(SarStudentEstimateTeaching)
        private readonly sarstudentestimateteachingRepository: Repository<SarStudentEstimateTeaching>,
        @InjectRepository(VwSarStudentEstimateTeachingList)
        private readonly vwSarStudentEstimateTeachingRepository: Repository<VwSarStudentEstimateTeachingList>,
        @InjectRepository(VwSarStudentEstimateTeachingItem)
        private readonly itemRepository:Repository<VwSarStudentEstimateTeachingItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarStudentEstimateTeachingDto):Promise<SearchResult<VwSarStudentEstimateTeachingList>>{
        const builder = this.createQueryBuider<VwSarStudentEstimateTeachingList>(dto,this.vwSarStudentEstimateTeachingRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarStudentEstimateTeachingList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarStudentEstimateTeachingDto,req:CustomRequest):Promise<SarStudentEstimateTeaching>{        
        const en = this.toCreateModel(dto,req) as SarStudentEstimateTeaching  
        return await this.sarstudentestimateteachingRepository.save(
            this.sarstudentestimateteachingRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarStudentEstimateTeachingDto,req:CustomRequest):Promise<SarStudentEstimateTeachingDto>{
        const m = await this.sarstudentestimateteachingRepository.findOne({where:{id:id}})
        return await this.sarstudentestimateteachingRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarStudentEstimateTeachingDto>{
        let m = await this.sarstudentestimateteachingRepository.findOne({where:{id:id}})
        return await this.sarstudentestimateteachingRepository.softRemove(
            await this.sarstudentestimateteachingRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getItemByRefId(refIdValue:string):Promise<VwSarStudentEstimateTeachingItem>{
        return await this.itemRepository.findOne({where:{refId:refIdValue}})
    }
}
