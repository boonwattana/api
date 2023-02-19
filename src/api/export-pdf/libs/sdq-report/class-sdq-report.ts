import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_SDQ } from "./source/css-sdq"

export class SdqReportByClass extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_SDQ)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        this.html += this.addReportSumarize(header,dataList,sumarizeList)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    addReportSumarize(header: HeaderReport, dataList: DataRowModel[], sumarizeList: DataRowModel[]) {
        let report = `<div class="a4">
            <div class="sumarize">
            <p class="headerC">
                สัมพันธภาพทางสังคม
            </p>
            <table>
                <tr>
                    <th class="cc1">ระดับชั้น</th>
                    <th class="cc2">มีจุดแข็ง</th>
                    <th class="cc2">ไม่มีจุดแข็ง</th>
                </tr>`
                sumarizeList.forEach(el=>{
                    report += `                <tr>
                    <td class="cc1">${el.v1??""}</td>
                    <td class="cc2 center">${el.v2??""}</td>
                    <td class="cc2 center">${el.v3??""}</td>
                </tr>`
                })
                report += `</table>
                </div>
            </div>`
        return report
    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[],sumarizeList:DataRowModel[]) {
        let report = ``
        report += this.getReportHeader(header)
        report += this.getReportTable(dataList,header,sumarizeList)
        return report
    
    }
    getReportHeader(header: HeaderReport) {
       return `<div class="a4">
       <p class="header center">ผลประเมินตนเอง ( SDQ ) <span>${header.reportName}</span> </p>
       <p class="header center">ชั้นมัธยมศึกษาปีที่<span>${this.getClassOnly(header.className)}</span> ปีการศึกษา <span>${header.term}/${header.year}</span></p>
       <p class="header left mt1">สรุปผลการประเมินรายด้าน</p>`
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel[]) {
  
        let table = `<div class="content">
        <table>
    
            <tr>
                <th rowspan="2">ห้อง</th>
                <th colspan="3">ด้านที่ 1</th>
                <th colspan="3">ด้านที่ 2</th>
                <th colspan="3">ด้านที่ 3</th>
                <th colspan="3">ด้านที่ 4</th>
                <th colspan="3">รวม 4 ด้าน</th>
    
            </tr>
            <tr>
                <th>ป</th>
                <th>ส</th>
                <th>ห</th>
                <th>ป</th>
                <th>ส</th>
                <th>ห</th>
                <th>ป</th>
                <th>ส</th>
                <th>ห</th>
                <th>ป</th>
                <th>ส</th>
                <th>ห</th>
                <th>ป</th>
                <th>ส</th>
                <th>ห</th>
                
            </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
    table += `</table>
    </div>
</div>`
        return table
      
      
       
    }
    private getRowData(el: DataRowModel) {
         
   
          return `        <tr>
          <td class="cc1">${el.v1??""}</td>
          <td class="center">${el.v2??""}</td>
          <td class="center">${el.v3??""}</td>
          <td class="center">${el.v4??""}</td>
          <td class="center">${el.v5??""}</td>
          <td class="center">${el.v6??""}</td>
          <td class="center">${el.v7??""}</td>
          <td class="center">${el.v8??""}</td>
          <td class="center">${el.v9??""}</td>
          <td class="center">${el.v10??""}</td>
          <td class="center">${el.v11??""}</td>
          <td class="center">${el.v12??""}</td>
          <td class="center">${el.v13??""}</td>
          <td class="center">${el.v14??""}</td>
          <td class="center">${el.v15??""}</td>
          <td class="center">${el.v16??""}</td>

      </tr>`
      }
}