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
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
