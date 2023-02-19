import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { ClassroomType } from "../classroom-type/classroom-type.entity";
import { Classroom } from "../classroom/classroom.entity";
import { District } from "../district/district.entity";
import { Gendar } from "../gendar/gendar.entity";
import { Province } from "../province/province.entity";
import { Student, TitleName } from "../student/student.entity";
import { SubDistrict } from "../sub-district/sub-district.entity";
//import { null } from "src/api/null/null.entity";

@Entity('student_home_visit')
export class StudentHomeVisit extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  studentHomeVisitId?: number;

  @Column({nullable: true})
  homeVisitday?: Date;


  @Column({nullable: true})
  studentId?: number;

  @Column({nullable: true})
  getMoneyForSchool?: string;

  @Column({nullable: true})
  liveWith?: number;

  @Column({nullable: true})
  liveWithOther?: string;

  @Column({nullable: true})
  totalHouseholdMember?: number;

  @Column({nullable: true})
  totalIncludeStudent?: number;

  @Column({nullable: true})
  totalBrother1?: number;

  @Column({nullable: true})
  totalBrather2?: number;

  @Column({nullable: true})
  totalSister1?: number;

  @Column({nullable: true})
  totalSister2?: number;

  @Column({nullable: true})
  totalStudentLeaning?: number;

  @Column({nullable: true})
  totalStudentSchool?: number;

  @Column({nullable: true})
  studentNumberFamily?: number;

  @Column({nullable: true})
  familyStatus?: number;

  @Column({nullable: true})
  fatherOccupation?: string;

  @Column({nullable: true})
  fatherIncome?: string;

  @Column({nullable: true})
  motherOccupation?: string;

  @Column({nullable: true})
  motherIncome?: string;

  @Column({nullable: true})
  parentOccupation?: string;

  @Column({nullable: true})
  parentIncome?: string;

  @Column({nullable: true})
  howParentsNurtureStudents?: number;

  @Column({nullable: true})
  howParentsNurtureStudentsOther?: string;

  @Column({nullable: true})
  familyMemberRelationships?: number;

  @Column({nullable: true})
  memberMeetTogether?: number;

  @Column({nullable: true})
  memberMeetTogetherOther?: string;

  @Column({nullable: true})
  studentAreClosest?: number;

  @Column({nullable: true})
  studentAreClosestOther?: string;

  @Column({nullable: true})
  communityEnvironment?: number;

  @Column({nullable: true})
  communityEnvironmentRisk?: string;

  @Column({nullable: true})
  visitTraveledBy?: number;

  @Column({nullable: true})
  visitTraveledByOther?: string;

  @Column({nullable: true})
  residenceStatus?: number;

  @Column({nullable: true})
  residenceStatusOther?: string;

  @Column({nullable: true})
  natureOfAddress?: number;

  @Column({nullable: true})
  comeToSchool?: number;

  @Column({nullable: true})
  distanceHomeAndSchool?: number;

  @Column({nullable: true})
  routeOfTravelToSchool?: number;

  @Column({nullable: true})
  routeOfTravelToSchoolOther?: string;

  @Column({nullable: true})
  roleInHome?: number;

  @Column({nullable: true})
  roleInHomeOther?: string;

  @Column({nullable: true})
  hobbies?: number;

  @Column({nullable: true})
  hobbiesOther?: string;

  @Column({nullable: true})
  readFrequency?: number;

  @Column({nullable: true})
  schoolSupplieStorageFrequency?: number;

  @Column({nullable: true})
  workBookCheckedFrequency?: number;

  @Column({nullable: true})
  behaviorOfStudent?: string;

  @Column({nullable: true})
  needsToBeImporoved?: string;

  @Column({nullable: true})
  needToDevelop?: string;

  @Column({nullable: true})
  punishAndReward?: string;

  @Column({nullable: true})
  parentMakeFriend?: string;

  @Column({nullable: true})
  plandToFuture?: string;

  @Column({nullable: true})
  findOutInterest?: string;

  @Column({nullable: true})
  isHelpStudentNeed?: boolean;

  @Column({nullable: true})
  studyNeed?: boolean;

  @Column({nullable: true})
  healthNeed?: boolean;

  @Column({nullable: true})
  moneyNeed?: boolean;

  @Column({nullable: true})
  speacialNeed?: boolean;
  @Column({nullable: true})
  yearTermId:number
  @Column({nullable: true})
  lat?: string;
  @Column({nullable: true})
  lon?: string;
  @Column({nullable: true})
  googleMap?: string;
}
@ViewEntity({
    name:'student_home_visit_list',
    expression: (connection: Connection) => connection.createQueryBuilder()

    .select("student.id", "id")
    .addSelect("student.classroomId", "classroomId")
    .addSelect("student.studentNumber", "studentNumber")
    .addSelect("student.classroomTypeId", "classroomTypeId")
    .addSelect("classroom.name", "classroomValue")
    .addSelect("classroom_type.typeName", "classroomTypeValue")
    .addSelect("student_home_visit.id", "studentHomeVisitId")
    .addSelect("student_home_visit.homeVisitday", "homeVisitday")
    .addSelect("student_home_visit.studentId", "studentId")
    .addSelect("student_home_visit.yearTermId", "yearTermId")
    .addSelect(`CONCAT(title."titleName",' ',student.firstname,' ',student.lastname) `, "studentValue")
    .from(Student, "student")
    .leftJoin(StudentHomeVisit,"student_home_visit" ,"student_home_visit.studentId = student.id")
    .leftJoin(Classroom, "classroom","classroom.Id = student.classroomId")
    .leftJoin(ClassroomType, "classroom_type","classroom_type.Id = student.classroomTypeId")
    .leftJoin(TitleName, 'title', 'title.id = student.title')

})
export class VwStudentHomeVisitList {
    @ViewColumn()
    id: number;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
    yearTermId: number;
    
    @ViewColumn()
    classroomTypeId: number;

    @ViewColumn()
    classroomValue: string;
    @ViewColumn()
    classroomTypeValue: string;
    @ViewColumn()
    homeVisitday: Date;

    

    @ViewColumn()
    studentId: number;

    @ViewColumn()
    studentNumber: number;

   @ViewColumn()
   studentValue: string;
   
}

@ViewEntity({
  name:'student_home_visit_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_home_visit.id", "value")
  .addSelect("student_home_visit.homeVisitday", "label")
      .from(StudentHomeVisit, "student_home_visit")
})
export class VwStudentHomeVisitDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'student_home_visit_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("student_home_visit.id", "id")
        .addSelect("student_home_visit.homeVisitday", "homeVisitday")
        .addSelect("student_home_visit.studentId", "studentId")
        .addSelect("student_home_visit.getMoneyForSchool", "getMoneyForSchool")
        .addSelect("student_home_visit.liveWith", "liveWith")
        .addSelect("student_home_visit.liveWithOther", "liveWithOther")
        .addSelect("student_home_visit.totalHouseholdMember", "totalHouseholdMember")
        .addSelect("student.studentNumber", "studentNumber")

        .addSelect(`CONCAT(title."titleName",' ',student.firstname,' ',student.lastname) `, "studentValue")
        .addSelect("student_home_visit.totalIncludeStudent", "totalIncludeStudent")
        .addSelect("student_home_visit.totalBrother1", "totalBrother1")
        .addSelect("student_home_visit.totalBrather2", "totalBrather2")
        .addSelect("student_home_visit.totalSister1", "totalSister1")
        .addSelect("student_home_visit.totalSister2", "totalSister2")
        .addSelect("student_home_visit.totalStudentLeaning", "totalStudentLeaning")
        .addSelect("student_home_visit.totalStudentSchool", "totalStudentSchool")
        .addSelect("student_home_visit.studentNumberFamily", "studentNumberFamily")
        .addSelect("student_home_visit.familyStatus", "familyStatus")
        .addSelect("student_home_visit.fatherOccupation", "fatherOccupation")
        .addSelect("student_home_visit.fatherIncome", "fatherIncome")
        .addSelect("student_home_visit.motherOccupation", "motherOccupation")
        .addSelect("student_home_visit.motherIncome", "motherIncome")
        .addSelect("student_home_visit.parentOccupation", "parentOccupation")
        .addSelect("student_home_visit.parentIncome", "parentIncome")
        .addSelect("student_home_visit.howParentsNurtureStudents", "howParentsNurtureStudents")
        .addSelect("student_home_visit.howParentsNurtureStudentsOther", "howParentsNurtureStudentsOther")
        .addSelect("student_home_visit.familyMemberRelationships", "familyMemberRelationships")
        .addSelect("student_home_visit.memberMeetTogether", "memberMeetTogether")
        .addSelect("student_home_visit.memberMeetTogetherOther", "memberMeetTogetherOther")
        .addSelect("student_home_visit.studentAreClosest", "studentAreClosest")
        .addSelect("student_home_visit.studentAreClosestOther", "studentAreClosestOther")
        .addSelect("student_home_visit.communityEnvironment", "communityEnvironment")
        .addSelect("student_home_visit.communityEnvironmentRisk", "communityEnvironmentRisk")
        .addSelect("student_home_visit.visitTraveledBy", "visitTraveledBy")
        .addSelect("student_home_visit.visitTraveledByOther", "visitTraveledByOther")
        .addSelect("student_home_visit.residenceStatus", "residenceStatus")
        .addSelect("student_home_visit.residenceStatusOther", "residenceStatusOther")
        .addSelect("student_home_visit.natureOfAddress", "natureOfAddress")
        .addSelect("student_home_visit.comeToSchool", "comeToSchool")
        .addSelect("student_home_visit.distanceHomeAndSchool", "distanceHomeAndSchool")
        .addSelect("student_home_visit.routeOfTravelToSchool", "routeOfTravelToSchool")
        .addSelect("student_home_visit.routeOfTravelToSchoolOther", "routeOfTravelToSchoolOther")
        .addSelect("student_home_visit.roleInHome", "roleInHome")
        .addSelect("student_home_visit.roleInHomeOther", "roleInHomeOther")
        .addSelect("student_home_visit.hobbies", "hobbies")
        .addSelect("student_home_visit.hobbiesOther", "hobbiesOther")
        .addSelect("student_home_visit.readFrequency", "readFrequency")
        .addSelect("student_home_visit.schoolSupplieStorageFrequency", "schoolSupplieStorageFrequency")
        .addSelect("student_home_visit.workBookCheckedFrequency", "workBookCheckedFrequency")
        .addSelect("student_home_visit.behaviorOfStudent", "behaviorOfStudent")
        .addSelect("student_home_visit.needsToBeImporoved", "needsToBeImporoved")
        .addSelect("student_home_visit.needToDevelop", "needToDevelop")
        .addSelect("student_home_visit.punishAndReward", "punishAndReward")
        .addSelect("student_home_visit.parentMakeFriend", "parentMakeFriend")
        .addSelect("student_home_visit.plandToFuture", "plandToFuture")
        .addSelect("student_home_visit.findOutInterest", "findOutInterest")
        .addSelect("student_home_visit.isHelpStudentNeed", "isHelpStudentNeed")
        .addSelect("student_home_visit.studyNeed", "studyNeed")
        .addSelect("student_home_visit.healthNeed", "healthNeed")
        .addSelect("student_home_visit.moneyNeed", "moneyNeed")
        .addSelect("student_home_visit.speacialNeed", "speacialNeed")
        .addSelect("student_home_visit.googleMap", "googleMap")
        .addSelect("student_home_visit.lat", "lat")
        .addSelect("student_home_visit.lon", "lon")
        .addSelect("student_home_visit.yearTermId", "yearTermId")
      .from(StudentHomeVisit, "student_home_visit")
      .leftJoin(Student , 'student','student.id = student_home_visit.studentId')
      .leftJoin(TitleName, 'title', 'title.id = student.title')
      .orderBy( 'student.id','ASC')
})
export class VwStudentHomeVisitItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    homeVisitday: Date;
    
    @ViewColumn()
    googleMap: string;
    @ViewColumn()
    studentNumber: number;
    

    @ViewColumn()
    studentId: number;

   @ViewColumn()
   studentValue: string;

    @ViewColumn()
    getMoneyForSchool: string;

    @ViewColumn()
    liveWith: number;

    @ViewColumn()
    liveWithOther: string;

    @ViewColumn()
    totalHouseholdMember: number;

    @ViewColumn()
    totalIncludeStudent: number;

    @ViewColumn()
    totalBrother1: number;

    @ViewColumn()
    totalBrather2: number;

    @ViewColumn()
    totalSister1: number;

    @ViewColumn()
    totalSister2: number;

    @ViewColumn()
    totalStudentLeaning: number;

    @ViewColumn()
    totalStudentSchool: number;

    @ViewColumn()
    studentNumberFamily: number;

    @ViewColumn()
    familyStatus: number;

    @ViewColumn()
    fatherOccupation: string;

    @ViewColumn()
    fatherIncome: string;

    @ViewColumn()
    motherOccupation: string;

    @ViewColumn()
    motherIncome: string;

    @ViewColumn()
    parentOccupation: string;

    @ViewColumn()
    parentIncome: string;

    @ViewColumn()
    howParentsNurtureStudents: number;

    @ViewColumn()
    howParentsNurtureStudentsOther: string;

    @ViewColumn()
    familyMemberRelationships: number;

    @ViewColumn()
    memberMeetTogether: number;

    @ViewColumn()
    memberMeetTogetherOther: string;

    @ViewColumn()
    studentAreClosest: number;

    @ViewColumn()
    studentAreClosestOther: string;

    @ViewColumn()
    communityEnvironment: number;

    @ViewColumn()
    communityEnvironmentRisk: string;

    @ViewColumn()
    visitTraveledBy: number;

    @ViewColumn()
    visitTraveledByOther: string;

    @ViewColumn()
    residenceStatus: number;

    @ViewColumn()
    residenceStatusOther: string;

    @ViewColumn()
    natureOfAddress: number;

    @ViewColumn()
    comeToSchool: number;

    @ViewColumn()
    distanceHomeAndSchool: number;

    @ViewColumn()
    routeOfTravelToSchool: number;

    @ViewColumn()
    routeOfTravelToSchoolOther: string;

    @ViewColumn()
    roleInHome: number;

    @ViewColumn()
    roleInHomeOther: string;

    @ViewColumn()
    hobbies: number;

    @ViewColumn()
    hobbiesOther: string;

    @ViewColumn()
    readFrequency: number;

    @ViewColumn()
    schoolSupplieStorageFrequency: number;

    @ViewColumn()
    workBookCheckedFrequency: number;

    @ViewColumn()
    behaviorOfStudent: string;

    @ViewColumn()
    needsToBeImporoved: string;

    @ViewColumn()
    needToDevelop: string;

    @ViewColumn()
    punishAndReward: string;

    @ViewColumn()
    parentMakeFriend: string;

    @ViewColumn()
    plandToFuture: string;

    @ViewColumn()
    findOutInterest: string;

    @ViewColumn()
    isHelpStudentNeed: boolean;

    @ViewColumn()
    studyNeed: boolean;

    @ViewColumn()
    healthNeed: boolean;

    @ViewColumn()
    moneyNeed: boolean;

    @ViewColumn()
    speacialNeed: boolean;

    @ViewColumn()
    yearTermId: number;
    
    @ViewColumn()
    lat: string;
    @ViewColumn()
    lon: string;
}
