import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { notEqual } from 'assert';
import e from 'express';
import { ImagesService } from 'src/core/images/images.service';
import { DEMO_IMAGE } from 'src/core/shared/constans/constanst';
import { ImageType } from 'src/core/shared/constans/enum-system';
import { onlyUnique } from 'src/core/shared/functions';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { MoreThan, Not, Repository } from 'typeorm';
import { v1 } from 'uuid';
import { ClassroomType, VwClassroomTypeDropdown } from '../classroom-type/classroom-type.entity';
import { SearchClassroomDto } from '../classroom/classroom.dto';
import { Classroom, VwClassroomDropdown } from '../classroom/classroom.entity';
import { EReportType } from '../export-pdf/enum/report-enum';
import { ExportPdfService } from '../export-pdf/export-pdf.service';
import { DataRowModel, HeaderReport } from '../export-pdf/interface/interface';
import { ISumarizeRoomDepressionReport } from '../export-pdf/libs/depression-report/room-depression-report';
import { HomvisitRowData } from '../export-pdf/libs/std-homvisit-report/room-std-homvisit-report';
import { SdqTable, VwSdqTableList } from '../sdq-table/sdq-table.entity';
import { StudentConsultant } from '../student-consultant/student-consultant.entity';
import { StudentService } from '../student/student.service';
import { VwYearTermDropdown, YearTerm } from '../year-term/year-term.entity';
import { YearTermService } from '../year-term/year-term.service';
import { ReportCheckStudentSumarize } from './check-student.entity';
import { ReportEq } from './eq.entity';

import { ReportHomeVisitNeedHelp, ReportHomeVisitPersonal, ReportHomeVisitSumarize } from './home-visit.entity';
import { ReportDepressionSumarize, ReportDepressionByClass, ReportDepressionByClassAndRoom, ReportDepressionPesonal } from './report-depression.entity';
import { ReportStudentFilterSumarize, ReportStudentFilterByClass, ReportStudentFilterByClassAndRoom, ReportStudentFilterByRoom, ReportStudentFilterSumarizeByClassAndRoom, ReportStudentFilterPosonal } from './report-student-filter.entity';
import { ReportStudentHelp } from './report-student-help.entity';
import { ReportStudentScolar } from './report-student-scolar.entity';
import { CreateYearTermDto, YearTermDto, SearchYearTermDto, UpdateYearTermDto, ExportPdfDto, ExportPdfScolarDto } from './report.dto';
import { ReportStudentByClass, ReportStudentByRoom, ReportStudentSumarize } from './report.entity';
import { ReportStress } from './stress-report.entity';
import { ReportStudentConsult } from './student-consult.entity';
import { ReportStudentSupport } from './student-support.entity';

@Injectable()
export class ReportService extends BaseService {
  async downloadReport(dto: ExportPdfDto) {
    switch(dto.reportName){
        case'DEPRESSION':
            return this.depresstionReport(dto)
        case 'STUDENT_FILTER':
            return this.studentFilterReport(dto)
        case 'HOME_VISIT':
            return this.homeVisitReport(dto)
        case 'CHECK_STUDENT':
            return this.checkStudentReport(dto)
        case 'SDQ_TEACHER':
            return this.sdqReport(dto,'ครูประเมินนักเรียน',2)
        case 'SDQ_STUDENT':
            return this.sdqReport(dto,'นักเรียนประเมินตนเอง',1)
        case 'SDQ_PARENT':
            return this.sdqReport(dto,'ผู้ปกครองประเมินนักเรียน',3)
        case 'STRESS':
            return this.stressReport(dto)
        case 'EQ':
            return this.eqReport(dto)
        case 'STUDENT_SUPPORT':
            return this.studentSupportReport(dto)
        case 'STUDENT_CONSULT':
            return this.studentConsultReport(dto)
        case 'STUDENT_SCOLAR':
            return this.studentScolarReport(dto)
        case 'STUDENT_HELP':
            return this.studentHelpReport(dto)
        case 'STUDENT_SEND_TO':
            return this.studentSendtoReport(dto)

    }
  }
    homeVisitReport(dto: ExportPdfDto) {
        return this.getReportHomeVisitReportByRoom(dto)
    }

    async getReportHomeVisitReportByRoom(dto: ExportPdfDto) {
        
         const reportName = 'รายงานข้อมูลการเยี่ยมบ้าน'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const countStudent = await this.studentService.countByClassRoom(dto.classId,dto.roomId)
        const result = await this.reportHomeVisitPersonal.find({where:{yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId}})
        
        // const needHelp = await this.reportHomeVisitNeedHelp.count({where:{isHelpStudentNeed:true,yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId}})
        // const dontHelp2 = await this.reportHomeVisitNeedHelp.count({where:{isHelpStudentNeed:false,yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId}})
        // const dontHelp1 = await this.reportHomeVisitNeedHelp.count({where:{isHelpStudentNeed:null,yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId}})
        const needHelp = result.filter(fl=>fl.isHelpStudentNeed == true)
        const dontHelp = result.filter(fl=>fl.isHelpStudentNeed != true)
        const sumarize = await this.reportHomvisitSumarize.find({where:{yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId}})
        const sumarizeList:DataRowModel[] = sumarize.map((m,index)=>{
            return {
              v1:(index+1),
              v2:m.studentName,
              v3:this.getSumarizeHomeVist(m.isHelpStudentNeed),
              v4:this.getNeedHelpLabel(m.healthNeed,m.moneyNeed,m.studyNeed,m.speacialNeed),
            }
        })
        const sum:DataRowModel = {
            v1:'นักเรียนที่ยังไม่ต้องการความช่วยเหลือ',
            v2:dontHelp.length,
            v3:this.getPercentage(result.length,dontHelp.length),
            v4:'นักเรียนที่ควรได้รับการช่วยเหลือ',
            v5:needHelp.length,
            v6:this.getPercentage(result.length,needHelp.length),
            v7:'รวม',
            v8:result.length,
            v9:'',
        }
        const dataList:HomvisitRowData[] = []
        for (const m of result) {
            const imageProfile = await this.getImageProfile(m.studentId);
            
            const imgs = await this.getImages(m.homeVisitId);
            dataList.push({
                studentName:m.studentName,
                sex:m.sex,
                personalCode:m.personalCode,
                birthDate:this.getDateLabel(m.birthDate),
                sisterCount:m.sisterCount?m.sisterCount?.toString():'',
                childOder:m.childOrder?m.childOrder?.toString():'',
                sisterInSchool:m.sisterInSchool?m.sisterInSchool?.toString():'',
                imageProfile:imageProfile,
                studentCode:m.studentCode,
                alivePlace:this.getAlivePlaceLabel(m.alivePlace,m.alivePlaceOther) ,

                travelBy:this.getTravelByLabel(m.comeToSchool),
                contractAddress:m.contractAddress,
                address:m.address,
                houseLanscape:m.houseLanscape??'',
                farToSchool:this.getFarToSchoolLabel( m.farToSchool),
                passToSchool:this.getPassToSchoolLabel(m.passToSchool,m.passToSchoolOther) ,
                studentAction:this.getStudentAction(m.studentAction,m.studentActionOther) ,
                hobit:this.getHobitLabel(m.hobit,m.hobitOther) ,
                readBook:this.getReadBook(m.readBook) ,
                prepairStuding: this.getPrepairLabel(m.prepairStuding) ,
                parentFix:this.parentFix(m.parentFix) ,
                commentParent:this.getCommentHomvisitLabel(m.comment1,m.comment2,m.comment3,m.comment4,m.comment5,m.comment6,m.comment7),
                sumarize:this.getSumarizeHomvisitLabel(m.isHelpStudentNeed),
                img1:this.getImage(imgs[0]) ,
                img2:this.getImage(imgs[1]),
                img3:this.getImage(imgs[2]),
                img4:this.getImage(imgs[3]),
                img5:this.getImage(imgs[4]),
                createAt:this.getDateLabel(m.createAt)
            })
        }
        console.log('requestMethod');
        
        return this.exportPdfService.getStudentHomeVisitReportByRoom(header,dataList,sumarizeList,sum)
    }
   getImage(arg0: string): string {
        if(arg0){
            return arg0
        }
        return DEMO_IMAGE
    }
   getFarToSchoolLabel(farToSchool: number): string {
        switch (farToSchool){
            case 1:
                return `1-5 กิโลเมตร`
                case 2:
                return `6-10 กิโลเมตร`
                case 3:
                return `11-15 กิโลเมตร`
                case 4:
                    return `16-20 กิโลเมตร`
                    case 5:
                        return `20 กิโลเมตรขึ้นไป`

                default:
                    return ``
        }
    }
  async getImages(homeVisitId: number) {
        return this.imagesService.getImgBase64FromIds(homeVisitId,ImageType.HOME_VISIT)
    }
    async getImageProfile(studentId: number) {
        return this.imagesService.getImgBase64FromId(studentId,ImageType.STUDENT)
    }
   getAlivePlaceLabel(alivePlace: number,text:string): string {
        switch (alivePlace){
            case 1:
                return `อาคารพานิชย์`
                case 2:
                return `บ้านไม้ชั้นเดียว`
                case 3:
                return `บ้านครึ่งตึกครึ่งไม้`
                case 4:
                    return `ตึกชั้นเดียว`
                    case 5:
                        return `บ้านไม้สองชั้น`
                        case 6:
                            return text
                default:
                    return ``
        }
    }
   getTravelByLabel(travelBy: number): string {
        switch (travelBy){
            case 1:
                return `เดินเท้า`
                case 2:
                return `พาหนะไม่เสียค่าโดยสาร-รถส่วนตัว`
                case 3:
                return `พาหนะเสียค่าโดยสาร-รถโดยสารประจำทาง`
                case 4:
                    return `พาหนะเสียค่าโดยสาร-รถโรงเรียน`
                    case 5:
                        return `จักรยานยืมเรียน`
                default:
                    return ``
        }
    }
   getPassToSchoolLabel(passToSchool: number, passToSchoolOther: string): string {
        switch (passToSchool){
            case 1:
                return `ร้านค้าทั่วไป`
                case 2:
                return `ร้านเกมส์`
                case 3:
                return `ป่ารกร้าง`
                case 4:
                    return `หนองน้ำ/แหล่งน้ำ`
                    case 5:
                        return passToSchoolOther
                default:
                    return ``
        }
    }
   getStudentAction(studentAction: number, studentActionOther: string): string {
        switch (studentAction){
            case 1:
                return `ไม่ช่วยทำอะไรเลย`
                case 2:
                return `หารายได้พิเศษ`
                case 3:
                return `ช่วยงานบ้าน` + studentActionOther
                default:
                    return ``
        }
    }
   getHobitLabel(hobit: number, hobitOther: string): string {
        switch (hobit){
            case 1:
                return `เล่นกีฬา`
                case 2:
                return `อ่านหนังสือ`
                case 3:
                return `เล่นเกมส์`
                case 4:
                    return `เล่นดนตรี`
                    case 5:
                        return hobitOther
                default:
                    return ``
        }
    }
   getReadBook(readBook: number): string {
        switch (readBook){
            case 1:
                return `อ่านสมำเสมอ`
                case 2:
                return `อ่านเมื่อจะสอบ`
                case 3:
                return `อ่านเมื่อบอกให้อ่าน`
                case 4:
                    return `ไม่อ่านเลย`
                default:
                    return ``
        }
    }
   getPrepairLabel(prepairStuding: number): string {
        switch (prepairStuding){
            case 1:
                return `จัดเก็บเป็นระเบียบดีมาก`
                case 2:
                return `จัดเก็บเป็นระเบียบพอใช้`
                case 3:
                return `ไม่เคยเก็บ`
                default:
                    return ``
        }
    }
    parentFix(parentFix: number): string {
        switch (parentFix){
            case 1:
                return `บ่อยครั้ง`
                case 2:
                return `นานๆครั้ง`
                case 3:
                return `น้อยมาก หรือไม่เคย`
                default:
                    return ``
        }
    }
   getCommentHomvisitLabel(comment1: string, comment2: string, comment3: string, comment4: string, comment5: string, comment6: string, comment7: string): string {
        const arr:string[] = [comment1,comment2,comment3,comment4,comment5,comment6,comment7]
        return arr.toString()

    }
   getSumarizeHomvisitLabel(isHelpStudentNeed: boolean): string {
        if(isHelpStudentNeed){
            return `ควรได้รับการช่วยเหลือ`
        }else{
            return `ยังไม่ต้องการความช่วยเหลือ`
        }
    }
   getNeedHelpLabel(healthNeed: boolean, moneyNeed: boolean, studyNeed: boolean, speacialNeed: boolean) {
        const labelList = []
        if(studyNeed){
            labelList.push('ด้านการเรียน')
        }
        if(healthNeed){
            labelList.push('ด้านสุขภาพร่างกาย')
        }
        if(moneyNeed){
            labelList.push('ด้านการเงิน')
        }
        if(speacialNeed){
            labelList.push('มีความต้องการช่วยเหลือพิเศษ')
        }
        return labelList.toString()
    }
   getSumarizeHomeVist(isHelpStudentNeed: boolean) {
        if(isHelpStudentNeed){
            return 'ควรได้รับการช่วยเหลือ'
        }else{
            return `ยังไม่ต้องการความช่วยเหลือ`
        }
    }
   getPercentage(countStudent: number, dontHelp: number) {
        if(dontHelp==0){
            return 0
        }
        return ((dontHelp/countStudent)*100)
    }
    async  checkStudentReport(dto: ExportPdfDto) {

    }

    sdqReport(dto: ExportPdfDto,reportName:string,type:number) {
        switch(dto.reportType){
            case 'ALL':
                return this.getReportSdqReport(dto,reportName,type)
            case 'CLASS':
                return this.getReportSdqReportByClass(dto,reportName,type)
            case 'ROOM':
                return this.getReportSdqReportByRoom(dto,reportName,type)
        }
    }
  async getReportSdqReport(dto: ExportPdfDto,reportName:string,type:number) {
    
        //  const reportName = 'ครูประเมินนักเรียน'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.sdqRepository.find({where:{yearTermId:dto.yearTermId,estimateType:type}})
        const classResult = await this.classroomType.find({order:{typeName:'ASC'}})
        const dataList:DataRowModel[] = classResult.map(m=>{
            return {
                v1:m.typeName,
                v2:this.getSumChoice2(result,m.id, 'emotionalBehaviorScore01_value','ปกติ'),
                v3:this.getSumChoice2(result,m.id,'emotionalBehaviorScore01_value','เสี่ยง'),
                v4:this.getSumChoice2(result,m.id,'emotionalBehaviorScore01_value','มีปัญหา'),

                v5:this.getSumChoice2(result,m.id,'nomalBehaviorScore02_value','ปกติ'),
                v6:this.getSumChoice2(result,m.id,'nomalBehaviorScore02_value','เสี่ยง'),
                v7:this.getSumChoice2(result,m.id,'nomalBehaviorScore02_value','มีปัญหา'),

                v8:this.getSumChoice2(result,m.id,'ADHDBehaviorScore03_value','ปกติ'),
                v9:this.getSumChoice2(result,m.id,'ADHDBehaviorScore03_value','เสี่ยง'),
                v10:this.getSumChoice2(result,m.id,'ADHDBehaviorScore03_value','มีปัญหา'),

                v11:this.getSumChoice2(result,m.id,'friendBehaviorScore04_value','ปกติ'),
                v12:this.getSumChoice2(result,m.id,'friendBehaviorScore04_value','เสี่ยง'),
                v13:this.getSumChoice2(result,m.id,'friendBehaviorScore04_value','มีปัญหา'),

                v14:this.getSumChoice2(result,m.id,'sumScore_value','ปกติ'),
                v15:this.getSumChoice2(result,m.id,'sumScore_value','เสี่ยง'),
                v16:this.getSumChoice2(result,m.id,'sumScore_value','มีปัญหา'),
            }
        })
        const sumModel:DataRowModel ={
            v1:'รวม',
                v2:this.getSumChoice2(result,-1, 'emotionalBehaviorScore01_value','ปกติ'),
                v3:this.getSumChoice2(result,-1,'emotionalBehaviorScore01_value','เสี่ยง'),
                v4:this.getSumChoice2(result,-1,'emotionalBehaviorScore01_value','มีปัญหา'),

                v5:this.getSumChoice2(result,-1,'nomalBehaviorScore02_value','ปกติ'),
                v6:this.getSumChoice2(result,-1,'nomalBehaviorScore02_value','เสี่ยง'),
                v7:this.getSumChoice2(result,-1,'nomalBehaviorScore02_value','มีปัญหา'),

                v8:this.getSumChoice2(result,-1,'ADHDBehaviorScore03_value','ปกติ'),
                v9:this.getSumChoice2(result,-1,'ADHDBehaviorScore03_value','เสี่ยง'),
                v10:this.getSumChoice2(result,-1,'ADHDBehaviorScore03_value','มีปัญหา'),

                v11:this.getSumChoice2(result,-1,'friendBehaviorScore04_value','ปกติ'),
                v12:this.getSumChoice2(result,-1,'friendBehaviorScore04_value','เสี่ยง'),
                v13:this.getSumChoice2(result,-1,'friendBehaviorScore04_value','มีปัญหา'),

                v14:this.getSumChoice2(result,-1,'sumScore_value','ปกติ'),
                v15:this.getSumChoice2(result,-1,'sumScore_value','เสี่ยง'),
                v16:this.getSumChoice2(result,-1,'sumScore_value','มีปัญหา'),
        }
        dataList.push(sumModel)
        const sumarize:DataRowModel[] = classResult.map(m=>{
            return {
                v1:m.typeName,
                v2:this.getSumChoice2(result,m.id, 'socialBehaviorScore05_value','เป็นจุดแข็ง'),
                v3:this.getSumChoice2(result,m.id,'socialBehaviorScore05_value','ไม่มีจุดแข็ง'),
            }
        })
        console.log(sumarize);
        
        return this.exportPdfService.getSdqReportSumarize(header,dataList,sumarize)
    }
  async getReportSdqReportByClass(dto: ExportPdfDto,reportName:string,type:number) {
    // const reportName = 'ครูประเมินนักเรียน'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.sdqRepository.find({where:{classroomTypeId:dto.classId,yearTermId:dto.yearTermId,estimateType:type}})
        const roomResult= await this.getRoomResult()
        const datalist:DataRowModel[] = roomResult.map(m=>{
        
            return {
                v1:this.getSdqLabelName(header.className,m.name),
                v2:this.getSumChoice(result,m.id, 'emotionalBehaviorScore01_value','ปกติ'),
                v3:this.getSumChoice(result,m.id,'emotionalBehaviorScore01_value','เสี่ยง'),
                v4:this.getSumChoice(result,m.id,'emotionalBehaviorScore01_value','มีปัญหา'),

                v5:this.getSumChoice(result,m.id,'nomalBehaviorScore02_value','ปกติ'),
                v6:this.getSumChoice(result,m.id,'nomalBehaviorScore02_value','เสี่ยง'),
                v7:this.getSumChoice(result,m.id,'nomalBehaviorScore02_value','มีปัญหา'),

                v8:this.getSumChoice(result,m.id,'ADHDBehaviorScore03_value','ปกติ'),
                v9:this.getSumChoice(result,m.id,'ADHDBehaviorScore03_value','เสี่ยง'),
                v10:this.getSumChoice(result,m.id,'ADHDBehaviorScore03_value','มีปัญหา'),

                v11:this.getSumChoice(result,m.id,'friendBehaviorScore04_value','ปกติ'),
                v12:this.getSumChoice(result,m.id,'friendBehaviorScore04_value','เสี่ยง'),
                v13:this.getSumChoice(result,m.id,'friendBehaviorScore04_value','มีปัญหา'),

                v14:this.getSumChoice(result,m.id,'sumScore_value','ปกติ'),
                v15:this.getSumChoice(result,m.id,'sumScore_value','เสี่ยง'),
                v16:this.getSumChoice(result,m.id,'sumScore_value','มีปัญหา'),

            }
        })
        const sumModel:DataRowModel ={
            v1:'รวม',
                v2:this.getSumChoice(result,-1, 'emotionalBehaviorScore01_value','ปกติ'),
                v3:this.getSumChoice(result,-1,'emotionalBehaviorScore01_value','เสี่ยง'),
                v4:this.getSumChoice(result,-1,'emotionalBehaviorScore01_value','มีปัญหา'),

                v5:this.getSumChoice(result,-1,'nomalBehaviorScore02_value','ปกติ'),
                v6:this.getSumChoice(result,-1,'nomalBehaviorScore02_value','เสี่ยง'),
                v7:this.getSumChoice(result,-1,'nomalBehaviorScore02_value','มีปัญหา'),

                v8:this.getSumChoice(result,-1,'ADHDBehaviorScore03_value','ปกติ'),
                v9:this.getSumChoice(result,-1,'ADHDBehaviorScore03_value','เสี่ยง'),
                v10:this.getSumChoice(result,-1,'ADHDBehaviorScore03_value','มีปัญหา'),

                v11:this.getSumChoice(result,-1,'friendBehaviorScore04_value','ปกติ'),
                v12:this.getSumChoice(result,-1,'friendBehaviorScore04_value','เสี่ยง'),
                v13:this.getSumChoice(result,-1,'friendBehaviorScore04_value','มีปัญหา'),

                v14:this.getSumChoice(result,-1,'sumScore_value','ปกติ'),
                v15:this.getSumChoice(result,-1,'sumScore_value','เสี่ยง'),
                v16:this.getSumChoice(result,-1,'sumScore_value','มีปัญหา'),
        }
        datalist.push(sumModel)
        const sumarize:DataRowModel[] = roomResult.map(m=>{
            return {
                v1:this.getSdqLabelName(header.className,m.name),
                v2:this.getSumChoice(result,m.id, 'socialBehaviorScore05_value','เป็นจุดแข็ง'),
                v3:this.getSumChoice(result,m.id,'socialBehaviorScore05_value','ไม่มีจุดแข็ง'),
            }
        })
        console.log(sumarize);
        
        return this.exportPdfService.getSdqReportByClass(header,datalist,sumarize)
    }
    getSdqLabelName(className: string, name: string): any {
        return `${className}/${name}`
    }
    getSumChoice(result: VwSdqTableList[], id: number, arg2: string, arg3: string): any {
        if(
            id==-1
        ){
            return  result.filter(fl=> fl[arg2] == arg3&& fl.classroomId !=null).length
        }
        return result.filter(fl=> fl[arg2] == arg3&& fl.classroomId == id).length
    }
    getSumChoice2(result: VwSdqTableList[], id: number, arg2: string, arg3: string): any {
        if(
            id==-1
        ){
            return  result.filter(fl=> fl[arg2] == arg3&& fl.classroomTypeId!=null).length
        }
        return result.filter(fl=> fl[arg2] == arg3&& fl.classroomTypeId == id).length
    }
  async getReportSdqReportByRoom(dto: ExportPdfDto,reportName:string,type:number) {
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.sdqRepository.find({where:{classroomId:dto.roomId,classroomTypeId:dto.classId,yearTermId:dto.yearTermId,estimateType:type}})
        const dataList:DataRowModel[] = result.map(m=>{
            return {
                v1:m.nameValue,
                v2:m.studentNumber,
                v3:this.getSdqLabel(m.emotionalBehaviorScore01_value),
                v4:this.getSdqLabel(m.nomalBehaviorScore02_value),
                v5:this.getSdqLabel(m.ADHDBehaviorScore03_value),
                v6:this.getSdqLabel(m.friendBehaviorScore04_value),
                v7:m.socialBehaviorScore05_value,
                v8:this.getSdqLabel(m.sumScore_value),
            }
        })
        const sumarizeList:DataRowModel[] = [
            {
                v1:'1.ด้านอารมณ์',
                v2:this.getChoice1(dataList,'ป'),
                v3:this.getChoice1(dataList,'ส'),
                v4:this.getChoice1(dataList,'ห')
            },
            {
                v1:'2.ดวามประพฤติ',
                v2:this.getChoice2(dataList,'ป'),
                v3:this.getChoice2(dataList,'ส'),
                v4:this.getChoice2(dataList,'ห')
            },
            {
                v1:'3.ไม่อยู่นิ่ง',
                v2:this.getChoice3(dataList,'ป'),
                v3:this.getChoice3(dataList,'ส'),
                v4:this.getChoice3(dataList,'ห')
            },
            {
                v1:'4.สัมพันธ์เพื่อน',
                v2:this.getChoice4(dataList,'ป'),
                v3:this.getChoice4(dataList,'ส'),
                v4:this.getChoice4(dataList,'ห')
            },
            {
                v1:'รวม',
                v2:this.getChoiceSum(dataList,'ป'),
                v3:this.getChoiceSum(dataList,'ส'),
                v4:this.getChoiceSum(dataList,'ห')
            }
        ]
        const sumarize2 :DataRowModel = 
        {
            v1:this.getStrange(dataList,'เป็นจุดแข็ง'),
            v2:this.getStrange(dataList,'ไม่มีจุดแข็ง'),
            v3:dataList.length,
        }

        return this.exportPdfService.getSdqReportByRoom(header,dataList,sumarizeList,sumarize2)

    }
    getStrange(dataList: DataRowModel[],arg:string): any {
        return dataList.filter(fl=>fl.v7 == arg).length
    }
    getChoiceSum(dataList: DataRowModel[], arg1: string): any {
        let count = 0
        dataList.forEach(el=>{
            if(el.v3 == arg1){
                count += 1
            }
            if(el.v4 == arg1){
                count += 1
            }
            if(el.v5 == arg1){
                count += 1
            }
            if(el.v6 == arg1){
                count += 1
            }
        })
        return count
    }
    getChoice1(dataList: DataRowModel[], arg1: string): any {
        let count = 0
        dataList.forEach(el=>{
            if(el.v3 == arg1){
                count += 1
            }
            
        })
        return count
    }
    getChoice2(dataList: DataRowModel[], arg1: string): any {
        let count = 0
        dataList.forEach(el=>{
            if(el.v4 == arg1){
                count += 1
            }
            
        })
        return count
    }
    getChoice3(dataList: DataRowModel[], arg1: string): any {
        let count = 0
        dataList.forEach(el=>{
            if(el.v5 == arg1){
                count += 1
            }
            
        })
        return count
    }
    getChoice4(dataList: DataRowModel[], arg1: string): any {
        let count = 0
        dataList.forEach(el=>{
            if(el.v6 == arg1){
                count += 1
            }
            
        })
        return count
    }
    getSdqLabel(value: string): any {
        switch(value){
            case 'มีปัญหา':
                return 'ห'
            case 'เสี่ยง':
                return 'ส'
            case 'ปกติ':
                return 'ป'
        }
    }

    stressReport(dto: ExportPdfDto) {
        switch(dto.reportType){
            case 'ALL':
                return this.getReportStressReport(dto)
            case 'CLASS':
                return this.getReportStressReportByClass(dto)
            case 'ROOM':
                return this.getReportStressReportByRoom(dto)
        }
    }
  async getReportStressReport(dto: ExportPdfDto) {
         const reportName = 'รายงานผลประเมินความเครียดของนักเรียน'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStress.find({where:{yearTermId:dto.yearTermId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[] = result.map(m=>{
            return {
                v1:m.className??'',
                v2:m.roomName??'',
                v3:m.studentNumber??'',
                v4:m.studentName??'',
                v5:this.getStressLabel(m.sumva),
                v6:this.getDateLabel(m.updatedAt)
            }
        })
        const classResult = await this.classroomType.find({where:{active:true},order:{id:'ASC'}})
        const sumarizeList:DataRowModel[] = classResult.map(m=>{
            return {
                v1:m.typeName,
                v2:this.sumStressInRang2(m.id,result,0,23),
                v3:this.sumStressInRang2(m.id,result,24,41),
                v4:this.sumStressInRang2(m.id,result,42,61),
                v5:this.sumStressInRang2(m.id,result,62,500),
            }
        })
        const sumModel:DataRowModel={
            v1:'รวม',
            v2:this.sumStressInRang2(-1,result,0,23),
            v3:this.sumStressInRang2(-1,result,24,41),
            v4:this.sumStressInRang2(-1,result,42,61),
            v5:this.sumStressInRang2(-1,result,62,500),
        }
        sumarizeList.push(sumModel)
        return this.exportPdfService.getStressReportSumarize(header,dataList,sumarizeList)
    }
  async getReportStressReportByClass(dto: ExportPdfDto) {
         const reportName = 'รายงานผลประเมินความเครียดของนักเรียน '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStress.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[] = result.map(m=>{
            return {
                v1:m.roomName??'',
                v2:m.studentNumber??'',
                v3:m.studentName??'',
                v4:this.getStressLabel(m.sumva),
                v5:this.getDateLabel(m.updatedAt)
            }
        })
        const roomResult = await this.getRoomResult()
        const sumarizeList:DataRowModel[] = roomResult.map(m=>{
            return {
                v1:this.getSdqLabelName(header.className,m.name),
                v2:this.sumStressInRang(m.id,result,0,23),
                v3:this.sumStressInRang(m.id,result,24,41),
                v4:this.sumStressInRang(m.id,result,42,61),
                v5:this.sumStressInRang(m.id,result,62,500),
            }
        })
        const sumModel:DataRowModel={
            v1:'รวม',
            v2:this.sumStressInRang(-1,result,0,23),
            v3:this.sumStressInRang(-1,result,24,41),
            v4:this.sumStressInRang(-1,result,42,61),
            v5:this.sumStressInRang(-1,result,62,500),
        }
        sumarizeList.push(sumModel)

        return this.exportPdfService.getStressReportByClass(header,dataList,sumarizeList)
    }
    sumStressInRang(id: number, result: ReportStress[], arg2: number, arg3: number): any {
       if(id == -1){
        return result.filter(fl=>fl.classroomId != null && fl.sumva>=arg2&&fl.sumva<=arg3).length
       }
       return result.filter(fl=>fl.classroomId == id && fl.sumva>=arg2&&fl.sumva<=arg3).length
    }
    sumStressInRang2(id: number, result: ReportStress[], arg2: number, arg3: number): any {
        if(id == -1){
         return result.filter(fl=>fl.classroomTypeId != null && fl.sumva>=arg2&&fl.sumva<=arg3).length
        }
        return result.filter(fl=>fl.classroomTypeId == id && fl.sumva>=arg2&&fl.sumva<=arg3).length
     }
  async getReportStressReportByRoom(dto: ExportPdfDto) {
         const reportName = 'รายงานผลประเมินความเครียดของนักเรียน '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStress.find({where:{yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList = result.map(m=>{
            return {
                v1:m.studentNumber??null,
                v2:m.studentName??'',
                v3:this.getStressLabel(m.sumva),
                v4:this.getDateLabel(m.updatedAt),
            }
        })
        const sum:DataRowModel ={
            v1:this.sumByLabel(dataList,'เครียดเล็กน้อย'),
            v2:this.sumByLabel(dataList,'เครียดปานกลาง'),
            v3:this.sumByLabel(dataList,'เครียดสูง'),
            v4:this.sumByLabel(dataList,'เครียดรุนแรง')
        }
        return this.exportPdfService.getStressReportByRoom(header,dataList,sum)
    }
    sumByLabel(dataList: { v1: number; v2: string; v3: any; v4: string; }[], arg1: string): any {
        return dataList.filter(fl=>fl.v3 == arg1 ).length
    }
    getStressLabel(sumva: number): any {
        if(sumva<=23){
            return `เครียดเล็กน้อย`
        }
        if(sumva>=23 && sumva<=41){
            return `เครียดปานกลาง`
        }
        if(sumva>=42 && sumva<=61){
            return `เครียดสูง`
        }
        if(sumva>=62){
            return `เครียดรุนแรง`
        }
    }
    eqReport(dto: ExportPdfDto) {
        switch(dto.reportType){
            case 'ALL':
                return this.getReportEqReport (dto)
            case 'CLASS':
                return this.getReportEqReportByClass(dto)
            case 'ROOM':
                return this.getReportEqReportByRoom(dto)
        }
    }
  async getReportEqReport(dto: ExportPdfDto) {
         const reportName = 'ผลประเมินความฉลาดทางอารมณ์ '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result  = await this.reportEq.find({where:{yearTermId:dto.yearTermId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const classResult = await this.classroomType.find({order:{typeName:'ASC'}})
        const dataList:DataRowModel[] = classResult.map(m=>{
            return{
                v1:m.typeName,
                v2:this.sumEq2(m.id,result,0,139),
                v3:this.sumEq2(m.id,result,140,170),
                v4:this.sumEq2(m.id,result,171,500)
            }
        })
        const sumModel:DataRowModel = {
            v1:this.sumEq2(-1,result,0,139),
            v2:this.sumEq2(-1,result,140,170),
            v3:this.sumEq2(-1,result,171,500),
            v4:result.filter(fl=>fl.classroomTypeId!=null).length
        }

        return this.exportPdfService.getEqReportSumarize(header,dataList,sumModel)
    }
  async getReportEqReportByClass(dto: ExportPdfDto) {
         const reportName = 'ผลประเมินความฉลาดทางอารมณ์ '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result  = await this.reportEq.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const roomResult = await this.getRoomResult()
        const dataList:DataRowModel[] = roomResult.map(m=>{
            return{
                v1:this.getSdqLabelName(header.className,m.name),
                v2:this.sumEq(m.id,result,0,139),
                v3:this.sumEq(m.id,result,140,170),
                v4:this.sumEq(m.id,result,171,500)
            }
        })
        const sumModel:DataRowModel = {
            v1:this.sumEq(-1,result,0,139),
            v2:this.sumEq(-1,result,140,170),
            v3:this.sumEq(-1,result,171,500),
            v4:result.filter(fl=>fl.classroomId!=null).length
        }
        
        return this.exportPdfService.getEqReportByClass(header,dataList,sumModel)
    }
    sumEq(id: number, result: ReportEq[], arg2: number, arg3: number): any {
        if(id==-1){
            return result.filter(fl=>fl.classroomId !=null&& fl.sumva>=arg2&&fl.sumva<=arg3).length
        }else{
            return result.filter(fl=>fl.classroomId == id&& fl.sumva>=arg2&&fl.sumva<=arg3).length
        }
    }
    sumEq2(id: number, result: ReportEq[], arg2: number, arg3: number): any {
        if(id==-1){
            return result.filter(fl=>fl.classroomTypeId !=null&& fl.sumva>=arg2&&fl.sumva<=arg3).length
        }else{
            return result.filter(fl=>fl.classroomTypeId == id&& fl.sumva>=arg2&&fl.sumva<=arg3).length
        }
    }
  async getReportEqReportByRoom(dto: ExportPdfDto) {
         const reportName = 'ผลประเมินความฉลาดทางอารมณ์ '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result  = await this.reportEq.find({where:{yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[] = result.map(m=>{
            return {
                v1:m.studentName,
                v2:m.studentNumber,
                v3:this.getLabelEq(m.sumva,0,139),
                v4:this.getLabelEq(m.sumva,140,170),
                v5:this.getLabelEq(m.sumva,171,500),
            }
        })
        const sumModel:DataRowModel={
            v1:this.getSumEq(dataList,'v3'),
            v2:this.getSumEq(dataList,'v4'),
            v3:this.getSumEq(dataList,'v5'),
            v4:dataList.length
        }
        return this.exportPdfService.getEqReportByRoom(header,dataList,sumModel)
    }
    getSumEq(dataList: DataRowModel[], arg1: string): any {
        return dataList.filter(fl=>fl[arg1] == '/').length
    }
    getLabelEq(sumva: number, arg1: number, arg2: number): any {
        if(sumva>=arg1&&sumva<=arg2){
            return `/`
        }
        return ``
    }
    studentSupportReport(dto: ExportPdfDto) {
        switch(dto.reportType){
            case 'ALL':
                return this.getReportStudentSupportReport (dto)
            case 'CLASS':
                return this.getReportStudentSupportReportByClass(dto)
            case 'ROOM':
                return this.getReportStudentSupportReportByRoom(dto)
        }
    }
  async getReportStudentSupportReport(dto: ExportPdfDto) {
         const reportName = 'รายงานการส่งเสริมและพัฒนาศักยภาพนักเรียน '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentSupport.find({where:{yearTermId:dto.yearTermId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const classResult = await this.getClassResult()

        const sumarizeList:DataRowModel[] = classResult.map(m=>{
            return{
                v1:m.typeName,
                v2:this.getSumPerfomanceByClass(m.id,result,1),
                v3:this.getSumPerfomanceByClass(m.id,result,2),
                v4:this.getSumPerfomanceByClass(m.id,result,3),
                v5:this.getSumPerfomanceByClass(m.id,result,4),
                v6:this.getSumPerfomanceByClass(m.id,result,5),
                v7:this.getSumPerfomanceByClass(m.id,result,6),
                v8:this.getSumPerfomanceByClass(m.id,result,7),
                v9:this.getSumPerfomanceByClass(m.id,result,8),
                v10:this.getSumPerfomanceByClass(m.id,result,9),
            }
        })
        const sumModel :DataRowModel= {
            v1:'รวม',
            v2:this.getSumPerfomanceByClass(-1,result,1),
            v3:this.getSumPerfomanceByClass(-1,result,2),
            v4:this.getSumPerfomanceByClass(-1,result,3),
            v5:this.getSumPerfomanceByClass(-1,result,4),
            v6:this.getSumPerfomanceByClass(-1,result,5),
            v7:this.getSumPerfomanceByClass(-1,result,6),
            v8:this.getSumPerfomanceByClass(-1,result,7),
            v9:this.getSumPerfomanceByClass(-1,result,8),
            v10:this.getSumPerfomanceByClass(-1,result,9),
        }
        sumarizeList.push(sumModel)
        return this.exportPdfService.getStudentSupportReportSumarize(header,sumarizeList,sumarizeList)
    }
  async getReportStudentSupportReportByClass(dto: ExportPdfDto) {
         const reportName = 'รายงานการส่งเสริมและพัฒนาศักยภาพนักเรียน '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentSupport.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const roomResult = await this.getRoomResult()
        const dataList:DataRowModel[] = result.map(m=>{return{
            v1:m.studentName,
            v2:m.roomName,
            v3:m.studentNumber,
            v4:`${this.getDateLabel(m.startDate)} - ${this.getDateLabel(m.endDate)}`,
            v5:m.activityName,
            v6:this.getPerformanceLabel(m.performance),
            v7:m.department,
            v8:m.result,
            v9:m.teacherName
        }})
        const sumarizeList:DataRowModel[] = roomResult.map(m=>{
            return{
                v1:m.name,
                v2:this.getSumPerfomanceByRoom(m.id,result,1),
                v3:this.getSumPerfomanceByRoom(m.id,result,2),
                v4:this.getSumPerfomanceByRoom(m.id,result,3),
                v5:this.getSumPerfomanceByRoom(m.id,result,4),
                v6:this.getSumPerfomanceByRoom(m.id,result,5),
                v7:this.getSumPerfomanceByRoom(m.id,result,6),
                v8:this.getSumPerfomanceByRoom(m.id,result,7),
                v9:this.getSumPerfomanceByRoom(m.id,result,8),
                v10:this.getSumPerfomanceByRoom(m.id,result,9),
            }
        })
        const sumModel :DataRowModel= {
            v1:'รวม',
            v2:this.getSumPerfomanceByRoom(-1,result,1),
            v3:this.getSumPerfomanceByRoom(-1,result,2),
            v4:this.getSumPerfomanceByRoom(-1,result,3),
            v5:this.getSumPerfomanceByRoom(-1,result,4),
            v6:this.getSumPerfomanceByRoom(-1,result,5),
            v7:this.getSumPerfomanceByRoom(-1,result,6),
            v8:this.getSumPerfomanceByRoom(-1,result,7),
            v9:this.getSumPerfomanceByRoom(-1,result,8),
            v10:this.getSumPerfomanceByRoom(-1,result,9),
        }
        sumarizeList.push(sumModel)
        return this.exportPdfService.getStudentSupportReportByClass(header,dataList,sumarizeList)
    }
    
    getSumPerfomanceByClass(id: number, result: ReportStudentSupport[], arg2: number): any {
        if(id==-1){
            return result.filter(fl=>fl.performance == arg2&& fl.classroomTypeId!=null).length
        }else{
            return result.filter(fl=>fl.performance == arg2&& fl.classroomTypeId == id).length
        }
    }
    getSumPerfomanceByRoom(id: number, result: ReportStudentSupport[], arg2: number): any {
        if(id==-1){
            return result.filter(fl=>fl.performance == arg2).length
        }else{
            return result.filter(fl=>fl.performance == arg2&& fl.classroomId == id).length
        }
    }
  async getReportStudentSupportReportByRoom(dto: ExportPdfDto) {
         const reportName = 'รายงานการส่งเสริมและพัฒนาศักยภาพนักเรียน '
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentSupport.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId,classroomId:dto.roomId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[] = result.map(m=>{return{
            v1:m.studentName,
            v2:m.roomName,
            v3:`${this.getDateLabel(m.startDate)} - ${this.getDateLabel(m.endDate)}`,
            v4:m.activityName,
            v5:this.getPerformanceLabel(m.performance),
            v6:m.department,
            v7:m.result,
            v8:m.teacherName
        }})
        const sumModel:DataRowModel = {
            v1:this.sumStudentHelp(result,1),
            v2:this.sumStudentHelp(result,2),
            v3:this.sumStudentHelp(result,3),
            v4:this.sumStudentHelp(result,4),
            v5:this.sumStudentHelp(result,5),
            v6:this.sumStudentHelp(result,6),
            v7:this.sumStudentHelp(result,7),
            v8:this.sumStudentHelp(result,8),
            v9:this.sumStudentHelp(result,9),
        }
        return this.exportPdfService.getStudentSupportReportByRoom(header,dataList,sumModel)
    }
    sumStudentHelp(result: ReportStudentSupport[], arg1: number): any {
        return result.filter(fl=>fl.performance == arg1).length
    }
    getPerformanceLabel(performance: number): any {
        switch(performance){
            case 1:
                return `ด้านวิชาการ`
                case 2 :
                    return `ด้านศิลปะ`
                    case 3 :
                        return `ด้านกีฬา`
                        case 4 :
                            return `ด้านดนตรี`
                            case 5 :
                                return `ด้านนาฎศิลป์`
                                case 6 :
                                    return `ด้านอาชีพ`
                                    case 7 :
                                        return `ทักษะชีวิต`
                                        case 8 :
                                            return `ด้านจิตอาษา`
                                            case 9 :
                                                return `อื่นๆ`
                    default:
                        return ``
        }
    }
    studentConsultReport(dto: ExportPdfDto) {
        switch(dto.reportType){
            case 'CLASS':
                return this.getReportStudentConsultReportByClass(dto)
            case 'ROOM':
                return this.getReportStudentConsultReportByRoom(dto)
        }
    }

  async getReportStudentConsultReportByClass(dto: ExportPdfDto) {
         const reportName = 'กำลังพัฒนา'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentConsult.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[] = result.map(m=>{
            return{
                v1:m.nickName,
                v2:m.roomName,
                v3:this.getDateLabel(m.createdAt),
                v4:this.getTimeLabel(m.diffTime) ,
                v5:this.getStoryLabel(m.storyType),
                v6:this.getResultLabel(m.resultType),
                v7:this.getSendTypeLabel(m.sentType,m.sentText) 
            }
        })
        console.log(dataList);
        
        const sumModel:DataRowModel ={
            v1:result.filter(fl=>fl.classroomId!=null).length,
            v2:this.countSentTo(result)
        }
        return this.exportPdfService.getStudentConsultReportByClass(header,dataList,sumModel)
    }
    getTimeLabel(diffTime: {}): any {
        console.log(diffTime);
        if(diffTime['minutes']){
            if(diffTime['hours']){
                return `${diffTime['hours']}:${+diffTime['minutes']<10?'0'+diffTime['minutes']:diffTime['minutes']} นาที`
            }
            return `${+diffTime['minutes']<10?'0'+diffTime['minutes']:diffTime['minutes']} นาที`

        }
        return ``
    }
  async getReportStudentConsultReportByRoom(dto: ExportPdfDto) {
    console.log('thisReport');
    
         const reportName = 'กำลังพัฒนา'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentConsult.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId,classroomId:dto.roomId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[] = result.map(m=>{
            return{
                v1:m.nickName,
                v2:this.getDateLabel(m.createdAt),
                v3:this.getTimeLabel(m.diffTime),
                v4:this.getStoryLabel(m.storyType),
                v5:this.getResultLabel(m.resultType),
                v6:this.getSendTypeLabel(m.sentType,m.sentText) 
            }
        })
        const sumModel:DataRowModel ={
            v1:result.filter(fl=>fl.classroomId!=null).length,
            v2:this.countSentTo(result)
        }
        return this.exportPdfService.getStudentConsultReportByRoom(header,dataList,sumModel)
    }
    countSentTo(result: ReportStudentConsult[]): any {
        return result.filter(fl=>fl.classroomId!=null && (fl.sentType == 3||fl.sentType == 4||fl.sentType == 5||fl.sentType == 6)).length
    }

    getSendTypeLabel(sentType: number,text:string): any {
        switch(sentType){
            case 1:
                return ``
                case 2:
                    return ``
                    case 3:
                        return `ส่งต่อครูแนะแนว`
                        case 4:
                            return `ส่งต่องานพยาบาล`
                            case 5:
                                return `ส่งต่องานปกครอง`
                                case 6:
                                    return text
                    default:
                        return ``
        }
    }
    getResultLabel(resultType: number): any {
        switch(resultType){
            case 1:
                return `นักเรียนสามารถแก้ปัญหาได้`
                case 2:
                    return `นักเรียนไม่สามารถแก้ปัญหาได้`
                    default:
                        return ``
        }
    }
    getStoryLabel(storyType: number): any {
        switch(storyType){
            case 1:
                return `การเรียน`
                case 2:
                    return `ส่วนตัวและสังคม`
                    case 3:
                        return `การศึกษาต่อและอาชีพ`
                    default:
                        return ``
        }
    }
    studentScolarReport(dto: ExportPdfDto) {
        switch(dto.reportType){
            case 'ALL':
                return this.getReportStudentScolarReport (dto)
            case 'CLASS':
                return this.getReportStudentScolarReportByClass(dto)
            case 'ROOM':
                return this.getReportStudentScolarReportByRoom(dto)
        }
    }
  async getReportStudentScolarReport(dto: ExportPdfDto) {
         const reportName = 'รายงานการรับทุนการศึกษาของนักเรียน'
        const header = await this.getHeaderReportHeaderScloar(reportName,dto.term,dto.year,dto.classId,dto.roomId)
        const result = await this.reportStudentScolar.find({where:{inTerm:dto.term,year:dto.year},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[]= result.map(m=>{
            return {
                v1:m.studentName??'',
                v2:m.typeName??'',
                v3:m.roomName??'',
                v4:m.studentNumber??'',
                v5:m.name??'',
                v6:m.amount??'',
                v7:m.getFrom??''
            }
        })
        const sumarizeList:DataRowModel[] = [
            {
                v1:'นักเรียนที่ได้รับทุนการศึกษา',
                v2:dataList.length,
            }
        ]

        const classResult = await this.getClassResult()
        classResult.forEach(el=>{
            sumarizeList.push({
                v1:el.typeName,
                v2:this.sumScholar(result,el.id)
            })
        })

        return this.exportPdfService.getStudentScolarReportSumarize(header,dataList,sumarizeList)
    }
    sumScholar(result: ReportStudentScolar[], id: number): any {
        return result.filter(fl=>fl.classroomTypeId == id).length
    }
    getClassResult() {
        return this.classroomType.find({where:{active:true,deletedAt:null},order:{typeName:'ASC'}})
    }
    getRoomResult() {
        return this.classroom.find({where:{active:true,deletedAt:null},order:{id:'ASC'}})
    }
  async getReportStudentScolarReportByClass(dto: ExportPdfDto) {
         const reportName = 'รายงานการรับทุนการศึกษาของนักเรียน'
        const header = await this.getHeaderReportHeaderScloar(reportName,dto.term,dto.year,dto.classId,dto.roomId)
        const roomResult = await this.getRoomResult()
        const result = await this.reportStudentScolar.find({where:{inTerm:dto.term,year:dto.year,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[]= result.map(m=>{
            return {
                v1:m.studentName??'',
                v2:m.roomName??'',
                v3:m.studentNumber??'',
                v4:m.name??'',
                v5:m.amount??'',
                v6:m.getFrom??''
            }
        })
        const sumarizeList:DataRowModel[] = [
            {
                v1:'นักเรียนที่ได้รับทุนการศึกษา',
                v2:dataList.length,
            }
        ]

        roomResult.forEach(el=>{
            sumarizeList.push({
                v1:this.getSdqLabelName(header.className,el.name),
                v2:this.sumScholarByRoom(result,el.id)
            })
        })
        return this.exportPdfService.getStudentScolarReportByClass(header,dataList,sumarizeList)
    }
    sumScholarByRoom(result: ReportStudentScolar[], id: number): any {
        return result.filter(fl=>fl.classroomId == id).length
    }
  async getReportStudentScolarReportByRoom(dto: ExportPdfDto) {
         const reportName = 'รายงานการรับทุนการศึกษาของนักเรียน'
        const header = await this.getHeaderReportHeaderScloar(reportName,dto.term,dto.year,dto.classId,dto.roomId)
        const result = await this.reportStudentScolar.find({where:{inTerm:dto.term,year:dto.year,classroomTypeId:dto.classId,classroomId:dto.roomId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[]= result.map(m=>{
            return {
                v1:m.studentName??'',
                v2:m.studentNumber??'',
                v3:m.name??'',
                v4:m.amount??'',
                v5:m.getFrom??''
            }
        })

        return this.exportPdfService.getStudentScolarReportByRoom(header,dataList,{v1:dataList.length})
    }
   async getHeaderReportHeaderScloar(reportName: string, term: string, year: string, classId: number, roomId: number):Promise<HeaderReport> {
        const classModel = await this.classroomType.findOne({where:{id:classId}})
        const roomModel = await this.classroom.findOne({where:{id:roomId}})
        const header:HeaderReport = {
            reportName:reportName,
            className:classModel?.typeName,
            roomName:roomModel?.name,
            year:year,
            term:term
        }
        return header
    }
    studentHelpReport(dto: ExportPdfDto) {
        switch(dto.reportType){
            case 'ALL':
                return this.getReportStudentHelpReport (dto)
            case 'CLASS':
                return this.getReportStudentHelpReportByClass(dto)
            case 'ROOM':
                return this.getReportStudentHelpReportByRoom(dto)
        }
    }
  async getReportStudentHelpReport(dto: ExportPdfDto) {
         const reportName = 'การป้องกันและแก้ไขปัญหา'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentHelp.find({where:{yearTermId:dto.yearTermId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const classResult = await this.getClassResult()
        const dataList:DataRowModel[] = result.map(m=>{
            return{
                v1:m.nickName,
                v2:m.className,
                v3:m.roomName,
                v4:m.activityName,
                v5:this.getStartToEndDateLabel(m.startDate,m.endDate),
                v6:this.getResultStdHelpLabel(m.resultHelpType),
                v7:m.resultText??''  
            }
        })
        const sumarizeList:DataRowModel[] = classResult.map(m=>{
            return {
                v1:m.typeName,
                v2:this.sumStdHelpBy(m.id,result,'classroomTypeId',1),
                v3:this.sumStdHelpBy(m.id,result,'classroomTypeId',2),
                v4:this.sumStdHelpBy(m.id,result,'classroomTypeId',-1),
            }
        })
        sumarizeList.push({
            v1:'รวม',
            v2:this.sumStdHelpBy(-1,result,'classroomTypeId',1),
            v3:this.sumStdHelpBy(-1,result,'classroomTypeId',2),
            v4:this.sumStdHelpBy(-1,result,'classroomTypeId',-1),
        })
        return this.exportPdfService.getStudentHelpReportSumarize(header,dataList,sumarizeList)
    }
  async getReportStudentHelpReportByClass(dto: ExportPdfDto) {
         const reportName = 'การป้องกันและแก้ไขปัญหา'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentHelp.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const roomResult = await this.getRoomResult()
        const dataList:DataRowModel[] = result.map(m=>{
            return{
                v1:m.nickName,
                v2:m.roomName,
                v3:m.activityName,
                v4:this.getStartToEndDateLabel(m.startDate,m.endDate),
                v5:this.getResultStdHelpLabel(m.resultHelpType),
                v6:m.resultText??''  
            }
        })
        const sumarizeList:DataRowModel[] = roomResult.map(m=>{
            return {
                v1:m.name,
                v2:this.sumStdHelpBy(m.id,result,'classroomId',1),
                v3:this.sumStdHelpBy(m.id,result,'classroomId',2),
                v4:this.sumStdHelpBy(m.id,result,'classroomId',-1),
            }
        })
        sumarizeList.push({
            v1:'รวม',
            v2:this.sumStdHelpBy(-1,result,'classroomId',1),
            v3:this.sumStdHelpBy(-1,result,'classroomId',2),
            v4:this.sumStdHelpBy(-1,result,'classroomId',-1),
        })
        return this.exportPdfService.getStudentHelpReportByClass(header,dataList,sumarizeList)
    }
    sumStdHelpBy(arg0: number, result: ReportStudentHelp[], arg2: string, arg3: number): any {
        if(arg0 == -1){
            if(arg3==-1){
                return result.length
            }else{
                return result.filter(fl=>fl.resultHelpType==arg3).length
            }
        }
        if(arg3==-1){
            return result.filter(fl=>fl[arg2]==arg0).length
        }else{
            return result.filter(fl=>fl[arg2]==arg0&&fl.resultHelpType == arg3).length
        }
    }
  async getReportStudentHelpReportByRoom(dto: ExportPdfDto) {
         const reportName = 'การป้องกันและแก้ไขปัญหา'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentHelp.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId,classroomId:dto.roomId},order:{classroomTypeId:'ASC',classroomId:'ASC',studentNumber:'ASC'}})
        const dataList:DataRowModel[] = result.map(m=>{
            return{
                v1:m.nickName,
                v2:m.activityName,
                v3:this.getStartToEndDateLabel(m.startDate,m.endDate),
                v4:this.getResultStdHelpLabel(m.resultHelpType),
                v5:m.resultText??''
            }
        })
        const sumModel:DataRowModel = {
            v1:this.sumStdHelp(result,1),
            v2:this.sumStdHelp(result,2),
            v3:result.length
        }
        return this.exportPdfService.getStudentHelpReportByRoom(header,dataList,sumModel)
    }
    sumStdHelp(result: ReportStudentHelp[], arg1: number): any {
        return result.filter(fl=>fl.resultHelpType == arg1).length
    }

    getResultStdHelpLabel(resultHelpType: number): any {
        if(resultHelpType == 1){
            return `พฤติกรรมดีขึ้น`
        }
        if(resultHelpType == 2){
            return `พฤติกรรมไม่ดีขึ้น`
        }
        return ''
    }
    getStartToEndDateLabel(startDate: Date, endDate: Date): any {
       const start = this.getDateLabel(startDate)
       const end = this.getDateLabel(endDate)
       return `${start} - ${end}`
    }
    studentSendtoReport(dto: ExportPdfDto) {
        console.log(dto);
        
        switch(dto.reportType){
            case 'ALL':
                return this.getReportStudentSendtoReport (dto)
            case 'CLASS':
                return this.getReportStudentSendtoReportByClass(dto)
            case 'ROOM':
                return this.getReportStudentSendtoReportByRoom(dto)
        }
    }
  async getReportStudentSendtoReport(dto: ExportPdfDto) {
    let dataList:DataRowModel[] 
    let reportName =''
    const result = await this.reportStudentConsult.find({where:{yearTermId:dto.yearTermId}})
    const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)

    if(dto.special == 'GROUP'){
            const orgArr = result.map(m=>m.sentText)
            const unique = orgArr.filter(onlyUnique);
            dataList = unique.map(m=>{
                return{
                    v1:m,
                    v2:this.countSendToByOrg(result,m)
                }
            })
            dataList.push(
                {
                    v1:'รวม',
                    v2:result.filter(fl=>fl.sentText).length
                }
            )
            dataList = dataList.filter(fl=>fl.v1)
            console.log();
            
        }else{
            reportName = 'สรุปผลการส่งต่อนักเรียน'
           
            const classResult = await this.getClassResult()
    
            dataList = classResult.map(m=>{
                return {
                    v1:m.typeName,
                    v2:this.getSumSendToInAll(m.id,result),
                    v3:this.getSumSendToOutAll(m.id,result),
                }
            })
        }
        
        if(dto.special == 'GROUP'){
            return this.exportPdfService.getStudentSendToReportSumarize(header,dataList,dataList)
        }else{
            return this.exportPdfService.getStudentSendToReportSumarize2(header,dataList,[])
        }
        
    }
    countSendToByOrg(result: ReportStudentConsult[], m: string): any {
        return result.filter(fl=>fl.sentText == m).length
    }
    getSumSendToInAll(id: number, result: ReportStudentConsult[]): any {

        return result.filter(fl=>fl.classroomTypeId == id&& fl.sentType == 6).length
    }
    getSumSendToOutAll(id: number, result: ReportStudentConsult[]): any {

        return result.filter(fl=>fl.classroomTypeId == id&&( fl.sentType == 3 || fl.sentType == 4  || fl.sentType == 5)).length
    }
  async getReportStudentSendtoReportByClass(dto: ExportPdfDto) {
         const reportName = 'สรุปผลการส่งต่อนักเรียน'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentConsult.find({where:{classroomTypeId:dto.classId,yearTermId:dto.yearTermId}})
        const roomResult = await this.getRoomResult()

        const dataList:DataRowModel[] = roomResult.map(m=>{
            return {
                v1:m.name,
                v2:this.getSumSendToIn(m.id,result),
                v3:this.getSumSendToOut(m.id,result),
            }
        })
        return this.exportPdfService.getStudentSendToReportByClass(header,dataList,[])
    }
    getSumSendToIn(id: number, result: ReportStudentConsult[]): any {

        return result.filter(fl=>fl.classroomId == id&& fl.sentType == 6).length
    }
    getSumSendToOut(id: number, result: ReportStudentConsult[]): any {

        return result.filter(fl=>fl.classroomId == id&&( fl.sentType == 3 || fl.sentType == 4  || fl.sentType == 5)).length
    }
  async getReportStudentSendtoReportByRoom(dto: ExportPdfDto) {
         const reportName = 'สรุปผลการส่งต่อนักเรียน'
        const header = await this.getHeaderReport(reportName,dto.yearTermId,dto.classId,dto.roomId)
        const result = await this.reportStudentConsult.find({where:{classroomTypeId:dto.classId,yearTermId:dto.yearTermId}})
        const roomResult = await this.getRoomResult()

        const dataList:DataRowModel[] = roomResult.map(m=>{
            return {
                v1:m.name,
                v2:this.getSumSendToIn(m.id,result),
                v3:this.getSumSendToOut(m.id,result),
            }
        })
        // return this.exportPdfService.getStudentSendToReportByClass(header,dataList,[])
        return this.exportPdfService.getStudentScolarReportByRoom(header,dataList,{})
    }
    studentFilterReport(dto: ExportPdfDto) {        
        switch(dto.reportType){
            case 'ALL':
                return this.getReportStudentFilter(dto)
            case 'CLASS':
                return this.getReportStudentFilterByClass(dto)
            case 'ROOM':
                return this.getReportStudentFilterByRoom(dto)
        }
    }
   async depresstionReport(dto: ExportPdfDto) {
        switch(dto.reportType){
            case 'ALL':
                return this.getReportDepression(dto)
            case 'CLASS':
                return this.getReportDepressionByClass(dto)
            case 'ROOM':
                return this.getReportDepressionByRoom(dto)
        }
    }
    async classroomDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomDropdown(dto,this.vwDropdownClassroomRepository);
      }
      async classroomTypeDropdown(dto: SearchClassroomDto):Promise<SelectItems[]> {
        return this.dropdownService.classroomTypeDropdown(dto,this.vwDropdownClassroomTypeRepository);
      }

      async currentTerm() {
        return this.yearTermService.findCurrrentTerm()
     }
     async yearTermDropdown(dto: SearchYearTermDto):Promise<SelectItems[]> {
        return await this.dropdownService.yeartermDropdown(dto,this.vwDropdownYearTermRepository);
      }

    async getReportDepression(dto:ExportPdfDto) {
        const result = await this.reportDepressionPesonal.find({where:{yearTermId:dto.yearTermId},order:{classId:'ASC',roomId:'ASC',studentNumber:'ASC'}})
        const headerName = 'รายงานผลประเมินโรคซึมเศร้าของนักเรียน'
        const header:HeaderReport = await this.getHeaderReport(headerName,dto.yearTermId,dto.classId,dto.roomId)
        const dataList:DataRowModel[] = result.map(m=>{
            return {
                v1:m.studentValue,
                v2:m.className,
                v3:m.roomName,
                v4:m.studentNumber??'',
                v5:m.depressionValue,
                v6:m.sucuidValue,
                v7:this.getDateLabel(m.updatedAt) ,
            }
        })
        const allClass = await this.classroomType.find({where:{active:true},order:{id:'ASC'}})
        const depression = await this.getDepressionBySumarize(allClass,result)
        const sucuid = await this.getSucuidBySumarize(allClass,result)
        return this.exportPdfService.getDepressionReportSumarize(header,dataList,depression,sucuid)
    }
  async getSucuidBySumarize(allClass: ClassroomType[], result: ReportDepressionPesonal[]) {
        const sumList:DataRowModel[] = []
        allClass.forEach(el=>{
            const model:DataRowModel = {
                v1:el.typeName,
                v2:this.getSumNoneSucuidByClass(result,el.id),
                v3:this.getSumLitleSucuidByClass(result,el.id),
                v4:this.getSumMeduimSucuidByClass(result,el.id),
                v5:this.getSumStrongSucuidByClass(result,el.id)
            }
            sumList.push(model)
        })
        return sumList
    }
  async getDepressionBySumarize(allClass: ClassroomType[], result: ReportDepressionPesonal[]) {
        const sumList:DataRowModel[] = []
        allClass.forEach(el=>{
            const model:DataRowModel = {
                v1:el.typeName,
                v2:this.getSumNoneDepressionByClass(result,el.id),
                v3:this.getSumLitleDepressionByClass(result,el.id),
                v4:this.getSumMeduimDeprssionByClass(result,el.id),
                v5:this.getSumStrongDepressionByClass(result,el.id)
            }
            sumList.push(model)
        })
        return sumList
    }
    async getReportDepressionByClass(dto:ExportPdfDto) {
        const result = await this.reportDepressionPesonal.find({where:{classId:dto.classId,yearTermId:dto.yearTermId},order:{classId:'ASC',roomId:'ASC',studentNumber:'ASC'}})
        const headerName = 'รายงานผลประเมินโรคซึมเศร้าของนักเรียน'
        const header:HeaderReport = await this.getHeaderReport(headerName,dto.yearTermId,dto.classId,dto.roomId)
        const dataList:DataRowModel[] = result.map(m=>{
            return {
                v1:m.studentValue,
                v2:m.roomName,
                v3:m.studentNumber??'',
                v4:m.depressionValue,
                v5:m.sucuidValue,
                v6:this.getDateLabel(m.updatedAt) ,
            }
        })
        const allRoom = await this.getRoomResult()
        const depression = this.getDepressionByClass(allRoom,result)
        const sucuid = this.getSucuidByClass(allRoom,result)
        return this.exportPdfService.getDepressionReportByClass(header,dataList,depression,sucuid)
    }
   getSucuidByClass(allRoom: Classroom[], result: ReportDepressionPesonal[]) {
        const sumList:DataRowModel[] = []
        allRoom.forEach(el=>{
            const model:DataRowModel = {
                v1:el.name,
                v2:this.getSumNoneSucuid(result,el.id),
                v3:this.getSumLitleSucuid(result,el.id),
                v4:this.getSumMeduimSucuid(result,el.id),
                v5:this.getSumStrongSucuid(result,el.id)
            }
            sumList.push(model)
        })
        return sumList
    }
   getSumStrongSucuid(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.sucuidValue >=17&&fl.roomId == id).length
    }
   getSumMeduimSucuid(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.sucuidValue >=9 && fl.sucuidValue<=16&&fl.roomId == id).length
    }
   getSumLitleSucuid(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.sucuidValue >=1 && fl.sucuidValue<=8&&fl.roomId == id).length
    }
   getSumNoneSucuid(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>(fl.sucuidValue==0 || fl.sucuidValue==null)&&fl.roomId == id).length
    }


   getSumStrongSucuidByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.sucuidValue >=17&&fl.classId == id).length
    }
   getSumMeduimSucuidByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.sucuidValue >=9 && fl.sucuidValue<=16&&fl.classId == id).length
    }
   getSumLitleSucuidByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.sucuidValue >=1 && fl.sucuidValue<=8&&fl.classId == id).length
    }
   getSumNoneSucuidByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>(fl.sucuidValue==0 || fl.sucuidValue==null)&&fl.classId == id).length
    }



   getDepressionByClass(allRoom: Classroom[], result: ReportDepressionPesonal[]) {
        const sumList:DataRowModel[] = []
        allRoom.forEach(el=>{
            const model:DataRowModel = {
                v1:el.name,
                v2:this.getSumNoneDepression(result,el.id),
                v3:this.getSumLitleDepression(result,el.id),
                v4:this.getSumMeduimDeprssion(result,el.id),
                v5:this.getSumStrongDepression(result,el.id)
            }
            sumList.push(model)
        })
        return sumList
    }


   getSumStrongDepression(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue>=19&&fl.roomId==id).length
    }
   getSumMeduimDeprssion(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue>=13&&fl.depressionValue<=18&&fl.roomId==id).length
    }
   getSumLitleDepression(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue>=7&&fl.depressionValue<=12&&fl.roomId==id).length
    }
   getSumNoneDepression(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue<7&&fl.roomId==id).length
    }

   getSumStrongDepressionByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue>=19&&fl.classId==id).length
    }
   getSumMeduimDeprssionByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue>=13&&fl.depressionValue<=18&&fl.classId==id).length
    }
   getSumLitleDepressionByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue>=7&&fl.depressionValue<=12&&fl.classId==id).length
    }
   getSumNoneDepressionByClass(result: ReportDepressionPesonal[],id:number) {
        return result.filter(fl=>fl.depressionValue<7&&fl.classId==id).length
    }

    async getReportDepressionByRoom(dto:ExportPdfDto) {
        const result = await this.reportDepressionPesonal.find({where:{classId:dto.classId,roomId:dto.roomId,yearTermId:dto.yearTermId},order:{classId:'ASC',roomId:'ASC',studentNumber:'ASC'}})
        const headerName = 'รายงานผลประเมินโรคซึมเศร้าของนักเรียน'
        const header:HeaderReport = await this.getHeaderReport(headerName,dto.yearTermId,dto.classId,dto.roomId)
        const dataList:DataRowModel[] = result.map(m=>{
            return {
                v1:m.studentValue,
                v2:m.studentNumber??'',
                v3:m.depressionValue,
                v4:m.sucuidValue,
                v5:this.getDateLabel(m.updatedAt) ,
            }
        })
        const noneDepression = this.getNoneDepression(dataList)
        const litleDepression = this.getLitleDepression(dataList)
        const meduimDeprssion = this.getMeduimDepression(dataList)
        const strongDepression = this.getStrongDepresson(dataList)

        const noneSucuid = this.getNoneSucuid(dataList)
        const litleSucuid = this.getLitleSucuid(dataList)
        const meduimSucuid = this.getMeduimSucuid(dataList)
        const strongSucuid =this.getStrongSucuid(dataList)
        const sumModel:ISumarizeRoomDepressionReport = {
            noneDepression:noneDepression,
            litleDepression:litleDepression,
            meduimDepression:meduimDeprssion,
            strongDepression:strongDepression,
            noneSucuid:noneSucuid,
            litleSuciud:litleSucuid,
            meduimSuciud:meduimSucuid,
            strongSucuid:strongSucuid
        }
        return this.exportPdfService.getDepressionReportByRoom(header,dataList,sumModel)
    }
   getDateLabel(updatedAt: Date) {
        if(updatedAt){
            return `${updatedAt.getDate()}/${updatedAt.getMonth()+1}/${updatedAt.getFullYear()}`
        }else{
            return ''
        }
    }
   getNoneDepression(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v3<7)
        return count.length
    }
   getLitleDepression(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v3>=7&&fl.v3<=12)
        return count.length
    }
   getMeduimDepression(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v3>=13&&fl.v3<=18)
        return count.length
    }
   getStrongDepresson(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v3>=19)
        return count.length
    }
   getNoneSucuid(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v4==0||fl.v4==null)
        return count.length
    }
   getLitleSucuid(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v4>=1&&fl.v4<=8)
        return count.length
    }
   getMeduimSucuid(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v4>=9&&fl.v4<=16)
        return count.length
    }
   getStrongSucuid(dataList: DataRowModel[]):number {
        let count = dataList.filter(fl=>fl.v4>=17)
        return count.length
    }
    async getHeaderReport(headerName: string, yearTermId, classId, roomId): Promise<HeaderReport> {
        const yearTermModel = await this.yearTerm.findOne({where:{id:yearTermId}})
        const classModel = await this.classroomType.findOne({where:{id:classId}})
        const roomModel = await this.classroom.findOne({where:{id:roomId}})
        const header:HeaderReport = {
            reportName:headerName,
            className:classModel?.typeName,
            roomName:roomModel?.name,
            year:yearTermModel?.year,
            term:yearTermModel?.term
        }
        return header
    }


    async getReportStudentFilter(dto: ExportPdfDto) {
        console.log('ALL');
        
        const headerName = 'ผลการคัดกรองนักเรียน'
        const header:HeaderReport = await this.getHeaderReport(headerName,dto.yearTermId,dto.classId,dto.roomId)
        const personal = await this.reportStudentFilterPosonal.find({where:{yearTermId:dto.yearTermId}})
        console.log(personal);
        
        
        const classResult = await this.getClassResult()
        const datalist:DataRowModel[] = classResult.map(m=>{
            return {
                name1:m.typeName,
                v1:this.getSumClassNormalPersonText(m.id,personal,'lernStatus',1),
                v2:this.getSumClassNormalPersonText(m.id,personal,'lernStatus',2),
                v3:this.getSumClassNormalPersonText(m.id,personal,'lernStatus',3),

                v4:this.getSumClassNormalPersonText(m.id,personal,'healtyStatus',1),
                v5:this.getSumClassNormalPersonText(m.id,personal,'healtyStatus',2),
                v6:this.getSumClassNormalPersonText(m.id,personal,'healtyStatus',3),

                v7:this.getSumClassNormalPersonText(m.id,personal,'feelingStatus',1),
                v8:this.getSumClassNormalPersonText(m.id,personal,'feelingStatus',2),
                v9:this.getSumClassNormalPersonText(m.id,personal,'feelingStatus',3),

                v10:this.getSumClassNormalPersonText(m.id,personal,'sexualStatus',1),
                v11:this.getSumClassNormalPersonText(m.id,personal,'sexualStatus',2),
                v12:this.getSumClassNormalPersonText(m.id,personal,'sexualStatus',3),

                v13:this.getSumClassNormalPersonText(m.id,personal,'drugStatus',1),
                v14:this.getSumClassNormalPersonText(m.id,personal,'drugStatus',2),
                v15:this.getSumClassNormalPersonText(m.id,personal,'drugStatus',3),

                v16:this.getSumClassNormalPersonText(m.id,personal,'gameStatus',1),
                v17:this.getSumClassNormalPersonText(m.id,personal,'gameStatus',2),
                v18:this.getSumClassNormalPersonText(m.id,personal,'gameStatus',3),

                v19:this.getSumClassNormalPersonText(m.id,personal,'economicStatus',1),
                v20:this.getSumClassNormalPersonText(m.id,personal,'economicStatus',2),
                v21:this.getSumClassNormalPersonText(m.id,personal,'economicStatus',3),

                v22:this.getSumClassNormalPersonText(m.id,personal,'securityStatus',1),
                v23:this.getSumClassNormalPersonText(m.id,personal,'securityStatus',2),
                v24:this.getSumClassNormalPersonText(m.id,personal,'securityStatus',3),

                v25:this.getSumClassNormalPersonText(m.id,personal,'specialStatus',1),
                v26:this.getSumClassNormalPersonText(m.id,personal,'specialStatus',2),
                v27:this.getSumClassNormalPersonText(m.id,personal,'specialStatus',3),

                v28:this.getSumClassNormalPersonText(m.id,personal,'electronicStatus',1),
                v29:this.getSumClassNormalPersonText(m.id,personal,'electronicStatus',2),
                v30:this.getSumClassNormalPersonText(m.id,personal,'electronicStatus',3),
            }
        })
        const sumModel:DataRowModel = {
            name1:`รวม`,
            v1:this.getSumClassNormalPersonText(-1,personal,'lernStatus',1),
            v2:this.getSumClassNormalPersonText(-1,personal,'lernStatus',2),
            v3:this.getSumClassNormalPersonText(-1,personal,'lernStatus',3),

            v4:this.getSumClassNormalPersonText(-1,personal,'healtyStatus',1),
            v5:this.getSumClassNormalPersonText(-1,personal,'healtyStatus',2),
            v6:this.getSumClassNormalPersonText(-1,personal,'healtyStatus',3),

            v7:this.getSumClassNormalPersonText(-1,personal,'feelingStatus',1),
            v8:this.getSumClassNormalPersonText(-1,personal,'feelingStatus',2),
            v9:this.getSumClassNormalPersonText(-1,personal,'feelingStatus',3),

            v10:this.getSumClassNormalPersonText(-1,personal,'sexualStatus',1),
            v11:this.getSumClassNormalPersonText(-1,personal,'sexualStatus',2),
            v12:this.getSumClassNormalPersonText(-1,personal,'sexualStatus',3),

            v13:this.getSumClassNormalPersonText(-1,personal,'drugStatus',1),
            v14:this.getSumClassNormalPersonText(-1,personal,'drugStatus',2),
            v15:this.getSumClassNormalPersonText(-1,personal,'drugStatus',3),

            v16:this.getSumClassNormalPersonText(-1,personal,'gameStatus',1),
            v17:this.getSumClassNormalPersonText(-1,personal,'gameStatus',2),
            v18:this.getSumClassNormalPersonText(-1,personal,'gameStatus',3),

            v19:this.getSumClassNormalPersonText(-1,personal,'economicStatus',1),
            v20:this.getSumClassNormalPersonText(-1,personal,'economicStatus',2),
            v21:this.getSumClassNormalPersonText(-1,personal,'economicStatus',3),

            v22:this.getSumClassNormalPersonText(-1,personal,'securityStatus',1),
            v23:this.getSumClassNormalPersonText(-1,personal,'securityStatus',2),
            v24:this.getSumClassNormalPersonText(-1,personal,'securityStatus',3),

            v25:this.getSumClassNormalPersonText(-1,personal,'specialStatus',1),
            v26:this.getSumClassNormalPersonText(-1,personal,'specialStatus',2),
            v27:this.getSumClassNormalPersonText(-1,personal,'specialStatus',3),

            v28:this.getSumClassNormalPersonText(-1,personal,'electronicStatus',1),
            v29:this.getSumClassNormalPersonText(-1,personal,'electronicStatus',2),
            v30:this.getSumClassNormalPersonText(-1,personal,'electronicStatus',3),
        }
        datalist.push(sumModel)
        console.log(datalist);
        header.reportType = EReportType.SUMARIZE
        return this.exportPdfService.getStudentFilterReport(header,datalist)
    }
    async getReportStudentFilterByClass(dto: ExportPdfDto) {
        const headerName = 'ผลการคัดกรองนักเรียน'
        const header:HeaderReport = await this.getHeaderReport(headerName,dto.yearTermId,dto.classId,dto.roomId)
        const personal = await this.reportStudentFilterPosonal.find({where:{yearTermId:dto.yearTermId,classroomTypeId:dto.classId}})
        const roomResult = await this.getRoomResult()
        const datalist:DataRowModel[] = roomResult.map(m=>{
            return {
                name1:m.name,
                v1:this.getSumRoomNormalPersonText(m.id,personal,'lernStatus',1),
                v2:this.getSumRoomNormalPersonText(m.id,personal,'lernStatus',2),
                v3:this.getSumRoomNormalPersonText(m.id,personal,'lernStatus',3),

                v4:this.getSumRoomNormalPersonText(m.id,personal,'healtyStatus',1),
                v5:this.getSumRoomNormalPersonText(m.id,personal,'healtyStatus',2),
                v6:this.getSumRoomNormalPersonText(m.id,personal,'healtyStatus',3),

                v7:this.getSumRoomNormalPersonText(m.id,personal,'feelingStatus',1),
                v8:this.getSumRoomNormalPersonText(m.id,personal,'feelingStatus',2),
                v9:this.getSumRoomNormalPersonText(m.id,personal,'feelingStatus',3),

                v10:this.getSumRoomNormalPersonText(m.id,personal,'sexualStatus',1),
                v11:this.getSumRoomNormalPersonText(m.id,personal,'sexualStatus',2),
                v12:this.getSumRoomNormalPersonText(m.id,personal,'sexualStatus',3),

                v13:this.getSumRoomNormalPersonText(m.id,personal,'drugStatus',1),
                v14:this.getSumRoomNormalPersonText(m.id,personal,'drugStatus',2),
                v15:this.getSumRoomNormalPersonText(m.id,personal,'drugStatus',3),

                v16:this.getSumRoomNormalPersonText(m.id,personal,'gameStatus',1),
                v17:this.getSumRoomNormalPersonText(m.id,personal,'gameStatus',2),
                v18:this.getSumRoomNormalPersonText(m.id,personal,'gameStatus',3),

                v19:this.getSumRoomNormalPersonText(m.id,personal,'economicStatus',1),
                v20:this.getSumRoomNormalPersonText(m.id,personal,'economicStatus',2),
                v21:this.getSumRoomNormalPersonText(m.id,personal,'economicStatus',3),

                v22:this.getSumRoomNormalPersonText(m.id,personal,'securityStatus',1),
                v23:this.getSumRoomNormalPersonText(m.id,personal,'securityStatus',2),
                v24:this.getSumRoomNormalPersonText(m.id,personal,'securityStatus',3),

                v25:this.getSumRoomNormalPersonText(m.id,personal,'specialStatus',1),
                v26:this.getSumRoomNormalPersonText(m.id,personal,'specialStatus',2),
                v27:this.getSumRoomNormalPersonText(m.id,personal,'specialStatus',3),

                v28:this.getSumRoomNormalPersonText(m.id,personal,'electronicStatus',1),
                v29:this.getSumRoomNormalPersonText(m.id,personal,'electronicStatus',2),
                v30:this.getSumRoomNormalPersonText(m.id,personal,'electronicStatus',3),
            }
        })
        const sumModel:DataRowModel = {
            name1:`รวม`,
            v1:this.getSumRoomNormalPersonText(-1,personal,'lernStatus',1),
            v2:this.getSumRoomNormalPersonText(-1,personal,'lernStatus',2),
            v3:this.getSumRoomNormalPersonText(-1,personal,'lernStatus',3),

            v4:this.getSumRoomNormalPersonText(-1,personal,'healtyStatus',1),
            v5:this.getSumRoomNormalPersonText(-1,personal,'healtyStatus',2),
            v6:this.getSumRoomNormalPersonText(-1,personal,'healtyStatus',3),

            v7:this.getSumRoomNormalPersonText(-1,personal,'feelingStatus',1),
            v8:this.getSumRoomNormalPersonText(-1,personal,'feelingStatus',2),
            v9:this.getSumRoomNormalPersonText(-1,personal,'feelingStatus',3),

            v10:this.getSumRoomNormalPersonText(-1,personal,'sexualStatus',1),
            v11:this.getSumRoomNormalPersonText(-1,personal,'sexualStatus',2),
            v12:this.getSumRoomNormalPersonText(-1,personal,'sexualStatus',3),

            v13:this.getSumRoomNormalPersonText(-1,personal,'drugStatus',1),
            v14:this.getSumRoomNormalPersonText(-1,personal,'drugStatus',2),
            v15:this.getSumRoomNormalPersonText(-1,personal,'drugStatus',3),

            v16:this.getSumRoomNormalPersonText(-1,personal,'gameStatus',1),
            v17:this.getSumRoomNormalPersonText(-1,personal,'gameStatus',2),
            v18:this.getSumRoomNormalPersonText(-1,personal,'gameStatus',3),

            v19:this.getSumRoomNormalPersonText(-1,personal,'economicStatus',1),
            v20:this.getSumRoomNormalPersonText(-1,personal,'economicStatus',2),
            v21:this.getSumRoomNormalPersonText(-1,personal,'economicStatus',3),

            v22:this.getSumRoomNormalPersonText(-1,personal,'securityStatus',1),
            v23:this.getSumRoomNormalPersonText(-1,personal,'securityStatus',2),
            v24:this.getSumRoomNormalPersonText(-1,personal,'securityStatus',3),

            v25:this.getSumRoomNormalPersonText(-1,personal,'specialStatus',1),
            v26:this.getSumRoomNormalPersonText(-1,personal,'specialStatus',2),
            v27:this.getSumRoomNormalPersonText(-1,personal,'specialStatus',3),

            v28:this.getSumRoomNormalPersonText(-1,personal,'electronicStatus',1),
            v29:this.getSumRoomNormalPersonText(-1,personal,'electronicStatus',2),
            v30:this.getSumRoomNormalPersonText(-1,personal,'electronicStatus',3),
        }
        datalist.push(sumModel)
        header.reportType = EReportType.CLASS
        return this.exportPdfService.getStudentFilterReport(header,datalist)
    }
    
    getSumClassNormalPersonText(id: number, personal: ReportStudentFilterPosonal[], key: string, value: number): any {
        if(id==-1){
            return personal.filter(fl=>fl[key]==value&& fl.classroomTypeId!=null).length
        }else{
            return personal.filter(fl=>fl[key]==value&&fl.classroomTypeId == id).length
        }
    }
    getSumRoomNormalPersonText(id: number, personal: ReportStudentFilterPosonal[], key: string, value: number): any {
        if(id==-1){
            return personal.filter(fl=>fl[key]==value&&fl.classroomId!=null).length
        }else{
            return personal.filter(fl=>fl[key]==value&&fl.classroomId == id).length
        }
    }
    async getReportStudentFilterByRoom(dto: ExportPdfDto) {
        const headerName = 'ผลการคัดกรองนักเรียน'
        const header:HeaderReport = await this.getHeaderReport(headerName,dto.yearTermId,dto.classId,dto.roomId)
        // const sumarize =await this.reportStudentFilterSumarizeByClassAndRoom.find({where:{yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId}})
        const personal = await this.reportStudentFilterPosonal.find({where:{yearTermId:dto.yearTermId,classroomId:dto.roomId,classroomTypeId:dto.classId}})
        const personalMaped:DataRowModel[] = personal.map((m,i)=>{
            return {
                    name1:'',
                    name2:'',
                    v1:(i+1),
                    v2:m.studentValue,
                    v3:this.getNormalPerson(m.summarize), 
                    v4:this.getTextNormalPerson(m.sdq1,m.sdq2,m.sdq3),
                    v5:m.specialSkill,
                    v6:this.getNormalPersonTextA(m.lernStatus),
                    v7:this.getNormalPersonTextB(m.lernStatus),
                    v8:this.getNormalPersonTextA(m.healtyStatus),
                    v9:this.getNormalPersonTextB(m.healtyStatus),
                    v10:this.getNormalPersonTextA(m.feelingStatus),
                    v11:this.getNormalPersonTextB(m.feelingStatus),
                    v12:this.getNormalPersonTextA(m.sexualStatus),
                    v13:this.getNormalPersonTextB(m.sexualStatus),
                    v14:this.getNormalPersonTextA(m.drugStatus),
                    v15:this.getNormalPersonTextB(m.drugStatus),
                    v16:this.getNormalPersonTextA(m.gameStatus),
                    v17:this.getNormalPersonTextB(m.gameStatus),
                    v18:this.getNormalPersonTextA(m.economicStatus),
                    v19:this.getNormalPersonTextB(m.economicStatus),
                    v20:this.getNormalPersonTextA(m.securityStatus),
                    v21:this.getNormalPersonTextB(m.securityStatus),
                    v22:this.getNormalPersonTextA(m.specialStatus),
                    v23:this.getNormalPersonTextB(m.specialStatus),
                    v24:this.getNormalPersonTextA(m.electronicStatus),
                    v25:this.getNormalPersonTextB(m.electronicStatus),
                    v26:this.getNormalPersonText(m.summarize),
                    v27:'',
                    v28:'',
                    v29:'',
                    v30:''
   
            }
        })
        const sumarizeMaped:DataRowModel[] = [
            {
                v1:'ด้านการเรียน',
                v2:this.getSumNormalPersonText( personal,'lernStatus',1),
                v3:this.getSumNormalPersonText( personal,'lernStatus',2),
                v4:this.getSumNormalPersonText( personal,'lernStatus',3),
            },
            {
                v1:'สุขภาพร่างกาย',
                v2:this.getSumNormalPersonText( personal,'healtyStatus',1),
                v3:this.getSumNormalPersonText( personal,'healtyStatus',2),
                v4:this.getSumNormalPersonText( personal,'healtyStatus',3),
            },
            {
                v1:'จิตใจและพฤติกรรม',
                v2:this.getSumNormalPersonText( personal,'feelingStatus',1),
                v3:this.getSumNormalPersonText( personal,'feelingStatus',2),
                v4:this.getSumNormalPersonText( personal,'feelingStatus',3),
            },
            {
                v1:'พฤติกรรมทางเพศ',
                v2:this.getSumNormalPersonText( personal,'sexualStatus',1),
                v3:this.getSumNormalPersonText( personal,'sexualStatus',2),
                v4:this.getSumNormalPersonText( personal,'sexualStatus',3),
            },
            {
                v1:'พฤติกรรมการใช้สารเสพติด',
                v2:this.getSumNormalPersonText( personal,'drugStatus',1),
                v3:this.getSumNormalPersonText( personal,'drugStatus',2),
                v4:this.getSumNormalPersonText( personal,'drugStatus',3),
            },
            {
                v1:'พฤติกรรมติดเกมส์',
                v2:this.getSumNormalPersonText( personal,'gameStatus',1),
                v3:this.getSumNormalPersonText( personal,'gameStatus',2),
                v4:this.getSumNormalPersonText( personal,'gameStatus',3),
            },
            {
                v1:'เศรษฐกิจ',
                v2:this.getSumNormalPersonText( personal,'economicStatus',1),
                v3:this.getSumNormalPersonText( personal,'economicStatus',2),
                v4:this.getSumNormalPersonText( personal,'economicStatus',3),
            },
            {
                v1:'สวัสดิภาพและความปลอดภัย',
                v2:this.getSumNormalPersonText( personal,'securityStatus',1),
                v3:this.getSumNormalPersonText( personal,'securityStatus',2),
                v4:this.getSumNormalPersonText( personal,'securityStatus',3),
            },
            {
                v1:'มีความต้องการพิเศษ',
                v2:this.getSumNormalPersonText( personal,'specialStatus',1),
                v3:this.getSumNormalPersonText( personal,'specialStatus',2),
                v4:this.getSumNormalPersonText( personal,'specialStatus',3),
            },
            {
                v1:'การใช้เครื่องมือสื่อสาร',
                v2:this.getSumNormalPersonText( personal,'electronicStatus',1),
                v3:this.getSumNormalPersonText( personal,'electronicStatus',2),
                v4:this.getSumNormalPersonText( personal,'electronicStatus',3),
            },

        ]
        const sumModel:DataRowModel = {
            v1:'รวม',
            v2:this.sumValueFromList(sumarizeMaped,'v2'),
            v3:this.sumValueFromList(sumarizeMaped,'v3'),
            v4:this.sumValueFromList(sumarizeMaped,'v4')
        }
        sumarizeMaped.push(sumModel)
        console.log(personal);
        
        const countSpecial = this.getCountSpecial(personal)
        return this.exportPdfService.getStudentFilterReportByRoom(header,personalMaped,sumarizeMaped,countSpecial)
    }
    getCountSpecial(personal: ReportStudentFilterPosonal[]):number {
        return personal.filter(fl=>fl.specialSkill).length
    }
    sumValueFromList(sumarizeMaped: DataRowModel[], key: string): any {
        let sumValue:number = 0
        sumarizeMaped.forEach(el=>{
            sumValue += +el[key]
        })
        return sumValue
    }
    getSumNormalPersonText(personal: ReportStudentFilterPosonal[], key: string, value: number): any {
        return personal.filter(fl=>fl[key] == value).length
    }
   getNormalPersonTextB(b: number) {
        if(!b){
            return ''
        }
        if(b>1){
            return '/'
        }
        return ''
    }
   getNormalPersonTextA(a: number) {
        if(a==1){
            return '/'
        }
        return ''
    }
   getNormalPersonText(lernStatus: number) {
        if(!lernStatus){
            return ''
        }
        if(lernStatus >1){
            return 'ส'
        }
        return 'ป'
    }
   getTextNormalPerson(sdq1: string, sdq2: string, sdq3: string) {
        if(sdq1 == 'มีปัญหา'|| sdq2 == 'มีปัญหา'|| sdq3 == 'มีปัญหา'||sdq1 == 'เสี่ยง'|| sdq2 == 'เสี่ยง'|| sdq3 == 'เสี่ยง'){
            return 'ส'
        }
        return 'ป'
    }
   getNormalPerson(summarize: number) {
        if(!summarize){
            return ''
        }
        if(summarize<3){
            return '-'
        }
        return '/'
    }
    // async getReportStudentHelpByClass() {
    //     return this.reportStudentHelpByClass.find()
    // }
    // async getReportStudentHelpByRoom() {
    //     return this.reportStudentHelpByRoom.find()
    // }
    // async getReportStudentHelpByClassAndRoom() {
    //     return this.reportStudentHelpByClassAndRoom.find({where:[{value2:MoreThan(0)},{value3:MoreThan(0)}]})
    // }
    // async getReportStudentScolarByClass() {
    //     return this.reportStudentScolarByClass.find()
    // }
    // async getReportStudentScolarByRoom() {
    //     return this.reportStudentScolarByRoom.find()
    // }
    // async getReportStudentScolarByClassAndRoom() {
    //     return this.reportStudentScolarByClassAndRoom.find({where:[{value2:MoreThan(0)}]})
    // }
    // async getReportStudentSendToByClass() {
    //     return this.reportStudentSendToByClass.find()
    // }
    // async getReportStudentSendToByRoom() {
    //     return this.reportStudentSendToByRoom.find()
    // }
    // async getReportStudentSendToByClassAndRoom() {
    //     return this.reportStudentSendToByClassAndRoom.find({where:[{value2:MoreThan(0)},{value3:MoreThan(0)}]})
    // }
    // async getReportStudentSendToSumarize() {
    //     return this.reportStudentSendToSumarize.find()
    // }
    
    // async getReportStressSumarize() {
    //     return this.reportStressSumarize.find()
    // }
    // async getReportStressByClass() {
    //     return this.reportStressByClass.find()
    // }
    // async getReportStressByClassAndRoom() {
    //     return this.reportStressByClassAndRoom.find({where:[{value2:MoreThan(0)},{value3:MoreThan(0)},{value4:MoreThan(0)},{value5:MoreThan(0)}]})
    // }
    // async getReportStressByRoom() {
    //     return this.reportStressByRoom.find()
    // }
    // async getReportStudentConsultant() {
    //     const sumConsult = await this.studentConsultant.count({where:{deletedAt:null,sentType:Not(null)}})
    //     const sumSentTo = await this.studentConsultant.count({where:{deletedAt:null,storyType:3}})
    //     return [
    //     {
    //         name:'นักเรียนที่รับคำปรึกษา',
    //         value1:sumConsult
    //     },
    //     {
    //         name:'นักเรียนที่ส่งต่อ',
    //         value1:sumSentTo
    //     }
    // ]
    // }
    
    constructor(
        @InjectRepository(ReportHomeVisitSumarize)
        private readonly reportHomvisitSumarize: Repository<ReportHomeVisitSumarize>,
        @InjectRepository(ReportHomeVisitNeedHelp)
        private readonly reportHomeVisitNeedHelp: Repository<ReportHomeVisitNeedHelp>,
        @InjectRepository(ReportHomeVisitPersonal)
        private readonly reportHomeVisitPersonal: Repository<ReportHomeVisitPersonal>,

        @InjectRepository(VwSdqTableList)
        private readonly sdqRepository: Repository<VwSdqTableList>,
        @InjectRepository(ReportEq)
        private readonly reportEq: Repository<ReportEq>,
        @InjectRepository(ReportDepressionPesonal)
        private readonly reportDepressionPesonal: Repository<ReportDepressionPesonal>,
        
        @InjectRepository(ReportStudentHelp)
        private readonly reportStudentHelp: Repository<ReportStudentHelp>,
        @InjectRepository(ReportStudentConsult)
        private readonly reportStudentConsult: Repository<ReportStudentConsult>,
        @InjectRepository(ReportStudentFilterSumarize)
        private readonly reportStudentFilterSumarize: Repository<ReportStudentFilterSumarize>,
        @InjectRepository(ReportStudentFilterByClass)
        private readonly reportStudentFilterByClass: Repository<ReportStudentFilterByClass>,
        @InjectRepository(ReportStudentFilterByClassAndRoom)
        private readonly reportStudentFilterByClassAndRoom: Repository<ReportStudentFilterByClassAndRoom>,
        @InjectRepository(ReportStudentSupport)
        private readonly reportStudentSupport: Repository<ReportStudentSupport>,
        
        @InjectRepository(ReportStress)
        private readonly reportStress: Repository<ReportStress>,
        @InjectRepository(ReportStudentFilterSumarizeByClassAndRoom)
        private readonly reportStudentFilterSumarizeByClassAndRoom: Repository<ReportStudentFilterSumarizeByClassAndRoom>,
        @InjectRepository(ReportStudentFilterPosonal)
        private readonly reportStudentFilterPosonal: Repository<ReportStudentFilterPosonal>,
        
        @InjectRepository(ReportStudentScolar)
        private readonly reportStudentScolar: Repository<ReportStudentScolar>,
        @InjectRepository(Classroom)
        private readonly classroom: Repository<Classroom>,
        @InjectRepository(ClassroomType)
        private readonly classroomType: Repository<ClassroomType>,
        @InjectRepository(YearTerm)
        private readonly yearTerm: Repository<YearTerm>,
        @InjectRepository(VwYearTermDropdown)
        private readonly vwDropdownYearTermRepository:Repository<VwYearTermDropdown>,
        @InjectRepository(VwClassroomDropdown)
        private readonly vwDropdownClassroomRepository:Repository<VwClassroomDropdown>,
        @InjectRepository(VwClassroomTypeDropdown)
        private readonly vwDropdownClassroomTypeRepository:Repository<VwClassroomTypeDropdown>,
        private readonly dropdownService: DropdownService,
        private readonly yearTermService:YearTermService,
        private readonly exportPdfService:ExportPdfService,
        private readonly studentService:StudentService,
        private readonly imagesService:ImagesService
        ){
        super()
    }


    
}
