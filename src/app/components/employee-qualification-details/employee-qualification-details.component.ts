import { Component, OnInit } from '@angular/core';
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-employee-qualification-details',
  templateUrl: './employee-qualification-details.component.html',
  styleUrls: ['./employee-qualification-details.component.css']
})


export class EmployeeQualificationDetailsComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }



  AddClick(){
    this.dialogService.AddNewDialog({title: 'Add New', message: "Test message", confirmText: 'yo', cancelText: 'nope'});
  }

  deleteClick(){
    //delete a Qualification freom Emplyee
  }

  backClick(){
    //close Employee Qualifications and show Emplyee details
  }


}
