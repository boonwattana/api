import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_student_help',
    expression: `select 
    sh."nickName",
    sh."activityName" ,
    sh."startDate" ,
    sh."endDate" ,
    sh."resultHelpType" ,
    sh."resultText" ,
    sh."yearTermId" ,
    s."classroomId" ,
    s."classroomTypeId" ,
    s."studentNumber",
    c."name"  as "roomName",
    ct."typeName" as "className"
    from student_help sh 
    inner join student s  on s.id = sh."studentId" and s."deletedAt" is null 
    left join classroom c on c.id = s."classroomId" 
    left join classroom_type ct on ct.id = s."classroomTypeId"`
})
export class ReportStudentHelp {
  @ViewColumn()
  nickName:string
  @ViewColumn()
  activityName:string
  @ViewColumn()
  startDate:Date
  @ViewColumn()
  endDate:Date
  @ViewColumn()
  resultHelpType:number
  @ViewColumn()
  resultText:string
  @ViewColumn()
  yearTermId:number
  @ViewColumn()
  classroomId:number
  @ViewColumn()
  classroomTypeId:number
  @ViewColumn()
  roomName:string
  @ViewColumn()
  className:string
  @ViewColumn()
  studentNumber:number

}