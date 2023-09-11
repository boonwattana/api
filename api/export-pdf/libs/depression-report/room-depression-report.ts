import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_DEPRESSION } from "./source/css-depression"
import { getDepressionLabel, getSucuidLabel } from "./source/functions"
export interface ISumarizeRoomDepressionReport{
    noneDepression:number
    litleDepression:number
    meduimDepression:number
    strongDepression:number
    noneSucuid?:number
    litleSuciud:number
    meduimSuciud:number
    strongSucuid:number
}
export class RoomDepressionReport extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:DataRowModel[],sumModel:ISumarizeRoomDepressionReport){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_DEPRESSION)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList)
        this.html += this.addReportSumarize(header,sumModel)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()

    }
    addReportSumarize(header: HeaderReport, sumModel:ISumarizeRoomDepressionReport) {
        return `<div class="a4">
        <p class="left  title">ผลประเมินโรคซึมเศร้า <span>${header.className}</span>/ <span>${header.roomName}</span>  </p>
        <div class="content">
          <div class="flex">
            <div class="flex1">
                <p>ไม่มีโรคซึมเศร้า </p>
                <p class="pl1"> ระดับน้อย</p>
                <p class="pl1"> ระดับปานกลาง</p>
                <p class="pl1"> ระดับรุนแรง</p>
            </div>
            <div class="flex2">
                <p>จำนวน <span>${sumModel.noneDepression}</span>คน</p>
                <p>จำนวน <span>${sumModel.litleDepression}</span>คน</p>
                <p>จำนวน <span>${sumModel.meduimDepression}</span>คน</p>
                <p>จำนวน <span>${sumModel.strongDepression}</span>คน</p>
            </div>
          </div>
          <p>แนวโน้มการฆ่าตัวตาย</p>
          <div class="flex">
            <div class="flex1">
                <p>ไม่มีแนวโน้มฆ่าตัวตาย </p>
                <p class="pl1"> ระดับน้อย</p>
                <p class="pl1"> ระดับปานกลาง</p>
                <p class="pl1"> ระดับรุนแรง</p>
            </div>
            <div class="flex2">
                <p>จำนวน <span>${sumModel.noneSucuid}</span>คน</p>
                <p>จำนวน <span>${sumModel.litleSuciud}</span>คน</p>
                <p>จำนวน <span>${sumModel.meduimSuciud}</span>คน</p>
                <p>จำนวน <span>${sumModel.strongSucuid}</span>คน</p>
            </div>
          </div>
        </div>
       
    </div>`
    }
    private addReport(header: HeaderReport, dataList: DataRowModel[]) {
        const perPage: number = 30
        const pageCount: number = Math.ceil(dataList.length / perPage)
        let report = ``
        let startRec: number = 0    
        if (dataList.length > 0) {
          for (let i = 0; i < pageCount; i++) {
            startRec = i;
            report += this.getHeaderRoom(header)
            report += this.getReportTable([...dataList].splice((startRec * perPage), perPage),header)
          }
        }
        return report
    
    }
    getReportTable(dataList: DataRowModel[], header: HeaderReport) {
        let table =` <div class="content">
        <table>
             <tr>
                 <th>ชื่อ - สกุล</th>
                 <th>เลขประจำตัวนักเรียน</th>
                 <th>ผลประเมินโรคซึมเศร้า</th>
                 <th>แนวโน้มการฆ่าตัวตาย</th>
                 <th>วันที่/เวลา
                     ทำแบบประเมินครั้งล่าสุด
                     </th>
             </tr>`

             dataList.forEach(el=>{
                table+= `<tr>
                <td class="col1">
                    ${el.v1??""}
                </td>
                <td class="col2 center">
                ${el.v2??""}
                </td>
                <td class="col2 center">
                ${getDepressionLabel(el.v3)}
                </td>
                <td class="col2 center">
                ${getSucuidLabel(el.v4) }
                </td>
                <td class="col2 center">
                ${el.v5??""}
                </td>
            </tr>`
             })
        table += `       </table>
        </div>
       
    </div>
    `
    return table

    }
 
   public getHtml(){
        return this.html
    }
}