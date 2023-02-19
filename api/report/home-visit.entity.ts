import { ViewColumn, ViewEntity } from "typeorm"

@ViewEntity({
    name:'rp_homvisit_need_help',
    expression: `    select count(shv.id) as sumva,s."classroomId" ,shv."isHelpStudentNeed" , s."classroomTypeId" , shv."yearTermId"  
    from student_home_visit shv 
    inner join student s on s.id = shv."studentId" and s."deletedAt" isnull 
    where shv."deletedAt" isnull
    group by s."classroomId" , s."classroomTypeId" , shv."yearTermId",shv."isHelpStudentNeed"`
})
export class ReportHomeVisitNeedHelp {
  @ViewColumn()
  sumva:number
  @ViewColumn()
  isHelpStudentNeed:boolean
  @ViewColumn()
  classroomId:number
  @ViewColumn()
  classroomTypeId:number
  @ViewColumn()
  yearTermId:number
}
@ViewEntity({
  name:'rp_homvisit_sumarize',
  expression: `select
	s."studentNumber" ,
	concat(s.firstname, ' ', s.lastname) as "studentName",
	shv."isHelpStudentNeed" ,
	shv."studyNeed" ,
	shv."healthNeed" ,
	shv ."moneyNeed" ,
	shv ."speacialNeed",
	s."classroomId" ,
	s."classroomTypeId" ,
	shv ."yearTermId"
from
	student_home_visit shv
inner join student s on
	s.id = shv."studentId"`
})
export class ReportHomeVisitSumarize{
@ViewColumn()
studentNumber:number
@ViewColumn()
studentName:string
@ViewColumn()
isHelpStudentNeed:boolean
@ViewColumn()
studyNeed:boolean
@ViewColumn()
healthNeed:boolean
@ViewColumn()
moneyNeed:boolean
@ViewColumn()
speacialNeed:boolean
@ViewColumn()
classroomId:number
@ViewColumn()
classroomTypeId:number
@ViewColumn()
yearTermId:number
}
@ViewEntity({
  name:'rp_homvisit_personal',
  expression: `select
	s."studentNumber" ,
	shv."studentId" ,
	shv."id" as "homeVisitId" ,
	concat(s.firstname, ' ', s.lastname) as "studentName",
	g."gendarName" as sex,
	s."personalCode" ,
	s."birthDate" ,
	shv."totalIncludeStudent" as "sisterCount",
	shv."studentNumberFamily" as "childOrder",
	shv ."totalStudentLeaning" as "sisterInSchool",
	s."studentCode" ,
	shv."residenceStatus"  as "alivePlace",
	shv."residenceStatusOther"  as "alivePlaceOther",
	shv."visitTraveledBy" as "travelBy",
	concat(s."contractHouseNumber",' ',s."contractRoad",' ', s."contractVillage",' ',csd."name",' ',cd."name",' ',cp."name") as "contractAddress",
	concat(s."houseNumber" ,' ',s.road ,' ', s.village ,' ',asd."name",' ',ad."name",' ',ap."name") as "address",
	shv."residenceStatusOther" as "houseLanscape",
	shv."distanceHomeAndSchool" as "farToSchool",
	shv."routeOfTravelToSchool" as "passToSchool",
	shv."routeOfTravelToSchoolOther"  as "passToSchoolOther",
	shv."roleInHome" as "studentAction",
	shv."roleInHomeOther"  as "studentActionOther",
	shv.hobbies as "hobit",
	shv."hobbiesOther" as  "hobitOther",
	shv."readFrequency" as "readBook",
	shv."schoolSupplieStorageFrequency" as "prepairStuding",
	shv."howParentsNurtureStudents" as "parentFix",
	shv."howParentsNurtureStudentsOther"  as "parentFixOther",
	shv."behaviorOfStudent" as comment1,
	shv."needsToBeImporoved" as comment2,
	shv."needToDevelop" as comment3,
	shv."punishAndReward" as comment4,
	shv ."parentMakeFriend" as comment5,
	shv."plandToFuture" as comment6,
	shv."findOutInterest" as comment7,
	shv."createdAt" as "createAt",
	shv."isHelpStudentNeed" ,
	shv."studyNeed" ,
	shv."healthNeed" ,
	shv ."moneyNeed" ,
	shv ."speacialNeed",
	s."classroomId" ,
	s."classroomTypeId" ,
	shv ."yearTermId"
from
	student_home_visit shv
inner join student s on
	s.id = shv."studentId"
left join gendar g on g.id = s."gendarId" 
left join sub_district csd on csd.id = s."contractSubDistrictId" 
left join district cd on cd.id = s."contractDistrictId" 
left join province cp on cp.id = s."provinceId" 
left join sub_district asd on asd.id = s."districtId" 
left join district ad on ad.id = s."districtId" 
left join province ap on ap.id = s."provinceId" `
})
export class ReportHomeVisitPersonal {
	@ViewColumn()
	studentId:number
	@ViewColumn()
homeVisitId:number
  @ViewColumn()
  studentNumber:string
  @ViewColumn()
	studentName:string
  @ViewColumn()
	sex:string
  @ViewColumn()
	personalCode:string
  @ViewColumn()
	birthDate:Date
  @ViewColumn()
	sisterCount:number
  @ViewColumn()
	childOrder:number
  @ViewColumn()
	sisterInSchool:number
  @ViewColumn()
	studentCode:string
  @ViewColumn()
	alivePlace:number
	@ViewColumn()
	alivePlaceOther:string
  @ViewColumn()
	travelBy:number
  @ViewColumn()
	contractAddress:string
  @ViewColumn()
	address:string
  @ViewColumn()
	houseLanscape:string
  @ViewColumn()
	farToSchool:number
  @ViewColumn()
	passToSchool:number
  @ViewColumn()
	passToSchoolOther:string
  @ViewColumn()
	studentAction:number
  @ViewColumn()
	studentActionOther:string
  @ViewColumn()
	hobit:number
  @ViewColumn()
	hobitOther:string
  @ViewColumn()
	readBook:number
  @ViewColumn()
	prepairStuding:number
  @ViewColumn()
	parentFix:number
  @ViewColumn()
	parentFixOther:string
  @ViewColumn()
	comment1:string
  @ViewColumn()
	comment2:string
  @ViewColumn()
	comment3:string
  @ViewColumn()
	comment4:string
  @ViewColumn()
	comment5:string
  @ViewColumn()
	comment6:string
  @ViewColumn()
	comment7:string
  @ViewColumn()
	createAt:Date
  @ViewColumn()
	isHelpStudentNeed:boolean
  @ViewColumn()
	studyNeed:boolean
  @ViewColumn()
	healthNeed:boolean
  @ViewColumn()
	moneyNeed:boolean
  @ViewColumn()
	speacialNeed:boolean
@ViewColumn()
classroomId:number
@ViewColumn()
classroomTypeId:number
@ViewColumn()
yearTermId:number
}