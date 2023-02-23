import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../..//services/auth.service';
import { User } from 'src/app/models/user.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  token = '';
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }


  login() {
    this.authService.login('sebas@mail.com', '1212')
    .subscribe(rta => {
      console.log(rta.access_token);
      this.token = rta.access_token;
    });
  }

  getProfile() {
    return this.authService.profile(this.token)
    .subscribe(user => {
      this.profile = user;
    });
  }

  loginAndGet() {
    this.authService.login('sebas@mail.com', '1212')
    .pipe(
      switchMap((token) => {
        this.token = token.access_token;
        return this.authService.profile(token.access_token);
      })
    )
    .subscribe(
      user => {
        this.profile = user;
      }
    )
  }
}
