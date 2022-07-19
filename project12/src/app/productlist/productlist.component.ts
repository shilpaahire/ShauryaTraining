import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  ProductData:any=[];

  constructor() { }

  ngOnInit(): void {
  }
  onProductUpdate(Product:any)
  {
    this.ProductData.push(Product);
  }

}
