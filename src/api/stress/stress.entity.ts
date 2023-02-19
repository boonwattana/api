import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Student } from "src/api/student/student.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";

@Entity('stress')
export class Stress extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  studentId?: number;

  @Column({nullable: true})
  yearTermId?: number;

  @Column({nullable: true})
  stressCh1?: number;

  @Column({nullable: true})
  stressCh2?: number;

  @Column({nullable: true})
  stressCh3?: number;

  @Column({nullable: true})
  stressCh4?: number;

  @Column({nullable: true})
  stressCh5?: number;

  @Column({nullable: true})
  stressCh6?: number;

  @Column({nullable: true})
  stressCh7?: number;

  @Column({nullable: true})
  stressCh8?: number;

  @Column({nullable: true})
  stressCh9?: number;

  @Column({nullable: true})
  stressCh10?: number;

  @Column({nullable: true})
  stressCh11?: number;

  @Column({nullable: true})
  stressCh12?: number;

  @Column({nullable: true})
  stressCh13?: number;

  @Column({nullable: true})
  stressCh14?: number;

  @Column({nullable: true})
  stressCh15?: number;

  @Column({nullable: true})
  stressCh16?: number;

  @Column({nullable: true})
  stressCh17?: number;

  @Column({nullable: true})
  stressCh18?: number;

  @Column({nullable: true})
  stressCh19?: number;

  @Column({nullable: true})
  stressCh20?: number;
}
@ViewEntity({
    name:'stress_list',
    expression: `select 
    s."id" ,
    s."studentCode" ,
    s."studentNumber" ,
    ct."typeName" ,
    c."name" as room ,
    ct."id" as "classroomTypeId" ,
    c."id" as "classroomId" ,
    st."updatedAt",
    concat(title."titleName", ' ',s.firstname, ' ', s.lastname) as "studentValue",
    SUM(coalesce(st."stressCh1", -1) 
      + coalesce(st."stressCh2", -1)
      + coalesce(st."stressCh3", -1)
      + coalesce(st."stressCh4", -1)
      + coalesce(st."stressCh5", -1)
      + coalesce(st."stressCh6", -1)
      + coalesce(st."stressCh7", -1)
      + coalesce(st."stressCh8", -1)
      + coalesce(st."stressCh9", -1)
      + coalesce(st."stressCh10", -1)
      + coalesce(st."stressCh11", -1)
      + coalesce(st."stressCh12", -1)
      + coalesce(st."stressCh13", -1)
      + coalesce(st."stressCh14", -1)
      + coalesce(st."stressCh15", -1)
      + coalesce(st."stressCh16", -1)
      + coalesce(st."stressCh17", -1)
      + coalesce(st."stressCh18", -1)
      + coalesce(st."stressCh19", -1)
      + coalesce(st."stressCh20", -1)) as "sumValue"
    from
      student s
    left join (
    select st.* from stress st 
    inner join year_term yt on yt.id = st."yearTermId" and yt."isParent"  ) as st on st."studentId" = s.id
    left join classroom_type ct on
      ct.id = s."classroomTypeId"
    left join classroom c on
      c.id = s."classroomId"
    LEFT JOIN title_name title ON title.id = s.title
            where  s."deletedAt" isnull
    group by s.id, s."studentCode" ,
      s.firstname ,
      s.lastname ,
      ct."typeName" ,
      ct."id" ,
      c."id" ,
      c."name" ,
      st."updatedAt",
      title."titleName"
    `
})
export class VwStressList {
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
  sumValue: number;
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  classroomId: number;
  
}

@ViewEntity({
  name:'stress_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("stress.id", "value")
  .addSelect("CONCAT(stress.stressCh2 , ' ' , stress.stressCh3)", "label")
      .from(Stress, "stress")
})
export class VwStressDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'stress_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("stress.id", "id")
        .addSelect("stress.studentId", "studentId")
        .addSelect("CONCAT(student_id.firstname , ' ' , student_id.lastname)", "studentValue")
        .addSelect("stress.yearTermId", "yearTermId")

        .addSelect("stress.stressCh1", "stressCh1")
        .addSelect("stress.stressCh2", "stressCh2")
        .addSelect("stress.stressCh3", "stressCh3")
        .addSelect("stress.stressCh4", "stressCh4")
        .addSelect("stress.stressCh5", "stressCh5")
        .addSelect("stress.stressCh6", "stressCh6")
        .addSelect("stress.stressCh7", "stressCh7")
        .addSelect("stress.stressCh8", "stressCh8")
        .addSelect("stress.stressCh9", "stressCh9")
        .addSelect("stress.stressCh10", "stressCh10")
        .addSelect("stress.stressCh11", "stressCh11")
        .addSelect("stress.stressCh12", "stressCh12")
        .addSelect("stress.stressCh13", "stressCh13")
        .addSelect("stress.stressCh14", "stressCh14")
        .addSelect("stress.stressCh15", "stressCh15")
        .addSelect("stress.stressCh16", "stressCh16")
        .addSelect("stress.stressCh17", "stressCh17")
        .addSelect("stress.stressCh18", "stressCh18")
        .addSelect("stress.stressCh19", "stressCh19")
        .addSelect("stress.stressCh20", "stressCh20")
        .addSelect("student_id.classroomId", "classroomId")
        .addSelect("student_id.classroomTypeId", "classroomTypeId")


        .addSelect("CONCAT(year_term_id.year , ' ' , year_term_id.term)", "yearTermValue")
      .from(Stress, "stress")
        .leftJoin(Student, "student_id","student_id.Id = stress.studentId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = stress.yearTermId")
})
export class VwStressItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    studentId: number;
    @ViewColumn()
    classroomTypeId: number;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
    studentValue: string;

    @ViewColumn()
    yearTermId: number;

    @ViewColumn()
    yearTermValue: string;
        @ViewColumn()
  stressCh1?: number;

      @ViewColumn()
  stressCh2?: number;

      @ViewColumn()
  stressCh3?: number;

      @ViewColumn()
  stressCh4?: number;

      @ViewColumn()
  stressCh5?: number;

      @ViewColumn()
  stressCh6?: number;

      @ViewColumn()
  stressCh7?: number;

      @ViewColumn()
  stressCh8?: number;

      @ViewColumn()
  stressCh9?: number;

      @ViewColumn()
  stressCh10?: number;

      @ViewColumn()
  stressCh11?: number;

      @ViewColumn()
  stressCh12?: number;

      @ViewColumn()
  stressCh13?: number;

      @ViewColumn()
  stressCh14?: number;

      @ViewColumn()
  stressCh15?: number;

      @ViewColumn()
  stressCh16?: number;

      @ViewColumn()
  stressCh17?: number;

      @ViewColumn()
  stressCh18?: number;

      @ViewColumn()
  stressCh19?: number;

      @ViewColumn()
  stressCh20?: number;
}
