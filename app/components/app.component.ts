import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/components/app.component.html',
  styleUrls: ['app/components/app.component.css']
})

export class AppComponent {
  pageTitle: string;
  constructor() {
    this.pageTitle = 'Angular 2 Starter Project';
  }
}
