import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private productService: ProductService, private toasterService: ToastrService){}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    });
  }
  
  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value);
      console.log(productModel)
      this.productService.add(productModel).subscribe(response =>{
        console.log(response)
        this.toasterService.success("İşlem Başarılı","Ürün Ekleme İşlemi Başarıyla Sonuçlandı")
      },responseError =>{
        if(responseError.error.Erorrs.length > 0)
        this.toasterService.error(responseError.error,"Doğrulama Hatası")
      })
    }else{
      this.toasterService.error("Form Hatalı","Dikkat");
    }
  }

}
