import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_CONSULT } from "./source/css-std-consult"

export class StudentConsultReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_CONSULT)
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
        report += this.getReportHeader(header)
        report += this.getReportTable(dataList,header,sumarizeList)
        return report
    
    }
    getReportHeader(header: HeaderReport) {
        return `<div class="a4">
        <p class="header left">หน้ารายงานผล (รายห้อง)</p>
        <p class="header center">การให้คำปรึกษา</p>
        <p class="header center">ชั้นมัธยมศึกษาปีที่<span>${this.getClassOnly(header.className)}</span>/ <span>${header.roomName}</span> ภาคเรียนที่ <span>${header.term}</span> ปีการศึกษา <span>${header.year}</span></p>`
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel) {
  
        let table = `<div class="content">
        <table>
         <tr>
             <th> นามสมมติ</th>
             <th>วันที่รับคำปรึกษา</th>
             <th>เวลาที่รับคำปรึกษา (นาที)</th>
             <th>เรื่อง</th>
             <th>ผลการให้คำปรึกษา</th>
             <th>กรณีส่งต่อ</th>
         </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `   </table>

        <div class="flex">
         <div class="flex1">
             <p class="left bold">สรุปผล</p>
         </div>
         <div class="flex2">
             <p class="left bold">1.นักเรียนที่รับคำปรึกษา</p>
             <p class="left bold">2. นักเรียนที่ส่งต่อ</p>
         </div>
         <div class="flex3">
             <p class="left bold">จำนวน <span>${sumarizeList.v1??""}</span> คน</p>
             <p class="left bold">จำนวน <span>${sumarizeList.v2??""}</span> คน</p>
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
          <td class="col6">${el.v6??""}</td>
      </tr>`
      }
}