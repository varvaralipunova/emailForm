import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email='' as string;

  constructor() {
  }

  onSubmit() {
    console.log(this.email)
  }
}
