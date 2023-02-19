import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_standard2')
export class SarStandard2 extends BasicData {
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
  result?: number;
}
@ViewEntity({
    name:'sar_standard2_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_standard2.id", "id")
        .addSelect("sar_standard2.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_standard2.refId", "refId")
        .addSelect("sar_standard2.schoolyear", "schoolyear")
        .addSelect("sar_standard2.choice1", "choice1")
        .addSelect("sar_standard2.choice2", "choice2")
        .addSelect("sar_standard2.choice3", "choice3")
        .addSelect("sar_standard2.choice4", "choice4")
        .addSelect("sar_standard2.choice5", "choice5")
        .addSelect("sar_standard2.choice6", "choice6")
        .addSelect("sar_standard2.choice7", "choice7")
        .addSelect("sar_standard2.result", "result")
        .from(SarStandard2, "sar_standard2")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_standard2.teacherId")
})
export class VwSarStandard2List {
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
    result: number;
}

@ViewEntity({
  name:'sar_standard2_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_standard2.id", "value")
//.addSelect("CONCAT(sar_standard2.null , ' ' , sar_standard2.null)", "label")
      .from(SarStandard2, "sar_standard2")
})
export class VwSarStandard2Dropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_standard2_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_standard2.id", "id")
        .addSelect("sar_standard2.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_standard2.refId", "refId")
        .addSelect("sar_standard2.schoolyear", "schoolyear")
        .addSelect("sar_standard2.choice1", "choice1")
        .addSelect("sar_standard2.choice2", "choice2")
        .addSelect("sar_standard2.choice3", "choice3")
        .addSelect("sar_standard2.choice4", "choice4")
        .addSelect("sar_standard2.choice5", "choice5")
        .addSelect("sar_standard2.choice6", "choice6")
        .addSelect("sar_standard2.choice7", "choice7")
        .addSelect("sar_standard2.result", "result")
      .from(SarStandard2, "sar_standard2")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_standard2.teacherId")
})
export class VwSarStandard2Item {

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
    result: number;
}
