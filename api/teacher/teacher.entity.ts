import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Gendar } from "src/api/gendar/gendar.entity";
import { Nationality } from "src/api/nationality/nationality.entity";
import { Ethnicity } from "src/api/ethnicity/ethnicity.entity";
import { Religion } from "src/api/religion/religion.entity";
import { PractitionerLevel } from "src/api/practitioner-level/practitioner-level.entity";
import { EducationBackground } from "src/api/education-background/education-background.entity";
import { Country } from "src/api/country/country.entity";
import { Province } from "src/api/province/province.entity";
import { District } from "src/api/district/district.entity";
import { SubDistrict } from "src/api/sub-district/sub-district.entity";
import { Practicle } from "../practicle/practicle.entity";
import { Classroom } from "../classroom/classroom.entity";
import { ClassroomType } from "../classroom-type/classroom-type.entity";
import { ActivityStudent } from "../activity-student/activity-student.entity";
@Entity('title_name')
export class TitleName extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  titleName?: string;
  @Column({ nullable: true })
  status?: number;
  @Column({ nullable: true })
  lang?: number;
}
@Entity('teacher')
export class Teacher extends BasicData {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ nullable: true })
  titleName?: string;

  @Column({ nullable: true })
  posonalCode?: string;

  @Column({ nullable: true })
  teacherCode?: string;

  @Column({ nullable: true })
  status?: number;

  @Column({ nullable: true })
  title?: number;
  @Column({ nullable: true })
  titleEn?: number;
  @Column({ nullable: true })
  ernlyDate?: Date;
  @Column({ nullable: true })
  actionWorkSpecial?: string;
  @Column({ nullable: true })
  actionWorkSpecial2?: string;
  @Column({ nullable: true })
  actionWorkSpecial3?: string;
  @Column({ nullable: true })
  actionWorkSpecial4?: string;
  @Column({ nullable: true })
  firstname?: string;
  @Column({ nullable: true })
  otherEducationText?: string;
  @Column({ nullable: true })
  isTeacher?: boolean;

  @Column({ nullable: true })
  lastname?: string;

  @Column({ nullable: true })
  firstnameEn?: string;

  @Column({ nullable: true })
  lastnameEn?: string;

  @Column({ nullable: true })
  gendarId?: number;

  @Column({ nullable: true })
  birthDate?: Date;

  @Column({ nullable: true })
  nationalityId?: number;

  @Column({ nullable: true })
  ethnicityId?: number;

  @Column({ nullable: true })
  religionId?: number;

  @Column({ nullable: true })
  positionName?: string;

  @Column({ nullable: true })
  positionNumber?: string;

  @Column({ nullable: true })
  practitionerLevelId?: number;

  @Column({ nullable: true })
  practitionerNo?: string;

  @Column({ nullable: true })
  educationBackgroundId?: number;

  @Column({ nullable: true })
  educationMajor?: string;

  @Column({ nullable: true })
  setInDate?: Date;

  @Column({ nullable: true })
  teacherClass1?: boolean;

  @Column({ nullable: true })
  teacherClass2?: boolean;

  @Column({ nullable: true })
  teacherClass3?: boolean;

  @Column({ nullable: true })
  teacherClass4?: boolean;

  @Column({ nullable: true })
  teacherClass5?: boolean;

  @Column({ nullable: true })
  teacherClass6?: boolean;

  @Column({ nullable: true })
  subjectGroupId?: number;
  @Column({ nullable: true })
  isOtherSubjectGroup?: boolean;
  @Column({ nullable: true })
  subjectGroupText?: string;
  @Column({ nullable: true })
  teacherEmail?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  facebookUrl?: string;

  @Column({ nullable: true })
  lineId?: string;

  @Column({ nullable: true })
  houseNumber?: string;

  @Column({ nullable: true })
  village?: string;

  @Column({ nullable: true })
  road?: string;

  @Column({ nullable: true })
  countryId?: number;

  @Column({ nullable: true })
  provinceId?: number;

  @Column({ nullable: true })
  districtId?: number;

  @Column({ nullable: true })
  subDistrictId?: number;
  @Column({ nullable: true })
  classroomId?: number;
  @Column({ nullable: true })
  classroomTypeId?: number;
  @Column({ nullable: true })
  educationMinor?: string;
  @Column({ nullable: true })
  setInDateSchool?: Date
  @Column({ nullable: true })
  actionWork?: string;

  @Column({ nullable: true })
  activityStudentId?: number;
  @Column({ nullable: true })
  actionTeach?: number;
  @Column({ nullable: true })
  actionTeachText?: string;
  @Column({ nullable: true })
  postCode?: string;
  
}
@ViewEntity({
  name: 'teacher_list',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("teacher.id", "id")
    .addSelect("teacher.birthDate", "birthDate")
    .addSelect("teacher.setInDate", "setInDate")
    .addSelect("teacher.educationMajor", "educationMajor")
    .addSelect("teacher.educationMinor", "educationMinor")
    .addSelect("teacher.actionWork", "actionWork")
    .addSelect("teacher.setInDateSchool", "setInDateSchool")
    .addSelect("teacher.practitionerNo", "practitionerNo")
    .addSelect("teacher.teacherCode", "teacherCode")
    .addSelect("title.titleName", "titleName")
    .addSelect("teacher.firstname", "firstname")
    .addSelect("teacher.lastname", "lastname")
    .addSelect("teacher.positionNumber", "positionNumber")
    .addSelect("teacher.positionName", "positionName")
    .addSelect("teacher.practitionerLevelId", "practitionerLevelId")
    .addSelect("CONCAT(practitioner_level_id.levelName , ' ' , practitioner_level_id.levelDescription)", "practitionerLevelValue")
    .addSelect("teacher.subjectGroupId", "subjectGroupId")
    .addSelect("practicle.name", "subjectGroupValue")
    .addSelect("teacher.titleEn", "titleEn")
    .addSelect("teacher.ernlyDate", "ernlyDate")
    .addSelect("teacher.actionWorkSpecial", "actionWorkSpecial")
    .addSelect("teacher.actionWorkSpecial2", "actionWorkSpecial2")
    .addSelect("teacher.actionWorkSpecial3", "actionWorkSpecial3")
    .addSelect("teacher.actionWorkSpecial4", "actionWorkSpecial4")
    .addSelect("teacher.otherEducationText", "otherEducationText")
    .addSelect("teacher.isTeacher", "isTeacher")
    .from(Teacher, "teacher")
    .leftJoin(PractitionerLevel, "practitioner_level_id", "practitioner_level_id.Id = teacher.practitionerLevelId")
    .leftJoin(Practicle, 'practicle', 'practicle.id = teacher.subjectGroupId')
    .leftJoin(TitleName, 'title', 'title.id = teacher.title')
})

export class VwTeacherList {
  @ViewColumn()
  titleEn?: number;
  @ViewColumn()
  ernlyDate?: Date;
  @ViewColumn()
  actionWorkSpecial: string;
  @ViewColumn()
  actionWorkSpecial2: string;
  @ViewColumn()
  actionWorkSpecial3: string;
  @ViewColumn()
  actionWorkSpecial4: string;
  @ViewColumn()
  otherEducationText?: string;
  @ViewColumn()
  isTeacher?: boolean;
  
  @ViewColumn()
  titleName: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  teacherCode: string;

  @ViewColumn()
  firstname: string;

  @ViewColumn()
  practitionerNo: string;

  @ViewColumn()
  lastname: string;

  @ViewColumn()
  positionNumber: string;

  @ViewColumn()
  positionName: string;



  @ViewColumn()
  practitionerLevelId: number;

  @ViewColumn()
  practitionerLevelValue: string;

  @ViewColumn()
  subjectGroupId: number;
  @ViewColumn()
  subjectGroupValue: number;

  @ViewColumn()
  birthDate?: Date;
  @ViewColumn()
  setInDate?: Date;
  @ViewColumn()
  educationMajor?: string;
  @ViewColumn()
  educationMinor?: string;
  @ViewColumn()
  actionWork: string;

  @ViewColumn()
  setInDateSchool: Date

}

@ViewEntity({
  name: 'teacher_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("teacher.id", "value")
    .addSelect("CONCAT(teacher.firstname , ' ' , teacher.lastname)", "label")
    .from(Teacher, "teacher")
})
export class VwTeacherDropdown {

  @ViewColumn()
  value: number;

  @ViewColumn()
  label: string;
}
@ViewEntity({
  name: 'teacher_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("teacher.id", "id")
        .addSelect("teacher.posonalCode", "posonalCode")
        .addSelect("teacher.teacherCode", "teacherCode")
        .addSelect("teacher.status", "status")
        .addSelect("teacher.title", "title")
        .addSelect("teacher.firstname", "firstname")
        .addSelect("teacher.lastname", "lastname")
        .addSelect("teacher.firstnameEn", "firstnameEn")
        .addSelect("teacher.lastnameEn", "lastnameEn")
        .addSelect("teacher.gendarId", "gendarId")
        .addSelect("gendar_id.gendarName", "gendarValue")
        .addSelect("teacher.positionNumber", "positionNumber")
        .addSelect("teacher.birthDate", "birthDate")
        .addSelect("teacher.nationalityId", "nationalityId")
        .addSelect("nationality_id.nationalityName", "nationalityValue")
        .addSelect("teacher.ethnicityId", "ethnicityId")
        .addSelect("ethnicity_id.ethnicityName", "ethnicityValue")
        .addSelect("teacher.religionId", "religionId")
        .addSelect("religion_id.religionName", "religionValue")
        .addSelect("teacher.positionName", "positionName")
        .addSelect("teacher.practitionerLevelId", "practitionerLevelId")
        .addSelect("CONCAT(practitioner_level_id.levelName , ' ' , practitioner_level_id.levelDescription)", "practitionerLevelValue")
        .addSelect("CONCAT(practitioner_level_id.levelName )", "practitionerLevelNameValue")
        .addSelect("teacher.practitionerNo", "practitionerNo")
        .addSelect("teacher.educationBackgroundId", "educationBackgroundId")
        .addSelect("CONCAT(education_background_id.educationShotNameTh , ' ' , education_background_id.educationShotNameEn)", "educationBackgroundValue")
        .addSelect("teacher.educationMajor", "educationMajor")
        .addSelect("teacher.setInDate", "setInDate")
        .addSelect("teacher.setInDateSchool", "setInDateSchool")
        .addSelect("teacher.educationMinor", "educationMinor")
        .addSelect("teacher.classroomTypeId", "classroomTypeId")
        .addSelect("classroom_type.typeName", "classroomTypeValue")
        .addSelect("teacher.classroomId", "classroomId")
        .addSelect("classroom.name", "classroomValue")
        .addSelect("teacher.teacherClass1", "teacherClass1")
        .addSelect("teacher.teacherClass2", "teacherClass2")
        .addSelect("teacher.teacherClass3", "teacherClass3")
        .addSelect("teacher.teacherClass4", "teacherClass4")
        .addSelect("teacher.teacherClass5", "teacherClass5")
        .addSelect("teacher.teacherClass6", "teacherClass6")
        .addSelect("teacher.subjectGroupId", "subjectGroupId")
        .addSelect("teacher.isOtherSubjectGroup", "isOtherSubjectGroup")
        .addSelect("teacher.subjectGroupText", "subjectGroupText")
        .addSelect("teacher.teacherEmail", "teacherEmail")
        .addSelect("teacher.phoneNumber", "phoneNumber")
        .addSelect("teacher.facebookUrl", "facebookUrl")
        .addSelect("teacher.lineId", "lineId")
        .addSelect("teacher.houseNumber", "houseNumber")
        .addSelect("teacher.village", "village")
        .addSelect("teacher.road", "road")
        .addSelect("teacher.countryId", "countryId")
        .addSelect("country_id.name", "countryValue")
        .addSelect("teacher.provinceId", "provinceId")
        .addSelect("province_id.name ", "provinceValue")
        .addSelect("teacher.districtId", "districtId")
        .addSelect("district_id.name", "districtValue")
        .addSelect("teacher.subDistrictId", "subDistrictId")
        .addSelect("sub_district_id.name", "subDistrictValue")
        .addSelect("practicle.name", "subjectGroupValue")
        .addSelect("teacher.actionWork", "actionWork")
        .addSelect("teacher.activityStudentId", "activityStudentId")
        .addSelect("teacher.titleEn", "titleEn")
        .addSelect("teacher.ernlyDate", "ernlyDate")
        .addSelect("teacher.actionWorkSpecial", "actionWorkSpecial")
        .addSelect("teacher.actionWorkSpecial2", "actionWorkSpecial2")
        .addSelect("teacher.actionWorkSpecial3", "actionWorkSpecial3")
        .addSelect("teacher.actionWorkSpecial4", "actionWorkSpecial4")
        .addSelect("teacher.otherEducationText", "otherEducationText")
        .addSelect("teacher.isTeacher", "isTeacher")
        .addSelect("teacher.actionTeach", "actionTeach")
        .addSelect("teacher.actionTeachText", "actionTeachText")
        .addSelect("activity_student.activityMainName", "activityStudentValue")
        .addSelect("teacher.postCode", "postCode")
        .addSelect("title.titleName", "titleName")

      .from(Teacher, "teacher")
        .leftJoin(Gendar, "gendar_id","gendar_id.Id = teacher.gendarId")
        .leftJoin(Nationality, "nationality_id","nationality_id.Id = teacher.nationalityId")
        .leftJoin(Ethnicity, "ethnicity_id","ethnicity_id.Id = teacher.ethnicityId")
        .leftJoin(Religion, "religion_id","religion_id.Id = teacher.religionId")
        .leftJoin(PractitionerLevel, "practitioner_level_id","practitioner_level_id.Id = teacher.practitionerLevelId")
        .leftJoin(EducationBackground, "education_background_id","education_background_id.Id = teacher.educationBackgroundId")
        .leftJoin(Country, "country_id","country_id.Id = teacher.countryId")
        .leftJoin(Province, "province_id","province_id.Id = teacher.provinceId")
        .leftJoin(District, "district_id","district_id.Id = teacher.districtId")
        .leftJoin(SubDistrict, "sub_district_id","sub_district_id.Id = teacher.subDistrictId")
        .leftJoin(Practicle, "practicle","practicle.Id = teacher.subjectGroupId")
        .leftJoin(Classroom,'classroom','classroom.id = teacher.classroomId')
        .leftJoin(ClassroomType,'classroom_type','classroom_type.id = teacher.classroomTypeId')
        .leftJoin(ActivityStudent,'activity_student','activity_student.id = teacher.activityStudentId')
        .leftJoin(TitleName, 'title', 'title.id = teacher.title')

      })
export class VwTeacherItem {
  @ViewColumn()
  titleEn?: number;
  @ViewColumn()
  ernlyDate?: Date;
  @ViewColumn()
  actionTeach: number;
  @ViewColumn()
  actionTeachText: string;
  @ViewColumn()
  postCode: string;
  
  @ViewColumn()
  actionWorkSpecial: string;
  @ViewColumn()
  actionWorkSpecial2: string;
  @ViewColumn()
  actionWorkSpecial3: string;
  @ViewColumn()
  actionWorkSpecial4: string;
  @ViewColumn()
  otherEducationText?: string;
  @ViewColumn()
  isTeacher?: boolean;
  @ViewColumn()
  actionWork: string;
  @ViewColumn()
  activityStudentId: number;
  @ViewColumn()
  activityStudentValue: number;
  @ViewColumn()
  id: number;
  @ViewColumn()
  setInDateSchool: Date
  @ViewColumn()
  educationMinor: string;
  @ViewColumn()
  classroomId: number;
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  classroomValue: string;
  @ViewColumn()
  classroomTypeValue: string;

  @ViewColumn()
  posonalCode: string;

  @ViewColumn()
  teacherCode: string;

  @ViewColumn()
  status: number;

  @ViewColumn()
  title: number;

  @ViewColumn()
  firstname: string;

  @ViewColumn()
  lastname: string;

  @ViewColumn()
  firstnameEn: string;

  @ViewColumn()
  lastnameEn: string;

  @ViewColumn()
  gendarId: number;

  @ViewColumn()
  gendarValue: string;

  @ViewColumn()
  birthDate: Date;

  @ViewColumn()
  nationalityId: number;

  @ViewColumn()
  nationalityValue: string;

  @ViewColumn()
  ethnicityId: number;

  @ViewColumn()
  ethnicityValue: string;

  @ViewColumn()
  religionId: number;

  @ViewColumn()
  religionValue: string;

  @ViewColumn()
  positionNumber: string;

  @ViewColumn()
  positionName: string;


  @ViewColumn()
  practitionerLevelId: number;

  @ViewColumn()
  practitionerLevelValue: string;

  @ViewColumn()
  practitionerNo: string;

  @ViewColumn()
  educationBackgroundId: number;

  @ViewColumn()
  educationBackgroundValue: string;

  @ViewColumn()
  educationMajor: string;

  @ViewColumn()
  setInDate: Date;

  @ViewColumn()
  teacherClass1: boolean;

  @ViewColumn()
  teacherClass2: boolean;

  @ViewColumn()
  teacherClass3: boolean;

  @ViewColumn()
  teacherClass4: boolean;

  @ViewColumn()
  teacherClass5: boolean;

  @ViewColumn()
  teacherClass6: boolean;

  @ViewColumn()
  subjectGroupId: string;

  @ViewColumn()
  subjectGroupValue: string;

  @ViewColumn()
  isOtherSubjectGroup: boolean;
  @ViewColumn()
  subjectGroupText: string;
  @ViewColumn()
  teacherEmail: string;

  @ViewColumn()
  phoneNumber: string;

  @ViewColumn()
  facebookUrl: string;

  @ViewColumn()
  lineId: string;

  @ViewColumn()
  houseNumber: string;

  @ViewColumn()
  village: string;

  @ViewColumn()
  road: string;

  @ViewColumn()
  countryId: number;

  @ViewColumn()
  countryValue: string;

  @ViewColumn()
  provinceId: number;

  @ViewColumn()
  provinceValue: string;

  @ViewColumn()
  districtId: number;

  @ViewColumn()
  districtValue: string;

  @ViewColumn()
  subDistrictId: number;

  @ViewColumn()
  subDistrictValue: string;

    @ViewColumn()
    practitionerLevelNameValue: string;
    @ViewColumn()
    titleName: string;
}


@ViewEntity({
  name: 'teaching_schedule_teacher_list',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("teacher.id", "id")
    .addSelect("teacher.teacherCode", "teacherCode")
    .addSelect("teacher.firstname", "firstname")
    .addSelect("teacher.lastname", "lastname")
    .addSelect("teacher.positionNumber", "positionNumber")
    .addSelect("teacher.positionName", "positionName")
    .addSelect("teacher.practitionerLevelId", "practitionerLevelId")
    .addSelect("CONCAT(practitioner_level_id.levelName , ' ' , practitioner_level_id.levelDescription)", "practitionerLevelValue")
    .addSelect("teacher.subjectGroupId", "subjectGroupId")
    .addSelect("practicle.name", "subjectGroupValue")
    .from(Teacher, "teacher")
    .leftJoin(PractitionerLevel, "practitioner_level_id", "practitioner_level_id.Id = teacher.practitionerLevelId")
    .leftJoin(Practicle, 'practicle', 'practicle.id = teacher.subjectGroupId')

})
export class VwTeachingScheduleTeacherList {


  @ViewColumn()
  id: number;

  @ViewColumn()
  teacherCode: string;


  @ViewColumn()
  firstname: string;


  @ViewColumn()
  lastname: string;

  @ViewColumn()
  positionNumber: string;

  @ViewColumn()
  positionName: string;


  @ViewColumn()
  practitionerLevelId: number;

  @ViewColumn()
  practitionerLevelValue: string;

  @ViewColumn()
  subjectGroupId: number;
  @ViewColumn()
  subjectGroupValue: number;

}
