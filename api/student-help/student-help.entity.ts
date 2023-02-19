import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Student } from "src/api/student/student.entity";

@Entity('student_help')
export class StudentHelp extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  studentId?: number;
  @Column({nullable: true})
  yearTermId?: number;

  @Column({nullable: true})
  activityName?: string;

  @Column({nullable: true})
  startDate?: Date;

  @Column({nullable: true})
  endDate?: Date;

  @Column({nullable: true})
  resultHelpType?: number;

  @Column({nullable: true})
  resultText?: string;
  @Column({nullable: true})
  nickName?: string;
  
}
@ViewEntity({
    name:'student_help_list',
    expression: `select 
    sh.id,
    s."studentNumber",
    s."classroomId" ,
    s."classroomTypeId" ,
    c."name" as room,
    ct."typeName" ,
    concat(title."titleName", ' ',s.firstname, ' ', s.lastname) as "studentValue",
    s."studentCode",
    sh."activityName" ,
    sh."startDate" ,
    sh."endDate" ,
    sh."resultHelpType" ,
    sh."resultText" ,
    sh."nickName",
    s.id AS "studentId"
    from student s 
    inner join (
    select * from sdq_table st 
    inner join year_term yt on yt.id = st."yearTermId" and yt."isParent" 
    where st."sumScore_value" != 'ปกติ' 
    ) st on st."studentId" = s.id 
    left join student_help sh 
    on sh."studentId"  = s.id
    left join classroom c on c.id = s."classroomId" 
    LEFT JOIN title_name title ON title.id = s.title
    left join classroom_type ct on ct.id = s."classroomTypeId" `
})
export class VwStudentHelpList {
    @ViewColumn()
    id: number;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
    studentId: number;
    
    @ViewColumn()
    classroomTypeId: number;
    @ViewColumn()
    room: string;
    @ViewColumn()
    typeName: string;
    @ViewColumn()
    studentNumber: number;
    @ViewColumn()
    studentValue: string;

    @ViewColumn()
    activityName: string;

    @ViewColumn()
    startDate: Date;

    @ViewColumn()
    endDate: Date;

    @ViewColumn()
    resultHelpType: number;

    @ViewColumn()
    resultText: string;

    @ViewColumn()
    nickName: string;
    
}

@ViewEntity({
  name:'student_help_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_help.id", "value")
  .addSelect("CONCAT(student_help.endDate , ' ' , student_help.resultHelpType)", "label")
      .from(StudentHelp, "student_help")
})
export class VwStudentHelpDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'student_help_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_help.id", "id")
        .addSelect("student_help.studentId", "studentId")
        .addSelect("CONCAT(student_id.firstname , ' ' , student_id.lastname)", "studentValue")
        .addSelect("student_help.activityName", "activityName")
        .addSelect("student_help.startDate", "startDate")
        .addSelect("student_help.endDate", "endDate")
        .addSelect("student_help.resultHelpType", "resultHelpType")
        .addSelect("student_help.resultText", "resultText")
        .addSelect("student_help.yearTermId", "yearTermId")
        
      .from(StudentHelp, "student_help")
        .leftJoin(Student, "student_id","student_id.Id = student_help.studentId")
})
export class VwStudentHelpItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    studentId: number;

    @ViewColumn()
    studentValue: string;

    @ViewColumn()
    activityName: string;

    @ViewColumn()
    startDate: Date;

    @ViewColumn()
    endDate: Date;

    @ViewColumn()
    resultHelpType: number;

    @ViewColumn()
    resultText: string;
    @ViewColumn()
    yearTermId?: number;
}
