import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from 'src/app/models/person/person.model';


const baseUrl =  environment.baseUrl + '/api/Person/';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(baseUrl + 'GetAllPersons');
  }

  get(id: any): Observable<Person[]> {
    return this.http.get<Person[]>(`${baseUrl}Get?userId=${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + 'AddPerson', data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${baseUrl}UpdatePerson`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}DeletePerson?userId=${id}`);
  }

  getByName(userName: any): Observable<Person[]> {
    return this.http.get<Person[]>(`${baseUrl}GetAllPersonByName?userName=${userName}`);
  }
}