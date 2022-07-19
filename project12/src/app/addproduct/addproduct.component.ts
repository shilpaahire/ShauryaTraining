import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @Output() EventProductUpdate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmProduct : any)
  {
    this.EventProductUpdate.emit(frmProduct.value);
  }

}
