import {Component, Input, OnInit} from '@angular/core';

import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee?: Employee;
  display = "view";
  editable = false;
  displayEmployeeQualificationDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteEmployee(employee: Employee): void {}
  saveEdit(): void {}
}
