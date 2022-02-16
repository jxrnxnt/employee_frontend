import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";

import {Qualification} from "../models/Qualification";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NDUwNDMzMzAsImlhdCI6MTY0NTAyODkzMCwianRpIjoiODI0YzhhOTUtZWMyZS00MDMzLWFhNzMtOWNkNWEzMjNkZmFmIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIwOGM1ZGU3Ny04YzlkLTRmOTItYTllMy0wMWMzMmNlNmM0YTQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.UdKywCslUew04DoCDlZ0bHRhXg7mh9lhdSE7nxLMsZeU6q9Gf3wxMoHdt6nIpU3C7YVQ3Ypi6pYOzAHAPJKtS203fCn-D_tGgt7JCjnaKV4BH5EH0fldCR0bZ_6K4C85aYfY7xZylyj7qCk7Fj6o9UAf3X20VoLk4b2MrIzIRfgmy9b-IFxEXvw0_XiNwwDjyEcQebam9WGHcUvu7JdpZm4wAUm26oFDE821zItL3xEw9ZX258ZQwJ8GrUVno3SuQEgyXNdEPP4f83_fWf-WJeIF90Jl94TJGA4_6RvdPOrqTBKl3b5Gj7lY50lJfta4ZP4qgImy6lvCThQ8ErycRw';
  qualifications$: Observable<Qualification[]>;
  qualification$: Observable<Qualification>;

  constructor(private http: HttpClient) {
    this.qualifications$ = of([]);
    this.qualification$ = of();
    this.fetchData();
  }

  getQualifications(): Observable<Qualification[]> {
    this.fetchData()
    return this.qualifications$;
  }

  getQualification(id: number): Observable<Qualification> {
    return this.qualification$ = this.http.get<Qualification>('/backend/qualifications/' + id.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  deleteQualification(id: number) {
    return this.http.delete<Qualification>('/backend/qualifications/' + id.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  saveQualification(body: string) {
    return this.http.post<Qualification>('/backend/qualifications', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  updateQualification(id: number, body: string) {
    return this.http.put<Qualification>('/backend/qualifications/' + id.toString(), body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  fetchData() {
    this.qualifications$ = this.http.get<Qualification[]>('/backend/qualifications', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }
}
