import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('active_time')
export class ActiveTime extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  activeStart?: Date;

  @Column({nullable: true})
  activeEnd?: Date;

  @Column({nullable: true})
  description?: string;

  @Column({nullable: true})
  remark?: string;
}
@ViewEntity({
    name:'active_time_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("active_time.id", "id")
        .addSelect("active_time.activeStart", "activeStart")
        .addSelect("active_time.activeEnd", "activeEnd")
        .addSelect("active_time.description", "description")
        .addSelect("active_time.remark", "remark")
        .from(ActiveTime, "active_time")
})
export class VwActiveTimeList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    activeStart: Date;

    @ViewColumn()
    activeEnd: Date;

    @ViewColumn()
    description: string;

    @ViewColumn()
    remark: string;
}

@ViewEntity({
  name:'active_time_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("active_time.id", "value")
  .addSelect("CONCAT(active_time.activeStart , '-' , active_time.activeEnd)", "label")
      .from(ActiveTime, "active_time")
})
export class VwActiveTimeDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'active_time_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("active_time.id", "id")
        .addSelect("active_time.activeStart", "activeStart")
        .addSelect("active_time.activeEnd", "activeEnd")
        .addSelect("active_time.description", "description")
        .addSelect("active_time.remark", "remark")
      .from(ActiveTime, "active_time")
})
export class VwActiveTimeItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    activeStart: Date;

    @ViewColumn()
    activeEnd: Date;

    @ViewColumn()
    description: string;

    @ViewColumn()
    remark: string;
}
