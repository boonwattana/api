import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryColumn, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Country } from "src/api/country/country.entity";

@Entity('province')
export class Province extends BasicData {
  @PrimaryColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  countryId?: number;

  @Column({nullable: true})
  code?: string;

  @Column({nullable: true})
  name?: string;
}
@ViewEntity({
    name:'province_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("province.id", "id")
        .addSelect("province.countryId", "countryId")
        .addSelect("country_id.name", "countryValue")
        .addSelect("province.code", "code")
        .addSelect("province.name", "name")
        .from(Province, "province")
        .leftJoin(Country, "country_id","country_id.Id = province.countryId")
})
export class VwProvinceList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    countryId: number;

    @ViewColumn()
    countryValue: string;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;
}

@ViewEntity({
  name:'province_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("province.id", "value")
  .addSelect("province.countryId", "refId")
  .addSelect(" province.name", "label")
      .from(Province, "province")
})
export class VwProvinceDropdown {
  @ViewColumn()
    refId: number;
  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'province_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("province.id", "id")
        .addSelect("province.countryId", "countryId")
        .addSelect("country_id.name", "countryValue")
        .addSelect("province.code", "code")
        .addSelect("province.name", "name")
      .from(Province, "province")
        .leftJoin(Country, "country_id","country_id.Id = province.countryId")
})
export class VwProvinceItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    countryId: number;

    @ViewColumn()
    countryValue: string;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;
}
