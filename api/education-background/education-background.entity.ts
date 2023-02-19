import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('education_background')
export class EducationBackground extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

   @Column({nullable: true})
  teacherId?: number;

   @Column({nullable: true})
  educationId?: number;

   @Column({nullable: true})
  educationMajor?: string;

   @Column({nullable: true})
  educationShotNameTh?: string;

   @Column({nullable: true})
  educationShotNameEn?: string;

   @Column({nullable: true})
  educationYear?: string;

   @Column({nullable: true})
  institutionName?: string;

   @Column({nullable: true})
  status?: number;
  @Column({nullable: true})
  otherEducationText?: string;
  
}
@ViewEntity({
    name:'education_background_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("education_background.id", "id")
        .addSelect("education_background.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("education_background.educationId", "educationId")
        .addSelect("education_background.educationMajor", "educationMajor")
        .addSelect("education_background.educationShotNameTh", "educationShotNameTh")
        .addSelect("education_background.educationShotNameEn", "educationShotNameEn")
        .addSelect("education_background.educationYear", "educationYear")
        .addSelect("education_background.institutionName", "institutionName")
        .from(EducationBackground, "education_background")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = education_background.teacherId")
})
export class VwEducationBackgroundList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    educationId: number;

    @ViewColumn()
    educationMajor: string;

    @ViewColumn()
    educationShotNameTh: string;

    @ViewColumn()
    educationShotNameEn: string;

    @ViewColumn()
    educationYear: string;

    @ViewColumn()
    institutionName: string;
}

@ViewEntity({
  name:'education_background_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("education_background.id", "value")
  .addSelect("CONCAT(education_background.educationShotNameTh , ' ' , education_background.educationShotNameEn)", "label")
      .from(EducationBackground, "education_background")
})
export class VwEducationBackgroundDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'education_background_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("education_background.id", "id")
        .addSelect("education_background.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("education_background.educationId", "educationId")
        .addSelect("education_background.educationMajor", "educationMajor")
        .addSelect("education_background.educationShotNameTh", "educationShotNameTh")
        .addSelect("education_background.educationShotNameEn", "educationShotNameEn")
        .addSelect("education_background.educationYear", "educationYear")
        .addSelect("education_background.institutionName", "institutionName")
        .addSelect("education_background.status", "status")
        .addSelect("education_background.otherEducationText", "otherEducationText")
      .from(EducationBackground, "education_background")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = education_background.teacherId")
})
export class VwEducationBackgroundItem {
  @ViewColumn()
  otherEducationText
  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    educationId: number;

    @ViewColumn()
    educationMajor: string;

    @ViewColumn()
    educationShotNameTh: string;

    @ViewColumn()
    educationShotNameEn: string;

    @ViewColumn()
    educationYear: string;

    @ViewColumn()
    institutionName: string;

    @ViewColumn()
    status: number;
}
