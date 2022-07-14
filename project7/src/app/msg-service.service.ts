import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {
 
  constructor(private logger: LoggerService) { }
  DisplayMessage():string
  {
    return this.logger.LoggerData("Hey !! Admin logged today at 11 AM");
    
  }
}
