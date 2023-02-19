import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Student, TitleName } from "src/api/student/student.entity";

@Entity('student_scolar')
export class StudentScolar extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  studentId?: number;

  @Column({nullable: true})
  name?: string;

  @Column({nullable: true})
  amount?: number;

  @Column({nullable: true})
  year?: string;

  @Column({nullable: true})
  inTerm?: string;

  @Column({nullable: true})
  getFrom?: string;
}
@ViewEntity({
    name:'student_scolar_list',
    expression: `SELECT student_scolar.id,
    student_scolar.name,
    student_scolar.amount,
    student_scolar.year,
    student_scolar."inTerm",
    student_scolar."getFrom",
    concat(title."titleName", ' ', student.firstname, ' ', student.lastname) AS "studentValue",
    student."classroomId" ,
    student ."classroomTypeId",
     student."id" as "studentId",
     student."studentNumber" as "studentNumber"
   FROM student student
     LEFT JOIN student_scolar student_scolar ON student_scolar."studentId"  = student."id" AND student."deletedAt" IS null AND student_scolar."deletedAt" IS null 
     LEFT JOIN title_name title ON title.id = student.title AND title."deletedAt" IS NULL
  WHERE student_scolar."deletedAt" IS NULL;`
})
export class VwStudentScolarList {
  @ViewColumn()
    id: number;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
    classroomTypeId: number;

    @ViewColumn()
    studentId: number;
    @ViewColumn()
    studentValue: string;

    @ViewColumn()
    studentNumber: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    amount: number;

    @ViewColumn()
    year: string;

    @ViewColumn()
    inTerm: string;



    @ViewColumn()
    getFrom: string;
}

@ViewEntity({
  name:'student_scolar_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_scolar.id", "value")
  .addSelect("CONCAT(student_scolar.name , ' ' , student_scolar.amount)", "label")
      .from(StudentScolar, "student_scolar")
})
export class VwStudentScolarDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'student_scolar_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_scolar.id", "id")
        .addSelect("student_scolar.studentId", "studentId")
        .addSelect("student_id.classroomId", "classroomId")
        .addSelect("student_id.classroomTypeId", "classroomTypeId")
        .addSelect("CONCAT(student_id.firstname , ' ' , student_id.lastname)", "studentValue")
        .addSelect("student_scolar.name", "name")
        .addSelect("student_scolar.amount", "amount")
        .addSelect("student_scolar.year", "year")
        .addSelect("student_scolar.inTerm", "inTerm")
        .addSelect("student_scolar.getFrom", "getFrom")
      .from(StudentScolar, "student_scolar")
        .leftJoin(Student, "student_id","student_id.Id = student_scolar.studentId")
})
export class VwStudentScolarItem {

  @ViewColumn()
    id: number;
    @ViewColumn()
    classroomTypeId: number;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
    studentId: number;

    @ViewColumn()
    studentValue: string;

    @ViewColumn()
    name: string;

    @ViewColumn()
    amount: number;

    @ViewColumn()
    year: string;

    @ViewColumn()
    inTerm: string;


    @ViewColumn()
    getFrom: string;
}
