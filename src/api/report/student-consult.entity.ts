import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_consult',
    expression: `select 
    sc."nickName" ,
    s."classroomId" ,
    s."classroomTypeId"  ,
    c."name" as "roomName",
    sc."createdAt" ,
     (sc."endTime"- sc."startTime") as "diffTime",
     sc."storyType" ,
     sc."resultType" ,
     sc."sentType" ,
     sc."sentText" ,
     s."studentNumber" ,
    concat(s.firstname,' ',s.lastname)as "studentName",
    sc."yearTermId"
    from  student_consultant sc 
    inner join student s on s.id =sc."studentId" and s."deletedAt" is null
    left join classroom c on c.id = s."classroomId" `
})
export class ReportStudentConsult {
  @ViewColumn()
  nickName:string
  @ViewColumn()
  classroomId:number
  @ViewColumn()
  classroomTypeId:number
  @ViewColumn()
  roomName:string
  @ViewColumn()
  createdAt:Date
  @ViewColumn()
   diffTime:{}
   @ViewColumn()
  storyType:number
  @ViewColumn()
   resultType:number
   @ViewColumn()
   sentType:number
   @ViewColumn()
   sentText:string
   @ViewColumn()
   studentNumber:number
   @ViewColumn()
  studentName:string
  @ViewColumn()
  yearTermId:number
}
