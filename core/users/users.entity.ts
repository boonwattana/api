import {BeforeInsert, Column, Connection, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, ViewColumn, ViewEntity} from "typeorm";
import {BasicData} from "../shared/entities/basic-data";
@Entity('USERS')
export class Users extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;
  @Column({ nullable: true, length: 65})
  username?: string;

  @Column({ nullable: true})
  password?: string;
  @Column({ nullable: true})
  token?: string;
  @Column({ nullable: true})
  firstname?:string;
  @Column({nullable: true})
  lastname?:string;
  @Column({nullable: true})
  type?:string;
  @Column({nullable: true})
  inforId?:number
  @Column({nullable: true})
  isGuid?: boolean;
}
@ViewEntity({
  name:'users_list',
  expression: (connection: Connection) => connection.createQueryBuilder()
      .select("users.id", "id")
      .addSelect("users.username", "username")
      .addSelect("users.firstname", "firstname")
      .addSelect("users.lastname", "lastname")
      .addSelect("users.type", "type")
      .from(Users, "users")
})
export class VwUsersList {
  @ViewColumn()
  id: number;

  @ViewColumn()
  username: string;

  @ViewColumn()
  firstname: string;

  @ViewColumn()
  lastname: string;

  @ViewColumn()
  type: string;
}

@ViewEntity({
name:'users_dropdown',
expression: (connection: Connection) => connection.createQueryBuilder()
.select("users.id", "value")
.addSelect("CONCAT(users.firstname , ' ' , users.lastname)", "label")
    .from(Users, "users")
})
export class VwUsersDropdown {

@ViewColumn()
  value: number;

  @ViewColumn()
  label: string;
}
@ViewEntity({
name:'users_item',
expression: (connection: Connection) => connection.createQueryBuilder()
.select("users.id", "id")
      .addSelect("users.username", "username")
      .addSelect("users.firstname", "firstname")
      .addSelect("users.lastname", "lastname")
      .addSelect("users.type", "type")
      .addSelect("users.isGuid","isGuid")

    .from(Users, "users")
})
export class VwUsersItem {

@ViewColumn()
  id: number;

  @ViewColumn()
  username: string;

  @ViewColumn()
  firstname: string;

  @ViewColumn()
  lastname: string;

  @ViewColumn()
  type: string;
  @ViewColumn()
  isGuid:boolean
}