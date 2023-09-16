import { HeaderReport, DataRowModel } from "../../interface/interface"
import { BaseReport } from "../shared/base-report"
import { CSS_STD_HOMVISIT } from "./source/css-std-homevisit"
export class HomvisitRowData{
    studentName:string
    sex:string
    personalCode:string
    birthDate:string
    sisterCount:string
    childOder:string
    sisterInSchool:string
    imageProfile:string
    studentCode:string
    alivePlace:string
    travelBy:string
    contractAddress:string
    address:string
    houseLanscape:string
    farToSchool:string
    passToSchool:string

    studentAction:string
    hobit:string
    readBook:string
    prepairStuding:string

    parentFix:string
    commentParent:string
    sumarize:string
    img1:string
    img2:string
    img3:string
    img4:string
    img5:string
    createAt:string


}
export class StudentHomeVisitReportByRoom extends BaseReport{
    html = ''
    constructor(header:HeaderReport,dataList:HomvisitRowData[],sumarizeList:DataRowModel[],sumModel:DataRowModel){
        super()
        this.html += this.openTagHtml()
        this.html += this.getCss(CSS_STD_HOMVISIT)
        this.html += this.openTagBody()
        this.html += this.addReport(header,dataList,sumarizeList,sumModel)
        this.html += this.getReportSumarizeTable(header,sumarizeList)
        this.html += this.getSumarize(sumModel)
        this.html += this.closeTagBody()
        this.html += this.closeTagHtml()
    }
   public getHtml(){
        return this.html
    }
   private addReport(header: HeaderReport, dataList: HomvisitRowData[],sumarizeList:DataRowModel[],sumModel:DataRowModel) {
        let report = ``
        // report += this.getHeaderRoom(header)
        report += this.getReportTable(dataList,header,sumarizeList)

        return report
    
    }
    getSumarize(sumModel:DataRowModel) {
        return `<div class="a4">
        <p class="header left">สรุปผล</p>
        <div class="content">
            <table>
    
                <tr>
                    <th>รายการประเมิน</th>
                    <th>จำนวนนักเรียน(คน)</th>
                    <th>คิดเป็นร้อยละ</th>
                </tr>
                <tr>
                    <td class="tdColB1" >${sumModel.v1??""}</td>
                    <td class="tdColB2">${sumModel.v2??""}</td>
                    <td class="tdColB3">${sumModel.v3??""}</td>
                </tr>
                <tr>
                    <td class="tdColB1" >${sumModel.v4??""}</td>
                    <td class="tdColB2">${sumModel.v5??""}</td>
                    <td class="tdColB3">${sumModel.v6??""}</td>
                </tr>
                <tr>
                <td class="tdColB1" >${sumModel.v7??""}</td>
                <td class="tdColB2">${sumModel.v8??""}</td>
                <td class="tdColB3">${sumModel.v9??""}</td>
            </tr>
            </table>
        </div>
        <div class="twoColumn sign">
            <div class="col">
                <p class="center">ลงชื่อ................................................ผู้รายงาน</p>
                <p  class="center">(................................................)</p>
                <p  class="center">ครูที่ปรึกษา</p>
            </div>
            <div class="col">
                <p class="center">ลงชื่อ................................................ผู้รายงาน</p>
                <p  class="center">(................................................)</p>
                <p  class="center">ครูที่ปรึกษา</p>
            </div>
        </div>
    
    </div>`
    }
    getReportSumarizeTable(header: HeaderReport, sumarizeList: DataRowModel[]) {
        let paper =``
        paper += this.getHeader(header)
        sumarizeList.forEach(el=>{
            paper += `            <tr>
            <td class="tdCol1" >${el.v1??""}</td>
            <td class="tdCol2">${el.v2??""}</td>
            <td class="tdCol3">${el.v3??""}</td>
            <td class="tdCol4">${el.v4??""}</td>
        </tr>`
        })
        paper += `        </table>
        </div>
    
    </div>`
    return paper
    }
    getHeader(header: HeaderReport) {
        return `<div class="a4">
        <p class="header center">ตารางสรุปผลการเยี่ยมบ้านนักเรียนชั้นมัธยมศึกษาปีที่ ${this.getClassOnly(header.className)} ปีการศึกษา ${header.term}/${header.year} </p>
        <div class="content">
            <table>
                <tr>
                    <th rowspan="2">ลำดับ</th>
                    <th rowspan="2">ชื่อ-สกุล</th>
                    <th colspan="2">สรุปผลการเยี่ยมบ้าน</th>
                </tr>
                <tr>
                <th>ผลการเยี่ยมบ้าน</th>
                <th>ด้านที่ต้องการช่วยเหลื่อ</th>
                </tr>
            `
    }
    private getReportTable(dataList: HomvisitRowData[],header:HeaderReport,sumarizeList:DataRowModel[]) {
  
        let table = ``
        dataList.forEach(el=>{
         table += this.getRowData(el,header)
        })
        return table
      
      
       
    }
    private getRowData(el: HomvisitRowData,header:HeaderReport) {
         
   
           return `<div class="a4">

           <p class="header center">รายงานข้อมูลการเยี่ยมบ้าน</p>
           <div class="content border">
               <p class="title center"><span>ข้อมูลการเยี่ยมบ้าน</span><span>${el.studentName}</span><span>ระดับชั้น ${header.className}</span><span>ห้อง ${header.roomName}</span><span>ปีการศึกษา ${header.term}/${header.year}  </span></p>
                   <div class="imageSection">
                       <div class="col1">
                           <p class="text">
                               เพศ <span>${el.sex}</span>
                           </p>
                           <p class="text">
                               เลขประจำตัวประชาชน : <span>${el.personalCode}</span>
                           </p>
                           <p class="text">
                               วัน/เดือน/ปีเกิด : <span>${el.birthDate}</span>
                           </p>
                           <p class="text">
                               มีพี่น้อง(รวมนักเรียน) : <span>${el.sisterCount}</span>
                           </p>
                           <p class="text">
                               เป็นบุตรลำดับที่ : <span>${el.childOder}</span>
                           </p>
                           <p class="text">
                               มีพี่น้องโรงเรียนเดียวกัน : <span>${el.sisterInSchool}</span>
                           </p>
                       </div>
                       <div class="col2">
                           <img src="data:image/jpeg;base64,${el.imageProfile}" alt="">
                           <p class="center">รหัสประจำตัวนักเรียน</p>
                           <p class="center">${el.studentCode}</p>
                       </div>
           
                   </div>
                   <div class="twoColumn">
                       <div class="col">
                           <p class="text">
                               ที่อยู่อาศัย : <span>${el.alivePlace}</span>
                           </p>
                           <p class="text">
                               นักเรียนเดินทางมาโรงเรียนโดยพาหนะ : <span>${el.travelBy}</span>
                           </p>
                           <p class="text">
                               ที่อยู่ที่สามารถติดต่อได้ : <span>${el.contractAddress}</span>
                           </p>
                           <p class="text">
                               ที่อยู่ตามทะเบียนบ้าน : <span>${el.address}</span>
                           </p>
                       </div>
                       <div class="col">
                           <p class="text">
                               สภาพที่พักอาศัย : <span>${el.houseLanscape}</span>
                           </p>
                           <p class="text">
                               ระยะทางจากบ้านมาโรงเรียน : <span>${el.farToSchool}</span>
                           </p>
                           <p class="text">
                               เส้นทางไปโรงเรียนผ่าน : <span>${el.passToSchool}</span>
                           </p>
                       </div>
                   </div>
           
                   <p class="title center">
                       ความรับผิดชอบของนักเรียนและการดูแลของผู้ปกครอง
                   </p>
                   <p class="left">
                       บทบาทของนักเรียน : <span> ${el.studentAction} </span>
                   </p>
                   <p class="left">
                       งานอดิเรกของนักเรียน : <span> ${el.hobit} </span>
                   </p>
                   <p class="left">
                       การอ่านหนังสือ : <span> ${el.readBook} </span>
                   </p>
                   <p class="left">
                       การจัดอุปกรณ์การเรียน : <span> ${el.prepairStuding} </span>
                   </p>
                   <p class="left">
                       การกวดขันเรื่องการเรียนของผู้ปกครอง : <span> ${el.parentFix} </span>
                   </p>
                   <p class="left">
                       ความคิดเห็นพิ่มเติมของผู้ปกครอง : <span> ${el.commentParent} </span>
                   </p>
                   <p class="left">
                       สรุปการเยี่ยมบ้าน : <span> ${el.sumarize} </span>
                   </p>
                   <p class="left">
                       รูปเยี่ยมบ้าน  :
                   </p>
                   <div class="imageVisit">
                       <img src="data:image/jpeg;base64,${el.img1}" alt="" class="img1">
                       <img src="data:image/jpeg;base64,${el.img2}" alt="" class="img2">
                       <img src="data:image/jpeg;base64,${el.img3}" alt="" class="img3">
                       <img src="data:image/jpeg;base64,${el.img4}" alt="" class="img3">
                       <img src="data:image/jpeg;base64,${el.img5}" alt="" class="img3">
                   </div>
                   <p class="left">
                       บันทึกข้อมูลเมื่อ : <span> ${el.createAt} </span>   ภาคเรียนที่/ปีการศึกษา : <span> ${header.term}/${header.year} </span>
                   </p>
           </div>
           </div>`
      }
}