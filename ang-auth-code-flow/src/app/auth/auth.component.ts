import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public code: string = "";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.code = params['code'];
    });
  }

  getToken() {
    return this._authService.getToken(this.code);
  }

}
