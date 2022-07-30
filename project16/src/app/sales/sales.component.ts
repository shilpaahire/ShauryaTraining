import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
SalesData:any=[
  {saleid:101,productname:'G15 Gaming Laptop',price:75000},
  {saleid:102,productname:'Inspiron 15 3000 laptop',price:89000},
  {saleid:103,productname:'Vostro 3510 Laptop',price:73000},
  {saleid:104,productname:'Inspiron 14 2-in-1 Laptop',price:53000},
  {saleid:105,productname:'Vostro 3510 Laptop',price:91000}
];
  constructor() { }

  ngOnInit(): void {
  }

}
