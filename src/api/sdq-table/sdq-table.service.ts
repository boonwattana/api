import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository } from 'typeorm';
import { CreateSdqTableDto, SdqTableDto, SearchSdqTableDto, UpdateSdqTableDto } from './sdq-table.dto';
import { SdqTable, VwSdqTableDropdown, VwSdqTableItem, VwSdqTableList} from './sdq-table.entity';
import { SearchClassroomDto } from 'src/api/classroom/classroom.dto';
import { VwClassroomDropdown } from 'src/api/classroom/classroom.entity';
import { VwClassroomTypeDropdown } from 'src/api/classroom-type/classroom-type.entity';
import { VwYearTermDropdown, VwYearTermItem } from 'src/api/year-term/year-term.entity';
import { VwTeacherItem } from 'src/api/teacher/teacher.entity';
import { VwStudentItem,VwSdqTableListForTeacher,VwSdqTableListForParent,VwSdqTableListForStudent, VwStudentDropdown  } from 'src/api/student/student.entity';
import { SearchStudentDto, StudentDto } from 'src/api/student/student.dto';
import { SearchExportExcelDto } from 'src/core/excel/excel.dto';
import { exportExcel } from 'src/core/shared/services/export-excel.service';
import { SearchYearTermDto } from '../year-term/year-term.dto';
@Injectable()
export class SdqTableService extends BaseService {
    async import(data: any[]): Promise<any> {        
        const dataBulkInsert:SdqTable[] = []
        data.forEach(el=>{
            const contain = dataBulkInsert.filter(fn=>fn.id == el.id)            
            if(contain.length==0){
                dataBulkInsert.push({...el})
            }
        })
        return this.sdqtableRepository.save(
            this.sdqtableRepository.create(dataBulkInsert)
        )
    }
    async exportStd(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwSdqTableListForStudent>(dto,this.vwSdqTableListForStudentRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'รหัสประจำตัว':m.studentCode,
               'ชื่อ-สกุล':m.nameValue,
               'ชั้น':m.classroomValue,
               'ด้านอารมณ์':m.emotionalBehaviorScore01_value_display,
               'ด้านความประพฤติ':m.nomalBehaviorScore02_value_display,
               'ไม่อยู่นิ่ง':m.ADHDBehaviorScore03_value_display,
               'สัมพันธ์เพื่อน':m.friendBehaviorScore04_value_display,
               'ทางสังคม':m.socialBehaviorScore05_value_display,
               'รวม4ด้าน':m.sumScore_value_display,
               'สถานะ':m.status_display,
            }
        })
        return exportExcel(filterData)
      }
      async exportPar(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwSdqTableListForParent>(dto,this.vwSdqTableListForParentRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'รหัสประจำตัว':m.studentCode,
               'ชื่อ-สกุล':m.nameValue,
               'ชั้น':m.classroomValue,
               'ด้านอารมณ์':m.emotionalBehaviorScore01_value_display,
               'ด้านความประพฤติ':m.nomalBehaviorScore02_value_display,
               'ไม่อยู่นิ่ง':m.ADHDBehaviorScore03_value_display,
               'สัมพันธ์เพื่อน':m.friendBehaviorScore04_value_display,
               'ทางสังคม':m.socialBehaviorScore05_value_display,
               'รวม4ด้าน':m.sumScore_value_display,
               'สถานะ':m.status_display,
            }
        })
        return exportExcel(filterData)
      }
      async exportTea(dto:SearchExportExcelDto):Promise<any>{
        const builder = this.createQueryBuider<VwSdqTableListForTeacher>(dto,this.vwSdqTableListForTeacherRepository)
        const data = await builder
        .getMany();
        const filterData = data.map(m=>{
            return{
               'รหัสประจำตัว':m.studentCode,
               'ชื่อ-สกุล':m.nameValue,
               'ชั้น':m.classroomValue,
               'ด้านอารมณ์':m.emotionalBehaviorScore01_value_display,
               'ด้านความประพฤติ':m.nomalBehaviorScore02_value_display,
               'ไม่อยู่นิ่ง':m.ADHDBehaviorScore03_value_display,
               'สัมพันธ์เพื่อน':m.friendBehaviorScore04_value_display,
               'ทางสังคม':m.socialBehaviorScore05_value_display,
               'รวม4ด้าน':m.sumScore_value_display,
               'สถานะ':m.status_display,
            }
        })
        return exportExcel(filterData)
      }
    constructor(
        @InjectRepository(SdqTable)
        private readonly sdqtableRepository: Repository<SdqTable>,
        @InjectRepository(VwSdqTableList)
        private readonly vwSdqTableRepository: Repository<VwSdqTableList>,
        @InjectRepository(VwSdqTableListForTeacher)
        private readonly vwSdqTableListForTeacherRepository: Repository<VwSdqTableListForTeacher>,
        @InjectRepository(VwSdqTableListForParent)
        private readonly vwSdqTableListForParentRepository: Repository<VwSdqTableListForParent>,
        @InjectRepository(VwSdqTableListForStudent)
        private readonly vwSdqTableListForStudentRepository: Repository<VwSdqTableListForStudent>,
        @InjectRepository(VwSdqTableItem)
        private readonly itemRepository:Repository<VwSdqTableItem>,

        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        @InjectRepository(VwStudentItem)
        private readonly itemStudentRepository:Repository<VwStudentItem>,

        @InjectRepository(VwYearTermItem)
        private readonly itemYearTermRepository:Repository<VwYearTermItem>,
        @InjectRepository(VwTeacherItem)
        private readonly itemTeacherRepository:Repository<VwTeacherItem>,
        @InjectRepository(VwStudentDropdown)
        private readonly vwDropdownStudentRepository:Repository<VwStudentDropdown>,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwDropdownYearTermRepository:Repository<VwYearTermDropdown>,
        private readonly dropdownService: DropdownService
        ){
        super()
    }
    async list(dto:SearchStudentDto):Promise<SearchResult<VwSdqTableListForStudent>>{
       const builder = this.createQueryBuider<VwSdqTableListForStudent>(dto,this.vwSdqTableListForStudentRepository)
      
       const [data, count] = await builder.getManyAndCount();
        return this.toSearchResult<VwSdqTableListForStudent>(dto.paginator,count,data);
    }
    async create(dto:CreateSdqTableDto,req:CustomRequest):Promise<SdqTable>{   
       
        dto.emotionalBehaviorScore01 =(dto.choice01+dto.choice08+dto.choice13+dto.choice16+dto.choice24);
        dto.nomalBehaviorScore02 =  (dto.choice05+dto.choice07+dto.choice12+dto.choice18+dto.choice22) ;
        dto.ADHDBehaviorScore03 = (dto.choice02+dto.choice10+dto.choice15+dto.choice21+dto.choice25);
        dto.friendBehaviorScore04 =(dto.choice06+dto.choice11+dto.choice14+dto.choice19+dto.choice23);
        dto.socialBehaviorScore05 =(dto.choice01+dto.choice04+dto.choice09+dto.choice17+dto.choice20);
        dto.sumScore =(dto.emotionalBehaviorScore01+ dto.nomalBehaviorScore02 + dto.ADHDBehaviorScore03+ dto.friendBehaviorScore04)
        if(dto.estimateType === 1){  //1 นักเรียนประเมินตนเอง
            if((dto.sumScore>=0)&&(dto.sumScore<=15)){
                dto.sumScore_value ='ปกติ';
            }else if((dto.sumScore>=16)&&(dto.sumScore<=18)){
                dto.sumScore_value ='เสี่ยง';
            }else{
                dto.sumScore_value  = 'มีปัญหา';
            }

            if((dto.emotionalBehaviorScore01>=0)&&(dto.emotionalBehaviorScore01<=4)){
                dto.emotionalBehaviorScore01_value ='ปกติ';
            }else{
                if( dto.emotionalBehaviorScore01 = 5 ){
                    dto.emotionalBehaviorScore01_value ='เสี่ยง';
                }else{
                    dto.emotionalBehaviorScore01_value ='มีปัญหา';
                }
            }
    
            if((dto.nomalBehaviorScore02>=0)&&(dto.nomalBehaviorScore02<=3)){
                dto.nomalBehaviorScore02_value ='ปกติ';
            }else{
                if( dto.nomalBehaviorScore02 = 4 ){
                    dto.nomalBehaviorScore02_value ='เสี่ยง';
                }else{
                    dto.nomalBehaviorScore02_value ='มีปัญหา';
                }
            }
    
            if((dto.ADHDBehaviorScore03>=0)&&(dto.ADHDBehaviorScore03<=5)){
                dto.ADHDBehaviorScore03_value ='ปกติ';
            }else{
                if( dto.ADHDBehaviorScore03 = 6 ){
                    dto.ADHDBehaviorScore03_value ='เสี่ยง';
                }else{
                    dto.ADHDBehaviorScore03_value ='มีปัญหา';
                }
            }
    
            if((dto.friendBehaviorScore04>=0)&&(dto.friendBehaviorScore04<=4)){
                dto.friendBehaviorScore04_value ='ปกติ';
            }else{
                if( dto.friendBehaviorScore04 = 5){
                    dto.friendBehaviorScore04_value ='เสี่ยง';
                }else{
                    dto.friendBehaviorScore04_value ='มีปัญหา';
                }
            }
            if(dto.socialBehaviorScore05<5){
                dto.socialBehaviorScore05_value ='ไม่มีจุดแข็ง';
            }else{
                dto.socialBehaviorScore05_value ='เป็นจุดแข็ง';
            }
        }
        if(dto.estimateType === 2){  //2. ครูประเมินนักเรียน 
            if((dto.sumScore>=0)&&(dto.sumScore<=13)){
                dto.sumScore_value ='ปกติ';
            }else if((dto.sumScore>=14)&&(dto.sumScore<=16)){
                dto.sumScore_value ='เสี่ยง';
            }else{
                dto.sumScore_value  = 'มีปัญหา';
            }
            if((dto.emotionalBehaviorScore01>=0)&&(dto.emotionalBehaviorScore01<=3)){
                dto.emotionalBehaviorScore01_value ='ปกติ';
            }else{
                if( dto.emotionalBehaviorScore01 = 4 ){
                    dto.emotionalBehaviorScore01_value ='เสี่ยง';
                }else{
                    dto.emotionalBehaviorScore01_value ='มีปัญหา';
                }
            }
    
            if((dto.nomalBehaviorScore02>=0)&&(dto.nomalBehaviorScore02<=3)){
                dto.nomalBehaviorScore02_value ='ปกติ';
            }else{
                if( dto.nomalBehaviorScore02 = 4 ){
                    dto.nomalBehaviorScore02_value ='เสี่ยง';
                }else{
                    dto.nomalBehaviorScore02_value ='มีปัญหา';
                }
            }
    
            if((dto.ADHDBehaviorScore03>=0)&&(dto.ADHDBehaviorScore03<=5)){
                dto.ADHDBehaviorScore03_value ='ปกติ';
            }else{
                if( dto.ADHDBehaviorScore03 = 6 ){
                    dto.ADHDBehaviorScore03_value ='เสี่ยง';
                }else{
                    dto.ADHDBehaviorScore03_value ='มีปัญหา';
                }
            }
    
            if((dto.friendBehaviorScore04>=0)&&(dto.friendBehaviorScore04<=4)){
                dto.friendBehaviorScore04_value ='ปกติ';
            }else{
                if( dto.friendBehaviorScore04 = 5){
                    dto.friendBehaviorScore04_value ='เสี่ยง';
                }else{
                    dto.friendBehaviorScore04_value ='มีปัญหา';
                }
            }
            if(dto.socialBehaviorScore05<5){
                dto.socialBehaviorScore05_value ='ไม่มีจุดแข็ง';
            }else{
                dto.socialBehaviorScore05_value ='เป็นจุดแข็ง';
            }
        }
        if(dto.estimateType === 3){//3.ผู้ปกครองประเมินนักเรียน
            if((dto.sumScore>=0)&&(dto.sumScore<=15)){
                dto.sumScore_value ='ปกติ';
            }else if((dto.sumScore>=16)&&(dto.sumScore<=18)){
                dto.sumScore_value ='เสี่ยง';
            }else{
                dto.sumScore_value  = 'มีปัญหา';
            }
            if((dto.emotionalBehaviorScore01>=0)&&(dto.emotionalBehaviorScore01<=4)){
                dto.emotionalBehaviorScore01_value ='ปกติ';
            }else{
                if( dto.emotionalBehaviorScore01 = 5 ){
                    dto.emotionalBehaviorScore01_value ='เสี่ยง';
                }else{
                    dto.emotionalBehaviorScore01_value ='มีปัญหา';
                }
            }
    
            if((dto.nomalBehaviorScore02>=0)&&(dto.nomalBehaviorScore02<=4)){
                dto.nomalBehaviorScore02_value ='ปกติ';
            }else{
                if( dto.nomalBehaviorScore02 = 5 ){
                    dto.nomalBehaviorScore02_value ='เสี่ยง';
                }else{
                    dto.nomalBehaviorScore02_value ='มีปัญหา';
                }
            }
    
            if((dto.ADHDBehaviorScore03>=0)&&(dto.ADHDBehaviorScore03<=5)){
                dto.ADHDBehaviorScore03_value ='ปกติ';
            }else{
                if( dto.ADHDBehaviorScore03 = 6 ){
                    dto.ADHDBehaviorScore03_value ='เสี่ยง';
                }else{
                    dto.ADHDBehaviorScore03_value ='มีปัญหา';
                }
            }
    
            if((dto.friendBehaviorScore04>=0)&&(dto.friendBehaviorScore04<=4)){
                dto.friendBehaviorScore04_value ='ปกติ';
            }else{
                if( dto.friendBehaviorScore04 = 5){
                    dto.friendBehaviorScore04_value ='เสี่ยง';
                }else{
                    dto.friendBehaviorScore04_value ='มีปัญหา';
                }
            }
            if(dto.socialBehaviorScore05<5){
                dto.socialBehaviorScore05_value ='ไม่มีจุดแข็ง';
            }else{
                dto.socialBehaviorScore05_value ='เป็นจุดแข็ง';
            }
        }
        
        dto.evaluateId = req.user.id; 
        dto.evaluateDate = new Date(); 
     
        const en = this.toCreateModel(dto,req) as SdqTable  
        return await this.sdqtableRepository.save(
            this.sdqtableRepository.create(en)
        );
    }
    async update(id:number,dto:UpdateSdqTableDto,req:CustomRequest):Promise<SdqTableDto>{
        
        dto.emotionalBehaviorScore01 =(dto.choice01+dto.choice08+dto.choice13+dto.choice16+dto.choice24);
        dto.nomalBehaviorScore02 =  (dto.choice05+dto.choice07+dto.choice12+dto.choice18+dto.choice22) ;
        dto.ADHDBehaviorScore03 = (dto.choice02+dto.choice10+dto.choice15+dto.choice21+dto.choice25);
        dto.friendBehaviorScore04 =(dto.choice06+dto.choice11+dto.choice14+dto.choice19+dto.choice23);
        dto.socialBehaviorScore05 =(dto.choice01+dto.choice04+dto.choice09+dto.choice17+dto.choice20);
        dto.sumScore =(dto.emotionalBehaviorScore01+ dto.nomalBehaviorScore02 + dto.ADHDBehaviorScore03+ dto.friendBehaviorScore04)
        if(dto.estimateType === 1){  //1 นักเรียนประเมินตนเอง
            if((dto.sumScore>=0)&&(dto.sumScore<=15)){
                dto.sumScore_value ='ปกติ';
            }else if((dto.sumScore>=16)&&(dto.sumScore<=18)){
                dto.sumScore_value ='เสี่ยง';
            }else{
                dto.sumScore_value  = 'มีปัญหา';
            }

            if((dto.emotionalBehaviorScore01>=0)&&(dto.emotionalBehaviorScore01<=4)){
                dto.emotionalBehaviorScore01_value ='ปกติ';
            }else{
                if( dto.emotionalBehaviorScore01 = 5 ){
                    dto.emotionalBehaviorScore01_value ='เสี่ยง';
                }else{
                    dto.emotionalBehaviorScore01_value ='มีปัญหา';
                }
            }
    
            if((dto.nomalBehaviorScore02>=0)&&(dto.nomalBehaviorScore02<=3)){
                dto.nomalBehaviorScore02_value ='ปกติ';
            }else{
                if( dto.nomalBehaviorScore02 = 4 ){
                    dto.nomalBehaviorScore02_value ='เสี่ยง';
                }else{
                    dto.nomalBehaviorScore02_value ='มีปัญหา';
                }
            }
    
            if((dto.ADHDBehaviorScore03>=0)&&(dto.ADHDBehaviorScore03<=5)){
                dto.ADHDBehaviorScore03_value ='ปกติ';
            }else{
                if( dto.ADHDBehaviorScore03 = 6 ){
                    dto.ADHDBehaviorScore03_value ='เสี่ยง';
                }else{
                    dto.ADHDBehaviorScore03_value ='มีปัญหา';
                }
            }
    
            if((dto.friendBehaviorScore04>=0)&&(dto.friendBehaviorScore04<=4)){
                dto.friendBehaviorScore04_value ='ปกติ';
            }else{
                if( dto.friendBehaviorScore04 = 5){
                    dto.friendBehaviorScore04_value ='เสี่ยง';
                }else{
                    dto.friendBehaviorScore04_value ='มีปัญหา';
                }
            }
            if(dto.socialBehaviorScore05<5){
                dto.socialBehaviorScore05_value ='ไม่มีจุดแข็ง';
            }else{
                dto.socialBehaviorScore05_value ='เป็นจุดแข็ง';
            }
        }
        if(dto.estimateType === 2){  //2. ครูประเมินนักเรียน 
            if((dto.sumScore>=0)&&(dto.sumScore<=13)){
                dto.sumScore_value ='ปกติ';
            }else if((dto.sumScore>=14)&&(dto.sumScore<=16)){
                dto.sumScore_value ='เสี่ยง';
            }else{
                dto.sumScore_value  = 'มีปัญหา';
            }
            if((dto.emotionalBehaviorScore01>=0)&&(dto.emotionalBehaviorScore01<=3)){
                dto.emotionalBehaviorScore01_value ='ปกติ';
            }else{
                if( dto.emotionalBehaviorScore01 = 4 ){
                    dto.emotionalBehaviorScore01_value ='เสี่ยง';
                }else{
                    dto.emotionalBehaviorScore01_value ='มีปัญหา';
                }
            }
    
            if((dto.nomalBehaviorScore02>=0)&&(dto.nomalBehaviorScore02<=3)){
                dto.nomalBehaviorScore02_value ='ปกติ';
            }else{
                if( dto.nomalBehaviorScore02 = 4 ){
                    dto.nomalBehaviorScore02_value ='เสี่ยง';
                }else{
                    dto.nomalBehaviorScore02_value ='มีปัญหา';
                }
            }
    
            if((dto.ADHDBehaviorScore03>=0)&&(dto.ADHDBehaviorScore03<=5)){
                dto.ADHDBehaviorScore03_value ='ปกติ';
            }else{
                if( dto.ADHDBehaviorScore03 = 6 ){
                    dto.ADHDBehaviorScore03_value ='เสี่ยง';
                }else{
                    dto.ADHDBehaviorScore03_value ='มีปัญหา';
                }
            }
    
            if((dto.friendBehaviorScore04>=0)&&(dto.friendBehaviorScore04<=4)){
                dto.friendBehaviorScore04_value ='ปกติ';
            }else{
                if( dto.friendBehaviorScore04 = 5){
                    dto.friendBehaviorScore04_value ='เสี่ยง';
                }else{
                    dto.friendBehaviorScore04_value ='มีปัญหา';
                }
            }
            if(dto.socialBehaviorScore05<5){
                dto.socialBehaviorScore05_value ='ไม่มีจุดแข็ง';
            }else{
                dto.socialBehaviorScore05_value ='เป็นจุดแข็ง';
            }
        }
        if(dto.estimateType === 3){//3.ผู้ปกครองประเมินนักเรียน
            if((dto.sumScore>=0)&&(dto.sumScore<=15)){
                dto.sumScore_value ='ปกติ';
            }else if((dto.sumScore>=16)&&(dto.sumScore<=18)){
                dto.sumScore_value ='เสี่ยง';
            }else{
                dto.sumScore_value  = 'มีปัญหา';
            }
            if((dto.emotionalBehaviorScore01>=0)&&(dto.emotionalBehaviorScore01<=4)){
                dto.emotionalBehaviorScore01_value ='ปกติ';
            }else{
                if( dto.emotionalBehaviorScore01 = 5 ){
                    dto.emotionalBehaviorScore01_value ='เสี่ยง';
                }else{
                    dto.emotionalBehaviorScore01_value ='มีปัญหา';
                }
            }
    
            if((dto.nomalBehaviorScore02>=0)&&(dto.nomalBehaviorScore02<=4)){
                dto.nomalBehaviorScore02_value ='ปกติ';
            }else{
                if( dto.nomalBehaviorScore02 = 5 ){
                    dto.nomalBehaviorScore02_value ='เสี่ยง';
                }else{
                    dto.nomalBehaviorScore02_value ='มีปัญหา';
                }
            }
    
            if((dto.ADHDBehaviorScore03>=0)&&(dto.ADHDBehaviorScore03<=5)){
                dto.ADHDBehaviorScore03_value ='ปกติ';
            }else{
                if( dto.ADHDBehaviorScore03 = 6 ){
                    dto.ADHDBehaviorScore03_value ='เสี่ยง';
                }else{
                    dto.ADHDBehaviorScore03_value ='มีปัญหา';
                }
            }
    
            if((dto.friendBehaviorScore04>=0)&&(dto.friendBehaviorScore04<=4)){
                dto.friendBehaviorScore04_value ='ปกติ';
            }else{
                if( dto.friendBehaviorScore04 = 5){
                    dto.friendBehaviorScore04_value ='เสี่ยง';
                }else{
                    dto.friendBehaviorScore04_value ='มีปัญหา';
                }
            }
            if(dto.socialBehaviorScore05<5){
                dto.socialBehaviorScore05_value ='ไม่มีจุดแข็ง';
            }else{
                dto.socialBehaviorScore05_value ='เป็นจุดแข็ง';
            }
        }
        
        dto.evaluateId = req.user.id; 
        dto.evaluateDate = new Date(); 
        const m = await this.sdqtableRepository.findOne({where:{id:id}})
        return await this.sdqtableRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<SdqTableDto>{
        let m = await this.sdqtableRepository.findOne({where:{id:id}})
        return await this.sdqtableRepository.softRemove(
            await this.sdqtableRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
         let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
         let std = await this.itemStudentRepository.findOne({where:{id:id}})
         let sdq=  await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearInit?.id,estimateType:1}})
         var atSemester =null;
         var atYear=null;
 if(yearInit!=undefined){
     atYear=yearInit.year;
     atSemester =yearInit.term;
 }
         return {
            atYear: atYear, 
            atSemester: atSemester,
            title:std.title,
            firstname : std.firstname,
            lastname: std.lastname,
            classroomTypeValue:std.classroomTypeValue,
            birthDate:std.birthDate,
            studentId:std?.id,
            choice01: sdq.choice01 ,
            choice02: sdq.choice02,
            choice03: sdq.choice03,
            choice04: sdq.choice04 ,
            choice05: sdq.choice05 ,
            choice06: sdq.choice06,
            choice07: sdq.choice07,
            choice08: sdq.choice08,
            choice09: sdq.choice09,
            choice10: sdq.choice10,
            choice11: sdq.choice11,
            choice12: sdq.choice12,
            choice13: sdq.choice13,
            choice14: sdq.choice14,
            choice15: sdq.choice15,
            choice16: sdq.choice16,
            choice17: sdq.choice17,
            choice18: sdq.choice18,
            choice19: sdq.choice19,
            choice20: sdq.choice20,
            choice21: sdq.choice21,
            choice22: sdq.choice22,
            choice23: sdq.choice23,
            choice24: sdq.choice24,
            choice25: sdq.choice25,
            sdq_id:sdq.id,
            yearTermId:sdq.yearTermId
        }
    }
    async initial(id:number):Promise<any>{
        let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
       // console.log("yearInit",yearInit)
        let std = await this.itemStudentRepository.findOne({where:{id:id}})
        var atSemester =null;
        var atYear=null;
if(yearInit!=undefined){
    atYear=yearInit.year;
    atSemester =yearInit.term;
}
        return {
            yearTermId:yearInit?.id,
            atYear: atYear, 
            atSemester: atSemester,
            title:std.title,
            firstname : std.firstname,
            lastname: std.lastname,
            classroomTypeValue:std.classroomTypeValue,
            birthDate:std.birthDate,
            studentId:std?.id,
            choice01: null ,
           choice02: null,
           choice03:null,
           choice04: null ,
           choice05: null ,
           choice06: null ,
           choice07: null ,
           choice08: null ,
           choice09:null ,
           choice10: null ,
           choice11:null ,
           choice12: null ,
           choice13: null ,
           choice14: null ,
           choice15: null ,
           choice16: null ,
           choice17: null ,
           choice18: null ,
           choice19: null ,
           choice20:null ,
           choice21: null ,
           choice22:null ,
           choice23: null ,
           choice24: null ,
           choice25: null ,
        }
    }
    async classroomDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomDropdown(dto,this.vwDropdownClassroomRepository);
      }
      async classroomTypeDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }
      async listForTeacher(dto:SearchStudentDto):Promise<SearchResult<VwSdqTableListForTeacher>>{

        const builder = this.createQueryBuider<VwSdqTableListForTeacher>(dto,this.vwSdqTableListForTeacherRepository)
 
        const [data, count] = await builder.getManyAndCount();
         return this.toSearchResult<VwSdqTableListForTeacher>(dto.paginator,count,data);
     }
     async listForParent(dto:SearchStudentDto):Promise<SearchResult<VwSdqTableListForParent>>{
      
        const builder = this.createQueryBuider<VwSdqTableListForParent>(dto,this.vwSdqTableListForParentRepository)
       //
        const [data, count] = await builder.getManyAndCount();
         return this.toSearchResult<VwSdqTableListForParent>(dto.paginator,count,data);
     }
     async getSDQCurrentTermDataSTD(id:number):Promise<any>{
        let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
        let sdqCurrentTermData = await this.itemRepository.findOne({where:{studentId:id,atSemester:yearInit.term,atYear:yearInit.year,estimateType:1}})
     if(sdqCurrentTermData!=undefined){
        return true;
     }else{
        return false;
     }
    }
    async itemparentsdq(id:number):Promise<any>{
        let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
        let std = await this.itemStudentRepository.findOne({where:{id:id}})
        let sdq=  await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearInit?.id,estimateType:3}})
        var atSemester =null;
        var atYear=null;
if(yearInit!=undefined){
    atYear=yearInit.year;
    atSemester =yearInit.term;
}
        return {
           atYear: atYear, 
           atSemester: atSemester,
           title:std.title,
           firstname : std.firstname,
           lastname: std.lastname,
           classroomTypeValue:std.classroomTypeValue,
           birthDate:std.birthDate,
           studentId:std?.id,
           choice01: sdq.choice01 ,
           choice02: sdq.choice02,
           choice03: sdq.choice03,
           choice04: sdq.choice04 ,
           choice05: sdq.choice05 ,
           choice06: sdq.choice06,
           choice07: sdq.choice07,
           choice08: sdq.choice08,
           choice09: sdq.choice09,
           choice10: sdq.choice10,
           choice11: sdq.choice11,
           choice12: sdq.choice12,
           choice13: sdq.choice13,
           choice14: sdq.choice14,
           choice15: sdq.choice15,
           choice16: sdq.choice16,
           choice17: sdq.choice17,
           choice18: sdq.choice18,
           choice19: sdq.choice19,
           choice20: sdq.choice20,
           choice21: sdq.choice21,
           choice22: sdq.choice22,
           choice23: sdq.choice23,
           choice24: sdq.choice24,
           choice25: sdq.choice25,
           sdq_id:sdq.id,
           yearTermId:yearInit?.id
       }
   }
   async getSDQCurrentTermDataPRT(id:number):Promise<any>{
    let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
    let sdqCurrentTermData = await this.itemRepository.findOne({where:{studentId:id,atSemester:yearInit.term,atYear:yearInit.year,estimateType:3}})
 if(sdqCurrentTermData!=undefined){
    return true;
 }else{
    return false;
 }
}
async getSDQCurrentTermDataTeacher(id:number):Promise<any>{
    let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
    let sdqCurrentTermData = await this.itemRepository.findOne({where:{studentId:id,atSemester:yearInit.term,atYear:yearInit.year,estimateType:2}})
 if(sdqCurrentTermData!=undefined){
    return true;
 }else{
    return false;
 }
}
async itemTeacherSdq(id:number):Promise<any>{
    let yearInit =await this.itemYearTermRepository.findOne({where:{isParent:true}})
    let std = await this.itemStudentRepository.findOne({where:{id:id}})
    let sdq=  await this.itemRepository.findOne({where:{studentId:id,yearTermId:yearInit?.id,estimateType:2}})
    //console.log(sdq)
    var atSemester =null;
    var atYear=null;
if(yearInit!=undefined){
atYear=yearInit.year;
atSemester =yearInit.term;
}
    return {
       atYear: atYear, 
       atSemester: atSemester,
       title:std.title,
       firstname : std.firstname,
       lastname: std.lastname,
       classroomTypeValue:std.classroomTypeValue,
       birthDate:std.birthDate,
       studentId:std?.id,
       choice01: sdq.choice01 ,
       choice02: sdq.choice02,
       choice03: sdq.choice03,
       choice04: sdq.choice04 ,
       choice05: sdq.choice05 ,
       choice06: sdq.choice06,
       choice07: sdq.choice07,
       choice08: sdq.choice08,
       choice09: sdq.choice09,
       choice10: sdq.choice10,
       choice11: sdq.choice11,
       choice12: sdq.choice12,
       choice13: sdq.choice13,
       choice14: sdq.choice14,
       choice15: sdq.choice15,
       choice16: sdq.choice16,
       choice17: sdq.choice17,
       choice18: sdq.choice18,
       choice19: sdq.choice19,
       choice20: sdq.choice20,
       choice21: sdq.choice21,
       choice22: sdq.choice22,
       choice23: sdq.choice23,
       choice24: sdq.choice24,
       choice25: sdq.choice25,
       sdq_id:sdq.id,
       yearTermId:yearInit?.id
   }
}
async getSumSDQTeacher(teacherId:any):Promise<any>{
    let sum01_normal =null;
    let sum01_risk =null;
    let sum01_bad =null;
    let sum02_normal=null;
    let sum02_risk =null;
    let sum02_bad =null;
    let sum03_normal =null;
    let sum03_risk =null;
    let sum03_bad =null;
    let sum04_normal =null;
    let sum04_risk =null;
    let sum04_bad =null;
    let sum_normal =null;
    let sum_risk=null;
    let sum_bad =null;
    let sum05_strong =null;
    let sum05_weak =null;
    let sum05=null;


    if(teacherId !== '0'){
        var teacher =  await this.itemTeacherRepository.findOne({where:{id : teacherId}})
       // console.log('teacher',teacher)
        if(teacher.classroomTypeId!== null||teacher.classroomId!== null){
     sum01_normal =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'ปกติ',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum01_risk =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'เสี่ยง',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum01_bad =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'มีปัญหา',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum02_normal =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'ปกติ',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum02_risk =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'เสี่ยง',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum02_bad =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'มีปัญหา',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum03_normal =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'ปกติ',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum03_risk =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'เสี่ยง',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum03_bad =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'มีปัญหา',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum04_normal =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'ปกติ',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum04_risk =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'เสี่ยง',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum04_bad =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'มีปัญหา',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum_normal = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'ปกติ',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum_risk = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'เสี่ยง',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum_bad = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'มีปัญหา',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum05_strong = await this.vwSdqTableListForTeacherRepository.count({where:{socialBehaviorScore05_value : 'เป็นจุดแข็ง',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum05_weak = await this.vwSdqTableListForTeacherRepository.count({where:{socialBehaviorScore05_value : 'ไม่มีจุดแข็ง',classroomId:teacher.classroomId,classroomTypeId:teacher.classroomTypeId}})
     sum05 =sum05_strong+sum05_weak;
    }else{
        sum01_normal =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'ปกติ'}})
     sum01_risk =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'เสี่ยง'}})
     sum01_bad =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'มีปัญหา'}})
     sum02_normal =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'ปกติ'}})
     sum02_risk =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'เสี่ยง'}})
     sum02_bad =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'มีปัญหา'}})
     sum03_normal =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'ปกติ'}})
     sum03_risk =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'เสี่ยง'}})
     sum03_bad =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'มีปัญหา'}})
     sum04_normal =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'ปกติ'}})
     sum04_risk =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'เสี่ยง'}})
     sum04_bad =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'มีปัญหา'}})
     sum_normal = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'ปกติ'}})
     sum_risk = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'เสี่ยง'}})
     sum_bad = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'มีปัญหา'}})
     sum05_strong = await this.vwSdqTableListForTeacherRepository.count({where:{socialBehaviorScore05_value : 'เป็นจุดแข็ง'}})
     sum05_weak = await this.vwSdqTableListForTeacherRepository.count({where:{socialBehaviorScore05_value : 'ไม่มีจุดแข็ง'}})
     sum05 =sum05_strong+sum05_weak;
    }
  }else{
    //console.log('else')
     sum01_normal =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'ปกติ'}})
     sum01_risk =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'เสี่ยง'}})
     sum01_bad =await this.vwSdqTableListForTeacherRepository.count({where:{emotionalBehaviorScore01_value : 'มีปัญหา'}})
     sum02_normal =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'ปกติ'}})
     sum02_risk =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'เสี่ยง'}})
     sum02_bad =await this.vwSdqTableListForTeacherRepository.count({where:{nomalBehaviorScore02_value : 'มีปัญหา'}})
     sum03_normal =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'ปกติ'}})
     sum03_risk =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'เสี่ยง'}})
     sum03_bad =await this.vwSdqTableListForTeacherRepository.count({where:{ADHDBehaviorScore03_value : 'มีปัญหา'}})
     sum04_normal =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'ปกติ'}})
     sum04_risk =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'เสี่ยง'}})
     sum04_bad =await this.vwSdqTableListForTeacherRepository.count({where:{friendBehaviorScore04_value : 'มีปัญหา'}})
     sum_normal = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'ปกติ'}})
     sum_risk = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'เสี่ยง'}})
     sum_bad = await this.vwSdqTableListForTeacherRepository.count({where:{sumScore_value : 'มีปัญหา'}})
     sum05_strong = await this.vwSdqTableListForTeacherRepository.count({where:{socialBehaviorScore05_value : 'เป็นจุดแข็ง'}})
     sum05_weak = await this.vwSdqTableListForTeacherRepository.count({where:{socialBehaviorScore05_value : 'ไม่มีจุดแข็ง'}})
     sum05 =sum05_strong+sum05_weak;
  }
     
  return {
    sum01_normal:sum01_normal,
    sum01_risk:sum01_risk,
    sum01_bad:sum01_bad,
    sum02_normal:sum02_normal,
    sum02_risk:sum02_risk,
    sum02_bad:sum02_bad,
    sum03_normal:sum03_normal,
    sum03_risk:sum03_risk,
    sum03_bad:sum03_bad,
    sum04_normal:sum04_normal,
    sum04_risk:sum04_risk,
    sum04_bad:sum04_bad,
    sum_normal:sum_normal,
    sum_risk:sum_risk,
    sum_bad:sum_bad,
    sum05_strong:sum05_strong,
    sum05_weak:sum05_weak,
    sum05:sum05

};
}
async studentDropdown(dto: SearchStudentDto):Promise<SelectItems[]> {
    return await this.dropdownService.studentDropdown(dto,this.vwDropdownStudentRepository);
  }
async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
    return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
  }
}
