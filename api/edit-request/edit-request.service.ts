import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateEditRequestDto, EditRequestDto, SearchEditRequestDto, UpdateEditRequestDto } from './edit-request.dto';
import { EditRequest, VwEditRequestDropdown, VwEditRequestItem, VwEditRequestList } from './edit-request.entity';
import { VwEditFieldDropdown } from 'src/api/edit-field/edit-field.entity';
import { SearchEditFieldDto } from 'src/api/edit-field/edit-field.dto';
import { EditRequestStatus } from 'src/core/shared/constans/enum-constans';

@Injectable()
export class EditRequestService extends BaseService {

    constructor(
        @InjectRepository(EditRequest)
        private readonly editrequestRepository: Repository<EditRequest>,
        @InjectRepository(VwEditRequestList)
        private readonly vwEditRequestRepository: Repository<VwEditRequestList>,
        @InjectRepository(VwEditRequestItem)
        private readonly itemRepository:Repository<VwEditRequestItem>,
        @InjectRepository(VwEditFieldDropdown)
        private readonly vwDropdownEditFieldRepository:Repository<VwEditFieldDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async editFieldDropdown(dto: SearchEditFieldDto):Promise<SelectItems[]> {
        return this.dropdownService.editFieldDropdown(dto,this.vwDropdownEditFieldRepository);
      }
    async list(dto:SearchEditRequestDto):Promise<SearchResult<VwEditRequestList>>{
        const builder = this.createQueryBuider<VwEditRequestList>(dto,this.vwEditRequestRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwEditRequestList>(dto.paginator,count,data);
    }
    async create(dto:CreateEditRequestDto,req:CustomRequest):Promise<EditRequest>{    
        dto.requestId = req.user.id
        const en = this.toCreateModel(dto,req) as EditRequest          
        return this.editrequestRepository.save(
            this.editrequestRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateEditRequestDto,req:CustomRequest):Promise<EditRequestDto>{
        const m = await this.editrequestRepository.findOne({where:{id:id}})
        return this.editrequestRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async approve(id:number,dto:UpdateEditRequestDto,req:CustomRequest):Promise<EditRequestDto>{
        console.log('approve');
        
        const m = await this.editrequestRepository.findOne({where:{id:id}})
        dto.editRequestStatus =  EditRequestStatus.APPROVE
        dto.approveId = req.user.id
        return this.editrequestRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async reject(id:number,dto:UpdateEditRequestDto,req:CustomRequest):Promise<EditRequestDto>{
        const m = await this.editrequestRepository.findOne({where:{id:id}})
        dto.editRequestStatus =  EditRequestStatus.REJECT
        dto.approveId = req.user.id
        return this.editrequestRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<EditRequestDto>{
        let m = await this.editrequestRepository.findOne({where:{id:id}})
        return this.editrequestRepository.softRemove(
            await this.editrequestRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
