import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards, UsePipes
} from '@nestjs/common';
import {
  ApiBadGatewayResponse, ApiBearerAuth,
  ApiBody, ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags
} from "@nestjs/swagger";
import {UsersService} from "./users.service";
import {Users} from "./users.entity";
import {MessageResponse} from "../shared/responses/message.response";
import { ChangePasswordDto } from '../authentications/authentications.dto';
import { CustomRequest } from '../shared/models/request-model';
import { BaseController } from '../shared/controller/base-controller';
import { JwtAuthGuard } from '../authentications/jwt-auth.guard';
import { SearchUsersDto, CreateUsersDto, UpdateUsersDto } from './users.dto';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController extends BaseController {
  constructor(private readonly usersService: UsersService) {
    super()
  }
  @Post("change-password")
  @HttpCode(200)
  @ApiBadGatewayResponse({ description: "Bad Gateway." })
  @ApiInternalServerErrorResponse({ description: "INTERNAL SERVER ERROR" })
  async changePassword(@Body() dto: ChangePasswordDto,@Req() req:CustomRequest) {
    try{
      return this.success(await this.usersService.changePassword(dto,req))
    }catch(e){
      return this.error(e)
    }
  }
  @Get('item/:id')
  async item(@Param('id') id: number) {
    try{
      return this.success(await this.usersService.item(id))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('list')
  async findAll(@Body() dto: SearchUsersDto) {
    try{      
      return this.success(await this.usersService.list(dto))
    }catch(e){
      return this.error(e)
    }
  }
  @Post('create')
  async create(@Body() dto: CreateUsersDto, @Req() req:CustomRequest,){ 
    try{      
      return this.success(await this.usersService.createFrom(dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Put('update/:id')
  async update(@Param('id') id: number,@Body() dto: UpdateUsersDto, @Req() req:CustomRequest,){    
    try{
      return this.success(await this.usersService.update(id,dto,req))
    }catch(e){
      return this.error(e)
    }   
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Req() req:CustomRequest,){
    try{
      return this.success(await this.usersService.delete(id,req))
    }catch(e){
      return this.error(e)
    }    
  }
}
