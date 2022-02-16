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
import { AppRoutingModule } from './app-routing.module';
import {AddNewComponent} from "./dialogs/add-new/add-new.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";

// @ts-ignore
// @ts-ignore
// @ts-ignore
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
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
