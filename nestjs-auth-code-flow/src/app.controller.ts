import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard, RoleGuard, Roles, Unprotected } from 'nest-keycloak-connect';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dev')
  @Roles('dev')
  getHello(): string {
    return this.appService.getHello('dev');
  }

  @Get('qa')
  @Roles('qa')
  getHello2(): string {
    return this.appService.getHello('tester');
  }

}
