import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";

@Entity('teaching_schedule')
export class TeachingSchedule extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  yearTermId?: number;

  @Column({nullable: true})
  monSubjectName01?: string;

  @Column({nullable: true})
  monSubjectName02?: string;

  @Column({nullable: true})
  monSubjectName03?: string;

  @Column({nullable: true})
  monSubjectName04?: string;

  @Column({nullable: true})
  monSubjectName05?: string;

  @Column({nullable: true})
  monSubjectName06?: string;

  @Column({nullable: true})
  monSubjectName07?: string;

  @Column({nullable: true})
  monSubjectName08?: string;

  @Column({nullable: true})
  monSubjectName09?: string;

  @Column({nullable: true})
  monSubjectName10?: string;

  @Column({nullable: true})
  monSubjectId01?: string;

  @Column({nullable: true})
  monSubjectId02?: string;

  @Column({nullable: true})
  monSubjectId03?: string;

  @Column({nullable: true})
  monSubjectId04?: string;

  @Column({nullable: true})
  monSubjectId05?: string;

  @Column({nullable: true})
  monSubjectId06?: string;

  @Column({nullable: true})
  monSubjectId07?: string;

  @Column({nullable: true})
  monSubjectId08?: string;

  @Column({nullable: true})
  monSubjectId09?: string;

  @Column({nullable: true})
  monSubjectId10?: string;

  @Column({nullable: true})
  monClass01?: string;

  @Column({nullable: true})
  monClass02?: string;

  @Column({nullable: true})
  monClass03?: string;

  @Column({nullable: true})
  monClass04?: string;

  @Column({nullable: true})
  monClass05?: string;

  @Column({nullable: true})
  monClass06?: string;

  @Column({nullable: true})
  monClass07?: string;

  @Column({nullable: true})
  monClass08?: string;

  @Column({nullable: true})
  monClass09?: string;

  @Column({nullable: true})
  monClass10?: string;

  @Column({nullable: true})
  tueSubjectName01?: string;

  @Column({nullable: true})
  tueSubjectName02?: string;

  @Column({nullable: true})
  tueSubjectName03?: string;

  @Column({nullable: true})
  tueSubjectName04?: string;

  @Column({nullable: true})
  tueSubjectName05?: string;

  @Column({nullable: true})
  tueSubjectName06?: string;

  @Column({nullable: true})
  tueSubjectName07?: string;

  @Column({nullable: true})
  tueSubjectName08?: string;

  @Column({nullable: true})
  tueSubjectName09?: string;

  @Column({nullable: true})
  tueSubjectName10?: string;

  @Column({nullable: true})
  tueSubjectId01?: string;

  @Column({nullable: true})
  tueSubjectId02?: string;

  @Column({nullable: true})
  tueSubjectId03?: string;

  @Column({nullable: true})
  tueSubjectId04?: string;

  @Column({nullable: true})
  tueSubjectId05?: string;

  @Column({nullable: true})
  tueSubjectId06?: string;

  @Column({nullable: true})
  tueSubjectId07?: string;

  @Column({nullable: true})
  tueSubjectId08?: string;

  @Column({nullable: true})
  tueSubjectId09?: string;

  @Column({nullable: true})
  tueSubjectId10?: string;

  @Column({nullable: true})
  tueClass01?: string;

  @Column({nullable: true})
  tueClass02?: string;

  @Column({nullable: true})
  tueClass03?: string;

  @Column({nullable: true})
  tueClass04?: string;

  @Column({nullable: true})
  tueClass05?: string;

  @Column({nullable: true})
  tueClass06?: string;

  @Column({nullable: true})
  tueClass07?: string;

  @Column({nullable: true})
  tueClass08?: string;

  @Column({nullable: true})
  tueClass09?: string;

  @Column({nullable: true})
  tueClass10?: string;

  @Column({nullable: true})
  wedSubjectName01?: string;

  @Column({nullable: true})
  wedSubjectName02?: string;

  @Column({nullable: true})
  wedSubjectName03?: string;

  @Column({nullable: true})
  wedSubjectName04?: string;

  @Column({nullable: true})
  wedSubjectName05?: string;

  @Column({nullable: true})
  wedSubjectName06?: string;

  @Column({nullable: true})
  wedSubjectName07?: string;

  @Column({nullable: true})
  wedSubjectName08?: string;

  @Column({nullable: true})
  wedSubjectName09?: string;

  @Column({nullable: true})
  wedSubjectName10?: string;

  @Column({nullable: true})
  wedSubjectId01?: string;

  @Column({nullable: true})
  wedSubjectId02?: string;

  @Column({nullable: true})
  wedSubjectId03?: string;

  @Column({nullable: true})
  wedSubjectId04?: string;

  @Column({nullable: true})
  wedSubjectId05?: string;

  @Column({nullable: true})
  wedSubjectId06?: string;

  @Column({nullable: true})
  wedSubjectId07?: string;

  @Column({nullable: true})
  wedSubjectId08?: string;

  @Column({nullable: true})
  wedSubjectId09?: string;

  @Column({nullable: true})
  wedSubjectId10?: string;

  @Column({nullable: true})
  wedClass01?: string;

  @Column({nullable: true})
  wedClass02?: string;

  @Column({nullable: true})
  wedClass03?: string;

  @Column({nullable: true})
  wedClass04?: string;

  @Column({nullable: true})
  wedClass05?: string;

  @Column({nullable: true})
  wedClass06?: string;

  @Column({nullable: true})
  wedClass07?: string;

  @Column({nullable: true})
  wedClass08?: string;

  @Column({nullable: true})
  wedClass09?: string;

  @Column({nullable: true})
  wedClass10?: string;

  @Column({nullable: true})
  thursSubjectName01?: string;

  @Column({nullable: true})
  thursSubjectName02?: string;

  @Column({nullable: true})
  thursSubjectName03?: string;

  @Column({nullable: true})
  thursSubjectName04?: string;

  @Column({nullable: true})
  thursSubjectName05?: string;

  @Column({nullable: true})
  thursSubjectName06?: string;

  @Column({nullable: true})
  thursSubjectName07?: string;

  @Column({nullable: true})
  thursSubjectName08?: string;

  @Column({nullable: true})
  thursSubjectName09?: string;

  @Column({nullable: true})
  thursSubjectName10?: string;

  @Column({nullable: true})
  thursSubjectId01?: string;

  @Column({nullable: true})
  thursSubjectId02?: string;

  @Column({nullable: true})
  thursSubjectId03?: string;

  @Column({nullable: true})
  thursSubjectId04?: string;

  @Column({nullable: true})
  thursSubjectId05?: string;

  @Column({nullable: true})
  thursSubjectId06?: string;

  @Column({nullable: true})
  thursSubjectId07?: string;

  @Column({nullable: true})
  thursSubjectId08?: string;

  @Column({nullable: true})
  thursSubjectId09?: string;

  @Column({nullable: true})
  thursSubjectId10?: string;

  @Column({nullable: true})
  thursClass01?: string;

  @Column({nullable: true})
  thursClass02?: string;

  @Column({nullable: true})
  thursClass03?: string;

  @Column({nullable: true})
  thursClass04?: string;

  @Column({nullable: true})
  thursClass05?: string;

  @Column({nullable: true})
  thursClass06?: string;

  @Column({nullable: true})
  thursClass07?: string;

  @Column({nullable: true})
  thursClass08?: string;

  @Column({nullable: true})
  thursClass09?: string;

  @Column({nullable: true})
  thursClass10?: string;

  @Column({nullable: true})
  firSubjectName01?: string;

  @Column({nullable: true})
  firSubjectName02?: string;

  @Column({nullable: true})
  firSubjectName03?: string;

  @Column({nullable: true})
  firSubjectName04?: string;

  @Column({nullable: true})
  firSubjectName05?: string;

  @Column({nullable: true})
  firSubjectName06?: string;

  @Column({nullable: true})
  firSubjectName07?: string;

  @Column({nullable: true})
  firSubjectName08?: string;

  @Column({nullable: true})
  firSubjectName09?: string;

  @Column({nullable: true})
  firSubjectName10?: string;

  @Column({nullable: true})
  firSubjectId01?: string;

  @Column({nullable: true})
  firSubjectId02?: string;

  @Column({nullable: true})
  firSubjectId03?: string;

  @Column({nullable: true})
  firSubjectId04?: string;

  @Column({nullable: true})
  firSubjectId05?: string;

  @Column({nullable: true})
  firSubjectId06?: string;

  @Column({nullable: true})
  firSubjectId07?: string;

  @Column({nullable: true})
  firSubjectId08?: string;

  @Column({nullable: true})
  firSubjectId09?: string;

  @Column({nullable: true})
  firSubjectId10?: string;

  @Column({nullable: true})
  firClass01?: string;

  @Column({nullable: true})
  firClass02?: string;

  @Column({nullable: true})
  firClass03?: string;

  @Column({nullable: true})
  firClass04?: string;

  @Column({nullable: true})
  firClass05?: string;

  @Column({nullable: true})
  firClass06?: string;

  @Column({nullable: true})
  firClass07?: string;

  @Column({nullable: true})
  firClass08?: string;

  @Column({nullable: true})
  firClass09?: string;

  @Column({nullable: true})
  firClass10?: string;
}
@ViewEntity({
    name:'teaching_schedule_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("teaching_schedule.id", "id")
        .addSelect("teaching_schedule.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("teaching_schedule.yearTermId", "yearTermId")
        .addSelect("CONCAT(year_term_id.term , ' / ' , year_term_id.year)", "yearTermValue")
        .addSelect("year_term_id.year", "schoolYear")
        .from(TeachingSchedule, "teaching_schedule")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = teaching_schedule.teacherId")
        .leftJoin(YearTerm, "year_term_id","year_term_id.Id = teaching_schedule.yearTermId")
})
export class VwTeachingScheduleList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    yearTermId: number;

    @ViewColumn()
    yearTermValue: string;
    @ViewColumn()
    schoolYear: string;
}

@ViewEntity({
  name:'teaching_schedule_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("teaching_schedule.id", "value")
  //.addSelect("CONCAT(teaching_schedule.null , ' ' , teaching_schedule.null)", "label")
      .from(TeachingSchedule, "teaching_schedule")
})
export class VwTeachingScheduleDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'teaching_schedule_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("teaching_schedule.id", "id")
        .addSelect("teaching_schedule.teacherId", "teacherId")
        .addSelect("teaching_schedule.yearTermId", "yearTermId")
        .addSelect("teaching_schedule.monSubjectName01", "monSubjectName01")
        .addSelect("teaching_schedule.monSubjectName02", "monSubjectName02")
        .addSelect("teaching_schedule.monSubjectName03", "monSubjectName03")
        .addSelect("teaching_schedule.monSubjectName04", "monSubjectName04")
        .addSelect("teaching_schedule.monSubjectName05", "monSubjectName05")
        .addSelect("teaching_schedule.monSubjectName06", "monSubjectName06")
        .addSelect("teaching_schedule.monSubjectName07", "monSubjectName07")
        .addSelect("teaching_schedule.monSubjectName08", "monSubjectName08")
        .addSelect("teaching_schedule.monSubjectName09", "monSubjectName09")
        .addSelect("teaching_schedule.monSubjectName10", "monSubjectName10")
        .addSelect("teaching_schedule.monSubjectId01", "monSubjectId01")
        .addSelect("teaching_schedule.monSubjectId02", "monSubjectId02")
        .addSelect("teaching_schedule.monSubjectId03", "monSubjectId03")
        .addSelect("teaching_schedule.monSubjectId04", "monSubjectId04")
        .addSelect("teaching_schedule.monSubjectId05", "monSubjectId05")
        .addSelect("teaching_schedule.monSubjectId06", "monSubjectId06")
        .addSelect("teaching_schedule.monSubjectId07", "monSubjectId07")
        .addSelect("teaching_schedule.monSubjectId08", "monSubjectId08")
        .addSelect("teaching_schedule.monSubjectId09", "monSubjectId09")
        .addSelect("teaching_schedule.monSubjectId10", "monSubjectId10")
        .addSelect("teaching_schedule.monClass01", "monClass01")
        .addSelect("teaching_schedule.monClass02", "monClass02")
        .addSelect("teaching_schedule.monClass03", "monClass03")
        .addSelect("teaching_schedule.monClass04", "monClass04")
        .addSelect("teaching_schedule.monClass05", "monClass05")
        .addSelect("teaching_schedule.monClass06", "monClass06")
        .addSelect("teaching_schedule.monClass07", "monClass07")
        .addSelect("teaching_schedule.monClass08", "monClass08")
        .addSelect("teaching_schedule.monClass09", "monClass09")
        .addSelect("teaching_schedule.monClass10", "monClass10")
        .addSelect("teaching_schedule.tueSubjectName01", "tueSubjectName01")
        .addSelect("teaching_schedule.tueSubjectName02", "tueSubjectName02")
        .addSelect("teaching_schedule.tueSubjectName03", "tueSubjectName03")
        .addSelect("teaching_schedule.tueSubjectName04", "tueSubjectName04")
        .addSelect("teaching_schedule.tueSubjectName05", "tueSubjectName05")
        .addSelect("teaching_schedule.tueSubjectName06", "tueSubjectName06")
        .addSelect("teaching_schedule.tueSubjectName07", "tueSubjectName07")
        .addSelect("teaching_schedule.tueSubjectName08", "tueSubjectName08")
        .addSelect("teaching_schedule.tueSubjectName09", "tueSubjectName09")
        .addSelect("teaching_schedule.tueSubjectName10", "tueSubjectName10")
        .addSelect("teaching_schedule.tueSubjectId01", "tueSubjectId01")
        .addSelect("teaching_schedule.tueSubjectId02", "tueSubjectId02")
        .addSelect("teaching_schedule.tueSubjectId03", "tueSubjectId03")
        .addSelect("teaching_schedule.tueSubjectId04", "tueSubjectId04")
        .addSelect("teaching_schedule.tueSubjectId05", "tueSubjectId05")
        .addSelect("teaching_schedule.tueSubjectId06", "tueSubjectId06")
        .addSelect("teaching_schedule.tueSubjectId07", "tueSubjectId07")
        .addSelect("teaching_schedule.tueSubjectId08", "tueSubjectId08")
        .addSelect("teaching_schedule.tueSubjectId09", "tueSubjectId09")
        .addSelect("teaching_schedule.tueSubjectId10", "tueSubjectId10")
        .addSelect("teaching_schedule.tueClass01", "tueClass01")
        .addSelect("teaching_schedule.tueClass02", "tueClass02")
        .addSelect("teaching_schedule.tueClass03", "tueClass03")
        .addSelect("teaching_schedule.tueClass04", "tueClass04")
        .addSelect("teaching_schedule.tueClass05", "tueClass05")
        .addSelect("teaching_schedule.tueClass06", "tueClass06")
        .addSelect("teaching_schedule.tueClass07", "tueClass07")
        .addSelect("teaching_schedule.tueClass08", "tueClass08")
        .addSelect("teaching_schedule.tueClass09", "tueClass09")
        .addSelect("teaching_schedule.tueClass10", "tueClass10")
        .addSelect("teaching_schedule.wedSubjectName01", "wedSubjectName01")
        .addSelect("teaching_schedule.wedSubjectName02", "wedSubjectName02")
        .addSelect("teaching_schedule.wedSubjectName03", "wedSubjectName03")
        .addSelect("teaching_schedule.wedSubjectName04", "wedSubjectName04")
        .addSelect("teaching_schedule.wedSubjectName05", "wedSubjectName05")
        .addSelect("teaching_schedule.wedSubjectName06", "wedSubjectName06")
        .addSelect("teaching_schedule.wedSubjectName07", "wedSubjectName07")
        .addSelect("teaching_schedule.wedSubjectName08", "wedSubjectName08")
        .addSelect("teaching_schedule.wedSubjectName09", "wedSubjectName09")
        .addSelect("teaching_schedule.wedSubjectName10", "wedSubjectName10")
        .addSelect("teaching_schedule.wedSubjectId01", "wedSubjectId01")
        .addSelect("teaching_schedule.wedSubjectId02", "wedSubjectId02")
        .addSelect("teaching_schedule.wedSubjectId03", "wedSubjectId03")
        .addSelect("teaching_schedule.wedSubjectId04", "wedSubjectId04")
        .addSelect("teaching_schedule.wedSubjectId05", "wedSubjectId05")
        .addSelect("teaching_schedule.wedSubjectId06", "wedSubjectId06")
        .addSelect("teaching_schedule.wedSubjectId07", "wedSubjectId07")
        .addSelect("teaching_schedule.wedSubjectId08", "wedSubjectId08")
        .addSelect("teaching_schedule.wedSubjectId09", "wedSubjectId09")
        .addSelect("teaching_schedule.wedSubjectId10", "wedSubjectId10")
        .addSelect("teaching_schedule.wedClass01", "wedClass01")
        .addSelect("teaching_schedule.wedClass02", "wedClass02")
        .addSelect("teaching_schedule.wedClass03", "wedClass03")
        .addSelect("teaching_schedule.wedClass04", "wedClass04")
        .addSelect("teaching_schedule.wedClass05", "wedClass05")
        .addSelect("teaching_schedule.wedClass06", "wedClass06")
        .addSelect("teaching_schedule.wedClass07", "wedClass07")
        .addSelect("teaching_schedule.wedClass08", "wedClass08")
        .addSelect("teaching_schedule.wedClass09", "wedClass09")
        .addSelect("teaching_schedule.wedClass10", "wedClass10")
        .addSelect("teaching_schedule.thursSubjectName01", "thursSubjectName01")
        .addSelect("teaching_schedule.thursSubjectName02", "thursSubjectName02")
        .addSelect("teaching_schedule.thursSubjectName03", "thursSubjectName03")
        .addSelect("teaching_schedule.thursSubjectName04", "thursSubjectName04")
        .addSelect("teaching_schedule.thursSubjectName05", "thursSubjectName05")
        .addSelect("teaching_schedule.thursSubjectName06", "thursSubjectName06")
        .addSelect("teaching_schedule.thursSubjectName07", "thursSubjectName07")
        .addSelect("teaching_schedule.thursSubjectName08", "thursSubjectName08")
        .addSelect("teaching_schedule.thursSubjectName09", "thursSubjectName09")
        .addSelect("teaching_schedule.thursSubjectName10", "thursSubjectName10")
        .addSelect("teaching_schedule.thursSubjectId01", "thursSubjectId01")
        .addSelect("teaching_schedule.thursSubjectId02", "thursSubjectId02")
        .addSelect("teaching_schedule.thursSubjectId03", "thursSubjectId03")
        .addSelect("teaching_schedule.thursSubjectId04", "thursSubjectId04")
        .addSelect("teaching_schedule.thursSubjectId05", "thursSubjectId05")
        .addSelect("teaching_schedule.thursSubjectId06", "thursSubjectId06")
        .addSelect("teaching_schedule.thursSubjectId07", "thursSubjectId07")
        .addSelect("teaching_schedule.thursSubjectId08", "thursSubjectId08")
        .addSelect("teaching_schedule.thursSubjectId09", "thursSubjectId09")
        .addSelect("teaching_schedule.thursSubjectId10", "thursSubjectId10")
        .addSelect("teaching_schedule.thursClass01", "thursClass01")
        .addSelect("teaching_schedule.thursClass02", "thursClass02")
        .addSelect("teaching_schedule.thursClass03", "thursClass03")
        .addSelect("teaching_schedule.thursClass04", "thursClass04")
        .addSelect("teaching_schedule.thursClass05", "thursClass05")
        .addSelect("teaching_schedule.thursClass06", "thursClass06")
        .addSelect("teaching_schedule.thursClass07", "thursClass07")
        .addSelect("teaching_schedule.thursClass08", "thursClass08")
        .addSelect("teaching_schedule.thursClass09", "thursClass09")
        .addSelect("teaching_schedule.thursClass10", "thursClass10")
        .addSelect("teaching_schedule.firSubjectName01", "firSubjectName01")
        .addSelect("teaching_schedule.firSubjectName02", "firSubjectName02")
        .addSelect("teaching_schedule.firSubjectName03", "firSubjectName03")
        .addSelect("teaching_schedule.firSubjectName04", "firSubjectName04")
        .addSelect("teaching_schedule.firSubjectName05", "firSubjectName05")
        .addSelect("teaching_schedule.firSubjectName06", "firSubjectName06")
        .addSelect("teaching_schedule.firSubjectName07", "firSubjectName07")
        .addSelect("teaching_schedule.firSubjectName08", "firSubjectName08")
        .addSelect("teaching_schedule.firSubjectName09", "firSubjectName09")
        .addSelect("teaching_schedule.firSubjectName10", "firSubjectName10")
        .addSelect("teaching_schedule.firSubjectId01", "firSubjectId01")
        .addSelect("teaching_schedule.firSubjectId02", "firSubjectId02")
        .addSelect("teaching_schedule.firSubjectId03", "firSubjectId03")
        .addSelect("teaching_schedule.firSubjectId04", "firSubjectId04")
        .addSelect("teaching_schedule.firSubjectId05", "firSubjectId05")
        .addSelect("teaching_schedule.firSubjectId06", "firSubjectId06")
        .addSelect("teaching_schedule.firSubjectId07", "firSubjectId07")
        .addSelect("teaching_schedule.firSubjectId08", "firSubjectId08")
        .addSelect("teaching_schedule.firSubjectId09", "firSubjectId09")
        .addSelect("teaching_schedule.firSubjectId10", "firSubjectId10")
        .addSelect("teaching_schedule.firClass01", "firClass01")
        .addSelect("teaching_schedule.firClass02", "firClass02")
        .addSelect("teaching_schedule.firClass03", "firClass03")
        .addSelect("teaching_schedule.firClass04", "firClass04")
        .addSelect("teaching_schedule.firClass05", "firClass05")
        .addSelect("teaching_schedule.firClass06", "firClass06")
        .addSelect("teaching_schedule.firClass07", "firClass07")
        .addSelect("teaching_schedule.firClass08", "firClass08")
        .addSelect("teaching_schedule.firClass09", "firClass09")
        .addSelect("teaching_schedule.firClass10", "firClass10")
        .addSelect("teacher_id.title", "teacher_title")
        .addSelect("teacher_id.lastname", "teacher_lastname")
        .addSelect("teacher_id.firstname", "teacher_firstname")
        .addSelect("year_term_id.term", "term")
        .addSelect("year_term_id.year", "year")
        .addSelect("CONCAT(year_term_id.year,'-',teacher_id.Id)", "refId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("CONCAT(year_term_id.term , ' / ' , year_term_id.year)", "yearTermValue")
       
      .from(TeachingSchedule, "teaching_schedule")
      .leftJoin(Teacher, "teacher_id","teacher_id.Id = teaching_schedule.teacherId")
       .leftJoin(YearTerm, "year_term_id","year_term_id.Id = teaching_schedule.yearTermId")
})
export class VwTeachingScheduleItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;
    
    @ViewColumn()
    yearTermId: number;

    @ViewColumn()
    monSubjectName01: string;

    @ViewColumn()
    monSubjectName02: string;

    @ViewColumn()
    monSubjectName03: string;

    @ViewColumn()
    monSubjectName04: string;

    @ViewColumn()
    monSubjectName05: string;

    @ViewColumn()
    monSubjectName06: string;

    @ViewColumn()
    monSubjectName07: string;

    @ViewColumn()
    monSubjectName08: string;

    @ViewColumn()
    monSubjectName09: string;

    @ViewColumn()
    monSubjectName10: string;

    @ViewColumn()
    monSubjectId01: string;

    @ViewColumn()
    monSubjectId02: string;

    @ViewColumn()
    monSubjectId03: string;

    @ViewColumn()
    monSubjectId04: string;

    @ViewColumn()
    monSubjectId05: string;

    @ViewColumn()
    monSubjectId06: string;

    @ViewColumn()
    monSubjectId07: string;

    @ViewColumn()
    monSubjectId08: string;

    @ViewColumn()
    monSubjectId09: string;

    @ViewColumn()
    monSubjectId10: string;

    @ViewColumn()
    monClass01: string;

    @ViewColumn()
    monClass02: string;

    @ViewColumn()
    monClass03: string;

    @ViewColumn()
    monClass04: string;

    @ViewColumn()
    monClass05: string;

    @ViewColumn()
    monClass06: string;

    @ViewColumn()
    monClass07: string;

    @ViewColumn()
    monClass08: string;

    @ViewColumn()
    monClass09: string;

    @ViewColumn()
    monClass10: string;

    @ViewColumn()
    tueSubjectName01: string;

    @ViewColumn()
    tueSubjectName02: string;

    @ViewColumn()
    tueSubjectName03: string;

    @ViewColumn()
    tueSubjectName04: string;

    @ViewColumn()
    tueSubjectName05: string;

    @ViewColumn()
    tueSubjectName06: string;

    @ViewColumn()
    tueSubjectName07: string;

    @ViewColumn()
    tueSubjectName08: string;

    @ViewColumn()
    tueSubjectName09: string;

    @ViewColumn()
    tueSubjectName10: string;

    @ViewColumn()
    tueSubjectId01: string;

    @ViewColumn()
    tueSubjectId02: string;

    @ViewColumn()
    tueSubjectId03: string;

    @ViewColumn()
    tueSubjectId04: string;

    @ViewColumn()
    tueSubjectId05: string;

    @ViewColumn()
    tueSubjectId06: string;

    @ViewColumn()
    tueSubjectId07: string;

    @ViewColumn()
    tueSubjectId08: string;

    @ViewColumn()
    tueSubjectId09: string;

    @ViewColumn()
    tueSubjectId10: string;

    @ViewColumn()
    tueClass01: string;

    @ViewColumn()
    tueClass02: string;

    @ViewColumn()
    tueClass03: string;

    @ViewColumn()
    tueClass04: string;

    @ViewColumn()
    tueClass05: string;

    @ViewColumn()
    tueClass06: string;

    @ViewColumn()
    tueClass07: string;

    @ViewColumn()
    tueClass08: string;

    @ViewColumn()
    tueClass09: string;

    @ViewColumn()
    tueClass10: string;

    @ViewColumn()
    wedSubjectName01: string;

    @ViewColumn()
    wedSubjectName02: string;

    @ViewColumn()
    wedSubjectName03: string;

    @ViewColumn()
    wedSubjectName04: string;

    @ViewColumn()
    wedSubjectName05: string;

    @ViewColumn()
    wedSubjectName06: string;

    @ViewColumn()
    wedSubjectName07: string;

    @ViewColumn()
    wedSubjectName08: string;

    @ViewColumn()
    wedSubjectName09: string;

    @ViewColumn()
    wedSubjectName10: string;

    @ViewColumn()
    wedSubjectId01: string;

    @ViewColumn()
    wedSubjectId02: string;

    @ViewColumn()
    wedSubjectId03: string;

    @ViewColumn()
    wedSubjectId04: string;

    @ViewColumn()
    wedSubjectId05: string;

    @ViewColumn()
    wedSubjectId06: string;

    @ViewColumn()
    wedSubjectId07: string;

    @ViewColumn()
    wedSubjectId08: string;

    @ViewColumn()
    wedSubjectId09: string;

    @ViewColumn()
    wedSubjectId10: string;

    @ViewColumn()
    wedClass01: string;

    @ViewColumn()
    wedClass02: string;

    @ViewColumn()
    wedClass03: string;

    @ViewColumn()
    wedClass04: string;

    @ViewColumn()
    wedClass05: string;

    @ViewColumn()
    wedClass06: string;

    @ViewColumn()
    wedClass07: string;

    @ViewColumn()
    wedClass08: string;

    @ViewColumn()
    wedClass09: string;

    @ViewColumn()
    wedClass10: string;

    @ViewColumn()
    thursSubjectName01: string;

    @ViewColumn()
    thursSubjectName02: string;

    @ViewColumn()
    thursSubjectName03: string;

    @ViewColumn()
    thursSubjectName04: string;

    @ViewColumn()
    thursSubjectName05: string;

    @ViewColumn()
    thursSubjectName06: string;

    @ViewColumn()
    thursSubjectName07: string;

    @ViewColumn()
    thursSubjectName08: string;

    @ViewColumn()
    thursSubjectName09: string;

    @ViewColumn()
    thursSubjectName10: string;

    @ViewColumn()
    thursSubjectId01: string;

    @ViewColumn()
    thursSubjectId02: string;

    @ViewColumn()
    thursSubjectId03: string;

    @ViewColumn()
    thursSubjectId04: string;

    @ViewColumn()
    thursSubjectId05: string;

    @ViewColumn()
    thursSubjectId06: string;

    @ViewColumn()
    thursSubjectId07: string;

    @ViewColumn()
    thursSubjectId08: string;

    @ViewColumn()
    thursSubjectId09: string;

    @ViewColumn()
    thursSubjectId10: string;

    @ViewColumn()
    thursClass01: string;

    @ViewColumn()
    thursClass02: string;

    @ViewColumn()
    thursClass03: string;

    @ViewColumn()
    thursClass04: string;

    @ViewColumn()
    thursClass05: string;

    @ViewColumn()
    thursClass06: string;

    @ViewColumn()
    thursClass07: string;

    @ViewColumn()
    thursClass08: string;

    @ViewColumn()
    thursClass09: string;

    @ViewColumn()
    thursClass10: string;

    @ViewColumn()
    firSubjectName01: string;

    @ViewColumn()
    firSubjectName02: string;

    @ViewColumn()
    firSubjectName03: string;

    @ViewColumn()
    firSubjectName04: string;

    @ViewColumn()
    firSubjectName05: string;

    @ViewColumn()
    firSubjectName06: string;

    @ViewColumn()
    firSubjectName07: string;

    @ViewColumn()
    firSubjectName08: string;

    @ViewColumn()
    firSubjectName09: string;

    @ViewColumn()
    firSubjectName10: string;

    @ViewColumn()
    firSubjectId01: string;

    @ViewColumn()
    firSubjectId02: string;

    @ViewColumn()
    firSubjectId03: string;

    @ViewColumn()
    firSubjectId04: string;

    @ViewColumn()
    firSubjectId05: string;

    @ViewColumn()
    firSubjectId06: string;

    @ViewColumn()
    firSubjectId07: string;

    @ViewColumn()
    firSubjectId08: string;

    @ViewColumn()
    firSubjectId09: string;

    @ViewColumn()
    firSubjectId10: string;

    @ViewColumn()
    firClass01: string;

    @ViewColumn()
    firClass02: string;

    @ViewColumn()
    firClass03: string;

    @ViewColumn()
    firClass04: string;

    @ViewColumn()
    firClass05: string;

    @ViewColumn()
    firClass06: string;

    @ViewColumn()
    firClass07: string;

    @ViewColumn()
    firClass08: string;

    @ViewColumn()
    firClass09: string;

    @ViewColumn()
    firClass10: string;

    @ViewColumn()
    teacher_title: number;
  
    @ViewColumn()
    teacher_firstname: string;
  
    @ViewColumn()
    teacher_lastname: string;

    @ViewColumn()
    term:string;

    @ViewColumn()
    year:string;

    @ViewColumn()
    yearTermValue:string;

    @ViewColumn()
    refId:string;

    @ViewColumn()
    teacherValue:string;
}
