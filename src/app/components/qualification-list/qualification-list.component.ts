import {Component, Input, OnInit} from '@angular/core';

import {Qualification} from "../../models/Qualification";

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification-list.component.html',
  styleUrls: ['./qualification-list.component.css']
})
export class QualificationListComponent implements OnInit {

  @Input() qualifications?: Array<Qualification>;
  selectedQualification?: Qualification;

  constructor() { }

  ngOnInit(): void {
  }

  selectQualification(qualification: Qualification): void {
    this.selectedQualification = qualification;
  }

  addQualification(): void {}
}
