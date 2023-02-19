import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";

@Entity('sar_courses_year_term')
export class SarCoursesYearTerm extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  yearTermId?: number;

  @Column({nullable: true})
  subjectName?: string;

  @Column({nullable: true})
  subjectCode?: string;

  @Column({nullable: true})
  class?: string;

  @Column({nullable: true})
  hourPerWeek?: number;

  @Column({nullable: true})
  totalRoom?: number;
}
@ViewEntity({
    name:'sar_courses_year_term_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_courses_year_term.id", "id")
        .addSelect("sar_courses_year_term.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_courses_year_term.refId", "refId")
        .addSelect("sar_courses_year_term.yearTermId", "yearTermId")
        .addSelect("CONCAT(year_term_id.term , ' / ' , year_term_id.year)", "yearTermValue")
        .addSelect("year_term_id.year", "schoolYear")
        .addSelect("year_term_id.term", "term")
        .addSelect("sar_courses_year_term.subjectName", "subjectName")
        .addSelect("sar_courses_year_term.subjectCode", "subjectCode")
        .addSelect("sar_courses_year_term.class", "class")
        .addSelect("sar_courses_year_term.hourPerWeek", "hourPerWeek")
        .addSelect("sar_courses_year_term.totalRoom", "totalRoom")
        .from(SarCoursesYearTerm, "sar_courses_year_term")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_courses_year_term.teacherId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = sar_courses_year_term.yearTermId")
})
export class VwSarCoursesYearTermList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    yearTermId: number;

    @ViewColumn()
    yearTermValue: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    subjectCode: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    hourPerWeek: number;

    @ViewColumn()
    schoolYear: string;
    @ViewColumn()
    term: string;

    @ViewColumn()
    totalRoom: number;


}

@ViewEntity({
  name:'sar_courses_year_term_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_courses_year_term.id", "value")
 // .addSelect("CONCAT(sar_courses_year_term.null , ' ' , sar_courses_year_term.null)", "label")
      .from(SarCoursesYearTerm, "sar_courses_year_term")
})
export class VwSarCoursesYearTermDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_courses_year_term_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_courses_year_term.id", "id")
        .addSelect("sar_courses_year_term.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_courses_year_term.refId", "refId")
        .addSelect("sar_courses_year_term.yearTermId", "yearTermId")
        .addSelect("CONCAT(year_term_id.term , '  / ' , year_term_id.year)", "yearTermValue")
        .addSelect("sar_courses_year_term.subjectName", "subjectName")
        .addSelect("sar_courses_year_term.subjectCode", "subjectCode")
        .addSelect("sar_courses_year_term.class", "class")
        .addSelect("sar_courses_year_term.hourPerWeek", "hourPerWeek")
        .addSelect("year_term_id.year", "schoolYear")
        .addSelect("year_term_id.term", "term")
        .addSelect("sar_courses_year_term.totalRoom", "totalRoom")
      .from(SarCoursesYearTerm, "sar_courses_year_term")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_courses_year_term.teacherId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = sar_courses_year_term.yearTermId")
})
export class VwSarCoursesYearTermItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    yearTermId: number;

    @ViewColumn()
    yearTermValue: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    subjectCode: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    hourPerWeek: number;

    @ViewColumn()
    schoolYear: string;

    @ViewColumn()
    term: string;

    @ViewColumn()
    totalRoom: number;
}
