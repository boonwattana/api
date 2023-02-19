import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Student } from "src/api/student/student.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";

@Entity('student_filter')
export class StudentFilter extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  studentId?: number;

  @Column({nullable: true})
  yearTermId?: number;

  @Column({nullable: true})
  specialSkill?: boolean;

  @Column({nullable: true})
  skill1?: string;

  @Column({nullable: true})
  skill2?: string;

  @Column({nullable: true})
  skill3?: string;

  @Column({nullable: true})
  lernStatus?: number;

  @Column({nullable: true})
  lern1?: boolean;

  @Column({nullable: true})
  lern2?: boolean;

  @Column({nullable: true})
  lern3?: boolean;

  @Column({nullable: true})
  lern4?: boolean;

  @Column({nullable: true})
  lern5?: boolean;

  @Column({nullable: true})
  lern6?: boolean;

  @Column({nullable: true})
  lern7?: boolean;

  @Column({nullable: true})
  lern8?: boolean;

  @Column({nullable: true})
  lern9?: boolean;

  @Column({nullable: true})
  lern10?: boolean;

  @Column({nullable: true})
  lern11?: boolean;

  @Column({nullable: true})
  lern12?: boolean;

  @Column({nullable: true})
  lern13?: boolean;

  @Column({nullable: true})
  lern14?: boolean;

  @Column({nullable: true})
  lern15?: boolean;

  @Column({nullable: true})
  lern16?: boolean;

  @Column({nullable: true})
  lern17?: boolean;

  @Column({nullable: true})
  lern18?: boolean;

  @Column({nullable: true})
  lern19?: boolean;

  @Column({nullable: true})
  lern20?: boolean;

  @Column({nullable: true})
  lern21?: boolean;

  @Column({nullable: true})
  lern22?: boolean;

  @Column({nullable: true})
  lern23?: boolean;

  @Column({nullable: true})
  lern24?: boolean;

  @Column({nullable: true})
  healtyStatus?: number;

  @Column({nullable: true})
  healty1?: boolean;

  @Column({nullable: true})
  healty2?: boolean;

  @Column({nullable: true})
  healty3?: boolean;

  @Column({nullable: true})
  healty4?: boolean;

  @Column({nullable: true})
  healty5?: boolean;

  @Column({nullable: true})
  healty6?: boolean;

  @Column({nullable: true})
  healty7?: boolean;

  @Column({nullable: true})
  healty8?: boolean;

  @Column({nullable: true})
  healty9?: boolean;

  @Column({nullable: true})
  feelingStatus?: number;
  @Column({nullable: true})
  behaviorStatus?: number;
  @Column({nullable: true})
  notStayStatus?: number;
  @Column({nullable: true})
  relationStatus?: number;
  @Column({nullable: true})
  sumarizeFeelingStatus?: number;
  @Column({nullable: true})
  socialStatus?: number;

  @Column({nullable: true})
  sexualStatus?: number;

  @Column({nullable: true})
  sexual1?: boolean;

  @Column({nullable: true})
  sexual2?: boolean;

  @Column({nullable: true})
  sexual3?: boolean;

  @Column({nullable: true})
  sexual4?: boolean;

  @Column({nullable: true})
  sexual5?: boolean;

  @Column({nullable: true})
  sexual6?: boolean;

  @Column({nullable: true})
  sexual7?: boolean;

  @Column({nullable: true})
  sexual8?: boolean;

  @Column({nullable: true})
  sexual9?: boolean;

  @Column({nullable: true})
  sexual10?: boolean;

  @Column({nullable: true})
  drugStatus?: number;

  @Column({nullable: true})
  drug1?: boolean;

  @Column({nullable: true})
  drug2?: boolean;

  @Column({nullable: true})
  drug3?: boolean;

  @Column({nullable: true})
  drug4?: boolean;

  @Column({nullable: true})
  drug5?: boolean;

  @Column({nullable: true})
  drug6?: boolean;

  @Column({nullable: true})
  drug7?: boolean;

  @Column({nullable: true})
  drug8?: boolean;

  @Column({nullable: true})
  drug9?: boolean;

  @Column({nullable: true})
  drug10?: boolean;

  @Column({nullable: true})
  drug11?: boolean;

  @Column({nullable: true})
  drug12?: boolean;

  @Column({nullable: true})
  drug13?: boolean;

  @Column({nullable: true})
  gameStatus?: number;

  @Column({nullable: true})
  game1?: boolean;

  @Column({nullable: true})
  game2?: boolean;

  @Column({nullable: true})
  game3?: boolean;

  @Column({nullable: true})
  game4?: boolean;

  @Column({nullable: true})
  game5?: boolean;

  @Column({nullable: true})
  game6?: boolean;

  @Column({nullable: true})
  game7?: boolean;

  @Column({nullable: true})
  game8?: boolean;

  @Column({nullable: true})
  game9?: boolean;

  @Column({nullable: true})
  game10?: boolean;

  @Column({nullable: true})
  game11?: boolean;

  @Column({nullable: true})
  game12?: boolean;

  @Column({nullable: true})
  economicStatus?: number;

  @Column({nullable: true})
  economic1?: boolean;

  @Column({nullable: true})
  economic2?: boolean;

  @Column({nullable: true})
  economic3?: boolean;

  @Column({nullable: true})
  economic4?: boolean;

  @Column({nullable: true})
  economic5?: boolean;

  @Column({nullable: true})
  economic6?: boolean;

  @Column({nullable: true})
  securityStatus?: number;

  @Column({nullable: true})
  security1?: boolean;

  @Column({nullable: true})
  security2?: boolean;

  @Column({nullable: true})
  security3?: boolean;

  @Column({nullable: true})
  security4?: boolean;

  @Column({nullable: true})
  security5?: boolean;

  @Column({nullable: true})
  security6?: boolean;

  @Column({nullable: true})
  security7?: boolean;

  @Column({nullable: true})
  security8?: boolean;

  @Column({nullable: true})
  security9?: boolean;

  @Column({nullable: true})
  security10?: boolean;

  @Column({nullable: true})
  security11?: boolean;

  @Column({nullable: true})
  security12?: boolean;

  @Column({nullable: true})
  security13?: boolean;

  @Column({nullable: true})
  specialStatus?: number;

  @Column({nullable: true})
  special1?: boolean;

  @Column({nullable: true})
  special2?: boolean;

  @Column({nullable: true})
  special3?: boolean;

  @Column({nullable: true})
  special4?: boolean;

  @Column({nullable: true})
  special5?: boolean;

  @Column({nullable: true})
  special6?: boolean;

  @Column({nullable: true})
  special7?: boolean;

  @Column({nullable: true})
  special8?: boolean;

  @Column({nullable: true})
  special9?: boolean;

  @Column({nullable: true})
  special10?: boolean;

  @Column({nullable: true})
  special11?: boolean;

  @Column({nullable: true})
  specialText?: string;

  @Column({nullable: true})
  electronicStatus?: number;

  @Column({nullable: true})
  electronic1?: boolean;

  @Column({nullable: true})
  electronic2?: boolean;

  @Column({nullable: true})
  electronic3?: boolean;

  @Column({nullable: true})
  electronic4?: boolean;

  @Column({nullable: true})
  summarize?: number;
}
@ViewEntity({
    name:'student_filter_list',
    expression: `select 
    s.id,
    s."classroomId",
    s."classroomTypeId",
    s."studentCode" ,
    s."studentNumber" ,
    concat(title."titleName", ' ',s.firstname, ' ', s.lastname) as "studentValue",
    c.name as "room",
    ct."typeName",
    CONCAT(af.skill1,' ',af.skill2,' ',af.skill3) as "specialSkill",
    af."lernStatus",
    af."healtyStatus",
    af."sexualStatus",
    af."drugStatus",
    af."gameStatus",
    af."economicStatus",
    af."securityStatus",
    af."specialStatus",
    af."electronicStatus",
    af."summarize",
    sdq1."sumScore_value" as "sdq1",
    sdq2."sumScore_value" as "sdq2",
    sdq3."sumScore_value" as "sdq3"
    from student s 
    left join (
    select * from student_filter sf 
    inner join year_term yt  on yt.id = sf."yearTermId" and yt."isParent" 
    ) af on af."studentId" = s.id
    left join classroom c on c.id = s."classroomId" 
    left join classroom_type ct on ct.id  = s."classroomTypeId" 
    left join (
    select  sdq1."sumScore_value",sdq1.id , sdq1."studentId"  from sdq_table sdq1
    where sdq1."estimateType" = 1
    order by id desc limit 1
    ) sdq1 on sdq1."studentId" = s.id 
    left join (
    select  sdq2."sumScore_value",sdq2.id , sdq2."studentId"  from sdq_table sdq2
    where sdq2."estimateType" = 2
    order by id desc limit 1
    ) sdq2 on sdq2."studentId" = s.id 
    left join (
    select  sdq3."sumScore_value",sdq3.id , sdq3."studentId"  from sdq_table sdq3
    where sdq3."estimateType" = 3
    order by id desc limit 1
    ) sdq3 on sdq3."studentId" = s.id 
    LEFT JOIN title_name title ON title.id = s.title
    `
})
export class VwStudentFilterList {
    @ViewColumn()
    id: number;
    @ViewColumn()
    studentCode: string;
    @ViewColumn()
    studentNumber: number;
    @ViewColumn()
    studentValue: string;
    @ViewColumn()
    room: string;
    @ViewColumn()
    typeName: string;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
classroomTypeId: number;
    @ViewColumn()
    specialSkill: number;
    @ViewColumn()
    lernStatus: number;
    @ViewColumn()
    healtyStatus: number;
    @ViewColumn()
    sexualStatus: number;
    @ViewColumn()
    drugStatus: number;
    @ViewColumn()
    gameStatus: number;
    @ViewColumn()
    economicStatus: number;
    @ViewColumn()
    securityStatus: number;
    @ViewColumn()
   specialStatus: number;
   @ViewColumn()
    electronicStatus: number;
    @ViewColumn()
    summarize: number;
    @ViewColumn()
    sdq1: string;
    @ViewColumn()
    sdq2: string;
    @ViewColumn()
    sdq3: string;

}

@ViewEntity({
  name:'student_filter_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_filter.id", "value")
  .addSelect("CONCAT(student_filter.skill1 , ' ' , student_filter.skill2)", "label")
      .from(StudentFilter, "student_filter")
})
export class VwStudentFilterDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'student_filter_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_filter.id", "id")
        .addSelect("student_filter.studentId", "studentId")
        .addSelect("student_id.classroomId", "classroomId")
        .addSelect("student_id.classroomTypeId", "classroomTypeId")
        .addSelect("CONCAT(student_id.firstname , ' ' , student_id.lastname)", "studentValue")
        .addSelect("student_filter.yearTermId", "yearTermId")
        .addSelect("CONCAT(year_term_id.term , '/' , year_term_id.year)", "yearTermValue")
        .addSelect("student_filter.specialSkill", "specialSkill")
        .addSelect("student_filter.skill1", "skill1")
        .addSelect("student_filter.skill2", "skill2")
        .addSelect("student_filter.skill3", "skill3")
        .addSelect("student_filter.lernStatus", "lernStatus")
        .addSelect("student_filter.lern1", "lern1")
        .addSelect("student_filter.lern2", "lern2")
        .addSelect("student_filter.lern3", "lern3")
        .addSelect("student_filter.lern4", "lern4")
        .addSelect("student_filter.lern5", "lern5")
        .addSelect("student_filter.lern6", "lern6")
        .addSelect("student_filter.lern7", "lern7")
        .addSelect("student_filter.lern8", "lern8")
        .addSelect("student_filter.lern9", "lern9")
        .addSelect("student_filter.lern10", "lern10")
        .addSelect("student_filter.lern11", "lern11")
        .addSelect("student_filter.lern12", "lern12")
        .addSelect("student_filter.lern13", "lern13")
        .addSelect("student_filter.lern14", "lern14")
        .addSelect("student_filter.lern15", "lern15")
        .addSelect("student_filter.lern16", "lern16")
        .addSelect("student_filter.lern17", "lern17")
        .addSelect("student_filter.lern18", "lern18")
        .addSelect("student_filter.lern19", "lern19")
        .addSelect("student_filter.lern20", "lern20")
        .addSelect("student_filter.lern21", "lern21")
        .addSelect("student_filter.lern22", "lern22")
        .addSelect("student_filter.lern23", "lern23")
        .addSelect("student_filter.lern24", "lern24")
        .addSelect("student_filter.healtyStatus", "healtyStatus")
        .addSelect("student_filter.healty1", "healty1")
        .addSelect("student_filter.healty2", "healty2")
        .addSelect("student_filter.healty3", "healty3")
        .addSelect("student_filter.healty4", "healty4")
        .addSelect("student_filter.healty5", "healty5")
        .addSelect("student_filter.healty6", "healty6")
        .addSelect("student_filter.healty7", "healty7")
        .addSelect("student_filter.healty8", "healty8")
        .addSelect("student_filter.healty9", "healty9")
        .addSelect("student_filter.sexualStatus", "sexualStatus")
        .addSelect("student_filter.sexual1", "sexual1")
        .addSelect("student_filter.sexual2", "sexual2")
        .addSelect("student_filter.sexual3", "sexual3")
        .addSelect("student_filter.sexual4", "sexual4")
        .addSelect("student_filter.sexual5", "sexual5")
        .addSelect("student_filter.sexual6", "sexual6")
        .addSelect("student_filter.sexual7", "sexual7")
        .addSelect("student_filter.sexual8", "sexual8")
        .addSelect("student_filter.sexual9", "sexual9")
        .addSelect("student_filter.sexual10", "sexual10")
        .addSelect("student_filter.drugStatus", "drugStatus")
        .addSelect("student_filter.drug1", "drug1")
        .addSelect("student_filter.drug2", "drug2")
        .addSelect("student_filter.drug3", "drug3")
        .addSelect("student_filter.drug4", "drug4")
        .addSelect("student_filter.drug5", "drug5")
        .addSelect("student_filter.drug6", "drug6")
        .addSelect("student_filter.drug7", "drug7")
        .addSelect("student_filter.drug8", "drug8")
        .addSelect("student_filter.drug9", "drug9")
        .addSelect("student_filter.drug10", "drug10")
        .addSelect("student_filter.drug11", "drug11")
        .addSelect("student_filter.drug12", "drug12")
        .addSelect("student_filter.drug13", "drug13")
        .addSelect("student_filter.gameStatus", "gameStatus")
        .addSelect("student_filter.game1", "game1")
        .addSelect("student_filter.game2", "game2")
        .addSelect("student_filter.game3", "game3")
        .addSelect("student_filter.game4", "game4")
        .addSelect("student_filter.game5", "game5")
        .addSelect("student_filter.game6", "game6")
        .addSelect("student_filter.game7", "game7")
        .addSelect("student_filter.game8", "game8")
        .addSelect("student_filter.game9", "game9")
        .addSelect("student_filter.game10", "game10")
        .addSelect("student_filter.game11", "game11")
        .addSelect("student_filter.game12", "game12")
        .addSelect("student_filter.economicStatus", "economicStatus")
        .addSelect("student_filter.economic1", "economic1")
        .addSelect("student_filter.economic2", "economic2")
        .addSelect("student_filter.economic3", "economic3")
        .addSelect("student_filter.economic4", "economic4")
        .addSelect("student_filter.economic5", "economic5")
        .addSelect("student_filter.economic6", "economic6")
        .addSelect("student_filter.securityStatus", "securityStatus")
        .addSelect("student_filter.security1", "security1")
        .addSelect("student_filter.security2", "security2")
        .addSelect("student_filter.security3", "security3")
        .addSelect("student_filter.security4", "security4")
        .addSelect("student_filter.security5", "security5")
        .addSelect("student_filter.security6", "security6")
        .addSelect("student_filter.security7", "security7")
        .addSelect("student_filter.security8", "security8")
        .addSelect("student_filter.security9", "security9")
        .addSelect("student_filter.security10", "security10")
        .addSelect("student_filter.security11", "security11")
        .addSelect("student_filter.security12", "security12")
        .addSelect("student_filter.security13", "security13")
        .addSelect("student_filter.specialStatus", "specialStatus")
        .addSelect("student_filter.special1", "special1")
        .addSelect("student_filter.special2", "special2")
        .addSelect("student_filter.special3", "special3")
        .addSelect("student_filter.special4", "special4")
        .addSelect("student_filter.special5", "special5")
        .addSelect("student_filter.special6", "special6")
        .addSelect("student_filter.special7", "special7")
        .addSelect("student_filter.special8", "special8")
        .addSelect("student_filter.special9", "special9")
        .addSelect("student_filter.special10", "special10")
        .addSelect("student_filter.special11", "special11")
        .addSelect("student_filter.specialText", "specialText")
        .addSelect("student_filter.electronicStatus", "electronicStatus")
        .addSelect("student_filter.electronic1", "electronic1")
        .addSelect("student_filter.electronic2", "electronic2")
        .addSelect("student_filter.electronic3", "electronic3")
        .addSelect("student_filter.electronic4", "electronic4")
        .addSelect("student_filter.summarize", "summarize")


        .addSelect("student_filter.feelingStatus", "feelingStatus")
        .addSelect("student_filter.behaviorStatus", "behaviorStatus")
        .addSelect("student_filter.notStayStatus", "notStayStatus")
        .addSelect("student_filter.relationStatus", "relationStatus")
        .addSelect("student_filter.sumarizeFeelingStatus", "sumarizeFeelingStatus")
        .addSelect("student_filter.socialStatus", "socialStatus")
      .from(StudentFilter, "student_filter")
        .leftJoin(Student, "student_id","student_id.Id = student_filter.studentId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = student_filter.yearTermId")
})







export class VwStudentFilterItem {

  @ViewColumn()
    id: number;
    @ViewColumn()
    classroomTypeId: number;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
    studentId: number;

    @ViewColumn()
    studentValue: string;

    @ViewColumn()
    yearTermId: number;

    @ViewColumn()
    yearTermValue: string;

    @ViewColumn()
    specialSkill: boolean;

    @ViewColumn()
    skill1: string;

    @ViewColumn()
    skill2: string;

    @ViewColumn()
    skill3: string;

    @ViewColumn()
    lernStatus: number;

    @ViewColumn()
    lern1: boolean;

    @ViewColumn()
    lern2: boolean;

    @ViewColumn()
    lern3: boolean;

    @ViewColumn()
    lern4: boolean;

    @ViewColumn()
    lern5: boolean;

    @ViewColumn()
    lern6: boolean;

    @ViewColumn()
    lern7: boolean;

    @ViewColumn()
    lern8: boolean;

    @ViewColumn()
    lern9: boolean;

    @ViewColumn()
    lern10: boolean;

    @ViewColumn()
    lern11: boolean;

    @ViewColumn()
    lern12: boolean;

    @ViewColumn()
    lern13: boolean;

    @ViewColumn()
    lern14: boolean;

    @ViewColumn()
    lern15: boolean;

    @ViewColumn()
    lern16: boolean;

    @ViewColumn()
    lern17: boolean;

    @ViewColumn()
    lern18: boolean;

    @ViewColumn()
    lern19: boolean;

    @ViewColumn()
    lern20: boolean;

    @ViewColumn()
    lern21: boolean;

    @ViewColumn()
    lern22: boolean;

    @ViewColumn()
    lern23: boolean;

    @ViewColumn()
    lern24: boolean;

    @ViewColumn()
    healtyStatus: number;

    @ViewColumn()
    healty1: boolean;

    @ViewColumn()
    healty2: boolean;

    @ViewColumn()
    healty3: boolean;

    @ViewColumn()
    healty4: boolean;

    @ViewColumn()
    healty5: boolean;

    @ViewColumn()
    healty6: boolean;

    @ViewColumn()
    healty7: boolean;

    @ViewColumn()
    healty8: boolean;

    @ViewColumn()
    healty9: boolean;

    @ViewColumn()
    sexualStatus: number;

    @ViewColumn()
    sexual1: boolean;

    @ViewColumn()
    sexual2: boolean;

    @ViewColumn()
    sexual3: boolean;

    @ViewColumn()
    sexual4: boolean;

    @ViewColumn()
    sexual5: boolean;

    @ViewColumn()
    sexual6: boolean;

    @ViewColumn()
    sexual7: boolean;

    @ViewColumn()
    sexual8: boolean;

    @ViewColumn()
    sexual9: boolean;

    @ViewColumn()
    sexual10: boolean;

    @ViewColumn()
    drugStatus: number;

    @ViewColumn()
    drug1: boolean;

    @ViewColumn()
    drug2: boolean;

    @ViewColumn()
    drug3: boolean;

    @ViewColumn()
    drug4: boolean;

    @ViewColumn()
    drug5: boolean;

    @ViewColumn()
    drug6: boolean;

    @ViewColumn()
    drug7: boolean;

    @ViewColumn()
    drug8: boolean;

    @ViewColumn()
    drug9: boolean;

    @ViewColumn()
    drug10: boolean;

    @ViewColumn()
    drug11: boolean;

    @ViewColumn()
    drug12: boolean;

    @ViewColumn()
    drug13: boolean;

    @ViewColumn()
    gameStatus: number;

    @ViewColumn()
    game1: boolean;

    @ViewColumn()
    game2: boolean;

    @ViewColumn()
    game3: boolean;

    @ViewColumn()
    game4: boolean;

    @ViewColumn()
    game5: boolean;

    @ViewColumn()
    game6: boolean;

    @ViewColumn()
    game7: boolean;

    @ViewColumn()
    game8: boolean;

    @ViewColumn()
    game9: boolean;

    @ViewColumn()
    game10: boolean;

    @ViewColumn()
    game11: boolean;

    @ViewColumn()
    game12: boolean;

    @ViewColumn()
    economicStatus: number;

    @ViewColumn()
    economic1: boolean;

    @ViewColumn()
    economic2: boolean;

    @ViewColumn()
    economic3: boolean;

    @ViewColumn()
    economic4: boolean;

    @ViewColumn()
    economic5: boolean;

    @ViewColumn()
    economic6: boolean;

    @ViewColumn()
    securityStatus: number;

    @ViewColumn()
    security1: boolean;

    @ViewColumn()
    security2: boolean;

    @ViewColumn()
    security3: boolean;

    @ViewColumn()
    security4: boolean;

    @ViewColumn()
    security5: boolean;

    @ViewColumn()
    security6: boolean;

    @ViewColumn()
    security7: boolean;

    @ViewColumn()
    security8: boolean;

    @ViewColumn()
    security9: boolean;

    @ViewColumn()
    security10: boolean;

    @ViewColumn()
    security11: boolean;

    @ViewColumn()
    security12: boolean;

    @ViewColumn()
    security13: boolean;

    @ViewColumn()
    specialStatus: number;

    @ViewColumn()
    special1: boolean;

    @ViewColumn()
    special2: boolean;

    @ViewColumn()
    special3: boolean;

    @ViewColumn()
    special4: boolean;

    @ViewColumn()
    special5: boolean;

    @ViewColumn()
    special6: boolean;

    @ViewColumn()
    special7: boolean;

    @ViewColumn()
    special8: boolean;

    @ViewColumn()
    special9: boolean;

    @ViewColumn()
    special10: boolean;

    @ViewColumn()
    special11: boolean;

    @ViewColumn()
    specialText: string;

    @ViewColumn()
    electronicStatus: number;

    @ViewColumn()
    electronic1: boolean;

    @ViewColumn()
    electronic2: boolean;

    @ViewColumn()
    electronic3: boolean;

    @ViewColumn()
    electronic4: boolean;

    @ViewColumn()
    summarize: number;


    @ViewColumn()
    feelingStatus?: number;
    @ViewColumn()
    behaviorStatus?: number;
    @ViewColumn()
    notStayStatus?: number;
    @ViewColumn()
    relationStatus?: number;
    @ViewColumn()
    sumarizeFeelingStatus?: number;
    @ViewColumn()
    socialStatus?: number;
}
