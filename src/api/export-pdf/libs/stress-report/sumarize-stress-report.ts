import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STRESS } from "./source/css-stress"

export class StressReportSumarize extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STRESS)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        this.html += this.addReportSumarize(header,sumarizeList)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    addReportSumarize(header: HeaderReport, sumarizeList: DataRowModel[]) {
        let paper = `<div class="a4">
        <div class="content">
            <p class="title">ผลประเมินโรคซึมเศร้า </p>
           <table class="mt">
            <tr>
                <th rowspan="2">ระดับชั้น</th>
                <th colspan="4">ระดับคามเครียด</th>
            </tr>
            <tr>
                <th>เล็กน้อย</th>
                <th>ปานกลาง</th>
                <th>สูง</th>
                <th>รุนแรง</th>
            </tr>`
            sumarizeList.forEach(el=>{
                paper += `    <tr>
                <td class="cols l">
                    ${el.v1??""}
                </td>
                <td class="cols r">
                    ${el.v2??""}
                </td>
                <td class="cols r">
                    ${el.v3??""}
                </td>
                <td class="cols r">
                    ${el.v4??""}
                </td>
                <td class="cols r">
                    ${el.v5??""}
                </td>
            </tr>`
            })
            paper += `   </table>
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
  
        let table = `<div class="content">
        <table>
         <tr>
             <th>ชั้น</th>
             <th>ห้อง</th>
             <th>เลขที่</th>
             <th>ชื่อ - สกุล</th>
             <th>ผลประเมินความเครียด</th>
             <th>วันที่/เวลา
                 ทำแบบประเมินครั้งล่าสุด
                 </th>
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
           <td class="col1">${el.v2??""}</td>
           <td class="col1">${el.v3??""}</td>
           <td class="col2">${el.v4??""}</td>
           <td class="col3">${el.v5??""}</td>
           <td class="col4">${el.v6??""}</td>
       </tr> `
      }
}