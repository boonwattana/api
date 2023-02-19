import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarStudentAssignDto, SarStudentAssignDto, SearchSarStudentAssignDto, UpdateSarStudentAssignDto } from './sar-student-assign.dto';
import { SarStudentAssign, VwSarStudentAssignDropdown, VwSarStudentAssignItem, VwSarStudentAssignList } from './sar-student-assign.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';

@Injectable()
export class SarStudentAssignService extends BaseService {

    constructor(
        @InjectRepository(SarStudentAssign)
        private readonly sarstudentassignRepository: Repository<SarStudentAssign>,
        @InjectRepository(VwSarStudentAssignList)
        private readonly vwSarStudentAssignRepository: Repository<VwSarStudentAssignList>,
        @InjectRepository(VwSarStudentAssignItem)
        private readonly itemRepository:Repository<VwSarStudentAssignItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarStudentAssignDto):Promise<SearchResult<VwSarStudentAssignList>>{
        const builder = this.createQueryBuider<VwSarStudentAssignList>(dto,this.vwSarStudentAssignRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarStudentAssignList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarStudentAssignDto,req:CustomRequest):Promise<SarStudentAssign>{        
        const en = this.toCreateModel(dto,req) as SarStudentAssign  
        return await this.sarstudentassignRepository.save(
            this.sarstudentassignRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarStudentAssignDto,req:CustomRequest):Promise<SarStudentAssignDto>{
        const m = await this.sarstudentassignRepository.findOne({where:{id:id}})
        return await this.sarstudentassignRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarStudentAssignDto>{
        let m = await this.sarstudentassignRepository.findOne({where:{id:id}})
        return await this.sarstudentassignRepository.softRemove(
            await this.sarstudentassignRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarStudentAssignItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
