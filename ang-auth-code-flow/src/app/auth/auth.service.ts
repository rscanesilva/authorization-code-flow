import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken(code: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
