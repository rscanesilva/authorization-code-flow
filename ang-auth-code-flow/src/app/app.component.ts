import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-auth-code-flow';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  login() {
    this.document.location.href = 'https://stackoverflow.com';
  }

}
