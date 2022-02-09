import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../../models/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
  }

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDMxOTg2MTksImlhdCI6MTY0MzE4NDIxOSwianRpIjoiOGZjYzA3MGMtNWUxMi00ZGRhLWE3YmEtYWI4MzczZTExYjYxIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkYzVmOGU2Yi0yOGVhLTRiM2ItOWIwNy1mZmU1NmNhMjI1OWYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.AoxwbE0hkTRAK7OPvJ8zqhpgTiKitO15h1MuRFoNZe3nEh6thTWiKOcv5jApoUZXN1TwdCWI2aZ3NEbhbuJvQQkGlAXSv_uSrrQpim2g4kCJarQgtNayKFwEL-fN_M9zPeo6o-p7EiQ4Q-WdP3Z1jaqf3Edmp3V5enjl7PYHaZMMtUV5WfR_6GhRjuS0iK31seVMe2L0Fzuk2Dc3sEYVYZnLsmXMwkZFuHho-Z6OcaciJUJJFo_gEa7CIkjKFp_-XlEMvfoRYh04l5077oQGEgws1VgNSUM6jlS7Kgy0laJJt2lRGC1O4Ot5R9VVm7AV8kUsBRAsSPtWB5qef3zWuQ';
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
