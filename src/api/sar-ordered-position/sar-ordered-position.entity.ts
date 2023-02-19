import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_ordered_position')
export class SarOrderedPosition extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  orderNumber?: string;

  @Column({nullable: true})
  title?: string;

  @Column({nullable: true})
  result?: string;
}
@ViewEntity({
    name:'sar_ordered_position_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_ordered_position.id", "id")
        .addSelect("sar_ordered_position.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_ordered_position.refId", "refId")
        .addSelect("sar_ordered_position.schoolyear", "schoolyear")
        .addSelect("sar_ordered_position.orderNumber", "orderNumber")
        .addSelect("sar_ordered_position.title", "title")
        .addSelect("sar_ordered_position.result", "result")
        .from(SarOrderedPosition, "sar_ordered_position")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_ordered_position.teacherId")
})
export class VwSarOrderedPositionList {
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
    orderNumber: string;

    @ViewColumn()
    title: string;

    @ViewColumn()
    result: string;
}

@ViewEntity({
  name:'sar_ordered_position_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_ordered_position.id", "value")
 // .addSelect("CONCAT(sar_ordered_position.null , ' ' , sar_ordered_position.null)", "label")
      .from(SarOrderedPosition, "sar_ordered_position")
})
export class VwSarOrderedPositionDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_ordered_position_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_ordered_position.id", "id")
        .addSelect("sar_ordered_position.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_ordered_position.refId", "refId")
        .addSelect("sar_ordered_position.schoolyear", "schoolyear")
        .addSelect("sar_ordered_position.orderNumber", "orderNumber")
        .addSelect("sar_ordered_position.title", "title")
        .addSelect("sar_ordered_position.result", "result")
      .from(SarOrderedPosition, "sar_ordered_position")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_ordered_position.teacherId")
})
export class VwSarOrderedPositionItem {

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
    orderNumber: string;

    @ViewColumn()
    title: string;

    @ViewColumn()
    result: string;
}
