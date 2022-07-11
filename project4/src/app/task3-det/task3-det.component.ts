import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task3-det',
  templateUrl: './task3-det.component.html',
  styleUrls: ['./task3-det.component.css']
})
export class Task3DetComponent implements OnInit {
  @Input() leavable: any;
  constructor() { }

  ngOnInit(): void {
  }

}
