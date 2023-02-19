import { HeaderReport } from "../../interface/interface"
import { SARABAN } from "../assert/font-data"

export class BaseReport{
   protected getCss(custom:string):string{
        let cssPaper = ' <style>'
        cssPaper += custom
        cssPaper += `@font-face { 
            font-family: "Sarabun";
            font-style: normal;
            src: url(${SARABAN});
            }
            .center{
              text-align: center;
            }
            html {
              -webkit-print-color-adjust: exact;
            }
            </style>
            </head>`
        return cssPaper
    }
    protected closeTagHtml():string {
        return `    </html>`
          
        }
    protected closeTagBody():string {
      return `      </body>`
    }
    protected openTagBody():string {
        return `    <body>`
    }

    protected openTagHtml():string {
        return `<html>
        <head>`
    }
    protected getHeaderClass(header:HeaderReport):string{
      return `<div class="a4">
      <p class="header left">หน้ารายงานผล (รายระดับชั้น)  </p>
      <p class="header center">${header.reportName}  </p>
      <p class="header center">ชั้นมัธยมศึกษาปีที่<span>${header.className}</span>ปีการศึกษา <span>${header.term}/${header.year}</span></p>`
    }
    protected getHeaderRoom(header:HeaderReport):string{
      return `<div class="a4">
      <p class="header left">หน้ารายงานผล (รายห้อง)  </p>
      <p class="header center">${header.reportName}  </p>
      <p class="header center">ชั้นมัธยมศึกษาปีที่<span>${header.className.replace('ม.','')}</span>/ <span>${header.roomName}</span> ปีการศึกษา <span>${header.term}/${header.year}</span></p>
  `
    }
    protected getHeaderSumarize(header:HeaderReport):string{
      return `<div class="a4">
      <p class="header left">หน้ารายงานผล (ทั้งโรงเรียน)  </p>
      <p class="header center">${header.reportName}  </p>
      <p class="header center">ปีการศึกษา <span>${header.term}/${header.year}</span></p>`
    }
    protected getClassOnly(value:string){
      return value.replace('ม.','');
    }
}