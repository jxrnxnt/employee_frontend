import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeByQualificationComponent } from './components/employee-by-qualification/employee-by-qualification.component';
import { EmployeeQualificationDetailsComponent } from './components/employee-qualification-details/employee-qualification-details.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddQualificationComponent } from './components/add-qualification/add-qualification.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { QualificationListComponent } from './components/qualification-list/qualification-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { AddNewComponent } from './dialogs/add-new/add-new.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeDetailsComponent,
    EmployeeByQualificationComponent,
    EmployeeQualificationDetailsComponent,
    AddEmployeeComponent,
    AddQualificationComponent,
    EmployeeListComponent,
    QualificationListComponent,
    //ConfirmComponent,
    AddNewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
