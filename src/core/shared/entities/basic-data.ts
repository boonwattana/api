import {Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from 'typeorm';

export abstract class BasicData {
  @Column({ default: true})
  active?: boolean;

  @Column({default: false})
  deleted?: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt?: Date;

  @Column({nullable: true})
  createdBy?: string;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt?: Date;

  @Column({ nullable: true})
  updatedBy?: string;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true
  })
  deletedAt?: Date;

  @Column({nullable: true})
  deletedBy?: string;
}