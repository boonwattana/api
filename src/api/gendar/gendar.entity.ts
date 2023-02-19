import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('gendar')
export class Gendar extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  gendarName?: string;

  @Column({nullable: true})
  gendarDescription?: string;
}
@ViewEntity({
    name:'gendar_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("gendar.id", "id")
        .addSelect("gendar.gendarName", "gendarName")
        .addSelect("gendar.gendarDescription", "gendarDescription")
        .from(Gendar, "gendar")
})
export class VwGendarList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    gendarName: string;

    @ViewColumn()
    gendarDescription: string;
}

@ViewEntity({
  name:'gendar_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("gendar.id", "value")
  .addSelect("gendar.gendarName", "label")
      .from(Gendar, "gendar")
})
export class VwGendarDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'gendar_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("gendar.id", "id")
        .addSelect("gendar.gendarName", "gendarName")
        .addSelect("gendar.gendarDescription", "gendarDescription")
      .from(Gendar, "gendar")
})
export class VwGendarItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    gendarName: string;

    @ViewColumn()
    gendarDescription: string;
}
