import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryColumn, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('country')
export class Country extends BasicData {
  @PrimaryColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  code?: string;

  @Column({nullable: true})
  name?: string;
}
@ViewEntity({
    name:'country_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("country.id", "id")
        .addSelect("country.code", "code")
        .addSelect("country.name", "name")
        .from(Country, "country")
})
export class VwCountryList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;
}

@ViewEntity({
  name:'country_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("country.id", "value")
  .addSelect("country.name", "label")
      .from(Country, "country")
})
export class VwCountryDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'country_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("country.id", "id")
        .addSelect("country.code", "code")
        .addSelect("country.name", "name")
      .from(Country, "country")
})
export class VwCountryItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;
}
