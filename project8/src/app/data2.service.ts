import { Injectable } from '@angular/core';
import { EmployeesModule } from './employees/employees.module';

@Injectable({
  providedIn: EmployeesModule,
})
export class Data2Service {
  constructor() { }

  DisplayEmployee():string
  {
    return "Employee service is called...";
  }

}
