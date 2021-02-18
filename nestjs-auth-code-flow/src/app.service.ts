import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(nome: string): string {
    return `Olá ${nome}`;
  }
}
