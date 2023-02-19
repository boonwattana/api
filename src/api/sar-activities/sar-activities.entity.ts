import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_activities')
export class SarActivities extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  activitieName?: string;

  @Column({nullable: true})
  class?: string;

  @Column({nullable: true})
  totalStudent?: number;

  @Column({nullable: true})
  passValue?: number;
}
@ViewEntity({
    name:'sar_activities_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_activities.id", "id")
        .addSelect("sar_activities.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_activities.refId", "refId")
        .addSelect("sar_activities.schoolyear", "schoolyear")
        .addSelect("sar_activities.activitieName", "activitieName")
        .addSelect("sar_activities.class", "class")
        .addSelect("sar_activities.totalStudent", "totalStudent")
        .addSelect("sar_activities.passValue", "passValue")
        .from(SarActivities, "sar_activities")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_activities.teacherId")
})
export class VwSarActivitiesList {
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
    activitieName: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    totalStudent: number;

    @ViewColumn()
    passValue: number;
}

@ViewEntity({
  name:'sar_activities_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_activities.id", "value")
 // .addSelect("CONCAT(sar_activities.null , ' ' , sar_activities.null)", "label")
      .from(SarActivities, "sar_activities")
})
export class VwSarActivitiesDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_activities_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_activities.id", "id")
        .addSelect("sar_activities.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_activities.refId", "refId")
        .addSelect("sar_activities.schoolyear", "schoolyear")
        .addSelect("sar_activities.activitieName", "activitieName")
        .addSelect("sar_activities.class", "class")
        .addSelect("sar_activities.totalStudent", "totalStudent")
        .addSelect("sar_activities.passValue", "passValue")
      .from(SarActivities, "sar_activities")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_activities.teacherId")
})
export class VwSarActivitiesItem {

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
    activitieName: string;

    @ViewColumn()
    class: string;

    @ViewColumn()
    totalStudent: number;

    @ViewColumn()
    passValue: number;
}
