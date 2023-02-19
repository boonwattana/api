import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_SEND_TO } from "./source/css-std-send-to"

export class StudentSendToReportSumarize extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],dataList2:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_SEND_TO)
        this.html += this.openTagBody()
        //this.html += this.addReport(header,dataList)
        this.html += this.addReport2(header,dataList2)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[]) {
        let report = ``
        report += this.getHeaderSumarize(header)
        report += this.getReportTable(dataList,header)
        return report
    
    }
    private addReport2(header: HeaderReport, dataList: DataRowModel[]) {
        let report = ``
        report += this.getHeaderSumarize2(header)
        report += this.getReportTable2(dataList,header)
        return report
    
    }
    getHeaderSumarize2(header: HeaderReport) {
        return `<div class="a4">
        <p class="header left">หน้ารายงานผลสถานที่ส่งต่อภายนอก (ทั้งโรงเรียน) </p>
        <p class="header center">สรุปผลการส่งต่อนักเรียน</p>
        <p class="header center">ภาคเรียนที่<span>${header.term}</span> ปีการศึกษา <span>${header.year}</span></p>`
    }
    private getReportTable2(dataList: DataRowModel[],header:HeaderReport) {
  
        let table = `<div class="content">
        <table>
         <tr>
             <th>ชื่อหน่วยงาน</th>
             <th>จำนวน (คน)</th>
         </tr>`
        dataList.forEach(el=>{
         table += this.getRowData2(el)
        })
        table += `  </table>
        `
        return table
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport) {
  
        let table = `<div class="content">
        <table>
         <tr>
             <th>ระดับชั้น</th>
             <th>ส่งต่อภายใน</th>
             <th>ส่งต่อภายนอก</th>
         </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `   </table>
        </div>
        
        </div>`
        return table
    }
    private getRowData(el: DataRowModel) {
         
   
           return `    <tr>
           <td class="cols">${el.v1??""}</td>
           <td class="cols r">${el.v2??""}</td>
           <td class="cols r">${el.v3??""}</td>
       </tr> `
      }
      private getRowData2(el: DataRowModel) {
         
   
        return `    <tr>

        <td class="col1">${el.v1??""}</td>
        <td class="col2 r">${el.v2??""}</td>
    </tr> `
   }
}