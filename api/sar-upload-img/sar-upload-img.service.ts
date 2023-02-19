import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSarUploadImgDto, SarUploadImgDto, SearchSarUploadImgDto, UpdateSarUploadImgDto } from './sar-upload-img.dto';
import { SarUploadImg, VwSarUploadImgDropdown, VwSarUploadImgItem, VwSarUploadImgList } from './sar-upload-img.entity';
import { VwTeacherDropdown } from 'src/api/teacher/teacher.entity';
import { SearchTeacherDto } from 'src/api/teacher/teacher.dto';
import { filename } from 'src/core/shared/utils/image.util';
import { savefileWithName } from 'src/core/shared/services/files.service';
import { ImageType } from 'src/core/shared/constans/enum-system';
import { ImagesService } from 'src/core/images/images.service';
@Injectable()
export class SarUploadImgService extends BaseService {

    constructor(
        @InjectRepository(SarUploadImg)
        private readonly saruploadimgRepository: Repository<SarUploadImg>,
        @InjectRepository(VwSarUploadImgList)
        private readonly vwSarUploadImgRepository: Repository<VwSarUploadImgList>,
        @InjectRepository(VwSarUploadImgItem)
        private readonly itemRepository:Repository<VwSarUploadImgItem>,
        @InjectRepository(VwTeacherDropdown)
        private readonly vwDropdownTeacherRepository:Repository<VwTeacherDropdown>,
        private readonly dropdownService: DropdownService,
         private readonly imageService:ImagesService,
        ){
        super()
    }
    async teacherDropdown(dto: SearchTeacherDto):Promise<SelectItems[]> {
        return await this.dropdownService.teacherDropdown(dto,this.vwDropdownTeacherRepository);
      }
    async list(dto:SearchSarUploadImgDto):Promise<SearchResult<VwSarUploadImgList>>{
        const builder = this.createQueryBuider<VwSarUploadImgList>(dto,this.vwSarUploadImgRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwSarUploadImgList>(dto.paginator,count,data);
    }
    async create(dto:CreateSarUploadImgDto,req:CustomRequest):Promise<SarUploadImg>{        
        const en = this.toCreateModel(dto,req) as SarUploadImg  
        const result = await this.saruploadimgRepository.save(
            this.saruploadimgRepository.create(en)
        );
        const moduleName = 'images'

        if(dto.images?.length>0){
            for (const iterator of dto.images) {
                const fileName = filename()
                await savefileWithName(iterator,fileName,moduleName)
                await this.imageService.create({imageUrl:fileName,refId:result.id,refType:ImageType.SAR,imageType:0},req)

            }

        }    
        return result


    }
    async update(id:number,dto:UpdateSarUploadImgDto,req:CustomRequest):Promise<SarUploadImgDto>{
        const m = await this.saruploadimgRepository.findOne({where:{id:id}})
        const result = await this.saruploadimgRepository.save(
            this.toUpdateModel(m,dto,req)
        );
          const moduleName = 'images'

        if(dto.images?.length>0){
            for (const iterator of dto.images) {
                const fileName = filename()
                await savefileWithName(iterator,fileName,moduleName)
                await this.imageService.create({imageUrl:fileName,refId:result.id,refType:ImageType.SAR,imageType:0},req)

            }

        }  
        return result
    }
    async delete(id:number,req:CustomRequest):Promise<SarUploadImgDto>{
        let m = await this.saruploadimgRepository.findOne({where:{id:id}})
        return await this.saruploadimgRepository.softRemove(
            await this.saruploadimgRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return await this.itemRepository.findOne({where:{id:id}})
    }
    async getListByRefId(refIdValue:string):Promise<VwSarUploadImgList[]>{
        return await this.vwSarUploadImgRepository.find({where:{refId:refIdValue}})
    }
}
