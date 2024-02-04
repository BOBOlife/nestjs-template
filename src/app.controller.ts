import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  say(a: number, b: number): number {
    return a + b;
  }

  @Get()
  getHello(): string {
    const res = this.say(1, 2);
    return this.appService.getHello(res.toString());
  }
}
