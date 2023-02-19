import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { SearchParameter } from "src/core/shared/models/search-param-model";

export class SearchTeacherDto extends SearchParameter {
    @ApiPropertyOptional({ type: String })
    posonalCode?: string
    @ApiPropertyOptional({ type: String })
    teacherCode?: string
    @ApiPropertyOptional({ type: String })
    firstname?: string
    @ApiPropertyOptional({ type: String })
    lastname?: string
}
export class TeacherDto {
    @ApiPropertyOptional({ type: String })
    teacherPhoto: string[]
    @ApiPropertyOptional({ type: String })
    posonalCode: string
    @ApiPropertyOptional({ type: String })
    teacherCode: string
    @ApiPropertyOptional({ type: Number })
    status: number
    @ApiPropertyOptional({ type: Number })
    title: number
    @ApiPropertyOptional({ type: String })
    firstname: string
    @ApiPropertyOptional({ type: String })
    lastname: string
    @ApiPropertyOptional({ type: String })
    firstnameEn: string
    @ApiPropertyOptional({ type: String })
    lastnameEn: string
    @ApiPropertyOptional({ type: Number })
    gendarId: number
    @ApiPropertyOptional({ type: Date })
    birthDate: Date
    @ApiPropertyOptional({ type: Number })
    nationalityId: number
    @ApiPropertyOptional({ type: Number })
    ethnicityId: number
    @ApiPropertyOptional({ type: Number })
    religionId: number
    @ApiPropertyOptional({ type: String })
    positionNumber: string
    @ApiPropertyOptional({ type: String })
    positionName: string
    @ApiPropertyOptional({ type: Number })
    practitionerLevelId: number
    @ApiPropertyOptional({ type: String })
    practitionerNo: string
    @ApiPropertyOptional({ type: Number })
    educationBackgroundId: number
    @ApiPropertyOptional({ type: String })
    educationMajor: string
    @ApiPropertyOptional({ type: Date })
    setInDate: Date
    @ApiPropertyOptional({ type: Boolean })
    teacherClass1: boolean
    @ApiPropertyOptional({ type: Boolean })
    teacherClass2: boolean
    @ApiPropertyOptional({ type: Boolean })
    teacherClass3: boolean
    @ApiPropertyOptional({ type: Boolean })
    teacherClass4: boolean
    @ApiPropertyOptional({ type: Boolean })
    teacherClass5: boolean
    @ApiPropertyOptional({ type: Boolean })
    teacherClass6: boolean
    @ApiPropertyOptional({ type: String })
    subjectGroupId: string
    @ApiPropertyOptional({ type: String })
    teacherEmail: string
    @ApiPropertyOptional({ type: String })
    phoneNumber: string
    @ApiPropertyOptional({ type: String })
    facebookUrl: string
    @ApiPropertyOptional({ type: String })
    lineId: string
    @ApiPropertyOptional({ type: String })
    houseNumber: string
    @ApiPropertyOptional({ type: String })
    village: string
    @ApiPropertyOptional({ type: String })
    road: string
    @ApiPropertyOptional({ type: Number })
    countryId: number
    @ApiPropertyOptional({ type: Number })
    provinceId: number
    @ApiPropertyOptional({ type: Number })
    districtId: number
    @ApiPropertyOptional({ type: Number })
    subDistrictId: number
    @ApiPropertyOptional({ type: Boolean })
    isOtherSubjectGroup: boolean;
    @ApiPropertyOptional({ type: String })
    subjectGroupText: string;
    @ApiPropertyOptional({ type: Date })
    setInDateSchool: Date
    @ApiPropertyOptional({ type: String })
    educationMinor: string;
    @ApiPropertyOptional({ type: Number })
    classroomId: number;
    @ApiPropertyOptional({ type: Number })
    classroomTypeId: number;
    @ApiPropertyOptional({ type: String })
    classroomValue: string;
    @ApiPropertyOptional({ type: String })
    classroomTypeValue: string;
    @ApiPropertyOptional({ type: String })
    actionWork: string;

    @ApiPropertyOptional({ type: Number })
    activityStudentId: number;
    @ApiPropertyOptional({ type: String })
    activityStudentValue: string;

    @ApiPropertyOptional({ type: Number })
  titleEn?: number;
  @ApiPropertyOptional({ type: Date })
  ernlyDate?: Date;
  @ApiPropertyOptional({ type: String })
  actionWorkSpecial: string;
  @ApiPropertyOptional({ type: String })
  actionWorkSpecial2: string;
  @ApiPropertyOptional({ type: String })
  actionWorkSpecial3: string;
  @ApiPropertyOptional({ type: String })
  actionWorkSpecial4: string;
  @ApiPropertyOptional({ type: String })
  otherEducationText?: string;
  @ApiPropertyOptional({ type: Boolean })
  isTeacher?: boolean;
  @ApiPropertyOptional({ type: String })
  actionTeachText:string
  @ApiPropertyOptional({ type: Number })
  actionTeach:number
  @ApiPropertyOptional({ type: String })
  postCode:string
    
}
export class CreateTeacherDto extends TeacherDto {

}
export class UpdateTeacherDto extends TeacherDto {

}
