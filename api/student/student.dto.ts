import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchStudentDto extends SearchParameter {
    studentCode?:string
    firstname?:string
    lastname?:string
}
export class StudentDto {
    studentCode:string
    studentNumber:number
    imageProfile:string[]
    status:number
    title:number
    titleEn:number
    acceptDate:Date
    firstname:string
    lastname:string
    firstnameEn:string
    lastnameEn:string
    gendarId:number
    birthDate:Date
    leaveDate:Date

    nationalityId:number
    ethnicityId:number
    religionId:number
    email:string
    phoneNumber:string
    specialAbility:string
    birthHospital:string
    birthCountryId:number
    birthProvinceId:string
    birthDistrictId:string
    birthSubDistrictId:string
    houseNumber:string
    village:string
    road:string
    countryId:number
    provinceId:number
    districtId:number
    subDistrictId:number
    contractHouseNumber:string
    contractVillage:string
    contractRoad:string
    contractCountryId:number
    contractProvinceId:number
    contractDistrictId:number
    contractSubDistrictId:number
    oldSchoolName:string
    oldSchoolCountryId:string
    oldSchoolProvinceId:string
    oldSchoolDistrictId:string
    oldSchoolSubDistrictId:string
    closeFriendInClass:string
    closeFriendInClassNickname:string
    closeFriendInClassSchool:string
    closeFriendInClassPhone:string
    closeFriendOtherClass:string
    closeFriendOtherClassNickname:string
    closeFriendOtherClassSchool:string
    closeFriendOtherClassPhone:string
    bloodType:number
    congenitalDisease:string
    height:number
    weight:number
    defect:string
    aliveWithId:number
    parentStatus:number
    classroomId:number
    fatherTitle:number
    fatherFirstname:string
    fatherLastname:string
    fatherPersonalCode:string
    fatherBloodType:number
    fatherIncome:string
    fatherOccupation:string
    fatherPhone:string
    motherTitle:number
    motherFirstname:string
    motherLastname:string
    motherPersonalCode:string
    motherBloodType:number
    motherIncome:string
    motherOccupation:string
    motherPhone:string
    parentTitle:number
    parentFirstname:string
    parentLastname:string
    parentPersonalCode:string
    parentBloodType:number
    parentIncome:string
    parentOccupation:string
    parentPhone:string
    personalCode:string
    oldSchoolPostCode: string;
    contractPostCode: string;
    birthPostCode: string;
    postCode: string;
    classSpecial?: number;
    classSpecialText?: string;
    reasonResign: string;
} 
export class CreateStudentDto extends StudentDto{
   
}
export class UpdateStudentDto extends StudentDto{
    
}
