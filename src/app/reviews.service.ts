import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getReviews(){
    return axios.get('https://dummyjson.com/c/8ae1-a3b9-4e58-9ff3');
  }

  registerApi(formData: any): Observable<any> {
    return this.http.post('http://localhost:5000/register',formData)
    .pipe(map((res) => res));
  }
}
