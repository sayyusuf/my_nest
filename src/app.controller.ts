import { Body, Controller, Get, HttpCode, Req } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { IndexService } from 'src/index.service';
import { AppService } from "./app.service";
import { Request } from 'express';
import { send } from 'process';
import { open, read, readFile, readFileSync } from 'fs';
import { stringify } from 'querystring';
import { GameService } from './gameService';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request, @Body() body: Body): string {
    console.log(request.body)
    return this.appService.getHello();
  }

  @Get('mehmet')
  asdfasdf(): object {
    return {name: 'mehmet', age: 31};
  }

  @Get('test')
  mehmetali(): object {
    return  {name: 'ali', age: 31};
  }

  @Get('kotu')
    @HttpCode(400)
      kotu(): string {
        return 'This is so bad';
  }
}

@Controller()
  export class IndexController {
    constructor(private readonly appService: IndexService) {}

    @Get()
      async getHello(): Promise<string> {
        return this.appService.getRes();
      }

  }


  @Controller('game')
  export class GameController {
    constructor(private readonly appService: GameService) {}

    @Get()
      async getHello(): Promise<string> {
        return this.appService.getRes();
      }

  }

