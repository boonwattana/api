import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_SCOLAR } from "./source/css-std-scolar"

export class StudentScolarReportSumarize extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_SCOLAR)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        this.html += this.addReportSumarize(sumarizeList)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    addReportSumarize(sumarizeList: DataRowModel[]) {
        let paper = `<div class="a4">
        <div class="content">
           
           <div class="flex sumarize">
            <div class="flex1">
                <p class="title">สรุปผล</p>
            </div>
            <div class="flex2">`
        sumarizeList.forEach(el=>{
            paper += `        <p class="title">${el.v1??""} </p>`
        })
        paper += `    </div>
        <div class="flex3">`
        sumarizeList.forEach(ev=>{
            paper += `        <p class="title">จำนวน <span>${ev.v2??""}</span> คน</p>`
        })
        paper += `    </div>
        </div>
     </div>
     </div>`
     return paper
    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[],sumarizeList:DataRowModel[]) {
        let report = ``
        report += this.getHeaderSumarize(header)
        report += this.getReportTable(dataList,header,sumarizeList)
        return report
    
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel[]) {
  
        let table = `
        <div class="content">
           <table>
            <tr>
                <th>ชื่อ-สกุล</th>
                <th>ระดับชั้น</th>
                <th>ห้อง</th>
                <th>เลขที่</th>
                <th>ชื่อทุนการศึกษา</th>
                <th>จำนวนเงิน</th>
                <th>หน่วยงาน/บุคคลที่มอบทุน</th>
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
           <td class="col1">${el.v1??""}</td>
           <td class="col2">${el.v2??""}</td>
           <td class="col2">${el.v3??""}</td>
           <td class="col2">${el.v4??""}</td>
           <td class="col3">${el.v5??""}</td>
           <td class="col4">${el.v6??""}</td>
           <td class="col5">${el.v7??""}</td>
       </tr> `
      }
}