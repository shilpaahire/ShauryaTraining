import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    return value.filter(name=>{
      return name.empname.match(args)
    });
  }

}
