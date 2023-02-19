import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_check_student_sumarize',
    expression: `select
	thin.sumva as name,
	normal.sumva as value1,
	fat.sumva as value2,
	fatly.sumva as value3,
	veryfat.sumva as value4
from
	(
	select
		count(cs.id) as sumva
	from
		check_student cs
	inner join year_term yt on yt.id = cs."yearTermId" and yt."isParent" 
	inner join student s  on s.id = cs."studentId"
	where
		(cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))<18.50
		and cs."deletedAt" isnull 
) as thin
left join (
	select
		count(cs.id) as sumva
	from
		check_student cs
	inner join year_term yt on yt.id = cs."yearTermId" and yt."isParent" 
	inner join student s  on s.id = cs."studentId"
	where
		(cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))>= 18.50
			and (cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))<23
				and cs."deletedAt" isnull 
) as normal on
	1 = 1
left join (
	select
		count(cs.id) as sumva
	from
		check_student cs
	inner join year_term yt on yt.id = cs."yearTermId" and yt."isParent" 
	inner join student s  on s.id = cs."studentId"
	where
		(cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))>= 23
			and (cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))<25
				and cs."deletedAt" isnull 
) as fat on
	1 = 1
left join (
	select
		count(cs.id) as sumva
	from
		check_student cs
	inner join year_term yt on yt.id = cs."yearTermId" and yt."isParent" 
	inner join student s  on s.id = cs."studentId"
	where
		(cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))>= 25
			and (cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))<30
				and cs."deletedAt" isnull 
) as fatly on
	1 = 1
left join (
	select
		count(cs.id) as sumva
	from
		check_student cs
	inner join year_term yt on yt.id = cs."yearTermId" and yt."isParent"
	inner join student s  on s.id = cs."studentId"
	where
		(cs.weight / (cs.height / 100::double precision * (cs.height / 100::double precision)))>30
			and cs."deletedAt" isnull 
) as veryfat on
	1 = 1`
})
export class ReportCheckStudentSumarize {
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