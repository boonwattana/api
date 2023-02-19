import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_self_development')
export class SarSelfDevelopment extends BasicData {
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
  place?: string;

  @Column({nullable: true})
  organization?: string;

  @Column({nullable: true})
  evidence?: string;
}
@ViewEntity({
    name:'sar_self_development_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_self_development.id", "id")
        .addSelect("sar_self_development.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_self_development.refId", "refId")
        .addSelect("sar_self_development.schoolyear", "schoolyear")
        .addSelect("sar_self_development.title", "title")
        .addSelect("sar_self_development.date", "date")
        .addSelect("sar_self_development.place", "place")
        .addSelect("sar_self_development.organization", "organization")
        .addSelect("sar_self_development.evidence", "evidence")
        .from(SarSelfDevelopment, "sar_self_development")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_self_development.teacherId")
})
export class VwSarSelfDevelopmentList {
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
    place: string;

    @ViewColumn()
    organization: string;

    @ViewColumn()
    evidence: string;
}

@ViewEntity({
  name:'sar_self_development_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_self_development.id", "value")
  //.addSelect("CONCAT(sar_self_development.null , ' ' , sar_self_development.null)", "label")
      .from(SarSelfDevelopment, "sar_self_development")
})
export class VwSarSelfDevelopmentDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_self_development_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_self_development.id", "id")
        .addSelect("sar_self_development.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_self_development.refId", "refId")
        .addSelect("sar_self_development.schoolyear", "schoolyear")
        .addSelect("sar_self_development.title", "title")
        .addSelect("sar_self_development.date", "date")
        .addSelect("sar_self_development.place", "place")
        .addSelect("sar_self_development.organization", "organization")
        .addSelect("sar_self_development.evidence", "evidence")
      .from(SarSelfDevelopment, "sar_self_development")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_self_development.teacherId")
})
export class VwSarSelfDevelopmentItem {

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
    place: string;

    @ViewColumn()
    organization: string;

    @ViewColumn()
    evidence: string;
}
