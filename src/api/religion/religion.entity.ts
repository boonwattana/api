import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('religion')
export class Religion extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  religionName?: string;

  @Column({nullable: true})
  religionDescription?: string;

  @Column({nullable: true})
  remark?: string;
}
@ViewEntity({
    name:'religion_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("religion.id", "id")
        .addSelect("religion.religionName", "religionName")
        .addSelect("religion.religionDescription", "religionDescription")
        .addSelect("religion.remark", "remark")
        .from(Religion, "religion")
})
export class VwReligionList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    religionName: string;

    @ViewColumn()
    religionDescription: string;

    @ViewColumn()
    remark: string;
}

@ViewEntity({
  name:'religion_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("religion.id", "value")
  .addSelect("religion.religionName", "label")
      .from(Religion, "religion")
})
export class VwReligionDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'religion_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("religion.id", "id")
        .addSelect("religion.religionName", "religionName")
        .addSelect("religion.religionDescription", "religionDescription")
        .addSelect("religion.remark", "remark")
      .from(Religion, "religion")
})
export class VwReligionItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    religionName: string;

    @ViewColumn()
    religionDescription: string;

    @ViewColumn()
    remark: string;
}
