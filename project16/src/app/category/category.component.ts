import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
CategoryData:any=[
  {productid:101,productname:'Dell', price:75000},
  {productid:102,productname:'HP', price:95000},
  {productid:103,productname:'Sony', price:88000},
  {productid:104,productname:'IBM', price:70000},
  {productid:105,productname:'HCL', price:53000}
];
  constructor() { }

  ngOnInit(): void {
  }

}
