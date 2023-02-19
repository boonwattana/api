import {BadRequestException, Injectable, NotAcceptableException, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {Users} from "../users/users.entity";
import {IToken} from "./authentications.interface";
import {AuthenticationsDto, ChangePasswordDto, RegisterDto} from "./authentications.dto";
import * as bcrypt from "bcrypt"
import { UserType } from "../shared/constans/enum-constans";
import { StudentService } from "src/api/student/student.service";
import { Student } from "src/api/student/student.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomRequest } from "../shared/models/request-model";
import { ActiveTime } from "src/api/active-time/active-time.entity";
import { Teacher } from "src/api/teacher/teacher.entity";
import { ClassroomType } from "src/api/classroom-type/classroom-type.entity";
import { Classroom } from "src/api/classroom/classroom.entity";
import { YearTerm } from "src/api/year-term/year-term.entity";
import { YearTermService } from "src/api/year-term/year-term.service";
import { ClassroomService } from "src/api/classroom/classroom.service";
import { ClassroomTypeService } from "src/api/classroom-type/classroom-type.service";

@Injectable()
export class AuthenticationsService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(Student)
    private readonly studentRepository:Repository<Student>,
    @InjectRepository(Teacher)
    private readonly teacherRepository:Repository<Teacher>,
    @InjectRepository(ActiveTime)
    private readonly activeTimeRepository:Repository<ActiveTime>,

    private readonly yearTermService:YearTermService,
    private readonly classroomTypeService:ClassroomTypeService,
    private readonly classroomService:ClassroomService
  ) {
  }

  async jwtGenerated(user: Users,matchPassword:boolean) {
    let classroomTypeId = 0
    let classroomId = 0
    let className =''
    let roomName = ''
    let termName = ''
    const payload = {
      id: user.id,
      username: user.username,
    };
    console.log("payload", payload);
    const token: IToken = {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET_KEY,
      }),
      tokenType: "Bearer",
      expiresIn: "7d",
    };
    await this.usersService.tokenUpdated(user, token.accessToken);
    
    let userModel:Users ={
      ...user
    }
    if(user.type==UserType.STUDENT){
      const infoStudent= await this.studentRepository.findOne({where:{id:user.inforId}}) as Student
      userModel = {...user,firstname:infoStudent.firstname,lastname:infoStudent.lastname}
    }
    if(user.type==UserType.TEACHER){
      const infoTeacher = await this.teacherRepository.findOne({where:{id:user.inforId}}) as Teacher
      classroomId = infoTeacher.classroomId
      classroomTypeId = infoTeacher.classroomTypeId

      const classroom = await this.classroomTypeService.item(classroomId)
      const room = await this.classroomService.item(classroomTypeId)
      className = classroom?.typeName
      roomName = room?.name
      userModel = {...user,firstname:infoTeacher.firstname,lastname:infoTeacher.lastname}
    }
    const canEdit = await this.getCanEdit()
    const termModel = await this.yearTermService.findCurrrentTerm()
    if(termModel){
      termName = `${termModel?.term}/${termModel.year}`
    }

    return {
        user: {...userModel},
        token: token,
        matchPassword:matchPassword,
        canEdit:canEdit,
        classroomId,
        classroomTypeId,
        className,
        roomName,
        termName,
        termId:termModel?.id
      }
  }
  async getCanEdit() {
    const rangDateList = await this.activeTimeRepository.find({where:{deleted:false}})
    let canEdit:boolean = false
    const currentDate:Date = new Date()
    rangDateList.forEach(el=>{
      if(currentDate>=el.activeStart&&currentDate<=el.activeEnd){
        canEdit = true
      }
    })
    return canEdit
  }


  // async signIn(dto: AuthenticationsDto) {
  //   const username = process.env.AD_USERNAME || '';
  //   const password = process.env.AD_PASSWORD || '';
  //   const config: any = {
  //     url: process.env.AD_URL || '',
  //     baseDN: process.env.AD_BASE_DN || '',
  //     username: `${username}`,
  //     password: `${password}`
  //   };
  //
  //   const ad = new ActiveDirectory(config);
  //   console.debug(config)
  //   console.log('access ad find()');
  //
  //   return new Promise((resolve, reject) => {
  //     ad.authenticate(username, password,  async (err, auth) => {
  //       if (err) {
  //         console.error('Error authenticate : ' + JSON.stringify(err));
  //         reject(err)
  //       }
  //       if (auth) {
  //         console.log('Authenticated successfully.');
  //         const query = `cn=${dto.username}`;
  //         return ad.findUsers(query, async (err, users) => {
  //           if (err) {
  //             console.error('Error authenticate : ' + JSON.stringify(err));
  //             reject(err)
  //           }
  //           if ((!users) || (users.length == 0)) {
  //             reject(true)
  //           } else {
  //             console.log(JSON.stringify(users));
  //             console.log(`Next process...`);
  //             const user = await this.usersService.findByUsernameAndActive(dto.username);
  //             if (user) {
  //               const result = this.jwtGenerated(user);
  //               await this.saveLogUser(user, "Login", user.username);
  //               resolve(result);
  //             } else {
  //               reject(true)
  //             }
  //           }
  //         });
  //       } else {
  //         console.log('Authentication failed!');
  //         reject(true)
  //       }
  //     });
  //   }).then((result)=>{
  //     console.log(result);
  //     return result;
  //   }).catch((error)=>{
  //     throw new UnauthorizedException();
  //   })
  // }

  async signIn(dto: AuthenticationsDto) {
    const user = await this.usersService.findByUsernameAndActive(dto.username);
    console.log(user);
    
    const matchPassword = dto.password == dto.username
    if (user) {
      const iscorrect = await bcrypt.compareSync(dto.password,user.password);
      if(iscorrect){
        const result =  this.jwtGenerated(user,matchPassword);        
        return result;
      }
      throw new BadRequestException('รหัสผ่านไม่ถูกต้อง');
    } else {      
      throw new BadRequestException('ไม่พบบัญชีผู้ใช้');
    }
  }
  async register(dto: RegisterDto) {
    const duplicateEmail = await this.usersService.findByEmail(dto.email)
    console.log(duplicateEmail);
    
    if(duplicateEmail!= undefined){
      throw new BadRequestException('ชื่อผู้ถูกสร้างไปแล้ว...')
    }
    const hasepassword = await bcrypt.hash(dto.password,12);
    const user = new Users()
    user.username = dto.email
    user.password = hasepassword
    user.firstname = dto.firstname
    user.lastname = dto.lastname
    user.createdAt = new Date()
    user.type = dto.type
    user.inforId = dto.inforId
    const result = await this.usersService.create(user)
    return result
    
  }
}
