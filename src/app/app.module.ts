import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeByQualificationComponent } from './components/employee-by-qualification/employee-by-qualification.component';
import { EmployeeQualificationDetailsComponent } from './components/employee-qualification-details/employee-qualification-details.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddQualificationComponent } from './components/add-qualification/add-qualification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    EmployeeDetailsComponent,
    EmployeeByQualificationComponent,
    EmployeeQualificationDetailsComponent,
    AddEmployeeComponent,
    AddQualificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
