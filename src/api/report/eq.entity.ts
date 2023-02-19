import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_eq',
    expression: `select 
    (
        eq ."eqCh1" +
        eq ."eqCh2" +
        eq ."eqCh3" +
        eq ."eqCh4" +
        eq ."eqCh5" +
        eq ."eqCh6" +
        eq ."eqCh7" +
        eq ."eqCh8" +
        eq ."eqCh9" +
        eq ."eqCh10" +
        eq ."eqCh11" +
        eq ."eqCh12" +
        eq ."eqCh13" +
        eq ."eqCh14" +
        eq ."eqCh15" +
        eq ."eqCh16" +
        eq ."eqCh17" +
        eq ."eqCh18" +
        eq ."eqCh19" +
        eq ."eqCh20" +
        eq ."eqCh21" +
        eq ."eqCh22" +
        eq ."eqCh23" +
        eq ."eqCh24" +
        eq ."eqCh25" +
        eq ."eqCh26" +
        eq ."eqCh27" +
        eq ."eqCh28" +
        eq ."eqCh29" +
        eq ."eqCh30" +
        eq ."eqCh31" +
        eq ."eqCh32" +
        eq ."eqCh33" +
        eq ."eqCh34" +
        eq ."eqCh35" +
        eq ."eqCh36" +
        eq ."eqCh37" +
        eq ."eqCh38" +
        eq ."eqCh39" +
        eq ."eqCh40" +
        eq ."eqCh41" +
        eq ."eqCh42" +
        eq ."eqCh43" +
        eq ."eqCh44" +
        eq ."eqCh45" +
        eq ."eqCh46" +
        eq ."eqCh47" +
        eq ."eqCh48" +
        eq ."eqCh49" +
        eq ."eqCh50" +
        eq ."eqCh51" +
        eq ."eqCh52" 
        ) as sumva,
        eq."yearTermId",
        c."name" as "roomName",
        ct."typeName" as "className",
        s."classroomId" ,
        s."classroomTypeId",
        s."studentNumber",
        concat(s.firstname,' ',s.lastname) as "studentName" 
    from emotional_quotient eq 
    inner join student s on s.id = eq."studentId" and s."deletedAt" is null
    left join classroom c on c.id = s."classroomId" 
    left join classroom_type ct on ct.id = s."classroomTypeId"`
})
export class ReportEq {
  @ViewColumn()
  sumva:number
  @ViewColumn()
  yearTermId:number
  @ViewColumn()
  roomName:string
  @ViewColumn()
  studentNumber:number
  @ViewColumn()
  className:string
  @ViewColumn()
  classroomId:number
  @ViewColumn()
  classroomTypeId:number
  @ViewColumn()
  studentName:string
}
