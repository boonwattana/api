import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_presonal_data')
export class SarPresonalData extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolYear?: string;

  
  @Column({nullable: true})
  positionNumber?: string;
  
  @Column({nullable: true})
  salary?: string;
  
  @Column({nullable: true})
  practitionerMoney?: string;
  
  @Column({nullable: true})
  affiliation?: string;

}
@ViewEntity({
    name:'sar_presonal_data_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_presonal_data.id", "id")
        .addSelect("sar_presonal_data.teacherId", "teacherId")
        .addSelect("sar_presonal_data.refId", "refId")
        .addSelect("sar_presonal_data.schoolYear", "schoolYear")
        .addSelect("sar_presonal_data.positionNumber", "positionNumber")
        .addSelect("sar_presonal_data.salary", "salary")
        .addSelect("sar_presonal_data.practitionerMoney", "practitionerMoney")
        .addSelect("sar_presonal_data.affiliation", "affiliation")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
      .from(SarPresonalData, "sar_presonal_data")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_presonal_data.teacherId")
})
export class VwSarPresonalDataList {
  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolYear: string;

    @ViewColumn()
    positionNumber: string;
    @ViewColumn()
    salary: string;
    @ViewColumn()
    practitionerMoney: string;
    @ViewColumn()
    affiliation: string;
}

@ViewEntity({
  name:'sar_presonal_data_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_presonal_data.id", "value")
  .addSelect("CONCAT('SAR-',sar_presonal_data.id)", "label")
      .from(SarPresonalData, "sar_presonal_data")
})
export class VwSarPresonalDataDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_presonal_data_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_presonal_data.id", "id")
        .addSelect("sar_presonal_data.teacherId", "teacherId")
        .addSelect("sar_presonal_data.refId", "refId")
        .addSelect("sar_presonal_data.schoolYear", "schoolYear")
        .addSelect("sar_presonal_data.positionNumber", "positionNumber")
        .addSelect("sar_presonal_data.salary", "salary")
        .addSelect("sar_presonal_data.practitionerMoney", "practitionerMoney")
        .addSelect("sar_presonal_data.affiliation", "affiliation")
        .addSelect("CONCAT(teacher_id.firstName,' ',teacher_id.lastName)", "teacherValue")
      .from(SarPresonalData, "sar_presonal_data")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_presonal_data.teacherId")
})
export class VwSarPresonalDataItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolYear: string;

    @ViewColumn()
    positionNumber: string;
    @ViewColumn()
    salary: string;
    @ViewColumn()
    practitionerMoney: string;
    @ViewColumn()
    affiliation: string;
   
}
