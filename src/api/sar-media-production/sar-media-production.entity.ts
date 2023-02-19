import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_media production')
export class SarMediaProduction extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  mediaProductionName?: string;

  @Column({nullable: true})
  mediaProductionCount?: number;

  @Column({nullable: true})
    mediaProductionUnit?:string
}
@ViewEntity({
    name:'sar_media_production_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_media production.id", "id")
        .addSelect("sar_media production.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_media production.refId", "refId")
        .addSelect("sar_media production.schoolyear", "schoolyear")
        .addSelect("sar_media production.mediaProductionName", "mediaProductionName")
        .addSelect("sar_media production.mediaProductionCount", "mediaProductionCount")
        .addSelect("sar_media production.mediaProductionUnit", "mediaProductionUnit")
        .from(SarMediaProduction, "sar_media production")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_media production.teacherId")
})
export class VwSarMediaProductionList {
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
    mediaProductionName: string;

    @ViewColumn()
    mediaProductionCount: number;

    @ViewColumn()
    mediaProductionUnit: string;
}

@ViewEntity({
  name:'sar_media production_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_media production.id", "value")
 // .addSelect("CONCAT(sar_media production.null , ' ' , sar_media production.null)", "label")
      .from(SarMediaProduction, "sar_media production")
})
export class VwSarMediaProductionDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_media_production_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_media production.id", "id")
        .addSelect("sar_media production.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_media production.refId", "refId")
        .addSelect("sar_media production.schoolyear", "schoolyear")
        .addSelect("sar_media production.mediaProductionName", "mediaProductionName")
        .addSelect("sar_media production.mediaProductionCount", "mediaProductionCount")
        .addSelect("sar_media production.mediaProductionUnit", "mediaProductionUnit")
      .from(SarMediaProduction, "sar_media production")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_media production.teacherId")
})
export class VwSarMediaProductionItem {

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
    mediaProductionName: string;

    @ViewColumn()
    mediaProductionCount: number;

    @ViewColumn()
    mediaProductionUnit: string;
}
