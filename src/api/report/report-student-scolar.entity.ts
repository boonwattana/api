import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_student_scolar',
    expression: `select 
    concat(s.firstname,' ',s.lastname) as "studentName",
    s."studentNumber" ,
    ss."name" ,
    ss.amount ,
    ss."getFrom" ,
    s."classroomId" ,
    s."classroomTypeId" ,
    c."name" as "roomName",
    ct."typeName" as "typeName",
    ss."inTerm",
    ss."year" 
    from student_scolar ss 
    inner join student s on s.id = ss."studentId" 
    left join classroom c on c.id = s."classroomId" 
    left join classroom_type ct on ct.id = s."classroomTypeId"`
})
export class ReportStudentScolar {
  @ViewColumn()
  studentName:string
  @ViewColumn()
  studentNumber:number
  @ViewColumn()
  name:string
  @ViewColumn()
  amount:number
  @ViewColumn()
  getFrom:string
  @ViewColumn()
  classroomId:number
  @ViewColumn()
  classroomTypeId:number
  @ViewColumn()
  roomName:string
  @ViewColumn()
  typeName:string
  @ViewColumn()
  inTerm:string
  @ViewColumn()
  year:string
}
