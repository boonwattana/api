import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_student_send_to',
    expression: `select 
    ct."typeName" as name,
    a.sumva as value1,
    b.sumva as value2
    from classroom_type ct 
    left join (
    select count(sc.id) as sumva ,s."classroomTypeId"  from student_consultant sc 
    inner join student s on s.id = sc."studentId"
    where sc."deletedAt" isnull 
    and sc."sentType" = 3
    group by s."classroomTypeId" 
    ) as a on a."classroomTypeId"  = ct.id
    left join (
    select  count(sc.id) as sumva,s."classroomTypeId"  from student_consultant sc 
    inner join student s on s.id = sc."studentId"
    where sc."deletedAt" isnull 
    and sc."sentType" != 3
    group by s."classroomTypeId" 
    ) as b on b."classroomTypeId"  = ct.id
    order by ct."typeName"`
})
export class ReportStudentSendToByClass {
  @ViewColumn()
  name:string
  @ViewColumn()
  value1:number
  @ViewColumn()
  value2:number
}