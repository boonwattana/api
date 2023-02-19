import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_advise_class')
export class SarAdviseClass extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  totalStudent?: number;

  @Column({nullable: true})
  class?: string;

  @Column({nullable: true})
  totalBoy?: number;

  @Column({nullable: true})
  totalGirl?: number;
}
@ViewEntity({
    name:'sar_advise_class_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_advise_class.id", "id")
        .addSelect("sar_advise_class.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_advise_class.refId", "refId")
        .addSelect("sar_advise_class.schoolyear", "schoolyear")
        .addSelect("sar_advise_class.totalStudent", "totalStudent")
        .addSelect("sar_advise_class.class", "class")
        .addSelect("sar_advise_class.totalBoy", "totalBoy")
        .addSelect("sar_advise_class.totalGirl", "totalGirl")
        .from(SarAdviseClass, "sar_advise_class")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_advise_class.teacherId")
})
export class VwSarAdviseClassList {
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
    totalStudent: number;

    @ViewColumn()
    class: string;

    @ViewColumn()
    totalBoy: number;

    @ViewColumn()
    totalGirl: number;
}

@ViewEntity({
  name:'sar_advise_class_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_advise_class.id", "value")
//  .addSelect("CONCAT(sar_advise_class.null , ' ' , sar_advise_class.null)", "label")
      .from(SarAdviseClass, "sar_advise_class")
})
export class VwSarAdviseClassDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_advise_class_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_advise_class.id", "id")
        .addSelect("sar_advise_class.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_advise_class.refId", "refId")
        .addSelect("sar_advise_class.schoolyear", "schoolyear")
        .addSelect("sar_advise_class.totalStudent", "totalStudent")
        .addSelect("sar_advise_class.class", "class")
        .addSelect("sar_advise_class.totalBoy", "totalBoy")
        .addSelect("sar_advise_class.totalGirl", "totalGirl")
      .from(SarAdviseClass, "sar_advise_class")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_advise_class.teacherId")
})
export class VwSarAdviseClassItem {

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
    totalStudent: number;

    @ViewColumn()
    class: string;

    @ViewColumn()
    totalBoy: number;

    @ViewColumn()
    totalGirl: number;
}
