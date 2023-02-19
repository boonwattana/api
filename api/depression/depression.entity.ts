import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Student } from "src/api/student/student.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";

@Entity('depression')
export class Depression extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  studentId?: number;

  @Column({nullable: true})
  yearTermId?: number;

  @Column({nullable: true})
  depressionCh1?: number;

  @Column({nullable: true})
  depressionCh2?: number;

  @Column({nullable: true})
  depressionCh3?: number;

  @Column({nullable: true})
  depressionCh4?: number;

  @Column({nullable: true})
  depressionCh5?: number;

  @Column({nullable: true})
  depressionCh6?: number;

  @Column({nullable: true})
  depressionCh7?: number;

  @Column({nullable: true})
  depressionCh8?: number;

  @Column({nullable: true})
  depressionCh9?: number;

  @Column({nullable: true})
  depressionCh10?: number;

  @Column({nullable: true})
  depressionCh11?: number;

  @Column({nullable: true})
  depressionCh12?: number;

  @Column({nullable: true})
  depressionCh13?: number;

  @Column({nullable: true})
  depressionCh14?: number;

  @Column({nullable: true})
  depressionCh15?: number;

  @Column({nullable: true})
  depressionCh16?: number;

  @Column({nullable: true})
  depressionCh17?: number;

  @Column({nullable: true})
  depressionCh18?: number;

  @Column({nullable: true})
  depressionCh19?: number;

  @Column({nullable: true})
  depressionCh20?: number;
}
@ViewEntity({
    name:'depression_list',
    expression: `select
    s.id ,
    s."studentCode" ,
    s."studentNumber" ,
    concat(title."titleName", ' ',s.firstname, ' ', s.lastname) as "studentValue",
    ct."typeName" ,
    c."name" as room,
    ct."id" as "classroomTypeId" ,
    c."id" as "classroomId" ,
    de."updatedAt",
    SUM(coalesce(de."depressionCh1" , -1) 
    + coalesce(de."depressionCh2" , -1) 
    ) as option1,
    SUM(coalesce(de."depressionCh3" , -1) 
    + coalesce(de."depressionCh4" , -1) 
    + coalesce(de."depressionCh5" , -1) 
    + coalesce(de."depressionCh6" , -1) 
    + coalesce(de."depressionCh7" , -1) 
    + coalesce(de."depressionCh8" , -1) 
    + coalesce(de."depressionCh9" , -1) 
    + coalesce(de."depressionCh10" , -1) 
    + coalesce(de."depressionCh11" , -1) 
    ) as option2,
    SUM(coalesce(de."depressionCh12" , -1) 
    + coalesce(de."depressionCh13" , -1) 
    + coalesce(de."depressionCh14" , -1) 
    + coalesce(de."depressionCh15" , -1) 
    + coalesce(de."depressionCh16" , -1) 
    + coalesce(de."depressionCh17" , -1) 
    + coalesce(de."depressionCh18" , -1) 
    + coalesce(de."depressionCh19" , -1) 
    + coalesce(de."depressionCh20" , -1) 
    ) as option3
  from
    student s
  left join 
  (
    select
      de.*
    from
      depression de
    inner join year_term yt on
      yt.id = de."yearTermId"
      and yt."isParent") as
  de on
    de."studentId" = s.id
  left join classroom_type ct on
    ct.id = s."classroomTypeId"
  left join classroom c on
    c.id = s. "classroomId"
  LEFT JOIN title_name title ON title.id = s.title
    where s."deletedAt" isnull 
  group by
    s.id ,
    s."studentCode" ,
    s.firstname ,
    s.lastname ,
    ct."typeName" ,
    c."name" ,
    ct."id" ,
    c."id" ,
    title."titleName",
    de."updatedAt"`
})
export class VwDepressionList {

  @ViewColumn()
  id: number;
  @ViewColumn()
  studentCode: string;
  @ViewColumn()
  studentNumber: number;
  @ViewColumn()
  studentValue: string;
  @ViewColumn()
  typeName: string;
  @ViewColumn()
  room: string;
  @ViewColumn()
  updatedAt:Date
  @ViewColumn()
  option1:number
  @ViewColumn()
  option2:number
  @ViewColumn()
  option3:number
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  classroomId: number;
}

@ViewEntity({
  name:'depression_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("depression.id", "value")
  .addSelect("CONCAT(depression.depressionCh2 , ' ' , depression.depressionCh3)", "label")
      .from(Depression, "depression")
})
export class VwDepressionDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'depression_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("depression.id", "id")
        .addSelect("depression.studentId", "studentId")
        .addSelect("CONCAT(student_id.firstname , ' ' , student_id.lastname)", "studentValue")
        .addSelect("depression.yearTermId", "yearTermId")

        .addSelect("depression.depressionCh1", "depressionCh1")
        .addSelect("depression.depressionCh2", "depressionCh2")
        .addSelect("depression.depressionCh3", "depressionCh3")
        .addSelect("depression.depressionCh4", "depressionCh4")
        .addSelect("depression.depressionCh5", "depressionCh5")
        .addSelect("depression.depressionCh6", "depressionCh6")
        .addSelect("depression.depressionCh7", "depressionCh7")
        .addSelect("depression.depressionCh8", "depressionCh8")
        .addSelect("depression.depressionCh9", "depressionCh9")
        .addSelect("depression.depressionCh10", "depressionCh10")
        .addSelect("depression.depressionCh11", "depressionCh11")
        .addSelect("depression.depressionCh12", "depressionCh12")
        .addSelect("depression.depressionCh13", "depressionCh13")
        .addSelect("depression.depressionCh14", "depressionCh14")
        .addSelect("depression.depressionCh15", "depressionCh15")
        .addSelect("depression.depressionCh16", "depressionCh16")
        .addSelect("depression.depressionCh17", "depressionCh17")
        .addSelect("depression.depressionCh18", "depressionCh18")
        .addSelect("depression.depressionCh19", "depressionCh19")
        .addSelect("depression.depressionCh20", "depressionCh20")

        .addSelect("CONCAT(year_term_id.year , ' ' , year_term_id.term)", "yearTermValue")
      .from(Depression, "depression")
        .leftJoin(Student, "student_id","student_id.Id = depression.studentId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = depression.yearTermId")
})
export class VwDepressionItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    studentId: number;

    @ViewColumn()
    studentValue: string;

    @ViewColumn()
    yearTermId: number;

    @ViewColumn()
    yearTermValue: string;
        @ViewColumn()
  depressionCh1?: number;

      @ViewColumn()
  depressionCh2?: number;

      @ViewColumn()
  depressionCh3?: number;

      @ViewColumn()
  depressionCh4?: number;

      @ViewColumn()
  depressionCh5?: number;

      @ViewColumn()
  depressionCh6?: number;

      @ViewColumn()
  depressionCh7?: number;

      @ViewColumn()
  depressionCh8?: number;

      @ViewColumn()
  depressionCh9?: number;

      @ViewColumn()
  depressionCh10?: number;

      @ViewColumn()
  depressionCh11?: number;

      @ViewColumn()
  depressionCh12?: number;

      @ViewColumn()
  depressionCh13?: number;

      @ViewColumn()
  depressionCh14?: number;

      @ViewColumn()
  depressionCh15?: number;

      @ViewColumn()
  depressionCh16?: number;

      @ViewColumn()
  depressionCh17?: number;

      @ViewColumn()
  depressionCh18?: number;

      @ViewColumn()
  depressionCh19?: number;

      @ViewColumn()
  depressionCh20?: number;
}
