import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {Employee} from '../../models/Employee';
import {EmployeeService} from "../../service/employee.service";
import {AddEmployeeComponent} from "../add-employee/add-employee.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  ngOnChanges(changes: SimpleChanges) {
    window.location.reload()
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  addEmployee(): void {
    this.dialog.open(AddEmployeeComponent, {disableClose: true});
  }
}

