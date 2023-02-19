import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryColumn, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Province } from "src/api/province/province.entity";

@Entity('district')
export class District extends BasicData {
  @PrimaryColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  provinceId?: number;

  @Column({nullable: true})
  code?: string;

  @Column({nullable: true})
  name?: string;
}
@ViewEntity({
    name:'district_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("district.id", "id")
        .addSelect("district.provinceId", "provinceId")
        .addSelect("province_id.name", "provinceValue")
        .addSelect("district.code", "code")
        .addSelect("district.name", "name")
        .from(District, "district")
        .leftJoin(Province, "province_id","province_id.Id = district.provinceId")
})
export class VwDistrictList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    provinceId: number;

    @ViewColumn()
    provinceValue: string;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;
}

@ViewEntity({
  name:'district_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("district.id", "value")
  .addSelect("district.provinceId", "refId")
  .addSelect("district.name", "label")
      .from(District, "district")
})
export class VwDistrictDropdown {
  @ViewColumn()
  refId: number;
  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'district_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("district.id", "id")
        .addSelect("district.provinceId", "provinceId")
        .addSelect("province_id.name", "provinceValue")
        .addSelect("district.code", "code")
        .addSelect("district.name", "name")
      .from(District, "district")
        .leftJoin(Province, "province_id","province_id.Id = district.provinceId")
})
export class VwDistrictItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    provinceId: number;

    @ViewColumn()
    provinceValue: string;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;
}
