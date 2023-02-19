import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_SUPPORT } from "./source/css-std-support"

export class StudentSupportReportByClass extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_SUPPORT)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        this.html += this.addReportSumarize(sumarizeList)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    addReportSumarize(sumarizeList: DataRowModel[]) {
        let paper = `<div class="a4">
        <p class="header left">หน้าจอรายงานผล (รายระดับชั้น)</p>
        <div class="content">
            
            <table>
                <tr>
                    <th>ห้อง</th>
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
                sumarizeList.forEach(el=>{
                    paper += `        <tr>
                    <td class="col2">${el.v1??""}</td>
                    <td class="col8 center">${el.v2??""}</td>
                    <td class="col8 center">${el.v3??""}</td>
                    <td class="col8 center">${el.v4??""}</td>
                    <td class="col8 center">${el.v5??""}</td>
                    <td class="col8 center">${el.v6??""}</td>
                    <td class="col8 center">${el.v7??""}</td>
                    <td class="col8 center">${el.v8??""}</td>
                    <td class="col8 center">${el.v9??""}</td>
                    <td class="col8 center">${el.v10??""}</td>
                </tr>`
                })
                paper +=`       </table>
                </div>
                </div>`
                return paper
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
             <th>ชื่อ-สกุล</th>
             <th>ห้อง</th>
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
           <td class="col2">${el.v3??""}</td>
           <td class="col3">${el.v4??""}</td>
           <td class="col4">${el.v5??""}</td>
           <td class="col5">${el.v6??""}</td>
           <td class="col6">${el.v7??""}</td>
           <td class="col7">${el.v8??""}</td>
           <td class="col8">${el.v9??""}</td>
       </tr> `
      }
}