import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {DialogService} from "../../service/dialog.service";

@Component({
  selector: 'app-employee-qualification-details',
  templateUrl: './employee-qualification-details.component.html',
  styleUrls: ['./employee-qualification-details.component.css']
})


export class EmployeeQualificationDetailsComponent implements OnInit {

  constructor(private dialogService: DialogService,
              private location: Location
  ) { }

  ngOnInit(): void {
  }

  addQualification(): void {
    this.dialogService.AddNewDialog({title: 'Add New', message: "Test message", confirmText: 'yo', cancelText: 'nope'});
  }

  deleteQualification(): void {
  }

  goBack(): void {
    this.location.back();
  }


}
