import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ChildPara:string="";
  categorynm:string="";
  categoryprice:any="";
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((para:Params)=>{
      this.ChildPara = para['productid'];
    })
    this.activatedRoute.queryParams.subscribe((qParams:Params)=>{
      this.categorynm = qParams['productname'];
      this.categoryprice = qParams['price'];
    })
  }

}
