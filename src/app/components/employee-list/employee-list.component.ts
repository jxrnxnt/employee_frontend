import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Employee} from '../../models/Employee';
import {EmployeeService} from "../../service/employee.service";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee?: Employee;

  constructor(
    private route: Router,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
