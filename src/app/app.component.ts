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
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDQ0MTAxMTgsImlhdCI6MTY0NDM5NTcxOCwianRpIjoiYWRkYWMyNDItYzVhMi00NDJhLTk1ZjgtZWEzYTk0ZDRhM2ZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI2MTNjY2E2OC0xM2M3LTQ3NjAtOTgyMy01MmY1YWZmMmJkMDUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.BXDlJ52VYcaG4rA9aUkNGg6nRG4Qrbm5mbeOgypnQfldbQt_IGWQ7oSsjqxXhtM5iY6AUCqy9cL0NrJKm3OPdV2Nw0e4O_5s5GFfvV5PlGL07ZDri5PzhHOEPRcBqH-DdIc2YEbyXhiK-gpoMhTlpX1yJFwocVHPMZpf0FTsjfAxorfbRCQljOXlQ1XnitGO-Ksjb0YQ4EFBEtFOWEV8QYJAy02ycgvgDU_imCVYs0BMUB-XKBqmEgV1EvuaORup4vmkLHNLIfEY8mwCZ-xICOn5ukeLqu5Z6Yn0mWqgcRsFjVILbrQQKRcfPz3BrwFH4YVOEQTIvYYlXoNl2Zi2VQ';
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
