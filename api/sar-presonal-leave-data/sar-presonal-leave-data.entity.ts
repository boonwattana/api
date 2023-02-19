import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";
@Entity('sar_presonal_leave_data')
export class SarPresonalLeaveData extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;
  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolYear?: string;

  @Column({nullable: true})
  leaveDate?: string;


  @Column({nullable: true})
  sickLeaveTimes?: number;

  @Column({nullable: true})
  sickLeaveDays?: number;

  @Column({nullable: true})
  businessLeaveTimes?: number;

  @Column({nullable: true})
  businessLeaveDays?: number;

  @Column({nullable: true})
  ordinationLeaveTimes?: number;

  @Column({nullable: true})
  ordinationLeaveDays?: number;

  @Column({nullable: true})
  deliverLeaveTimes?: number;

  @Column({nullable: true})
  deliverLeaveDays?: number;

  @Column({nullable: true})
  lateTimes?: number;

  @Column({nullable: true})
  lateLeaveDays?: number;


  @Column({nullable: true})
  schoolYearValue?: string;
}

@ViewEntity({
    name:'sar_presonal_leave_data_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
    .select("sar_presonal_leave_data.id", "id")
    .addSelect("sar_presonal_leave_data.leaveDate", "leaveDate")
    .addSelect("sar_presonal_leave_data.sickLeaveTimes", "sickLeaveTimes")
    .addSelect("sar_presonal_leave_data.sickLeaveDays", "sickLeaveDays")
    .addSelect("sar_presonal_leave_data.businessLeaveTimes", "businessLeaveTimes")
    .addSelect("sar_presonal_leave_data.businessLeaveDays", "businessLeaveDays")
    .addSelect("sar_presonal_leave_data.ordinationLeaveTimes", "ordinationLeaveTimes")
    .addSelect("sar_presonal_leave_data.ordinationLeaveDays", "ordinationLeaveDays")
    .addSelect("sar_presonal_leave_data.deliverLeaveTimes", "deliverLeaveTimes")
    .addSelect("sar_presonal_leave_data.deliverLeaveDays", "deliverLeaveDays")
    .addSelect("sar_presonal_leave_data.lateTimes", "lateTimes")
    .addSelect("sar_presonal_leave_data.lateLeaveDays", "lateLeaveDays")
    .addSelect("sar_presonal_leave_data.refId", "refId")
    .addSelect("sar_presonal_leave_data.schoolYear", "schoolYear")
    .addSelect("sar_presonal_leave_data.teacherId", "teacherId")
    .addSelect("sar_presonal_leave_data.schoolYearValue", "schoolYearValue")
    .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
  .from(SarPresonalLeaveData, "sar_presonal_leave_data")
  .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_presonal_leave_data.teacherId")
})
export class VwSarPresonalLeaveDataList {
  @ViewColumn()
    id: number;

    @ViewColumn()
    leaveDate: string;

    @ViewColumn()
    sickLeaveTimes: number;

    @ViewColumn()
    sickLeaveDays: number;

    @ViewColumn()
    businessLeaveTimes: number;

    @ViewColumn()
    businessLeaveDays: number;

    @ViewColumn()
    ordinationLeaveTimes: number;

    @ViewColumn()
    ordinationLeaveDays: number;

    @ViewColumn()
    deliverLeaveTimes: number;

    @ViewColumn()
    deliverLeaveDays: number;

    @ViewColumn()
    lateTimes: number;

    @ViewColumn()
    lateLeaveDays: number;

    
    @ViewColumn()
    refId: string;
    
    @ViewColumn()
    schoolYear: string;
    
    @ViewColumn()
    teacherId: string;
    
    @ViewColumn()
    schoolYearValue: string;
    @ViewColumn()
    teacherValue: string;

}

@ViewEntity({
  name:'sar_presonal_leave_data_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_presonal_leave_data.id", "value")
  //.addSelect("CONCAT(sar_presonal_leave_data.null , ' ' , sar_presonal_leave_data.null)", "label")
      .from(SarPresonalLeaveData, "sar_presonal_leave_data")
})
export class VwSarPresonalLeaveDataDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_presonal_leave_data_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_presonal_leave_data.id", "id")
        .addSelect("sar_presonal_leave_data.leaveDate", "leaveDate")
        .addSelect("sar_presonal_leave_data.sickLeaveTimes", "sickLeaveTimes")
        .addSelect("sar_presonal_leave_data.sickLeaveDays", "sickLeaveDays")
        .addSelect("sar_presonal_leave_data.businessLeaveTimes", "businessLeaveTimes")
        .addSelect("sar_presonal_leave_data.businessLeaveDays", "businessLeaveDays")
        .addSelect("sar_presonal_leave_data.ordinationLeaveTimes", "ordinationLeaveTimes")
        .addSelect("sar_presonal_leave_data.ordinationLeaveDays", "ordinationLeaveDays")
        .addSelect("sar_presonal_leave_data.deliverLeaveTimes", "deliverLeaveTimes")
        .addSelect("sar_presonal_leave_data.deliverLeaveDays", "deliverLeaveDays")
        .addSelect("sar_presonal_leave_data.lateTimes", "lateTimes")
        .addSelect("sar_presonal_leave_data.lateLeaveDays", "lateLeaveDays")
        .addSelect("sar_presonal_leave_data.refId", "refId")
        .addSelect("sar_presonal_leave_data.schoolYear", "schoolYear")
        .addSelect("sar_presonal_leave_data.teacherId", "teacherId")
        .addSelect("sar_presonal_leave_data.schoolYearValue", "schoolYearValue")
      .from(SarPresonalLeaveData, "sar_presonal_leave_data")
      .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_presonal_leave_data.teacherId")
})
export class VwSarPresonalLeaveDataItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    leaveDate: string;

    @ViewColumn()
    sickLeaveTimes: number;

    @ViewColumn()
    sickLeaveDays: number;

    @ViewColumn()
    businessLeaveTimes: number;

    @ViewColumn()
    businessLeaveDays: number;

    @ViewColumn()
    ordinationLeaveTimes: number;

    @ViewColumn()
    ordinationLeaveDays: number;

    @ViewColumn()
    deliverLeaveTimes: number;

    @ViewColumn()
    deliverLeaveDays: number;

    @ViewColumn()
    lateTimes: number;

    @ViewColumn()
    lateLeaveDays: number;

    
    @ViewColumn()
    refId: string;
    
    @ViewColumn()
    schoolYear: string;
    
    @ViewColumn()
    teacherId: string;
    
    @ViewColumn()
    schoolYearValue: string;
    
   
}
