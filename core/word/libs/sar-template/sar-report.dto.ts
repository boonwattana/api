import { ApiProperty } from "@nestjs/swagger";








export class PersonalInfoDto{
    @ApiProperty({description:'ชื่อจริง'})
    firstName:string
    @ApiProperty({description:'นามสกุล'})
    lastName:string
    @ApiProperty({description:'วุฒิการศึกษา'})
    educations:string[]
    @ApiProperty({description:'ตำแหน่ง   ครู'})
    position:string
    @ApiProperty({description:'วิทยฐานะ  ชำนาญการ'})
    academic:string
    @ApiProperty({description:'อายุ  36   ปี  '})
    age:string
    @ApiProperty({description:'ปฏิบัติราชการ  10  ปี  '})
    actionYear:string
    @ApiProperty({description:'เลขที่ตำแหน่ง   5840  '})
    positionNumber:string
    @ApiProperty({description:'เงินเดือน   30,990 บาท'})
    salary:string
    @ApiProperty({description:'เงินวิทยฐานะ   3,500    บาท'})
    academicSalary:string
    @ApiProperty({description:'วัน / เดือน / ปี 	  เกิด 3 กันยายน 2529 '})
    birthDate:string
    @ApiProperty({description:'วัน / เดือน / ปี บรรจุเข้ารับราชการ 	5 พฤศจิกายน 2555'})
    startWorkDate:string
    @ApiProperty({description:'ปฏิบัติการสอนกลุ่มสาระการเรียนรู้ 	วิทยาศาสตร์'})
    subject:string
    @ApiProperty({description:'ปฏิบัติงานพิเศษ'})
    workSpecial:string[]
    @ApiProperty({description:'สถานศึกษา / หน่วยงาน  โรงเรียนบุญวัฒนา '})
    schoolName:string
    @ApiProperty({description:'อำเภอ / เขต   เมือง'})
    district:string
    @ApiProperty({description:'สำนักงานเขตพื้นที่การศึกษา	มัธยมศึกษา เขต 31 '})
    area:string
    @ApiProperty({description:'แสดงจำนวนวันลา ประจำปีการศึกษา  2562  (1 เมษายน  2561– 31 มีนาคม 2562)'})
    leave:string
    @ApiProperty({description:'แสดงตารางลา'})
    leaveTable:LeaveTableDto[]
    @ApiProperty({description:'จำนวน........-.......ครั้ง'})
    sumLeaveTime:string
    @ApiProperty({description:'จำนวน........-.......ครั้ง'})
    sumLeaveDay:string
}
export class LeaveTableDto{
    @ApiProperty({description:'วัน เดือน ปี ที่ลา'})
    leaveDate:string
    @ApiProperty({description:'ลาป่วย วัน'})
    sickDayCount:number
    @ApiProperty({description:'ลาป่วย ครั้ง'})
    sickTimeCount:number

    @ApiProperty({description:'ลากิจ วัน'})
    businessDayCount:number
    @ApiProperty({description:'ลากิจ ครั้ง'})
    businessTimeCount:number

    @ApiProperty({description:'ลาอุปสมบท วัน'})
    religionCount:number
    @ApiProperty({description:'ลาอุปสมบท ครั้ง'})
    religionTimeCount:number

    @ApiProperty({description:'ลาคลอด วัน'})
    bornDayCount:number
    @ApiProperty({description:'ลาคลอด ครั้ง'})
    bornTimeCount:number

    @ApiProperty({description:'มาสาย วัน'})
    lateDayCount:number
    @ApiProperty({description:'มาสาย ครั้ง'})
    lateTimeCount:number
}
export class WorkingTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'รหัสวิชา ว30203'})
    subjectNumber:string
    @ApiProperty({description:'ชื่อวิชา วิชาฟิสิกส์3 (ว30203 )'})
    subjectName:string
    @ApiProperty({description:'ชั้น (5/1)'})
    classRoomName:string
    @ApiProperty({description:'จำนวนห้อง'})
    roomCount:number
    @ApiProperty({description:'จำนวนชั่วโมง / สัปดาห์'})
    hourPerWeek:number
}
export class DevelopTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'กิจกรรมพัฒนาผู้เรียน และชุมนุม'})
    name:string
    @ApiProperty({description:'ชั้น /ห้อง'})
    classRoom:string
    @ApiProperty({description:'จำนวนนักเรียน'})
    studentCount:number
    @ApiProperty({description:'ผ่าน'})
    pass:boolean
    @ApiProperty({description:'ไม่ผ่าน'})
    notpass:boolean
}
export class ConsultTableDto{
    @ApiProperty({description:'ชั้น / ห้อง'})
    classRoom:string
    @ApiProperty({description:'หญิง (คน)'})
    femaleCount:string
    @ApiProperty({description:'ชาย (คน)'})
    maleCount:string
    @ApiProperty({description:'รวมทั้งสิ้น (คน)'})
    allCount:string
}
export class WorkingInfoDto{
    @ApiProperty({description:'1.2.1  ปฏิบัติการสอนตลอดปีการศึกษา 2565'})
    year:string
    @ApiProperty({description:'ภาคเรียนที่ 1'})
    workingTable1:WorkingTableDto[]
    @ApiProperty({description:'ภาคเรียนที่ 2'})
    workingTable2:WorkingTableDto[]
    @ApiProperty({description:'1.2.2   กิจกรรมพัฒนาผู้เรียนที่ปฏิบัติการพัฒนาผู้เรียนตลอดปีการศึกษา  2562'})
    developYear:string
    @ApiProperty({description:'ตาราง กิจกรรมพัฒนาผู้เรียน'})
    developTable:DevelopTableDto[]
    @ApiProperty({description:'1.2.3 ปฏิบัติหน้าที่ครูที่ปรึกษา'})
    consultTable:ConsultTableDto[]
    @ApiProperty({description:'1.2.4  งานพิเศษ ในโรงเรียน  ได้แก่'})
    jobSpecial:{name:string,organize:string}[]
}

export class LernPlanTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'รหัสวิชา ว30203'})
    subjectNumber:string
    @ApiProperty({description:'สาระการเรียนรู้/รายวิชา'})
    subjectName:string
    @ApiProperty({description:'ระดับชั้น (ม.5)'})
    classRoomName:string
    @ApiProperty({description:'จำนวน/แผน'})
    pageCount:number
}
export class InnovationTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'ชื่อสื่อ/นวัตกรรม'})
    innovationName:string
    @ApiProperty({description:'จำนวน(ชิ้น)'})
    count:string
    @ApiProperty({description:'นาม'})
    unit:string
}
export class EconomicTableDto{
    @ApiProperty({description:'หน่วยที่/ผลการเรียนรู้'})
    subject:string
    @ApiProperty({description:'เรื่อง'})
    story:string
    @ApiProperty({description:'จำนวนชั่วโมง'})
    hour:number
}
export class ResearchTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'เรื่อง'})
    story:string
    @ApiProperty({description:'ระดับชั้น (ม.5)'})
    classRoomName:string
}
export class SelftLerningTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'ชื่อแหล่งเรียนรู้'})
    namePlace:string
    @ApiProperty({description:'เรื่อง'})
    story:string
    @ApiProperty({description:'จำนวนครั้ง'})
    count:string
}
export class LectureTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'วัน /เดือน / ปี'})
    date:string
    @ApiProperty({description:'ชื่อวิทยากร'})
    lecturePerson:string
    @ApiProperty({description:'เรื่อง / หัวข้อ'})
    story:string
}
export class LernActivityTableDto{
    @ApiProperty({description:'การอธิบาย'})
    teachingFormat1:boolean
    @ApiProperty({description:'การสืบสวนสอบสวน'})
    teachingFormat2:boolean
    @ApiProperty({description:'การสาธิต / ทดลอง'})
    teachingFormat3:boolean
    @ApiProperty({description:'กลุ่มสืบค้น'})
    teachingFormat4:boolean
    @ApiProperty({description:'การใช้เกมประกอบ'})
    teachingFormat5:boolean
    @ApiProperty({description:'กลุ่มสัมพันธ์'})
    teachingFormat6:boolean
    @ApiProperty({description:'สถานการณ์จำลอง'})
    teachingFormat7:boolean
    @ApiProperty({description:'การเรียนรู้แบบ'})
    teachingFormat8:boolean
    @ApiProperty({description:'กรณีตัวอย่าง'})
    teachingFormat9:boolean
    @ApiProperty({description:'ความคิดรวบยอด'})
    teachingFormat10:boolean
    @ApiProperty({description:'บทบาทสมมุติ'})
    teachingFormat11:boolean
    @ApiProperty({description:'อริยสัจ 4'})
    teachingFormat12:boolean
    @ApiProperty({description:'การแก้ไขสถานการณ์'})
    teachingFormat13:boolean
    @ApiProperty({description:'การศึกษาค้นคว้าด้วยตนเอง'})
    teachingFormat14:boolean
    @ApiProperty({description:'โปรแกรมสำเร็จรูป'})
    teachingFormat15:boolean
    @ApiProperty({description:'การทัศนะศึกษานอกสถานที่'})
    teachingFormat16:boolean
    @ApiProperty({description:'ศูนย์การเรียน'})
    teachingFormat17:boolean
    @ApiProperty({description:'การเรียนรู้จากห้องสมุด'})
    teachingFormat18:boolean

    @ApiProperty({description:'ชุดการสอน'})
    teachingFormat19:boolean
    @ApiProperty({description:'การพัฒนากระบวนการคิด'})
    teachingFormat20:boolean
    @ApiProperty({description:'คอมพิวเตอร์ช่วยสอน'})
    teachingFormat21:boolean
    @ApiProperty({description:'โครงงาน'})
    teachingFormat22:boolean
    @ApiProperty({description:'การอภิปรายกลุ่มย่อย'})
    teachingFormat23:boolean
    @ApiProperty({description:'การถามตอบ'})
    teachingFormat24:boolean
    @ApiProperty({description:'การแก้ปัญหา'})
    teachingFormat25:boolean
    @ApiProperty({description:'การแก้ปัญหา'})
    teachingFormat26:boolean
    @ApiProperty({description:'อื่น ๆ ระบุ...........'})
    teachingFormatOther: boolean;

    @ApiProperty({description:'✔สรุป    จำนวน…. 11…… รูปแบบ / วิธีการจัดกิจกรรมการเรียนการสอนที่ครูใช้วิธี'})
    teachingFormatOtherNote: string;
}
export class AboutTeachTableDto{
    @ApiProperty({description:'ตรงตามวุฒิ/สาขาวิชาที่จบการศึกษา'})
    choice1:number
    @ApiProperty({description:'ตรงตามความถนัด'})
    choice2:number
    @ApiProperty({description:'ตรงตามประสบการณ์การสอน'})
    choice3:number
    @ApiProperty({description:'ตรงกับความรู้ความสามารถ'})
    choice4:number
    @ApiProperty({description:'ตรงกับความต้องการ/ความสนใจ'})
    choice5:number
}
export class SaminiaTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'วัน /เดือน / ปี'})
    date:string

    @ApiProperty({description:'เรื่อง'})
    story:string
    @ApiProperty({description:'สถานที่'})
    location:string
    @ApiProperty({description:'หน่วยงานที่จัด'})
    agency:string
    @ApiProperty({description:'หลักฐาน'})
    evidence:string

}
export class RewardTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'วัน /เดือน / ปี'})
    date:string
    @ApiProperty({description:'รางวัล/เกียรติคุณ'})
    rewardName:string
    @ApiProperty({description:'หน่วยงานที่มอบ'})
    agency:string
    @ApiProperty({description:'หลักฐาน'})
    evidence:string
}
export class LecturerTableDto{
    @ApiProperty({description:'ที่'})
    no:string
    @ApiProperty({description:'วัน /เดือน / ปี'})
    date:string
    @ApiProperty({description:'รายการ / เรื่อง'})
    story:string
    @ApiProperty({description:'หน่วยงานที่เชิญ'})
    agency:string 
}
export class LernPlanInfoDto{
    @ApiProperty({description:'1.3.1  จัดทำแผนการจัดการเรียนรู้     ดังนี้'})
    lernPlanTable:LernPlanTableDto[]
    @ApiProperty({description:'1.3.2  ผลิตสื่อ / นวัตกรรม  ชิ้น     ได้แก่'})
    innovationTable:InnovationTableDto[]
    @ApiProperty({description:'1.3.3  จัดทำหน่วยการเรียนรู้แบบบูรณาการ (สวนพฤกษศาสตร์, เศรษฐกิจพอเพียง) ได้แก่'})
    economicTable:EconomicTableDto[]
    @ApiProperty({description:'1.3.4  จัดทำวิจัยในชั้นเรียน จำนวนเรื่อง    ได้แก่'})
    researchTable:ResearchTableDto[]
    @ApiProperty({description:'1.3.5 การนำ/มอบหมายงาน นักเรียนไปศึกษาค้นคว้า/ใช้แหล่งเรียนรู้นอกโรงเรียนจำนวนครั้ง  ดังนี้'})
    selfLerningTable:SelftLerningTableDto[]
    @ApiProperty({description:'1.3.6  เชิญวิทยากรภายนอกมาให้ความรู้แก่นักเรียน จำนวนครั้ง     ได้แก่'})
    lectureTable:LectureTableDto[]
    @ApiProperty({description:'1.3.7  รูปแบบ/ วิธีการจัดกิจกรรมการเรียนการสอนที่ครูใช้ คือ ข้อใดบ้าง (ตอบได้มากกว่า 1 ข้อ) '})
    lernActivityTable:LernActivityTableDto
    @ApiProperty({description:'1.3.8 สภาพการปฏิบัติงานสอนเขียนเครื่องหมาย  ✔  ในช่องที่ตรงกับความเป็นจริงที่ท่านปฏิบัติอยู่  (ตอบได้มากกว่า 1)'})
    aboutTeachTable:AboutTeachTableDto
    @ApiProperty({description:'1.3.9  การพัฒนาตนเอง  (การเข้าร่วมกิจกรรมทางวิชาการ /  การเข้าร่วมอบรม /ประชุมสัมมนา  /ศึกษาดูงาน ฯลฯ)'})
    seminarTable:SaminiaTableDto[]
    @ApiProperty({description:'สรุป การพัฒนาตนเอง  จำนวน… 9…. ครั้ง จำนวนวัน คิดเป็นชั่วโมง…72…. ชั่วโมง นำมาขยายผล… 4…ครั้ง'})
    sumarizeSeminar:string
    @ApiProperty({description:'1.3.10 การได้รับรางวัล/ ประกาศเกียรติคุณ / ผลงานดีเด่น / เกียรติประวัติที่ปรากฏ          ต่อสาธารณชนด้านสถานศึกษา / ครู / นักเรียน'})
    rewardTable:RewardTableDto[]
    @ApiProperty({description:'1.3.11  การได้รับเชิญเป็นวิทยากร/กรรมการตัดสินภายในและภายนอกสถานศึกษา'})
    lecturerTable:LecturerTableDto[]
}
export class ActivityTeachTable{
    @ApiProperty({description:'ที่'})
    no:string
    subjectName: string;

    class: string;

    totalStudent: number;

    resultGrad1: number;

    resultGrad2: number;

    resultGrad3: number;

    resultGrad4: number;

    resultGrad5: number;

    resultGrad6: number;

    resultGrad7: number;

    resultGrad8: number;

    resultGrad9: number;

    resultGrad10: number;

    totalResultGrad: number;
}
export class ActionSpecialDto{
    
    @ApiProperty({description:'1.ปฏิบัติหน้าที่หัวหน้ากลุ่มสาระการเรียนรู้ :'})
    group1Text1?: string;
    @ApiProperty({description:'2.ปฏิบัติหน้าที่การสอนกลุ่มสาระการเรียนรู้ :'})

  group1Text2?: string;
  @ApiProperty({description:'3. การรับนักเรียนเข้าศึกษาต่อระดับชั้นมัธยมศึกษาปีที่ :'})

  group1Text3?: string;
  @ApiProperty({description:'4. การรับมอบตัวนักเรียนใหม่ระดับชั้นมัธยมศึกษาปีที่ :  '})
  group1Text4?: string;
  @ApiProperty({description:'5.อื่น ๆ :  '})
  group1Text5?: string;
  @ApiProperty({description:'สรุปได้ว่า ระดับคุณภาพการปฏิบัติงาน'})
  group1Result?: number;
  @ApiProperty({description:'1. การเยี่ยมบ้านนักเรียนชั้นมัธยมศึกษาศึกษาปีที่ :  '})

  group2Text1?: string;
  @ApiProperty({description:'จำนวน :  '})
  group2Text2?: string;
  @ApiProperty({description:'3. ปฏิบัติหน้าที่ครูเวรวันหยุดราชการ (ครั้ง) :  '})
  group2Text3?: string;
  @ApiProperty({description:'4. ร่วมการประชุมผู้ปกครองนักเรียน (ครั้ง) :  '})
  group2Text4?: string;
  @ApiProperty({description:'5. อื่น ๆ :  '})
  group2Text5?: string;
  @ApiProperty({description:'สรุปได้ว่า ระดับคุณภาพการปฏิบัติงาน'})
  group2Result?: number;
  @ApiProperty({description:'1. ปฏิบัติงานหน้าที่ดูแลบริเวณ :'})
  group3Text1?: string;
  @ApiProperty({description:'2. อื่นๆ :  '})
  group3Text2?: string;
  @ApiProperty({description:'สรุปได้ว่า ระดับคุณภาพการปฏิบัติงาน'})
  group3Result?: number;
  @ApiProperty({description:'1. ปฏิบัติงานหน้าที่ การรับเงินบำรุงการศึกษานักเรียนชั้น'})
  group4Text1?: string;
  @ApiProperty({description:'จำนวน (ครั้ง) :  '})
  group4Text2?: string;
  @ApiProperty({description:'2. อื่น ๆ :  '})
  group4Text3?: string;
  @ApiProperty({description:'สรุปได้ว่า ระดับคุณภาพการปฏิบัติงาน'})
  group4Result?: number;

  @ApiProperty({description:'1. รายงานผลการประเมินตนเอง (SAR) ประจำปีการศึกษา :  '})

    group5Text1?: string;
    @ApiProperty({description:'2. อื่น ๆ :    '})
    group5Text2?: string;
    @ApiProperty({description:'สรุปได้ว่า ระดับคุณภาพการปฏิบัติงาน'})
    group5Result?:number
}
export class WorkResultDto{
    @ApiProperty({description:'1.4.1 การปฏิบัติหน้าที่จัดกิจกรรมการเรียนการสอนประจำปีการศึกษา  ปรากฏผลดังนี้ เทอม1'})
    activityTeach1:ActivityTeachTable[] =[]
    @ApiProperty({description:'1.4.1 การปฏิบัติหน้าที่จัดกิจกรรมการเรียนการสอนประจำปีการศึกษา  ปรากฏผลดังนี้ เทอม2'})
    activityTeach2:ActivityTeachTable[] =[]
    @ApiProperty({description:'1.4.2  การปฏิบัติงานหน้าที่พิเศษปรากฏผลดังนี้ (หลักฐานปรากฏในภาคผนวก)'})
    actionSpecial:ActionSpecialDto

}
export class AuditWorkTeacherDto{
    @ApiProperty({description:`มากที่สุด`})
    choice1_5P?: number;
     @ApiProperty({description:`มาก`})
    choice1_4P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice1_3P?: number;
     @ApiProperty({description:`น้อย`})
    choice1_2P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice1_1P?: number;

     @ApiProperty({description:`มากที่สุด`})
    choice2_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice3_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice4_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice5_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice6_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice7_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice8_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice9_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice10_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice11_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice12_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice13_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice14_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice15_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice16_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice17_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice18_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice19_5P?: number;
     @ApiProperty({description:`มากที่สุด`})
    choice20_5P?: number;
     @ApiProperty({description:`มาก`})
    choice2_4P?: number;
     @ApiProperty({description:`มาก`})
    choice3_4P?: number;
     @ApiProperty({description:`มาก`})
    choice4_4P?: number;
     @ApiProperty({description:`มาก`})
    choice5_4P?: number;
     @ApiProperty({description:`มาก`})
    choice6_4P?: number;
     @ApiProperty({description:`มาก`})
    choice7_4P?: number;
     @ApiProperty({description:`มาก`})
    choice8_4P?: number;
     @ApiProperty({description:`มาก`})
    choice9_4P?: number;
     @ApiProperty({description:`มาก`})
    choice10_4P?: number;
     @ApiProperty({description:`มาก`})
    choice11_4P?: number;
     @ApiProperty({description:`มาก`})
    choice12_4P?: number;
     @ApiProperty({description:`มาก`})
    choice13_4P?: number;
     @ApiProperty({description:`มาก`})
    choice14_4P?: number;
     @ApiProperty({description:`มาก`})
    choice15_4P?: number;
     @ApiProperty({description:`มาก`})
    choice16_4P?: number;
     @ApiProperty({description:`มาก`})
    choice17_4P?: number;
     @ApiProperty({description:`มาก`})
    choice18_4P?: number;
     @ApiProperty({description:`มาก`})
    choice19_4P?: number;
     @ApiProperty({description:`มาก`})
    choice20_4P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice2_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice3_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice4_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice5_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice6_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice7_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice8_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice9_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice10_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice11_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice12_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice13_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice14_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice15_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice16_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice17_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice18_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice19_3P?: number;
     @ApiProperty({description:`ปานกลาง`})
    choice20_3P?: number;
     @ApiProperty({description:`น้อย`})
    choice2_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice3_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice4_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice5_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice6_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice7_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice8_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice9_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice10_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice11_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice12_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice13_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice14_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice15_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice16_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice17_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice18_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice19_2P?: number;
     @ApiProperty({description:`น้อย`})
    choice20_2P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice2_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice3_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice4_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice5_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice6_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice7_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice8_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice9_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice10_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice11_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice12_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice13_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice14_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice15_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice16_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice17_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice18_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice19_1P?: number;
     @ApiProperty({description:`น้อยที่สุด`})
    choice20_1P?: number;
    @ApiProperty({description:`จากผลการประเมินการสอนของครูโดยนักเรียน พบว่าอยู่ในระดับ  `})
    result?: number;
}
export class SelftAssesmentDto{
    choice1?: number;

  @ApiProperty({description:``})
  choice2?: number;

  @ApiProperty({description:``})
  choice3?: number;

  @ApiProperty({description:``})
  choice4?: number;

  @ApiProperty({description:``})
  choice5?: number;

  @ApiProperty({description:``})
  result?: string;
}
export class AuditBehavier{
    @ApiProperty({description:``})
  schoolyear?: string;

  @ApiProperty({description:``})
  result?: string;

  @ApiProperty({description:``})
  assessment?: number;

  @ApiProperty({description:``})
  totalStudent?: number;

  @ApiProperty({description:``})
  class?: string;

  @ApiProperty({description:``})
  assessment1?: number;
  @ApiProperty({description:``})
  assessment2?: number;
  @ApiProperty({description:``})
  assessment3?: number;
  @ApiProperty({description:``})
  assessment4?: number;
  @ApiProperty({description:``})
  subject?: string;
}
export class AuditRead{
    @ApiProperty({description:``})
    result?: string;
  
    @ApiProperty({description:``})
    assessment?: number;
  
    @ApiProperty({description:``})
    totalStudent?: number;
  
    @ApiProperty({description:``})
    class?: string;
    @ApiProperty({description:``})
    assessment1?: number;
    @ApiProperty({description:``})
    assessment2?: number;
    @ApiProperty({description:``})
    assessment3?: number;
    @ApiProperty({description:``})
    assessment4?: number;
  
    @ApiProperty({description:``})
    subject?: string;
}
export class AuditStudentDto{
    @ApiProperty({description:'ผลการประเมินการอ่านคิด วิเคราะห์และเขียน 1'})
    auditRead1:AuditRead[]
    @ApiProperty({description:'ผลการประเมินการอ่านคิด วิเคราะห์และเขียน 2'})
    auditRead2:AuditRead[]
    @ApiProperty({description:'ผลการประเมินคุณลักษณะอันพึงประสงค์ 1'})
    auditBehavier1:AuditBehavier[]
    @ApiProperty({description:'ผลการประเมินคุณลักษณะอันพึงประสงค์ 2'})
    auditBehavier2:AuditBehavier[]
}
export class Stand3Dto{
    @ApiProperty({description:``})
    choice1?: number;
  
    @ApiProperty({description:``})
    choice2?: number;
  
    @ApiProperty({description:``})
    choice3?: number;
  
    @ApiProperty({description:``})
    choice4?: number;
  
    @ApiProperty({description:``})
    choice5?: number;
  
    @ApiProperty({description:``})
    choice6?: number;
  
    @ApiProperty({description:``})
    choice7?: number;
  
    @ApiProperty({description:``})
    choice8?: number;
  
    @ApiProperty({description:``})
    choice9?: number;
  
    @ApiProperty({description:``})
    choice10?: number;
  
    @ApiProperty({description:``})
    choice11?: number;
  
    @ApiProperty({description:``})
    choice12?: number;
  
    @ApiProperty({description:``})
    result?: number;
}
export class Stand2Dto{
    @ApiProperty({description:``})
    choice1?: number;
  
    @ApiProperty({description:``})
    choice2?: number;
  
    @ApiProperty({description:``})
    choice3?: number;
  
    @ApiProperty({description:``})
    choice4?: number;
  
    @ApiProperty({description:``})
    choice5?: number;
  
    @ApiProperty({description:``})
    choice6?: number;
  
    @ApiProperty({description:``})
    choice7?: number;
  
    @ApiProperty({description:``})
    result?: number;
}
export class Stand1Dto{
    @ApiProperty({description:``})
    choice1?: number;
  
    @ApiProperty({description:``})
    choice2?: number;
  
    @ApiProperty({description:``})
    choice3?: number;
  
    @ApiProperty({description:``})
    choice4?: number;
  
    @ApiProperty({description:``})
    choice5?: number;
  
    @ApiProperty({description:``})
    choice6?: number;
  
    @ApiProperty({description:``})
    choice7?: number;
  
    @ApiProperty({description:``})
    choice8?: number;
  
    @ApiProperty({description:``})
    choice9?: number;
  
    @ApiProperty({description:``})
    choice10?: number;
  
    @ApiProperty({description:``})
    choice11?: number;
  
    @ApiProperty({description:``})
    choice12?: number;
  
    @ApiProperty({description:``})
    choice13?: number;
  
    @ApiProperty({description:``})
    choice14?: number;
  
    @ApiProperty({description:``})
    choice15?: number;
  
    @ApiProperty({description:``})
    choice16?: number;
  
    @ApiProperty({description:``})
    result?: number;
}
export class StandardStudentDto{
    @ApiProperty({description:`มาตรฐานที่1 คุณภาพของผู้เรียน`})
    standard1:Stand1Dto
    @ApiProperty({description:`มาตรฐานที่2 กระบวนการบริหารและการจัดการ`})
    standard2:Stand2Dto
    @ApiProperty({description:`มาตรฐานที่3 กระบวนการจัดการเรียนการสอนที่เน้นผู้เรียนเป็นสำคัญ`})
    standard3:Stand3Dto
}
export class ComandTable{
    @ApiProperty({description:``})
    orderNumber?: string;

    @ApiProperty({description:``})
    title?: string;
  
    @ApiProperty({description:``})
    result?: string;
}
export class ApendexTable{
    @ApiProperty({description:'หัวข้อเรื่อง ของภาคผนวก :'})
    name:string
    @ApiProperty({description:'ภาพ'})
    imageUrls:string[]
}
export class SelftReportDto{
    @ApiProperty({description:'อัพโหลดภาคผนวก'})
    appendix:ApendexTable[]
    @ApiProperty({description:'รายงาน คำสั่งแต่งตั้งการปฏิบัติหน้าที่'})
    command:ComandTable[]

}
export class SarReportDto{
    @ApiProperty({description:'1.1  ข้อมูลทั่วไป'})
    personalInfo:PersonalInfoDto
    @ApiProperty({description:'1.2 ข้อมูลการปฏิบัติหน้าที่'})
    workingInfo:WorkingInfoDto
    @ApiProperty({description:'1.3  การจัดกิจกรรมการเรียนการสอน'})
    lernPlanInfo:LernPlanInfoDto
    @ApiProperty({description:'1.4  ผลการปฏิบัติงาน'})
    workResultInfo:WorkResultDto
    @ApiProperty({description:'1.5  ผลการประเมินการสอนของครูโดยนักเรียน (หลักฐานแสดงความพึงพอใจต่อการเรียนการสอน)ตาราง  แสดงร้อยละของระดับการประเมินการสอนของครูโดยนักเรียน'})
    auditWorkTeacherInfo:AuditWorkTeacherDto
    @ApiProperty({description:'1.6  ผลการปฏิบัติงาน'})
    selftAssesmentInfo:SelftAssesmentDto
    @ApiProperty({description:'1.7 ผลการประเมินผู้เรียน'})
    auditStudentInfo:AuditStudentDto
    @ApiProperty({description:'ตอนที่2 ผลการดำเนินงานตามมาตรฐานการศึกษา'})
    stadardStudent:StandardStudentDto
    @ApiProperty({description:'รายงานผลการปฏิบัติงาน และผลการประเมินตนเองรายบุคคล'})
    selftReport:SelftReportDto
}
