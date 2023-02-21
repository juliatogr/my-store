import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Juguete',
      image: './assets/images/toy.jpg',
      price: 200
    },
    {
      id: '2',
      name: 'Libros',
      image: './assets/images/books.jpg',
      price: 50
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
      price: 125
    }
  ];

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    console.log(product);
  }

}
