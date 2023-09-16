import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { Repository } from 'typeorm';
import { Operators } from '../shared/constans/constanst';
import { ColumnType, ImageType } from '../shared/constans/enum-system';
import { CreateImagesDto, SearchImagesDto, UpdateImagesDto } from './images.dto';
import { Images } from './images.entity';
import * as fs from 'fs';
import Jimp from "jimp";
@Injectable()
export class ImagesService extends BaseService {
    async getImgBase64FromIds(refId: number, type: ImageType) {
        const images = await this.repository.find({where:{refId:refId,refType:type}})
        const arr:string[] = []
        for (const el of images) {
            try{
                const imageBase64 = fs.readFileSync(`public/uploads/images/${el?.imageUrl}`, 'base64');
                console.log('imageBase64 :',imageBase64.slice(0,30));

                const conveted = await this.resizeBase64Image(imageBase64)
                console.log('conveted :',conveted.split('data:image/png;base64,')[1]);
                arr.push(conveted.split('data:image/png;base64,')[1])

            }catch(e){
                console.log(e);
                
            }

            
        }
        return arr
    }
    async resizeBase64Image(base64: string): Promise<string> {
        // Decode the base64 image data and save it to a buffer
        const imageBuffer = Buffer.from(base64, "base64");
      
        // Use Jimp to load the image from the buffer and resize it
        const image = await Jimp.read(imageBuffer);
        image.resize(320, 350);
      
        // Convert the image back to a base64 data URI
        const resizedImageBase64 = await image.getBase64Async(Jimp.MIME_PNG);
      
        return resizedImageBase64;
      }
    async getImgBase64FromId(refId: number, type: ImageType) {
        const image = await this.repository.findOne({where:{refId:refId,refType:type}})
        try{
            return fs.readFileSync(`public/uploads/images/${image?.imageUrl}`, 'base64');
          }catch(e){
            console.log(e);
            
          }
    }
    async removeWithRefId(id: number) {
        return this.repository.remove(await this.repository.find({where:{refId:id}})) 
    }
    constructor(
        @InjectRepository(Images)
        private readonly repository: Repository<Images>,
        ){
        super()
    }
    async list(id:number,type:number):Promise<SearchResult<Images>>{
        const searchDto = new SearchImagesDto()
        searchDto.refTable = 'IMAGES'
        searchDto.tableKey = 'IMAGES'
        searchDto.searchCondition = [{
            columnName:'refId',
            tableName:'IMAGES',
            feildName:'refId',
            value:`${id}`,
            inputType:ColumnType.INT,
            equalityOperator: Operators.EQUAL,
            operator:Operators.EQUAL
        },
        {
            columnName:'refType',
            tableName:'IMAGES',
            feildName:'refType',
            value:`${type}`,
            inputType:ColumnType.INT,
            equalityOperator: Operators.EQUAL,
            operator:Operators.EQUAL
        }
    ]
        const builder = this.createQueryBuiderCustom<Images>(searchDto,this.repository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<Images>(searchDto.paginator,count,data);
    }
    async create(dto:CreateImagesDto,req:CustomRequest):Promise<Images>{        
        const en = this.toCreateModel(dto,req) as Images  
        return this.repository.save(
            this.repository.create(en)
        );
    }
    async update(id:number,dto:UpdateImagesDto,req:CustomRequest):Promise<Images>{
        const m = await this.repository.find({where:{id:id}})
        return this.repository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<Images>{
        let m = await this.repository.findOne({where:{id:id}})
        return this.repository.softRemove(
            await this.repository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.repository.findOne({where:{id:id}})
    }
}
