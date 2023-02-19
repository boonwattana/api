import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { ClassroomType } from "src/api/classroom-type/classroom-type.entity";

@Entity('classroom')
export class Classroom extends BasicData {

  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;


  @Column({nullable: true})
  name?: string;

  @Column({nullable: true})
  mentorFirst?: string;

  @Column({nullable: true})
  mentoeSecond?: string;
}
@ViewEntity({
    name:'classroom_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("classroom.id", "id")
        .addSelect("classroom.mentorFirst", "mentorFirst")
        .addSelect("classroom.mentoeSecond", "mentoeSecond")
        .addSelect("classroom.name", "name")
        .from(Classroom, "classroom")
})
export class VwClassroomList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    mentorFirst: string;

    @ViewColumn()
    mentoeSecond: string;
    @ViewColumn()
    name?: string;
}

@ViewEntity({
  name:'classroom_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("classroom.id", "value")
  .addSelect("classroom.name", "label")
  .orderBy('classroom.id','ASC')
  .from(Classroom, "classroom")
  
})
export class VwClassroomDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'classroom_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("classroom.id", "id")
        .addSelect("classroom.mentorFirst", "mentorFirst")
        .addSelect("classroom.mentoeSecond", "mentoeSecond")
        .addSelect("classroom.name", "name")
      .from(Classroom, "classroom")
})
export class VwClassroomItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    mentorFirst: string;

    @ViewColumn()
    mentoeSecond: string;
    @ViewColumn()
    name?: string;
}
