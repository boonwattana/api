import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_HELP } from "./source/css-std-help"

export class StudentHelpReportByClass extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_HELP)
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
  
        let table = `<div class="content">
        <table>
         <tr>
             <th>นามสมมติ</th>
             <th>ห้อง</th>
             <th>ชื่อกิจกรรม</th>
             <th>วันที่เข้าร่วมกิจกรรม</th>
             <th>ผลกิจกรรม</th>
             <th>สาเหตุ</th>
         </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `   </table>
        <p class="sumarize">สรุปผลการแก้ไขและป้องกัน</p>
        <table>
         <tr>
             <th>
                 ห้อง
             </th>
             <th>
                 พฤติกรรมดีขึ้น(คน)
             </th>
             <th>
                 พฤติกรรมไม่ดีขึ้น(คน)
             </th>
             <th>
                 รวม
             </th>
         </tr>

`
        sumarizeList.forEach(el=>{
            table += `         <tr>
            <td class="col1a">${el.v1??""}</td>
            <td class="col2a">${el.v2??""}</td>
            <td class="col2a">${el.v3??""}</td>
            <td class="col1a">${el.v4??""}</td>
        </tr>`
        })
     table += `        </table>
     </div>
     
     </div>`
        return table
      
      
       
    }
    private getRowData(el: DataRowModel) {
         
   
           return `    <tr>
           <td class="col1">${el.v1??""}</td>
           <td class="col2">${el.v2??""}</td>
           <td class="col1">${el.v3??""}</td>
           <td class="col1">${el.v4??""}</td>
           <td class="col1">${el.v5??""}</td>
           <td class="col1">${el.v6??""}</td>
       </tr> `
      }
}