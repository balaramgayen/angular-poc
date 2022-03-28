import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.product.getProduct().subscribe({
      next: (res) => {
        this.productList = res;
      },
      error: (err) => {
        alert('some error occurred');
      },
    });
  }
}
