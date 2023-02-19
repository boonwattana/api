import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_student_support',
    expression: `select 
    concat(s.firstname,' ',s.lastname) as "studentName",
    s."studentCode" ,
    s."studentNumber" ,
    s."classroomId" ,
    s."classroomTypeId" ,
    c."name" as "roomName",
    ct."typeName" as "className",
    ss."startDate" ,
    ss."endDate" ,
    ss."activityName" ,
    ss.performance ,
    ss.department ,
    ss."result" ,
    ss."teacherId",
    concat(t.firstname,' ',t.lastname) as "teacherName",
    ss."yearTermId"
    from student_has_support shs  
    inner join student_support ss on ss.id = shs."studentSupportId"  and shs."deletedAt" is null 
    inner  join student s on s.id = shs ."studentId" and s."deletedAt" is null
    inner join teacher t on t.id = ss."teacherId" 
    left join classroom c on c.id = s."classroomId" 
    left join classroom_type ct on ct.id = s."classroomTypeId"`
})
export class ReportStudentSupport {
  @ViewColumn()
  studentName:string
  @ViewColumn()
    studentCode:string
    @ViewColumn()
    studentNumber:number
    @ViewColumn()
    classroomId:number
    @ViewColumn()
    classroomTypeId
    @ViewColumn()
    roomName:string
    @ViewColumn()
    className:string
    @ViewColumn()
    startDate:Date
    @ViewColumn()
    endDate:Date
    @ViewColumn()
    activityName:string
    @ViewColumn()
    performance:number
    @ViewColumn()
    department:number
    @ViewColumn()
    result:number
    @ViewColumn()
    teacherId:number
    @ViewColumn()
    yearTermId:number
    @ViewColumn()
    teacherName:string
}
