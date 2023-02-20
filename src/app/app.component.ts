import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent='';
  //imgParent='https://www.w3schools.com/howto/img_avatar.png';

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
