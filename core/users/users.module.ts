import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users, VwUsersDropdown, VwUsersItem, VwUsersList} from "./users.entity";
import { DropdownService } from '../shared/services/dropdown.service';
import { StudentModule } from 'src/api/student/student.module';
import { TeacherModule } from 'src/api/teacher/teacher.module';
import { Teacher } from 'src/api/teacher/teacher.entity';
import { Student } from 'src/api/student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users,VwUsersList,VwUsersItem,VwUsersDropdown,Teacher,Student])
  ],
  controllers: [UsersController],
  providers: [UsersService,DropdownService],
  exports: [UsersService]
})
export class UsersModule {
}
