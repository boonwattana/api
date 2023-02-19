import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STRESS } from "./source/css-stress"

export class StressReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STRESS)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        this.html += this.addReportSumarize(sumarizeList,header)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    addReportSumarize(sumarizeList: DataRowModel,header:HeaderReport) {
        return `<div class="a4">
        <div class="content">
            <p class="title">ผลประเมินโรคซึมเศร้า <span>${header.className}/${header.roomName}</span> </p>
            <div class="flex">
                <div class="flex1">
                    <p class="title">
                        เครียดเล็กน้อย
                    </p>
                    <p class="title">
                        เครียดปานกลาง
                    </p>
                    <p class="title">
                        เครียดสูง
                    </p>
                    <p class="title">
                        เครียดรุนแรง
                    </p>
                </div>
                <div class="flex2">
                    <p class="title">
                        จำนวน <span>${sumarizeList.v1??""}</span> คน
                    </p>
                    <p class="title">
                        จำนวน <span>${sumarizeList.v2??""}</span> คน
                    </p>
                    <p class="title">
                        จำนวน <span>${sumarizeList.v3??""}</span> คน
                    </p>
                    <p class="title">
                        จำนวน <span>${sumarizeList.v4??""}</span> คน
                    </p>
                </div>
            </div>
        </div>
        </div>`

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
           <td class="col2">${el.v2??""}</td>
           <td class="col3">${el.v3??""}</td>
           <td class="col4">${el.v4??""}</td>
       </tr> `
      }
}