import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Júlia';
  age = 26;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Júlia',
    age: 26,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}
