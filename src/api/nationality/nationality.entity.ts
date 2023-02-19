import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('nationality')
export class Nationality extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  nationalityName?: string;

  @Column({nullable: true})
  nationalityDescription?: string;

  @Column({nullable: true})
  remark?: string;
}
@ViewEntity({
    name:'nationality_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("nationality.id", "id")
        .addSelect("nationality.nationalityName", "nationalityName")
        .addSelect("nationality.nationalityDescription", "nationalityDescription")
        .addSelect("nationality.remark", "remark")
        .from(Nationality, "nationality")
})
export class VwNationalityList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    nationalityName: string;

    @ViewColumn()
    nationalityDescription: string;

    @ViewColumn()
    remark: string;
}

@ViewEntity({
  name:'nationality_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("nationality.id", "value")
  .addSelect("nationality.nationalityName", "label")
      .from(Nationality, "nationality")
})
export class VwNationalityDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'nationality_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("nationality.id", "id")
        .addSelect("nationality.nationalityName", "nationalityName")
        .addSelect("nationality.nationalityDescription", "nationalityDescription")
        .addSelect("nationality.remark", "remark")
      .from(Nationality, "nationality")
})
export class VwNationalityItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    nationalityName: string;

    @ViewColumn()
    nationalityDescription: string;

    @ViewColumn()
    remark: string;
}
