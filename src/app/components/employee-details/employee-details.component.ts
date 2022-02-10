import {Component, Input, OnInit} from '@angular/core';

import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee?: Employee;
  editable = false;

  constructor() { }

  ngOnInit(): void {
  }

  showQualifications(employee: Employee): void {}
  editEmployee(): void {this.editable = true}
  deleteEmployee(employee: Employee): void {}
  saveEdit(): void {}
}
