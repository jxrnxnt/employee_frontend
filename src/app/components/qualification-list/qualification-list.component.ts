import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {QUALIFICATIONS} from "../../test-qualifications";
import {AddQualificationComponent} from "../add-qualification/add-qualification.component";

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification-list.component.html',
  styleUrls: ['./qualification-list.component.css']
})
export class QualificationListComponent implements OnInit {
  qualifications = QUALIFICATIONS

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  addQualification(): void {
    this.dialog.open(AddQualificationComponent, {disableClose: true});
  }
}
