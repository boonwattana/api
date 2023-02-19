import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";
@Entity('sar_teaching_format')
export class SarTeachingFormat extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;
  @Column({nullable: true})
  teacherId?:number
  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  teachingFormat1?: boolean;

  @Column({nullable: true})
  teachingFormat2?: boolean;

  @Column({nullable: true})
  teachingFormat3?: boolean;

  @Column({nullable: true})
  teachingFormat4?: boolean;

  @Column({nullable: true})
  teachingFormat5?: boolean;

  @Column({nullable: true})
  teachingFormat6?: boolean;

  @Column({nullable: true})
  teachingFormat7?: boolean;

  @Column({nullable: true})
  teachingFormat8?: boolean;

  @Column({nullable: true})
  teachingFormat9?: boolean;

  @Column({nullable: true})
  teachingFormat10?: boolean;

  @Column({nullable: true})
  teachingFormat11?: boolean;

  @Column({nullable: true})
  teachingFormat12?: boolean;

  @Column({nullable: true})
  teachingFormat13?: boolean;

  @Column({nullable: true})
  teachingFormat14?: boolean;

  @Column({nullable: true})
  teachingFormat15?: boolean;

  @Column({nullable: true})
  teachingFormat16?: boolean;

  @Column({nullable: true})
  teachingFormat17?: boolean;

  @Column({nullable: true})
  teachingFormat18?: boolean;

  @Column({nullable: true})
  teachingFormat19?: boolean;

  @Column({nullable: true})
  teachingFormat20?: boolean;

  @Column({nullable: true})
  teachingFormat21?: boolean;

  @Column({nullable: true})
  teachingFormat22?: boolean;

  @Column({nullable: true})
  teachingFormat23?: boolean;

  @Column({nullable: true})
  teachingFormat24?: boolean;

  @Column({nullable: true})
  teachingFormat25?: boolean;

  @Column({nullable: true})
  teachingFormat26?: boolean;

  @Column({nullable: true})
  teachingFormatOther?: boolean;

  @Column({nullable: true})
  teachingFormatOtherNote?: string;
}
@ViewEntity({
    name:'sar_teaching_format_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_teaching_format.id", "id")
        .addSelect("sar_teaching_format.refId", "refId")
        .addSelect("sar_teaching_format.schoolyear", "schoolyear")
        .addSelect("sar_teaching_format.teachingFormat1", "teachingFormat1")
        .addSelect("sar_teaching_format.teachingFormat2", "teachingFormat2")
        .addSelect("sar_teaching_format.teachingFormat3", "teachingFormat3")
        .addSelect("sar_teaching_format.teachingFormat4", "teachingFormat4")
        .addSelect("sar_teaching_format.teachingFormat5", "teachingFormat5")
        .addSelect("sar_teaching_format.teachingFormat6", "teachingFormat6")
        .addSelect("sar_teaching_format.teachingFormat7", "teachingFormat7")
        .addSelect("sar_teaching_format.teachingFormat8", "teachingFormat8")
        .addSelect("sar_teaching_format.teachingFormat9", "teachingFormat9")
        .addSelect("sar_teaching_format.teachingFormat10", "teachingFormat10")
        .addSelect("sar_teaching_format.teachingFormat11", "teachingFormat11")
        .addSelect("sar_teaching_format.teachingFormat12", "teachingFormat12")
        .addSelect("sar_teaching_format.teachingFormat13", "teachingFormat13")
        .addSelect("sar_teaching_format.teachingFormat14", "teachingFormat14")
        .addSelect("sar_teaching_format.teachingFormat15", "teachingFormat15")
        .addSelect("sar_teaching_format.teachingFormat16", "teachingFormat16")
        .addSelect("sar_teaching_format.teachingFormat17", "teachingFormat17")
        .addSelect("sar_teaching_format.teachingFormat18", "teachingFormat18")
        .addSelect("sar_teaching_format.teachingFormat19", "teachingFormat19")
        .addSelect("sar_teaching_format.teachingFormat20", "teachingFormat20")
        .addSelect("sar_teaching_format.teachingFormat21", "teachingFormat21")
        .addSelect("sar_teaching_format.teachingFormat22", "teachingFormat22")
        .addSelect("sar_teaching_format.teachingFormat23", "teachingFormat23")
        .addSelect("sar_teaching_format.teachingFormat24", "teachingFormat24")
        .addSelect("sar_teaching_format.teachingFormat25", "teachingFormat25")
        .addSelect("sar_teaching_format.teachingFormat26", "teachingFormat26")
        .addSelect("sar_teaching_format.teachingFormatOther", "teachingFormatOther")
        .addSelect("sar_teaching_format.teachingFormatOtherNote", "teachingFormatOtherNote")
        .addSelect("sar_teaching_format.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .from(SarTeachingFormat, "sar_teaching_format")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_teaching_format.teacherId")
})
export class VwSarTeachingFormatList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolyear: string;

    @ViewColumn()
    teachingFormat1: boolean;

    @ViewColumn()
    teachingFormat2: boolean;

    @ViewColumn()
    teachingFormat3: boolean;

    @ViewColumn()
    teachingFormat4: boolean;

    @ViewColumn()
    teachingFormat5: boolean;

    @ViewColumn()
    teachingFormat6: boolean;

    @ViewColumn()
    teachingFormat7: boolean;

    @ViewColumn()
    teachingFormat8: boolean;

    @ViewColumn()
    teachingFormat9: boolean;

    @ViewColumn()
    teachingFormat10: boolean;

    @ViewColumn()
    teachingFormat11: boolean;

    @ViewColumn()
    teachingFormat12: boolean;

    @ViewColumn()
    teachingFormat13: boolean;

    @ViewColumn()
    teachingFormat14: boolean;

    @ViewColumn()
    teachingFormat15: boolean;

    @ViewColumn()
    teachingFormat16: boolean;

    @ViewColumn()
    teachingFormat17: boolean;

    @ViewColumn()
    teachingFormat18: boolean;

    @ViewColumn()
    teachingFormat19: boolean;

    @ViewColumn()
    teachingFormat20: boolean;

    @ViewColumn()
    teachingFormat21: boolean;

    @ViewColumn()
    teachingFormat22: boolean;

    @ViewColumn()
    teachingFormat23: boolean;

    @ViewColumn()
    teachingFormat24: boolean;

    @ViewColumn()
    teachingFormat25: boolean;

    @ViewColumn()
    teachingFormat26: boolean;

    @ViewColumn()
    teachingFormatOther: boolean;

    @ViewColumn()
    teachingFormatOtherNote: string;
    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;
}

@ViewEntity({
  name:'sar_teaching_format_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_teaching_format.id", "value")
  //.addSelect("CONCAT(sar_teaching_format.null , ' ' , sar_teaching_format.null)", "label")
      .from(SarTeachingFormat, "sar_teaching_format")
})
export class VwSarTeachingFormatDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_teaching_format_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_teaching_format.id", "id")
        .addSelect("sar_teaching_format.refId", "refId")
        .addSelect("sar_teaching_format.schoolyear", "schoolyear")
        .addSelect("sar_teaching_format.teachingFormat1", "teachingFormat1")
        .addSelect("sar_teaching_format.teachingFormat2", "teachingFormat2")
        .addSelect("sar_teaching_format.teachingFormat3", "teachingFormat3")
        .addSelect("sar_teaching_format.teachingFormat4", "teachingFormat4")
        .addSelect("sar_teaching_format.teachingFormat5", "teachingFormat5")
        .addSelect("sar_teaching_format.teachingFormat6", "teachingFormat6")
        .addSelect("sar_teaching_format.teachingFormat7", "teachingFormat7")
        .addSelect("sar_teaching_format.teachingFormat8", "teachingFormat8")
        .addSelect("sar_teaching_format.teachingFormat9", "teachingFormat9")
        .addSelect("sar_teaching_format.teachingFormat10", "teachingFormat10")
        .addSelect("sar_teaching_format.teachingFormat11", "teachingFormat11")
        .addSelect("sar_teaching_format.teachingFormat12", "teachingFormat12")
        .addSelect("sar_teaching_format.teachingFormat13", "teachingFormat13")
        .addSelect("sar_teaching_format.teachingFormat14", "teachingFormat14")
        .addSelect("sar_teaching_format.teachingFormat15", "teachingFormat15")
        .addSelect("sar_teaching_format.teachingFormat16", "teachingFormat16")
        .addSelect("sar_teaching_format.teachingFormat17", "teachingFormat17")
        .addSelect("sar_teaching_format.teachingFormat18", "teachingFormat18")
        .addSelect("sar_teaching_format.teachingFormat19", "teachingFormat19")
        .addSelect("sar_teaching_format.teachingFormat20", "teachingFormat20")
        .addSelect("sar_teaching_format.teachingFormat21", "teachingFormat21")
        .addSelect("sar_teaching_format.teachingFormat22", "teachingFormat22")
        .addSelect("sar_teaching_format.teachingFormat23", "teachingFormat23")
        .addSelect("sar_teaching_format.teachingFormat24", "teachingFormat24")
        .addSelect("sar_teaching_format.teachingFormat25", "teachingFormat25")
        .addSelect("sar_teaching_format.teachingFormat26", "teachingFormat26")
        .addSelect("sar_teaching_format.teachingFormatOther", "teachingFormatOther")
        .addSelect("sar_teaching_format.teachingFormatOtherNote", "teachingFormatOtherNote")
        .addSelect("sar_teaching_format.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
      .from(SarTeachingFormat, "sar_teaching_format")
      .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_teaching_format.teacherId")
})
export class VwSarTeachingFormatItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolyear: string;

    @ViewColumn()
    teachingFormat1: boolean;

    @ViewColumn()
    teachingFormat2: boolean;

    @ViewColumn()
    teachingFormat3: boolean;

    @ViewColumn()
    teachingFormat4: boolean;

    @ViewColumn()
    teachingFormat5: boolean;

    @ViewColumn()
    teachingFormat6: boolean;

    @ViewColumn()
    teachingFormat7: boolean;

    @ViewColumn()
    teachingFormat8: boolean;

    @ViewColumn()
    teachingFormat9: boolean;

    @ViewColumn()
    teachingFormat10: boolean;

    @ViewColumn()
    teachingFormat11: boolean;

    @ViewColumn()
    teachingFormat12: boolean;

    @ViewColumn()
    teachingFormat13: boolean;

    @ViewColumn()
    teachingFormat14: boolean;

    @ViewColumn()
    teachingFormat15: boolean;

    @ViewColumn()
    teachingFormat16: boolean;

    @ViewColumn()
    teachingFormat17: boolean;

    @ViewColumn()
    teachingFormat18: boolean;

    @ViewColumn()
    teachingFormat19: boolean;

    @ViewColumn()
    teachingFormat20: boolean;

    @ViewColumn()
    teachingFormat21: boolean;

    @ViewColumn()
    teachingFormat22: boolean;

    @ViewColumn()
    teachingFormat23: boolean;

    @ViewColumn()
    teachingFormat24: boolean;

    @ViewColumn()
    teachingFormat25: boolean;

    @ViewColumn()
    teachingFormat26: boolean;

    @ViewColumn()
    teachingFormatOther: boolean;

    @ViewColumn()
    teachingFormatOtherNote: string;
    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;
}
