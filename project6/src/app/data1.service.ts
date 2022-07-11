import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { }
  public Value1 ="tesing";
  private Value2 ='testing2';
  static Value3 ='testing3';
  public TestData1Service(Msg1:any)
  {
    console.log("TestData1Service");
    return Msg1;
  }
}
