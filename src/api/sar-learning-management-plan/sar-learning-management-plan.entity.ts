import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_learning_management_plan')
export class SarLearningManagementPlan extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  subjectCode?: string;

  @Column({nullable: true})
  subjectName?: string;

  @Column({nullable: true})
  class?: string;

  @Column({nullable: true})
  planCount?: number;
}
@ViewEntity({
    name:'sar_learning_management_plan_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_learning_management_plan.id", "id")
        .addSelect("sar_learning_management_plan.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_learning_management_plan.refId", "refId")
        .addSelect("sar_learning_management_plan.schoolyear", "schoolyear")
        .addSelect("sar_learning_management_plan.subjectCode", "subjectCode")
        .addSelect("sar_learning_management_plan.subjectName", "subjectName")
        .addSelect("sar_learning_management_plan.class", "class")
        .addSelect("sar_learning_management_plan.planCount", "planCount")
        .from(SarLearningManagementPlan, "sar_learning_management_plan")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_learning_management_plan.teacherId")
})
export class VwSarLearningManagementPlanList {
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
    subjectCode: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    planCount: number;
}

@ViewEntity({
  name:'sar_learning_management_plan_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_learning_management_plan.id", "value")
  //.addSelect("CONCAT(sar_learning_management_plan.null , ' ' , sar_learning_management_plan.null)", "label")
      .from(SarLearningManagementPlan, "sar_learning_management_plan")
})
export class VwSarLearningManagementPlanDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_learning_management_plan_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_learning_management_plan.id", "id")
        .addSelect("sar_learning_management_plan.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_learning_management_plan.refId", "refId")
        .addSelect("sar_learning_management_plan.schoolyear", "schoolyear")
        .addSelect("sar_learning_management_plan.subjectCode", "subjectCode")
        .addSelect("sar_learning_management_plan.subjectName", "subjectName")
        .addSelect("sar_learning_management_plan.class", "class")
        .addSelect("sar_learning_management_plan.planCount", "planCount")
      .from(SarLearningManagementPlan, "sar_learning_management_plan")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_learning_management_plan.teacherId")
})
export class VwSarLearningManagementPlanItem {

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
    subjectCode: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    planCount: number;
}
