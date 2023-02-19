import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/core/users/users.entity";
import { DeepPartial, Repository, SelectQueryBuilder } from "typeorm";
import { Operators, TABLE_EXIST_STUDENT_NUMBER } from "../constans/constanst";
import { ColumnType } from "../constans/enum-system";
import { CustomRequest } from "../models/request-model";

import { Paginator, SearchCondition, SearchParameter, SearchResult } from "../models/search-param-model";
@Injectable()
export class BaseService{
    constructor(
    ){
    }
    toSearchResult<T>(page:Paginator,count:number,data:any):SearchResult<T>{
        const result = new SearchResult<T>();
        const paginator:Paginator = page?page:new Paginator()
        paginator.rows = page?.rows??10;
        paginator.totalRecord = count;
        paginator.first = page?.first??0;
        paginator.pageCount = Math.ceil(count / paginator?.rows);
        result.paginator = paginator
        result.results = data        
        return result;
    }
    // createQueryBuiderDropdown<T>(dto:SearchParameter,repository: Repository<T>):SelectQueryBuilder<T>{
    //     const buider = repository.createQueryBuilder(dto.tableKey);
    //     const take = dto.paginator?.rows || 10
    //     const skip = (dto.paginator?.page || 0)*take
    //     dto.searchCondition.forEach(el => {
    //         if(el.value){                
    //             let value = el.value
    //             let oporator = el.operator
    //             if(el.operator === Operators.LIKE){
    //                 value = `%${el.value}%`
    //             }
    //             if(el.inputType == ColumnType.DATE){
    //                 const currentDate:string[] = value.split('T');
    //                 const currentDateArr:string[] = currentDate[0].split('-')
    //                 const year:string = currentDateArr[0]
    //                 const month:string = currentDateArr[1]
    //                 const day:string = currentDateArr[2]
    //                 const startDate:Date  = new Date(`${year}-${month}-${day}`)
    //                 startDate.setDate(startDate.getDate()-1)
    //                 const endDate:Date = new Date(`${year}-${month}-${day}`)
    //                 endDate.setDate(endDate.getDate()+1)
    //                 if(el.operator == Operators.EQUAL){
    //                     buider.andWhere(`(${dto.tableKey}.${el.feildName} > :startDate AND ${dto.tableKey}.${el.feildName} < :endDate)`,{startDate:startDate,endDate:endDate})
    //                 }
    //                 if(el.operator == Operators.LESSTHAN_OR_EQUAL){
    //                     buider.andWhere(`${dto.tableKey}.${el.feildName} < :endDate`,{endDate:endDate})
    //                 }
    //                 if(el.operator == Operators.MORTHAN_OR_EQUAL){
    //                     buider.andWhere(`${dto.tableKey}.${el.feildName} > :startDate`,{startDate:startDate})
    //                 }
                    
    //             }else{
    //                 buider.andWhere(`${dto.tableKey}.${el.feildName} ${oporator} :v`,{v:value})

    //             }
    //         }
    //     });
    //     dto.sortColumns.forEach((el,index)=>{
    //         const sortString = `${dto.sortTable[index]}.${el}`
    //         let sortType:'DESC'|'ASC' = 'DESC'
    //         if(dto.isAscs[index]){
    //             sortType = 'ASC'
    //         }
    //         buider.addOrderBy(sortString,sortType)
    //     })
    //     // buider.skip(skip).take(take)
        
    //     return buider
    // }
    createQueryBuiderDropdown<T>(dto:SearchParameter,repository: Repository<T>):SelectQueryBuilder<T>{
        const buider = repository.createQueryBuilder(dto.tableKey);
        const take = dto.paginator?.rows || 10
        const skip = (dto.paginator?.page || 0)*take
        dto.searchCondition.forEach(el => {
            if(el.value){                
                let value = el.value
                let oporator = el.operator
                if(el.operator === Operators.LIKE){
                    value = `'%${el.value}%'`
                }
                if(el.inputType == ColumnType.DATE){
                    const currentDate:string[] = value.split('T');
                    const currentDateArr:string[] = currentDate[0].split('-')
                    const year:string = currentDateArr[0]
                    const month:string = currentDateArr[1]
                    const day:string = currentDateArr[2]
                    const startDate:Date  = new Date(`${year}-${month}-${day}`)
                    startDate.setDate(startDate.getDate()-1)
                    const endDate:Date = new Date(`${year}-${month}-${day}`)
                    endDate.setDate(endDate.getDate()+1)
                    if(el.operator == Operators.EQUAL){
                        buider.andWhere(`(${dto.tableKey}.${el.feildName} > :startDate AND ${dto.tableKey}.${el.feildName} < :endDate)`,{startDate:startDate,endDate:endDate})
                    }
                    if(el.operator == Operators.LESSTHAN_OR_EQUAL){
                        buider.andWhere(`${dto.tableKey}.${el.feildName} < :endDate`,{endDate:endDate})
                    }
                    if(el.operator == Operators.MORTHAN_OR_EQUAL){
                        buider.andWhere(`${dto.tableKey}.${el.feildName} > :startDate`,{startDate:startDate})
                    }
                    
                }else{
                    buider.andWhere(`${dto.tableKey}.${el.feildName} ${oporator} ${value}`)

                }
            }
        });
       // console.log('${dto.tableKey}.id',dto.tableKey);
        
        if(dto.sortColumns.length==0){
            buider.addOrderBy(`${dto.tableKey}.value`,'ASC')
        }else{
            dto.sortColumns.forEach((el,index)=>{
                const sortString = `${dto.sortTable[index]}.${el}`
                let sortType:'DESC'|'ASC' = 'DESC'
                if(dto.isAscs[index]){
                    sortType = 'ASC'
                }
                buider.addOrderBy(sortString,sortType)
            })
        }
       
        // buider.skip(skip).take(take)
        
        return buider
    }
    
    createQueryBuiderCustom<T>(dto:SearchParameter,repository: Repository<T>):SelectQueryBuilder<T>{
        const buider = repository.createQueryBuilder(dto.tableKey);
        const take = dto.paginator?.rows || 10
        const skip = (dto.paginator?.page || 0)*take
        dto.searchCondition.forEach(el => {
            if(el.value){                
                let value = el.value
                let oporator = el.operator
                if(el.operator === Operators.LIKE){
                    value = `'%${el.value}%'`
                }
                if(el.inputType == ColumnType.DATE){
                    const currentDate:string[] = value.split('T');
                    const currentDateArr:string[] = currentDate[0].split('-')
                    const year:string = currentDateArr[0]
                    const month:string = currentDateArr[1]
                    const day:string = currentDateArr[2]
                    const startDate:Date  = new Date(`${year}-${month}-${day}`)
                    startDate.setDate(startDate.getDate()-1)
                    const endDate:Date = new Date(`${year}-${month}-${day}`)
                    endDate.setDate(endDate.getDate()+1)
                    if(el.operator == Operators.EQUAL){
                        buider.andWhere(`("${dto.tableKey}"."${el.feildName}" > :startDate AND "${dto.tableKey}"."${el.feildName}" < :endDate)`,{startDate:startDate,endDate:endDate})
                    }
                    if(el.operator == Operators.LESSTHAN_OR_EQUAL){
                        buider.andWhere(`"${dto.tableKey}"."${el.feildName}" < :endDate`,{endDate:endDate})
                    }
                    if(el.operator == Operators.MORTHAN_OR_EQUAL){
                        buider.andWhere(`"${dto.tableKey}"."${el.feildName}" > :startDate`,{startDate:startDate})
                    }
                    
                }else{
                    buider.andWhere(`"${dto.tableKey}"."${el.feildName}" ${oporator} ${value}`)

                }
            }
        });
      

        
        return buider
    }
    createQueryBuider<T>(dto:SearchParameter,repository: Repository<T>):SelectQueryBuilder<T>{        
        const buider = repository.createQueryBuilder(dto.tableKey);
        const take = dto.paginator?.rows || 10
        const skip = (dto.paginator?.page || 0)*take
        dto.searchCondition.forEach(el => {
            if(el.value){                
                let value = el.value
                let oporator = el.operator
                if(el.operator === Operators.LIKE){
                    value = `'%${el.value}%'`
                }
                if(el.inputType == ColumnType.DATE){
                    const currentDate:string[] = value.split('T');
                    const currentDateArr:string[] = currentDate[0].split('-')
                    const year:string = currentDateArr[0]
                    const month:string = currentDateArr[1]
                    const day:string = currentDateArr[2]
                    const startDate:Date  = new Date(`${year}-${month}-${day}`)
                    startDate.setDate(startDate.getDate()-1)
                    const endDate:Date = new Date(`${year}-${month}-${day}`)
                    endDate.setDate(endDate.getDate()+1)
                    if(el.operator == Operators.EQUAL){
                        buider.andWhere(`("${dto.tableKey}"."${el.feildName}" > :startDate AND "${dto.tableKey}"."${el.feildName}" < :endDate)`,{startDate:startDate,endDate:endDate})
                    }
                    if(el.operator == Operators.LESSTHAN_OR_EQUAL){
                        buider.andWhere(`"${dto.tableKey}"."${el.feildName}" < :endDate`,{endDate:endDate})
                    }
                    if(el.operator == Operators.MORTHAN_OR_EQUAL){
                        buider.andWhere(`"${dto.tableKey}"."${el.feildName}" > :startDate`,{startDate:startDate})
                    }
                    
                }else{
                    buider.andWhere(`"${dto.tableKey}"."${el.feildName}" ${oporator} ${value}`)

                }
            }
        });        
        if(dto.sortColumns.length==0){
            const isExist= TABLE_EXIST_STUDENT_NUMBER.find(fn=>fn == dto.tableKey)
            if(isExist){
                buider.addOrderBy(`"${dto.tableKey}"."studentNumber"`,'ASC')

            }
        }else{
            dto.sortColumns.forEach((el,index)=>{
                const sortString = `"${dto.sortTable[index]}"."${el}"`
                let sortType:'DESC'|'ASC' = 'DESC'
                if(dto.isAscs[index]){
                    sortType = 'ASC'
                }
                buider.addOrderBy(sortString,sortType)
            })
        }
      // console.log(buider.getSql());
       
        buider.skip(skip).take(take)
        
        return buider
    }
    
    toCreateModel(dto:any,req:CustomRequest):any{
        const model ={
            ...dto,
            createAt:new Date(),
            createBy:req?.user?.username
        }
        return model;
    }
    toUpdateModel(oldModel:any,newModel:any,req:CustomRequest):any{                
        const updateModel ={
            ...oldModel,
            ...newModel,
            id:oldModel.id,
            updateAt:new Date(),
            updateBy:req?.user?.username
        }
        
        return updateModel;
    }
    toDeleteModel(model:any,req:CustomRequest):any{
        const deleteModel ={
            ...model,
            active:false,
            deleted:true,
            deleteAt: new Date(),
            deleteBy: req?.user?.username
        }
        return deleteModel;
    }
}