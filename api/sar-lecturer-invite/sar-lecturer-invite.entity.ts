import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_lecturer_invite')
export class SarLecturerInvite extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  title?: string;

  @Column({nullable: true})
  date?: string;

  @Column({nullable: true})
  lecturerName?: string;
}
@ViewEntity({
    name:'sar_lecturer_invite_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_lecturer_invite.id", "id")
        .addSelect("sar_lecturer_invite.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_lecturer_invite.refId", "refId")
        .addSelect("sar_lecturer_invite.schoolyear", "schoolyear")
        .addSelect("sar_lecturer_invite.title", "title")
        .addSelect("sar_lecturer_invite.date", "date")
        .addSelect("sar_lecturer_invite.lecturerName", "lecturerName")
        .from(SarLecturerInvite, "sar_lecturer_invite")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_lecturer_invite.teacherId")
})
export class VwSarLecturerInviteList {
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
    title: string;

    @ViewColumn()
    date: string;

    @ViewColumn()
    lecturerName: string;
}

@ViewEntity({
  name:'sar_lecturer_invite_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_lecturer_invite.id", "value")
 // .addSelect("CONCAT(sar_lecturer_invite.null , ' ' , sar_lecturer_invite.null)", "label")
      .from(SarLecturerInvite, "sar_lecturer_invite")
})
export class VwSarLecturerInviteDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_lecturer_invite_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_lecturer_invite.id", "id")
        .addSelect("sar_lecturer_invite.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_lecturer_invite.refId", "refId")
        .addSelect("sar_lecturer_invite.schoolyear", "schoolyear")
        .addSelect("sar_lecturer_invite.title", "title")
        .addSelect("sar_lecturer_invite.date", "date")
        .addSelect("sar_lecturer_invite.lecturerName", "lecturerName")
      .from(SarLecturerInvite, "sar_lecturer_invite")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_lecturer_invite.teacherId")
})
export class VwSarLecturerInviteItem {

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
    title: string;

    @ViewColumn()
    date: string;

    @ViewColumn()
    lecturerName: string;
}
