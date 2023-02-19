import {BadRequestException, Injectable} from '@nestjs/common';
import {Brackets, In, Not, Repository} from "typeorm";
import {Users, VwUsersItem, VwUsersList} from "./users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import { CreateUsersDto, SearchUsersDto, UpdateUsersDto, UsersDto} from "./users.dto";
import { ChangePasswordDto } from '../authentications/authentications.dto';
import { CustomRequest } from '../shared/models/request-model';
import * as bcrypt from "bcrypt"
import { DropdownService } from '../shared/services/dropdown.service';
import { SearchResult } from '../shared/models/search-param-model';
import { BaseService } from '../shared/services/base.service';
import { UserType } from '../shared/constans/enum-constans';
import { TeacherService } from 'src/api/teacher/teacher.service';
import { StudentService } from 'src/api/student/student.service';
import { CreateTeacherDto } from 'src/api/teacher/teacher.dto';
import { CreateStudentDto } from 'src/api/student/student.dto';
import { Teacher } from 'src/api/teacher/teacher.entity';
import { Student } from 'src/api/student/student.entity';

@Injectable()
export class UsersService extends BaseService {
  async remove(duplicateEmail: Users) {
    return this.usersRepository.remove(duplicateEmail)
  }
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(VwUsersList)
    private readonly vwUsersRepository: Repository<VwUsersList>,
    @InjectRepository(VwUsersItem)
    private readonly itemRepository:Repository<VwUsersItem>,
    private readonly dropdownService: DropdownService,
    @InjectRepository(Teacher)
    private readonly teacherRepository:Repository<Teacher>,
    @InjectRepository(Student)
    private readonly studentRepository:Repository<Student>,

  ) {
    super()
  }

  async create(model:Users){
    const en = this.usersRepository.create(model)    
    const result = await this.usersRepository.save(
      en
    )
    return result
    
  }


  async tokenUpdated(user: Users, token: string): Promise<Users> {
    user.token = token;
    return this.usersRepository.save(user);
  }

  async findByIdAndActive(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: {id: id, active: true},
    });
  }

  async findByUsernameAndActive(
    username: string
  ): Promise<Users> {
    console.log('username',username);
    
    return this.usersRepository.findOne({
      where: {username: username.trim(), active: true}
    });
  }
  async findByEmail(
    email: string,
  ): Promise<Users> {
    return this.usersRepository.findOne({
      where: {username: email, active: true,deleted:false}
    });
  }
  async findById(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: {id: id},
    });
  }
  async changePassword(dto: ChangePasswordDto, req: CustomRequest): Promise<any> {
    const user = req.user
    const hasepassword = await bcrypt.hash(dto.newPassword,12);
    const model = await this.usersRepository.findOne({where:{id:user.id}})
    model.password = hasepassword
    await this.usersRepository.save(model)
    return true    
  }
  async list(dto:SearchUsersDto):Promise<SearchResult<VwUsersList>>{
    const builder = this.createQueryBuider<VwUsersList>(dto,this.vwUsersRepository)
    const [data, count] = await builder
    .getManyAndCount();
    return this.toSearchResult<VwUsersList>(dto.paginator,count,data);
}
async createFrom(dto:CreateUsersDto,req:CustomRequest):Promise<Users>{  
  let refId = 0
  const duplicateEmail = await this.findByEmail(dto.username)  
  if(duplicateEmail!= undefined){
    throw new BadRequestException('ชื่อผู้ถูกสร้างไปแล้ว...')
  }    
  console.log('dto.type',dto.type);
  
  if(dto.type == UserType.TEACHER){
    const teacher = new CreateTeacherDto()
    teacher.firstname = dto.firstname
    teacher.lastname = dto.lastname
    const teaEn = this.toCreateModel(teacher,req)
    const teacherResult:Teacher = await this.teacherRepository.save(
      this.teacherRepository.create(teaEn)
    ) as Teacher
    console.log('teacherResult',teacherResult);
    
    refId = teacherResult.id
  }
  if(dto.type == UserType.STUDENT){
    const student = new CreateStudentDto()
    student.firstname = dto.firstname
    student.lastname = dto.lastname
    const stdEn = this.toCreateModel(student,req)
    const studentResult:Student = await this.studentRepository.save(
      this.studentRepository.create(stdEn)
      ) as Student
    refId = studentResult.id
  }
  console.log('refId',refId);
  
  const hasepassword = await bcrypt.hash(dto.password,12);
  dto.password = hasepassword
  
    const en = this.toCreateModel(dto,req) as Users  
      en.inforId = refId
      console.log('en',en);
    return await this.usersRepository.save(
        this.usersRepository.create(en)
    );
}
async update(id:number,dto:UpdateUsersDto,req:CustomRequest):Promise<UsersDto>{
    const m = await this.usersRepository.findOne({where:{id:id}})
    const duplicateEmail = await this.usersRepository.findOne({where:{username:dto.username,id:Not(id)}})
    if(dto.password){
      dto.password =  await bcrypt.hash(dto.password,12);
    }
    if(duplicateEmail!= undefined){
      throw new BadRequestException('ชื่อผู้ถูกสร้างไปแล้ว...')
    }  
    console.log(m);
    
    return await this.usersRepository.save(
        this.toUpdateModel(m,dto,req)
    );
}
async delete(id:number,req:CustomRequest):Promise<UsersDto>{
    let m = await this.usersRepository.findOne({where:{id:id}})
    if(m.type==UserType.STUDENT){
      const student = await this.studentRepository.findOne({where:{id:m.inforId}})
      if(student){
        await this.studentRepository.softRemove(
          await this.studentRepository.save(
            this.toDeleteModel(student,req)
          )
        )
      }
    }
    if(m.type==UserType.TEACHER){
      const teacher = await this.teacherRepository.findOne({where:{id:m.inforId}})
      if(teacher){
        await this.teacherRepository.softRemove(
          await this.teacherRepository.save(
            this.toDeleteModel(teacher,req)
          )
        )
      }
    }
    return await this.usersRepository.softRemove(
        await this.usersRepository.save(
            this.toDeleteModel(m,req)
        )
    )
}
async item(id:number):Promise<any>{
    return await this.itemRepository.findOne({where:{id:id}})
}
}
