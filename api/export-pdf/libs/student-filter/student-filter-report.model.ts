import { EReportType } from "../../enum/report-enum";
import { DataRowModel, HeaderReport } from "../../interface/interface";
import { BaseReport } from "../shared/base-report";
import { CSS_STUDENT_FILTER } from "./source/css-student-filter";

export class StudentFilterReport extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STUDENT_FILTER)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: DataRowModel[]) {
        let report = ``
        report += this.getReportHeader(header)
        report += this.getReportTable(dataList,header)
        return report
    
    }
    private getReportTable(dataList: DataRowModel[],header:HeaderReport) {
      if(header.reportType==EReportType.CLASS){
        let table = `  <table>
        <tr>
          <th rowspan="2" class="rowNameHeader">
            ห้อง
          </th>
          <th colspan="3">
            ด้านที่ 1
          </th>
          <th colspan="3">
            ด้านที่ 2
          </th>
          <th colspan="3">
            ด้านที่ 3
          </th>
          <th colspan="3">
            ด้านที่ 4
          </th>
          <th colspan="3">
            ด้านที่ 5
          </th>
          <th colspan="3">
            ด้านที่ 6
          </th>
          <th colspan="3">
            ด้านที่ 7
          </th>
          <th colspan="3">
            ด้านที่ 8
          </th>
          <th colspan="3">
            ด้านที่ 9
          </th>
          <th colspan="3">
            ด้านที่ 10
          </th>
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
         table += this.getRowData(el,header.reportType)
        })
        table += `  </table>
          </div>
        </div>`
        return table
      }else{
        let table = `  <table>
        <tr>
          <th rowspan="2" class="rowNameHeader">
            ระดับชั้น
          </th>
          <th colspan="3">
            ด้านที่ 1
          </th>
          <th colspan="3">
            ด้านที่ 2
          </th>
          <th colspan="3">
            ด้านที่ 3
          </th>
          <th colspan="3">
            ด้านที่ 4
          </th>
          <th colspan="3">
            ด้านที่ 5
          </th>
          <th colspan="3">
            ด้านที่ 6
          </th>
          <th colspan="3">
            ด้านที่ 7
          </th>
          <th colspan="3">
            ด้านที่ 8
          </th>
          <th colspan="3">
            ด้านที่ 9
          </th>
          <th colspan="3">
            ด้านที่ 10
          </th>
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
         table += this.getRowData(el,header.reportType)
        })
        table += `  </table>
          </div>
        </div>`
        return table
      }
       
    }
    private getRowData(el: DataRowModel,reportType:EReportType) {
       let nameValue =``
      if(reportType == EReportType.SUMARIZE){
        nameValue = el.name1
      }
      if(reportType == EReportType.CLASS){
        nameValue = el.name1
      }
        return `<tr>
        <td class="rowName">
          ${ nameValue}
        </td>
        <td>
        ${this.toNumber(el.v1)}
        </td>
        <td>
        ${this.toNumber(el.v2)}
        </td>
        <td>
        ${this.toNumber(el.v3)}
        </td>
        <td>
        ${this.toNumber(el.v4)}
        </td>
        <td>
        ${this.toNumber(el.v5)}
        </td>
        <td>
        ${this.toNumber(el.v6)}
        </td>
        <td>
        ${this.toNumber(el.v7)}
        </td>
        <td>
        ${this.toNumber(el.v8)}
        </td>
        <td>
        ${this.toNumber(el.v9)}
        </td>
        <td>
        ${this.toNumber(el.v10)}
        </td>
        <td>
        ${this.toNumber(el.v11)}
        </td>
        <td>
        ${this.toNumber(el.v12)}
        </td>
        <td>
        ${this.toNumber(el.v13)}
        </td>
        <td>
        ${this.toNumber(el.v14)}
        </td>
        <td>
        ${this.toNumber(el.v15)}
        </td>
        <td>
        ${this.toNumber(el.v16)}
        </td>
        <td>
        ${this.toNumber(el.v17)}
        </td>
        <td>
        ${this.toNumber(el.v18)}
        </td>
        <td>
        ${this.toNumber(el.v19)}
        </td>
        <td>
        ${this.toNumber(el.v20)}
        </td>
        <td>
        ${this.toNumber(el.v21)}
        </td>
        <td>
        ${this.toNumber(el.v22)}
        </td>
        <td>
        ${this.toNumber(el.v23)}
        </td>
        <td>
        ${this.toNumber(el.v24)}
        </td>
        <td>
        ${this.toNumber(el.v25)}
        </td>
        <td>
        ${this.toNumber(el.v26)}
        </td>
        <td>
        ${this.toNumber(el.v27)}
        </td>
        <td>
        ${this.toNumber(el.v28)}
        </td>
        <td>
        ${this.toNumber(el.v29)}
        </td>
        <td>
        ${this.toNumber(el.v30)}
        </td>
      </tr>`
    }
  toNumber(v: number) {
    if(v==null||v==0||v==undefined){
      return ''
    }
    return v
  }
    private getReportHeader(header: HeaderReport) {
        if(header.reportType == EReportType.CLASS){
            return `<div class="a4">
            <div class="content">
              <p class="reportName">${header.reportType}</p>
              <p class="textTitle">${header.reportName}</p>
              <p class="textTitle"><span>ชั้นมัธยมศึกษาปีที่</span> <span>${header.className}</span> <span>ภาคเรียนที่</span> ${header.term} <span></span><span>ปีการศึกษา</span>  <span>${header.year}</span>    </p>`
        }else if (header.reportType == EReportType.SUMARIZE){
            return `<div class="a4">
            <div class="content">
              <p class="reportName">${header.reportType}</p>
              <p class="textTitle">${header.reportName}</p>
              <p class="textTitle"><span>ภาคเรียนที่</span> ${header.term} <span></span><span>ปีการศึกษา</span>  <span>${header.year}</span>    </p>`
        }
      
    }
}