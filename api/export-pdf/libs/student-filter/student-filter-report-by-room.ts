import { EReportType } from "../../enum/report-enum";
import { DataRowModel, HeaderReport } from "../../interface/interface";
import { BaseReport } from "../shared/base-report";
import { CSS_STUDENT_FILTER, CSS_STUDENT_FILTER_BY_ROOM } from "./source/css-student-filter";

export class StudentFilterReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumarizeList:DataRowModel[],countSpecial:number){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STUDENT_FILTER_BY_ROOM)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList,countSpecial)
        this.html += this.addReportSumarize(header,dataList,sumarizeList,countSpecial)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
   public getHtml(){
        return this.html
    }
    private addReportSumarize(header: HeaderReport, dataList: DataRowModel[],sumarizeList:DataRowModel[],countSpecial:number) {
      let report = `<div class="a4">
      <div class="content2">
      <p class="reportName fontWeight">สรุปผลการคัดกรองนักเรียน  </p>
        <table class="nonBorder">
      `
      sumarizeList.forEach(el=>{
        report += this.getRowDataSumarize(el,header.reportType)
       })
      report += `  </table>
      <p class="sumSkill fontWeight">นักเรียนความสามารถพิเศษ		<span>จำนวน ${countSpecial??'0'} คน</span>   </p>
      <table class="allBorder tableSign">
        <tr class="nonBorder mt">
          <th colspan="4" class="nonBorder">
            <p>ลงชื่อ.................................................ผู้คัดกรองนักเรียน</p>
            <p class="padleft1"> (........................................................) </p>
          </th>
          <th colspan="4" class="nonBorder">
            <p>ลงชื่อ.................................................ผู้คัดกรองนักเรียน</p>
            <p class="padleft1"> (........................................................) </p>
          </th>
          <th colspan="4" class="nonBorder">
            <p>ลงชื่อ.................................................หัวหน้าระดับชั้น</p>
            <p  class="padleft1"> (................................................................) </p>
          </th>
    
        </tr>
        <br>
        <tr  class="nonBorder mt">
          <th  colspan="6" class="nonBorder">
            <p>ลงชื่อ........................................................หัวหน้างานระบบดูแลฯ</p>
            <p  class="padleft2"> (................................................................) </p>
          </th>
          <th  colspan="6" class="nonBorder">
            <p>ลงชื่อ........................................................รองผู้อำนวยการฝ่ายกิจการนักเรียน</p>
            <p  class="padleft2"> (........................................................) </p>
          </th>
    
        </tr>
        <tr>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
          <th class="nonBorder sign" ></th>
        </tr>
      </table>
      </div>
      </div>  
      `
      return report
  
  }
   private addReport(header: HeaderReport, dataList: DataRowModel[],sumarizeList:DataRowModel[],countSpecial:number) {
        let report = ``
        report += this.getReportHeader(header)
        report += this.getReportTable(dataList,header,sumarizeList,countSpecial)
        return report
    
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport,sumarizeList:DataRowModel[],countSpecial:number) {
  
        let table = `  <table>
        <tr>
          <th rowspan="4" >ที่</th>
          <th rowspan="4" >ชื่อ-สกุล</th>
          <th rowspan="4" >กลุ่มปกติ</th>
          <th rowspan="4" >สัมพัธภาพทางสังคม</th>
          <th rowspan="4" >ความสามารถพิเศษ</th>
          <th colspan="20">กลุ่มเสี่ยง/กลุ่มมีปัญหา</th>
          <th rowspan="3" >สรุปผลการคัดกรอง</th>
        </tr>
        <tr>
          <th rowspan="2" colspan="2" >ด้านการเรียน</th>
          <th class="headChoice" colspan="10">ด้านสุขภาพ:ร่างกาย จิตใจ พฤติกรรม</th>
          <th class="headChoice" colspan="4">ด้านครอบครัว</th>
          <th colspan="4">ด้านอื่นๆ</th>
        </tr>
        <tr>
          <th class="mainChoioce" colspan="2">สุขภาพร่างกาย</th>
          <th class="mainChoioce" colspan="2">จิตใจและพฤติกรรม</th>
          <th class="mainChoioce" colspan="2">พฤติกรรมทางเพศ</th>
          <th class="mainChoioce" colspan="2">การใช้สารเสพติด</th>
          <th class="mainChoioce" colspan="2">พฤติกรรมติดเกม</th>
          <th class="mainChoioce" colspan="2">เศรฐกิจ</th>
          <th class="mainChoioce" colspan="2">สวัสดิภาพ/ความปลอดภัย</th>
          <th class="mainChoioce" colspan="2">มีความต้องการพิเศษ</th>
          <th class="mainChoioce" colspan="2">การใช้เครื่องมื่อสื่อสาร</th>
        </tr>
        <tr>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th>ส</th>
          <th>ป</th>
          <th></th>
        </tr>`
        dataList.forEach(el=>{
         table += this.getRowData(el,header.reportType)
        })
        table += `  </table>
        `

        table += `
      </div>
      </div>  `
        return table
      
      
       
    }
    getRowDataSumarize(el: DataRowModel, reportType: EReportType) {
        return `    <tr class="nonBorder">
        <th class="nonBorder sumWidthName">${el.v1??""}</th>
        <th class="nonBorder sumWidth">ปกติ ${el.v2??""} คน</th>
        <th class="nonBorder sumWidth">เสี่ยง ${el.v3??""} คน</th>
        <th class="nonBorder sumWidth">มีปัญหา ${el.v4??""} คน</th>
      </tr>`
    }
    private getRowData(el: DataRowModel,reportType:EReportType) {
       
 
        return `    <tr>
        <td class="no">${el.v1??""}</td>
        <td class="stdName">${el.v2??""}</td>
        <td class="normal">${el.v3??""}</td>
        <td class="relation" >${el.v4??""}</td>
        <td class="skill">${(el.v5 == "true"? '/':"")}</td>
        <td>${el.v6??""}</td>
        <td>${el.v7??""}</td>
        <td>${el.v8??""}</td>
        <td>${el.v9??""}</td>
        <td>${el.v10??""}</td>
        <td>${el.v11??""}</td>
        <td>${el.v12??""}</td>
        <td>${el.v13??""}</td>
        <td>${el.v14??""}</td>
        <td>${el.v15??""}</td>
        <td>${el.v16??""}</td>
        <td>${el.v17??""}</td>
        <td>${el.v18??""}</td>
        <td>${el.v19??""}</td>
        <td>${el.v20??""}</td>
        <td>${el.v21??""}</td>
        <td>${el.v22??""}</td>
        <td>${el.v23??""}</td>
        <td>${el.v24??""}</td>
        <td>${el.v25??""}</td>
        <td class="sumarize" >${el.v26}</td>
      </tr>`
    }
  toNumber(v: number) {
    if(v==null||v==0||v==undefined){
      return ''
    }
    return v
  }
    private getReportHeader(header: HeaderReport) {

            return `<div class="a4">
            <div class="content">
              <p class="textTitle fontWeight">แบบสรุปการคัดกรองนักเรียนเป็นรายบุคคล  ระดับชั้น <span>${header.className}/${header.roomName}</span>  ภาคเรียนที่ <span>${header.term}/${header.year}</span>  โรงเรียนบุญวัฒนา</p>
              <p class="textTitle fontWeight">อำเภอเมือง จังหวัดนครราชสีมา</p>  `
      
      
    }
}