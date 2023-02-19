import { ViewEntity, ViewColumn } from "typeorm"

@ViewEntity({
    name:'rp_student_filter_sumarize',
    expression: `select * from (
        select
        'ด้านการเรียน' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 3
        ) as c on 1=1
    ) as foo
    union all (
        select
        'สุขภาพร่างกาย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 3
        ) as c on 1=1
    )
    union all (
        select
        'จิตใจและพฤติกรรม' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 3
        ) as c on 1=1
    ) 
    union all (
        select
        'พฤติกรรมทางเพศ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 3
        ) as c on 1=1
    ) 
    union all (
        select
        'พฤติกรรมการใช้สารเสพติด' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 3
        ) as c on 1=1
    ) 
    union all (
        select
        'พฤติกรรมติดเกมส์' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 3
        ) as c on 1=1
    ) 
    union all (
        select
        'เศรษฐกิจ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 3
        ) as c on 1=1
    ) 
    union all (
        select
        'สวัสดิภาพและความปลอดภัย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 3
        ) as c on 1=1
    ) 
    union all (
        select
        'มีความต้องการพิเศษ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 3
        ) as c on 1=1
    ) 
    union all (
        select
        'การใช้เครื่องมือสื่อสาร' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3
        from(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 1
        ) as a
        left join(
        select count(sf.id) as sumva from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 2
        ) as b on 1=1
        left join(
        select count(sf.id) as sumva  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 3
        ) as c on 1=1
    )`
})
export class ReportStudentFilterSumarize {
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
    name:'rp_student_filter_by_class',
    expression: `select 
    ctr."typeName" as name1,
    a.value1 as value1,
    a.value2 as value2,
    a.value3 as value3,
    b.value1 as value4,
    b.value2 as value5,
    b.value3 as value6,
    c.value1 as value7,
    c.value2 as value8,
    c.value3 as value9,
    d.value1 as value10,
    d.value2 as value11,
    d.value3 as value12,
    e.value1 as value13,
    e.value2 as value14,
    e.value3 as value15,
    foo.value1 as value16,
    foo.value2 as value17,
    foo.value3 as value18,
    g.value1 as value19,
    g.value2 as value20,
    g.value3 as value21,
    h.value1 as value22,
    h.value2 as value23,
    h.value3 as value24,
    i.value1 as value25,
    i.value2 as value26,
    i.value3 as value27,
    j.value1 as value28,
    j.value2 as value29,
    j.value3 as value30
    from classroom_type ctr 
    left join (
        select
        'ด้านการเรียน' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as a on a."classroomTypeId" = ctr.id 
    left join (
        select
        'สุขภาพร่างกาย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as b on b."classroomTypeId" = ctr.id
    left join (
        select
        'จิตใจและพฤติกรรม' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as c on c."classroomTypeId" = ctr.id
    left join  (
        select
        'พฤติกรรมทางเพศ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as d on d."classroomTypeId" = ctr.id
    left join (
        select
        'พฤติกรรมการใช้สารเสพติด' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as e on e."classroomTypeId" = ctr.id
    left join (
        select
        'พฤติกรรมติดเกมส์' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as foo on foo."classroomTypeId" = ctr.id
    left join (
        select
        'เศรษฐกิจ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as g on g."classroomTypeId" = ctr.id
    left join (
        select
        'สวัสดิภาพและความปลอดภัย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as h on h."classroomTypeId" = ctr.id
    left join (
        select
        'มีความต้องการพิเศษ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as i on i."classroomTypeId" = ctr.id
    left join (
        select
        'การใช้เครื่องมือสื่อสาร' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId"
        from classroom_type ct 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 1
        group by  s."classroomTypeId" 
        ) as a on a."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 2
        group by  s."classroomTypeId" 
        ) as b on b."classroomTypeId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 3
        group by  s."classroomTypeId" 
        ) as c on c."classroomTypeId" = ct.id
    ) as j on j."classroomTypeId" = ctr.id
    order by ctr."typeName"`
})
export class ReportStudentFilterByClass {
  @ViewColumn()
  name1:string
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
  @ViewColumn()
  value6:number
  @ViewColumn()
  value7:number
  @ViewColumn()
  value8:number
  @ViewColumn()
  value9:number
  @ViewColumn()
  value10:number
  @ViewColumn()
  value11:number
  @ViewColumn()
  value12:number
  @ViewColumn()
  value13:number
  @ViewColumn()
  value14:number
  @ViewColumn()
  value15:number
  @ViewColumn()
  value16:number
  @ViewColumn()
  value17:number
  @ViewColumn()
  value18:number
  @ViewColumn()
  value19:number
  @ViewColumn()
  value20:number
  @ViewColumn()
  value21:number
  @ViewColumn()
  value22:number
  @ViewColumn()
  value23:number
  @ViewColumn()
  value24:number
  @ViewColumn()
  value25:number
  @ViewColumn()
  value26:number
  @ViewColumn()
  value27:number
  @ViewColumn()
  value28:number
  @ViewColumn()
  value29:number
  @ViewColumn()
  value30:number

}

@ViewEntity({
    name:'rp_student_filter_by_class_and_room',
    expression: `select 
    ctr."typeName" as name1,
    cro."name" as name2,
    a.value1 as value1,
    a.value2 as value2,
    a.value3 as value3,
    b.value1 as value4,
    b.value2 as value5,
    b.value3 as value6,
    c.value1 as value7,
    c.value2 as value8,
    c.value3 as value9,
    d.value1 as value10,
    d.value2 as value11,
    d.value3 as value12,
    e.value1 as value13,
    e.value2 as value14,
    e.value3 as value15,
    foo.value1 as value16,
    foo.value2 as value17,
    foo.value3 as value18,
    g.value1 as value19,
    g.value2 as value20,
    g.value3 as value21,
    h.value1 as value22,
    h.value2 as value23,
    h.value3 as value24,
    i.value1 as value25,
    i.value2 as value26,
    i.value3 as value27,
    j.value1 as value28,
    j.value2 as value29,
    j.value3 as value30
    from classroom_type ctr
    left join classroom cro on 1=1
    left join (
        select
        'ด้านการเรียน' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as a on a."classroomTypeId" = ctr.id and a."classroomId" = cro.id 
    left join (
        select
        'สุขภาพร่างกาย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as b on b."classroomTypeId" = ctr.id and b."classroomId" = cro.id
    left join (
        select
        'จิตใจและพฤติกรรม' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as c on c."classroomTypeId" = ctr.id and c."classroomId" = cro.id
    left join  (
        select
        'พฤติกรรมทางเพศ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as d on d."classroomTypeId" = ctr.id and d."classroomId" = cro.id
    left join (
        select
        'พฤติกรรมการใช้สารเสพติด' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as e on e."classroomTypeId" = ctr.id and e."classroomId" = cro.id
    left join (
        select
        'พฤติกรรมติดเกมส์' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as foo on foo."classroomTypeId" = ctr.id and foo."classroomId" = cro.id
    left join (
        select
        'เศรษฐกิจ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as g on g."classroomTypeId" = ctr.id and g."classroomId" = cro.id
    left join (
        select
        'สวัสดิภาพและความปลอดภัย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as h on h."classroomTypeId" = ctr.id and h."classroomId" = cro.id
    left join (
        select
        'มีความต้องการพิเศษ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as i on i."classroomTypeId" = ctr.id and i."classroomId" = cro.id
    left join (
        select
        'การใช้เครื่องมือสื่อสาร' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomTypeId",
        cr.id as "classroomId"
        from classroom_type ct
    left join classroom cr on 1=1 
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 1
        group by  s."classroomTypeId", s."classroomId" 
        ) as a on a."classroomTypeId" = ct.id and a."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 2
        group by  s."classroomTypeId", s."classroomId" 
        ) as b on b."classroomTypeId" = ct.id and b."classroomId" = cr.id
        left join(
        select  count(sf.id) as sumva , s."classroomTypeId" , s."classroomId"    from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 3
        group by  s."classroomTypeId", s."classroomId" 
        ) as c on c."classroomTypeId" = ct.id and c."classroomId" = cr.id
    ) as j on j."classroomTypeId" = ctr.id and j."classroomId" = cro.id
    order by ctr."typeName" , cro.id`
})
export class ReportStudentFilterByClassAndRoom {
    @ViewColumn()
    name1:string
    @ViewColumn()
    name2:string
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
    @ViewColumn()
    value6:number
    @ViewColumn()
    value7:number
    @ViewColumn()
    value8:number
    @ViewColumn()
    value9:number
    @ViewColumn()
    value10:number
    @ViewColumn()
    value11:number
    @ViewColumn()
    value12:number
    @ViewColumn()
    value13:number
    @ViewColumn()
    value14:number
    @ViewColumn()
    value15:number
    @ViewColumn()
    value16:number
    @ViewColumn()
    value17:number
    @ViewColumn()
    value18:number
    @ViewColumn()
    value19:number
    @ViewColumn()
    value20:number
    @ViewColumn()
    value21:number
    @ViewColumn()
    value22:number
    @ViewColumn()
    value23:number
    @ViewColumn()
    value24:number
    @ViewColumn()
    value25:number
    @ViewColumn()
    value26:number
    @ViewColumn()
    value27:number
    @ViewColumn()
    value28:number
    @ViewColumn()
    value29:number
    @ViewColumn()
    value30:number
}
@ViewEntity({
    name:'rp_student_filter_by_room',
    expression: `select 
    ctr."name" as name1,
    a.value1 as value1,
    a.value2 as value2,
    a.value3 as value3,
    b.value1 as value4,
    b.value2 as value5,
    b.value3 as value6,
    c.value1 as value7,
    c.value2 as value8,
    c.value3 as value9,
    d.value1 as value10,
    d.value2 as value11,
    d.value3 as value12,
    e.value1 as value13,
    e.value2 as value14,
    e.value3 as value15,
    foo.value1 as value16,
    foo.value2 as value17,
    foo.value3 as value18,
    g.value1 as value19,
    g.value2 as value20,
    g.value3 as value21,
    h.value1 as value22,
    h.value2 as value23,
    h.value3 as value24,
    i.value1 as value25,
    i.value2 as value26,
    i.value3 as value27,
    j.value1 as value28,
    j.value2 as value29,
    j.value3 as value30
    from classroom  ctr 
    left join (
        select
        'ด้านการเรียน' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as a on a."classroomId" = ctr.id 
    left join (
        select
        'สุขภาพร่างกาย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as b on b."classroomId" = ctr.id
    left join (
        select
        'จิตใจและพฤติกรรม' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as c on c."classroomId" = ctr.id
    left join  (
        select
        'พฤติกรรมทางเพศ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as d on d."classroomId" = ctr.id
    left join (
        select
        'พฤติกรรมการใช้สารเสพติด' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as e on e."classroomId" = ctr.id
    left join (
        select
        'พฤติกรรมติดเกมส์' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as foo on foo."classroomId" = ctr.id
    left join (
        select
        'เศรษฐกิจ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as g on g."classroomId" = ctr.id
    left join (
        select
        'สวัสดิภาพและความปลอดภัย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as h on h."classroomId" = ctr.id
    left join (
        select
        'มีความต้องการพิเศษ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as i on i."classroomId" = ctr.id
    left join (
        select
        'การใช้เครื่องมือสื่อสาร' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct.id as "classroomId"
        from classroom ct 
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 1
        group by  s."classroomId" 
        ) as a on a."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 2
        group by  s."classroomId" 
        ) as b on b."classroomId" = ct.id
        left join(
        select  count(sf.id) as sumva , s."classroomId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" and yt."isParent" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 3
        group by  s."classroomId" 
        ) as c on c."classroomId" = ct.id
    ) as j on j."classroomId" = ctr.id
    order by ctr.id `
})
export class ReportStudentFilterByRoom {
    @ViewColumn()
    name1:string
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
    @ViewColumn()
    value6:number
    @ViewColumn()
    value7:number
    @ViewColumn()
    value8:number
    @ViewColumn()
    value9:number
    @ViewColumn()
    value10:number
    @ViewColumn()
    value11:number
    @ViewColumn()
    value12:number
    @ViewColumn()
    value13:number
    @ViewColumn()
    value14:number
    @ViewColumn()
    value15:number
    @ViewColumn()
    value16:number
    @ViewColumn()
    value17:number
    @ViewColumn()
    value18:number
    @ViewColumn()
    value19:number
    @ViewColumn()
    value20:number
    @ViewColumn()
    value21:number
    @ViewColumn()
    value22:number
    @ViewColumn()
    value23:number
    @ViewColumn()
    value24:number
    @ViewColumn()
    value25:number
    @ViewColumn()
    value26:number
    @ViewColumn()
    value27:number
    @ViewColumn()
    value28:number
    @ViewColumn()
    value29:number
    @ViewColumn()
    value30:number
}
@ViewEntity({
    name:'rp_student_filter_sumarize_by_class_room',
    expression: `select * from (
        select
        'ด้านการเรียน' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."lernStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) as foo
    union all (
        select
        'สุขภาพร่างกาย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select  count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."healtyStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    )
    union all (
        select
        'จิตใจและพฤติกรรม' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select  count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."sumarizeFeelingStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) 
    union all (
        select
        'พฤติกรรมทางเพศ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomTypeId",
        cr2.id as "classroomId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select  count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."sexualStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) 
    union all (
        select
        'พฤติกรรมการใช้สารเสพติด' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select  count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."drugStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) 
    union all (
        select
        'พฤติกรรมติดเกมส์' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."gameStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) 
    union all (
        select
        'เศรษฐกิจ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."economicStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) 
    union all (
        select
        'สวัสดิภาพและความปลอดภัย' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select  count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."securityStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) 
    union all (
        select
        'มีความต้องการพิเศษ' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select  count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."specialStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    ) 
    union all (
        select
        'การใช้เครื่องมือสื่อสาร' as name,
        a.sumva as value1,
        b.sumva as value2,
        c.sumva as value3,
        ct2.id as "classroomId",
        cr2.id as "classroomTypeId",
        yt2.id as "yearTermId"
        from classroom_type ct2
        left join classroom cr2 on 1=1
        left join year_term yt2 on 1=1
        left join(
        select  count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 1
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as a on a."classroomId" =cr2.id and a."classroomTypeId" = ct2.id and a."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"  from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId" 
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 2
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as b on b."classroomId" =cr2.id and b."classroomTypeId" = ct2.id and b."yearTermId" = yt2.id
        left join(
        select count(sf.id) as sumva ,s."classroomId" ,s."classroomTypeId" ,sf."yearTermId"   from student_filter sf 
        inner join student s on s.id = sf."studentId" 
        inner join year_term yt on yt.id = sf."yearTermId"
        where sf."deletedAt" isnull 
        and sf."electronicStatus" = 3
        group by s."classroomId" ,s."classroomTypeId" ,sf."yearTermId" 
        ) as c on c."classroomId" =cr2.id and c."classroomTypeId" = ct2.id and c."yearTermId" = yt2.id
    )`
})
export class ReportStudentFilterSumarizeByClassAndRoom {
  @ViewColumn()
  name:string
  @ViewColumn()
  value1:number
  @ViewColumn()
  value2:number
  @ViewColumn()
  value3:number
  @ViewColumn()
  classroomId:number

  @ViewColumn()
  classroomTypeId:number
  @ViewColumn()
  yearTermId:number
}
@ViewEntity({
    name:'rp_student_filter_personal',
    expression: `select 
    s.id,
    s."classroomId",
    s."classroomTypeId",
    s."studentCode" ,
    CONCAT(s.firstname,' ',s.lastname) as "studentValue",
    c.name as "room",
    ct."typeName",
    af."lernStatus",
    af."healtyStatus",
    af."feelingStatus",
    af."sexualStatus",
    af."drugStatus",
    af."gameStatus",
    af."economicStatus",
    af."securityStatus",
    af."specialStatus",
    af."electronicStatus",
    af."summarize",
    sdq1."sumScore_value" as "sdq1",
    sdq2."sumScore_value" as "sdq2",
    sdq3."sumScore_value" as "sdq3",
    concat(af.skill1,af.skill2,af.skill3) as skill,
   	af."yearTermId",
   	af."specialSkill"
    from student s 
    inner join (
    select * from student_filter sf 
    inner join year_term yt  on yt.id = sf."yearTermId"
    ) af on af."studentId" = s.id
    left join classroom c on c.id = s."classroomId" 
    left join classroom_type ct on ct.id  = s."classroomTypeId" 
    left join (
    select  sdq1."sumScore_value",sdq1.id , sdq1."studentId"  from sdq_table sdq1
    where sdq1."estimateType" = 1
    order by id desc limit 1
    ) sdq1 on sdq1."studentId" = s.id 
    left join (
    select  sdq2."sumScore_value",sdq2.id , sdq2."studentId"  from sdq_table sdq2
    where sdq2."estimateType" = 2
    order by id desc limit 1
    ) sdq2 on sdq2."studentId" = s.id 
    left join (
    select  sdq3."sumScore_value",sdq3.id , sdq3."studentId"  from sdq_table sdq3
    where sdq3."estimateType" = 3
    order by id desc limit 1
    ) sdq3 on sdq3."studentId" = s.id`
})
export class ReportStudentFilterPosonal {
  @ViewColumn()
id:number
@ViewColumn()
classroomId:number
@ViewColumn()
yearTermId:number
@ViewColumn()
classroomTypeId:number
@ViewColumn()
studentCode:string
@ViewColumn()
studentValue:string
@ViewColumn()
room:string
@ViewColumn()
typeName:string
@ViewColumn()
lernStatus:number
@ViewColumn()
healtyStatus:number
@ViewColumn()
feelingStatus:number
@ViewColumn()
sexualStatus:number
@ViewColumn()
drugStatus:number
@ViewColumn()
gameStatus:number
@ViewColumn()
economicStatus:number
@ViewColumn()
securityStatus:number
@ViewColumn()
specialStatus:number
@ViewColumn()
electronicStatus:number
@ViewColumn()
summarize:number
@ViewColumn()
sdq1:string
@ViewColumn()
sdq2:string
@ViewColumn()
sdq3:string
@ViewColumn()
specialSkill:boolean
}