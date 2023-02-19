import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_SUPPORT } from "./source/css-std-support"

export class StudentSupportReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_SUPPORT)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList)
        this.html += this.addReportSumarize(sumarizeList)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    addReportSumarize(s: DataRowModel) {
        return `<div class="a4">
        <div class="content">
            <p class="header left">สรุปผลส่งเสริมและพัฒนาศักยภาพนักเรียน</p>
            <div class="flex">
                <div class="flex1">
                    <p class="order">1.ด้านวิชาการ</p>
                    <p class="order">2.ด้านศิลปะ</p>
                    <p class="order">3.ด้านกีฬา</p>
                    <p class="order">4.ด้านดนตรี</p>
                    <p class="order">5.ด้านนาฎศิลป์</p>
                    <p class="order">6.ด้านอาชีพ</p>
                    <p class="order">7.ทักษะชีวิต</p>
                    <p class="order">8.จิตอาสา</p>
                    <p class="order">9.อื่น ๆ</p>     
                </div>
                <div>
                    <p class="order">จำนวน <span>${s.v1??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v2??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v3??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v4??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v5??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v6??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v7??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v8??""}</span> คน</p>
                    <p class="order">จำนวน <span>${s.v9??""}</span> คน</p>
                </div>
            </div>
            
        </div>
        </div>`

    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[]) {
        let report = ``
        report += this.getHeaderRoom(header)
        report += this.getReportTable(dataList,header)
        return report
    
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport) {
  
        let table = `<div class="content">
        <table>
         <tr>
             <th>ชื่อ-สกุล</th>
             <th>เลขที่</th>
             <th>วันที่ทำกิจกรรม</th>
             <th>ชื่อกิจกรรม</th>
             <th>ศักยภาพด้าน</th>
             <th>หน่วยงานที่จัด</th>
             <th>ผลกิจกรรม</th>
             <th>ครูผู้ดูแล</th>
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
           <td class="col5">${el.v5??""}</td>
           <td class="col6">${el.v6??""}</td>
           <td class="col7">${el.v7??""}</td>
           <td class="col8">${el.v8??""}</td>
       </tr>`
      }
}