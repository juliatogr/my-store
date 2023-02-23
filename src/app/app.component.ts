import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent='';
  //imgParent='https://www.w3schools.com/howto/img_avatar.png';
  showImg = true;
  token = '';
  profile: User = {
    id: '',
    name: '',
    email: '',
    password: ''
  }

  constructor (
    private usersService: UsersService
  ) {}

 /*  onLoaded(img: string) {
    console.log('log padre', img);
  } */

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      name: 'Sebas',
      email: 'sebas@mail.com',
      password: '1212'
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

}
