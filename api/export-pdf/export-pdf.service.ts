import { BadRequestException, Injectable } from "@nestjs/common";
import { generatePdf } from 'html-pdf-node-ts';
import { PDFOptions } from 'puppeteer';
import { EReportType } from "./enum/report-enum";
import { DataRowModel, HeaderReport } from "./interface/interface";
import { ClassDepressionReport } from "./libs/depression-report/class-depression-report";
import { ISumarizeRoomDepressionReport, RoomDepressionReport } from "./libs/depression-report/room-depression-report";
import { SumarizeDepressionReport } from "./libs/depression-report/sumarize-depression-report";
import { EqReportByClass } from "./libs/eq-report/class-eq-report";
import { EqReportByRoom } from "./libs/eq-report/room-eq-report";
import { EqReportSumarize } from "./libs/eq-report/sumarize-eq-report";
import { SdqReportByClass } from "./libs/sdq-report/class-sdq-report";
import { SdqReportByRoom } from "./libs/sdq-report/room-sdq-report";
import { SdqReportSumarize } from "./libs/sdq-report/sumarize-sdq-report";
import { StudentConsultReportByClass } from "./libs/std-consult-report/class-std-consult-report";
import { StudentConsultReportByRoom } from "./libs/std-consult-report/room-std-consult-report";
import { StudentHelpReportByClass } from "./libs/std-help-report/class-std-help-report";
import { StudentHelpReportByRoom } from "./libs/std-help-report/room-std-help-report";
import { StudentHelpReportSumarize } from "./libs/std-help-report/sumarize-std-help-report";
import { HomvisitRowData, StudentHomeVisitReportByRoom } from "./libs/std-homvisit-report/room-std-homvisit-report";
import { StudentScolarReportByClass } from "./libs/std-scolar-report/class-std-scolar-report";
import { StudentScolarReportByRoom } from "./libs/std-scolar-report/room-std-scolar-report";
import { StudentScolarReportSumarize } from "./libs/std-scolar-report/sumarize-std-scolar-report";
import { StudentSendToReportByClass } from "./libs/std-send-to-report/class-std-send-to-report";
import { StudentSendToReportSumarize } from "./libs/std-send-to-report/sumarize-std-send-to-report";
import { StudentSendToReportSumarize2 } from "./libs/std-send-to-report/sumarize2-std-send-to-report";
import { StudentSupportReportByClass } from "./libs/std-support-report/class-std-support-report";
import { StudentSupportReportByRoom } from "./libs/std-support-report/room-std-support-report";
import { StudentSupportReportSumarize } from "./libs/std-support-report/sumarize-std-support-report";
import { StressReportByClass } from "./libs/stress-report/class-stress-report";
import { StressReportByRoom } from "./libs/stress-report/room-stress-report";
import { StressReportSumarize } from "./libs/stress-report/sumarize-stress-report";
import { StudentFilterReportByRoom } from "./libs/student-filter/student-filter-report-by-room";
import { StudentFilterReport } from "./libs/student-filter/student-filter-report.model";
import { HtmlScanoutReportModel } from "./scanout-report-model";
@Injectable()
export class ExportPdfService {
    constructor(    
      
      ){
        
    }
    async getEqReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:EqReportByClass = new EqReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getEqReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:EqReportByRoom = new EqReportByRoom(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getEqReportSumarize(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:EqReportSumarize = new EqReportSumarize(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }




    async getSdqReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:SdqReportByClass = new SdqReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getSdqReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[],sumarizeList2:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:SdqReportByRoom = new SdqReportByRoom(header,dataList,sumarizeList,sumarizeList2)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getSdqReportSumarize(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:SdqReportSumarize = new SdqReportSumarize(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }



    async getStudentConsultReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentConsultReportByClass = new StudentConsultReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStudentConsultReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentConsultReportByRoom = new StudentConsultReportByRoom(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }




    async getStudentHelpReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentHelpReportByClass = new StudentHelpReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStudentHelpReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentHelpReportByRoom = new StudentHelpReportByRoom(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStudentHelpReportSumarize(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentHelpReportSumarize = new StudentHelpReportSumarize(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }



    async getStudentHomeVisitReportByRoom(header:HeaderReport,dataList:HomvisitRowData[],sumarizeList:DataRowModel[],sumModel:DataRowModel){
      if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentHomeVisitReportByRoom = new StudentHomeVisitReportByRoom(header,dataList,sumarizeList,sumModel)
      const html = service.getHtml() 
      try{
        return this.downloadPdf(html,false,'10mm','10mm')
      }catch(e){
        console.log('error on service : ',e);
      }
    }




    async getStudentSendToReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentSendToReportByClass = new StudentSendToReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }

    async getStudentSendToReportSumarize(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentSendToReportSumarize = new StudentSendToReportSumarize(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }

    async getStudentSendToReportSumarize2(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
      if(dataList.length==0){
  throw new BadRequestException('ไม่มีข้อมูล')
}
const service:StudentSendToReportSumarize2 = new StudentSendToReportSumarize2(header,dataList,sumarizeList)
const html = service.getHtml() 
return this.downloadPdf(html)
}

    async getStudentSupportReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentSupportReportByClass = new StudentSupportReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStudentSupportReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentSupportReportByRoom = new StudentSupportReportByRoom(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStudentSupportReportSumarize(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentSupportReportSumarize = new StudentSupportReportSumarize(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }


    async getStressReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StressReportByClass = new StressReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStressReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StressReportByRoom = new StressReportByRoom(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStressReportSumarize(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StressReportSumarize = new StressReportSumarize(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }

    
    async getStudentScolarReportByClass(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentScolarReportByClass = new StudentScolarReportByClass(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStudentScolarReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentScolarReportByRoom = new StudentScolarReportByRoom(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getStudentScolarReportSumarize(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentScolarReportSumarize = new StudentScolarReportSumarize(header,dataList,sumarizeList)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }

    async getDepressionReportSumarize(header:HeaderReport,dataList:DataRowModel[],depression:DataRowModel[],sucuid:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:SumarizeDepressionReport = new SumarizeDepressionReport(header,dataList,depression,sucuid)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
    async getDepressionReportByClass(header:HeaderReport,dataList:DataRowModel[],depression:DataRowModel[],sucuid:DataRowModel[]){
            if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:ClassDepressionReport = new ClassDepressionReport(header,dataList,depression,sucuid)
      const html = service.getHtml() 
      return this.downloadPdf(html)
    }
  async getDepressionReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumModel:ISumarizeRoomDepressionReport){
          if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:RoomDepressionReport = new RoomDepressionReport(header,dataList,sumModel)
    const html = service.getHtml()    
    console.log(html);
    return this.downloadPdf(html)
  }
  async getStudentFilterReport(header:HeaderReport,dataList:DataRowModel[]){
          if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentFilterReport = new StudentFilterReport(header,dataList)
    const html = service.getHtml()  
    return this.downloadPdf(html,true,'10mm','10mm')
  }
  async getStudentFilterReportByRoom(header:HeaderReport,dataList:DataRowModel[],sumarize:DataRowModel[],countSpecial:number){
          if(dataList.length==0){
        throw new BadRequestException('ไม่มีข้อมูล')
      }
      const service:StudentFilterReportByRoom = new  StudentFilterReportByRoom(header,dataList,sumarize,countSpecial)
    const html = service.getHtml()    
    return this.downloadPdf(html,true,'10mm','10mm')
  }
  
  private async downloadPdf(html:string,landscape:boolean=false,mt:string ='0mm',mb:string='0mm'){
        const content = { content: html };
        const options: PDFOptions = {
          format: 'A4',
          landscape:landscape,
          margin:{
            bottom:mb,
            top:mt
          }
        };
        return generatePdf(content, {...options,
          
          args:[
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--deterministic-fetch',
        '--disable-features=IsolateOrigins',
        '--disable-site-isolation-trials',
      ]})
      

    }
}