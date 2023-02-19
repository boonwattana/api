import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('parent_status')
export class ParentStatus extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  parentStatusName?: string;

  @Column({nullable: true})
  parentStatusDescription?: string;
}
@ViewEntity({
    name:'parent_status_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("parent_status.id", "id")
        .addSelect("parent_status.parentStatusName", "parentStatusName")
        .addSelect("parent_status.parentStatusDescription", "parentStatusDescription")
        .from(ParentStatus, "parent_status")
})
export class VwParentStatusList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    parentStatusName: string;

    @ViewColumn()
    parentStatusDescription: string;
}

@ViewEntity({
  name:'parent_status_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("parent_status.id", "value")
  .addSelect("parent_status.parentStatusName", "label")
      .from(ParentStatus, "parent_status")
})
export class VwParentStatusDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'parent_status_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("parent_status.id", "id")
        .addSelect("parent_status.parentStatusName", "parentStatusName")
        .addSelect("parent_status.parentStatusDescription", "parentStatusDescription")
      .from(ParentStatus, "parent_status")
})
export class VwParentStatusItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    parentStatusName: string;

    @ViewColumn()
    parentStatusDescription: string;
}
