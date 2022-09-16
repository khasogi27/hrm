import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get(environment.baseUrl + '/employees');
  }

  getEmployee(id: string) {
    return this.http.get(environment.baseUrl + '/employees/' + id);
  }

  postEmployee(form: any) {
    return this.http.post(environment.baseUrl + '/employees/', form);
  }

  updateEmployee(form: any) {
    return this.http.put(environment.baseUrl + '/employees/', form);
  }

  deleteEmployee(id: string) {
    return this.http.delete(environment.baseUrl + '/employees/' + id);
  }
}
