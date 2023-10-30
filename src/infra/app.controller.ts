import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller()
export class AppController {
  constructor(private readonly hello: AppService) {}

  @Get()
  Hello() {
    return this.hello.getHello();
  }
}
