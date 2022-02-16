import {Component} from '@angular/core';
import {Employee} from "./models/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDQ1MjM3MjAsImlhdCI6MTY0NDUwOTMyMCwianRpIjoiYzA2MDNlMmMtYzNhZC00NGYxLTk4MTItZWY0YmY1ODU3NjQ2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI3NWI2OTFkNC05NjViLTRlMWEtOGQ4ZS01NzY1ZWYyNmE1M2EiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.XPKhov90P2kqGSFDA5t-8ahTGn6k-L_ER9z-VkOeiAdYt1legPwR4i5u3lQB8TE6L3C-Vo_iypIC-tLmgwB0ipEuqQ1B33oLAXgMTbMHVi0780qayB4ARy1hVsSGAaSrXHxWUv6J-6b5-uVkYj9PfIaOghJ1NPTqQ1NL31Ea_G6AkfzrCbG0nH1ZnZ8C8Ortl4xndv9u1ICufP0SsirwEX2C3PL5pG6krg1RUw84fUGvxBBRoDnG9GjC5Rrx8iiiP0neHqrKR-xwxFLTOFoIIERNX93xzCkCccYZwv3b0vSnEt95t5feG2F1IsULzquaxFvv1DGl5lrXMcNCoKE9Qg';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }
}
