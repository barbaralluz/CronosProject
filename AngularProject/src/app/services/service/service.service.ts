import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from 'src/app/models/service/service.model';

const baseUrl =  environment.baseUrl + '/api/Service/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(baseUrl + 'GetAllServices');
  }

  get(id: any): Observable<Service[]> {
    return this.http.get<Service[]>(`${baseUrl}Get?serviceId=${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + 'AddService', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}UpdateService?serviceId=${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}DeleteService?serviceId=${id}`);
  }
}
