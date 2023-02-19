import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_another_speacial_duty')
export class SarAnotherSpeacialDuty extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  dutyName?: string;

  @Column({nullable: true})
  referenceDoc?: string;
}
@ViewEntity({
    name:'sar_another_speacial_duty_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_another_speacial_duty.id", "id")
        .addSelect("sar_another_speacial_duty.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_another_speacial_duty.refId", "refId")
        .addSelect("sar_another_speacial_duty.schoolyear", "schoolyear")
        .addSelect("sar_another_speacial_duty.dutyName", "dutyName")
        .addSelect("sar_another_speacial_duty.referenceDoc", "referenceDoc")
        .from(SarAnotherSpeacialDuty, "sar_another_speacial_duty")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_another_speacial_duty.teacherId")
})
export class VwSarAnotherSpeacialDutyList {
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
    dutyName: string;

    @ViewColumn()
    referenceDoc: string;
}

@ViewEntity({
  name:'sar_another_speacial_duty_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_another_speacial_duty.id", "value")
 // .addSelect("CONCAT(sar_another_speacial_duty.null , ' ' , sar_another_speacial_duty.null)", "label")
      .from(SarAnotherSpeacialDuty, "sar_another_speacial_duty")
})
export class VwSarAnotherSpeacialDutyDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_another_speacial_duty_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_another_speacial_duty.id", "id")
        .addSelect("sar_another_speacial_duty.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_another_speacial_duty.refId", "refId")
        .addSelect("sar_another_speacial_duty.schoolyear", "schoolyear")
        .addSelect("sar_another_speacial_duty.dutyName", "dutyName")
        .addSelect("sar_another_speacial_duty.referenceDoc", "referenceDoc")
      .from(SarAnotherSpeacialDuty, "sar_another_speacial_duty")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_another_speacial_duty.teacherId")
})
export class VwSarAnotherSpeacialDutyItem {

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
    dutyName: string;

    @ViewColumn()
    referenceDoc: string;
}
