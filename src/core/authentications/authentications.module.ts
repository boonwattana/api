import { Module } from "@nestjs/common";
import { AuthenticationsService } from "./authentications.service";
import { AuthenticationsController } from "./authentications.controller";
import { UsersModule } from "../users/users.module";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./jwt.strategy";
import { StudentModule } from "src/api/student/student.module";
import { Student } from "src/api/student/student.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActiveTime } from "src/api/active-time/active-time.entity";
import { Teacher } from "src/api/teacher/teacher.entity";
import { ClassroomModule } from "src/api/classroom/classroom.module";
import { ClassroomTypeModule } from "src/api/classroom-type/classroom-type.module";
import { YearTermModule } from "src/api/year-term/year-term.module";

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: "jwt",
      property: "users",
      session: false,
    }),
    JwtModule.register({
      secret:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyIiwidXNlcm5hbWUiOiJURVNUQ1JFQVRFNSIsImZpcnN0TmFtZSI6IlRlc3RlciIsImxhc3ROYW1lIjoiVGVzdGVyIiwidHlwZUNvZGUiOiIiLCJkZXBhcnRtZW50Q29kZSI6IiIsImlhdCI6MTY1NDc0MzI1NywiZXhwIjoxNjU1MzQ4MDU3fQ.mBz_ugVyFBcdN9F1KYzBkq36sBtQrkFmTDNHiU9pm84',
      signOptions:{ expiresIn: "7d" }
      // imports: [ConfigService],
      // inject: [ConfigService]
      // useFactory: {
      //   secret: configService.get("JWT_SECRET_KEY"),
      //   signOptions: { expiresIn: "7d" },
      // },
    }),
    TypeOrmModule.forFeature([Student,ActiveTime,Teacher
      ]),
      ClassroomModule,
      ClassroomTypeModule,
      YearTermModule
  ],
  providers: [AuthenticationsService, JwtStrategy],
  controllers: [AuthenticationsController],
  exports: [AuthenticationsService, JwtStrategy],
})
export class AuthenticationsModule {}
