import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./componenets/navi/navi.component";
import { CategoryComponent } from "./componenets/category/category.component";
import { ProductComponent } from "./componenets/product/product.component";
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './componenets/cart-summary/cart-summary.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, ToastrModule, FormsModule, RouterOutlet, NaviComponent, CategoryComponent, ProductComponent, CartSummaryComponent]
})
export class AppComponent {
  title = 'Northwind';
  user: string = "İsmail Öner"
  }
