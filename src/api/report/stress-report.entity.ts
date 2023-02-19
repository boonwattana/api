import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_stress',
    expression: `select
    (st."stressCh1" + st."stressCh2" + st."stressCh3" + st."stressCh4" + st."stressCh5" + st."stressCh6" + st."stressCh7" + st."stressCh8" + st."stressCh9" + st."stressCh10"
  + st."stressCh11" + st."stressCh12" + st."stressCh13" + st."stressCh14" + st."stressCh15" + st."stressCh16" + st."stressCh17" + st."stressCh18" + st."stressCh19" + st."stressCh20" 
  ) as sumva,
    st."yearTermId" ,
    s."classroomId" ,
    s."classroomTypeId",
    st."updatedAt" ,
    concat(s.firstname, ' ', s.lastname) as "studentName",
    s."studentNumber",
    c."name" as "roomName",
    ct."typeName" as "className"
  from
    stress st
  inner join student s on
    s.id = st."studentId" and s."deletedAt" is null 
  left join classroom c on c.id = s."classroomId" 
  left join classroom_type ct on ct.id = s."classroomTypeId"`
})
export class ReportStress {
  @ViewColumn()
  sumva:number
  @ViewColumn()
  yearTermId:number
  @ViewColumn()
  classroomId:number
  @ViewColumn()
  classroomTypeId:number
  @ViewColumn()
  updatedAt:Date
  @ViewColumn()
  studentName:string
  @ViewColumn()
  studentNumber:number
  @ViewColumn()
  roomName:string
  @ViewColumn()
  className:string
}
