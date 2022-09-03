import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any{
    if(value===1)
    return "Active";
    else
    return "Unactive";
  }

}
