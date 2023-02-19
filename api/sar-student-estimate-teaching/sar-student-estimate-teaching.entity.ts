import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_student_estimate_teaching')
export class SarStudentEstimateTeaching extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;
   @Column({nullable: true})
  choice1_5P?: number;
   @Column({nullable: true})
  choice1_4P?: number;
   @Column({nullable: true})
  choice1_3P?: number;
   @Column({nullable: true})
  choice1_2P?: number;
   @Column({nullable: true})
  choice1_1P?: number;
   @Column({nullable: true})
   @Column({nullable: true})
  choice2_5P?: number;
   @Column({nullable: true})
  choice3_5P?: number;
   @Column({nullable: true})
  choice4_5P?: number;
   @Column({nullable: true})
  choice5_5P?: number;
   @Column({nullable: true})
  choice6_5P?: number;
   @Column({nullable: true})
  choice7_5P?: number;
   @Column({nullable: true})
  choice8_5P?: number;
   @Column({nullable: true})
  choice9_5P?: number;
   @Column({nullable: true})
  choice10_5P?: number;
   @Column({nullable: true})
  choice11_5P?: number;
   @Column({nullable: true})
  choice12_5P?: number;
   @Column({nullable: true})
  choice13_5P?: number;
   @Column({nullable: true})
  choice14_5P?: number;
   @Column({nullable: true})
  choice15_5P?: number;
   @Column({nullable: true})
  choice16_5P?: number;
   @Column({nullable: true})
  choice17_5P?: number;
   @Column({nullable: true})
  choice18_5P?: number;
   @Column({nullable: true})
  choice19_5P?: number;
   @Column({nullable: true})
  choice20_5P?: number;
   @Column({nullable: true})
  choice2_4P?: number;
   @Column({nullable: true})
  choice3_4P?: number;
   @Column({nullable: true})
  choice4_4P?: number;
   @Column({nullable: true})
  choice5_4P?: number;
   @Column({nullable: true})
  choice6_4P?: number;
   @Column({nullable: true})
  choice7_4P?: number;
   @Column({nullable: true})
  choice8_4P?: number;
   @Column({nullable: true})
  choice9_4P?: number;
   @Column({nullable: true})
  choice10_4P?: number;
   @Column({nullable: true})
  choice11_4P?: number;
   @Column({nullable: true})
  choice12_4P?: number;
   @Column({nullable: true})
  choice13_4P?: number;
   @Column({nullable: true})
  choice14_4P?: number;
   @Column({nullable: true})
  choice15_4P?: number;
   @Column({nullable: true})
  choice16_4P?: number;
   @Column({nullable: true})
  choice17_4P?: number;
   @Column({nullable: true})
  choice18_4P?: number;
   @Column({nullable: true})
  choice19_4P?: number;
   @Column({nullable: true})
  choice20_4P?: number;
   @Column({nullable: true})
  choice2_3P?: number;
   @Column({nullable: true})
  choice3_3P?: number;
   @Column({nullable: true})
  choice4_3P?: number;
   @Column({nullable: true})
  choice5_3P?: number;
   @Column({nullable: true})
  choice6_3P?: number;
   @Column({nullable: true})
  choice7_3P?: number;
   @Column({nullable: true})
  choice8_3P?: number;
   @Column({nullable: true})
  choice9_3P?: number;
   @Column({nullable: true})
  choice10_3P?: number;
   @Column({nullable: true})
  choice11_3P?: number;
   @Column({nullable: true})
  choice12_3P?: number;
   @Column({nullable: true})
  choice13_3P?: number;
   @Column({nullable: true})
  choice14_3P?: number;
   @Column({nullable: true})
  choice15_3P?: number;
   @Column({nullable: true})
  choice16_3P?: number;
   @Column({nullable: true})
  choice17_3P?: number;
   @Column({nullable: true})
  choice18_3P?: number;
   @Column({nullable: true})
  choice19_3P?: number;
   @Column({nullable: true})
  choice20_3P?: number;
   @Column({nullable: true})
  choice2_2P?: number;
   @Column({nullable: true})
  choice3_2P?: number;
   @Column({nullable: true})
  choice4_2P?: number;
   @Column({nullable: true})
  choice5_2P?: number;
   @Column({nullable: true})
  choice6_2P?: number;
   @Column({nullable: true})
  choice7_2P?: number;
   @Column({nullable: true})
  choice8_2P?: number;
   @Column({nullable: true})
  choice9_2P?: number;
   @Column({nullable: true})
  choice10_2P?: number;
   @Column({nullable: true})
  choice11_2P?: number;
   @Column({nullable: true})
  choice12_2P?: number;
   @Column({nullable: true})
  choice13_2P?: number;
   @Column({nullable: true})
  choice14_2P?: number;
   @Column({nullable: true})
  choice15_2P?: number;
   @Column({nullable: true})
  choice16_2P?: number;
   @Column({nullable: true})
  choice17_2P?: number;
   @Column({nullable: true})
  choice18_2P?: number;
   @Column({nullable: true})
  choice19_2P?: number;
   @Column({nullable: true})
  choice20_2P?: number;
   @Column({nullable: true})
  choice2_1P?: number;
   @Column({nullable: true})
  choice3_1P?: number;
   @Column({nullable: true})
  choice4_1P?: number;
   @Column({nullable: true})
  choice5_1P?: number;
   @Column({nullable: true})
  choice6_1P?: number;
   @Column({nullable: true})
  choice7_1P?: number;
   @Column({nullable: true})
  choice8_1P?: number;
   @Column({nullable: true})
  choice9_1P?: number;
   @Column({nullable: true})
  choice10_1P?: number;
   @Column({nullable: true})
  choice11_1P?: number;
   @Column({nullable: true})
  choice12_1P?: number;
   @Column({nullable: true})
  choice13_1P?: number;
   @Column({nullable: true})
  choice14_1P?: number;
   @Column({nullable: true})
  choice15_1P?: number;
   @Column({nullable: true})
  choice16_1P?: number;
   @Column({nullable: true})
  choice17_1P?: number;
   @Column({nullable: true})
  choice18_1P?: number;
   @Column({nullable: true})
  choice19_1P?: number;
   @Column({nullable: true})
  choice20_1P?: number;
  @Column({nullable: true})
  result?: number;
}
@ViewEntity({
    name:'sar_student_estimate_teaching_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_student_estimate_teaching.id", "id")
        .addSelect("sar_student_estimate_teaching.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_student_estimate_teaching.refId", "refId")
        .addSelect("sar_student_estimate_teaching.schoolyear", "schoolyear")
        .addSelect("sar_student_estimate_teaching.choice1_5P", "choice1_5P")
        .addSelect("sar_student_estimate_teaching.choice1_4P", "choice1_4P")
        .addSelect("sar_student_estimate_teaching.choice1_3P", "choice1_3P")
        .addSelect("sar_student_estimate_teaching.choice1_2P", "choice1_2P")
        .addSelect("sar_student_estimate_teaching.choice1_1P", "choice1_1P")

        .addSelect("sar_student_estimate_teaching.choice2_5P", "choice2_5P")
        .addSelect("sar_student_estimate_teaching.choice2_4P", "choice2_4P")
        .addSelect("sar_student_estimate_teaching.choice2_3P", "choice2_3P")
        .addSelect("sar_student_estimate_teaching.choice2_2P", "choice2_2P")
        .addSelect("sar_student_estimate_teaching.choice2_1P", "choice2_1P")

        .addSelect("sar_student_estimate_teaching.choice3_5P", "choice3_5P")
        .addSelect("sar_student_estimate_teaching.choice3_4P", "choice3_4P")
        .addSelect("sar_student_estimate_teaching.choice3_3P", "choice3_3P")
        .addSelect("sar_student_estimate_teaching.choice3_2P", "choice3_2P")
        .addSelect("sar_student_estimate_teaching.choice3_1P", "choice3_1P")

        .addSelect("sar_student_estimate_teaching.choice4_5P", "choice4_5P")
        .addSelect("sar_student_estimate_teaching.choice4_4P", "choice4_4P")
        .addSelect("sar_student_estimate_teaching.choice4_3P", "choice4_3P")
        .addSelect("sar_student_estimate_teaching.choice4_2P", "choice4_2P")
        .addSelect("sar_student_estimate_teaching.choice4_1P", "choice4_1P")

        .addSelect("sar_student_estimate_teaching.choice5_5P", "choice5_5P")
        .addSelect("sar_student_estimate_teaching.choice5_4P", "choice5_4P")
        .addSelect("sar_student_estimate_teaching.choice5_3P", "choice5_3P")
        .addSelect("sar_student_estimate_teaching.choice5_2P", "choice5_2P")
        .addSelect("sar_student_estimate_teaching.choice5_1P", "choice5_1P")

        .addSelect("sar_student_estimate_teaching.choice6_5P", "choice6_5P")
        .addSelect("sar_student_estimate_teaching.choice6_4P", "choice6_4P")
        .addSelect("sar_student_estimate_teaching.choice6_3P", "choice6_3P")
        .addSelect("sar_student_estimate_teaching.choice6_2P", "choice6_2P")
        .addSelect("sar_student_estimate_teaching.choice6_1P", "choice6_1P")

        .addSelect("sar_student_estimate_teaching.choice7_5P", "choice7_5P")
        .addSelect("sar_student_estimate_teaching.choice7_4P", "choice7_4P")
        .addSelect("sar_student_estimate_teaching.choice7_3P", "choice7_3P")
        .addSelect("sar_student_estimate_teaching.choice7_2P", "choice7_2P")
        .addSelect("sar_student_estimate_teaching.choice7_1P", "choice7_1P")

        .addSelect("sar_student_estimate_teaching.choice8_5P", "choice8_5P")
        .addSelect("sar_student_estimate_teaching.choice8_4P", "choice8_4P")
        .addSelect("sar_student_estimate_teaching.choice8_3P", "choice8_3P")
        .addSelect("sar_student_estimate_teaching.choice8_2P", "choice8_2P")
        .addSelect("sar_student_estimate_teaching.choice8_1P", "choice8_1P")

        .addSelect("sar_student_estimate_teaching.choice9_5P", "choice9_5P")
        .addSelect("sar_student_estimate_teaching.choice9_4P", "choice9_4P")
        .addSelect("sar_student_estimate_teaching.choice9_3P", "choice9_3P")
        .addSelect("sar_student_estimate_teaching.choice9_2P", "choice9_2P")
        .addSelect("sar_student_estimate_teaching.choice9_1P", "choice9_1P")

        .addSelect("sar_student_estimate_teaching.choice10_5P", "choice10_5P")
        .addSelect("sar_student_estimate_teaching.choice10_4P", "choice10_4P")
        .addSelect("sar_student_estimate_teaching.choice10_3P", "choice10_3P")
        .addSelect("sar_student_estimate_teaching.choice10_2P", "choice10_2P")
        .addSelect("sar_student_estimate_teaching.choice10_1P", "choice10_1P")

        .addSelect("sar_student_estimate_teaching.choice11_5P", "choice11_5P")
        .addSelect("sar_student_estimate_teaching.choice11_4P", "choice11_4P")
        .addSelect("sar_student_estimate_teaching.choice11_3P", "choice11_3P")
        .addSelect("sar_student_estimate_teaching.choice11_2P", "choice11_2P")
        .addSelect("sar_student_estimate_teaching.choice11_1P", "choice11_1P")

        .addSelect("sar_student_estimate_teaching.choice12_5P", "choice12_5P")
        .addSelect("sar_student_estimate_teaching.choice12_4P", "choice12_4P")
        .addSelect("sar_student_estimate_teaching.choice12_3P", "choice12_3P")
        .addSelect("sar_student_estimate_teaching.choice12_2P", "choice12_2P")
        .addSelect("sar_student_estimate_teaching.choice12_1P", "choice12_1P")

        .addSelect("sar_student_estimate_teaching.choice13_5P", "choice13_5P")
        .addSelect("sar_student_estimate_teaching.choice13_4P", "choice13_4P")
        .addSelect("sar_student_estimate_teaching.choice13_3P", "choice13_3P")
        .addSelect("sar_student_estimate_teaching.choice13_2P", "choice13_2P")
        .addSelect("sar_student_estimate_teaching.choice13_1P", "choice13_1P")

        .addSelect("sar_student_estimate_teaching.choice14_5P", "choice14_5P")
        .addSelect("sar_student_estimate_teaching.choice14_4P", "choice14_4P")
        .addSelect("sar_student_estimate_teaching.choice14_3P", "choice14_3P")
        .addSelect("sar_student_estimate_teaching.choice14_2P", "choice14_2P")
        .addSelect("sar_student_estimate_teaching.choice14_1P", "choice14_1P")

        .addSelect("sar_student_estimate_teaching.choice15_5P", "choice15_5P")
        .addSelect("sar_student_estimate_teaching.choice15_4P", "choice15_4P")
        .addSelect("sar_student_estimate_teaching.choice15_3P", "choice15_3P")
        .addSelect("sar_student_estimate_teaching.choice15_2P", "choice15_2P")
        .addSelect("sar_student_estimate_teaching.choice15_1P", "choice15_1P")

        .addSelect("sar_student_estimate_teaching.choice16_5P", "choice16_5P")
        .addSelect("sar_student_estimate_teaching.choice16_4P", "choice16_4P")
        .addSelect("sar_student_estimate_teaching.choice16_3P", "choice16_3P")
        .addSelect("sar_student_estimate_teaching.choice16_2P", "choice16_2P")
        .addSelect("sar_student_estimate_teaching.choice16_1P", "choice16_1P")

        .addSelect("sar_student_estimate_teaching.choice17_5P", "choice17_5P")
        .addSelect("sar_student_estimate_teaching.choice17_4P", "choice17_4P")
        .addSelect("sar_student_estimate_teaching.choice17_3P", "choice17_3P")
        .addSelect("sar_student_estimate_teaching.choice17_2P", "choice17_2P")
        .addSelect("sar_student_estimate_teaching.choice17_1P", "choice17_1P")

        .addSelect("sar_student_estimate_teaching.choice18_5P", "choice18_5P")
        .addSelect("sar_student_estimate_teaching.choice18_4P", "choice18_4P")
        .addSelect("sar_student_estimate_teaching.choice18_3P", "choice18_3P")
        .addSelect("sar_student_estimate_teaching.choice18_2P", "choice18_2P")
        .addSelect("sar_student_estimate_teaching.choice18_1P", "choice18_1P")

        .addSelect("sar_student_estimate_teaching.choice19_5P", "choice19_5P")
        .addSelect("sar_student_estimate_teaching.choice19_4P", "choice19_4P")
        .addSelect("sar_student_estimate_teaching.choice19_3P", "choice19_3P")
        .addSelect("sar_student_estimate_teaching.choice19_2P", "choice19_2P")
        .addSelect("sar_student_estimate_teaching.choice19_1P", "choice19_1P")

        .addSelect("sar_student_estimate_teaching.choice20_5P", "choice20_5P")
        .addSelect("sar_student_estimate_teaching.choice20_4P", "choice20_4P")
        .addSelect("sar_student_estimate_teaching.choice20_3P", "choice20_3P")
        .addSelect("sar_student_estimate_teaching.choice20_2P", "choice20_2P")
        .addSelect("sar_student_estimate_teaching.choice20_1P", "choice20_1P")
      
        .from(SarStudentEstimateTeaching, "sar_student_estimate_teaching")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_student_estimate_teaching.teacherId")
})
export class VwSarStudentEstimateTeachingList {
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
    choice1_5P: number;
     @ViewColumn()
    choice1_4P: number;
     @ViewColumn()
    choice1_3P: number;
     @ViewColumn()
    choice1_2P: number;
     @ViewColumn()
    choice1_1P: number;
     @ViewColumn()
     @ViewColumn()
    choice2_5P: number;
     @ViewColumn()
    choice3_5P: number;
     @ViewColumn()
    choice4_5P: number;
     @ViewColumn()
    choice5_5P: number;
     @ViewColumn()
    choice6_5P: number;
     @ViewColumn()
    choice7_5P: number;
     @ViewColumn()
    choice8_5P: number;
     @ViewColumn()
    choice9_5P: number;
     @ViewColumn()
    choice10_5P: number;
     @ViewColumn()
    choice11_5P: number;
     @ViewColumn()
    choice12_5P: number;
     @ViewColumn()
    choice13_5P: number;
     @ViewColumn()
    choice14_5P: number;
     @ViewColumn()
    choice15_5P: number;
     @ViewColumn()
    choice16_5P: number;
     @ViewColumn()
    choice17_5P: number;
     @ViewColumn()
    choice18_5P: number;
     @ViewColumn()
    choice19_5P: number;
     @ViewColumn()
    choice20_5P: number;
     @ViewColumn()
    choice2_4P: number;
     @ViewColumn()
    choice3_4P: number;
     @ViewColumn()
    choice4_4P: number;
     @ViewColumn()
    choice5_4P: number;
     @ViewColumn()
    choice6_4P: number;
     @ViewColumn()
    choice7_4P: number;
     @ViewColumn()
    choice8_4P: number;
     @ViewColumn()
    choice9_4P: number;
     @ViewColumn()
    choice10_4P: number;
     @ViewColumn()
    choice11_4P: number;
     @ViewColumn()
    choice12_4P: number;
     @ViewColumn()
    choice13_4P: number;
     @ViewColumn()
    choice14_4P: number;
     @ViewColumn()
    choice15_4P: number;
     @ViewColumn()
    choice16_4P: number;
     @ViewColumn()
    choice17_4P: number;
     @ViewColumn()
    choice18_4P: number;
     @ViewColumn()
    choice19_4P: number;
     @ViewColumn()
    choice20_4P: number;
     @ViewColumn()
    choice2_3P: number;
     @ViewColumn()
    choice3_3P: number;
     @ViewColumn()
    choice4_3P: number;
     @ViewColumn()
    choice5_3P: number;
     @ViewColumn()
    choice6_3P: number;
     @ViewColumn()
    choice7_3P: number;
     @ViewColumn()
    choice8_3P: number;
     @ViewColumn()
    choice9_3P: number;
     @ViewColumn()
    choice10_3P: number;
     @ViewColumn()
    choice11_3P: number;
     @ViewColumn()
    choice12_3P: number;
     @ViewColumn()
    choice13_3P: number;
     @ViewColumn()
    choice14_3P: number;
     @ViewColumn()
    choice15_3P: number;
     @ViewColumn()
    choice16_3P: number;
     @ViewColumn()
    choice17_3P: number;
     @ViewColumn()
    choice18_3P: number;
     @ViewColumn()
    choice19_3P: number;
     @ViewColumn()
    choice20_3P: number;
     @ViewColumn()
    choice2_2P: number;
     @ViewColumn()
    choice3_2P: number;
     @ViewColumn()
    choice4_2P: number;
     @ViewColumn()
    choice5_2P: number;
     @ViewColumn()
    choice6_2P: number;
     @ViewColumn()
    choice7_2P: number;
     @ViewColumn()
    choice8_2P: number;
     @ViewColumn()
    choice9_2P: number;
     @ViewColumn()
    choice10_2P: number;
     @ViewColumn()
    choice11_2P: number;
     @ViewColumn()
    choice12_2P: number;
     @ViewColumn()
    choice13_2P: number;
     @ViewColumn()
    choice14_2P: number;
     @ViewColumn()
    choice15_2P: number;
     @ViewColumn()
    choice16_2P: number;
     @ViewColumn()
    choice17_2P: number;
     @ViewColumn()
    choice18_2P: number;
     @ViewColumn()
    choice19_2P: number;
     @ViewColumn()
    choice20_2P: number;
     @ViewColumn()
    choice2_1P: number;
     @ViewColumn()
    choice3_1P: number;
     @ViewColumn()
    choice4_1P: number;
     @ViewColumn()
    choice5_1P: number;
     @ViewColumn()
    choice6_1P: number;
     @ViewColumn()
    choice7_1P: number;
     @ViewColumn()
    choice8_1P: number;
     @ViewColumn()
    choice9_1P: number;
     @ViewColumn()
    choice10_1P: number;
     @ViewColumn()
    choice11_1P: number;
     @ViewColumn()
    choice12_1P: number;
     @ViewColumn()
    choice13_1P: number;
     @ViewColumn()
    choice14_1P: number;
     @ViewColumn()
    choice15_1P: number;
     @ViewColumn()
    choice16_1P: number;
     @ViewColumn()
    choice17_1P: number;
     @ViewColumn()
    choice18_1P: number;
     @ViewColumn()
    choice19_1P: number;
     @ViewColumn()
    choice20_1P: number;
}

@ViewEntity({
  name:'sar_student_estimate_teaching_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_student_estimate_teaching.id", "value")
 // .addSelect("CONCAT(sar_student_estimate_teaching.null , ' ' , sar_student_estimate_teaching.null)", "label")
      .from(SarStudentEstimateTeaching, "sar_student_estimate_teaching")
})
export class VwSarStudentEstimateTeachingDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_student_estimate_teaching_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_student_estimate_teaching.id", "id")
        .addSelect("sar_student_estimate_teaching.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_student_estimate_teaching.refId", "refId")
        .addSelect("sar_student_estimate_teaching.schoolyear", "schoolyear")
        .addSelect("sar_student_estimate_teaching.choice1_5P", "choice1_5P")
        .addSelect("sar_student_estimate_teaching.choice1_4P", "choice1_4P")
        .addSelect("sar_student_estimate_teaching.choice1_3P", "choice1_3P")
        .addSelect("sar_student_estimate_teaching.choice1_2P", "choice1_2P")
        .addSelect("sar_student_estimate_teaching.choice1_1P", "choice1_1P")

        .addSelect("sar_student_estimate_teaching.choice2_5P", "choice2_5P")
        .addSelect("sar_student_estimate_teaching.choice2_4P", "choice2_4P")
        .addSelect("sar_student_estimate_teaching.choice2_3P", "choice2_3P")
        .addSelect("sar_student_estimate_teaching.choice2_2P", "choice2_2P")
        .addSelect("sar_student_estimate_teaching.choice2_1P", "choice2_1P")

        .addSelect("sar_student_estimate_teaching.choice3_5P", "choice3_5P")
        .addSelect("sar_student_estimate_teaching.choice3_4P", "choice3_4P")
        .addSelect("sar_student_estimate_teaching.choice3_3P", "choice3_3P")
        .addSelect("sar_student_estimate_teaching.choice3_2P", "choice3_2P")
        .addSelect("sar_student_estimate_teaching.choice3_1P", "choice3_1P")

        .addSelect("sar_student_estimate_teaching.choice4_5P", "choice4_5P")
        .addSelect("sar_student_estimate_teaching.choice4_4P", "choice4_4P")
        .addSelect("sar_student_estimate_teaching.choice4_3P", "choice4_3P")
        .addSelect("sar_student_estimate_teaching.choice4_2P", "choice4_2P")
        .addSelect("sar_student_estimate_teaching.choice4_1P", "choice4_1P")

        .addSelect("sar_student_estimate_teaching.choice5_5P", "choice5_5P")
        .addSelect("sar_student_estimate_teaching.choice5_4P", "choice5_4P")
        .addSelect("sar_student_estimate_teaching.choice5_3P", "choice5_3P")
        .addSelect("sar_student_estimate_teaching.choice5_2P", "choice5_2P")
        .addSelect("sar_student_estimate_teaching.choice5_1P", "choice5_1P")

        .addSelect("sar_student_estimate_teaching.choice6_5P", "choice6_5P")
        .addSelect("sar_student_estimate_teaching.choice6_4P", "choice6_4P")
        .addSelect("sar_student_estimate_teaching.choice6_3P", "choice6_3P")
        .addSelect("sar_student_estimate_teaching.choice6_2P", "choice6_2P")
        .addSelect("sar_student_estimate_teaching.choice6_1P", "choice6_1P")

        .addSelect("sar_student_estimate_teaching.choice7_5P", "choice7_5P")
        .addSelect("sar_student_estimate_teaching.choice7_4P", "choice7_4P")
        .addSelect("sar_student_estimate_teaching.choice7_3P", "choice7_3P")
        .addSelect("sar_student_estimate_teaching.choice7_2P", "choice7_2P")
        .addSelect("sar_student_estimate_teaching.choice7_1P", "choice7_1P")

        .addSelect("sar_student_estimate_teaching.choice8_5P", "choice8_5P")
        .addSelect("sar_student_estimate_teaching.choice8_4P", "choice8_4P")
        .addSelect("sar_student_estimate_teaching.choice8_3P", "choice8_3P")
        .addSelect("sar_student_estimate_teaching.choice8_2P", "choice8_2P")
        .addSelect("sar_student_estimate_teaching.choice8_1P", "choice8_1P")

        .addSelect("sar_student_estimate_teaching.choice9_5P", "choice9_5P")
        .addSelect("sar_student_estimate_teaching.choice9_4P", "choice9_4P")
        .addSelect("sar_student_estimate_teaching.choice9_3P", "choice9_3P")
        .addSelect("sar_student_estimate_teaching.choice9_2P", "choice9_2P")
        .addSelect("sar_student_estimate_teaching.choice9_1P", "choice9_1P")

        .addSelect("sar_student_estimate_teaching.choice10_5P", "choice10_5P")
        .addSelect("sar_student_estimate_teaching.choice10_4P", "choice10_4P")
        .addSelect("sar_student_estimate_teaching.choice10_3P", "choice10_3P")
        .addSelect("sar_student_estimate_teaching.choice10_2P", "choice10_2P")
        .addSelect("sar_student_estimate_teaching.choice10_1P", "choice10_1P")

        .addSelect("sar_student_estimate_teaching.choice11_5P", "choice11_5P")
        .addSelect("sar_student_estimate_teaching.choice11_4P", "choice11_4P")
        .addSelect("sar_student_estimate_teaching.choice11_3P", "choice11_3P")
        .addSelect("sar_student_estimate_teaching.choice11_2P", "choice11_2P")
        .addSelect("sar_student_estimate_teaching.choice11_1P", "choice11_1P")

        .addSelect("sar_student_estimate_teaching.choice12_5P", "choice12_5P")
        .addSelect("sar_student_estimate_teaching.choice12_4P", "choice12_4P")
        .addSelect("sar_student_estimate_teaching.choice12_3P", "choice12_3P")
        .addSelect("sar_student_estimate_teaching.choice12_2P", "choice12_2P")
        .addSelect("sar_student_estimate_teaching.choice12_1P", "choice12_1P")

        .addSelect("sar_student_estimate_teaching.choice13_5P", "choice13_5P")
        .addSelect("sar_student_estimate_teaching.choice13_4P", "choice13_4P")
        .addSelect("sar_student_estimate_teaching.choice13_3P", "choice13_3P")
        .addSelect("sar_student_estimate_teaching.choice13_2P", "choice13_2P")
        .addSelect("sar_student_estimate_teaching.choice13_1P", "choice13_1P")

        .addSelect("sar_student_estimate_teaching.choice14_5P", "choice14_5P")
        .addSelect("sar_student_estimate_teaching.choice14_4P", "choice14_4P")
        .addSelect("sar_student_estimate_teaching.choice14_3P", "choice14_3P")
        .addSelect("sar_student_estimate_teaching.choice14_2P", "choice14_2P")
        .addSelect("sar_student_estimate_teaching.choice14_1P", "choice14_1P")

        .addSelect("sar_student_estimate_teaching.choice15_5P", "choice15_5P")
        .addSelect("sar_student_estimate_teaching.choice15_4P", "choice15_4P")
        .addSelect("sar_student_estimate_teaching.choice15_3P", "choice15_3P")
        .addSelect("sar_student_estimate_teaching.choice15_2P", "choice15_2P")
        .addSelect("sar_student_estimate_teaching.choice15_1P", "choice15_1P")

        .addSelect("sar_student_estimate_teaching.choice16_5P", "choice16_5P")
        .addSelect("sar_student_estimate_teaching.choice16_4P", "choice16_4P")
        .addSelect("sar_student_estimate_teaching.choice16_3P", "choice16_3P")
        .addSelect("sar_student_estimate_teaching.choice16_2P", "choice16_2P")
        .addSelect("sar_student_estimate_teaching.choice16_1P", "choice16_1P")

        .addSelect("sar_student_estimate_teaching.choice17_5P", "choice17_5P")
        .addSelect("sar_student_estimate_teaching.choice17_4P", "choice17_4P")
        .addSelect("sar_student_estimate_teaching.choice17_3P", "choice17_3P")
        .addSelect("sar_student_estimate_teaching.choice17_2P", "choice17_2P")
        .addSelect("sar_student_estimate_teaching.choice17_1P", "choice17_1P")

        .addSelect("sar_student_estimate_teaching.choice18_5P", "choice18_5P")
        .addSelect("sar_student_estimate_teaching.choice18_4P", "choice18_4P")
        .addSelect("sar_student_estimate_teaching.choice18_3P", "choice18_3P")
        .addSelect("sar_student_estimate_teaching.choice18_2P", "choice18_2P")
        .addSelect("sar_student_estimate_teaching.choice18_1P", "choice18_1P")

        .addSelect("sar_student_estimate_teaching.choice19_5P", "choice19_5P")
        .addSelect("sar_student_estimate_teaching.choice19_4P", "choice19_4P")
        .addSelect("sar_student_estimate_teaching.choice19_3P", "choice19_3P")
        .addSelect("sar_student_estimate_teaching.choice19_2P", "choice19_2P")
        .addSelect("sar_student_estimate_teaching.choice19_1P", "choice19_1P")

        .addSelect("sar_student_estimate_teaching.choice20_5P", "choice20_5P")
        .addSelect("sar_student_estimate_teaching.choice20_4P", "choice20_4P")
        .addSelect("sar_student_estimate_teaching.choice20_3P", "choice20_3P")
        .addSelect("sar_student_estimate_teaching.choice20_2P", "choice20_2P")
        .addSelect("sar_student_estimate_teaching.choice20_1P", "choice20_1P")
      
        .addSelect("sar_student_estimate_teaching.result", "result")
      .from(SarStudentEstimateTeaching, "sar_student_estimate_teaching")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_student_estimate_teaching.teacherId")
})
export class VwSarStudentEstimateTeachingItem {

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
    choice1_5P: number;
     @ViewColumn()
    choice1_4P: number;
     @ViewColumn()
    choice1_3P: number;
     @ViewColumn()
    choice1_2P: number;
     @ViewColumn()
    choice1_1P: number;
     @ViewColumn()
     @ViewColumn()
    choice2_5P: number;
     @ViewColumn()
    choice3_5P: number;
     @ViewColumn()
    choice4_5P: number;
     @ViewColumn()
    choice5_5P: number;
     @ViewColumn()
    choice6_5P: number;
     @ViewColumn()
    choice7_5P: number;
     @ViewColumn()
    choice8_5P: number;
     @ViewColumn()
    choice9_5P: number;
     @ViewColumn()
    choice10_5P: number;
     @ViewColumn()
    choice11_5P: number;
     @ViewColumn()
    choice12_5P: number;
     @ViewColumn()
    choice13_5P: number;
     @ViewColumn()
    choice14_5P: number;
     @ViewColumn()
    choice15_5P: number;
     @ViewColumn()
    choice16_5P: number;
     @ViewColumn()
    choice17_5P: number;
     @ViewColumn()
    choice18_5P: number;
     @ViewColumn()
    choice19_5P: number;
     @ViewColumn()
    choice20_5P: number;
     @ViewColumn()
    choice2_4P: number;
     @ViewColumn()
    choice3_4P: number;
     @ViewColumn()
    choice4_4P: number;
     @ViewColumn()
    choice5_4P: number;
     @ViewColumn()
    choice6_4P: number;
     @ViewColumn()
    choice7_4P: number;
     @ViewColumn()
    choice8_4P: number;
     @ViewColumn()
    choice9_4P: number;
     @ViewColumn()
    choice10_4P: number;
     @ViewColumn()
    choice11_4P: number;
     @ViewColumn()
    choice12_4P: number;
     @ViewColumn()
    choice13_4P: number;
     @ViewColumn()
    choice14_4P: number;
     @ViewColumn()
    choice15_4P: number;
     @ViewColumn()
    choice16_4P: number;
     @ViewColumn()
    choice17_4P: number;
     @ViewColumn()
    choice18_4P: number;
     @ViewColumn()
    choice19_4P: number;
     @ViewColumn()
    choice20_4P: number;
     @ViewColumn()
    choice2_3P: number;
     @ViewColumn()
    choice3_3P: number;
     @ViewColumn()
    choice4_3P: number;
     @ViewColumn()
    choice5_3P: number;
     @ViewColumn()
    choice6_3P: number;
     @ViewColumn()
    choice7_3P: number;
     @ViewColumn()
    choice8_3P: number;
     @ViewColumn()
    choice9_3P: number;
     @ViewColumn()
    choice10_3P: number;
     @ViewColumn()
    choice11_3P: number;
     @ViewColumn()
    choice12_3P: number;
     @ViewColumn()
    choice13_3P: number;
     @ViewColumn()
    choice14_3P: number;
     @ViewColumn()
    choice15_3P: number;
     @ViewColumn()
    choice16_3P: number;
     @ViewColumn()
    choice17_3P: number;
     @ViewColumn()
    choice18_3P: number;
     @ViewColumn()
    choice19_3P: number;
     @ViewColumn()
    choice20_3P: number;
     @ViewColumn()
    choice2_2P: number;
     @ViewColumn()
    choice3_2P: number;
     @ViewColumn()
    choice4_2P: number;
     @ViewColumn()
    choice5_2P: number;
     @ViewColumn()
    choice6_2P: number;
     @ViewColumn()
    choice7_2P: number;
     @ViewColumn()
    choice8_2P: number;
     @ViewColumn()
    choice9_2P: number;
     @ViewColumn()
    choice10_2P: number;
     @ViewColumn()
    choice11_2P: number;
     @ViewColumn()
    choice12_2P: number;
     @ViewColumn()
    choice13_2P: number;
     @ViewColumn()
    choice14_2P: number;
     @ViewColumn()
    choice15_2P: number;
     @ViewColumn()
    choice16_2P: number;
     @ViewColumn()
    choice17_2P: number;
     @ViewColumn()
    choice18_2P: number;
     @ViewColumn()
    choice19_2P: number;
     @ViewColumn()
    choice20_2P: number;
     @ViewColumn()
    choice2_1P: number;
     @ViewColumn()
    choice3_1P: number;
     @ViewColumn()
    choice4_1P: number;
     @ViewColumn()
    choice5_1P: number;
     @ViewColumn()
    choice6_1P: number;
     @ViewColumn()
    choice7_1P: number;
     @ViewColumn()
    choice8_1P: number;
     @ViewColumn()
    choice9_1P: number;
     @ViewColumn()
    choice10_1P: number;
     @ViewColumn()
    choice11_1P: number;
     @ViewColumn()
    choice12_1P: number;
     @ViewColumn()
    choice13_1P: number;
     @ViewColumn()
    choice14_1P: number;
     @ViewColumn()
    choice15_1P: number;
     @ViewColumn()
    choice16_1P: number;
     @ViewColumn()
    choice17_1P: number;
     @ViewColumn()
    choice18_1P: number;
     @ViewColumn()
    choice19_1P: number;
     @ViewColumn()
    choice20_1P: number;

    @ViewColumn()
    result: number;
}
