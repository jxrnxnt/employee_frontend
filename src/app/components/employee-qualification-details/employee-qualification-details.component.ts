import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {AddQualificationComponent} from "../add-qualification/add-qualification.component";
import {MatDialog} from "@angular/material/dialog";

import {Employee} from "../../models/Employee";
import {EmployeeService} from "../../service/employee.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-qualification-details',
  templateUrl: './employee-qualification-details.component.html',
  styleUrls: ['./employee-qualification-details.component.css']
})


export class EmployeeQualificationDetailsComponent implements OnInit {
  employee: Employee | undefined;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }

  addQualificationToEmployee(): void {
    this.dialog.open(AddQualificationComponent, {disableClose: true});
  }

  deleteQualification(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
