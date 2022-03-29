import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  productDetails: any;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private product: ProductService) {}

  ngOnInit(): void {
    this.getOneProduct(this.route.snapshot.paramMap.get('id'));
  }

  getOneProduct(id: any) {
    this.product.getOneProduct(id).subscribe({
      next: (res) => {
        this.productDetails = res;
      },
      error: () => {
        alert('error while getting particular product');
        this.error = true;
      },
    });
  }
}
