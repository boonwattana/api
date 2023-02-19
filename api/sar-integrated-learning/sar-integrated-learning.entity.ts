import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_integrated_learning')
export class SarIntegratedLearning extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  hourCount?: number;

  @Column({nullable: true})
  mediaProductionName?: string;
  @Column({nullable: true})
  mediaProductionUnit?: string;
}
@ViewEntity({
    name:'sar_integrated_learning_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_integrated_learning.id", "id")
        .addSelect("sar_integrated_learning.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_integrated_learning.refId", "refId")
        .addSelect("sar_integrated_learning.schoolyear", "schoolyear")
        .addSelect("sar_integrated_learning.hourCount", "hourCount")
        .addSelect("sar_integrated_learning.mediaProductionName", "mediaProductionName")
        .addSelect("sar_integrated_learning.mediaProductionUnit", "mediaProductionUnit")
        .from(SarIntegratedLearning, "sar_integrated_learning")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_integrated_learning.teacherId")
})
export class VwSarIntegratedLearningList {
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
    hourCount: number;
    @ViewColumn()
    mediaProductionName: string;
    @ViewColumn()
    mediaProductionUnit: string;
}

@ViewEntity({
  name:'sar_integrated_learning_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_integrated_learning.id", "value")
  //.addSelect("CONCAT(sar_integrated_learning.null , ' ' , sar_integrated_learning.null)", "label")
      .from(SarIntegratedLearning, "sar_integrated_learning")
})
export class VwSarIntegratedLearningDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_integrated_learning_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_integrated_learning.id", "id")
        .addSelect("sar_integrated_learning.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_integrated_learning.refId", "refId")
        .addSelect("sar_integrated_learning.schoolyear", "schoolyear")
        .addSelect("sar_integrated_learning.hourCount", "hourCount")
        .addSelect("sar_integrated_learning.mediaProductionName", "mediaProductionName")
        .addSelect("sar_integrated_learning.mediaProductionUnit", "mediaProductionUnit")
      .from(SarIntegratedLearning, "sar_integrated_learning")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_integrated_learning.teacherId")
})
export class VwSarIntegratedLearningItem {

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
    hourCount: number;

    @ViewColumn()
    mediaProductionName: string;

    @ViewColumn()
    mediaProductionUnit: string;

}
