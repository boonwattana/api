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
                                    text:`???????????????????????????????????????????????????????????????`,
                                    font:'Tahoma',
                                    size:40,
                                    bold:true,

                                }),
                                new TextRun({
                                    text:`????????????????????????????????????????????????????????????????????????????????????`,
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
                                    text:`???????????????????????????`,
                                    font:'Tahoma',
                                    break:8,
                                    size:40,
                                }),
                                new TextRun({
                                    text:`????????????  ${model.personalInfo.firstName}  ${model.personalInfo.lastName} `,
                                    font:'Tahoma',
                                    break:1,
                                    size:30,
                                }),
                                new TextRun({
                                    text:`????????????????????? ${model.personalInfo.position??''}`,
                                    font:'Tahoma',
                                    break:1,
                                    size:30,
                                }),
                                new TextRun({
                                    text:`????????????????????????????????????????????????`,
                                    font:'Tahoma',
                                    break:5,
                                    size:34,
                                    bold:true
                                }),
                                new TextRun({
                                    text:`???????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????? 31`,
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
                        text:`?????????????????????????????????????????????????????????????????????????????????????????????   `,
                        ...this.fontHeaderNoneBreak
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`????????????????????????????????????????????? 2562 ???????????????????????????????????????????????? (?????????.31) `,
                        ...this.fontHeaderNoneBreak
                        ,
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`????????? ???????????????????????????????????? ??????????????????  ????????????????????? ????????????????????????`,
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
                                        text:`????????????????????????`,
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
                                        text:`????????????????????????????????????`,
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
                                        text:`??????????????????`,
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
                                        text:`?????????????????????????????????????????????`,
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
                        text:`?????????????????????`,
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
                        text:`??????????????????????????????????????????????????????????????????????????????????????????`,
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
                        text:`??????????????????					        ???????????????????????????`,
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
                        text:`?????????????????????               `,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text:`??????????????????					        ?????????????????????????????????????????????`,
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
                        text:` ????????????????????????????????????????????????  `,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`??????????????????					        ?????????????????????????????????????????????`,
                        ...this.fontHeaderNoneBreak,
                        break:5
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(???????????????????????? ?????????????????????????????????)`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`???????????????????????????????????????????????????????????????????????????`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),

            new Paragraph({
                children: [
                    new TextRun({
                        text:`??????????????????					        ?????????????????????????????????????????????`,
                        ...this.fontHeaderNoneBreak,
                        break:5
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`(??????????????????????????? ???????????????????????????)`,
                        ...this.fontHeaderNoneBreak,
    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`?????????????????????????????????????????????????????????????????????????????????`,
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
                        text:`?????????????????? 2`,
                        ...this.fontHeader
                        ,
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`????????????????????????????????????????????????????????????????????????????????????????????????`,
                        ...this.fontHeader,    
                    }),
                ],
                alignment:AlignmentType.CENTER
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`????????????????????????`,
                        ...this.fontHeader,
                        break:1
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`    1. ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????? 1-3`,
                        ...this.fontBody,

    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`    2. ?????????????????????????????? 1-3  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/????????????????????? ??????????????????????????????????????????????????? ???  ????????????????????????????????????????????????????????? `,
                        ...this.fontBody,

                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`    3. ??????????????????????????????????????????`,
                        ...this.fontBody,
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      5     ?????????????????????    ??????????????????????????????????????????????????????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      4     ?????????????????????    ?????????????????????????????????????????????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      3     ?????????????????????    ?????????????????????????????????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      2     ?????????????????????    ????????????????????????????????????????????????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1     ?????????????????????    ?????????????????????????????????????????????????????????????????????????????????????????????????????????`,
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
                        text:`?????????????????????????????? 2 ?????????????????????????????????????????????????????????????????????????????????`,
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
                                        text:`???????????????????????????`,
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
                                        text:`????????????????????????????????????????????????????????????/?????????????????????`,
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
                                        text:`????????????????????????`,
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
                                        text:`?????????????????????????????????????????????????????????????????????????????? 3`,
                                        ...this.fontTableHeader,}),
                                        new TextRun({
                                            text:`(?????????????????????????????????????????????/5)`,
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
                                        text:`?????????????????????????????????`,
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
            //             text:`?????????????????????????????????????????????????????????`,
            //             ...this.fontHeader
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            // new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`  -  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? `,
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
                        text:`?????????????????????????????? 2 ?????????????????????????????????????????????????????????????????????????????????`,
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
                                        text:`???????????????????????????`,
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
                                        text:`????????????????????????????????????????????????????????????/?????????????????????`,
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
                                        text:`????????????????????????`,
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
                                        text:`?????????????????????????????????????????????????????????????????????????????? 2`,
                                        ...this.fontTableHeader,}),
                                        new TextRun({
                                            text:`(?????????????????????????????????????????????/6)`,
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
                                        text:`?????????????????????????????????`,
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
            //             text:`?????????????????????????????????????????????????????????`,
            //             ...this.fontHeader
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            // new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`  -  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? `,
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
                        text:`?????????????????????????????? 1  ???????????????????????????????????????????????????`,
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
                                        text:`???????????????????????????`,
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
                                        text:`????????????????????????????????????????????????????????????/?????????????????????`,
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
                                        text:`1.1 ?????????????????????????????????????????????????????????????????????????????????????????????`,
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
                                        text:`1.2 ???????????????????????????????????????????????????????????????????????????????????????????????????`,
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
                                        text:`????????????????????????`,
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
                                        text:`?????????????????????????????????????????????????????????????????????????????? 1`,
                                        ...this.fontTableHeader,}),
                                        new TextRun({
                                            text:`(?????????????????????????????????????????????/10)`,
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
                                        text:`?????????????????????????????????`,
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
            //             text:`?????????????????????????????????????????????????????????`,
            //             ...this.fontHeader
    
            //         }),
            //     ],
            //     alignment:AlignmentType.LEFT
            // }),
            // new Paragraph({
            //     children: [
            //         new TextRun({
            //             text:`  -  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? `,
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
        let label = '???????????????????????????'
        if(count<5){
            label = '??????????????????'
        }
        if(count<4){
            label = '??????'
        }
        if(count<3){
            label = '?????????????????????'
        }
        if(count<2){
            label = '??????????????????????????????'
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
                return ` 3.1 ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????? ???????????????????????? ?????????????????????????????????????????????????????????????????????`
                case 'choice2':
                    return ` 3.2 ????????????????????? ??????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                    case 'choice3':
                        return ` 3.3 ???????????????????????????????????????????????????????????????????????????????????????????????????`
                        case 'choice4':
                            return ` 3.4 ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????? ?????????????????????????????????????????????`
                            case 'choice5':
                                return ` 3.5 ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????`




        }
    }
    sumValueStandard2Label(model: Stand2Dto,v:number) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5','choice6']
        let count = 0
        choiceArr.forEach(el=>{
            count += +model[el]

        })
        count = count/v
        let label = '???????????????????????????'
        if(count<5){
            label = '??????????????????'
        }
        if(count<4){
            label = '??????'
        }
        if(count<3){
            label = '?????????????????????'
        }
        if(count<2){
            label = '??????????????????????????????'
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
                return ` 2.1 ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                case 'choice2':
                    return ` 2.2 ????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                    case 'choice3':
                        return ` 2.3 ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????`
                        case 'choice4':
                            return ` 2.4 ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                            case 'choice5':
                                return ` 2.5 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                case 'choice6':
                                    return ` 2.6 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`


        }
    }
    sumValueStandard1Label(model: Stand1Dto,v:number) {
        const choiceArr = ['choice1','choice2','choice3','choice4','choice5','choice6','choice7','choice8','choice9','choice10']
        let count = 0
        choiceArr.forEach(el=>{
            count += +model[el]

        })
        count = count/v
        let label = '???????????????????????????'
        if(count<5){
            label = '??????????????????'
        }
        if(count<4){
            label = '??????'
        }
        if(count<3){
            label = '?????????????????????'
        }
        if(count<2){
            label = '??????????????????????????????'
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
                return ` 1) ??????????????????????????????????????????????????????????????? ???????????????????????? ????????????????????????????????????????????????????????????????????????`
                case 'choice2':
                    return ` 2) ??????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????`
                    case 'choice3':
                        return ` 3) ??????????????????????????????????????????????????????????????????????????????????????????`
                        case 'choice4':
                            return ` 4) ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                            case 'choice5':
                                return ` 5) ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                case 'choice6':
                                    return ` 6) ??????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????`
                                    case 'choice7':
                                        return ` 1) ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                        case 'choice8':
                                            return ` 2) ??????????????????????????????????????????????????????????????????????????????????????????????????????`
                                            case 'choice9':
                                                return ` 3) ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                case 'choice10':
                                                    return ` 4) ??????????????????????????????????????????????????? ?????????????????????????????????`

        }
    }
    getLernPlan1_7(model: AuditStudentDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.7 ????????????????????????????????????????????????????????????`,
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
                        text:`??????????????????????????????????????????????????????????????????????????????????????????????????????`,
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
                                        text:`????????????`,
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
                                        text:`????????????`,
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
                                        text:`??????????????????????????????????????? (??????)`,
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
                                        text:`????????????????????????????????????(??????)`,
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
                                        text:`????????????????????????`,
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
                                        text:`??????`,
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
                                        text:`????????????`,
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
                                        text:`?????????????????????`,
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
                                        text:`????????????????????????????????? 1`,
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
                                        text:`?????????`,
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
                                        text:`??????????????????`,
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
                                        text:`????????????????????????????????? 2`,
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
                                        text:`?????????`,
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
                                        text:`??????????????????`,
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
                        text:`?????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????`,
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
                                        text:`????????????`,
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
                                        text:`????????????`,
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
                                        text:`??????????????????????????????????????? (??????)`,
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
                                        text:`????????????????????????????????????(??????)`,
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
                                        text:`????????????????????????`,
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
                                        text:`??????`,
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
                                        text:`????????????`,
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
                                        text:`?????????????????????`,
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
                                        text:`????????????????????????????????? 1`,
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
                                        text:`?????????`,
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
                                        text:`??????????????????`,
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
                                        text:`????????????????????????????????? 2`,
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
                                        text:`?????????`,
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
                                        text:`??????????????????`,
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
                        text:`1.6  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`,
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
                        text:`      (???????????????????????????????????????????????? / ????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????)`,
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
                                        text:`?????????????????????????????????`,
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
                                        text:`?????????????????????????????????`,
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
                                        text:`?????????????????????????????????????????????`,
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
                        text:`???????????? :`,
                        ...this.fontBodyBold
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
             new Paragraph({
                children: [
                    new TextRun({
                        text:`	????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????${model.result}????????????..`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`??????????????????????????????????????????`,
                        ...this.fontBodyBold
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  4     ?????????????????????    ???????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  3     ?????????????????????    ??????????????????????????????????????????????????????????????????????????? ?????????????????????????????????`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  2     ?????????????????????    ?????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`	  1     ?????????????????????    ????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????`,
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
                return `1. ??????????????????????????????????????????????????????/???????????????????????????????????????,
2. ?????????????????????????????????????????????????????????????????????/??????????????????????????????????????? ?????????????????????????????? 3 ????????????????????? ????????????????????? ?????????????????? ??????????????? (KPA),
3. ??????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????,
4. ??????????????????????????????????????????????????????????????????????????????????????????????????????,
5. ?????????????????????????????????????????????????????????????????????`
                case 'choice2':
                    return `1. ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????,
2. ???????????????????????????????????????????????????????????????????????????????????????,
??????????????????????????????????????? 4 ???????????? (?????????????????????????????? ?????????????????????????????? ????????????????????????????????????????????????????????? ??????????????????????????????????????? ????????????????????? / ?????????????????????????????????),
3. ???????????????????????????????????????????????????????????????????????????????????????????????????????????????,
4. ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????? 3 ???????????? (????????????????????? ?????????????????? ???????????????),
5. ????????????????????????????????????????????????????????????`
                    case 'choice3':
                        return `1. ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,
2. ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,
3. ?????????????????????????????????????????????????????????????????????????????????????????? ??????????????????,
4. ?????????????????????????????????,
5. ???????????????????????????????????????????????? ?????????????????????????????????????????????`
                        case 'choice4':
                            return `1. ????????????????????????????????????????????????????????????????????????????????????????????????,
2. ??????????????????????????????????????????????????????????????????????????????????????????????????????,
3. ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,
4. ?????????????????????????????????,
5. ????????????????????????????????????????????????????????????????????????????????????????????????`
                            case 'choice5':
                                return `1. ???????????????????????????????????? ????????????????????????????????????????????????????????????????????????,
2. ????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????,
3. ???????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????,
4. ?????????????????? ????????????????????? ???????????????????????????????????????,
5. ?????????????????????????????????????????? ????????????????????? ???????????????????????????????????????`
        }
    }
    getChoichLabelSelftAss( m: string) {
        switch(m){
            case 'choice1':
                return `1. ???????????????????????????????????? ????????????????????????????????? ???????????????????????????/??????????????????????????????????????? (??????????????? 4 ?????? 5 ????????? ??????????????? 3 ?????? 4 ????????? ??????????????? 2 ?????? 3 ????????? ??????????????? 1 ?????? 1-2 ?????????)`
                case 'choice2':
                    return `2. ???????????????????????????????????????????????? ????????????????????????????????? (??????????????? 4 ?????? 5 ????????? ??????????????? 3 ?????? 4 ????????? ??????????????? 2 ?????? 3 ????????? ??????????????? 1 ?????? 1-2 ?????????)`
                    case 'choice3':
                        return `3. ???????????????????????????????????????????????????????????? (??????????????? 4 ?????? 5 ????????? ??????????????? 3 ?????? 4 ????????? ??????????????? 2 ?????? 3 ????????? ??????????????? 1 ?????? 1-2 ?????????)`
                        case 'choice4':
                            return `4. ?????????????????????????????????????????????????????? (??????????????? 4 ?????? 5 ????????? ??????????????? 3 ?????? 4 ????????? ??????????????? 2 ?????? 3 ????????? ??????????????? 1 ?????? 1-2 ?????????)`
                            case 'choice5':
                                return `5. ??????????????????????????????????????????????????? ????????????????????????????????? (??????????????? 4 ?????? 5 ????????? ??????????????? 3 ?????? 4 ????????? ??????????????? 2 ?????? 3 ????????? ??????????????? 1 ?????? 1-2 ?????????)`
        }
    }
    getLernPlan1_5(model: AuditWorkTeacherDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.5  ????????????????????????????????????????????????????????????????????????????????????????????????????????? `,
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
                        text:`(?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????)`,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:`???????????????  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`,
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
                                        text:`?????????????????????`,
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
                                        text:`?????????????????????????????????????????????`,
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
                                        text:`???????????????????????????`,
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
                                        text:`?????????`,
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
                                        text:`?????????????????????`,
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
                                        text:`????????????`,
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
                                        text:`??????????????????????????????`,
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
                        text:`?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????? `,
                        ...this.fontBody
    
                    }),
                ],
                alignment:AlignmentType.LEFT
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:` ${this.getLabelCheck(model.result,5)} ???????????????????????????   ${this.getLabelCheck(model.result,4)} ?????????  ${this.getLabelCheck(model.result,3)} ?????????????????????  ${this.getLabelCheck(model.result,2)} ????????????  ${this.getLabelCheck(model.result,1)} ??????????????????????????????`,
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
                return `1.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                case 'choice2':
                    return `2.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                    case 'choice3':
                        return `3.????????????????????????????????????????????????????????????????????????`
                        case 'choice4':
                            return `4.?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                            case 'choice5':
                                return `5.??????????????????????????????????????????????????????????????????????????????????????? ???`
                                case 'choice6':
                                    return `6.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/?????????????????????????????????`
                                    case 'choice7':
                                        return `7.???????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????? ????????? ?????????????????????????????????`
                                        case 'choice8':
                                            return `8.??????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????  ???????????????????????????????????????`
                                            case 'choice9':
                                                return `9.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                case 'choice10':
                                                    return `10.????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???`
                                                    case 'choice11':
                                                        return `11.?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                        case 'choice12':
                                                            return `12.??????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                            case 'choice13':
                                                                return `13.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                                case 'choice14':
                                                                    return `14.?????????????????????????????????????????????????????????????????????????????????  12  ??????????????????????????????????????????????????????`
                                                                    case 'choice15':
                                                                        return `15.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                                        case 'choice16':
                                                                            return `16.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                                            case 'choice17':
                                                                                return `17.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`
                                                                                case 'choice18':
                                                                                    return `18.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? `
                                                                                    case 'choice19':
                                                                                        return `19.??????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????? `
                                                                                        case 'choice20':
                                                                                            return `20.?????????????????????????????????????????????????????????????????????????????????????????????????????????`
        }
    }
    getLernPlan1_4(model: WorkResultDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`1.4  ?????????????????????????????????????????????`,
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
                        text:`      1.4.2  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (???????????????????????????????????????????????????????????????)`,
                        ...this.fontBody,
                        break:2

    
                    }),
                    new TextRun({
                        text:`        1)  ?????????????????????????????????`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           1.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group1Text1}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group1Text2}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           3.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group1Text3}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           4.????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group1Text4}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`        ?????????????????????????????? `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`????????????????????????????????????????????????????????????????????????   ${this.getLabelCheck(model.actionSpecial.group1Result,3)} ??????   ${this.getLabelCheck(model.actionSpecial.group1Result,2)} ???????????????  ${this.getLabelCheck(model.actionSpecial.group1Result,1)} ????????????????????????`,
                        ...this.fontBody,
    
                    }),

                    new TextRun({
                        text:`        2) ??????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`           1.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group2Text1}...??????????????? ${model.actionSpecial.group2Text2} ???????????????...`,
                        ...this.fontBody,
                        break:1
    
                    }),

                    new TextRun({
                        text:`           2.??????????????????????????????????????????????????????????????????????????????????????????????????? (???????????????)......${model.actionSpecial.group2Text3} ???????????????......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           3.?????????????????????????????????????????????????????????????????????????????????????????? (???????????????)......${model.actionSpecial.group2Text4} ???????????????......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           4.???????????? ???......${model.actionSpecial.group2Text5}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`        ?????????????????????????????? `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`????????????????????????????????????????????????????????????????????????   ${this.getLabelCheck(model.actionSpecial.group2Result,3)} ??????   ${this.getLabelCheck(model.actionSpecial.group2Result,2)} ???????????????  ${this.getLabelCheck(model.actionSpecial.group2Result,1)} ????????????????????????`,
                        ...this.fontBody,
    
                    }),
                    new TextRun({
                        text:`        3)  ?????????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`           1.?????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group3Text1}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.??????????????? ......${model.actionSpecial.group3Text2}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                  
                    new TextRun({
                        text:`        ?????????????????????????????? `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`????????????????????????????????????????????????????????????????????????   ${this.getLabelCheck(model.actionSpecial.group3Result,3)} ??????   ${this.getLabelCheck(model.actionSpecial.group3Result,2)} ???????????????  ${this.getLabelCheck(model.actionSpecial.group3Result,1)} ????????????????????????`,
                        ...this.fontBody,
    
                    }),
                    new TextRun({
                        text:`        4)  ??????????????????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`           1. ??????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group4Text1}...??????????????? ${model.actionSpecial.group4Text2} ???????????????...`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.???????????????......${model.actionSpecial.group4Text3}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           3.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group1Text3}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           4.????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????......${model.actionSpecial.group1Text4}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`        ?????????????????????????????? `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`????????????????????????????????????????????????????????????????????????   ${this.getLabelCheck(model.actionSpecial.group4Result,3)} ??????   ${this.getLabelCheck(model.actionSpecial.group4Result,2)} ???????????????  ${this.getLabelCheck(model.actionSpecial.group4Result,1)} ????????????????????????`,
                        ...this.fontBody,
    
                    }),
                    new TextRun({
                        text:`        5)  ??????????????????????????????????????????????????????????????????`,
                        ...this.fontBody,
                        break:2
    
                    }),
                    new TextRun({
                        text:`          1.?????????????????????????????????????????????????????????????????????......${model.actionSpecial.group5Text1}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                    new TextRun({
                        text:`           2.???????????? ???......${model.actionSpecial.group5Text2}......`,
                        ...this.fontBody,
                        break:1
    
                    }),
                  
                    new TextRun({
                        text:`        ?????????????????????????????? `,
                        ...this.fontBodyBold,
    
                    }),
                    new TextRun({
                        text:`????????????????????????????????????????????????????????????????????????   ${this.getLabelCheck(model.actionSpecial.group5Result,3)} ??????   ${this.getLabelCheck(model.actionSpecial.group5Result,2)} ???????????????  ${this.getLabelCheck(model.actionSpecial.group5Result,1)} ????????????????????????`,
                        ...this.fontBody,
    
                    }),

                ],
                alignment:AlignmentType.LEFT
            }),
        ]
    }
    getLabelCheck(group1Result: number, arg1: number) {
        if(group1Result == arg1){
            return '[???]'
        }
        return '[  ]'
    }
    getLernPlan1_4_1(model: WorkResultDto) {
        const netStd = (model.activityTeach2?.reduce((sum,val)=>sum+val.totalStudent,0)+model.activityTeach1?.reduce((sum,val)=>sum+val.totalStudent,0))/100
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.4.1 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  ??????????????????????????????????????? `,
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
                                        text:`?????????`,
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
                                        text:`?????????????????????`,
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
                                        text:`????????????`,
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
                                        text:`???????????????????????????????????????`,
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
                                        text:`?????????????????????????????? (??????)`,
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
                                        text:`???`,
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
                                        text:`??????.`,
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
                                        text:`?????????`,
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
                                        text:`????????????????????????????????? 1`,
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
                                        text:`?????????`,
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
                                        text:`????????????????????????????????? 2`,
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
                                        text:`?????????`,
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
                                        text:`????????? (1)+(2)`,
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
                                        text:`??????????????????`,
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
                                        text:`???????????????????????????????????????????????????????????????????????????????????????????????????????????? 3 ??????????????????`,
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
                                        text:`???????????????????????????????????????????????????????????????????????????????????????????????????????????? 2 ??????????????????`,
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
                        text:`1.3  ?????????????????????????????????????????????????????????????????????????????????`,
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
                        text:`      1.3.11  ????????????????????????????????????????????????????????????????????????/????????????????????????????????????????????????????????????????????????????????????????????????????????????`,
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
                                        text:`?????????`,
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
                                        text:`????????? /??????????????? / ??????`,
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
                                        text:`?????????????????? / ??????????????????`,
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
                                        text:`?????????????????????????????????????????????`,
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
                        text:`      ???????????? ???????????????????????????????????????  ??????????????? ${model.seminarTable.length} ??????????????? `,
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
                        text:`      1.3.10 ?????????????????????????????????????????????/ ???????????????????????????????????????????????? / ????????????????????????????????? / ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? / ????????? / ????????????????????????`,
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
                                        text:`?????????`,
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
                                        text:`????????? /??????????????? / ??????`,
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
                                        text:`??????????????????/??????????????????????????????`,
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
                                        text:`??????????????????????????????????????????`,
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
                                        text:`?????????????????????`,
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
                        text:`      ???????????? ???????????????????????????????????????  ??????????????? ${model.seminarTable.length} ??????????????? `,
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
                        text:`      1.3.9  ???????????????????????????????????????  (???????????????????????????????????????????????????????????????????????????????????? /  ????????????????????????????????????????????? /????????????????????????????????????  /?????????????????????????????? ?????????)`,
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
                                        text:`?????????`,
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
                                        text:`????????? /??????????????? / ??????`,
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
                                        text:`??????????????????`,
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
                                        text:`?????????????????????`,
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
                                        text:`??????????????????????????????????????????`,
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
                                        text:`?????????????????????`,
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
                        text:`      ???????????? ???????????????????????????????????????  ??????????????? ${model.seminarTable.length} ??????????????? `,
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
                        text:`      1.3.8 ????????????????????????????????????????????????????????????????????????????????????????????????????????????  ???  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  (??????????????????????????????????????? 1)`,
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
                                        text:`?????????`,
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
                                        text:`???????????????????????????????????????`,
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
                                        text:`???????????????????????????`,
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
                                        text:`?????????`,
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
                                        text:`?????????????????????`,
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
                                        text:`????????????`,
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
                                        text:`??????????????????????????????
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
            return '???'
        }
        return ''
    }
    getAboutLabel(v: string) {
        switch(v){
            case 'choice1':
                return '??????????????????????????????/???????????????????????????????????????????????????????????????'
                case 'choice2':
                    return '??????????????????????????????????????????'
                    case 'choice3':
                        return '??????????????????????????????????????????????????????????????????'
                        case 'choice4':
                            return '?????????????????????????????????????????????????????????????????????'
                            case 'choice5':
                                return '???????????????????????????????????????????????????/????????????????????????'
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
                        text:`      1.3.7  ??????????????????/ ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????? ??????????????????????????? (??????????????????????????????????????? 1 ?????????) `,
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
                        text:`      ????????????    ??????????????? ${this.sumActivity(choiceArr,model.lernActivityTable)} ?????????????????? / ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? `,
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
            return '[???]'
        }
        return '[  ]'
    }
    getActivityLabel(v: string) {
        switch (v){
            case 'teachingFormat1':
                return `???????????????????????????`
                case 'teachingFormat2':
                    return `?????????????????????????????????????????????`
                    case 'teachingFormat3':
                        return `???????????????????????? / ???????????????`
                        case 'teachingFormat4':
                            return `??????????????????????????????????????????????????????`
                            case 'teachingFormat5':
                                return `?????????????????????????????????????????????`
                                case 'teachingFormat6':
                                    return `???????????????????????????????????????`
                                    case 'teachingFormat7':
                                        return `??????????????????????????????????????????`
                                        case 'teachingFormat8':
                                            return `???????????????????????????????????????????????????????????????`
                                            case 'teachingFormat9':
                                                return `????????????????????????????????????`
                                                case 'teachingFormat10':
                                                    return `???????????????????????????????????????`
                                                    case 'teachingFormat11':
                                                        return `?????????????????????????????????`
                                                        case 'teachingFormat12':
                                                            return `????????????????????? 4`
                                                            case 'teachingFormat13':
                                                                return `???????????????????????????????????????????????????`
                                                                case 'teachingFormat14':
                                                                    return `????????????????????????????????????????????????????????????????????????`
                                                                    case 'teachingFormat15':
                                                                        return `????????????????????????????????????????????????`
                                                                        case 'teachingFormat16':
                                                                            return `?????????????????????????????????????????????????????????????????????`
                                                                            case 'teachingFormat17':
                                                                                return `???????????????????????????????????????`
                                                                                case 'teachingFormat18':
                                                                                    return `??????????????????????????????????????????????????????????????????`
                                                                                    case 'teachingFormat19':
                                                                                        return `???????????????????????????`
                                                                                        case 'teachingFormat20':
                                                                                            return `????????????????????????????????????????????????????????????`
                                                                                            case 'teachingFormat21':
                                                                                                return `??????????????????????????????????????????????????????`
                                                                                                case 'teachingFormat22':
                                                                                                    return `?????????????????????????????????????????????????????????????????????`
                                                                                                    case 'teachingFormat23':
                                                                                                        return `?????????????????????	`
                                                                                                        case 'teachingFormat24':
                                                                                                            return `?????????????????????????????????????????????????????????`
                                                                                                            case 'teachingFormat25':
                                                                                                                return `???????????????????????????`
                                                                                                                case 'teachingFormat26':
                                                                                                                    return `?????????????????????????????????`
        }
    }
    getLernPlan1_3_6(model: LernPlanInfoDto) {
        return [
            new Paragraph({
                children: [
                    new TextRun({
                        text:`      1.3.6  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????     ??????????????????`,
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
                                        text:`?????????`,
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
                                        text:`????????? /??????????????? / ??????`,
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
                                        text:`?????????????????????????????????`,
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
                                        text:`?????????????????? / ??????????????????`,
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
                        text:`      1.3.5 ???????????????/?????????????????????????????? ??????????????????????????????????????????????????????????????????/???????????????????????????????????????????????????????????????????????????????????????????????????????????????  ??????????????????`,
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
                                        text:`?????????`,
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
                                        text:`???????????????????????????????????????????????????`,
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
                                        text:`??????????????????`,
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
                                        text:`??????????????????????????????`,
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
                        text:`      1.3.4  ??????????????????????????????????????????????????????????????? ?????????????????????????????????    ??????????????????`,
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
                                        text:`?????????`,
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
                                        text:`??????????????????`,
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
                                        text:`???????????????????????????`,
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
                        text:`      1.3.3  ???????????????????????????????????????????????????????????????????????????????????????????????? (???????????????????????????????????????, ?????????????????????????????????????????????) ??????????????????`,
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
                                        text:`????????????????????????/???????????????????????????????????????`,
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
                                        text:`??????????????????`,
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
                                        text:`????????????????????????????????????`,
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
                        text:`      1.3.2  ???????????????????????? / ????????????????????????  ????????????     ??????????????????`,
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
                                        text:`?????????`,
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
                                        text:`????????????????????????/????????????????????????`,
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
                                        text:`???????????????(????????????)`,
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
                        text:`      1.3.1  ???????????????????????????????????????????????????????????????????????????     ??????????????????`,
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
                                        text:`?????????`,
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
                                        text:`????????????????????????`,
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
                                        text:`?????????????????????????????????????????????/?????????????????????`,
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
                                        text:`???????????????????????????`,
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
                                        text:`???????????????/?????????`,
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
                        text:`1.2 ?????????????????????????????????????????????????????????????????????`,
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
                     text:`      1.2.4 ???????????????????????? ??????????????????????????????  `,
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
                                     text:`??????????????????????????????????????????????????????`,
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
                                     text:`??????????????????`,
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
                     text:`      1.2.3 ??????????????????????????????????????????????????????????????????????????????`,
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
                                     text:`???????????? / ????????????`,
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
                                     text:`?????????(??????)`,
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
                                     text:`???????????? (??????)`,
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
                                    text:`????????????????????????????????? (??????)`,
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
                     text:`      1.2.2   ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ${model.year}`,
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
                                     text:`?????????`,
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
                                     text:`???????????????????????????????????????????????????????????? ????????????????????????`,
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
                                     text:`???????????? /????????????`,
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
                                    text:`???????????????????????????????????????`,
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
                                     text:`????????????`,
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
                                     text:`?????????????????????`,
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
                                         text:`${m.pass?'???':''}`,
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
                                         text:`${m.notpass?'???':''}`,
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
                    text:`      1.2.1  ????????????????????????????????????????????????????????????????????????????????? ${model.year}`,
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
                                    text:`?????????`,
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
                                    text:`????????????????????????`,
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
                                    text:`????????????????????????`,
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
                                    text:`????????????`,
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
                                    text:`???????????????????????????`,
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
                                    text:`???????????????????????????????????? / ?????????????????????`,
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
                                    text:`????????????????????????????????? 1`,
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
                                    text:`?????????????????????????????????`,
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
                                    text:`????????????????????????????????? 2`,
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
                                    text:`?????????????????????????????????`,
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
                    text:`????????????`,
                    ...this.fontHeader

                }),
                new TextRun({
                    text:`      ??????????????????????????????????????????????????????????????? (Self Assessment Report : SAR) 
                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????? 2542
                    ????????????????????????????????????????????? ?????????????????????????????? 2545 ??????????????????????????????????????????????????????????????????????????????????????????????????? 
                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 
                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/???????????????????????? ??????????????????????????????????????????????????? ??? 
                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 
                    ???????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 31
                            ??????????????????????????? 
                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    ??????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????? ???????????????????????? 
                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 
                            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (SAR) ?????????????????????????????? 
                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 
                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??? ???????????????????????????`,
                    break:2,
                    ...this.fontBody
                }),

            ],
            alignment:AlignmentType.CENTER
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:`?????????????????? ?????????????????????????????????..`,
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
                    text:`??????????????????????????????????????????????????????????????? (SAR)`,
                    ...this.fontHeader

                }),
            ],
            alignment:AlignmentType.CENTER
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:`?????????????????? 1 : ???????????????????????????????????????`,
                    break:1,
                    ...this.fontHeader
                }),

                new TextRun({
                    text:`1.1 ????????????????????????????????????`,
                    break:1,
                    ...this.fontHeader
                }),
              
            ],
            alignment:AlignmentType.LEFT
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:`      ???????????? `,
                    ...this.fontBodyBoldNoneBreak
                }),
                new TextRun({
                    text:`???????????????`,
                    ...this.fontBody
                }),
                
                new TextRun({
                    text:`      ???????????? `,
                    ...this.fontBodyBoldNoneBreak
                }),
                new TextRun({
                    text:`??????????????????????????????`,
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
                    text:`      ????????????????????????????????????  `,
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
                    text:`      ?????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:model.position??'',
                    ...this.fontBody
                }),
                
                new TextRun({
                    text:`      ????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:model.academic??'',
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ???????????????????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.actionYear??''}  ??????`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ???????????????????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.positionNumber??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ???????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.salary??''} ?????????`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ????????????????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.academicSalary??''} ?????????`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ????????? / ??????????????? / ?????? ????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.birthDate??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ????????? / ??????????????? / ?????? ??????????????????????????????????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.startWorkDate??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ???????????????????????????????????????????????????????????????????????????????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`${model.subject??''}`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`      ?????????????????????????????????????????????  `,
                    ...this.fontBodyBold
                }),
                ...model.workSpecial.map(m=>{
                    return  new TextRun({
                        text:`    - ${m??''}`,
                        ...this.fontBody
                    })
                }),
                new TextRun({
                    text:`??????????????????????????? / ????????????????????????  `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`????????????????????????????????????????????????`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`??????????????? / ????????? `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`???????????????`,
                    ...this.fontBody
                }),
                new TextRun({
                    text:`?????????????????????????????????????????????????????????????????????????????? `,
                    ...this.fontBodyBold
                }),
                new TextRun({
                    text:`?????????????????????????????? ????????? 31 `,
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
                        text:`?????????????????????????????????????????? ?????????????????????????????????????????????  ${leave}  `,
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
                                    text:`????????? ??????????????? ?????? ???????????????`,
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
                                    text:`??????????????????`,
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
                                    text:`???????????????`,
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
                                    text:`???????????????????????????`,
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
                                    text:`??????????????????`,
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
                                    text:`???????????????`,
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
                                    text:`???????????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`?????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`???????????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`?????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`???????????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`?????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`???????????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`?????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`???????????????`,
                                    ...this.fontTableHeader,})],
                                    alignment: AlignmentType.CENTER,
                                 })],
                                
                            ...this.tableHeaderStyle,
                        }),
                        new TableCell({
                            children: [new Paragraph({ 
                                children:[
                                new TextRun({
                                    text:`?????????`,
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
                                    text:`?????????????????????????????????`,
                                    ...this.fontTableBody,})],
                                    alignment: AlignmentType.CENTER, })],
                                    ...this.tableBodyStyle,
                                    columnSpan:1
                        }),
                        new TableCell({
                            children: [new Paragraph({ children:[
                                new TextRun({
                                    text:`??????????????? ${sumTime} ???????????????   ??????????????? ${sumDay} ?????????`,
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