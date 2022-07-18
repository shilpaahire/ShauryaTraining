import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatus'
})
export class UserstatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    if(value==='A' || value==='a')
    {
      return 'Active';
    }
    else if(value==='D' || value==='d')
    {
      return 'Disabled';
    }
    else
    {
      return "Invalid User Status...";
    }
  }

}
