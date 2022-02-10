import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { AddNewComponent } from '../dialogs/add-new/add-new.component'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirmDialog() {
    this.dialog.open(AddNewComponent);
  }
}

