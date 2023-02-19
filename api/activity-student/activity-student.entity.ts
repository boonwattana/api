import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('activity_student')
export class ActivityStudent extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  activityMainName?: string;

   @Column({nullable: true})
  activitySubName?: string;
}
@ViewEntity({
    name:'activity_student_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("activity_student.id", "id")
        .addSelect("activity_student.activityMainName", "activityMainName")
        .addSelect("activity_student.activitySubName", "activitySubName")
        .from(ActivityStudent, "activity_student")
})
export class VwActivityStudentList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    activityMainName: string;

    @ViewColumn()
    activitySubName: string;
}

@ViewEntity({
  name:'activity_student_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("activity_student.id", "value")
  .addSelect("activity_student.activityMainName", "label")
      .from(ActivityStudent, "activity_student")
})
export class VwActivityStudentDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'activity_student_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("activity_student.id", "id")
        .addSelect("activity_student.activityMainName", "activityMainName")
        .addSelect("activity_student.activitySubName", "activitySubName")
      .from(ActivityStudent, "activity_student")
})
export class VwActivityStudentItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    activityMainName: string;

    @ViewColumn()
    activitySubName: string;
}
