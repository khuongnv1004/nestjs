/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){

  }
  @UseGuards(AuthGuard())
  @Get('profile')
  async getAll(@Req() req:any) {
    
    return req.user;
  }

  @Post('get-by-email')
  async getByEmail(@Body() req:any) {
    
    
    return this.userService.findByEmail(req.email);
  }
}
