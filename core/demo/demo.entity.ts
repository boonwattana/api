import { BasicData } from "../shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('DEMO')
export class Demo extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint', name: 'ID'})
  id?: number;

  @Column({name: 'DEMO_EMAIL', nullable: true})
  demoEmail?: string;

  @Column({name: 'DEMO_NUMBER', nullable: true})
  demoNumber?: number;

  @Column({name: 'DEMO_DATE', nullable: true})
  demoDate?: Date;

  @Column({name: 'DEMO_ENUM', nullable: true})
  demoEnum?: number;

}
@ViewEntity({
    name:'DEMO_LIST',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("demo.id", "ID")
        .addSelect("demo.demoEmail", "DEMO_EMAIL")
        .addSelect("demo.demoNumber", "DEMO_NUMBER")
        .addSelect("demo.demoDate", "DEMO_DATE")
        .addSelect("demo.demoEnum", "DEMO_ENUM")
        .from(Demo, "demo")
})
export class VwDemoList {

    @ViewColumn({name:'ID'})
    id: number;

    @ViewColumn({name:'DEMO_EMAIL'})
    demoEmail: string;

    @ViewColumn({name:'DEMO_NUMBER'})
    demoNumber: string;

    @ViewColumn({name:'DEMO_DATE'})
    demoDate: string;

    @ViewColumn({name:'DEMO_ENUM'})
    demoEnum: string;


}

@ViewEntity({
  name:'DEMO_DROPDOWN',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("demo.id", "ID")
  .addSelect("demo.demoEmail", "DEMO_EMAIL")
  .addSelect("demo.demoNumber", "DEMO_NUMBER")
  .addSelect("demo.demoDate", "DEMO_DATE")
  .addSelect("demo.demoEnum", "DEMO_ENUM")
      .from(Demo, "demo")
})
export class VwDemoDropdown {

  @ViewColumn({name:'ID'})
    id: number;

    @ViewColumn({name:'DEMO_EMAIL'})
    demoEmail: string;

    @ViewColumn({name:'DEMO_NUMBER'})
    demoNumber: string;

    @ViewColumn({name:'DEMO_DATE'})
    demoDate: string;

    @ViewColumn({name:'DEMO_ENUM'})
    demoEnum: string;
}
@ViewEntity({
  name:'DEMO_ITEM',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("demo.id", "ID")
  .addSelect("demo.demoEmail", "DEMO_EMAIL")
  .addSelect("demo.demoNumber", "DEMO_NUMBER")
  .addSelect("demo.demoDate", "DEMO_DATE")
  .addSelect("demo.demoEnum", "DEMO_ENUM")
      .from(Demo, "demo")
})
export class VwDemoItem {

  @ViewColumn({name:'ID'})
    id: number;

    @ViewColumn({name:'DEMO_EMAIL'})
    demoEmail: string;

    @ViewColumn({name:'DEMO_NUMBER'})
    demoNumber: number;

    @ViewColumn({name:'DEMO_DATE'})
    demoDate: Date;

    @ViewColumn({name:'DEMO_ENUM'})
    demoEnum: string;
}

@ViewEntity({
  name:'DB_STUDENT_BY_CLASS',
  expression: `select count(s.id),ct."typeName"  from 
  classroom_type ct   
  left join
  student s on s."classroomTypeId"  = ct.id  and ct."deletedAt" is null
  where s."deletedAt" is null and s.status != 2
  group by s."classroomTypeId",ct."typeName",ct.id 
  order by ct.id `
})
export class VwbStudentByClass {

  @ViewColumn()
    count: number;
    @ViewColumn()
    typeName: string;
}
@ViewEntity({
  name:'DB_STUDENT_BY_GENDAR',
  expression: `select count(s.id),g."gendarName"  from gendar g 
  left join student s on g.id = s."gendarId" 
  where s.status != 2
  group by g.id,g."gendarName"
  order by g.id `
})
export class VwbStudentByGendar {

  @ViewColumn()
  count: number;
  @ViewColumn()
  gendarName: string;
}
@ViewEntity({
  name:'DB_TEACHER_BY_GENDAR',
  expression: `select count(t.id),g."gendarName"  from gendar g 
  left join teacher t on g.id = t."gendarId" 
  group by g.id,g."gendarName"
  order by g.id`
})
export class VwbTeacherByGendar {
  @ViewColumn()
  count: number;
  @ViewColumn()
  gendarName: string;

}