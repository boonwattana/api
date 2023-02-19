import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_performing_special_duties')
export class SarPerformingSpecialDuties extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  group1Text1?: string;

  @Column({nullable: true})
  group1Text2?: string;

  @Column({nullable: true})
  group1Text3?: string;

  @Column({nullable: true})
  group1Result?: number;

  @Column({nullable: true})
  group2Text1?: string;

  @Column({nullable: true})
  group2Text2?: string;

  @Column({nullable: true})
  group2Text3?: string;

  @Column({nullable: true})
  group2Text4?: string;

  @Column({nullable: true})
  group2Text5?: string;

  @Column({nullable: true})
  group2Result?: number;

  @Column({nullable: true})
  group3Text1?: string;

  @Column({nullable: true})
  group3Text2?: string;

  @Column({nullable: true})
  group3Result?: number;

  @Column({nullable: true})
  group4Text1?: string;

  @Column({nullable: true})
  group4Text2?: string;

  @Column({nullable: true})
  group4Result?: number;

  @Column({nullable: true})
  group4Text3?: string;

    @Column({nullable: true})
    group1Text4?: string;
      @Column({nullable: true})
    group1Text5?: string;
      @Column({nullable: true})
    group5Text1?: string;
      @Column({nullable: true})
    group5Text2?: string;
    @Column({nullable: true})
    group5Result?:number
}
@ViewEntity({
    name:'sar_performing_special_duties_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_performing_special_duties.id", "id")
        .addSelect("sar_performing_special_duties.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_performing_special_duties.refId", "refId")
        .addSelect("sar_performing_special_duties.schoolyear", "schoolyear")
        .addSelect("sar_performing_special_duties.group1Text1", "group1Text1")
        .addSelect("sar_performing_special_duties.group1Text2", "group1Text2")
        .addSelect("sar_performing_special_duties.group1Text3", "group1Text3")
        .addSelect("sar_performing_special_duties.group1Result", "group1Result")
        .addSelect("sar_performing_special_duties.group2Text1", "group2Text1")
        .addSelect("sar_performing_special_duties.group2Text2", "group2Text2")
        .addSelect("sar_performing_special_duties.group2Text3", "group2Text3")
        .addSelect("sar_performing_special_duties.group2Text4", "group2Text4")
        .addSelect("sar_performing_special_duties.group2Text5", "group2Text5")
        .addSelect("sar_performing_special_duties.group2Result", "group2Result")
        .addSelect("sar_performing_special_duties.group3Text1", "group3Text1")
        .addSelect("sar_performing_special_duties.group3Text2", "group3Text2")
        .addSelect("sar_performing_special_duties.group3Result", "group3Result")
        .addSelect("sar_performing_special_duties.group4Text1", "group4Text1")
        .addSelect("sar_performing_special_duties.group4Text2", "group4Text2")
        .addSelect("sar_performing_special_duties.group4Result", "group4Result")
        .addSelect("sar_performing_special_duties.group4Text3", "group4Text3")
        .addSelect("sar_performing_special_duties.group5Result", "group5Result")
        .addSelect("sar_performing_special_duties.group5Text2", "group5Text2")
        .addSelect("sar_performing_special_duties.group5Text1", "group5Text1")
        .addSelect("sar_performing_special_duties.group1Text5", "group1Text5")
        .addSelect("sar_performing_special_duties.group1Text4", "group1Text4")
        .from(SarPerformingSpecialDuties, "sar_performing_special_duties")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_performing_special_duties.teacherId")
})
export class VwSarPerformingSpecialDutiesList {
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
    group1Text1: string;

    @ViewColumn()
    group1Text2: string;

    @ViewColumn()
    group1Text3: string;

    @ViewColumn()
    group1Result: number;

    @ViewColumn()
    group2Text1: string;

    @ViewColumn()
    group2Text2: string;

    @ViewColumn()
    group2Text3: string;

    @ViewColumn()
    group2Text4: string;

    @ViewColumn()
    group2Text5: string;

    @ViewColumn()
    group2Result: number;

    @ViewColumn()
    group3Text1: string;

    @ViewColumn()
    group3Text2: string;

    @ViewColumn()
    group3Result: number;

    @ViewColumn()
    group4Text1: string;

    @ViewColumn()
    group4Text2: string;

    @ViewColumn()
    group4Result: number;

    @ViewColumn()
    group4Text3: string;

    @ViewColumn()
    group1Text5: string;
    @ViewColumn()
    group1Text4: string;
    @ViewColumn()
    group5Text1: string;
    @ViewColumn()
    group5Text2: string;
    @ViewColumn()
    group5Result: number;
}

@ViewEntity({
  name:'sar_performing_special_duties_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_performing_special_duties.id", "value")
 // .addSelect("CONCAT(sar_performing_special_duties.null , ' ' , sar_performing_special_duties.null)", "label")
      .from(SarPerformingSpecialDuties, "sar_performing_special_duties")
})
export class VwSarPerformingSpecialDutiesDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_performing_special_duties_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_performing_special_duties.id", "id")
        .addSelect("sar_performing_special_duties.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_performing_special_duties.refId", "refId")
        .addSelect("sar_performing_special_duties.schoolyear", "schoolyear")
        .addSelect("sar_performing_special_duties.group1Text1", "group1Text1")
        .addSelect("sar_performing_special_duties.group1Text2", "group1Text2")
        .addSelect("sar_performing_special_duties.group1Text3", "group1Text3")
        .addSelect("sar_performing_special_duties.group1Result", "group1Result")
        .addSelect("sar_performing_special_duties.group2Text1", "group2Text1")
        .addSelect("sar_performing_special_duties.group2Text2", "group2Text2")
        .addSelect("sar_performing_special_duties.group2Text3", "group2Text3")
        .addSelect("sar_performing_special_duties.group2Text4", "group2Text4")
        .addSelect("sar_performing_special_duties.group2Text5", "group2Text5")
        .addSelect("sar_performing_special_duties.group2Result", "group2Result")
        .addSelect("sar_performing_special_duties.group3Text1", "group3Text1")
        .addSelect("sar_performing_special_duties.group3Text2", "group3Text2")
        .addSelect("sar_performing_special_duties.group3Result", "group3Result")
        .addSelect("sar_performing_special_duties.group4Text1", "group4Text1")
        .addSelect("sar_performing_special_duties.group4Text2", "group4Text2")
        .addSelect("sar_performing_special_duties.group4Result", "group4Result")
        .addSelect("sar_performing_special_duties.group4Text3", "group4Text3")
        .addSelect("sar_performing_special_duties.group5Result", "group5Result")
        .addSelect("sar_performing_special_duties.group5Text2", "group5Text2")
        .addSelect("sar_performing_special_duties.group5Text1", "group5Text1")
        .addSelect("sar_performing_special_duties.group1Text5", "group1Text5")
        .addSelect("sar_performing_special_duties.group1Text4", "group1Text4")
      .from(SarPerformingSpecialDuties, "sar_performing_special_duties")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_performing_special_duties.teacherId")
})
export class VwSarPerformingSpecialDutiesItem {

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
    group1Text1: string;

    @ViewColumn()
    group1Text2: string;

    @ViewColumn()
    group1Text3: string;

    @ViewColumn()
    group1Result: number;

    @ViewColumn()
    group2Text1: string;

    @ViewColumn()
    group2Text2: string;

    @ViewColumn()
    group2Text3: string;

    @ViewColumn()
    group2Text4: string;

    @ViewColumn()
    group2Text5: string;

    @ViewColumn()
    group2Result: number;

    @ViewColumn()
    group3Text1: string;

    @ViewColumn()
    group3Text2: string;

    @ViewColumn()
    group3Result: number;

    @ViewColumn()
    group4Text1: string;

    @ViewColumn()
    group4Text2: string;

    @ViewColumn()
    group4Result: number;

    @ViewColumn()
    group4Text3: string;

    @ViewColumn()
    group1Text5: string;
    @ViewColumn()
    group1Text4: string;
    @ViewColumn()
    group5Text1: string;
    @ViewColumn()
    group5Text2: string;
    @ViewColumn()
    group5Result: number;
}
