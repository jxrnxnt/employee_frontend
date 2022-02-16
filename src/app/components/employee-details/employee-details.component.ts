import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { Employee } from '../../models/Employee';
import { EmployeeService } from "../../service/employee.service";
import {Location} from "@angular/common";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnChanges {
  employee: Employee;
  display = "view";
  checkoutForm: any



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private location: Location,
    private formBuilder: FormBuilder,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.employee = this.getEmployee();

    console.log(this.employee)
    this.checkoutForm = this.formBuilder.group({
      firstname: this.employee?.firstName,
      lastname: this.employee?.lastName,
      street: this.employee?.street,
      postcode: this.employee?.postcode,
      city: this.employee?.city,
      phone: this.employee?.phone,
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    window.location.reload()
  }

  getEmployee(): Employee {
    //const id = this.route.params.subscribe( params => this.employeeService.getEmployee(params['id']));
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);

    return this.employee
  }

  deleteEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.deleteEmployee(id)
      .subscribe(employee => this.employee = employee);
    this.location.back()
  }

  saveEdit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let body: string = '{\n' +
      '  "lastName": "' + this.checkoutForm.get('lastname')?.value + '",\n' +
      '  "firstName": "' + this.checkoutForm.get('firstname')?.value + '",\n' +
      '  "street": "' + this.checkoutForm.get('street')?.value + '",\n' +
      '  "postcode": "' + this.checkoutForm.get('postcode')?.value + '",\n' +
      '  "city": "' + this.checkoutForm.get('city')?.value + '",\n' +
      '  "phone": "' + this.checkoutForm.get('phone')?.value + '"\n' +
      '}';
    console.log(body)
    this.employeeService.updateEmployee(id, body)
      .subscribe(employee => this.employee = employee);
    this.display = "view";
  }
}
