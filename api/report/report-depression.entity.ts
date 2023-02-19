import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_depression_sumarize',
    expression: `select a.sumva as name,
    b.sumva as value1,
    c.sumva as value2,
    d.sumva as value3
    from (
    select  count(drp.id) as sumva  from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) < 7
    ) as a
    left join (
    select  count(drp.id) as sumva  from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId"  and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 7
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) <13
    ) as b on 1=1
    left join (
    select  count(drp.id) as sumva  from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 13
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) <19
    ) as c on 1=1
    left join (
    select  count(drp.id) as sumva  from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 7
    ) as d on 1=1`
})
export class ReportDepressionSumarize {
  @ViewColumn()
  name:string
  @ViewColumn()
  value1:number
  @ViewColumn()
  value2:number
  @ViewColumn()
  value3:number
}
@ViewEntity({
    name:'rp_depression_by_class',
    expression: `select 
    ct."typeName" as name,
    a.sumva as value1,
    b.sumva as value2,
    c.sumva as value3,
    d.sumva as value4
    from classroom_type ct 
    left join (
    select  count(drp.id) as sumva ,s."classroomTypeId"  from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) < 7
    group by s."classroomTypeId" 
    ) as a on a."classroomTypeId" = ct.id
    left join (
    select  count(drp.id) as sumva,s."classroomTypeId"   from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId"  and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 7
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) <13
    group by s."classroomTypeId" 
    ) as b on b."classroomTypeId" = ct.id
    left join (
    select  count(drp.id) as sumva,s."classroomTypeId"   from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 13
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) <19
    group by s."classroomTypeId" 
    ) as c on c."classroomTypeId" = ct.id
    left join (
    select  count(drp.id) as sumva ,s."classroomTypeId"  from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 7
    group by s."classroomTypeId" 
    ) as d on d."classroomTypeId" = ct.id
    order by ct."typeName"`
})
export class ReportDepressionByClass {
  @ViewColumn()
  name:string
  @ViewColumn()
  value1:number
  @ViewColumn()
  value2:number
  @ViewColumn()
  value3:number
  @ViewColumn()
  value4:number
}
@ViewEntity({
    name:'rp_depression_by_class_and_room',
    expression: `select 
    ct."typeName" as name,
    cr."name" as value1,
    a.sumva as value2,
    b.sumva as value3,
    c.sumva as value4,
    d.sumva as value5
    from classroom_type ct 
    left join classroom cr on 1=1
    left join (
    select  count(drp.id) as sumva ,s."classroomTypeId" ,s."classroomId"   from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) < 7
    group by s."classroomTypeId" ,s."classroomId" 
    ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id 
    left join (
    select  count(drp.id) as sumva,s."classroomTypeId",s."classroomId"    from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId"  and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 7
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) <13
    group by s."classroomTypeId" ,s."classroomId" 
    ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id 
    left join (
    select  count(drp.id) as sumva,s."classroomTypeId" ,s."classroomId"   from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 13
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) <19
    group by s."classroomTypeId" ,s."classroomId" 
    ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id 
    left join (
    select  count(drp.id) as sumva ,s."classroomTypeId",s."classroomId"   from  depression drp
    inner join student s on s.id = drp.id 
    inner join year_term yt on yt.id = drp."yearTermId" and yt."isParent" 
    where drp."deletedAt" isnull 
    and (
    drp."depressionCh3" +
    drp."depressionCh4" +
    drp."depressionCh5" +
    drp."depressionCh6" +
    drp."depressionCh7" +
    drp."depressionCh8" +
    drp."depressionCh9" +
    drp."depressionCh10" +
    drp."depressionCh11" 
    ) >= 7
    group by s."classroomTypeId" ,s."classroomId" 
    ) as d on d."classroomTypeId" = ct.id and d."classroomId" = cr.id 
    order by ct."typeName" ,cr.id`
})
export class ReportDepressionByClassAndRoom {
  @ViewColumn()
  name:string
  @ViewColumn()
  value1:number
  @ViewColumn()
  value2:number
  @ViewColumn()
  value3:number
  @ViewColumn()
  value4:number
  @ViewColumn()
  value5:number
}
@ViewEntity({
    name:'rp_depression_personal',
    expression: `select 
    concat(s.firstname,' ',s.lastname) as "studentValue",
    s."classroomTypeId" as "classId",
    s."classroomId" as "roomId",
    ct."typeName" as "className",
    c."name" as "roomName",
    s."studentNumber" as "studentNumber",
    d."yearTermId" as "yearTermId",
    (d."depressionCh3"
    +d."depressionCh4"
    +d."depressionCh5"
    +d."depressionCh6"
    +d."depressionCh7"
    +d."depressionCh8"
    +d."depressionCh9"
    +d."depressionCh10"
    +d."depressionCh11"
    ) as "depressionValue",
    (d."depressionCh12"
    +d."depressionCh13"
    +d."depressionCh14"
    +d."depressionCh15"
    +d."depressionCh16"
    +d."depressionCh17"
    +d."depressionCh18"
    +d."depressionCh19"
    +d."depressionCh20"
    ) as "sucuidValue",
    d."updatedAt" as "updatedAt"
    from student s 
    left join classroom_type ct on ct.id = s."classroomTypeId" 
    left join classroom c  on c.id = s."classroomId" 
    left join depression d on d."studentId" = s.id
    where s."deletedAt" isnull 
    order by s."studentNumber"`
})
export class ReportDepressionPesonal {
  @ViewColumn()
  studentValue:string
  @ViewColumn()
  classId:number
  @ViewColumn()
  roomId:number
  @ViewColumn()
  className:string
  @ViewColumn()
  roomName:string
  @ViewColumn()
  studentNumber:number
  @ViewColumn()
  yearTermId:number
  @ViewColumn()
  depressionValue:number
  @ViewColumn()
  sucuidValue:number
  @ViewColumn()
  updatedAt:Date
}