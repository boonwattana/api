import { Injectable } from "@nestjs/common";
import { SearchDemoDto } from "src/core/demo/demo.dto";
import { VwDemoList } from "src/core/demo/demo.entity";
import { Repository, SelectQueryBuilder } from "typeorm";
import { Operators } from "../constans/constanst";
import { SearchParameter, SearchResult } from "../models/search-param-model";
import { BaseService } from "./base.service";

@Injectable()
export class DemoListService<T> extends BaseService{
    constructor(){
        super()
    }
    async getDemolist(dto:SearchDemoDto,repository: Repository<T>):Promise<SearchResult<VwDemoList>>{
        const builder = this.createQueryBuider<T>(dto,repository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwDemoList>(dto.paginator,count,data);
    }
    
}