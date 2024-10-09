import { Injectable, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    let msg = this.configService.get<string>('message');
    if(msg==null || msg==undefined) {
      msg = "Fallback message";
    }
    return msg;
  }
}
