import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddNewDialogData} from "../../models/add-new-dialog-data";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: AddNewDialogData) { }

  ngOnInit(): void {
  }

}
