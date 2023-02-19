import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('alive_with')
export class AliveWith extends BasicData {

  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  aliveWithName?: string;

  @Column({nullable: true})
  aliveWithDescription?: string;
}
@ViewEntity({
    name:'alive_with_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("alive_with.id", "id")
        .addSelect("alive_with.aliveWithName", "aliveWithName")
        .addSelect("alive_with.aliveWithDescription", "aliveWithDescription")
        .from(AliveWith, "alive_with")
})
export class VwAliveWithList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    aliveWithName: string;

    @ViewColumn()
    aliveWithDescription: string;
}

@ViewEntity({
  name:'alive_with_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("alive_with.id", "value")
  .addSelect("alive_with.aliveWithName", "label")
      .from(AliveWith, "alive_with")
})
export class VwAliveWithDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'alive_with_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("alive_with.id", "id")
        .addSelect("alive_with.aliveWithName", "aliveWithName")
        .addSelect("alive_with.aliveWithDescription", "aliveWithDescription")
      .from(AliveWith, "alive_with")
})
export class VwAliveWithItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    aliveWithName: string;

    @ViewColumn()
    aliveWithDescription: string;
}
