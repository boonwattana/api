import { ViewEntity, ViewColumn } from "typeorm"

// @ViewEntity({
//     name:'rp_teacher_by_subject',
//     expression: `select sg."SubjectGroupName" as name,count(t.id) as value1  from  teacher t 
//     left join subject_group sg on sg.id = t."subjectGroupId" 
//     where t."deletedAt" isnull and t."subjectGroupId" notnull 
//     group by t."subjectGroupId" , sg."SubjectGroupName"
//     order by sg."SubjectGroupName"  
//           `
// })
// export class ReportTeacherBySubject {
//   @ViewColumn()
//   name:string
//   @ViewColumn()
//   value1:number
// }
@ViewEntity({
    name:'rp_teacher_sumarize',
    expression: `select 
    teachAll.sumva as "name",
    male.sumva as value1,
    female.sumva as value2,
    moved.sumva as value3,
    ernly.sumva as value4
    from (
    select count(t.id) as sumva from teacher t 
    where t."deletedAt" isnull 
    ) as teachAll
    left join (
    select count(t.id) as sumva from teacher t 
    where t."gendarId" = 1 and t."deletedAt" isnull 
    ) as male on 1=1
    left join (
    select count(t.id) as sumva from teacher t 
    where t."gendarId" = 2 and t."deletedAt" isnull 
    ) as female on 1=1 
    left join (
    select count(t.id) as sumva from teacher t 
    where t."status" = 3 and t."deletedAt" isnull 
    ) as moved on 1=1 
    left join (
    select count(t.id) as sumva from teacher t 
    where t."status" = 4 and t."deletedAt" isnull 
    ) as ernly on 1=1 `
})
export class ReportTeacherSumarize {
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