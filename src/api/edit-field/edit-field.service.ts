import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateEditFieldDto, EditFieldDto, SearchEditFieldDto, UpdateEditFieldDto } from './edit-field.dto';
import { EditField, VwEditFieldDropdown, VwEditFieldItem, VwEditFieldList } from './edit-field.entity';

@Injectable()
export class EditFieldService extends BaseService {

    constructor(
        @InjectRepository(EditField)
        private readonly editfieldRepository: Repository<EditField>,
        @InjectRepository(VwEditFieldList)
        private readonly vwEditFieldRepository: Repository<VwEditFieldList>,
        @InjectRepository(VwEditFieldItem)
        private readonly itemRepository:Repository<VwEditFieldItem>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchEditFieldDto):Promise<SearchResult<VwEditFieldList>>{
        const builder = this.createQueryBuider<VwEditFieldList>(dto,this.vwEditFieldRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwEditFieldList>(dto.paginator,count,data);
    }
    async create(dto:CreateEditFieldDto,req:CustomRequest):Promise<EditField>{        
        const en = this.toCreateModel(dto,req) as EditField  
        return this.editfieldRepository.save(
            this.editfieldRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateEditFieldDto,req:CustomRequest):Promise<EditFieldDto>{
        const m = await this.editfieldRepository.findOne({where:{id:id}})
        return this.editfieldRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<EditFieldDto>{
        let m = await this.editfieldRepository.findOne({where:{id:id}})
        return this.editfieldRepository.softRemove(
            await this.editfieldRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
