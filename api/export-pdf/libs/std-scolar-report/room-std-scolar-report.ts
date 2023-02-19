import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_SCOLAR } from "./source/css-std-scolar"

export class StudentScolarReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_SCOLAR)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[],sumarizeList:DataRowModel) {
        let report = ``
        report += this.getHeaderRoom(header)
        report += this.getReportTable(dataList,header,sumarizeList)
        return report
    
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel) {
  
        let table = `<div class="content">
        <table>
         <tr>
             <th>ชื่อ-สกุล</th>
             <th>เลขที่</th>
             <th>ชื่อทุนการศึกษา</th>
             <th>จำนวนเงิน</th>
             <th>หน่วยงาน/บุคคลที่มอบทุน</th>
         </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `   </table>
        <div class="flex sumarize">
         <div class="flex1">
             <p class="title">สรุปผล</p>
         </div>
         <div class="flex2">
             <p class="title">นักเรียนที่ได้รับทุนการศึกษา </p>
         </div>
         <div class="flex3">
             <p class="title">จำนวน <span>${sumarizeList.v1??""}</span> คน</p>
         </div>
        </div>
     </div>
     </div>`
        return table
      
      
       
    }
    private getRowData(el: DataRowModel) {
         
   
           return `    <tr>
           <td class="col1">${el.v1??""}</td>
           <td class="col2">${el.v2??""}</td>
           <td class="col3">${el.v3??""}</td>
           <td class="col4">${el.v4??""}</td>
           <td class="col5">${el.v5??""}</td>
       </tr> `
      }
}