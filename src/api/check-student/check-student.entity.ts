import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Student } from "src/api/student/student.entity";
import { ClassroomType } from "../classroom-type/classroom-type.entity";
import { Classroom } from "../classroom/classroom.entity";

@Entity('check_student')
export class CheckStudent extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  drugFoodAllergy?: string;

  @Column({nullable: true})
  llinesses?: string;

  @Column({nullable: true,type:'double precision'})
  weight?: number;

  @Column({nullable: true,type:'double precision'})
  height?: number;

  @Column({nullable: true})
  waist?: number;

  @Column({nullable: true})
  bloodPressure?: number;

  @Column({nullable: true})
  pluseTime?: number;

  @Column({nullable: true})
  eysExam?: boolean;

  @Column({nullable: true})
  noGlassesRight?: number;

  @Column({nullable: true})
  noGlassesLeft?: number;

  @Column({nullable: true})
  glasses?: boolean;

  @Column({nullable: true})
  glassesRight?: number;

  @Column({nullable: true})
  glassesLeft?: number;

  @Column({nullable: true})
  contactLens?: boolean;

  @Column({nullable: true})
  contactLensRight?: number;

  @Column({nullable: true})
  contactLensLeft?: number;

  @Column({nullable: true})
  colorBlindness?: boolean;

  @Column({nullable: true})
  hairAndHead?: boolean;

  @Column({nullable: true})
  eye?: boolean;

  @Column({nullable: true})
  ear?: boolean;

  @Column({nullable: true})
  nose?: boolean;

  @Column({nullable: true})
  mouthTongue?: boolean;

  @Column({nullable: true})
  gum?: boolean;

  @Column({nullable: true})
  throatTonsil?: boolean;

  @Column({nullable: true})
  thyroid?: boolean;

  @Column({nullable: true})
  skin?: boolean;

  @Column({nullable: true})
  bone?: boolean;

  @Column({nullable: true})
  speakingHearing?: boolean;

  @Column({nullable: true})
  earLess?: boolean;

  @Column({nullable: true})
  dentalCavities?: boolean;

  @Column({nullable: true})
  dentalLimestone?: boolean;

  @Column({nullable: true})
  dentalOther?: string;

  @Column({nullable: true})
  studentId?: number;
  @Column({nullable: true})
  yearTermId?: number;
  @Column({nullable: true})
  dentalCavitiesTxt: string;
  @Column({nullable: true})
  dentalLimestoneTxt: string;
  @Column({nullable: true})
  rightNormal:boolean
  @Column({nullable: true})
  rightShort :boolean
  @Column({nullable: true})
  rightLong :boolean
  @Column({nullable: true})
  rightBend :boolean
  @Column({nullable: true})
  leftNormal :boolean
  @Column({nullable: true})
  leftShort :boolean
  @Column({nullable: true})
  leftLong :boolean
  @Column({nullable: true})
  leftBend:boolean
  @Column({nullable: true})
  colorBlindnessInNormal:boolean
  @Column({nullable: true})
  colorBlindnessNormal:boolean
}
@ViewEntity({
    name:'check_student_list',
    expression: ` SELECT student.id,
    student."studentCode",
    student."studentNumber",
    student."classroomId",
    student."classroomTypeId",
    gendar."gendarName" AS "gendarValue",
    student."birthDate",
    check_student.id AS "checkStudentId",
    check_student.weight,
    check_student.height,
    check_student."bloodPressure",
    check_student.gum,
    check_student."dentalCavities",
    check_student."yearTermId",
    classroom_type."typeName" AS "classroomTypeValue",
    classroom.name AS "classroomValue",
    check_student.weight / ((check_student.height / 100::double precision) * (check_student.height / 100::double precision)) AS bmi,
    concat(title."titleName", ' ',student.firstname, ' ', student.lastname) AS "studentValue"
   FROM student student
     LEFT JOIN check_student check_student ON check_student."studentId" = student.id AND check_student."deletedAt" IS NULL
     LEFT JOIN classroom_type classroom_type ON classroom_type.id = student."classroomTypeId" AND classroom_type."deletedAt" IS NULL
     LEFT JOIN classroom classroom ON classroom.id = student."classroomId" AND classroom."deletedAt" IS NULL
     LEFT JOIN gendar gendar ON gendar.id = student."gendarId" AND gendar."deletedAt" IS NULL
     LEFT JOIN title_name title ON title.id = student.title
  WHERE student."deletedAt" IS null
  ORDER BY student."studentNumber" ASC
  `
  
})
export class VwCheckStudentList {
  @ViewColumn()
  bmi:number
  @ViewColumn()
  gendarValue:string
  @ViewColumn()
  birthDate:Date
  @ViewColumn()
  studentCode:string
  @ViewColumn()
  studentNumber:number
  @ViewColumn()
  classroomTypeValue:string
  @ViewColumn()
  classroomValue:string
    @ViewColumn()
    id: number;
    @ViewColumn()
    weight: number;
    @ViewColumn()
    yearTermId?: number;
    @ViewColumn()
    checkStudentId: number;
    @ViewColumn()
    classroomId: number;
    @ViewColumn()
    classroomTypeId: number;
    @ViewColumn()
    height: number;

    @ViewColumn()
    bloodPressure: number;

    @ViewColumn()
    gum: boolean;

    @ViewColumn()
    dentalCavities: boolean;



    @ViewColumn()
    studentValue: string;
}

@ViewEntity({
  name:'check_student_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("check_student.id", "value")
  .addSelect("CONCAT(check_student.drugFoodAllergy , ' ' , check_student.llinesses)", "label")
      .from(CheckStudent, "check_student")
})
export class VwCheckStudentDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'check_student_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("check_student.id", "id")
        .addSelect("check_student.drugFoodAllergy", "drugFoodAllergy")
        .addSelect("check_student.llinesses", "llinesses")
        .addSelect("check_student.weight", "weight")
        .addSelect("check_student.height", "height")
        .addSelect("check_student.waist", "waist")
        .addSelect("check_student.bloodPressure", "bloodPressure")
        .addSelect("check_student.pluseTime", "pluseTime")
        .addSelect("check_student.eysExam", "eysExam")
        .addSelect("check_student.noGlassesRight", "noGlassesRight")
        .addSelect("check_student.noGlassesLeft", "noGlassesLeft")
        .addSelect("check_student.glasses", "glasses")
        .addSelect("check_student.glassesRight", "glassesRight")
        .addSelect("check_student.glassesLeft", "glassesLeft")
        .addSelect("check_student.contactLens", "contactLens")
        .addSelect("check_student.contactLensRight", "contactLensRight")
        .addSelect("check_student.contactLensLeft", "contactLensLeft")
        .addSelect("check_student.colorBlindness", "colorBlindness")
        .addSelect("check_student.hairAndHead", "hairAndHead")
        .addSelect("check_student.eye", "eye")
        .addSelect("check_student.ear", "ear")
        .addSelect("check_student.nose", "nose")
        .addSelect("check_student.mouthTongue", "mouthTongue")
        .addSelect("check_student.gum", "gum")
        .addSelect("check_student.throatTonsil", "throatTonsil")
        .addSelect("check_student.thyroid", "thyroid")
        .addSelect("check_student.skin", "skin")
        .addSelect("check_student.bone", "bone")
        .addSelect("check_student.speakingHearing", "speakingHearing")
        .addSelect("check_student.earLess", "earLess")
        .addSelect("check_student.dentalCavities", "dentalCavities")
        .addSelect("check_student.dentalLimestone", "dentalLimestone")
        .addSelect("check_student.dentalOther", "dentalOther")
        .addSelect("check_student.studentId", "studentId")
        .addSelect("check_student.yearTermId", "yearTermId")
        .addSelect("check_student.dentalCavitiesTxt", "dentalCavitiesTxt")
        .addSelect("check_student.dentalLimestoneTxt", "dentalLimestoneTxt")

        .addSelect("check_student.rightNormal", "rightNormal")
        .addSelect("check_student.rightShort", "rightShort")
        .addSelect("check_student.rightLong", "rightLong")
        .addSelect("check_student.rightBend", "rightBend")
        .addSelect("check_student.leftNormal", "leftNormal")
        .addSelect("check_student.leftShort", "leftShort")
        .addSelect("check_student.leftLong", "leftLong")
        .addSelect("check_student.leftBend", "leftBend")
        .addSelect("check_student.colorBlindnessInNormal", "colorBlindnessInNormal")
        .addSelect("check_student.colorBlindnessNormal", "colorBlindnessNormal")




        .addSelect("CONCAT(student_id.firstname , ' ' , student_id.lastname)", "studentValue")
      .from(CheckStudent, "check_student")
        .leftJoin(Student, "student_id","student_id.Id = check_student.studentId")
})
export class VwCheckStudentItem {
  @ViewColumn()
  dentalCavitiesTxt: string;
  @ViewColumn()
  dentalLimestoneTxt: string;
  @ViewColumn()
    id: number;
    @ViewColumn()
    yearTermId?: number;
    @ViewColumn()
    drugFoodAllergy: string;

    @ViewColumn()
    llinesses: string;

    @ViewColumn()
    weight: number;

    @ViewColumn()
    height: number;

    @ViewColumn()
    waist: number;

    @ViewColumn()
    bloodPressure: number;

    @ViewColumn()
    pluseTime: number;

    @ViewColumn()
    eysExam: boolean;

    @ViewColumn()
    noGlassesRight: number;

    @ViewColumn()
    noGlassesLeft: number;

    @ViewColumn()
    glasses: boolean;

    @ViewColumn()
    glassesRight: number;

    @ViewColumn()
    glassesLeft: number;

    @ViewColumn()
    contactLens: boolean;

    @ViewColumn()
    contactLensRight: number;

    @ViewColumn()
    contactLensLeft: number;

    @ViewColumn()
    colorBlindness: boolean;

    @ViewColumn()
    hairAndHead: boolean;

    @ViewColumn()
    eye: boolean;

    @ViewColumn()
    ear: boolean;

    @ViewColumn()
    nose: boolean;

    @ViewColumn()
    mouthTongue: boolean;

    @ViewColumn()
    gum: boolean;

    @ViewColumn()
    throatTonsil: boolean;

    @ViewColumn()
    thyroid: boolean;

    @ViewColumn()
    skin: boolean;

    @ViewColumn()
    bone: boolean;

    @ViewColumn()
    speakingHearing: boolean;

    @ViewColumn()
    earLess: boolean;

    @ViewColumn()
    dentalCavities: boolean;

    @ViewColumn()
    dentalLimestone: boolean;

    @ViewColumn()
    dentalOther: string;

    @ViewColumn()
    studentId: number;

    @ViewColumn()
    studentValue: string;
    @ViewColumn()
    rightNormal:boolean
    @ViewColumn()
    rightShort :boolean
    @ViewColumn()
    rightLong :boolean
    @ViewColumn()
    rightBend :boolean
    @ViewColumn()
    leftNormal :boolean
    @ViewColumn()
    leftShort :boolean
    @ViewColumn()
    leftLong :boolean
    @ViewColumn()
    leftBend:boolean
    @ViewColumn()
    colorBlindnessInNormal:boolean
    @ViewColumn()
    colorBlindnessNormal:boolean
}
