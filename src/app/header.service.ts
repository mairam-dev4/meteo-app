import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  API_KEY = '8124a8d8720de1947bc2263b685505c0';

  constructor(private http: HttpClient) { }


  getCoordinate(city: string, limit:number = 1) : any{
      return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${this.API_KEY}`)
  }

  getData(lat: number, lon: number){
   return  this.http.get(` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.API_KEY}`)
  
  }


}
