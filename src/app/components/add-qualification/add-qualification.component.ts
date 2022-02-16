import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-qualification',
  templateUrl: './add-qualification.component.html',
  styleUrls: ['./add-qualification.component.css']
})
export class AddQualificationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddQualificationComponent>
  ) { }

  ngOnInit(): void {
  }

  addQualification(): void {
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
