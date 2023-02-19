import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_research_in_class')
export class SarResearchInClass extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  name?: string;

  @Column({nullable: true})
  class?: string;
}
@ViewEntity({
    name:'sar_research_in_class_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_research_in_class.id", "id")
        .addSelect("sar_research_in_class.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_research_in_class.refId", "refId")
        .addSelect("sar_research_in_class.schoolyear", "schoolyear")
        .addSelect("sar_research_in_class.name", "name")
        .addSelect("sar_research_in_class.class", "class")
        .from(SarResearchInClass, "sar_research_in_class")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_research_in_class.teacherId")
})
export class VwSarResearchInClassList {
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
    name: string;

    @ViewColumn()
    class: string;
}

@ViewEntity({
  name:'sar_research_in_class_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_research_in_class.id", "value")
 // .addSelect("CONCAT(sar_research_in_class.null , ' ' , sar_research_in_class.null)", "label")
      .from(SarResearchInClass, "sar_research_in_class")
})
export class VwSarResearchInClassDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_research_in_class_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_research_in_class.id", "id")
        .addSelect("sar_research_in_class.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_research_in_class.refId", "refId")
        .addSelect("sar_research_in_class.schoolyear", "schoolyear")
        .addSelect("sar_research_in_class.name", "name")
        .addSelect("sar_research_in_class.class", "class")
      .from(SarResearchInClass, "sar_research_in_class")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_research_in_class.teacherId")
})
export class VwSarResearchInClassItem {

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
    name: string;

    @ViewColumn()
    class: string;
}
