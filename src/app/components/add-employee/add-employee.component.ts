import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>
  ) {}

  ngOnInit(): void {
  }

  addEmployee(): void {
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
