import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_teaching_condition')
export class SarTeachingCondition extends BasicData {
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
}
@ViewEntity({
    name:'sar_teaching_condition_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_teaching_condition.id", "id")
        .addSelect("sar_teaching_condition.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_teaching_condition.refId", "refId")
        .addSelect("sar_teaching_condition.schoolyear", "schoolyear")
        .addSelect("sar_teaching_condition.choice1", "choice1")
        .addSelect("sar_teaching_condition.choice2", "choice2")
        .addSelect("sar_teaching_condition.choice3", "choice3")
        .addSelect("sar_teaching_condition.choice4", "choice4")
        .addSelect("sar_teaching_condition.choice5", "choice5")
        .from(SarTeachingCondition, "sar_teaching_condition")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_teaching_condition.teacherId")
})
export class VwSarTeachingConditionList {
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
  name:'sar_teaching_condition_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_teaching_condition.id", "value")
 // .addSelect("CONCAT(sar_teaching_condition.null , ' ' , sar_teaching_condition.null)", "label")
      .from(SarTeachingCondition, "sar_teaching_condition")
})
export class VwSarTeachingConditionDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_teaching_condition_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_teaching_condition.id", "id")
        .addSelect("sar_teaching_condition.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_teaching_condition.refId", "refId")
        .addSelect("sar_teaching_condition.schoolyear", "schoolyear")
        .addSelect("sar_teaching_condition.choice1", "choice1")
        .addSelect("sar_teaching_condition.choice2", "choice2")
        .addSelect("sar_teaching_condition.choice3", "choice3")
        .addSelect("sar_teaching_condition.choice4", "choice4")
        .addSelect("sar_teaching_condition.choice5", "choice5")
      .from(SarTeachingCondition, "sar_teaching_condition")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_teaching_condition.teacherId")
})
export class VwSarTeachingConditionItem {

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
