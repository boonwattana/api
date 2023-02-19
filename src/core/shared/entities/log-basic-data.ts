import {Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from 'typeorm';

export abstract class LogBasicData {
  @CreateDateColumn({
    name: 'CREATED_AT',
    type: 'datetimeoffset',
    default: () => 'getutcdate()'
  })
  createdAt?: Date;

  @Column({name: 'CREATED_BY', nullable: true})
  createdBy?: string;
}