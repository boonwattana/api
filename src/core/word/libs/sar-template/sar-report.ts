import {IShadingAttributesProperties, AlignmentType, Document, HeadingLevel, ImageRun, NumberFormat, OverlapType, Packer, PageBreak, Paragraph, RelativeHorizontalPosition, RelativeVerticalPosition, SectionType, Table, TableAnchorType, TableCell, TableLayoutType, TableRow, TextRun, WidthType, ShadingType, VerticalAlign, BorderStyle } from 'docx';
import * as fs from 'fs';
import { ApendexTable, AuditStudentDto, AuditWorkTeacherDto, ComandTable, LeaveTableDto, LernActivityTableDto, LernPlanInfoDto, LernPlanTableDto, PersonalInfoDto, SarReportDto, SelftAssesmentDto, SelftReportDto, Stand1Dto, Stand2Dto, Stand3Dto, StandardStudentDto, WorkingInfoDto, WorkResultDto } from './sar-report.dto';

export class SarReportModel{
    doc:Document;
    fontName = 'Tahoma'
    fontBodyNoneBreak = {
        font:'Tahoma',
        size:22,
    }
    fontBodyBoldNoneBreak = {
        font:'Tahoma',
        size:22,
        bold:true,
    }
    fontBody = {
        font:'Tahoma',
        size:22,
    }
    fontBodyBold = {
        font:'Tahoma',
        size:22,
        bold:true,
        break:1,
    }
    fontHeader = {
        font:'Tahoma',
        size:22,
        bold:true,
    }
    fontHeaderNoneBreak = {
        font:'Tahoma',
        size:22,
        bold:true,
    }
    fontCation={
        font:'Tahoma',
        size:14,
    }
    tableHeaderStyle = {
        shading:{
            color:'#C0C0C0',
            fill:'#C0C0C0',
            type:ShadingType.DIAGONAL_CROSS
        },
        verticalAlign:VerticalAlign.CENTER,

    }
    fontTableHeader = {
        font:'Tahoma',
        size:22,
        bold:true,
    }
    tableBodyStyle = {
        verticalAlign:VerticalAlign.CENTER,
    }
    fontTableBody= {
        font:'Tahoma',
        size:22,
    }
    constructor(model:SarReportDto){
        const path: string = `assert/images/logo_boonwattana.png`;

        this.doc = new Document({
            sections:[
                {
                    properties:{
                        page: {
                            pageNumbers: {
                                start: 1,
                                formatType: NumberFormat.DECIMAL,
                            },
                        },
                    },
                    children:[
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(path),
                                    transformation: {
                                        width: 100,
                                        height: 150,
                                    },
                                }),
                            ],
                            alignment:AlignmentType.CENTER
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text:`รายงานผลการปฏิบัติงาน`,
                                    font:'Tahoma',
                                    size:40,
                                    bold:true,

                                }),
                                new TextRun({
                                    text:`และผลการประเมินตนเองรายบุคคล`,
                                    font:'Tahoma',
                                    break:1,
                                    size:40,
                                    bold:true
                                }),
                                new TextRun({
                                    text:`(Self Assessment Report: SAR)`,
                                    font:'Tahoma',
                                    break:1,
                                    size:40,
                                }),
                                new TextRun({
                                    text:`ผู้รายงาน`,
                                    font:'Tahoma',
                                    break:8,
                                    size:40,
                                }),
                                new TextRun({
                                    text:`ชื่อ  ${model.personalInfo.firstName}  ${model.personalInfo.lastName} `,
                                    font:'Tahoma',
                                    break:1,
                                    size:30,
                                }),
                                new TextRun({
                                    text:`ตำแหน่ง ${model.personalInfo.position??''}`,
                                    font:'Tahoma',
                                    break:1,
                                    size:30,
                                }),
                                new TextRun({
                                    text:`โรงเรียนบุญวัฒนา`,
                                    font:'Tahoma',
                                    break:5,
                                    size:34,
                                    bold:true
                                }),
                                new TextRun({
                                    text:`สำนักงานเขตพื้นที่การศึกษามัธยมศึกษา เขต 31`,
                                    font:'Tahoma',
                                    break:1,
                                    size:34,
                                    bold:true
                                }),
                            ],
                            alignment:AlignmentType.CENTER
                        }),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.addTitlePage(model),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.addPersonalPage(model.personalInfo),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getWorkTeaching1_2(model.workingInfo),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getLernPlan1_3(model.lernPlanInfo),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getLernPlan1_4(model.workResultInfo),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getLernPlan1_5(model.auditWorkTeacherInfo),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getLernPlan1_6(model.selftAssesmentInfo),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getLernPlan1_7(model.auditStudentInfo),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getStandard(model.stadardStudent),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getSelftReport(model.selftReport),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getAependex(model.selftReport.appendix),
                        new Paragraph({
                            children: [
                                new PageBreak()
                            ],
                        }),
                        ...this.getCommand(model.selftReport.command)

                    ]

                }
            ]
        })
        
    }
    getCommand(model: ComandTable[]) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`คำสั่งแต่งตั้งการปฏิบัติหน้าที่   `,
                        ...this.fontHeaderNoneBreak
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ประจำปีการศึกษา 2562 โรงเรียนบุญวัฒนา (สพม.31) `,
                        ...this.fontHeaderNoneBreak
                        ,
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ของ นางสาวอรวรรณ ผันผาย  ตำแหน่ง ชำนาญการ`,
                        ...this.fontHeaderNoneBreak
                        ,
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ลำดับที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เลขที่คำสั่ง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เรื่อง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3000,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ผลการปฏิบัติงาน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3000,
                                            type: WidthType.DXA,
                                        },
                            }),
   
   
                        ],
                    }),
                    ...model.map((m,index)=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${index+1}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.orderNumber??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.title??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.result??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                
                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })

           
        ]
    }
    getAependex(model: ApendexTable[]) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ภาคผนวก`,
                        ...this.fontHeader
                        ,
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            ...model.map(m=>{
                return new Paragraph({
                    children: [
                        new TextRun({
                            text:` - ${m.name}`,
                            ...this.fontHeader,    
                        }),
                    ],
                    alignment:AlignmentType.CENTER
                })
            }),
            new Paragraph({
                children:[
                    new PageBreak()
                ],
                
            }),
            ...model.map(m=>{
                return new Paragraph({
                    children: [
                        new TextRun({
                            text:` - ${m.name}`,
                            ...this.fontHeader,    
                        }),
                        new TextRun({
                            text:``,
                            ...this.fontHeader, 
                            break:2   
                        }),
                        ...m.imageUrls.map(m=>{
                            return new ImageRun({
                                data: fs.readFileSync(`public/uploads/images/${m}`),
                                transformation: {
                                    width: 150,
                                    height: 150,
                                },  
                            })
                        })
                    ],
                    alignment:AlignmentType.CENTER
                })
            }),

           
        ]
    }
    getSelftReport(model: SelftReportDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`การรับรองรายงานการประเมินตนเอง`,
                        ...this.fontHeaderNoneBreak
                        ,
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(Self AssessmentReport ; SAR)`,
                        ...this.fontHeaderNoneBreak,    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ลงชื่อ					        ผู้รายงาน`,
                        ...this.fontHeaderNoneBreak,
                        break:5
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(                         )`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ตำแหน่ง               `,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text:`ลงชื่อ					        ผู้รับรองรายงาน`,
                        ...this.fontHeaderNoneBreak,
                        break:5
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(                     )`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:` หัวหน้ากลุ่มสาระ  `,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ลงชื่อ					        ผู้รับรองรายงาน`,
                        ...this.fontHeaderNoneBreak,
                        break:5
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(นางสุภาพ ของพึ่งกลาง)`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`รองผู้อำนวยการฝ่ายวิชาการ`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text:`ลงชื่อ					        ผู้รับรองรายงาน`,
                        ...this.fontHeaderNoneBreak,
                        break:5
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(นายนิรมิต ดวดกระโทก)`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ผู้อำนวยการโรงเรียนบุญวัฒนา`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
        ]
    }
    getStandard(model: StandardStudentDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ตอนที่ 2`,
                        ...this.fontHeader
                        ,
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ผลการดำเนินงานตามมาตรฐานการศึกษา`,
                        ...this.fontHeader,    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`คำชี้แจง`,
                        ...this.fontHeader,
                        break:1
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`    1. ศึกษาเกณฑ์มาตรฐานคุณภาพการศึกษาของโรงเรียนบุญวัฒนา มาตรฐานที่ 1-3`,
                        ...this.fontBody,

    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`    2. มาตรฐานที่ 1-3  ประเมินผลแล้วจะได้ผลระดับคุณภาพตัวบ่งชี้/มาตรฐาน แล้วทำเครื่องหมาย ✓  ลงในช่องระดับคุณภาพ `,
                        ...this.fontBody,

                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`    3. เกณฑ์การตัดสิน`,
                        ...this.fontBody,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      5     หมายถึง    มีผลการปฏิบัติอยู่ในระดับยอดเยี่ยม`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      4     หมายถึง    มีผลการปฏิบัติอยู่ในระดับดีเลิศ`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      3     หมายถึง    มีผลการปฏิบัติอยู่ในระดับดี`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      2     หมายถึง    มีผลการปฏิบัติอยู่ในระดับปานกลาง`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1     หมายถึง    มีผลการปฏิบัติอยู่ในระดับกำลังพัฒนา`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getStandard_1(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
                    }),
                    new PageBreak()
                ],
                alignment:AlignmentType.LEFT,
                
            }),
            ...this.getStandard_2(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getStandard_3(model),

        ]
    }
    getStandard_3(model: StandardStudentDto) {
        const choiceArr1 = ['choice1','choice2','choice3','choice4','choice5']
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`มาตรฐานที่ 2 กระบวนการบริหารและการจัดการ`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ตัวบ่งชี้`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 5500,
                                    type: WidthType.DXA,
                                },
                                rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับคุณภาพตัวบ่งชี้/มาตรฐาน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:5
                            }),
     
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`5`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`4`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`3`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`2`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`1`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                        ],
                    }),
                    ...choiceArr1.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelStandard3(m)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard3[m],5)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard3[m],4)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard3[m],3)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard3[m],2)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard3[m],1)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),

                            ],
                        })
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`คะแนนรวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard3(model.standard3,5))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard3(model.standard3,4))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard3(model.standard3,3))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard3(model.standard3,2))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard3(model.standard3,1))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),

   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`สรุปผลการประเมินมาตรฐานที่ 3`,
                                        ...this.fontTableHeader,}),
                                        new TextRun({
                                            text:`(คะแนนรวมทั้งหมด/5)`,
                                            ...this.fontTableBody,break:1}),
                                            
                                    ],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard3(model.standard3,-1,5))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:5

                            }),
                            

   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับคุณภาพ`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard3Label(model.standard3,5))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:5

                            }),
                            

   
                        ],

                    }),
                ],
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
            //  new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`ข้อเสนอแนะเพิ่มเติม`,
            //             ...this.fontHeader
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            // new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`  -  ผู้เรียนควรมีความสามารถในการคิดวิเคราะห์ `,
            //             ...this.fontBody
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            
        ]
    }
    getStandard_2(model: StandardStudentDto) {
        const choiceArr1 = ['choice1','choice2','choice3','choice4','choice5','choice6']
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`มาตรฐานที่ 2 กระบวนการบริหารและการจัดการ`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ตัวบ่งชี้`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 5500,
                                    type: WidthType.DXA,
                                },
                                rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับคุณภาพตัวบ่งชี้/มาตรฐาน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:5
                            }),
     
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`5`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`4`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`3`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`2`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`1`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                        ],
                    }),
                    ...choiceArr1.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelStandard2(m)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard2[m],5)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard2[m],4)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard2[m],3)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard2[m],2)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard2[m],1)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),

                            ],
                        })
                    }),

                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`คะแนนรวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard2(model.standard2,5))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard2(model.standard2,4))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard2(model.standard2,3))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard2(model.standard2,2))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard2(model.standard2,1))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),

   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`สรุปผลการประเมินมาตรฐานที่ 2`,
                                        ...this.fontTableHeader,}),
                                        new TextRun({
                                            text:`(คะแนนรวมทั้งหมด/6)`,
                                            ...this.fontTableBody,break:1}),
                                            
                                    ],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard2(model.standard2,-1,6))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:5

                            }),
                            

   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับคุณภาพ`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard2Label(model.standard2,6))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:5

                            }),
                            

   
                        ],

                    }),
                ],
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
            //  new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`ข้อเสนอแนะเพิ่มเติม`,
            //             ...this.fontHeader
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            // new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`  -  ผู้เรียนควรมีความสามารถในการคิดวิเคราะห์ `,
            //             ...this.fontBody
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            
        ]
    }
    getStandard_1(model: StandardStudentDto) {
        const choiceArr1 = ['choice1','choice2','choice3','choice4','choice5','choice6']
        const choiceArr2 = ['choice7','choice8','choice9','choice10']
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`มาตรฐานที่ 1  คุณภาพของผู้เรียน`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),

            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ตัวบ่งชี้`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 5500,
                                    type: WidthType.DXA,
                                },
                                rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับคุณภาพตัวบ่งชี้/มาตรฐาน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:5
                            }),
     
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`5`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`4`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`3`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`2`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`1`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 800,
                                    type: WidthType.DXA,
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`1.1 ผลสัมฤทธิ์ทางวิชาการของผู้เรียน`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.LEFT, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),

                        ],
                    }),
                    ...choiceArr1.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelStandard1(m)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],5)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],4)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],3)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],2)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],1)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),

                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`1.2 คุณลักษณะที่พึงประสงค์ของผู้เรียน`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.LEFT, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),

                        ],
                    }),
                    ...choiceArr2.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelStandard1(m)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],5)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],4)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],3)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],2)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model.standard1[m],1)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),

                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`คะแนนรวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard1(model.standard1,5))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard1(model.standard1,4))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard1(model.standard1,3))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard1(model.standard1,2))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard1(model.standard1,1))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),

   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`สรุปผลการประเมินมาตรฐานที่ 1`,
                                        ...this.fontTableHeader,}),
                                        new TextRun({
                                            text:`(คะแนนรวมทั้งหมด/10)`,
                                            ...this.fontTableBody,break:1}),
                                            
                                    ],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard1(model.standard1,-1,10))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:5

                            }),
                            

   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับคุณภาพ`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${(this.sumValueStandard1Label(model.standard1,10))}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:5

                            }),
                            

   
                        ],

                    }),
                ],
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
            //  new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`ข้อเสนอแนะเพิ่มเติม`,
            //             ...this.fontHeader
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            // new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`  -  ผู้เรียนควรมีความสามารถในการคิดวิเคราะห์ `,
            //             ...this.fontBody
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            
        ]
    }
    sumValueStandard3Label(model: Stand3Dto,v:number) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5']
        let count = 0
        choiceArr.forEach(el=>{
            count += +model[el]

        })
        count = count/v
        let label = 'ยอดเยี่ยม'
        if(count<5){
            label = 'ดีเลิศ'
        }
        if(count<4){
            label = 'ดี'
        }
        if(count<3){
            label = 'ปานกลาง'
        }
        if(count<2){
            label = 'กำลังพัฒนา'
        }
        return label
    }
    sumValueStandard3(model: Stand3Dto, arg1: number,v:number = null) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5']
        let count = 0
        choiceArr.forEach(el=>{
            if(arg1 ==-1){
                count += +model[el]
            }else{
                if(model[el] == arg1){
                    count += +model[el]
                }
            }

        })
        if(v){
            return (count/v).toFixed(2)
        }
        return count
    }
    getLabelStandard3(m: string) {
        switch(m){
            case 'choice1':
                return ` 3.1 จัดการเรียนรู้ผ่านกระบวนการคิดและปฏิบัติจริง และ สามารถนำ ไปประยุกต์ใช้ในชีวิตได้`
                case 'choice2':
                    return ` 3.2 ใช้สื่อ เทคโนโลยีสารสนเทศ และแหล่งเรียนรู้ที่เอื้อต่อการเรียนรู้`
                    case 'choice3':
                        return ` 3.3 มีการบริหารจัดการชั้นเรียนเชิงบวก`
                        case 'choice4':
                            return ` 3.4 ตรวจสอบและประเมินผู้เรียนอย่างเป็นระบบ และนำผล มาพัฒนาผู้เรียน`
                            case 'choice5':
                                return ` 3.5 มีการแลกเปลี่ยนเรียนรู้และให้ข้อมูลสะท้อนกลับ เพื่อพัฒนาและปรับปรุงการจัดการเรียนรู้`




        }
    }
    sumValueStandard2Label(model: Stand2Dto,v:number) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5','choice6']
        let count = 0
        choiceArr.forEach(el=>{
            count += +model[el]

        })
        count = count/v
        let label = 'ยอดเยี่ยม'
        if(count<5){
            label = 'ดีเลิศ'
        }
        if(count<4){
            label = 'ดี'
        }
        if(count<3){
            label = 'ปานกลาง'
        }
        if(count<2){
            label = 'กำลังพัฒนา'
        }
        return label
    }
    sumValueStandard2(model: Stand2Dto, arg1: number,v:number = null) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5','choice6']
        let count = 0
        choiceArr.forEach(el=>{
            if(arg1 ==-1){
                count += +model[el]
            }else{
                if(model[el] == arg1){
                    count += +model[el]
                }
            }

        })
        if(v){
            return (count/v).toFixed(2)
        }
        return count
    }
    getLabelStandard2(m: string) {
        switch(m){
            case 'choice1':
                return ` 2.1 มีเป้าหมายวิสัยทัศน์และพันธกิจที่สถานศึกษากำหนดชัดเจน`
                case 'choice2':
                    return ` 2.2 มีระบบบริหารจัดการคุณภาพของสถานศึกษา`
                    case 'choice3':
                        return ` 2.3 ดำเนินงานพัฒนาวิชาการที่เน้นคุณภาพผู้เรียนรอบด้านตามหลักสูตรสถานศึกษา และทุกกลุ่มเป้าหมาย`
                        case 'choice4':
                            return ` 2.4 พัฒนาครูและบุคลากรให้มีความเชี่ยวชาญทางวิชาชีพ`
                            case 'choice5':
                                return ` 2.5 จัดสภาพแวดล้อมทางกายภาพและสังคมที่เอื้อต่อการจัดการเรียนรู้อย่างมีคุณภาพ`
                                case 'choice6':
                                    return ` 2.6 จัดระบบเทคโนโลยีสารสนเทศเพื่อสนับสนุนการบริหารจัดการและการจัดการเรียนรู้`


        }
    }
    sumValueStandard1Label(model: Stand1Dto,v:number) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5','choice6','choice7','choice8','choice9','choice10']
        let count = 0
        choiceArr.forEach(el=>{
            count += +model[el]

        })
        count = count/v
        let label = 'ยอดเยี่ยม'
        if(count<5){
            label = 'ดีเลิศ'
        }
        if(count<4){
            label = 'ดี'
        }
        if(count<3){
            label = 'ปานกลาง'
        }
        if(count<2){
            label = 'กำลังพัฒนา'
        }
        return label
    }
    sumValueStandard1(model: Stand1Dto, arg1: number,v:number = null) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5','choice6','choice7','choice8','choice9','choice10']
        let count = 0
        choiceArr.forEach(el=>{
            if(arg1 ==-1){
                count += +model[el]
            }else{
                if(model[el] == arg1){
                    count += +model[el]
                }
            }

        })
        if(v){
            return (count/v).toFixed(2)
        }
        return count
    }

    getLabelStandard1(m: string) {
        switch(m){
            case 'choice1':
                return ` 1) มีความสามารถในการอ่าน การเขียน การสื่อสารและการคิดคำนวณ`
                case 'choice2':
                    return ` 2) มีความสามารถในการคิดวิเคราะห์ คิดอย่างมีวิจารณญาณ อภิปรายแลกเปลี่ยนความคิดเห็น และแก้ปัญหา`
                    case 'choice3':
                        return ` 3) มีความสามารถในการสร้างนวัตกรรม`
                        case 'choice4':
                            return ` 4) มีความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร`
                            case 'choice5':
                                return ` 5) มีผลสัมฤทธิ์ทางการเรียนตามหลักสูตรสถานศึกษา`
                                case 'choice6':
                                    return ` 6) มีความรู้ทักษะพื้นฐาน และเจตคติที่ดีต่องานอาชีพ`
                                    case 'choice7':
                                        return ` 1) การมีคุณลักษณะและค่านิยมที่ดีตามที่สถานศึกษากำหนด`
                                        case 'choice8':
                                            return ` 2) ความภูมิใจในท้องถิ่นและความเป็นไทย`
                                            case 'choice9':
                                                return ` 3) การยอมรับที่จะอยู่ร่วมกันบนความแตกต่างและหลากหลาย`
                                                case 'choice10':
                                                    return ` 4) สุขภาวะทางร่างกาย และจิตสังคม`

        }
    }
    getLernPlan1_7(model: AuditStudentDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.7 ผลการประเมินผู้เรียน`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_7_1(model),
            ...this.getLernPlan1_7_2(model),

        ]
    }
    getLernPlan1_7_2(model: AuditStudentDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ผลการประเมินคุณลักษณะอันพึงประสงค์`,
                        ...this.fontBodyBold
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`วิชา`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1500,
                                    type: WidthType.DXA,
                                },
                                rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ชั้น`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`จำนวนนักเรียน (คน)`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ผลการประเมิน(คน)`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 4500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:4
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ดีเยี่ยม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ดี`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ผ่าน`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ไม่ผ่าน`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ภาคเรียนที่ 1`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                     columnSpan:7
                            }),
                           
                        ],
                    }),
                    ...model.auditBehavier1.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subject??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.class??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalStudent??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment1??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment2??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment3??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment4??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier1.reduce((sum,val)=> sum+val.totalStudent,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier1.reduce((sum,val)=> sum+val.assessment1,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier1.reduce((sum,val)=> sum+val.assessment2,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier1.reduce((sum,val)=> sum+val.assessment3,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier1.reduce((sum,val)=> sum+val.assessment4,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ร้อยละ`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier1.reduce((sum,val)=> sum+val.assessment1,0)/model.auditBehavier1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier1.reduce((sum,val)=> sum+val.assessment2,0)/model.auditBehavier1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier1.reduce((sum,val)=> sum+val.assessment3,0)/model.auditBehavier1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier1.reduce((sum,val)=> sum+val.assessment4,0)/model.auditBehavier1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
   
                        ],

                    }),



                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ภาคเรียนที่ 2`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                     columnSpan:7
                            }),
                           
                        ],
                    }),
                    ...model.auditBehavier2.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subject??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.class??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalStudent??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment1??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment2??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment3??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment4??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รวม`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier2.reduce((sum,val)=> sum+val.totalStudent,0)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier2.reduce((sum,val)=> sum+val.assessment1,0)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier2.reduce((sum,val)=> sum+val.assessment2,0)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier2.reduce((sum,val)=> sum+val.assessment3,0)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditBehavier2.reduce((sum,val)=> sum+val.assessment4,0)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ร้อยละ`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier2.reduce((sum,val)=> sum+val.assessment1,0)/model.auditBehavier2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier2.reduce((sum,val)=> sum+val.assessment2,0)/model.auditBehavier2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier2.reduce((sum,val)=> sum+val.assessment3,0)/model.auditBehavier2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditBehavier2.reduce((sum,val)=> sum+val.assessment4,0)/model.auditBehavier2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,

                            }),
   
                        ],

                    }),
                ],
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),

        ]
    }
    getLernPlan1_7_1(model: AuditStudentDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ผลการประเมินการอ่านคิด วิเคราะห์และเขียน`,
                        ...this.fontBodyBold
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`วิชา`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1500,
                                    type: WidthType.DXA,
                                },
                                rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ชั้น`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`จำนวนนักเรียน (คน)`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ผลการประเมิน(คน)`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 4500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:4
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ดีเยี่ยม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ดี`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ผ่าน`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ไม่ผ่าน`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA,
                                },
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ภาคเรียนที่ 1`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                     columnSpan:7
                            }),
                           
                        ],
                    }),
                    ...model.auditRead1.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subject??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.class??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalStudent??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment1??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment2??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment3??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment4??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead1.reduce((sum,val)=> sum+val.totalStudent,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead1.reduce((sum,val)=> sum+val.assessment1,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead1.reduce((sum,val)=> sum+val.assessment2,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead1.reduce((sum,val)=> sum+val.assessment3,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead1.reduce((sum,val)=> sum+val.assessment4,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ร้อยละ`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead1.reduce((sum,val)=> sum+val.assessment1,0)/model.auditRead1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead1.reduce((sum,val)=> sum+val.assessment2,0)/model.auditRead1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead1.reduce((sum,val)=> sum+val.assessment3,0)/model.auditRead1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead1.reduce((sum,val)=> sum+val.assessment4,0)/model.auditRead1.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
   
                        ],

                    }),



                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ภาคเรียนที่ 2`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                     columnSpan:7
                            }),
                           
                        ],
                    }),
                    ...model.auditRead2.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subject??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.class??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalStudent??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment1??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment2??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment3??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.assessment4??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead2.reduce((sum,val)=> sum+val.totalStudent,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead2.reduce((sum,val)=> sum+val.assessment1,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead2.reduce((sum,val)=> sum+val.assessment2,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead2.reduce((sum,val)=> sum+val.assessment3,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.auditRead2.reduce((sum,val)=> sum+val.assessment4,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
   
                        ],

                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ร้อยละ`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,
                                        columnSpan:2
      
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:``,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead2.reduce((sum,val)=> sum+val.assessment1,0)/model.auditRead2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead2.reduce((sum,val)=> sum+val.assessment2,0)/model.auditRead2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead2.reduce((sum,val)=> sum+val.assessment3,0)/model.auditRead2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${((model.auditRead2.reduce((sum,val)=> sum+val.assessment4,0)/model.auditRead2.reduce((sum,val)=> sum+val.totalStudent,0))*100).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableHeaderStyle,

                            }),
   
                        ],

                    }),
                ],
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),

        ]
    }
    getLernPlan1_6(model: SelftAssesmentDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.6  การประเมินตนเองเกี่ยวกับการจัดทำแผนการจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_6_1(model),


        ]
    }
    getLernPlan1_6_1(model: SelftAssesmentDto) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5']
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      (เขียนเครื่องหมาย / ลงในช่องระดับคุณภาพ โดยพิจารณาจากเกณฑ์การประเมินด้านขวามือ)`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ดัชนีชี้วัด`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 2000,
                                    type: WidthType.DXA,
                                },
                                rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับคุณภาพ`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:4
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เกณฑ์การประเมิน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3000,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`4`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`3`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`2`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`1`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 500,
                                            type: WidthType.DXA,
                                        },
                            }),
                        ],
                    }),
                    ...choiceArr.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getChoichLabelSelftAss(m)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model[m],4)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model[m],3)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model[m],2)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getLabelCheck(model[m],1)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`  ${this.getChoichLabelSelftAss2(m).split(',')[0]}`,
                                            ...this.fontTableBody}),
                                            new TextRun({
                                                text:` ${this.getChoichLabelSelftAss2(m).split(',')[1]}`,
                                                ...this.fontTableBody,break:1}),
                                                new TextRun({
                                                    text:` ${this.getChoichLabelSelftAss2(m).split(',')[2]}`,
                                                    ...this.fontTableBody,break:1}),
                                                    new TextRun({
                                                        text:` ${this.getChoichLabelSelftAss2(m).split(',')[3]}`,
                                                        ...this.fontTableBody,break:1}),
                                                        new TextRun({
                                                            text:` ${this.getChoichLabelSelftAss2(m).split(',')[4]}`,
                                                            ...this.fontTableBody,break:1})
                                        ],
                                            alignment: AlignmentType.LEFT, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
                    
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
             new Paragraph({
                children: [
                    new TextRun({
                        text:`สรุป :`,
                        ...this.fontBodyBold
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
             new Paragraph({
                children: [
                    new TextRun({
                        text:`	การจัดทำแผนการจัดการเรียนรู้นี้ อยู่ในระดับคุณภาพ…………${model.result}…………..`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`เกณฑ์การตัดสิน`,
                        ...this.fontBodyBold
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  4     หมายถึง    มีการปฏิบัติอยู่ในระดับดีมาก หรือพอใจมากที่สุด`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  3     หมายถึง    มีการปฏิบัติอยู่ในระดับดี หรือพอใจมาก`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  2     หมายถึง    มีการปฏิบัติอยู่ในระดับปานกลาง หรือพอใจพอใช้`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  1     หมายถึง    มีการปฏิบัติอยู่ในระดับปรับปรุง หรือไม่พอใจ`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
        ]
    }
    getChoichLabelSelftAss2( m: string) {
        switch(m){
            case 'choice1':
                return `1. มีการระบุตัวชี้วัด/ผลการเรียนรู้,
2. มีการวิเคราะห์ตัวชี้วัด/ผลการเรียนรู้ แยกออกเป็น 3 ด้านคือ ความรู้ เจตคติ ทักษะ (KPA),
3. มีความเหมาะสม สอดคล้องกับกิจกรรมการเรียนรู้,
4. สอดคล้องกับผลการเรียนรู้ที่คาดหวัง,
5. ครอบคลุมมาตรฐานการศึกษา`
                case 'choice2':
                    return `1. การออกแบบกิจกรรมการเรียนรู้เป็นขั้นตอน,
2. แผนการจัดกิจกรรมการเรียนรู้มี,
องค์ประกอบครบ 4 ด้าน (แลกเปลี่ยน ประสบการณ์ การสร้างองค์ความรู้ นำเสนอความรู้ ปฏิบัติ / ประยุกต์ใช้),
3. มีความเหมาะสมกับจุดประสงค์การเรียนรู้,
4. มีความสอดคล้องกับจุดประสงค์การเรียนรู้ ทั้ง 3 ด้าน (ความรู้ เจตคติ ทักษะ),
5. สามารถปฏิบัติได้จริง`
                    case 'choice3':
                        return `1. มีการจัดกิจกรรมการเรียนรู้โดยใช้กระบวนการกลุ่ม,
2. มีความหลากหลายในการมีส่วนร่วมของผู้เรียน,
3. มีการกำหนดบทบาทและกิจกรรมอย่าง ชัดเจน,
4. ปฏิบัติจริง,
5. ผู้เรียนสนุกสนาน เกิดการเรียนรู้`
                        case 'choice4':
                            return `1. มีการประเมินผลการเรียนในแต่ละแผน,
2. มีการกำหนดวิธีการประเมินผลหลากหลาย,
3. วิธีการประเมินผลสอดคล้องกับจุดประสงค์การเรียนรู้,
4. ปฏิบัติจริง,
5. นำผลการประเมินมาพัฒนาการเรียนรู้`
                            case 'choice5':
                                return `1. มีการใช้สื่อ อุปกรณ์หรือแหล่งเรียนรู้,
2. มีการกำหนดขั้นตอนหรือวิธีการใช้สื่อ หรือแหล่งเรียนรู้,
3. มีการใช้สื่อ อุปกรณ์หรือแหล่งการเรียนรู้ เหมาะสมกับกิจกรรมการเรียนรู้,
4. มีสื่อ อุปกรณ์ แหล่งเรียนรู้,
5. มีการพัฒนาสื่อ อุปกรณ์ แหล่งเรียนรู้`
        }
    }
    getChoichLabelSelftAss( m: string) {
        switch(m){
            case 'choice1':
                return `1. การวิเคราะห์ มาตรฐานฯและ ตัวชี้วัด/ผลการเรียนรู้ (ระดับ 4 มี 5 ข้อ ระดับ 3 มี 4 ข้อ ระดับ 2 มี 3 ข้อ ระดับ 1 มี 1-2 ข้อ)`
                case 'choice2':
                    return `2. การออกแบบกิจกรรม การเรียนรู้ (ระดับ 4 มี 5 ข้อ ระดับ 3 มี 4 ข้อ ระดับ 2 มี 3 ข้อ ระดับ 1 มี 1-2 ข้อ)`
                    case 'choice3':
                        return `3. การออกแบบปฏิสัมพันธ์ (ระดับ 4 มี 5 ข้อ ระดับ 3 มี 4 ข้อ ระดับ 2 มี 3 ข้อ ระดับ 1 มี 1-2 ข้อ)`
                        case 'choice4':
                            return `4. การออกแบบประเมินผล (ระดับ 4 มี 5 ข้อ ระดับ 3 มี 4 ข้อ ระดับ 2 มี 3 ข้อ ระดับ 1 มี 1-2 ข้อ)`
                            case 'choice5':
                                return `5. การใช้สื่ออุปกรณ์ การเรียนรู้ (ระดับ 4 มี 5 ข้อ ระดับ 3 มี 4 ข้อ ระดับ 2 มี 3 ข้อ ระดับ 1 มี 1-2 ข้อ)`
        }
    }
    getLernPlan1_5(model: AuditWorkTeacherDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.5  ผลการประเมินการสอนของครูโดยนักเรียน `,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_5_1(model),


        ]
    }
    getLernPlan1_5_1(model: AuditWorkTeacherDto) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5','choice6','choice7','choice8','choice9','choice10','choice11','choice12','choice13','choice14','choice15','choice16','choice17','choice18','choice19','choice20']
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(หลักฐานแสดงความพึงพอใจต่อการเรียนการสอน)`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`ตาราง  แสดงร้อยละของระดับการประเมินการสอนของครูโดยนักเรียน`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`กิจกรรม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 4500,
                                    type: WidthType.DXA,
                                },
                                rowSpan:2
                                
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับการประเมิน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 4500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:5
                            }),
                            
                
                           
                            
   
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`มากที่สุด`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 1500,
                                    type: WidthType.DXA,
                                },
                                
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`มาก`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ปานกลาง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`น้อย`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`น้อยที่สุด`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),   
                
                           
                            
   
                        ],
                    }),
                    ...choiceArr.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getChoiceAuditLabel(m)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getValueAudit(model,m,5)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getValueAudit(model,m,4)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getValueAudit(model,m,3)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getValueAudit(model,m,2)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getValueAudit(model,m,1)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
                    
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
             new Paragraph({
                children: [
                    new TextRun({
                        text:`จากผลการประเมินการสอนของครูโดยนักเรียน พบว่าอยู่ในระดับ `,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:` ${this.getLabelCheck(model.result,5)} มากที่สุด   ${this.getLabelCheck(model.result,4)} มาก  ${this.getLabelCheck(model.result,3)} ปานกลาง  ${this.getLabelCheck(model.result,2)} น้อย  ${this.getLabelCheck(model.result,1)} น้อยที่สุด`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),

        ]
    }
    getValueAudit(model: AuditWorkTeacherDto, m: string, arg2: number) {
        return model[`${m}_${arg2}P`]
    }
    getChoiceAuditLabel(m: string) {
        switch(m){
            case 'choice1':
                return `1.ครูแจ้งผลการเรียนรู้ให้นักเรียนทราบอย่างชัดเจน`
                case 'choice2':
                    return `2.ครูจัดกิจกรรมการเรียนรู้สนุกและน่าสนใจ`
                    case 'choice3':
                        return `3.เนื้อหาที่สอนทันสมัยเสมอ`
                        case 'choice4':
                            return `4.ครูใช้สื่อประกอบการเรียนการสอนที่เหมาะสมและหลากหลาย`
                            case 'choice5':
                                return `5.ครูใช้คำถามซักถามนักเรียนบ่อย ๆ`
                                case 'choice6':
                                    return `6.ครูประยุกต์สาระที่สอนเข้ากับเหตุการณ์ปัจจุบัน/สภาพแวดล้อม`
                                    case 'choice7':
                                        return `7.ครูส่งเสริมนักเรียนได้ฝึกปฏิบัติจริง มีการจัดการ และ การแก้ปัญหา`
                                        case 'choice8':
                                            return `8.ครูให้นักเรียนฝึกกระบวนการคิด คิดวิเคราะห์  คิดสร้างสรรค์`
                                            case 'choice9':
                                                return `9.ครูส่งเสริมให้นักเรียนทำงานร่วมกันทั้งเป็นกลุ่มและรายบุคคล`
                                                case 'choice10':
                                                    return `10.ครูให้นักเรียนแสวงหาความรู้จากแหล่งเรียนรู้ต่าง ๆ`
                                                    case 'choice11':
                                                        return `11.ครูมีการเสริมแรงให้นักเรียนที่ร่วมกิจกรรมการเรียนการสอน`
                                                        case 'choice12':
                                                            return `12.ครูเปิดโอกาสให้นักเรียนซักถามปัญหา`
                                                            case 'choice13':
                                                                return `13.ครูคอยกระตุ้นให้นักเรียนตื่นตัวในการเรียนเสมอ`
                                                                case 'choice14':
                                                                    return `14.ครูสอดแทรกคุณธรรมและค่านิยม  12  ประการในวิชาที่สอน`
                                                                    case 'choice15':
                                                                        return `15.ครูยอมรับความคิดเห็นของนักเรียนที่ต่างไปจากครู`
                                                                        case 'choice16':
                                                                            return `16.นักเรียนมีส่วนร่วมในการวัดและประเมินผลการเรียน`
                                                                            case 'choice17':
                                                                                return `17.ครูมีการประเมินผลการเรียนด้วยวิธีการที่หลากหมายและยุติธรรม`
                                                                                case 'choice18':
                                                                                    return `18.ครูมีความตั้งใจในการจัดกิจกรรมการเรียนการสอน `
                                                                                    case 'choice19':
                                                                                        return `19.บุคลิกภาพ การแต่งกายและการพูดจาของครูเหมาะสม `
                                                                                        case 'choice20':
                                                                                            return `20.ครูเข้าสอนและออกชั้นเรียนตรงตามเวลา`
        }
    }
    getLernPlan1_4(model: WorkResultDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.4  ผลการปฏิบัติงาน`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_4_1(model),
            ...this.getLernPlan1_4_2(model),

        ]
    }
    getLernPlan1_4_2(model: WorkResultDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.4.2  การปฏิบัติงานหน้าที่พิเศษปรากฏผลดังนี้ (หลักฐานปรากฏในภาคผนวก)`,
                        ...this.fontBody,
                        break:2

    
                    }),
                    new TextRun({
                        text:`        1)  ฝ่ายวิชาการ`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           1.ปฏิบัติหน้าที่หัวหน้ากลุ่มสาระการเรียนรู้......${model.actionSpecial.group1Text1}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.ปฏิบัติหน้าที่การสอนกลุ่มสาระการเรียนรู้......${model.actionSpecial.group1Text2}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           3.การรับนักเรียนเข้าศึกษาต่อระดับชั้นมัธยมศึกษาปีที่......${model.actionSpecial.group1Text3}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           4.การรับมอบตัวนักเรียนใหม่ระดับชั้นมัธยมศึกษาปีที่......${model.actionSpecial.group1Text4}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`        สรุปได้ว่า `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`ระดับคุณภาพการปฏิบัติงาน   ${this.getLabelCheck(model.actionSpecial.group1Result,3)} ดี   ${this.getLabelCheck(model.actionSpecial.group1Result,2)} พอใช้  ${this.getLabelCheck(model.actionSpecial.group1Result,1)} ปรับปรุง`,
                        ...this.fontBody,
    
                    }),

                    new TextRun({
                        text:`        2) ฝ่ายกิจการนักเรียน`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`           1.การเยี่ยมบ้านนักเรียนชั้นมัธยมศึกษาศึกษาปีที่......${model.actionSpecial.group2Text1}...จำนวน ${model.actionSpecial.group2Text2} ครั้ง...`,
                        ...this.fontBody,
                        break:1
    
                    }),

                    new TextRun({
                        text:`           2.ปฏิบัติหน้าที่ครูเวรวันหยุดราชการ (ครั้ง)......${model.actionSpecial.group2Text3} ครั้ง......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           3.ร่วมการประชุมผู้ปกครองนักเรียน (ครั้ง)......${model.actionSpecial.group2Text4} ครั้ง......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           4.อื่น ๆ......${model.actionSpecial.group2Text5}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`        สรุปได้ว่า `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`ระดับคุณภาพการปฏิบัติงาน   ${this.getLabelCheck(model.actionSpecial.group2Result,3)} ดี   ${this.getLabelCheck(model.actionSpecial.group2Result,2)} พอใช้  ${this.getLabelCheck(model.actionSpecial.group2Result,1)} ปรับปรุง`,
                        ...this.fontBody,
    
                    }),
                    new TextRun({
                        text:`        3)  ฝ่ายบริหารงานทั่วไป`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`           1.ปฏิบัติงานหน้าที่ดูแลบริเวณ......${model.actionSpecial.group3Text1}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.อื่นๆ ......${model.actionSpecial.group3Text2}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                  
                    new TextRun({
                        text:`        สรุปได้ว่า `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`ระดับคุณภาพการปฏิบัติงาน   ${this.getLabelCheck(model.actionSpecial.group3Result,3)} ดี   ${this.getLabelCheck(model.actionSpecial.group3Result,2)} พอใช้  ${this.getLabelCheck(model.actionSpecial.group3Result,1)} ปรับปรุง`,
                        ...this.fontBody,
    
                    }),
                    new TextRun({
                        text:`        4)  ฝ่ายอำนวยการและบุคลากร`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`           1. ปฏิบัติงานหน้าที่ การรับเงินบำรุงการศึกษานักเรียนชั้นประถมศึกษาปีที่......${model.actionSpecial.group4Text1}...จำนวน ${model.actionSpecial.group4Text2} ครั้ง...`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.อื่นๆ......${model.actionSpecial.group4Text3}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           3.การรับนักเรียนเข้าศึกษาต่อระดับชั้นมัธยมศึกษาปีที่......${model.actionSpecial.group1Text3}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           4.การรับมอบตัวนักเรียนใหม่ระดับชั้นมัธยมศึกษาปีที่......${model.actionSpecial.group1Text4}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`        สรุปได้ว่า `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`ระดับคุณภาพการปฏิบัติงาน   ${this.getLabelCheck(model.actionSpecial.group4Result,3)} ดี   ${this.getLabelCheck(model.actionSpecial.group4Result,2)} พอใช้  ${this.getLabelCheck(model.actionSpecial.group4Result,1)} ปรับปรุง`,
                        ...this.fontBody,
    
                    }),
                    new TextRun({
                        text:`        5)  ฝ่ายยุทธศาสตร์การพัฒนา`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`          1.รายงานผลการประเมินตนเอง......${model.actionSpecial.group5Text1}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.อื่น ๆ......${model.actionSpecial.group5Text2}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                  
                    new TextRun({
                        text:`        สรุปได้ว่า `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`ระดับคุณภาพการปฏิบัติงาน   ${this.getLabelCheck(model.actionSpecial.group5Result,3)} ดี   ${this.getLabelCheck(model.actionSpecial.group5Result,2)} พอใช้  ${this.getLabelCheck(model.actionSpecial.group5Result,1)} ปรับปรุง`,
                        ...this.fontBody,
    
                    }),

                ],
                alignment:AlignmentType.LEFT
            }),
        ]
    }
    getLabelCheck(group1Result: number, arg1: number) {
        if(group1Result == arg1){
            return '[√]'
        }
        return '[  ]'
    }
    getLernPlan1_4_1(model: WorkResultDto) {
        const netStd = (model.activityTeach2?.reduce((sum,val)=>sum+val.totalStudent,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.totalStudent,0))/100
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.4.1 การปฏิบัติหน้าที่จัดกิจกรรมการเรียนการสอนประจำปีการศึกษา  ปรากฏผลดังนี้ `,
                        ...this.fontBody,
                        break:1
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รายวิชา`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ห้อง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`จำนวนผู้เรียน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                                        rowSpan:2
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ผลการเรียน (คน)`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 5500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan:11
                            }),
   
   
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ร`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`มส.`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`0`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`1`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`1.5`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`2`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`2.5`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`3`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`3.5`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`4`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`รวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                }
                            }),
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ภาคเรียนที่ 1`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:15
                            }),
                           
   
   
                        ],
                    }),
                    ...model.activityTeach1?.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subjectName??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.class??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalStudent??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad1??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad2??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad3??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad4??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad5??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad6??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad7??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad8??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad9??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad10??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalResultGrad??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                
                                
                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`รวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                     
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:3
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.totalStudent,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad1,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad2,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad3,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad4,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad5,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad6,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad7,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad8,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad9,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad10,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach1?.reduce((sum,val)=>sum+val.totalResultGrad,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
   
   
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ภาคเรียนที่ 2`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:15
                            }),
                           
   
   
                        ],
                    }),
                    ...model.activityTeach2?.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subjectName??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.class??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalStudent??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad1??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad2??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad3??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad4??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad5??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad6??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad7??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad8??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad9??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.resultGrad10??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.totalResultGrad??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                
                                
                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`รวม`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                     
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:3
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.totalStudent,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad1,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad2,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad3,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad4,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad5,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad6,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad7,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad8,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad9,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad10,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.totalResultGrad,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
   
   
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`รวม (1)+(2)`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                     
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:3
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.totalStudent,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.totalStudent,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad1,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad1,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad2,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad2,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad3,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad3,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad4,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad4,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad5,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad5,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad6,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad6,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad7,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad7,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad8,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad8,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad9,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad9,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad10,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad10,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${model.activityTeach2?.reduce((sum,val)=>sum+val.totalResultGrad,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.totalResultGrad,0)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
   
   
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ร้อยละ`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                     
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:3
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${''}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad1,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad1,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad2,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad2,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad3,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad3,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad4,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad4,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad5,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad5,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad6,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad6,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad7,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad7,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad8,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad8,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad9,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad9,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad10,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad10,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.totalResultGrad,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.totalResultGrad,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                            }),
   
   
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ร้อยละของนักเรียนที่ได้รับผลการเรียน 3 ขึ้นไป`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                     
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:11
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad8+val.resultGrad9+val.resultGrad10,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad8+val.resultGrad9+val.resultGrad10,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:4
                            }),
                           
   
   
                        ],
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ร้อยละของนักเรียนที่ได้รับผลการเรียน 2 ขึ้นไป`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                     
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:11
                            }),
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`${((model.activityTeach2?.reduce((sum,val)=>sum+val.resultGrad6+val.resultGrad7+val.resultGrad8+val.resultGrad9+val.resultGrad10,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.resultGrad6+val.resultGrad7+val.resultGrad8+val.resultGrad9+val.resultGrad10,0))*netStd).toFixed(2)}`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                columnSpan:4
                            }),
                           
   
   
                        ],
                    }),
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })
        ]
    }
    getLernPlan1_3(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.3  การจัดกิจกรรมการเรียนการสอน`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_1(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_2(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_3(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_4(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_5(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_6(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_7(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_8(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_9(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_10(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getLernPlan1_3_11(model),
        ]
    }
    getLernPlan1_3_11(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.11  การได้รับเชิญเป็นวิทยากร/กรรมการตัดสินภายในและภายนอกสถานศึกษา`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`วัน /เดือน / ปี`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รายการ / เรื่อง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 4500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`หน่วยงานที่เชิญ`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                
                           
                            
   
                        ],
                    }),
                    ...model.lecturerTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.date??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.story??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.agency??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),

                            ],
                        })
                    }),
                    
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
             new Paragraph({
                children: [
                    new TextRun({
                        text:`      สรุป การพัฒนาตนเอง  จำนวน ${model.seminarTable.length} ครั้ง `,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
        ]
    }
    getLernPlan1_3_10(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.10 การได้รับรางวัล/ ประกาศเกียรติคุณ / ผลงานดีเด่น / เกียรติประวัติที่ปรากฏต่อสาธารณชนด้านสถานศึกษา / ครู / นักเรียน`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`วัน /เดือน / ปี`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รางวัล/เกียรติคุณ`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`หน่วยงานที่มอบ`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`หลักฐาน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            
   
                        ],
                    }),
                    ...model.rewardTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.date??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.rewardName??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.agency??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.evidence??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
 
                            ],
                        })
                    }),
                    
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
             new Paragraph({
                children: [
                    new TextRun({
                        text:`      สรุป การพัฒนาตนเอง  จำนวน ${model.seminarTable.length} ครั้ง `,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
        ]
    }
    getLernPlan1_3_9(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.9  การพัฒนาตนเอง  (การเข้าร่วมกิจกรรมทางวิชาการ /  การเข้าร่วมอบรม /ประชุมสัมมนา  /ศึกษาดูงาน ฯลฯ)`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`วัน /เดือน / ปี`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เรื่อง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`สถานที่`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`หน่วยงานที่จัด`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`หลักฐาน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                        ],
                    }),
                    ...model.seminarTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.date??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.story??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.location??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.agency??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.evidence??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
                    
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
             }),
             new Paragraph({
                children: [
                    new TextRun({
                        text:`      สรุป การพัฒนาตนเอง  จำนวน ${model.seminarTable.length} ครั้ง `,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
        ]
    }
    getLernPlan1_3_8(model: LernPlanInfoDto) {
        const columnKey = ['choice1','choice2','choice3','choice4','choice5']
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.8 สภาพการปฏิบัติงานสอนเขียนเครื่องหมาย  ✔  ในช่องที่ตรงกับความเป็นจริงที่ท่านปฏิบัติอยู่  (ตอบได้มากกว่า 1)`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รายการปฏิบัติ`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`มากที่สุด`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`มาก`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ปานกลาง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`น้อย`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`น้อยที่สุด
                                        `,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                        ],
                    }),
                    ...columnKey.map((m,index)=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${index+1}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.getAboutLabel(m)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.calAboutLabel(model.aboutTeachTable[m],5)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.calAboutLabel(model.aboutTeachTable[m],4)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.calAboutLabel(model.aboutTeachTable[m],3)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.calAboutLabel(model.aboutTeachTable[m],2)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${this.calAboutLabel(model.aboutTeachTable[m],1)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
            })
        ]
    }
    calAboutLabel(a: any, b: number) {
        if(a==b){
            return '√'
        }
        return ''
    }
    getAboutLabel(v: string) {
        switch(v){
            case 'choice1':
                return 'ตรงตามวุฒิ/สาขาวิชาที่จบการศึกษา'
                case 'choice2':
                    return 'ตรงตามความถนัด'
                    case 'choice3':
                        return 'ตรงตามประสบการณ์การสอน'
                        case 'choice4':
                            return 'ตรงกับความรู้ความสามารถ'
                            case 'choice5':
                                return 'ตรงกับความต้องการ/ความสนใจ'
        }
    }
    getLernPlan1_3_7(model: LernPlanInfoDto) {
        const choiceArr:{a:string,b:string}[] =[
            {
                a:'teachingFormat1',
                b:'teachingFormat2'
            },
            {
                a:'teachingFormat3',
                b:'teachingFormat4'
            },
            {
                a:'teachingFormat5',
                b:'teachingFormat6'
            },
            {
                a:'teachingFormat7',
                b:'teachingFormat8'
            },
            {
                a:'teachingFormat9',
                b:'teachingFormat10'
            },
            {
                a:'teachingFormat11',
                b:'teachingFormat12'
            },
            {
                a:'teachingFormat13',
                b:'teachingFormat14'
            },
            {
                a:'teachingFormat15',
                b:'teachingFormat16'
            },
            {
                a:'teachingFormat17',
                b:'teachingFormat18'
            },
            {
                a:'teachingFormat19',
                b:'teachingFormat20'
            },
            {
                a:'teachingFormat21',
                b:'teachingFormat22'
            },
            {
                a:'teachingFormat23',
                b:'teachingFormat24'
            },
            {
                a:'teachingFormat25',
                b:'teachingFormat26'
            },
        ]
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.7  รูปแบบ/ วิธีการจัดกิจกรรมการเรียนการสอนที่ครูใช้ คือ ข้อใดบ้าง (ตอบได้มากกว่า 1 ข้อ) `,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[

                    ...choiceArr.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`      ${this.getCheckActivity(model.lernActivityTable[m.a])} ${this.getActivityLabel(m.a)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            width: {
                                                size: 4500,
                                                type: WidthType.DXA,
                                            },
                                            borders:{
                                                top:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                },
                                                left:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                },
                                                bottom:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                },
                                                right:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                }
                                            }
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`      ${this.getCheckActivity(model.lernActivityTable[m.b])} ${this.getActivityLabel(m.b)}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.LEFT, })],
                                            width: {
                                                size: 4500,
                                                type: WidthType.DXA,
                                            },
                                            borders:{
                                                top:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                },
                                                left:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                },
                                                bottom:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                },
                                                right:{
                                                    color:'#FFFFFF',
                                                    size:1,
                                                    style:BorderStyle.DASHED
                                                }
                                            }
                                }),
                                
                            ],
                        })
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${model.lernActivityTable.teachingFormatOtherNote}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.LEFT, })],
                                        width: {
                                            size: 4500,
                                            type: WidthType.DXA,
                                        },
                                        borders:{
                                            top:{
                                                color:'#FFFFFF',
                                                size:1,
                                                style:BorderStyle.DASHED
                                            },
                                            left:{
                                                color:'#FFFFFF',
                                                size:1,
                                                style:BorderStyle.DASHED
                                            },
                                            bottom:{
                                                color:'#FFFFFF',
                                                size:1,
                                                style:BorderStyle.DASHED
                                            },
                                            right:{
                                                color:'#FFFFFF',
                                                size:1,
                                                style:BorderStyle.DASHED
                                            }
                                        }
                            }),
                           
                            
                        ],
                    })
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      สรุป    จำนวน ${this.sumActivity(choiceArr,model.lernActivityTable)} รูปแบบ / วิธีการจัดกิจกรรมการเรียนการสอนที่ครูใช้วิธี `,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
        ]
    }
    sumActivity(arr:{a:string,b:string}[],lernActivityTable: LernActivityTableDto) {
        let count = 0
        arr.forEach(el=>{
            if(el.a){
                count++
            }
            if(el.b){
                count++
            }
        })
        return count
    }
    getCheckActivity(arg0: boolean) {
        console.log(arg0);
        
        if(arg0){
            return '[√]'
        }
        return '[  ]'
    }
    getActivityLabel(v: string) {
        switch (v){
            case 'teachingFormat1':
                return `การอธิบาย`
                case 'teachingFormat2':
                    return `การสืบสวนสอบสวน`
                    case 'teachingFormat3':
                        return `การสาธิต / ทดลอง`
                        case 'teachingFormat4':
                            return `กลุ่มสืบค้นความรู้`
                            case 'teachingFormat5':
                                return `การใช้เกมประกอบ`
                                case 'teachingFormat6':
                                    return `กลุ่มสัมพันธ์`
                                    case 'teachingFormat7':
                                        return `สถานการณ์จำลอง`
                                        case 'teachingFormat8':
                                            return `การเรียนรู้แบบร่วมมือ`
                                            case 'teachingFormat9':
                                                return `กรณีตัวอย่าง`
                                                case 'teachingFormat10':
                                                    return `ความคิดรวบยอด`
                                                    case 'teachingFormat11':
                                                        return `บทบาทสมมุติ`
                                                        case 'teachingFormat12':
                                                            return `อริยสัจ 4`
                                                            case 'teachingFormat13':
                                                                return `การแก้ไขสถานการณ์`
                                                                case 'teachingFormat14':
                                                                    return `การศึกษาค้นคว้าด้วยตนเอง`
                                                                    case 'teachingFormat15':
                                                                        return `โปรแกรมสำเร็จรูป`
                                                                        case 'teachingFormat16':
                                                                            return `การทัศนะศึกษานอกสถานที่`
                                                                            case 'teachingFormat17':
                                                                                return `ศูนย์การเรียน`
                                                                                case 'teachingFormat18':
                                                                                    return `การเรียนรู้จากห้องสมุด`
                                                                                    case 'teachingFormat19':
                                                                                        return `ชุดการสอน`
                                                                                        case 'teachingFormat20':
                                                                                            return `การพัฒนากระบวนการคิด`
                                                                                            case 'teachingFormat21':
                                                                                                return `คอมพิวเตอร์ช่วยสอน`
                                                                                                case 'teachingFormat22':
                                                                                                    return `การใช้ภูมิปัญญาท้องถิ่น`
                                                                                                    case 'teachingFormat23':
                                                                                                        return `โครงงาน	`
                                                                                                        case 'teachingFormat24':
                                                                                                            return `การอภิปรายกลุ่มย่อย`
                                                                                                            case 'teachingFormat25':
                                                                                                                return `การถามตอบ`
                                                                                                                case 'teachingFormat26':
                                                                                                                    return `การแก้ปัญหา`
        }
    }
    getLernPlan1_3_6(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.6  เชิญวิทยากรภายนอกมาให้ความรู้แก่นักเรียน จำนวนครั้ง     ได้แก่`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`วัน /เดือน / ปี`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ชื่อวิทยากร`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เรื่อง / หัวข้อ`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                        ],
                    }),
                    ...model.lectureTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.date??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.lecturePerson??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.story??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })
        ]
    }
    getLernPlan1_3_5(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.5 การนำ/มอบหมายงาน นักเรียนไปศึกษาค้นคว้า/ใช้แหล่งเรียนรู้นอกโรงเรียนจำนวนครั้ง  ดังนี้`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ชื่อแหล่งเรียนรู้`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 4500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เรื่อง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`จำนวนครั้ง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                        ],
                    }),
                    ...model.selfLerningTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.namePlace??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.story??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.count??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })
        ]
    }
    getLernPlan1_3_4(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.4  จัดทำวิจัยในชั้นเรียน จำนวนเรื่อง    ได้แก่`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เรื่อง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 7500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับชั้น`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                        ],
                    }),
                    ...model.researchTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.story??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.classRoomName??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),

                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })
        ]
    }
    getLernPlan1_3_3(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.3  จัดทำหน่วยการเรียนรู้แบบบูรณาการ (สวนพฤกษศาสตร์, เศรษฐกิจพอเพียง) ได้แก่`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`หน่วยที่/ผลการเรียนรู้`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 3500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`เรื่อง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 3500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`จำนวนชั่วโมง`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                        ],
                    }),
                    ...model.economicTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subject??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.story??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.hour??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),

                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })
        ]
    }
    getLernPlan1_3_2(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.2  ผลิตสื่อ / นวัตกรรม  ชิ้น     ได้แก่`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ชื่อสื่อ/นวัตกรรม`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 6500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`จำนวน(ชิ้น)`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
                        ],
                    }),
                    ...model.innovationTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.innovationName??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.count??''} ${m.unit}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                             
                                
                                
                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })
        ]
    }
    getLernPlan1_3_1(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.1  จัดทำแผนการจัดการเรียนรู้     ดังนี้`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Table({
                rows:[
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ 
                                    children:[
                                    new TextRun({
                                        text:`ที่`,
                                        ...this.fontTableHeader,})],
                                        alignment: AlignmentType.CENTER,
                                     })],
                                    
                                ...this.tableHeaderStyle,
                                width: {
                                    size: 500,
                                    type: WidthType.DXA,
                                },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`รหัสวิชา`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`สาระการเรียนรู้/รายวิชา`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 4500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`ระดับชั้น`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`จำนวน/แผน`,
                                        ...this.fontTableHeader,})] ,
                                        alignment: AlignmentType.CENTER,})],
                                        ...this.tableHeaderStyle,
                                        width: {
                                            size: 1500,
                                            type: WidthType.DXA,
                                        },
                            }),
   
   
                        ],
                    }),
                    ...model.lernPlanTable.map(m=>{
                        return new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.no??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
          
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subjectNumber??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.subjectName??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.classRoomName??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                new TableCell({
                                    children: [new Paragraph({ children:[
                                        new TextRun({
                                            text:`${m.pageCount??''}`,
                                            ...this.fontTableBody,})],
                                            alignment: AlignmentType.CENTER, })],
                                            ...this.tableBodyStyle,
    
                                }),
                                
                                
                            ],
                        })
                    }),
   
                ],
               
                width: {
                    size: 9000,
                    type: WidthType.DXA,
                },
                })
        ]
    }
    getWorkTeaching1_2(model: WorkingInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.2 ข้อมูลการปฏิบัติหน้าที่`,
                        ...this.fontHeader
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getWorkTeaching1_2_1(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getWorkTeaching1_2_2(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getWorkTeaching1_2_3(model),
            new Paragraph({
                children: [
                    new TextRun({
                        text:``,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            ...this.getWorkTeaching1_2_4(model)
           
        ]
    }
    getWorkTeaching1_2_4(model: WorkingInfoDto) {
        return [
         new Paragraph({
             children: [
                 new TextRun({
                     text:`      1.2.4 งานพิเศษ ในโรงเรียน  `,
                     ...this.fontBody
 
                 }),
                 
             ],
             alignment:AlignmentType.LEFT
         }),
         new Table({
             rows:[
                 new TableRow({
                     children: [
                         new TableCell({
                             children: [new Paragraph({ 
                                 children:[
                                 new TextRun({
                                     text:`งานพิเศษในโรงเรียน`,
                                     ...this.fontTableHeader,})],
                                     alignment: AlignmentType.CENTER,
                                  })],
                                 
                             ...this.tableHeaderStyle,
                             width: {
                                 size: 4500,
                                 type: WidthType.DXA,
                             },
                         }),
                         new TableCell({
                             children: [new Paragraph({ children:[
                                 new TextRun({
                                     text:`สังกัด`,
                                     ...this.fontTableHeader,})] ,
                                     alignment: AlignmentType.CENTER,})],
                                     ...this.tableHeaderStyle,
                                     width: {
                                         size: 4500,
                                         type: WidthType.DXA,
                                     },
                         }),
                       


                     ],
                 }),
                 ...model.jobSpecial.map(m=>{
                     return new TableRow({
                         children: [
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.name??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.organize??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 2500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             
                             
                         ],
                     })
                 }),

             ],
            
             width: {
                 size: 9000,
                 type: WidthType.DXA,
             },
             })
        ]
     }
    getWorkTeaching1_2_3(model: WorkingInfoDto) {
        return [
         new Paragraph({
             children: [
                 new TextRun({
                     text:`      1.2.3 ปฏิบัติหน้าที่ครูที่ปรึกษา`,
                     ...this.fontBody
 
                 }),
             ],
             alignment:AlignmentType.LEFT
         }),
         new Table({
             rows:[
                 new TableRow({
                     children: [
                         new TableCell({
                             children: [new Paragraph({ 
                                 children:[
                                 new TextRun({
                                     text:`ชั้น / ห้อง`,
                                     ...this.fontTableHeader,})],
                                     alignment: AlignmentType.CENTER,
                                  })],
                                 
                             ...this.tableHeaderStyle,
                             width: {
                                 size: 3500,
                                 type: WidthType.DXA,
                             },
                         }),
                         new TableCell({
                             children: [new Paragraph({ children:[
                                 new TextRun({
                                     text:`ชาย(คน)`,
                                     ...this.fontTableHeader,})] ,
                                     alignment: AlignmentType.CENTER,})],
                                     ...this.tableHeaderStyle,
                                     width: {
                                         size: 1500,
                                         type: WidthType.DXA,
                                     },
                         }),
                         new TableCell({
                             children: [new Paragraph({ children:[
                                 new TextRun({
                                     text:`หญิง (คน)`,
                                     ...this.fontTableHeader,})],
                                     alignment: AlignmentType.CENTER, })],
                                     ...this.tableHeaderStyle,
                                     width: {
                                         size: 1500,
                                         type: WidthType.DXA,
                                     },
                         }),
                         new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`รวมทั้งสิ้น (คน)`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    width: {
                                        size: 1500,
                                        type: WidthType.DXA,
                                    },
                        }),


                     ],
                 }),
                 ...model.consultTable.map(m=>{
                     return new TableRow({
                         children: [
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.classRoom??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.maleCount??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 2500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.femaleCount??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 1500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.allCount??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 1500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             
                         ],
                     })
                 }),

             ],
            
             width: {
                 size: 9000,
                 type: WidthType.DXA,
             },
             })
        ]
     }
    getWorkTeaching1_2_2(model: WorkingInfoDto) {
        return [
         new Paragraph({
             children: [
                 new TextRun({
                     text:`      1.2.2   กิจกรรมพัฒนาผู้เรียนที่ปฏิบัติการพัฒนาผู้เรียนตลอดปีการศึกษา ${model.year}`,
                     ...this.fontBody
 
                 }),
             ],
             alignment:AlignmentType.LEFT
         }),
         new Table({
             rows:[
                 new TableRow({
                     children: [
                         new TableCell({
                             children: [new Paragraph({ 
                                 children:[
                                 new TextRun({
                                     text:`ที่`,
                                     ...this.fontTableHeader,})],
                                     alignment: AlignmentType.CENTER,
                                  })],
                                 
                             ...this.tableHeaderStyle,
                             width: {
                                 size: 500,
                                 type: WidthType.DXA,
                             },
                         }),
                         new TableCell({
                             children: [new Paragraph({ children:[
                                 new TextRun({
                                     text:`กิจกรรมพัฒนาผู้เรียน และชุมนุ`,
                                     ...this.fontTableHeader,})] ,
                                     alignment: AlignmentType.CENTER,})],
                                     ...this.tableHeaderStyle,
                                     width: {
                                         size: 3500,
                                         type: WidthType.DXA,
                                     },
                         }),
                         new TableCell({
                             children: [new Paragraph({ children:[
                                 new TextRun({
                                     text:`ชั้น /ห้อง`,
                                     ...this.fontTableHeader,})],
                                     alignment: AlignmentType.CENTER, })],
                                     ...this.tableHeaderStyle,
                                     width: {
                                         size: 1500,
                                         type: WidthType.DXA,
                                     },
                         }),
                         new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`จำนวนนักเรียน`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    width: {
                                        size: 1500,
                                        type: WidthType.DXA,
                                    },
                        }),
                         new TableCell({
                             children: [new Paragraph({ children:[
                                 new TextRun({
                                     text:`ผ่าน`,
                                     ...this.fontTableHeader,})],
                                     alignment: AlignmentType.CENTER, })],
                                     ...this.tableHeaderStyle,
                                     width: {
                                         size: 1500,
                                         type: WidthType.DXA,
                                     },
                         }),
                         new TableCell({
                             children: [new Paragraph({ children:[
                                 new TextRun({
                                     text:`ไม่ผ่าน`,
                                     ...this.fontTableHeader,})],
                                     alignment: AlignmentType.CENTER, })],
                                     ...this.tableHeaderStyle,
                                     width: {
                                         size: 1500,
                                         type: WidthType.DXA,
                                     },
                         }),

                     ],
                 }),
                 ...model.developTable.map(m=>{
                     return new TableRow({
                         children: [
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.no??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.name??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 2500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.classRoom??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 1500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.studentCount??''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 1500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.pass?'√':''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 1500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             new TableCell({
                                 children: [new Paragraph({ children:[
                                     new TextRun({
                                         text:`${m.notpass?'√':''}`,
                                         ...this.fontTableBody,})],
                                         alignment: AlignmentType.CENTER, })],
                                         ...this.tableBodyStyle,
                                         width: {
                                             size: 2500,
                                             type: WidthType.DXA,
                                         },
                             }),
                             
                         ],
                     })
                 }),

             ],
            
             width: {
                 size: 9000,
                 type: WidthType.DXA,
             },
             })
        ]
     }
    getWorkTeaching1_2_1(model: WorkingInfoDto) {
       return [
        new Paragraph({
            children: [
                new TextRun({
                    text:`      1.2.1  ปฏิบัติการสอนตลอดปีการศึกษา ${model.year}`,
                    ...this.fontBody

                }),
            ],
            alignment:AlignmentType.LEFT
        }),
        new Table({
            rows:[
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ที่`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                            width: {
                                size: 500,
                                type: WidthType.DXA,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`รหัสวิชา`,
                                    ...this.fontTableHeader,})] ,
                                    alignment: AlignmentType.CENTER,})],
                                    ...this.tableHeaderStyle,
                                    width: {
                                        size: 2500,
                                        type: WidthType.DXA,
                                    },
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`ชื่อวิชา`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    width: {
                                        size: 2500,
                                        type: WidthType.DXA,
                                    },
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`ชั้น`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    width: {
                                        size: 2500,
                                        type: WidthType.DXA,
                                    },
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`จำนวนห้อง`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    width: {
                                        size: 2500,
                                        type: WidthType.DXA,
                                    },
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`จำนวนชั่วโมง / สัปดาห์`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    width: {
                                        size: 2500,
                                        type: WidthType.DXA,
                                    },
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`ภาคเรียนที่ 1`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    columnSpan:6
                        }),

                    ],
                }),
                ...model.workingTable1.map(m=>{
                    return new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.no??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.subjectNumber??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.subjectName??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.classRoomName??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.roomCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.hourPerWeek??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            
                        ],
                    })
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`รวมทั้งสิ้น`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,
                                    columnSpan:4
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`${model.workingTable1?.reduce((sum,m)=>sum+m.roomCount,0)}`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`${model.workingTable1?.reduce((sum,m)=>sum+m.hourPerWeek,0)}`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,

                        }),

                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`ภาคเรียนที่ 2`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableHeaderStyle,
                                    columnSpan:6
                        }),

                    ],
                }),
                ...model.workingTable2.map(m=>{
                    return new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.no??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.subjectNumber??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.subjectName??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.classRoomName??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.roomCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.hourPerWeek??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2500,
                                            type: WidthType.DXA,
                                        },
                            }),
                            
                        ],
                    })
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`รวมทั้งสิ้น`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,
                                    columnSpan:4
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`${model.workingTable2?.reduce((sum,m)=>sum+m.roomCount,0)}`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`${model.workingTable2?.reduce((sum,m)=>sum+m.hourPerWeek,0)}`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,

                        }),

                    ],
                }),
            ],
           
            width: {
                size: 9000,
                type: WidthType.DXA,
            },
            })
       ]
    }
    getPaper(){
        return this.doc
    }
    addTitlePage(model:SarReportDto){
        return [new Paragraph({
            children: [
                new TextRun({
                    text:`คำนำ`,
                    ...this.fontHeader

                }),
                new TextRun({
                    text:`      รายงานการประเมินตนเอง (Self Assessment Report : SAR) 
                    เป็นการประเมินการปฏิบัติหน้าที่ตามพระราชบัญญัติการศึกษาแห่งชาติ พุทธศักราช 2542
                    และฉบับปรับปรุง พุทธศักราช 2545 รวมทั้งมาตรฐานการศึกษาของโรงเรียน 
                    ข้าพเจ้าได้จัดทำขึ้นเพื่อรายงานผลการจัดการเรียน 
                    การสอนและการปฏิบัติหน้าที่ของข้าพเจ้าตามฝ่าย/กลุ่มงาน ตลอดจนกิจกรรมต่าง ๆ 
                    ที่ได้ส่งเสริมให้นักเรียนมีคุณลักษณะและคุณภาพตามระดับมาตรฐานคุณภาพการศึกษา 
                    โรงเรียนบุญวัฒนา สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาเขต 31
                            รายงานนี้ 
                    โรงเรียนสามารถนำผลการดำเนินงานไปจัดทำการประเมินคุณภาพภายในและสรุปรายงานให้ผู้บังคับบั
                    ญชาตามลำดับสายงาน ตลอดจนเผยแพร่ให้กับผู้ปกครอง นักเรียน 
                    ชุมชนในสังคมได้ทราบผลการปฏิบัติงานของบุคลากรโรงเรียนบุญวัฒนา 
                            ข้อมูลที่ได้จากการประเมินในการประเมินตนเอง (SAR) ในครั้งนี้ 
                    ข้าพเจ้าจะได้นำไปใช้เป็นแนวทางในการปรับปรุงเพื่อพัฒนาการปฏิบัติงานที่ได้รับมอบหมาย 
                    เพื่อส่งเสริมและพัฒนาศักยภาพของผู้เรียนให้สูงขึ้นในทุก ๆ ด้านต่อไป`,
                    break:2,
                    ...this.fontBody
                }),

            ],
            alignment:AlignmentType.CENTER
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:`ลงชื่อ ……………………………..`,
                    font:'Tahoma',
                    break:3,
                    ...this.fontBody
                }),

                new TextRun({
                    text:`${model.personalInfo.position??''} ...... / ...... / ${(new Date().getFullYear())+543}`,
                    break:1,
                    ...this.fontBody
                }),
            ],
            alignment:AlignmentType.END
            })
        ]
    }
    addPersonalPage(model:PersonalInfoDto){
        return [new Paragraph({
            children: [
                new TextRun({
                    text:`รายงานการประเมินตนเอง (SAR)`,
                    ...this.fontHeader

                }),
            ],
            alignment:AlignmentType.CENTER
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:`ตอนที่ 1 : ข้อมูลส่วนตัว`,
                    break:1,
                    ...this.fontHeader
                }),

                new TextRun({
                    text:`1.1 ข้อมูลทั่วไป`,
                    break:1,
                    ...this.fontHeader
                }),
              
            ],
            alignment:AlignmentType.LEFT
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:`      ชื่อ `,
                    ...this.fontBodyBoldNoneBreak
                }),
                new TextRun({
                    text:`สานิต`,
                    ...this.fontBody
                }),
                
                new TextRun({
                    text:`      สกุล `,
                    ...this.fontBodyBoldNoneBreak
                }),
                new TextRun({
                    text:`วักชัยภูมิ`,
                    ...this.fontBody
                }),
            ],
            alignment:AlignmentType.LEFT,
            spacing: {
                before: 200,
            },
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:`      วุฒิการศึกษา  `,
                    break:1,
                    ...this.fontHeader
                }),
                ...model.educations.map(m=>{
                    return new TextRun({
                        text:`          ${m}`,
                        break:1,
                        ...this.fontBody
                    })
                }),
                new TextRun({
                    text:`      ตำแหน่ง  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:model.position??'',
                    ...this.fontBody
                }),
                
                new TextRun({
                    text:`      วิทยฐานะ  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:model.academic??'',
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ปฏิบัติราชการ  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.actionYear??''}  ปี`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      เลขที่ตำแหน่ง  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.positionNumber??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      เงินเดือน  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.salary??''} บาท`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      เงินวิทยฐานะ  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.academicSalary??''} บาท`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      วัน / เดือน / ปี เกิด  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.birthDate??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      วัน / เดือน / ปี บรรจุเข้ารับราชการ  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.startWorkDate??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ปฏิบัติการสอนกลุ่มสาระการเรียนรู้  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.subject??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ปฏิบัติงานพิเศษ  `,
                    ...this.fontBodyBold
                }),
                ...model.workSpecial.map(m=>{
                    return  new TextRun({
                        text:`    - ${m??''}`,
                        ...this.fontBody
                    })
                }),
                new TextRun({
                    text:`สถานศึกษา / หน่วยงาน  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`โรงเรียนบุญวัฒนา`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`อำเภอ / เขต `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`เมือง`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`สำนักงานเขตพื้นที่การศึกษา `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`มัธยมศึกษา เขต 31 `,
                    ...this.fontBody
                }),
            ],
            alignment:AlignmentType.LEFT
        }),
        ...this.getLeaveTable(model.leaveTable,model.sumLeaveTime,model.sumLeaveDay,model.leave),
      
    ]
    }

    getLeaveTable(leaveTable: LeaveTableDto[],sumTime:string,sumDay:string,leave:string) {
         return [
            new Paragraph({
                children:[
                    new TextRun({
                        text:`แสดงจำนวนวันลา ประจำปีการศึกษา  ${leave}  `,
                        ...this.fontHeader
    
                    }),
                ]
            }),
            new Table({
            rows:[
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`วัน เดือน ปี ที่ลา`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,

                            rowSpan:2
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ลาป่วย`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,

                            columnSpan:2
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ลากิจ`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                            columnSpan:2
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ลาอุปสมบท`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                            columnSpan:2
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ลาคลอด`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                            columnSpan:2
                        }),

                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`มาสาย`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                            columnSpan:2
                        }),

                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ครั้ง`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`วัน`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ครั้ง`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`วัน`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ครั้ง`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`วัน`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ครั้ง`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`วัน`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`ครั้ง`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`วัน`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                      
                    ],
                }),
                ...leaveTable.map(m=>{
                    return new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.leaveDate??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 2000,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.sickTimeCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.sickDayCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.businessTimeCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.businessDayCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.religionTimeCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.religionCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.bornTimeCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.bornDayCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.lateTimeCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                            new TableCell({
                                children: [new Paragraph({ children:[
                                    new TextRun({
                                        text:`${m.lateDayCount??''}`,
                                        ...this.fontTableBody,})],
                                        alignment: AlignmentType.CENTER, })],
                                        ...this.tableBodyStyle,
                                        width: {
                                            size: 800,
                                            type: WidthType.DXA,
                                        },
                            }),
                        ],
                    })
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`รวมทั้งสิ้น`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,
                                    columnSpan:1
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`จำนวน ${sumTime} ครั้ง   จำนวน ${sumDay} วัน`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,
                                    columnSpan:10
                        }),

                     
                      
                    ],
                }),
                
            ],
           
            width: {
                size: 9000,
                type: WidthType.DXA,
            },
            })
        ]
    }

}