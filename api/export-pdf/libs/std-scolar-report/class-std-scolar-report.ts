import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_SCOLAR } from "./source/css-std-scolar"

export class StudentScolarReportByClass extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_SCOLAR)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        this.html += this.getReportSumarizeTable(sumarizeList)

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
    getReportSumarizeTable(sumarizeList: DataRowModel[]) {
        let paper = `<div class="a4">
        <div class="content">
           
           <div class="flex sumarize">
            <div class="flex1">
                <p class="title">สรุปผล</p>
            </div>
            <div class="flex2">
             `
        sumarizeList.forEach(el=>{
            paper += `<p class="title"> ${el.v1??""} </p>`
        })
        paper += `    </div>
        <div class="flex3">`
        sumarizeList.forEach(el=>{
            paper += `        <p class="title">จำนวน <span>${el.v2??""}</span> คน</p>`
        })
        paper += `    </div>
        </div>
     </div>
     </div>`
     return paper
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel[]) {
  
        let table = `<div class="content">
        <table>
         <tr>
             <th>ชื่อ-สกุล</th>
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
           <td class="col3">${el.v4??""}</td>
           <td class="col4">${el.v5??""}</td>
           <td class="col5">${el.v6??""}</td>
       </tr> `
      }
}