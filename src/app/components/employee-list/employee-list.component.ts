import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {Employee} from '../../models/Employee';
import {EmployeeService} from "../../service/employee.service";
import {AddEmployeeComponent} from "../add-employee/add-employee.component";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  addEmployee(): void {
    this.dialog.open(AddEmployeeComponent, {disableClose: true});
  }
}

