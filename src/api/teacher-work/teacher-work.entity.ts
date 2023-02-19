import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('teacher_work')
export class TeacherWork extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

   @Column({nullable: true})
  workYear?: string;

   @Column({nullable: true})
  institutionName?: string;

   @Column({nullable: true})
  positionName?: string;

   @Column({nullable: true})
  status?: number;
}
@ViewEntity({
    name:'teacher_work_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("teacher_work.id", "id")
        .addSelect("teacher_work.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("teacher_work.workYear", "workYear")
        .addSelect("teacher_work.institutionName", "institutionName")
        .addSelect("teacher_work.positionName", "positionName")
        .addSelect("teacher_work.status", "status")
        .from(TeacherWork, "teacher_work")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = teacher_work.teacherId")
})
export class VwTeacherWorkList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    workYear: string;

    @ViewColumn()
    institutionName: string;

    @ViewColumn()
    positionName: string;

    @ViewColumn()
    status: number;
}

@ViewEntity({
  name:'teacher_work_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("teacher_work.id", "value")
  .addSelect("teacher_work.positionName", "label")
      .from(TeacherWork, "teacher_work")
})
export class VwTeacherWorkDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'teacher_work_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("teacher_work.id", "id")
        .addSelect("teacher_work.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("teacher_work.workYear", "workYear")
        .addSelect("teacher_work.institutionName", "institutionName")
        .addSelect("teacher_work.positionName", "positionName")
        .addSelect("teacher_work.status", "status")
      .from(TeacherWork, "teacher_work")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = teacher_work.teacherId")
})
export class VwTeacherWorkItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    workYear: string;

    @ViewColumn()
    institutionName: string;

    @ViewColumn()
    positionName: string;

    @ViewColumn()
    status: number;
}
