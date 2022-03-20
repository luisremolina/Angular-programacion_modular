import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-category',
  template: `<app-products [productId]="productId" (cargarMas)="loadMore()" [products]="products"></app-products>`,
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  products: Product[] = [];

  productId: string | null = null;
  limit = 10;
  offset = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServices: ProductsService
  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.queryParamMap.subscribe(params =>{
      this.productId = params.get('product');
      console.log(this.productId);
    })

    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if(this.categoryId){
          return this.productsServices.getByCategory(this.categoryId, this.limit, this.offset);
        }
        return [];
      })
    )
    .subscribe((data) =>{
      this.products = data;
    })
  }



  loadMore(){
    if(this.categoryId){
      this.productsServices.getByCategory(this.categoryId, this.limit, this.offset).subscribe((data) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
    }

  }

}
