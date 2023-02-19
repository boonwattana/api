import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { ISumarizeRoomDepressionReport } from "./room-depression-report"
import { CSS_DEPRESSION } from "./source/css-depression"
import { getDepressionLabel, getSucuidLabel } from "./source/functions"

export class ClassDepressionReport extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],depression:DataRowModel[],sucuid:DataRowModel[]){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_DEPRESSION)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList)
        this.html += this.addDepressionSumarize(header,depression,sucuid)
        this.html += this.addSucuidSumarize(header,depression,sucuid)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    public getHtml(){
        return this.html
    }
    addSucuidSumarize(header: HeaderReport, sumDepressions: DataRowModel[], sumSucuids: DataRowModel[]) {
        let table = `<div class="a4">
        <p  class="left title2">แนวโน้มการฆ่าตัวตาย ชั้นมัธยมศึกษาปีที่ <span>${header.className.replace('ม.','')}</span></p>`
        table+= `
        <div class="content">
            <table>
                <tr>
                    <th rowspan="2">ห้อง</th>
                    <th rowspan="2" class="left pl0">ไม่มีแนวโน้มการฆ่าตัวตาย</th>
                    <th colspan="3" class="left pl0">มีแนวโน้มการฆ่าตัวตาย</th>
        
                </tr>
                <tr>
                    <th>
                        ระดับน้อย
                    </th>
                    <th>
                        ระดับปานกลาง
                    </th>
                    <th>
                        ระดับรุนแรง
                    </th>
                </tr>`

                sumSucuids.forEach(el=>{
                    table += `        <tr>
                    <td class="cb1">${el.v1??""}</td>
                    <td class="cb2  center">${el.v2??""}</td>
                    <td class="cb2  center">${el.v3??""}</td>
                    <td class="cb2  center">${el.v4??""}</td>
                    <td class="cb2 center">${el.v5??""}</td>
                </tr>`
                })
        
        table +=`   </table>

        </div>
        </div>`
        return table
    }
    addDepressionSumarize(header: HeaderReport, sumDepressions: DataRowModel[], sumSucuids: DataRowModel[]) {
        let table = `<div class="a4">
        <p  class="left  title">ผลประเมินโรคซึมเศร้า ชั้นมัธยมศึกษาปีที่ <span>${header.className.replace('ม.','')}</span></p>
        <div class="content">
            <table>
                <tr>
                    <th rowspan="2">ห้อง</th>
                    <th rowspan="2" class="left pl0">ไม่มีโรคซึมเศร้า</th>
                    <th colspan="3" class="left pl0">มีภาวะซึมเศร้า</th>
        
                </tr>
                <tr>
                    <th>
                        ระดับน้อย
                    </th>
                    <th>
                        ระดับปานกลาง
                    </th>
                    <th>
                        ระดับรุนแรง
                    </th>
                </tr>`
                sumDepressions.forEach(el=>{
                    table += `        <tr>
                    <td class="cb1">${el.v1??""}</td>
                    <td class="cb2 center">${el.v2??""}</td>
                    <td class="cb2 center">${el.v3??""}</td>
                    <td class="cb2 center">${el.v4??""}</td>
                    <td class="cb2 center">${el.v5??""}</td>
                </tr>`
                })
        
        table +=`   </table>

        </div>
        </div>`
        return table
    }
    addReport(header: HeaderReport, dataList: DataRowModel[]) {
        let report = ``
        report += this.getHeaderClass(header)
        report += this.getReportTable(dataList,header)
        return report
    }
    getReportTable(dataList: DataRowModel[], header: HeaderReport) {
        let table =`<div class="content">
        <table>
            <tr>
                <th>ชื่อ - สกุล</th>
                <th>ห้อง</th>
                <th>เลขที่</th>
                <th>ผลประเมินโรคซึมเศร้า</th>
                <th>แนวโน้มการฆ่าตัวตาย</th>
                <th>วันที่/เวลา
                    ทำแบบประเมินครั้งล่าสุด
                    </th>
            </tr>`
            dataList.forEach(el=>{
                table+= `<tr>
                <td class="col1 center">
                ${el.v1??""}
                </td>
                <td class="col4 center">
                ${el.v2??""}
                </td>
                <td class="col4 center">
                ${el.v3??""}
                </td>
                <td class="col3 center">
                ${getDepressionLabel(el.v4)}
                </td>
                <td class="col3 center">
                ${getSucuidLabel(el.v5) }
                </td>
                <td class="col3 center">
                ${el.v6??""}
                </td>
            </tr>`
             })
        table += `       </table>
        </div>
       
    </div>
    `
    return table
    }
}