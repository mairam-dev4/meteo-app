import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  API_KEY = '8124a8d8720de1947bc2263b685505c0';

  constructor(private http: HttpClient) { }



  getData(city: string, limit: number = 5){
   return  this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${this.API_KEY}`)
  }
}
