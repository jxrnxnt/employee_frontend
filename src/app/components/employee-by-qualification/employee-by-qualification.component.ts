import { Component, OnInit } from '@angular/core';
import {Qualification} from "../../models/Qualification";

@Component({
  selector: 'app-employee-by-qualification',
  templateUrl: './employee-by-qualification.component.html',
  styleUrls: ['./employee-by-qualification.component.css']
})
export class EmployeeByQualificationComponent implements OnInit {
  qualification: Qualification | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
