import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('edit_field')
export class EditField extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  editFieldName?: string;

  @Column({nullable: true})
  editFieldDescription?: string;
}
@ViewEntity({
    name:'edit_field_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("edit_field.id", "id")
        .addSelect("edit_field.editFieldName", "editFieldName")
        .addSelect("edit_field.editFieldDescription", "editFieldDescription")
        .from(EditField, "edit_field")
})
export class VwEditFieldList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    editFieldName: string;

    @ViewColumn()
    editFieldDescription: string;
}

@ViewEntity({
  name:'edit_field_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("edit_field.id", "value")
  .addSelect("edit_field.editFieldName", "label")
      .from(EditField, "edit_field")
})
export class VwEditFieldDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'edit_field_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("edit_field.id", "id")
        .addSelect("edit_field.editFieldName", "editFieldName")
        .addSelect("edit_field.editFieldDescription", "editFieldDescription")
      .from(EditField, "edit_field")
})
export class VwEditFieldItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    editFieldName: string;

    @ViewColumn()
    editFieldDescription: string;
}
