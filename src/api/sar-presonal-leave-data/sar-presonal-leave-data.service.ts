import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarPresonalLeaveDataDto, SarPresonalLeaveDataDto, SearchSarPresonalLeaveDataDto, UpdateSarPresonalLeaveDataDto } from './sar-presonal-leave-data.dto';
import { SarPresonalLeaveData, VwSarPresonalLeaveDataDropdown, VwSarPresonalLeaveDataItem, VwSarPresonalLeaveDataList } from './sar-presonal-leave-data.entity';
import { SearchTeacherDto } from "src/api/teacher/teacher.dto";
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
@Injectable()
export class SarPresonalLeaveDataService extends BaseService {

    constructor(
        @InjectRepository(SarPresonalLeaveData)
        private readonly sarpresonalleavedataRepository: Repository<SarPresonalLeaveData>,
        @InjectRepository(VwSarPresonalLeaveDataList)
        private readonly vwSarPresonalLeaveDataRepository: Repository<VwSarPresonalLeaveDataList>,
        @InjectRepository(VwSarPresonalLeaveDataItem)
        private readonly itemRepository:Repository<VwSarPresonalLeaveDataItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchSarPresonalLeaveDataDto):Promise<SearchResult<VwSarPresonalLeaveDataList>>{
        const builder = this.createQueryBuider<VwSarPresonalLeaveDataList>(dto,this.vwSarPresonalLeaveDataRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarPresonalLeaveDataList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarPresonalLeaveDataDto,req:CustomRequest):Promise<SarPresonalLeaveData>{        
        const en = this.toCreateModel(dto,req) as SarPresonalLeaveData  
        return await this.sarpresonalleavedataRepository.save(
            this.sarpresonalleavedataRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSarPresonalLeaveDataDto,req:CustomRequest):Promise<SarPresonalLeaveDataDto>{
        const m = await this.sarpresonalleavedataRepository.findOne({where:{id:id}})
        return await this.sarpresonalleavedataRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SarPresonalLeaveDataDto>{
        let m = await this.sarpresonalleavedataRepository.findOne({where:{id:id}})
        return await this.sarpresonalleavedataRepository.softRemove(
            await this.sarpresonalleavedataRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }

      async getListByRefId(refIdValue:string):Promise<VwSarPresonalLeaveDataItem[]>{
        return await this.itemRepository.find({where:{refId:refIdValue}})
    }
}
