import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayEmp = false
  displayQual = false
  constructor() { }

  ngOnInit(): void {
  }

  employeeClick(){
    this.displayQual = false
    this.displayEmp = true
  }

  qualClick(){
    this.displayEmp = false
    this.displayQual = true
  }
}
