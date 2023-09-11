import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_EQ } from "./source/css-eq"

export class EqReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_EQ)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[],sumarizeList:DataRowModel) {
        const perPage: number = 30
        const pageCount: number = Math.ceil(dataList.length / perPage)
        let report = ``
        let startRec: number = 0    
        if (dataList.length > 0) {
          for (let i = 0; i < pageCount; i++) {
            startRec = i;
            report += this.getHeaderRoom(header)
            report += this.getReportTable([...dataList].splice((startRec * perPage), perPage),header,sumarizeList)
          }
        }
        return report
    
    }
    getReportHeader(header: HeaderReport) {
        return `<div class="a4">
        <p class="header left">หน้ารายงานผล (รายห้อง)  </p>
        <p class="header center">ผลประเมินความฉลาดทางอารมณ์  </p>
        <p class="header center">ชั้นมัธยมศึกษาปีที่<span>${this.getClassOnly(header.className)}</span>/ <span>${header.roomName}</span> ปีการศึกษา <span>${header.term}/${header.year}</span></p>`
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel) {
  
        let table = `<div class="content">
        <table>
         <tr >
             <th class="bold">
                 ชื่อ-สกุล
             </th>
             <th class="bold">
                 เลขที่
             </th>
             <th class="bold">
                 EQ ต่ำกว่าปกติ
             </th>
             <th class="bold">
                 EQ ปกติ
             </th>
             <th class="bold">
                 EQ สูงกว่าปกติ
             </th>
         </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `  </table>
        <p class="left mt1">สรุปผลการประเมิน</p>
        <div class="flex">
         <div class="flex1">
             <p class="bold left">EQ ต่ำกว่าปกติ</p>
             <p  class="bold left">EQ ปกติ</p>
             <p  class="bold left">EQ สูงกว่าปกติ</p>
             <p class="bold left">รวม</p>
         </div>
         <div >
             <p class="bold left">จำนวน <span>${sumarizeList.v1??""}</span> คน</p>
             <p class="bold left">จำนวน <span>${sumarizeList.v2??""}</span> คน</p>
             <p class="bold left">จำนวน <span>${sumarizeList.v3??""}</span> คน</p>
             <p class="bold left">จำนวน <span>${sumarizeList.v4??""}</span> คน</p>
         </div>
        </div>
     </div>
     
     </div>`
        return table
      
      
       
    }
    private getRowData(el: DataRowModel) {
          return `    <tr>
          <td class="c1">${el.v1??""}</td>
          <td class="c2">${el.v2??""}</td>
          <td class="c3">${el.v3??""}</td>
          <td class="c3">${el.v4??""}</td>
          <td class="c3">${el.v5??""}</td>
      </tr>`
      }
}