import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assignment3det',
  templateUrl: './assignment3det.component.html',
  styleUrls: ['./assignment3det.component.css']
})
export class Assignment3detComponent implements OnInit {
  @Input() leavable: any;
  constructor() { }

  ngOnInit(): void {
  }

}
