import {Component, Input, OnInit} from '@angular/core';

import { Employee } from '../../models/Employee';
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employees?: Array<Employee>;
  selectedEmployee?: Employee;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  addEmployee(): void {

    this.dialogService.confirmDialog();
  }
}
