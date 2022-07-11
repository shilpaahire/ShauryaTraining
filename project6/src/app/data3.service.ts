import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor() { }
  MessageNotify(MessageText:any)
  {
    // console.log(this.MessageNotify);
    return MessageText;
  } 
}
