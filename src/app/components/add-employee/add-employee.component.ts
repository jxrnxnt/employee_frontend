import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Location} from "@angular/common";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";
import { FormBuilder } from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit, OnChanges {

  checkoutForm = this.formBuilder.group({
    firstname: '',
    lastname: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
  });

  constructor(
    private location: Location,
    private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployeeComponent>
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    window.location.reload()
  }

  addEmployee(): void {
    let body: string = '{\n' +
      '  "lastName": "' + this.checkoutForm.get('lastname')?.value + '",\n' +
      '  "firstName": "' + this.checkoutForm.get('firstname')?.value + '",\n' +
      '  "street": "' + this.checkoutForm.get('street')?.value + '",\n' +
      '  "postcode": "' + this.checkoutForm.get('postcode')?.value + '",\n' +
      '  "city": "' + this.checkoutForm.get('city')?.value + '",\n' +
      '  "phone": "' + this.checkoutForm.get('phone')?.value + '"\n' +
      '}';
    this.employeeService.saveEmployee(body)
      .subscribe(employee => employee);
    this.dialogRef.close();
  }

  cancel(): void {
    //this.router.navigateByUrl('/employees');
    this.dialogRef.close();
  }
}
