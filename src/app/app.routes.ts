import { Routes } from '@angular/router';
import { ProductComponent } from './componenets/product/product.component';
import { ProductAddComponent } from './componenets/product-add/product-add.component';

export const routes: Routes = [
    {path:"",pathMatch:"full", component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent},
    {path:"products/add", component:ProductAddComponent}
];
