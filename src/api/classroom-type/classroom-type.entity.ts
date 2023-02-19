import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('classroom_type')
export class ClassroomType extends BasicData {

  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  typeName?: string;

  @Column({nullable: true})
  typeDescription?: string;

  @Column({nullable: true})
  remark?: string;
}
@ViewEntity({
    name:'classroom_type_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("classroom_type.id", "id")
        .addSelect("classroom_type.typeName", "typeName")
        .addSelect("classroom_type.typeDescription", "typeDescription")
        .addSelect("classroom_type.remark", "remark")
        .from(ClassroomType, "classroom_type")
})
export class VwClassroomTypeList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    typeName: string;

    @ViewColumn()
    typeDescription: string;

    @ViewColumn()
    remark: string;
}

@ViewEntity({
  name:'classroom_type_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("classroom_type.id", "value")
  .addSelect("classroom_type.typeName", "label")
  .orderBy('classroom_type.id','ASC')
      .from(ClassroomType, "classroom_type")
})
export class VwClassroomTypeDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'classroom_type_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("classroom_type.id", "id")
        .addSelect("classroom_type.typeName", "typeName")
        .addSelect("classroom_type.typeDescription", "typeDescription")
        .addSelect("classroom_type.remark", "remark")
      .from(ClassroomType, "classroom_type")
})
export class VwClassroomTypeItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    typeName: string;

    @ViewColumn()
    typeDescription: string;

    @ViewColumn()
    remark: string;
}
