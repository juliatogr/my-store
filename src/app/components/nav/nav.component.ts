import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../..//services/auth.service';
import { User } from 'src/app/models/user.model';
import { CategoriesService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    this.getAllCategories();
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  loginAndGet() {
    this.authService.loginAndGet('sebas@mail.com', '1212')
    .subscribe(
      user => {
        this.profile = user;
      }
    )
  }

  getAllCategories() {
    this.categoryService.getAll()
    .subscribe( data => {
      this.categories = data;
    });
  }
}
