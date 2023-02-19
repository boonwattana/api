import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";
import { Curriculum } from "src/api/curriculum/curriculum.entity";
import { PractitionerLevel } from "src/api/practitioner-level/practitioner-level.entity";
import { Practicle } from "../practicle/practicle.entity";

@Entity('teachers_develop')
export class TeachersDevelop extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

   @Column({nullable: true})
  teacherId?: number;

   @Column({nullable: true})
  educationYear?: string;

   @Column({nullable: true})
  subjectName?: string;

   @Column({nullable: true})
  curriculumId?: number;

   @Column({nullable: true})
  practicleId?: number;

   @Column({nullable: true})
  totalHour?: number;

   @Column({nullable: true})
  institutionName?: string;
}
@ViewEntity({
    name:'teachers_develop_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("teachers_develop.id", "id")
        .addSelect("teachers_develop.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("teachers_develop.educationYear", "educationYear")
        .addSelect("teachers_develop.subjectName", "subjectName")
        .addSelect("teachers_develop.curriculumId", "curriculumId")
        .addSelect("curriculum_id.curriculumName ", "curriculumValue")
        .addSelect("teachers_develop.practicleId", "practicleId")
        .addSelect("practitioner_level_id.name", "practicleValue")
        .addSelect("teachers_develop.totalHour", "totalHour")
        .addSelect("teachers_develop.institutionName", "institutionName")
        .from(TeachersDevelop, "teachers_develop")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = teachers_develop.teacherId")
        .leftJoin(Curriculum, "curriculum_id","curriculum_id.Id = teachers_develop.curriculumId")
        .leftJoin(Practicle, "practitioner_level_id","practitioner_level_id.Id = teachers_develop.practicleId")
})
export class VwTeachersDevelopList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    educationYear: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    curriculumId: number;

    @ViewColumn()
    curriculumValue: string;

    @ViewColumn()
    practicleId: number;

    @ViewColumn()
    practicleValue: string;

    @ViewColumn()
    totalHour: number;

    @ViewColumn()
    institutionName: string;
}

@ViewEntity({
  name:'teachers_develop_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("teachers_develop.id", "value")
  .addSelect("CONCAT(teachers_develop.subjectName , ' ' , teachers_develop.educationYear)", "label")
      .from(TeachersDevelop, "teachers_develop")
})
export class VwTeachersDevelopDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'teachers_develop_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("teachers_develop.id", "id")
        .addSelect("teachers_develop.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("teachers_develop.educationYear", "educationYear")
        .addSelect("teachers_develop.subjectName", "subjectName")
        .addSelect("teachers_develop.curriculumId", "curriculumId")
        .addSelect("curriculum_id.curriculumName", "curriculumValue")
        .addSelect("teachers_develop.practicleId", "practicleId")
        .addSelect("practitioner_level_id.name", "practicleValue")
        .addSelect("teachers_develop.totalHour", "totalHour")
        .addSelect("teachers_develop.institutionName", "institutionName")
      .from(TeachersDevelop, "teachers_develop")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = teachers_develop.teacherId")
        .leftJoin(Curriculum, "curriculum_id","curriculum_id.Id = teachers_develop.curriculumId")
        .leftJoin(Practicle, "practitioner_level_id","practitioner_level_id.Id = teachers_develop.practicleId")
})
export class VwTeachersDevelopItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    educationYear: string;

    @ViewColumn()
    subjectName: string;

    @ViewColumn()
    curriculumId: number;

    @ViewColumn()
    curriculumValue: string;

    @ViewColumn()
    practicleId: number;

    @ViewColumn()
    practicleValue: string;

    @ViewColumn()
    totalHour: number;

    @ViewColumn()
    institutionName: string;
}
