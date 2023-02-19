import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";

@Entity('sar_teaching_result')
export class SarTeachingResult extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  yearTermId?: number;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  subjectName?: string;

  @Column({nullable: true})
  class?: string;

  @Column({nullable: true})
  totalStudent?: number;

  @Column({nullable: true})
  resultGrad1?: number;

  @Column({nullable: true})
  resultGrad2?: number;

  @Column({nullable: true})
  resultGrad3?: number;

  @Column({nullable: true})
  resultGrad4?: number;

  @Column({nullable: true})
  resultGrad5?: number;

  @Column({nullable: true})
  resultGrad6?: number;

  @Column({nullable: true})
  resultGrad7?: number;

  @Column({nullable: true})
  resultGrad8?: number;

  @Column({nullable: true})
  resultGrad9?: number;

  @Column({nullable: true})
  resultGrad10?: number;

  @Column({nullable: true})
  totalResultGrad?: number;
}
@ViewEntity({
    name:'sar_teaching_result_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_teaching_result.id", "id")
        .addSelect("sar_teaching_result.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_teaching_result.refId", "refId")
        .addSelect("sar_teaching_result.yearTermId", "yearTermId")
        .addSelect("CONCAT(year_term_id.term , '/' , year_term_id.year)", "yearTermValue")
        .addSelect("year_term_id.term", "term")
        .addSelect("year_term_id.year", "year")
        .addSelect("sar_teaching_result.schoolyear", "schoolyear")
        .addSelect("sar_teaching_result.subjectName", "subjectName")
        .addSelect("sar_teaching_result.class", "class")
        .addSelect("sar_teaching_result.totalStudent", "totalStudent")
        .addSelect("sar_teaching_result.resultGrad1", "resultGrad1")
        .addSelect("sar_teaching_result.resultGrad2", "resultGrad2")
        .addSelect("sar_teaching_result.resultGrad3", "resultGrad3")
        .addSelect("sar_teaching_result.resultGrad4", "resultGrad4")
        .addSelect("sar_teaching_result.resultGrad5", "resultGrad5")
        .addSelect("sar_teaching_result.resultGrad6", "resultGrad6")
        .addSelect("sar_teaching_result.resultGrad7", "resultGrad7")
        .addSelect("sar_teaching_result.resultGrad8", "resultGrad8")
        .addSelect("sar_teaching_result.resultGrad9", "resultGrad9")
        .addSelect("sar_teaching_result.resultGrad10", "resultGrad10")
        .addSelect("sar_teaching_result.totalResultGrad", "totalResultGrad")
        .from(SarTeachingResult, "sar_teaching_result")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_teaching_result.teacherId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = sar_teaching_result.yearTermId")
})
export class VwSarTeachingResultList {
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
    schoolyear: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    totalStudent: number;

    @ViewColumn()
    resultGrad1: number;

    @ViewColumn()
    resultGrad2: number;

    @ViewColumn()
    resultGrad3: number;

    @ViewColumn()
    resultGrad4: number;

    @ViewColumn()
    resultGrad5: number;

    @ViewColumn()
    resultGrad6: number;

    @ViewColumn()
    resultGrad7: number;

    @ViewColumn()
    resultGrad8: number;

    @ViewColumn()
    resultGrad9: number;

    @ViewColumn()
    resultGrad10: number;

    @ViewColumn()
    totalResultGrad: number;

    @ViewColumn()
    year: string;

    @ViewColumn()
    term: string;

}

@ViewEntity({
  name:'sar_teaching_result_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_teaching_result.id", "value")
  //.addSelect("CONCAT(sar_teaching_result.null , ' ' , sar_teaching_result.null)", "label")
      .from(SarTeachingResult, "sar_teaching_result")
})
export class VwSarTeachingResultDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_teaching_result_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_teaching_result.id", "id")
        .addSelect("sar_teaching_result.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_teaching_result.refId", "refId")
        .addSelect("sar_teaching_result.yearTermId", "yearTermId")
        .addSelect("CONCAT(year_term_id.term , '/' , year_term_id.year)", "yearTermValue")
        .addSelect("year_term_id.term", "term")
        .addSelect("year_term_id.year", "year")
        .addSelect("sar_teaching_result.schoolyear", "schoolyear")
        .addSelect("sar_teaching_result.subjectName", "subjectName")
        .addSelect("sar_teaching_result.class", "class")
        .addSelect("sar_teaching_result.totalStudent", "totalStudent")
        .addSelect("sar_teaching_result.resultGrad1", "resultGrad1")
        .addSelect("sar_teaching_result.resultGrad2", "resultGrad2")
        .addSelect("sar_teaching_result.resultGrad3", "resultGrad3")
        .addSelect("sar_teaching_result.resultGrad4", "resultGrad4")
        .addSelect("sar_teaching_result.resultGrad5", "resultGrad5")
        .addSelect("sar_teaching_result.resultGrad6", "resultGrad6")
        .addSelect("sar_teaching_result.resultGrad7", "resultGrad7")
        .addSelect("sar_teaching_result.resultGrad8", "resultGrad8")
        .addSelect("sar_teaching_result.resultGrad9", "resultGrad9")
        .addSelect("sar_teaching_result.resultGrad10", "resultGrad10")
        .addSelect("sar_teaching_result.totalResultGrad", "totalResultGrad")
      .from(SarTeachingResult, "sar_teaching_result")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_teaching_result.teacherId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = sar_teaching_result.yearTermId")
})
export class VwSarTeachingResultItem {

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
    schoolyear: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    totalStudent: number;

    @ViewColumn()
    resultGrad1: number;

    @ViewColumn()
    resultGrad2: number;

    @ViewColumn()
    resultGrad3: number;

    @ViewColumn()
    resultGrad4: number;

    @ViewColumn()
    resultGrad5: number;

    @ViewColumn()
    resultGrad6: number;

    @ViewColumn()
    resultGrad7: number;

    @ViewColumn()
    resultGrad8: number;

    @ViewColumn()
    resultGrad9: number;

    @ViewColumn()
    resultGrad10: number;

    @ViewColumn()
    totalResultGrad: number;

    @ViewColumn()
    year: string;

    @ViewColumn()
    term: string;

}
