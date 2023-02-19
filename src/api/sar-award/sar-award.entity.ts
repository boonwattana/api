import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_award')
export class SarAward extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  awardName?: string;

  @Column({nullable: true})
  date?: string;

  @Column({nullable: true})
  organization?: string;

  @Column({nullable: true})
  evidence?: string;
}
@ViewEntity({
    name:'sar_award_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_award.id", "id")
        .addSelect("sar_award.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_award.refId", "refId")
        .addSelect("sar_award.schoolyear", "schoolyear")
        .addSelect("sar_award.awardName", "awardName")
        .addSelect("sar_award.date", "date")
        .addSelect("sar_award.organization", "organization")
        .addSelect("sar_award.evidence", "evidence")
        .from(SarAward, "sar_award")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_award.teacherId")
})
export class VwSarAwardList {
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
    awardName: string;

    @ViewColumn()
    date: string;

    @ViewColumn()
    organization: string;

    @ViewColumn()
    evidence: string;
}

@ViewEntity({
  name:'sar_award_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_award.id", "value")
 // .addSelect("CONCAT(sar_award.null , ' ' , sar_award.null)", "label")
      .from(SarAward, "sar_award")
})
export class VwSarAwardDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_award_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_award.id", "id")
        .addSelect("sar_award.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_award.refId", "refId")
        .addSelect("sar_award.schoolyear", "schoolyear")
        .addSelect("sar_award.awardName", "awardName")
        .addSelect("sar_award.date", "date")
        .addSelect("sar_award.organization", "organization")
        .addSelect("sar_award.evidence", "evidence")
      .from(SarAward, "sar_award")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_award.teacherId")
})
export class VwSarAwardItem {

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
    awardName: string;

    @ViewColumn()
    date: string;

    @ViewColumn()
    organization: string;

    @ViewColumn()
    evidence: string;
}
