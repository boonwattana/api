import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('practicle')
export class Practicle extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  name?: string;

  @Column({nullable: true})
  descrition?: string;
}
@ViewEntity({
    name:'practicle_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("practicle.id", "id")
        .addSelect("practicle.name", "name")
        .addSelect("practicle.descrition", "descrition")
        .from(Practicle, "practicle")
})
export class VwPracticleList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    descrition: string;
}

@ViewEntity({
  name:'practicle_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("practicle.id", "value")
  .addSelect("practicle.name", "label")
      .from(Practicle, "practicle")
})
export class VwPracticleDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'practicle_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("practicle.id", "id")
        .addSelect("practicle.name", "name")
        .addSelect("practicle.descrition", "descrition")
      .from(Practicle, "practicle")
})
export class VwPracticleItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    descrition: string;
}
