import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

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

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    console.log(product);
  }
}
