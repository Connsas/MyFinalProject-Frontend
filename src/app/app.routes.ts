import { Routes } from '@angular/router';
import { ProductComponent } from './componenets/product/product.component';
import { ProductAddComponent } from './componenets/product-add/product-add.component';
import { LoginComponent } from './componenets/login/login.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path:"",pathMatch:"full", component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent},
    {path:"products/add", component:ProductAddComponent, canActivate:[loginGuard]},
    {path:"login", component:LoginComponent}
];
