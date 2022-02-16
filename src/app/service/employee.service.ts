import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {Employee} from "../models/Employee";
import {EMPLOYEES} from "../test-employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    return employees;
  }

  getEmployee(id: number): Observable<Employee> {
    const employee = EMPLOYEES.find(e => e.id === id)!;
    return of(employee);
  }
}
