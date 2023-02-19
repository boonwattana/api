import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar-self-assessment')
export class SarSelfAssessment extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  choice1?: number;

  @Column({nullable: true})
  choice2?: number;

  @Column({nullable: true})
  choice3?: number;

  @Column({nullable: true})
  choice4?: number;

  @Column({nullable: true})
  choice5?: number;

  @Column({nullable: true})
  result?: string;
}
@ViewEntity({
    name:'sar-self-assessment_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar-self-assessment.id", "id")
        .addSelect("sar-self-assessment.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar-self-assessment.refId", "refId")
        .addSelect("sar-self-assessment.schoolyear", "schoolyear")
        .addSelect("sar-self-assessment.choice1", "choice1")
        .addSelect("sar-self-assessment.choice2", "choice2")
        .addSelect("sar-self-assessment.choice3", "choice3")
        .addSelect("sar-self-assessment.choice4", "choice4")
        .addSelect("sar-self-assessment.choice5", "choice5")
        .from(SarSelfAssessment, "sar-self-assessment")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar-self-assessment.teacherId")
})
export class VwSarSelfAssessmentList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolyear: string;

    @ViewColumn()
    choice1: number;

    @ViewColumn()
    choice2: number;

    @ViewColumn()
    choice3: number;

    @ViewColumn()
    choice4: number;

    @ViewColumn()
    choice5: number;
}

@ViewEntity({
  name:'sar-self-assessment_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar-self-assessment.id", "value")
 // .addSelect("CONCAT(sar-self-assessment.firstname , ' ' , sar-self-assessment.lastname)", "label")
      .from(SarSelfAssessment, "sar-self-assessment")
})
export class VwSarSelfAssessmentDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar-self-assessment_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar-self-assessment.id", "id")
        .addSelect("sar-self-assessment.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar-self-assessment.refId", "refId")
        .addSelect("sar-self-assessment.schoolyear", "schoolyear")
        .addSelect("sar-self-assessment.choice1", "choice1")
        .addSelect("sar-self-assessment.choice2", "choice2")
        .addSelect("sar-self-assessment.choice3", "choice3")
        .addSelect("sar-self-assessment.choice4", "choice4")
        .addSelect("sar-self-assessment.choice5", "choice5")
        .addSelect("sar-self-assessment.result", "result")
      .from(SarSelfAssessment, "sar-self-assessment")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar-self-assessment.teacherId")
})
export class VwSarSelfAssessmentItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolyear: string;

    @ViewColumn()
    choice1: number;

    @ViewColumn()
    choice2: number;

    @ViewColumn()
    choice3: number;

    @ViewColumn()
    choice4: number;

    @ViewColumn()
    choice5: number;

    @ViewColumn()
    result: string;
}
