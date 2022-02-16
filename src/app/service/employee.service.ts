import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";

import {Employee} from "../models/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDUwNDMzMzAsImlhdCI6MTY0NTAyODkzMCwianRpIjoiODI0YzhhOTUtZWMyZS00MDMzLWFhNzMtOWNkNWEzMjNkZmFmIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIwOGM1ZGU3Ny04YzlkLTRmOTItYTllMy0wMWMzMmNlNmM0YTQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.UdKywCslUew04DoCDlZ0bHRhXg7mh9lhdSE7nxLMsZeU6q9Gf3wxMoHdt6nIpU3C7YVQ3Ypi6pYOzAHAPJKtS203fCn-D_tGgt7JCjnaKV4BH5EH0fldCR0bZ_6K4C85aYfY7xZylyj7qCk7Fj6o9UAf3X20VoLk4b2MrIzIRfgmy9b-IFxEXvw0_XiNwwDjyEcQebam9WGHcUvu7JdpZm4wAUm26oFDE821zItL3xEw9ZX258ZQwJ8GrUVno3SuQEgyXNdEPP4f83_fWf-WJeIF90Jl94TJGA4_6RvdPOrqTBKl3b5Gj7lY50lJfta4ZP4qgImy6lvCThQ8ErycRw';
  employees$: Observable<Employee[]>;
  employee$: Observable<Employee>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.employee$ = of();
    this.fetchData();
  }

  getEmployees(): Observable<Employee[]> {
    this.fetchData()
    return this.employees$;
  }

  getEmployee(id: number): Observable<Employee> {
    return this.employee$ = this.http.get<Employee>('/backend/employees/' + id.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  deleteEmployee(id: number) {
    return this.http.delete<Employee>('/backend/employees/' + id.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  saveEmployee(body: string) {
    return this.http.post<Employee>('/backend/employees', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  updateEmployee(id: number, body: string) {
    return this.http.put<Employee>('/backend/employees/' + id.toString(), body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend/employees', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }
}
