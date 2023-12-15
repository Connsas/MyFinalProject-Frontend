import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CommonModule,CartSummaryComponent, RouterModule],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {

}
