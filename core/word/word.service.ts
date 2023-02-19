import { Injectable } from "@nestjs/common";
import { BaseService } from "../shared/services/base.service";
import * as fs from "fs";
import { Document, ImageRun, NumberFormat, OverlapType, Packer, PageBreak, Paragraph, RelativeHorizontalPosition, RelativeVerticalPosition, SectionType, Table, TableAnchorType, TableCell, TableLayoutType, TableRow, TextRun, WidthType } from "docx";
import { SarReportModel } from "./libs/sar-template/sar-report";
import { SarReportDto } from "./libs/sar-template/sar-report.dto";
@Injectable()
export class WordService extends BaseService {
    constructor(
        
        ){
        super()
    }
    async demo(model:SarReportDto){
        const path: string = `assert/images/logo.jpeg`;
        const sarService = new SarReportModel(model)
        // const table = new Table({
        //     rows:[
        //         new TableRow({
        //             children: [
        //                 new TableCell({
        //                     children: [new Paragraph("Hello")],
        //                     columnSpan: 2,
        //                 }),
                        
        //             ],
        //         }),
        //         new TableRow({
        //             children: [
        //                 new TableCell({
        //                     children: [
        //                         new Paragraph('order1')
        //                     ],
        //                 }),
        //                 new TableCell({
        //                     children: [
        //                         new Paragraph('1')
        //                     ],
        //                 }),
        //             ],
        //         }),
        //         new TableRow({
        //             children: [
        //                 new TableCell({
        //                     children: [
        //                         new Paragraph('order2')
        //                     ],
        //                 }),
        //                 new TableCell({
        //                     children: [
        //                         new Paragraph('2')
        //                     ],
        //                 }),
        //             ],
        //         }),
        //     ],
           
        //     width: {
        //         size: 4535,
        //         type: WidthType.DXA,
        //     },
        // })

        // const doc = new Document({
        //     sections: [
        //         {
        //             properties: {
        //                 page: {
        //                     pageNumbers: {
        //                         start: 1,
        //                         formatType: NumberFormat.DECIMAL,
        //                     },
        //                 },
        //             },
        //             children: [
                    
        //                 sarService.setMemoPage(),
        //                 new Paragraph({
        //                     children: [
        //                         new TextRun({
        //                             text:"ภาษาไทย",
        //                             font:'Tahoma'
        //                         }
                            
        //                         ),
        //                         new TextRun({
        //                             text: "ภาษาไทย/////22222",
        //                             bold: true,
        //                         }),
        //                         new TextRun({
        //                             text: "\tGithub is the best",
        //                             bold: true,
        //                         }),
        //                         new ImageRun({
        //                             data: fs.readFileSync(path),
        //                             transformation: {
        //                                 width: 100,
        //                                 height: 100,
        //                             },
        //                         }),
        //                         new PageBreak(),

        //                     ],
        //                 }),
        //                 new Paragraph({
        //                     children:[
        //                         new TextRun({
        //                             text:'ตารางแสดงผล1'
        //                         })
        //                     ]
        //                 }),
        //                 table,
                        
        //             ],
        //         },
        //     ],
        // });
        
        // Used to export the file into a .docx file
      const result = await  Packer.toBuffer(sarService.getPaper())
      return result
    }
}
