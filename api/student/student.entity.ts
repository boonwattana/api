import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Gendar } from "src/api/gendar/gendar.entity";
import { Nationality } from "src/api/nationality/nationality.entity";
import { Ethnicity } from "src/api/ethnicity/ethnicity.entity";
import { Religion } from "src/api/religion/religion.entity";
import { Country } from "src/api/country/country.entity";
import { SubDistrict } from "src/api/sub-district/sub-district.entity";
import { District } from "src/api/district/district.entity";
import { Province } from "src/api/province/province.entity";
import { AliveWith } from "src/api/alive-with/alive-with.entity";
import { Classroom } from "src/api/classroom/classroom.entity";
import { ClassroomType } from "../classroom-type/classroom-type.entity";
import { SdqTable } from "src/api/sdq-table/sdq-table.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";
import { title } from "process";
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
@Entity('student')
export class Student extends BasicData {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ nullable: true })
  studentCode?: string;


 
  @Column({ nullable: true })
  studentNumber?: number;
  // @Column({nullable: true})
  // imageProfile?: string;

  @Column({ nullable: true })
  status?: number;

  @Column({ nullable: true })
  title?: number;
  @Column({ nullable: true })
  titleEn?: number;
  @Column({ nullable: true })
  firstname?: string;

  @Column({ nullable: true })
  lastname?: string;
  @Column({ nullable: true })
  personalCode?: string;

  @Column({ nullable: true })
  firstnameEn?: string;

  @Column({ nullable: true })
  lastnameEn?: string;

  @Column({ nullable: true })
  gendarId?: number;

  @Column({ nullable: true })
  birthDate?: Date;
  @Column({ nullable: true })
  leaveDate?: Date;
  
  @Column({ nullable: true })
  acceptDate?: Date;
  @Column({ nullable: true })
  nationalityId?: number;

  @Column({ nullable: true })
  ethnicityId?: number;

  @Column({ nullable: true })
  religionId?: number;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  specialAbility?: string;

  @Column({ nullable: true })
  birthHospital?: string;

  @Column({ nullable: true })
  birthCountryId?: number;

  @Column({ nullable: true })
  birthProvinceId?: number;

  @Column({ nullable: true })
  birthDistrictId?: number;

  @Column({ nullable: true })
  birthSubDistrictId?: number;
  @Column({ nullable: true })
  birthPostCode?: string;
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
  contractHouseNumber?: string;

  @Column({ nullable: true })
  contractVillage?: string;

  @Column({ nullable: true })
  contractRoad?: string;

  @Column({ nullable: true })
  contractCountryId?: number;

  @Column({ nullable: true })
  contractProvinceId?: number;

  @Column({ nullable: true })
  contractDistrictId?: number;

  @Column({ nullable: true })
  contractSubDistrictId?: number;
  @Column({ nullable: true })
  contractPostCode?: string;
  @Column({ nullable: true })
  oldSchoolName?: string;

  @Column({ nullable: true })
  oldSchoolCountryId?: number;

  @Column({ nullable: true })
  oldSchoolProvinceId?: number;

  @Column({ nullable: true })
  oldSchoolDistrictId?: number;

  @Column({ nullable: true })
  oldSchoolSubDistrictId?: number;
  @Column({ nullable: true })
  oldSchoolPostCode?: string;
  @Column({ nullable: true })
  closeFriendInClass?: string;

  @Column({ nullable: true })
  closeFriendInClassNickname?: string;

  @Column({ nullable: true })
  closeFriendInClassSchool?: string;

  @Column({ nullable: true })
  closeFriendInClassPhone?: string;

  @Column({ nullable: true })
  closeFriendOtherClass?: string;

  @Column({ nullable: true })
  closeFriendOtherClassNickname?: string;

  @Column({ nullable: true })
  closeFriendOtherClassSchool?: string;

  @Column({ nullable: true })
  closeFriendOtherClassPhone?: string;

  @Column({ nullable: true })
  bloodType?: number;

  @Column({ nullable: true })
  congenitalDisease?: string;

  @Column({ nullable: true, type: 'double precision' })
  height?: number;

  @Column({ nullable: true, type: 'double precision' })
  weight?: number;

  @Column({ nullable: true })
  defect?: string;

  @Column({ nullable: true })
  aliveWithId?: number;

  @Column({ nullable: true })
  parentStatus?: number;

  @Column({ nullable: true })
  classroomId?: number;
  @Column({ nullable: true })
  classroomTypeId?: number;
  @Column({ nullable: true })
  fatherTitle?: number;

  @Column({ nullable: true })
  fatherFirstname?: string;

  @Column({ nullable: true })
  fatherLastname?: string;

  @Column({ nullable: true })
  fatherPersonalCode?: string;

  @Column({ nullable: true })
  fatherBloodType?: number;

  @Column({ nullable: true })
  fatherIncome?: string;

  @Column({ nullable: true })
  fatherOccupation?: string;

  @Column({ nullable: true })
  fatherPhone?: string;

  @Column({ nullable: true })
  motherTitle?: number;

  @Column({ nullable: true })
  motherFirstname?: string;

  @Column({ nullable: true })
  motherLastname?: string;

  @Column({ nullable: true })
  motherPersonalCode?: string;

  @Column({ nullable: true })
  motherBloodType?: number;

  @Column({ nullable: true })
  motherIncome?: string;

  @Column({ nullable: true })
  motherOccupation?: string;

  @Column({ nullable: true })
  motherPhone?: string;

  @Column({ nullable: true })
  parentTitle?: number;

  @Column({ nullable: true })
  parentFirstname?: string;

  @Column({ nullable: true })
  parentLastname?: string;

  @Column({ nullable: true })
  parentPersonalCode?: string;

  @Column({ nullable: true })
  parentBloodType?: number;

  @Column({ nullable: true })
  parentIncome?: string;

  @Column({ nullable: true })
  parentOccupation?: string;

  @Column({ nullable: true })
  parentPhone?: string;
  @Column({ nullable: true })
  postCode?: string;
  @Column({ nullable: true })
  classSpecial?: number;
    @Column({ nullable: true })
  classSpecialText?: string;

  @Column({ nullable: true })
  reasonResign?: string;
}
@ViewEntity({
  name: 'student_list',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student.id", "id")
    .addSelect("student.studentCode", "studentCode")
    .addSelect("student.studentNumber", "studentNumber")
    .addSelect("student.status", "status")

    .addSelect("title.titleName", "titleName")
    .addSelect("student.firstname", "firstname")
    .addSelect("student.lastname", "lastname")
    .addSelect(`CONCAT(title."titleName",' ',student.firstname,' ',student.lastname) `, "nameValue")
    .addSelect("student.gendarId", "gendarId")
    .addSelect("TO_CHAR(student.birthDate, 'DD/MM/YYYY') ", "birthDate")
    .addSelect("TO_CHAR(student.leaveDate, 'DD/MM/YYYY') ", "leaveDate")
    
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
    .leftJoin(Gendar, "gendar_id", "gendar_id.Id = student.gendarId")
    .leftJoin(Classroom, "classroom", "classroom.Id = student.classroomId")
    .leftJoin(ClassroomType, "classroom_type", "classroom_type.Id = student.classroomTypeId")
    .leftJoin(Province, 'province', 'student.provinceId = province.id')
    .leftJoin(District, 'district', 'district.id = student.districtId')
    .leftJoin(SubDistrict, 'sub_district', 'sub_district.id = student.subDistrictId')
    .leftJoin(TitleName, 'title', 'title.id = student.title')

})
export class VwStudentList {
  @ViewColumn()
  id: number;
  @ViewColumn()
  classroomTypeId: number;

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
  leaveDate: string;


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

@ViewEntity({
  name: 'student_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student.id", "value")
    .addSelect("CONCAT(student.firstname , ' ' , student.lastname)", "label")
    .addSelect("student.classroomId", "classroomId")
    .addSelect("student.classroomTypeId", "classroomTypeId")
    .from(Student, "student")
})
export class VwStudentDropdown {
  @ViewColumn()
  classroomId: number;
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  value: number;

  @ViewColumn()
  label: string;
}
@ViewEntity({
  name: 'student_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student.id", "id")
    .addSelect("student.studentCode", "studentCode")
    .addSelect("student.studentNumber", "studentNumber")
    .addSelect(`CONCAT(title."titleName",' ',student.firstname,' ',student.lastname) `, "nameValue")
    .addSelect("student.status", "status")
    .addSelect("student.title", "title")
    .addSelect("student.titleEn", "titleEn")
    .addSelect("student.firstname", "firstname")
    .addSelect("student.lastname", "lastname")
    .addSelect("student.firstnameEn", "firstnameEn")
    .addSelect("student.lastnameEn", "lastnameEn")
    .addSelect("student.gendarId", "gendarId")
    .addSelect("gendar_id.gendarName", "gendarValue")
    .addSelect("student.birthDate", "birthDate")
    .addSelect("student.leaveDate", "leaveDate")
    .addSelect("student.acceptDate", "acceptDate")
    .addSelect("student.nationalityId", "nationalityId")
    .addSelect("nationality_id.nationalityName", "nationalityValue")
    .addSelect("student.ethnicityId", "ethnicityId")
    .addSelect("ethnicity_id.ethnicityName", "ethnicityValue")
    .addSelect("student.religionId", "religionId")
    .addSelect("religion_id.religionName", "religionValue")
    .addSelect("student.email", "email")
    .addSelect("student.phoneNumber", "phoneNumber")
    .addSelect("student.specialAbility", "specialAbility")
    .addSelect("student.birthHospital", "birthHospital")
    .addSelect("student.birthCountryId", "birthCountryId")
    .addSelect("birth_country_id.name", "birthCountryValue")
    .addSelect("student.birthProvinceId", "birthProvinceId")
    .addSelect("student.birthDistrictId", "birthDistrictId")
    .addSelect("student.birthSubDistrictId", "birthSubDistrictId")
    .addSelect("student.houseNumber", "houseNumber")
    .addSelect("student.village", "village")
    .addSelect("student.road", "road")
    .addSelect("student.countryId", "countryId")
    .addSelect("country_id.name", "countryValue")
    .addSelect("student.provinceId", "provinceId")
    .addSelect("province_id.name", "provinceValue")
    .addSelect("student.districtId", "districtId")
    .addSelect("district_id.name", "districtValue")
    .addSelect("student.subDistrictId", "subDistrictId")
    .addSelect("sub_district_id.name", "subDistrictValue")
    .addSelect("student.contractHouseNumber", "contractHouseNumber")
    .addSelect("student.contractVillage", "contractVillage")
    .addSelect("student.contractRoad", "contractRoad")
    .addSelect("student.contractCountryId", "contractCountryId")
    .addSelect("contract_country_id.name", "contractCountryValue")
    .addSelect("student.contractProvinceId", "contractProvinceId")
    .addSelect("contract_province_id.name", "contractProvinceValue")
    .addSelect("student.contractDistrictId", "contractDistrictId")
    .addSelect("contract_district_id.name", "contractDistrictValue")
    .addSelect("student.contractSubDistrictId", "contractSubDistrictId")
    .addSelect("contract_sub_district_id.name", "contractSubDistrictValue")
    .addSelect("student.oldSchoolName", "oldSchoolName")
    .addSelect("student.oldSchoolCountryId", "oldSchoolCountryId")
    .addSelect("student.oldSchoolProvinceId", "oldSchoolProvinceId")
    .addSelect("student.oldSchoolDistrictId", "oldSchoolDistrictId")
    .addSelect("student.oldSchoolSubDistrictId", "oldSchoolSubDistrictId")
    .addSelect("student.closeFriendInClass", "closeFriendInClass")
    .addSelect("student.closeFriendInClassNickname", "closeFriendInClassNickname")
    .addSelect("student.closeFriendInClassSchool", "closeFriendInClassSchool")
    .addSelect("student.closeFriendInClassPhone", "closeFriendInClassPhone")
    .addSelect("student.closeFriendOtherClass", "closeFriendOtherClass")
    .addSelect("student.closeFriendOtherClassNickname", "closeFriendOtherClassNickname")
    .addSelect("student.closeFriendOtherClassSchool", "closeFriendOtherClassSchool")
    .addSelect("student.closeFriendOtherClassPhone", "closeFriendOtherClassPhone")
    .addSelect("student.bloodType", "bloodType")
    .addSelect("student.congenitalDisease", "congenitalDisease")
    .addSelect("student.height", "height")
    .addSelect("student.weight", "weight")
    .addSelect("student.defect", "defect")
    .addSelect("student.aliveWithId", "aliveWithId")
    .addSelect("alive_with_id.aliveWithName", "aliveWithValue")
    .addSelect("student.parentStatus", "parentStatus")
    .addSelect("student.classroomId", "classroomId")
    .addSelect("classroom.name", "classroomValue")
    .addSelect("classroom_type.typeName", "classroomTypeValue")
    .addSelect("student.fatherTitle", "fatherTitle")
    .addSelect("student.fatherFirstname", "fatherFirstname")
    .addSelect("student.fatherLastname", "fatherLastname")
    .addSelect("student.fatherPersonalCode", "fatherPersonalCode")
    .addSelect("student.fatherBloodType", "fatherBloodType")
    .addSelect("student.fatherIncome", "fatherIncome")
    .addSelect("student.fatherOccupation", "fatherOccupation")
    .addSelect("student.fatherPhone", "fatherPhone")
    .addSelect("student.motherTitle", "motherTitle")
    .addSelect("student.motherFirstname", "motherFirstname")
    .addSelect("student.motherLastname", "motherLastname")
    .addSelect("student.motherPersonalCode", "motherPersonalCode")
    .addSelect("student.motherBloodType", "motherBloodType")
    .addSelect("student.motherIncome", "motherIncome")
    .addSelect("student.motherOccupation", "motherOccupation")
    .addSelect("student.motherPhone", "motherPhone")
    .addSelect("student.parentTitle", "parentTitle")
    .addSelect("student.parentFirstname", "parentFirstname")
    .addSelect("student.parentLastname", "parentLastname")
    .addSelect("student.parentPersonalCode", "parentPersonalCode")
    .addSelect("student.parentBloodType", "parentBloodType")
    .addSelect("student.parentIncome", "parentIncome")
    .addSelect("student.parentOccupation", "parentOccupation")
    .addSelect("student.parentPhone", "parentPhone")
    .addSelect("student.personalCode", "personalCode")
    .addSelect("student.classroomTypeId", "classroomTypeId")
    .addSelect("student.oldSchoolPostCode", "oldSchoolPostCode")
    .addSelect("student.contractPostCode", "contractPostCode")
    .addSelect("student.birthPostCode", "birthPostCode")
    .addSelect("student.postCode", "postCode")

    .addSelect("student.classSpecial", "classSpecial")
    .addSelect("student.classSpecialText", "classSpecialText")
    .addSelect("student.reasonResign", "reasonResign")
    .from(Student, "student")
    .leftJoin(Gendar, "gendar_id", "gendar_id.Id = student.gendarId")
    .leftJoin(Nationality, "nationality_id", "nationality_id.Id = student.nationalityId")
    .leftJoin(Ethnicity, "ethnicity_id", "ethnicity_id.Id = student.ethnicityId")
    .leftJoin(Religion, "religion_id", "religion_id.Id = student.religionId")
    .leftJoin(Country, "birth_country_id", "birth_country_id.Id = student.birthCountryId")
    .leftJoin(Country, "country_id", "country_id.Id = student.countryId")
    .leftJoin(SubDistrict, "province_id", "province_id.Id = student.provinceId")
    .leftJoin(District, "district_id", "district_id.Id = student.districtId")
    .leftJoin(Province, "sub_district_id", "sub_district_id.Id = student.subDistrictId")
    .leftJoin(Country, "contract_country_id", "contract_country_id.Id = student.contractCountryId")
    .leftJoin(SubDistrict, "contract_province_id", "contract_province_id.Id = student.contractProvinceId")
    .leftJoin(District, "contract_district_id", "contract_district_id.Id = student.contractDistrictId")
    .leftJoin(Province, "contract_sub_district_id", "contract_sub_district_id.Id = student.contractSubDistrictId")
    .leftJoin(AliveWith, "alive_with_id", "alive_with_id.Id = student.aliveWithId")
    .leftJoin(Classroom, "classroom", "classroom.Id = student.classroomId")
    .leftJoin(ClassroomType, "classroom_type", "classroom_type.Id = student.classroomTypeId")
    .leftJoin(TitleName, 'title', 'title.id = student.title')

})
export class VwStudentItem {

  @ViewColumn()
  id: number;

  @ViewColumn()
  studentCode: string;
  @ViewColumn()
  classSpecial?: number;
  @ViewColumn()
  classSpecialText?: string;
  @ViewColumn()
  oldSchoolPostCode: string;
  @ViewColumn()
  contractPostCode: string;
  @ViewColumn()
  birthPostCode: string;
  @ViewColumn()
  postCode: string;
  @ViewColumn()
  studentNumber: number;

  @ViewColumn()
  classroomTypeId: number;

  @ViewColumn()
  classroomTypeValue: string;
  @ViewColumn()
  classroomId: number;

  @ViewColumn()
  classroomValue: string;
  @ViewColumn()
  personalCode: string;

  @ViewColumn()
  status: number;

  @ViewColumn()
  title: number;
  @ViewColumn()
  titleEn: number;
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
  leaveDate: Date;

  
  @ViewColumn()
  acceptDate: Date;
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
  email: string;

  @ViewColumn()
  phoneNumber: string;

  @ViewColumn()
  specialAbility: string;

  @ViewColumn()
  birthHospital: string;

  @ViewColumn()
  birthCountryId: number;

  @ViewColumn()
  birthCountryValue: string;

  @ViewColumn()
  birthProvinceId: string;

  @ViewColumn()
  birthDistrictId: string;

  @ViewColumn()
  birthSubDistrictId: string;

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
  contractHouseNumber: string;

  @ViewColumn()
  contractVillage: string;

  @ViewColumn()
  contractRoad: string;

  @ViewColumn()
  contractCountryId: number;

  @ViewColumn()
  contractCountryValue: string;

  @ViewColumn()
  contractProvinceId: number;

  @ViewColumn()
  contractProvinceValue: string;

  @ViewColumn()
  contractDistrictId: number;

  @ViewColumn()
  contractDistrictValue: string;

  @ViewColumn()
  contractSubDistrictId: number;

  @ViewColumn()
  contractSubDistrictValue: string;

  @ViewColumn()
  oldSchoolName: string;

  @ViewColumn()
  oldSchoolCountryId: string;

  @ViewColumn()
  oldSchoolProvinceId: string;

  @ViewColumn()
  oldSchoolDistrictId: string;

  @ViewColumn()
  oldSchoolSubDistrictId: string;

  @ViewColumn()
  closeFriendInClass: string;

  @ViewColumn()
  closeFriendInClassNickname: string;

  @ViewColumn()
  closeFriendInClassSchool: string;

  @ViewColumn()
  closeFriendInClassPhone: string;

  @ViewColumn()
  closeFriendOtherClass: string;

  @ViewColumn()
  closeFriendOtherClassNickname: string;

  @ViewColumn()
  closeFriendOtherClassSchool: string;

  @ViewColumn()
  closeFriendOtherClassPhone: string;

  @ViewColumn()
  bloodType: number;

  @ViewColumn()
  congenitalDisease: string;

  @ViewColumn()
  height: number;

  @ViewColumn()
  weight: number;

  @ViewColumn()
  defect: string;

  @ViewColumn()
  aliveWithId: number;

  @ViewColumn()
  aliveWithValue: string;

  @ViewColumn()
  parentStatus: number;



  @ViewColumn()
  fatherTitle: number;

  @ViewColumn()
  fatherFirstname: string;

  @ViewColumn()
  fatherLastname: string;

  @ViewColumn()
  fatherPersonalCode: string;

  @ViewColumn()
  fatherBloodType: number;

  @ViewColumn()
  fatherIncome: string;

  @ViewColumn()
  fatherOccupation: string;

  @ViewColumn()
  fatherPhone: string;

  @ViewColumn()
  motherTitle: number;

  @ViewColumn()
  motherFirstname: string;

  @ViewColumn()
  motherLastname: string;

  @ViewColumn()
  motherPersonalCode: string;

  @ViewColumn()
  motherBloodType: number;

  @ViewColumn()
  motherIncome: string;

  @ViewColumn()
  motherOccupation: string;

  @ViewColumn()
  motherPhone: string;

  @ViewColumn()
  parentTitle: number;

  @ViewColumn()
  parentFirstname: string;

  @ViewColumn()
  parentLastname: string;

  @ViewColumn()
  parentPersonalCode: string;

  @ViewColumn()
  parentBloodType: number;

  @ViewColumn()
  parentIncome: string;

  @ViewColumn()
  parentOccupation: string;

  @ViewColumn()
  parentPhone: string;
  
  @ViewColumn()
  nameValue: string;

  @ViewColumn()
  reasonResign: string;
}

@ViewEntity({
  name: 'sdq_table_list_for_teacher',
  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student.id", "id")
    .addSelect("sdq_table.studentId", "studentId")
    .addSelect("student.studentCode", "studentCode")
    .addSelect("student.studentNumber", "studentNumber")
    .addSelect(`CONCAT(title."titleName",' ',student.firstname,' ',student.lastname) `, "nameValue")
    .addSelect("CONCAT(classroom_type.typeName,'/',classroom.name)", "classroomValue")
    .addSelect("student.classroomId", "classroomId")
    .addSelect("student.classroomTypeId", "classroomTypeId")
    .addSelect("sdq_table.socialBehaviorScore05_value", "socialBehaviorScore05_value")
    .addSelect(`CASE
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'เป็นจุดแข็ง' THEN 'มีจุดแข็ง'
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'ไม่มีจุดแข็ง' THEN 'ไม่มีจุดแข็ง'
                        ELSE '-'
                    END`, "socialBehaviorScore05_value_display")
    .addSelect("sdq_table.friendBehaviorScore04_value", "friendBehaviorScore04_value")
    .addSelect(`CASE
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "friendBehaviorScore04_value_display")
    .addSelect("sdq_table.ADHDBehaviorScore03_value", "ADHDBehaviorScore03_value")
    .addSelect(`CASE
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "ADHDBehaviorScore03_value_display")
    .addSelect("sdq_table.nomalBehaviorScore02_value", "nomalBehaviorScore02_value")
    .addSelect(`CASE
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "nomalBehaviorScore02_value_display")
    .addSelect("sdq_table.emotionalBehaviorScore01_value", "emotionalBehaviorScore01_value")
    .addSelect(`CASE
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "emotionalBehaviorScore01_value_display")
    .addSelect("sdq_table.sumScore_value", "sumScore_value")
    .addSelect(`CASE
  WHEN "sdq_table"."sumScore_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."sumScore_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."sumScore_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "sumScore_value_display")
    .addSelect(`CASE
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'เป็นจุดแข็ง' THEN 'เสร็จสิ้น'
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'ไม่มีจุดแข็ง' THEN 'เสร็จสิ้น'
                        ELSE 'ไม่เสร็จสิ้น'
                    END`, "status_display")

    .from(Student, "student")
    .leftJoin(SdqTable, "sdq_table", "sdq_table.studentId = student.id AND sdq_table.estimateType = 2")
    .leftJoin(YearTerm, "year_term", "year_term.year = sdq_table.atYear and year_term.isParent =true and year_term.active = true")
    .leftJoin(Classroom, "classroom", "classroom.Id = student.classroomId")
    .leftJoin(ClassroomType, "classroom_type", "classroom_type.Id = student.classroomTypeId")
    .leftJoin(TitleName, 'title', 'title.id = student.title')
})
export class VwSdqTableListForTeacher {

  @ViewColumn()
  sumScore_value: string;
  @ViewColumn()
  id: number;
  @ViewColumn()
  nameValue: number;
  @ViewColumn()
  classroomId: number;
  @ViewColumn()
  classroomTypeId: number;

  @ViewColumn()
  studentCode: string;

  @ViewColumn()
  studentNumber: number;

  @ViewColumn()
  classroomValue: string;

  @ViewColumn()
  emotionalBehaviorScore01_value: string;

  @ViewColumn()
  nomalBehaviorScore02_value: string;

  @ViewColumn()
  ADHDBehaviorScore03_value: string;

  @ViewColumn()
  friendBehaviorScore04_value: string;

  @ViewColumn()
  socialBehaviorScore05_value: string;

  @ViewColumn()
  emotionalBehaviorScore01_value_display: string;

  @ViewColumn()
  nomalBehaviorScore02_value_display: string;

  @ViewColumn()
  ADHDBehaviorScore03_value_display: string;

  @ViewColumn()
  friendBehaviorScore04_value_display: string;

  @ViewColumn()
  socialBehaviorScore05_value_display: string;
  @ViewColumn()
  sumScore_value_display: string;
  @ViewColumn()
  status_display: string;
}
@ViewEntity({
  name: 'sdq_table_list_for_parent',

  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student.id", "id")
    .addSelect("sdq_table.studentId", "studentId")
    .addSelect("student.studentCode", "studentCode")
    .addSelect("student.studentNumber", "studentNumber")
    .addSelect(`CONCAT(title."titleName",' ',student.firstname,' ',student.lastname) `, "nameValue")
    .addSelect("CONCAT(classroom_type.typeName,'/',classroom.name)", "classroomValue")
    .addSelect("student.classroomId", "classroomId")
    .addSelect("student.classroomTypeId", "classroomTypeId")
    .addSelect("sdq_table.socialBehaviorScore05_value", "socialBehaviorScore05_value")
    .addSelect(`CASE
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'เป็นจุดแข็ง' THEN 'มีจุดแข็ง'
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'ไม่มีจุดแข็ง' THEN 'ไม่มีจุดแข็ง'
                        ELSE '-'
                    END`, "socialBehaviorScore05_value_display")
    .addSelect("sdq_table.friendBehaviorScore04_value", "friendBehaviorScore04_value")
    .addSelect(`CASE
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "friendBehaviorScore04_value_display")
    .addSelect("sdq_table.ADHDBehaviorScore03_value", "ADHDBehaviorScore03_value")
    .addSelect(`CASE
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "ADHDBehaviorScore03_value_display")
    .addSelect("sdq_table.nomalBehaviorScore02_value", "nomalBehaviorScore02_value")
    .addSelect(`CASE
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "nomalBehaviorScore02_value_display")
    .addSelect("sdq_table.emotionalBehaviorScore01_value", "emotionalBehaviorScore01_value")
    .addSelect(`CASE
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "emotionalBehaviorScore01_value_display")
    .addSelect("sdq_table.sumScore_value", "sumScore_value")
    .addSelect(`CASE
  WHEN "sdq_table"."sumScore_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."sumScore_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."sumScore_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "sumScore_value_display")
    .addSelect(`CASE
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'เป็นจุดแข็ง' THEN 'เสร็จสิ้น'
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'ไม่มีจุดแข็ง' THEN 'เสร็จสิ้น'
                        ELSE 'ไม่เสร็จสิ้น'
                    END`, "status_display")
    .from(Student, "student")
    .leftJoin(SdqTable, "sdq_table", "sdq_table.studentId = student.id AND sdq_table.estimateType = 3")
    .leftJoin(YearTerm, "year_term", "year_term.year = sdq_table.atYear and year_term.isParent =true and year_term.active = true")
    .leftJoin(Classroom, "classroom", "classroom.Id = student.classroomId")
    .leftJoin(ClassroomType, "classroom_type", "classroom_type.Id = student.classroomTypeId")
    .leftJoin(TitleName, 'title', 'title.id = student.title')
})
export class VwSdqTableListForParent {
  @ViewColumn()
  id: number;
  @ViewColumn()
  nameValue: number;
  @ViewColumn()
  classroomId: number;
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  studentCode: string;

  @ViewColumn()
  studentNumber: number;
  

  @ViewColumn()
  classroomValue: string;
  @ViewColumn()
  sumScore_value: string;
  @ViewColumn()
  emotionalBehaviorScore01_value: string;

  @ViewColumn()
  nomalBehaviorScore02_value: string;

  @ViewColumn()
  ADHDBehaviorScore03_value: string;

  @ViewColumn()
  friendBehaviorScore04_value: string;

  @ViewColumn()
  socialBehaviorScore05_value: string;

  @ViewColumn()
  emotionalBehaviorScore01_value_display: string;

  @ViewColumn()
  nomalBehaviorScore02_value_display: string;

  @ViewColumn()
  ADHDBehaviorScore03_value_display: string;

  @ViewColumn()
  friendBehaviorScore04_value_display: string;

  @ViewColumn()
  socialBehaviorScore05_value_display: string;
  @ViewColumn()
  sumScore_value_display: string;
  @ViewColumn()
  status_display: string;
}

@ViewEntity({
  name: 'sdq_table_list_for_student',

  expression: (connection: Connection) => connection.createQueryBuilder()
    .select("student.id", "id")
    .addSelect("sdq_table.studentId", "studentId")
    .addSelect("student.studentCode", "studentCode")
    .addSelect("student.studentNumber", "studentNumber")
    .addSelect("CONCAT(student.firstname,' ',student.lastname) ", "nameValue")
    .addSelect("CONCAT(classroom_type.typeName,'/',classroom.name)", "classroomValue")
    .addSelect("student.classroomId", "classroomId")
    .addSelect("student.classroomTypeId", "classroomTypeId")
    .addSelect("sdq_table.sumScore_value", "sumScore_value")
    .addSelect("sdq_table.socialBehaviorScore05_value", "socialBehaviorScore05_value")
    .addSelect("sdq_table.friendBehaviorScore04_value", "friendBehaviorScore04_value")
    .addSelect("sdq_table.ADHDBehaviorScore03_value", "ADHDBehaviorScore03_value")
    .addSelect("sdq_table.nomalBehaviorScore02_value", "nomalBehaviorScore02_value")
    .addSelect("sdq_table.emotionalBehaviorScore01_value", "emotionalBehaviorScore01_value")
    .addSelect(`CASE
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'เป็นจุดแข็ง' THEN 'มีจุดแข็ง'
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'ไม่มีจุดแข็ง' THEN 'ไม่มีจุดแข็ง'
                        ELSE '-'
                    END`, "socialBehaviorScore05_value_display")
    .addSelect(`CASE
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."friendBehaviorScore04_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "friendBehaviorScore04_value_display")
    .addSelect(`CASE
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."ADHDBehaviorScore03_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "ADHDBehaviorScore03_value_display")
    .addSelect(`CASE
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."nomalBehaviorScore02_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "nomalBehaviorScore02_value_display")
    .addSelect(`CASE
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."emotionalBehaviorScore01_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "emotionalBehaviorScore01_value_display")
    .addSelect(`CASE
  WHEN "sdq_table"."sumScore_value" = 'ปกติ' THEN 'ป'
  WHEN "sdq_table"."sumScore_value" = 'เสี่ยง' THEN 'ส'
  WHEN "sdq_table"."sumScore_value" = 'มีปัญหา' THEN 'ห'
  ELSE '-'
END`, "sumScore_value_display")
    .addSelect(`CASE
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'เป็นจุดแข็ง' THEN 'เสร็จสิ้น'
                        WHEN "sdq_table"."socialBehaviorScore05_value" = 'ไม่มีจุดแข็ง' THEN 'เสร็จสิ้น'
                        ELSE 'ไม่เสร็จสิ้น'
                    END`, "status_display")
    .from(Student, "student")
    .leftJoin(SdqTable, "sdq_table", "sdq_table.studentId = student.id AND sdq_table.estimateType = 1")
    .leftJoin(YearTerm, "year_term", "year_term.year = sdq_table.atYear and year_term.isParent =true and year_term.active = true")
    .leftJoin(Classroom, "classroom", "classroom.Id = student.classroomId")
    .leftJoin(ClassroomType, "classroom_type", "classroom_type.Id = student.classroomTypeId")
})
export class VwSdqTableListForStudent {
  @ViewColumn()
  id: number;
  @ViewColumn()
  nameValue: number;
  @ViewColumn()
  classroomId: number;
  @ViewColumn()
  classroomTypeId: number;
  @ViewColumn()
  studentCode: string;

  @ViewColumn()
  studentNumber: number;

  @ViewColumn()
  classroomValue: string;
  @ViewColumn()
  sumScore_value: string;
  @ViewColumn()
  emotionalBehaviorScore01_value: string;

  @ViewColumn()
  nomalBehaviorScore02_value: string;

  @ViewColumn()
  ADHDBehaviorScore03_value: string;

  @ViewColumn()
  friendBehaviorScore04_value: string;

  @ViewColumn()
  socialBehaviorScore05_value: string;

  @ViewColumn()
  emotionalBehaviorScore01_value_display: string;

  @ViewColumn()
  nomalBehaviorScore02_value_display: string;

  @ViewColumn()
  ADHDBehaviorScore03_value_display: string;

  @ViewColumn()
  friendBehaviorScore04_value_display: string;

  @ViewColumn()
  socialBehaviorScore05_value_display: string;
  @ViewColumn()
  sumScore_value_display: string;
  @ViewColumn()
  status_display: string;

}
