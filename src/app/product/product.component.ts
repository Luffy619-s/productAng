import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  productlist:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.api.getProductListAPI().subscribe((res:any)=>{
      console.log(res);
      this.productlist=res.products
      
    })
  }

}
