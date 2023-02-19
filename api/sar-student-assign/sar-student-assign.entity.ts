import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_student_assign')
export class SarStudentAssign extends BasicData {
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
  timesCount?: number;

  @Column({nullable: true})
  sourceName?: string;
}
@ViewEntity({
    name:'sar_student_assign_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_student_assign.id", "id")
        .addSelect("sar_student_assign.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_student_assign.refId", "refId")
        .addSelect("sar_student_assign.schoolyear", "schoolyear")
        .addSelect("sar_student_assign.name", "name")
        .addSelect("sar_student_assign.timesCount", "timesCount")
        .addSelect("sar_student_assign.sourceName", "sourceName")
        .from(SarStudentAssign, "sar_student_assign")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_student_assign.teacherId")
})
export class VwSarStudentAssignList {
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
    timesCount: number;

    @ViewColumn()
    sourceName: string;
}

@ViewEntity({
  name:'sar_student_assign_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_student_assign.id", "value")
//  .addSelect("CONCAT(sar_student_assign.null , ' ' , sar_student_assign.null)", "label")
      .from(SarStudentAssign, "sar_student_assign")
})
export class VwSarStudentAssignDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_student_assign_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_student_assign.id", "id")
        .addSelect("sar_student_assign.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_student_assign.refId", "refId")
        .addSelect("sar_student_assign.schoolyear", "schoolyear")
        .addSelect("sar_student_assign.name", "name")
        .addSelect("sar_student_assign.timesCount", "timesCount")
        .addSelect("sar_student_assign.sourceName", "sourceName")
      .from(SarStudentAssign, "sar_student_assign")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_student_assign.teacherId")
})
export class VwSarStudentAssignItem {

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
    timesCount: number;

    @ViewColumn()
    sourceName: string;
}
