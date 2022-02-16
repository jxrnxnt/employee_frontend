import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { AddNewComponent } from '../dialogs/add-new/add-new.component'
import {AddNewDialogData} from "../models/add-new-dialog-data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  AddNewDialog(data: AddNewDialogData): Observable<boolean> {
    return  this.dialog.open(AddNewComponent, {data, width: '500px', disableClose: true}).afterClosed();
  }
}

