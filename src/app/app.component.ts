import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./componenets/navi/navi.component";
import { CategoryComponent } from "./componenets/category/category.component";
import { ProductComponent } from "./componenets/product/product.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NaviComponent, CategoryComponent, ProductComponent]
})
export class AppComponent {
  title = 'Northwind';
  user: string = "İsmail Öner"
  }
