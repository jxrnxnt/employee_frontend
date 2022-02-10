import { Component, OnInit } from '@angular/core';

import {EMPLOYEES} from "../../test-employees";
import {QUALIFICATIONS} from "../../test-qualifications";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  employees = EMPLOYEES
  qualifications = QUALIFICATIONS
  displayEmployees = false
  displayQualifications = false
  constructor() { }

  ngOnInit(): void {
  }

  employeesClick(){
    this.displayQualifications = false
    this.displayEmployees = true
  }

  qualificationsClick(){
    this.displayEmployees = false
    this.displayQualifications = true
  }
}
