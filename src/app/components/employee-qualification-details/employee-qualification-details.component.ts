import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-qualification-details',
  templateUrl: './employee-qualification-details.component.html',
  styleUrls: ['./employee-qualification-details.component.css']
})
export class EmployeeQualificationDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  addQualification(): void {
  }

  deleteQualification(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
