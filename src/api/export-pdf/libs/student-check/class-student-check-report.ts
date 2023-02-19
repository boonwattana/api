import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STUDENT_CHECK } from "./source/html-student-check"

export class StudentCheckReportByClass extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STUDENT_CHECK)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[],sumarizeList:DataRowModel[]) {
        let report = ``
        report += this.getHeaderClass(header)
        report += this.getReportTable(dataList,header,sumarizeList)
        return report
    
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel[]) {
  
        let table = ``
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `  </table>
        <p class="reportName fontWeight">สรุปผลการคัดกรองนักเรียน  </p>
        <table class="nonBorder">`
        return table
      
      
       
    }
    private getRowData(el: DataRowModel) {
         
   
           return ` `
      }
}