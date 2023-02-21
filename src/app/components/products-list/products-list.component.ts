import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
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
}
