import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_SUPPORT } from "./source/css-std-support"

export class StudentSupportReportSumarize extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_SUPPORT)
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
        report += this.getHeaderSumarize(header)
        report += this.getReportTable(dataList,header,sumarizeList)
        return report
    
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel[]) {
  
        let table = `<div class="content">
    
        <table>
            <tr>
                <th>ระดับชั้น</th>
                <th>ด้านวิชาการ</th>
                <th>ด้านศิลปะ</th>
                <th>ด้านกีฬา</th>
                <th>ด้านดนตรี</th>
                <th>ด้านนาฎศิลป์</th>
                <th>ด้านอาชีพ</th>
                <th>ด้านทักษะชีวิต</th>
                <th>ด้านจิตอาสา</th>
                <th>ด้านอื่น ๆ</th>
            </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `       </table>
        </div>
        </div>`
        return table
      
      
       
    }
    private getRowData(el: DataRowModel) {
         
   
           return `        <tr>
           <td class="col2">${el.v1??""}</td>
           <td class="col8 right">${el.v2??""}</td>
           <td class="col8 right">${el.v3??""}</td>
           <td class="col8 right">${el.v4??""}</td>
           <td class="col8 right">${el.v5??""}</td>
           <td class="col8 right">${el.v6??""}</td>
           <td class="col8 right">${el.v7??""}</td>
           <td class="col8 right">${el.v8??""}</td>
           <td class="col8 right">${el.v9??""}</td>
           <td class="col8 right">${el.v10??""}</td>
       </tr> `
      }
}