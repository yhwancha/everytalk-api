import { Controller, Get, HttpCode, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    // return { url: 'http://localhost:3000/redirect/v3', statusCode: 333 };
    return { url: 'http://localhost:3000/re'}
  }
}
