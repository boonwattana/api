import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Student, TitleName } from "src/api/student/student.entity";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('student_consultant')
export class StudentConsultant extends BasicData {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ nullable: true })
  studentId?: number;

  @Column({ nullable: true })
  teacherId?: number;

  @Column({ nullable: true })
  activityDate?: Date;

  @Column({ nullable: true, type: 'time' })
  startTime?: Date;

  @Column({ nullable: true, type: 'time' })
  endTime?: Date;

  @Column({ nullable: true })
  consultantType?: number;

  @Column({ nullable: true })
  storyType?: number;

  @Column({ nullable: true })
  resultType?: number;

  @Column({ nullable: true })
  sentType?: number;

  @Column({ nullable: true })
  sentText?: string;

  @Column({ nullable: true })
  nickName?: string;


  @Column({ nullable: true })
  sendNote?: string;
  @Column({ nullable: true })
  yearTermId?: number;

}
@ViewEntity({
  name: 'student_consultant_list',
  expression: `SELECT student_consultant.id,
  student."id" as "studentId",
  student."studentNumber" as "studentNumber",
  student_consultant."activityDate",
  student_consultant."startTime",
  student_consultant."endTime",
  student_consultant."storyType",
  student_consultant."resultType",
  student_consultant."sentType",
  student_consultant."nickName",
  student_consultant."sendNote",
  concat(title."titleName", ' ', student.firstname, ' ', student.lastname) AS "studentValue",
  student."classroomId" ,
  student."classroomTypeId",
  student_consultant."yearTermId" 
 FROM student student
   LEFT JOIN student_consultant student_consultant ON student_consultant."studentId"  = student."id" AND student."deletedAt" IS NULL
   LEFT JOIN title_name title ON title.id = student.title AND title."deletedAt" IS NULL
WHERE student_consultant."deletedAt" IS null
order by student."classroomTypeId" asc ,student."classroomId" , student."studentNumber" ASC;`
})
export class VwStudentConsultantList {
  @ViewColumn()
  yearTermId: number;
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  classroomId: number;
  @ViewColumn()
  id: number;
  @ViewColumn()
  studentId: number;

  @ViewColumn()
  studentValue: string;
  @ViewColumn()
  studentNumber: number;
  @ViewColumn()
  activityDate: Date;

  @ViewColumn()
  startTime: Date;

  @ViewColumn()
  endTime: Date;

  @ViewColumn()
  storyType: number;

  @ViewColumn()
  resultType: number;

  @ViewColumn()
  sentType: number;

  @ViewColumn()
  nickName: string;

  @ViewColumn()
  sendNote: string;

}

@ViewEntity({
  name: 'student_consultant_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student_consultant.id", "value")
    .addSelect("CONCAT(student_consultant.startTime , ' ' , student_consultant.endTime)", "label")
    .from(StudentConsultant, "student_consultant")
})
export class VwStudentConsultantDropdown {

  @ViewColumn()
  value: number;

  @ViewColumn()
  label: string;
}
@ViewEntity({
  name: 'student_consultant_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student_consultant.id", "id")
    .addSelect("student_consultant.studentId", "studentId")
    .addSelect("CONCAT(student_id.firstname , ' ' , student_id.lastname)", "studentValue")
    .addSelect("student_consultant.teacherId", "teacherId")
    .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
    .addSelect("student_consultant.activityDate", "activityDate")
    .addSelect("student_consultant.startTime", "startTime")
    .addSelect("student_consultant.endTime", "endTime")
    .addSelect("student_consultant.consultantType", "consultantType")
    .addSelect("student_consultant.storyType", "storyType")
    .addSelect("student_consultant.resultType", "resultType")
    .addSelect("student_consultant.sentType", "sentType")
    .addSelect("student_consultant.sentText", "sentText")
    .addSelect("student_consultant.nickName", "nickName")
    .addSelect("student_consultant.sendNote", "sendNote")
    .from(StudentConsultant, "student_consultant")
    .leftJoin(Student, "student_id", "student_id.Id = student_consultant.studentId")
    .leftJoin(Teacher, "teacher_id", "teacher_id.Id = student_consultant.teacherId")
})
export class VwStudentConsultantItem {

  @ViewColumn()
  id: number;

  @ViewColumn()
  studentId: number;

  @ViewColumn()
  studentValue: string;

  @ViewColumn()
  teacherId: number;

  @ViewColumn()
  teacherValue: string;

  @ViewColumn()
  activityDate: Date;

  @ViewColumn()
  startTime: Date;

  @ViewColumn()
  endTime: Date;

  @ViewColumn()
  consultantType: number;

  @ViewColumn()
  storyType: number;

  @ViewColumn()
  resultType: number;

  @ViewColumn()
  sentType: number;

  @ViewColumn()
  sentText: string;

  @ViewColumn()
  nickName: string;

  @ViewColumn()
  sendNote: string;
}
