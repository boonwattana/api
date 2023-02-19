import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_standard4')
export class SarStandard4 extends BasicData {
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
  result?: number;
}
@ViewEntity({
    name:'sar_standard4_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_standard4.id", "id")
        .addSelect("sar_standard4.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_standard4.refId", "refId")
        .addSelect("sar_standard4.schoolyear", "schoolyear")
        .addSelect("sar_standard4.choice1", "choice1")
        .addSelect("sar_standard4.choice2", "choice2")
        .addSelect("sar_standard4.choice3", "choice3")
        .addSelect("sar_standard4.result", "result")
        .from(SarStandard4, "sar_standard4")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_standard4.teacherId")
})
export class VwSarStandard4List {
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
    result: number;
}

@ViewEntity({
  name:'sar_standard4_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_standard4.id", "value")
  //.addSelect("CONCAT(sar_standard4.null , ' ' , sar_standard4.null)", "label")
      .from(SarStandard4, "sar_standard4")
})
export class VwSarStandard4Dropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_standard4_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_standard4.id", "id")
        .addSelect("sar_standard4.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_standard4.refId", "refId")
        .addSelect("sar_standard4.schoolyear", "schoolyear")
        .addSelect("sar_standard4.choice1", "choice1")
        .addSelect("sar_standard4.choice2", "choice2")
        .addSelect("sar_standard4.choice3", "choice3")
        .addSelect("sar_standard4.result", "result")
      .from(SarStandard4, "sar_standard4")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_standard4.teacherId")
})
export class VwSarStandard4Item {

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
    result: number;
}
