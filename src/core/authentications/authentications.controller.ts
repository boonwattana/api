import { Body, Controller, Get, HttpCode, Post, Req } from "@nestjs/common";
import {
  ApiBadGatewayResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from "@nestjs/swagger";
import { AuthenticationsService } from "./authentications.service";
import { AuthenticationsDto, ChangePasswordDto, RegisterDto } from "./authentications.dto";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "../shared/models/request-model";
import { UserType } from "../shared/constans/enum-constans";

@ApiTags("Authentications")
@Controller("authentications")
export class AuthenticationsController  extends BaseController{
  constructor(
    private readonly authenticationsService: AuthenticationsService
  ) {
    super()
  }

  @Post("login")
  @HttpCode(200)
  @ApiBadGatewayResponse({ description: "Bad Gateway." })
  @ApiInternalServerErrorResponse({ description: "INTERNAL SERVER ERROR" })
  async signIn(@Body() dto: AuthenticationsDto) {
   // console.log('body',dto);
    try{
      return this.success(await this.authenticationsService.signIn(dto))
    }catch(e){
      return this.error(e)
    }
  }
  
  @Post("register")
  @HttpCode(200)
  @ApiBadGatewayResponse({ description: "Bad Gateway." })
  @ApiInternalServerErrorResponse({ description: "INTERNAL SERVER ERROR" })
  async register(@Body() dto: RegisterDto) {
    try{
      dto.type = UserType.ADMIN
      return this.success(await this.authenticationsService.register(dto))
    }catch(e){
      return this.error(e)
    }
  }


}
