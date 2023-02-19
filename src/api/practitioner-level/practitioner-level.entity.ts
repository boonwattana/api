import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('practitioner_level')
export class PractitionerLevel extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  levelName?: string;

  @Column({nullable: true})
  levelDescription?: string;
}
@ViewEntity({
    name:'practitioner_level_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("practitioner_level.id", "id")
        .addSelect("practitioner_level.levelName", "levelName")
        .addSelect("practitioner_level.levelDescription", "levelDescription")
        .from(PractitionerLevel, "practitioner_level")
})
export class VwPractitionerLevelList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    levelName: string;

    @ViewColumn()
    levelDescription: string;
}

@ViewEntity({
  name:'practitioner_level_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("practitioner_level.id", "value")
  .addSelect("practitioner_level.levelName", "label")
      .from(PractitionerLevel, "practitioner_level")
})
export class VwPractitionerLevelDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'practitioner_level_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("practitioner_level.id", "id")
        .addSelect("practitioner_level.levelName", "levelName")
        .addSelect("practitioner_level.levelDescription", "levelDescription")
      .from(PractitionerLevel, "practitioner_level")
})
export class VwPractitionerLevelItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    levelName: string;

    @ViewColumn()
    levelDescription: string;
}
