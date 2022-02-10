import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-qualification-details',
  templateUrl: './employee-qualification-details.component.html',
  styleUrls: ['./employee-qualification-details.component.css']
})
export class EmployeeQualificationDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AddClick(){
    //show popup
  }

  deleteClick(){
    //delete a Qualification freom Emplyee
  }

  backClick(){
    //close Employee Qualifications and show Emplyee details
  }


}
