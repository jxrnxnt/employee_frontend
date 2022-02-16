import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {QUALIFICATIONS} from "../../test-qualifications";
import {AddQualificationComponent} from "../add-qualification/add-qualification.component";
import {EmployeeService} from "../../service/employee.service";
import {QualificationService} from "../../service/qualification.service";

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification-list.component.html',
  styleUrls: ['./qualification-list.component.css']
})
export class QualificationListComponent implements OnInit {
  qualifications = QUALIFICATIONS

  constructor(
    private qualification: QualificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getQualification()
  }

  addQualification(): void {
    this.dialog.open(AddQualificationComponent, {disableClose: true});
  }
  getQualification(): void{
    
  }

  deleteQualification():void{

  }
  saveQualification(): void {

  }

  updateQualification(): void {

  }

  fetchData(): void {

  }
}
