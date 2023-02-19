import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_invited_speaker')
export class SarInvitedSpeaker extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  name?: string;

  @Column({nullable: true})
  date?: string;

  @Column({nullable: true})
  organization?: string;
}
@ViewEntity({
    name:'sar_invited_speaker_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_invited_speaker.id", "id")
        .addSelect("sar_invited_speaker.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_invited_speaker.refId", "refId")
        .addSelect("sar_invited_speaker.schoolyear", "schoolyear")
        .addSelect("sar_invited_speaker.name", "name")
        .addSelect("sar_invited_speaker.date", "date")
        .addSelect("sar_invited_speaker.organization", "organization")
        .from(SarInvitedSpeaker, "sar_invited_speaker")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_invited_speaker.teacherId")
})
export class VwSarInvitedSpeakerList {
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
    name: string;

    @ViewColumn()
    date: string;

    @ViewColumn()
    organization: string;
}

@ViewEntity({
  name:'sar_invited_speaker_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_invited_speaker.id", "value")
  //.addSelect("CONCAT(sar_invited_speaker.null , ' ' , sar_invited_speaker.null)", "label")
      .from(SarInvitedSpeaker, "sar_invited_speaker")
})
export class VwSarInvitedSpeakerDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_invited_speaker_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_invited_speaker.id", "id")
        .addSelect("sar_invited_speaker.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_invited_speaker.refId", "refId")
        .addSelect("sar_invited_speaker.schoolyear", "schoolyear")
        .addSelect("sar_invited_speaker.name", "name")
        .addSelect("sar_invited_speaker.date", "date")
        .addSelect("sar_invited_speaker.organization", "organization")
      .from(SarInvitedSpeaker, "sar_invited_speaker")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_invited_speaker.teacherId")
})
export class VwSarInvitedSpeakerItem {

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
    name: string;

    @ViewColumn()
    date: string;

    @ViewColumn()
    organization: string;
}
