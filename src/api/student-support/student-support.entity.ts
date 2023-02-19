import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";
import { ClassroomType } from "../classroom-type/classroom-type.entity";
import { Classroom } from "../classroom/classroom.entity";
import { District } from "../district/district.entity";
import { Gendar } from "../gendar/gendar.entity";
import { Province } from "../province/province.entity";
import { Student, TitleName } from "../student/student.entity";
import { SubDistrict } from "../sub-district/sub-district.entity";

@Entity('student_support')
export class StudentSupport extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  startDate?: Date;

  @Column({nullable: true})
  endDate?: Date;

  @Column({nullable: true})
  activityName?: string;

  @Column({nullable: true})
  performance?: number;

  @Column({nullable: true})
  department?: string;

  @Column({nullable: true})
  result?: string;
  @Column({nullable: true})
  performanceText?: string;
  
  @Column({nullable: true})
  teacherId?: number;
  @Column({nullable: true})
  yearTermId?: number;
}
@Entity('student_has_support')
export class StudentHasSupport extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  studentId?: number;

  @Column({nullable: true})
  studentSupportId?: number;

}
@ViewEntity({
    name:'student_support_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("student_support.id", "id")
        .addSelect("student_support.startDate", "startDate")
        .addSelect("student_support.endDate", "endDate")
        .addSelect("student_support.activityName", "activityName")
        .addSelect("student_support.performance", "performance")
        .addSelect("student_support.department", "department")
        .addSelect("student_support.result", "result")
        .addSelect("student_support.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .from(StudentSupport, "student_support")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = student_support.teacherId")
})
export class VwStudentSupportList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    startDate: Date;

    @ViewColumn()
    endDate: Date;

    @ViewColumn()
    activityName: string;

    @ViewColumn()
    performance: number;

    @ViewColumn()
    department: string;

    @ViewColumn()
    result: string;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;
}

@ViewEntity({
  name: 'has_student_list',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student.id", "id")
    .addSelect("student.studentCode", "studentCode")
    .addSelect("st.id", "hasStudentId")
    .addSelect("st.studentSupportId", "studentSupportId")
    .addSelect("student.studentNumber", "studentNumber")
    .addSelect("student.status", "status")
    .addSelect("student.firstname", "firstname")
    .addSelect("student.lastname", "lastname")
    .addSelect("CONCAT(student.firstname,' ',student.lastname) ", "nameValue")
    .addSelect("student.gendarId", "gendarId")
    .addSelect("TO_CHAR(student.birthDate, 'DD/MM/YYYY') ", "birthDate")
    .addSelect("student.personalCode", "personalCode")
    .addSelect("CONCAT(student.houseNumber,' ',student.road,'  ',student.village, ' ' ,sub_district.name, ' ' ,district.name, ' ' ,province.name)", "addressValue")
    .addSelect("student.classroomId", "classroomId")
    .addSelect("student.houseNumber", "houseNumber")
    .addSelect("student.classroomTypeId", "classroomTypeId")
    .addSelect("classroom.name", "classroomValue")
    .addSelect("gendar_id.gendarName", "gendarValue")
    .addSelect("classroom_type.typeName", "classroomTypeValue")
    .addSelect("student.phoneNumber", "phoneNumber")
    .from(Student, "student")
    .innerJoin(StudentHasSupport,'st','st.studentId = student.id')
    .leftJoin(Gendar, "gendar_id", "gendar_id.Id = student.gendarId")
    .leftJoin(Classroom, "classroom", "classroom.Id = student.classroomId")
    .leftJoin(ClassroomType, "classroom_type", "classroom_type.Id = student.classroomTypeId")
    .leftJoin(Province, 'province', 'student.provinceId = province.id')
    .leftJoin(District, 'district', 'district.id = student.districtId')
    .leftJoin(SubDistrict, 'sub_district', 'sub_district.id = student.subDistrictId')

})
export class VwHasStudentList {
  @ViewColumn()
  id: number;
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  studentSupportId: number;
  @ViewColumn()
  hasStudentId: number;
  @ViewColumn()
  studentCode: string;

  @ViewColumn()
  studentNumber: number;

  @ViewColumn()
  classroomTypeValue: string;
  @ViewColumn()
  phoneNumber: string;

  @ViewColumn()
  nameValue: string;
  @ViewColumn()
  birthDate: string;
  @ViewColumn()
  addressValue: string;

  @ViewColumn()
  status: number;

  @ViewColumn()
  firstname: string;

  @ViewColumn()
  lastname: string;

  @ViewColumn()
  gendarId: number;

  @ViewColumn()
  gendarValue: string;

  @ViewColumn()
  classroomId: number;

  @ViewColumn()
  classroomValue: string;
  @ViewColumn()
  personalCode: string;

}
// @ViewEntity({
//   name:'has_student_list',
//   expression: (connection: Connection) => connection.createQueryBuilder()
//       .select("student_has_support.studentId", "id")
//       .addSelect("student_has_support.startDate", "startDate")
//       .addSelect("student_has_support.endDate", "endDate")
//       .addSelect("student_support.activityName", "activityName")
//       .addSelect("student_support.performance", "performance")
//       .addSelect("student_support.department", "department")
//       .addSelect("student_support.result", "result")
//       .addSelect("student_support.teacherId", "teacherId")
//       .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
//       .from(StudentSupport, "student_support")
//       .leftJoin(Teacher, "teacher_id","teacher_id.Id = student_support.teacherId")
// })
// export class VwHasStudentList {
//   @ViewColumn()
//   id: number;

//   @ViewColumn()
//   startDate: Date;

//   @ViewColumn()
//   endDate: Date;

//   @ViewColumn()
//   activityName: string;

//   @ViewColumn()
//   performance: number;

//   @ViewColumn()
//   department: string;

//   @ViewColumn()
//   result: string;

//   @ViewColumn()
//   teacherId: number;

//   @ViewColumn()
//   teacherValue: string;
// }
@ViewEntity({
  name:'student_support_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_support.id", "value")
  .addSelect("CONCAT(student_support.activityName , ' ' , student_support.performance)", "label")
      .from(StudentSupport, "student_support")
})
export class VwStudentSupportDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'student_support_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_support.id", "id")
        .addSelect("student_support.startDate", "startDate")
        .addSelect("student_support.endDate", "endDate")
        .addSelect("student_support.activityName", "activityName")
        .addSelect("student_support.performance", "performance")
        .addSelect("student_support.department", "department")
        .addSelect("student_support.result", "result")
        .addSelect("student_support.performanceText", "performanceText")
        .addSelect("student_support.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
      .from(StudentSupport, "student_support")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = student_support.teacherId")
})
export class VwStudentSupportItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    startDate: Date;

    @ViewColumn()
    endDate: Date;

    @ViewColumn()
    activityName: string;
    @ViewColumn()
    performanceText: string;
    
    @ViewColumn()
    performance: number;

    @ViewColumn()
    department: string;

    @ViewColumn()
    result: string;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;
}
