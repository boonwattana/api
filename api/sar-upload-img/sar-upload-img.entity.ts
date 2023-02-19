import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_upload_img')
export class SarUploadImg extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  titleName?: string;
}
@ViewEntity({
    name:'sar_upload_img_list',
    expression: `SELECT sar_upload_img.id,
    sar_upload_img."teacherId",
    sar_upload_img."refId",
    sar_upload_img.schoolyear,
    sar_upload_img."titleName",
    concat(teacher_id.firstname, ' ', teacher_id.lastname) AS "teacherValue",
    img."images"
   FROM sar_upload_img sar_upload_img
     LEFT JOIN teacher teacher_id ON teacher_id.id = sar_upload_img."teacherId" AND teacher_id."deletedAt" IS null
     left join (select string_agg(i."imageUrl", ', ') as "images" ,i."refId"  from "IMAGES" i
  where "deletedAt" is null and i."refType" = 4
  group by "refId") as img on img."refId" = sar_upload_img.id
  WHERE sar_upload_img."deletedAt" IS null`
})
export class VwSarUploadImgList {
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
    titleName: string;
    @ViewColumn()
    images: string;
}

@ViewEntity({
  name:'sar_upload_img_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_upload_img.id", "value")
 // .addSelect("CONCAT(sar_upload_img.null , ' ' , sar_upload_img.null)", "label")
      .from(SarUploadImg, "sar_upload_img")
})
export class VwSarUploadImgDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_upload_img_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_upload_img.id", "id")
        .addSelect("sar_upload_img.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_upload_img.refId", "refId")
        .addSelect("sar_upload_img.schoolyear", "schoolyear")
        .addSelect("sar_upload_img.titleName", "titleName")
      .from(SarUploadImg, "sar_upload_img")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_upload_img.teacherId")
})
export class VwSarUploadImgItem {

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
    titleName: string;
}
