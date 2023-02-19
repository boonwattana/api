import { BasicData } from "../shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('IMAGES')
export class Images extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint', name: 'ID'})
  id?: number;

  @Column({ nullable: true})
  imageUrl?: string;

  @Column({ nullable: true})
  refId?: number;

  @Column({ nullable: true})
  refType?: number;

  @Column({ nullable: true})
  imageType?: number;

}