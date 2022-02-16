import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details/employee-details.component";
import { EmployeeQualificationDetailsComponent } from "./components/employee-qualification-details/employee-qualification-details.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { QualificationListComponent } from "./components/qualification-list/qualification-list.component";
import { EmployeeByQualificationComponent } from "./components/employee-by-qualification/employee-by-qualification.component";
import { AddQualificationComponent } from "./components/add-qualification/add-qualification.component";


const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent,
    children: [
      { path: ':id', component: EmployeeDetailsComponent },
      { path: ':id/qualifications', component: EmployeeQualificationDetailsComponent,
      children: [
        { path: 'add', component: AddQualificationComponent },
      ]},
      { path: 'add', component: AddEmployeeComponent },
    ]
  },
  { path: 'qualifications', component: QualificationListComponent,
    children: [
      { path: ':id', component: EmployeeByQualificationComponent },
      { path: 'add', component: AddQualificationComponent },
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
