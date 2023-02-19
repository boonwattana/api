import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_standard3')
export class SarStandard3 extends BasicData {
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
  result?: number;
}
@ViewEntity({
    name:'sar_standard3_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_standard3.id", "id")
        .addSelect("sar_standard3.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_standard3.refId", "refId")
        .addSelect("sar_standard3.schoolyear", "schoolyear")
        .addSelect("sar_standard3.choice1", "choice1")
        .addSelect("sar_standard3.choice2", "choice2")
        .addSelect("sar_standard3.choice3", "choice3")
        .addSelect("sar_standard3.choice4", "choice4")
        .addSelect("sar_standard3.choice5", "choice5")
        .addSelect("sar_standard3.choice6", "choice6")
        .addSelect("sar_standard3.choice7", "choice7")
        .addSelect("sar_standard3.choice8", "choice8")
        .addSelect("sar_standard3.choice9", "choice9")
        .addSelect("sar_standard3.choice10", "choice10")
        .addSelect("sar_standard3.choice11", "choice11")
        .addSelect("sar_standard3.choice12", "choice12")
        .addSelect("sar_standard3.result", "result")
        .from(SarStandard3, "sar_standard3")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_standard3.teacherId")
})
export class VwSarStandard3List {
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
    result: number;
}

@ViewEntity({
  name:'sar_standard3_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_standard3.id", "value")
 // .addSelect("CONCAT(sar_standard3.null , ' ' , sar_standard3.null)", "label")
      .from(SarStandard3, "sar_standard3")
})
export class VwSarStandard3Dropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_standard3_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_standard3.id", "id")
        .addSelect("sar_standard3.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_standard3.refId", "refId")
        .addSelect("sar_standard3.schoolyear", "schoolyear")
        .addSelect("sar_standard3.choice1", "choice1")
        .addSelect("sar_standard3.choice2", "choice2")
        .addSelect("sar_standard3.choice3", "choice3")
        .addSelect("sar_standard3.choice4", "choice4")
        .addSelect("sar_standard3.choice5", "choice5")
        .addSelect("sar_standard3.choice6", "choice6")
        .addSelect("sar_standard3.choice7", "choice7")
        .addSelect("sar_standard3.choice8", "choice8")
        .addSelect("sar_standard3.choice9", "choice9")
        .addSelect("sar_standard3.choice10", "choice10")
        .addSelect("sar_standard3.choice11", "choice11")
        .addSelect("sar_standard3.choice12", "choice12")
        .addSelect("sar_standard3.result", "result")
      .from(SarStandard3, "sar_standard3")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_standard3.teacherId")
})
export class VwSarStandard3Item {

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
    result: number;
}
