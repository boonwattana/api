import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_SDQ } from "./source/css-sdq"

export class SdqReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[],sumarizeList2:DataRowModel){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_SDQ)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList)
        this.html += this.getReportSumarize(sumarizeList,sumarizeList2)

        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

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
    getReportSumarize(sumarizeList: DataRowModel[], sumarizeList2: DataRowModel) {
        let paper = `<div class="a4">
        <p class="header2 left">สรุปผลการประเมิน </p>
        <div class="flex">
            <div class="col">
                <table>
        
                    <tr>
                        <th>รายด้าน</th>
                        <th>ปกติ</th>
                        <th>เสี่ยง</th>
                        <th>มีปัญหา</th>
                    </tr>

       `
       sumarizeList.forEach(el=>{
        paper += `                    <tr>
        <td class="cb1" >${el.v1??""}</td>
        <td class="cb2">${el.v2??""}</td>
        <td class="cb2">${el.v3??""}</td>
        <td class="cb2">${el.v4??""}</td>
    </tr>`
       })
        paper += `         </table>
        </div>
        <div class="col">
            <p class="headerB">
                สัมพันธภาพทางสังคม
            </p>
            <p>มีจุดแข็ง</p>
            <p>จำนวน <span>${sumarizeList2.v1??""}</span>คน</p>
            <p>ไม่มีจุดแข็ง</p>
            <p>จำนวน <span>${sumarizeList2.v2??""}</span>คน</p>
            <p>รวม</p>
            <p>จำนวน <span>${sumarizeList2.v3??""}</span>คน</p>
        </div>
    </div>
    </div>`
    return paper
    }
    getReportHeader(header: HeaderReport) {
        return `<div class="a4">
        <p class="header center">ผลประเมินตนเอง ( SDQ ) <span>${header.reportName}</span> </p>
        <p class="header center">ชั้นมัธยมศึกษาปีที่<span>${this.getClassOnly(header.className)}</span>/ ${header.roomName} <span>${header.reportName}</span> ปีการศึกษา <span>${header.term}/${header.year}</span></p>
        `
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel[]) {
  
        let table = `
        <div class="content">
            <table>
        
                <tr>
                    <th>ชื่อ-สกุล</th>
                    <th>เลขที่</th>
                    <th>1.ด้านอารมณ์</th>
                    <th>2.ความประพฤติ</th>
                    <th>3.ไม่อยู่นิ่ง</th>
                    <th>4.สัมพันธ์เพื่อน</th>
                    <th>5.ทางสังคม</th>
                    <th>รวม 4 ด้าน</th>
        
                </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el)
        })
        table += `    </table>
        </div>
        
        </div>`
        return table
      
      
       
    }
    private getRowData(el: DataRowModel) {
          return `        <tr>
          <td class="c1" >${el.v1??""}</td>
          <td class="c2">${el.v2??""}</td>
          <td class="c2">${el.v3??""}</td>
          <td class="c2">${el.v4??""}</td>
          <td class="c2">${el.v5??""}</td>
          <td class="c2">${el.v6??""}</td>
          <td class="c3">${el.v7??""}</td>
          <td class="c2">${el.v8??""}</td>

      </tr>`
      }
}