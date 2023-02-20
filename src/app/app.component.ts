import { Component } from '@angular/core';

import { Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent='';
  //imgParent='https://www.w3schools.com/howto/img_avatar.png';

  products: Product[] = [
    {
      id: '1',
      name: 'Juguete',
      image: './assets/images/toy.jpg',
      price: 565
    },
    {
      id: '2',
      name: 'Libros',
      image: './assets/images/books.jpg',
      price: 565
    },
    {
      id: '3',
      name: 'Bici',
      image: './assets/images/bike.jpg',
      price: 565
    },
    {
      id: '4',
      name: 'Álbumes',
      image: './assets/images/album.jpg',
      price: 565
    }


  ];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
