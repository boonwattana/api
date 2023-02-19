import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";


@ViewEntity({
    name:'rp_student_by_room',
    expression: `  select 
    c.name,
    male."gendarCount" as "value1",
    female."gendarCount" as "value2"
    from classroom c 
    left join (
      select s."classroomId",
          s."gendarId" ,
          count(s.id) as  "gendarCount"
          from student s 
          where s."gendarId" = 1
          and s."deletedAt" isnull 
          group by s."classroomId" , s."gendarId" 
          ) as male on male."classroomId" = c.id 
    left join (
      select s2."classroomId",
          s2."gendarId" ,
          count(s2.id) as  "gendarCount"
          from student s2 
          where s2."gendarId" = 2
          and s2."deletedAt" isnull 
          group by s2."classroomId" , s2."gendarId" 
          ) as female on female."classroomId" = c.id 
          order by c."id"  
          `
})
export class ReportStudentByRoom {
  @ViewColumn()
  name:string
  @ViewColumn()
  value1:number
  @ViewColumn()
  value2:number
}
@ViewEntity({
  name:'rp_student_by_class',
  expression: `select 
  c."typeName" as name,
  male."gendarCount" as "value1",
  female."gendarCount" as "value2"
  from classroom_type c 
  left join (
    select s."classroomTypeId",
        s."gendarId" ,
        count(s.id) as  "gendarCount"
        from student s 
        where s."gendarId" = 1
        and s."deletedAt" isnull 
        group by s."classroomTypeId" , s."gendarId" 
        ) as male on male."classroomTypeId" = c.id 
  left join (
    select s2."classroomTypeId",
        s2."gendarId" ,
        count(s2.id) as  "gendarCount"
        from student s2 
        where s2."gendarId" = 2
        and s2."deletedAt" isnull 
        group by s2."classroomTypeId" , s2."gendarId" 
        ) as female on female."classroomTypeId" = c.id 
  order by c."typeName" 
        `
})
export class ReportStudentByClass {
@ViewColumn()
name:string
@ViewColumn()
value1:number
@ViewColumn()
value2:number
}

@ViewEntity({
  name:'rp_student_sumarize',
  expression: `select
	female."femaleCount" as value1,
	allStu."allCount" as "name",
	male."maleCount" as "value2",
	exchange."exchangeCount" as "value3",
	leave."leaveCount" as "value4"
from
	(
	select
		count(s.id) as "maleCount"
	from
		student s
	where
		s."gendarId" = 1
		and s."deletedAt" isnull 
) as male
left join (
	select
		count(s.id) as "femaleCount"
	from
		student s
	where
		s."gendarId" = 2
		and s."deletedAt" isnull 
) as female on
	1 = 1
left join (
	select
		count(s.id) as "allCount"
	from
		student s
	where
		 s."deletedAt" isnull 
) as allStu on
	1 = 1
left join (
	select
		count(s.id) as "exchangeCount"
	from
		student s
	where
		s."status" = 2
		and s."deletedAt" isnull 
) as exchange on
	1 = 1
left join (
	select
		count(s.id) as "leaveCount"
	from
		student s
	where
		s."status" = 3
		and s."deletedAt" isnull 
) as leave on
	1 = 1`
})
export class ReportStudentSumarize {
@ViewColumn()
name:number
@ViewColumn()
value1:number
@ViewColumn()
value2:number
@ViewColumn()
value3:number
@ViewColumn()
value4:number
}

