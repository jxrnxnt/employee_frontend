import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../models/Qualification";

import {Employee} from '../../models/Employee';
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-by-qualification',
  templateUrl: './employee-by-qualification.component.html',
  styleUrls: ['./employee-by-qualification.component.css']
})
export class EmployeeByQualificationComponent implements OnInit {
  employees: Employee[] = [];
  qualification: Qualification | undefined;

  constructor(
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {

    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  deleteByEmployeeQulaification(): void {
    
  }


}
