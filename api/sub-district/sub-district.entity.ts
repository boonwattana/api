import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryColumn, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { District } from "src/api/district/district.entity";

@Entity('sub_district')
export class SubDistrict extends BasicData {
  @PrimaryColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  districtId?: number;

  @Column({nullable: true})
  code?: string;

  @Column({nullable: true})
  name?: string;

  @Column({nullable: true})
  postCode?: string;
}
@ViewEntity({
    name:'sub_district_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sub_district.id", "id")
        .addSelect("sub_district.districtId", "districtId")
        .addSelect("district_id.name", "districtValue")
        .addSelect("sub_district.code", "code")
        .addSelect("sub_district.name", "name")
        .addSelect("sub_district.postCode", "postCode")
        .from(SubDistrict, "sub_district")
        .leftJoin(District, "district_id","district_id.Id = sub_district.districtId")
})
export class VwSubDistrictList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    districtId: number;

    @ViewColumn()
    districtValue: string;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;

    @ViewColumn()
    postCode: string;
}

@ViewEntity({
  name:'sub_district_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sub_district.id", "value")
  .addSelect("sub_district.districtId", "refId")
  .addSelect("sub_district.name", "label")
  .addSelect("sub_district.postCode", "postCode")
      .from(SubDistrict, "sub_district")
})
export class VwSubDistrictDropdown {
  @ViewColumn()
    refId: number;
  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
    @ViewColumn()
    postCode: string;
    
}
@ViewEntity({
  name:'sub_district_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sub_district.id", "id")
        .addSelect("sub_district.districtId", "districtId")
        .addSelect("district_id.name", "districtValue")
        .addSelect("sub_district.code", "code")
        .addSelect("sub_district.name", "name")
        .addSelect("sub_district.postCode", "postCode")
      .from(SubDistrict, "sub_district")
        .leftJoin(District, "district_id","district_id.Id = sub_district.districtId")
})
export class VwSubDistrictItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    districtId: number;

    @ViewColumn()
    districtValue: string;

    @ViewColumn()
    code: string;

    @ViewColumn()
    name: string;

    @ViewColumn()
    postCode: string;
}
