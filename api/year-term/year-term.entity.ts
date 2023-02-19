import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";

@Entity('year_term')
export class YearTerm extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  year?: string;

  @Column({nullable: true})
  term?: string;

  @Column({nullable: true})
  isParent?: boolean;
}
@ViewEntity({
    name:'year_term_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("year_term.id", "id")
        .addSelect("year_term.year", "year")
        .addSelect("year_term.term", "term")
        .addSelect("year_term.isParent", "isParent")
        .from(YearTerm, "year_term")
})
export class VwYearTermList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    year: string;

    @ViewColumn()
    term: string;

    @ViewColumn()
    isParent: boolean;
}

@ViewEntity({
  name:'year_term_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("year_term.id", "value")
  .addSelect("CONCAT('ปีการศึกษา ',year_term.year  , ' ภาคเรียนที่' , year_term.term )", "label")
      .from(YearTerm, "year_term")
})
export class VwYearTermDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'year_term_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("year_term.id", "id")
        .addSelect("year_term.year", "year")
        .addSelect("year_term.term", "term")
        .addSelect("year_term.isParent", "isParent")
      .from(YearTerm, "year_term")
})
export class VwYearTermItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    year: string;

    @ViewColumn()
    term: string;

    @ViewColumn()
    isParent: boolean;
}
