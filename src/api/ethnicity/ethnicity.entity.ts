import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('ethnicity')
export class Ethnicity extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  ethnicityName?: string;

  @Column({nullable: true})
  ethnicityDescription?: string;

  @Column({nullable: true})
  remark?: string;
}
@ViewEntity({
    name:'ethnicity_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("ethnicity.id", "id")
        .addSelect("ethnicity.ethnicityName", "ethnicityName")
        .addSelect("ethnicity.ethnicityDescription", "ethnicityDescription")
        .addSelect("ethnicity.remark", "remark")
        .from(Ethnicity, "ethnicity")
})
export class VwEthnicityList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    ethnicityName: string;

    @ViewColumn()
    ethnicityDescription: string;

    @ViewColumn()
    remark: string;
}

@ViewEntity({
  name:'ethnicity_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("ethnicity.id", "value")
  .addSelect("ethnicity.ethnicityName", "label")
      .from(Ethnicity, "ethnicity")
})
export class VwEthnicityDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'ethnicity_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("ethnicity.id", "id")
        .addSelect("ethnicity.ethnicityName", "ethnicityName")
        .addSelect("ethnicity.ethnicityDescription", "ethnicityDescription")
        .addSelect("ethnicity.remark", "remark")
      .from(Ethnicity, "ethnicity")
})
export class VwEthnicityItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    ethnicityName: string;

    @ViewColumn()
    ethnicityDescription: string;

    @ViewColumn()
    remark: string;
}
