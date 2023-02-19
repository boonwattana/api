import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar')
export class Sar extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

    @Column({nullable: true})
  sarCoursesYearTermToTalSubject?:number
    @Column({nullable: true})
sarCoursesYearTermToTalActivities?:number
  @Column({nullable: true})
sarCoursesYearTermToTalHour?:number
  @Column({nullable: true})
sarCoursesYearTerm2ToTalSubject?:number
  @Column({nullable: true})
sarCoursesYearTerm2ToTalActivities?:number
  @Column({nullable: true})
sarCoursesYearTerm2ToTalHour?:number
  @Column({nullable: true})
sarselfdevelopmentToTalTimes?:number
  @Column({nullable: true})
sarselfdevelopmentToTaldays?:number
  @Column({nullable: true})
sarselfdevelopmentToTalHour?:number
  @Column({nullable: true})
sarselfdevelopmentToTalTimes2?:number
  @Column({nullable: true})
sacompetencyassessmentresult? :string
  @Column({nullable: true})
sarcrudassessmentresult? :string
  @Column({nullable: true})
sarattributeassessmentresult? :string
@Column({nullable: true})
sarPersonalLeaveschoolYearValue? :string



@Column({nullable: true})
sarqualityoflearnersNote?:string;
@Column({nullable: true})
sarstandard2Note?:string;
@Column({nullable: true})
sarstandard3Note?:string;
@Column({nullable: true})
SelfAssessment1_1?:string;
@Column({nullable: true})
SelfAssessment1_2?:string;
@Column({nullable: true})
SelfAssessment1_3?:string;
@Column({nullable: true})
SelfAssessment2_1?:string;
@Column({nullable: true})
SelfAssessment2_2?:string;
@Column({nullable: true})
SelfAssessment2_3?:string;
@Column({nullable: true})
SelfAssessment3_1?:string;
@Column({nullable: true})
SelfAssessment3_2?:string;
@Column({nullable: true})
SelfAssessment3_3?:string;
@Column({nullable: true})
SelfAssessment4_1?:string;
@Column({nullable: true})
SelfAssessment4_2?:string;
@Column({nullable: true})
SelfAssessment4_3?:string;


}
@ViewEntity({
    name:'sar_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar.id", "id")
        .addSelect("sar.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar.refId", "refId")
        .addSelect("sar.schoolyear", "schoolyear")
        .from(Sar, "sar")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar.teacherId")
})
export class VwSarList {
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
}

@ViewEntity({
  name:'sar_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar.id", "value")
  //.addSelect("CONCAT(sar.null , ' ' , sar.null)", "label")
      .from(Sar, "sar")
})
export class VwSarDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar.id", "id")
        .addSelect("sar.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar.refId", "refId")
        .addSelect("sar.schoolyear", "schoolyear")
        .addSelect("sar.sarCoursesYearTermToTalSubject", "sarCoursesYearTermToTalSubject")
        .addSelect("sar.sarCoursesYearTermToTalActivities", "sarCoursesYearTermToTalActivities")
        .addSelect("sar.sarCoursesYearTermToTalHour", "sarCoursesYearTermToTalHour")
        .addSelect("sar.sarCoursesYearTerm2ToTalSubject", "sarCoursesYearTerm2ToTalSubject")
        .addSelect("sar.sarCoursesYearTerm2ToTalActivities", "sarCoursesYearTerm2ToTalActivities")
        .addSelect("sar.sarCoursesYearTerm2ToTalHour", "sarCoursesYearTerm2ToTalHour")
        .addSelect("sar.sarselfdevelopmentToTalTimes", "sarselfdevelopmentToTalTimes")
        .addSelect("sar.sarselfdevelopmentToTaldays", "sarselfdevelopmentToTaldays")
        .addSelect("sar.sarselfdevelopmentToTalHour", "sarselfdevelopmentToTalHour")
        .addSelect("sar.sarselfdevelopmentToTalTimes2", "sarselfdevelopmentToTalTimes2")
        .addSelect("sar.sacompetencyassessmentresult", "sacompetencyassessmentresult")
        .addSelect("sar.sarcrudassessmentresult", "sarcrudassessmentresult")
        .addSelect("sar.sarattributeassessmentresult", "sarattributeassessmentresult")
        .addSelect("sar.sarPersonalLeaveschoolYearValue", "sarPersonalLeaveschoolYearValue")
        .addSelect("sar.sarqualityoflearnersNote", "sarqualityoflearnersNote")
        .addSelect("sar.sarstandard2Note", "sarstandard2Note")
        .addSelect("sar.sarstandard3Note", "sarstandard3Note")
        .addSelect("sar.SelfAssessment1_1", "SelfAssessment1_1")
        .addSelect("sar.SelfAssessment1_2", "SelfAssessment1_2")
        .addSelect("sar.SelfAssessment1_3", "SelfAssessment1_3")
        .addSelect("sar.SelfAssessment2_1", "SelfAssessment2_1")
        .addSelect("sar.SelfAssessment2_2", "SelfAssessment2_2")
        .addSelect("sar.SelfAssessment2_3", "SelfAssessment2_3")
        .addSelect("sar.SelfAssessment3_1", "SelfAssessment3_1")
        .addSelect("sar.SelfAssessment3_2", "SelfAssessment3_2")
        .addSelect("sar.SelfAssessment3_3", "SelfAssessment3_3")
        .addSelect("sar.SelfAssessment4_1", "SelfAssessment4_1")
        .addSelect("sar.SelfAssessment4_2", "SelfAssessment4_2")
        .addSelect("sar.SelfAssessment4_3", "SelfAssessment4_3")
      .from(Sar, "sar")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar.teacherId")
})
export class VwSarItem {

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
    sarCoursesYearTermToTalSubject:number
       @ViewColumn()
  sarCoursesYearTermToTalActivities:number
     @ViewColumn()
  sarCoursesYearTermToTalHour:number
     @ViewColumn()
  sarCoursesYearTerm2ToTalSubject:number
     @ViewColumn()
  sarCoursesYearTerm2ToTalActivities:number
     @ViewColumn()
  sarCoursesYearTerm2ToTalHour:number
     @ViewColumn()
  sarselfdevelopmentToTalTimes:number
     @ViewColumn()
  sarselfdevelopmentToTaldays:number
     @ViewColumn()
  sarselfdevelopmentToTalHour:number
     @ViewColumn()
  sarselfdevelopmentToTalTimes2:number
     @ViewColumn()
  sacompetencyassessmentresult :string
     @ViewColumn()
  sarcrudassessmentresult :string
     @ViewColumn()
  sarattributeassessmentresult :string
  @ViewColumn()
  sarPersonalLeaveschoolYearValue :string

    @ViewColumn()
sarqualityoflearnersNote:string;
  @ViewColumn()
sarstandard2Note:string;
  @ViewColumn()
sarstandard3Note:string;
  @ViewColumn()
SelfAssessment1_1:string;
  @ViewColumn()
SelfAssessment1_2:string;
  @ViewColumn()
SelfAssessment1_3:string;
  @ViewColumn()
SelfAssessment2_1:string;
  @ViewColumn()
SelfAssessment2_2:string;
  @ViewColumn()
SelfAssessment2_3:string;
  @ViewColumn()
SelfAssessment3_1:string;
  @ViewColumn()
SelfAssessment3_2:string;
  @ViewColumn()
SelfAssessment3_3:string;
  @ViewColumn()
SelfAssessment4_1:string;
  @ViewColumn()
SelfAssessment4_2:string;
  @ViewColumn()
SelfAssessment4_3:string;

}
