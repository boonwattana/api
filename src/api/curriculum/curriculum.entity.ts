import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('curriculum')
export class Curriculum extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  curriculumName?: string;

   @Column({nullable: true})
  curriculumDescription?: string;
}
@ViewEntity({
    name:'curriculum_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("curriculum.id", "id")
        .addSelect("curriculum.curriculumName", "curriculumName")
        .addSelect("curriculum.curriculumDescription", "curriculumDescription")
        .from(Curriculum, "curriculum")
})
export class VwCurriculumList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    curriculumName: string;

    @ViewColumn()
    curriculumDescription: string;
}

@ViewEntity({
  name:'curriculum_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("curriculum.id", "value")
  .addSelect("curriculum.curriculumName", "label")
      .from(Curriculum, "curriculum")
})
export class VwCurriculumDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'curriculum_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("curriculum.id", "id")
        .addSelect("curriculum.curriculumName", "curriculumName")
        .addSelect("curriculum.curriculumDescription", "curriculumDescription")
      .from(Curriculum, "curriculum")
})
export class VwCurriculumItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    curriculumName: string;

    @ViewColumn()
    curriculumDescription: string;
}
