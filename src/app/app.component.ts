import { Component, OnInit } from '@angular/core';
// import { User } from './models/user.model';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgParent='';
  //imgParent='https://www.w3schools.com/howto/img_avatar.png';
  showImg = true;
  token = '';
  imgRta = '';
  title = 'my-store';

  constructor (
    private usersService: UsersService,
    private filesService: FilesService,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.getProfile()
        .subscribe();
    }
  }

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
      password: '1212',
      role: 'customer'
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

  downloadPdf() {
    this.filesService.getFile('my.pdf', "https://young-sands-07814.herokuapp.com/api/files/dummy.pdf", 'application/pdf').subscribe();
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);

    if (file){
      this.filesService.uploadFile(file)
      .subscribe( rta => {
        this.imgRta = rta.location;
      })
    }
  }

}
