import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_quality_of_learners')
export class SarQualityOfLearners extends BasicData {
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
  choice6?: number;

  @Column({nullable: true})
  choice7?: number;

  @Column({nullable: true})
  choice8?: number;

  @Column({nullable: true})
  choice9?: number;

  @Column({nullable: true})
  choice10?: number;

  @Column({nullable: true})
  choice11?: number;

  @Column({nullable: true})
  choice12?: number;

  @Column({nullable: true})
  choice13?: number;

  @Column({nullable: true})
  choice14?: number;

  @Column({nullable: true})
  choice15?: number;

  @Column({nullable: true})
  choice16?: number;

  @Column({nullable: true})
  result?: number;
}
@ViewEntity({
    name:'sar_quality_of_learners_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_quality_of_learners.id", "id")
        .addSelect("sar_quality_of_learners.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_quality_of_learners.refId", "refId")
        .addSelect("sar_quality_of_learners.schoolyear", "schoolyear")
        .addSelect("sar_quality_of_learners.choice1", "choice1")
        .addSelect("sar_quality_of_learners.choice2", "choice2")
        .addSelect("sar_quality_of_learners.choice3", "choice3")
        .addSelect("sar_quality_of_learners.choice4", "choice4")
        .addSelect("sar_quality_of_learners.choice5", "choice5")
        .addSelect("sar_quality_of_learners.choice6", "choice6")
        .addSelect("sar_quality_of_learners.choice7", "choice7")
        .addSelect("sar_quality_of_learners.choice8", "choice8")
        .addSelect("sar_quality_of_learners.choice9", "choice9")
        .addSelect("sar_quality_of_learners.choice10", "choice10")
        .addSelect("sar_quality_of_learners.choice11", "choice11")
        .addSelect("sar_quality_of_learners.choice12", "choice12")
        .addSelect("sar_quality_of_learners.choice13", "choice13")
        .addSelect("sar_quality_of_learners.choice14", "choice14")
        .addSelect("sar_quality_of_learners.choice15", "choice15")
        .addSelect("sar_quality_of_learners.choice16", "choice16")
        .addSelect("sar_quality_of_learners.result", "result")
        .from(SarQualityOfLearners, "sar_quality_of_learners")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_quality_of_learners.teacherId")
})
export class VwSarQualityOfLearnersList {
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
    choice6: number;

    @ViewColumn()
    choice7: number;

    @ViewColumn()
    choice8: number;

    @ViewColumn()
    choice9: number;

    @ViewColumn()
    choice10: number;

    @ViewColumn()
    choice11: number;

    @ViewColumn()
    choice12: number;

    @ViewColumn()
    choice13: number;

    @ViewColumn()
    choice14: number;

    @ViewColumn()
    choice15: number;

    @ViewColumn()
    choice16: number;

    @ViewColumn()
    result: number;
}

@ViewEntity({
  name:'sar_quality_of_learners_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_quality_of_learners.id", "value")
 // .addSelect("CONCAT(sar_quality_of_learners.null , ' ' , sar_quality_of_learners.null)", "label")
      .from(SarQualityOfLearners, "sar_quality_of_learners")
})
export class VwSarQualityOfLearnersDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_quality_of_learners_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_quality_of_learners.id", "id")
        .addSelect("sar_quality_of_learners.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_quality_of_learners.refId", "refId")
        .addSelect("sar_quality_of_learners.schoolyear", "schoolyear")
        .addSelect("sar_quality_of_learners.choice1", "choice1")
        .addSelect("sar_quality_of_learners.choice2", "choice2")
        .addSelect("sar_quality_of_learners.choice3", "choice3")
        .addSelect("sar_quality_of_learners.choice4", "choice4")
        .addSelect("sar_quality_of_learners.choice5", "choice5")
        .addSelect("sar_quality_of_learners.choice6", "choice6")
        .addSelect("sar_quality_of_learners.choice7", "choice7")
        .addSelect("sar_quality_of_learners.choice8", "choice8")
        .addSelect("sar_quality_of_learners.choice9", "choice9")
        .addSelect("sar_quality_of_learners.choice10", "choice10")
        .addSelect("sar_quality_of_learners.choice11", "choice11")
        .addSelect("sar_quality_of_learners.choice12", "choice12")
        .addSelect("sar_quality_of_learners.choice13", "choice13")
        .addSelect("sar_quality_of_learners.choice14", "choice14")
        .addSelect("sar_quality_of_learners.choice15", "choice15")
        .addSelect("sar_quality_of_learners.choice16", "choice16")
        .addSelect("sar_quality_of_learners.result", "result")
      .from(SarQualityOfLearners, "sar_quality_of_learners")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_quality_of_learners.teacherId")
})
export class VwSarQualityOfLearnersItem {

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
    choice6: number;

    @ViewColumn()
    choice7: number;

    @ViewColumn()
    choice8: number;

    @ViewColumn()
    choice9: number;

    @ViewColumn()
    choice10: number;

    @ViewColumn()
    choice11: number;

    @ViewColumn()
    choice12: number;

    @ViewColumn()
    choice13: number;

    @ViewColumn()
    choice14: number;

    @ViewColumn()
    choice15: number;

    @ViewColumn()
    choice16: number;

    @ViewColumn()
    result: number;
}
