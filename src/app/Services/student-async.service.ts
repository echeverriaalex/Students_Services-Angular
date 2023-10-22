import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private url = "https://utn-lubnan-api-1.herokuapp.com/api/Student/"
  constructor(private http: HttpClient) { }

  getAll():Promise<any>{
    return this.http.get(this.url).toPromise();
  }

  getById(studenId: number): Promise<any>{
    return this.http.get(this.url + studenId).toPromise();
  }

  add(student: Student): Promise<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Conten-Type': 'application/json'
      })
    }

    return this.http.post(this.url, student, httpOptions).toPromise();
  }


}
