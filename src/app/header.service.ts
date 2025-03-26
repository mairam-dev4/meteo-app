import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  API_KEY = '8124a8d8720de1947bc2263b685505c0';

  constructor(private http: HttpClient) { }

  getCitySuggestions(query: string): any {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${this.API_KEY}`;
    return this.http.get(url);
  }

  getCoordinate(city: string, limit:number = 5) : any{
      return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${this.API_KEY}`)
  }

  getData(lat: number, lon: number){
   return  this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${this.API_KEY}`)
  
  }

  getForecast(lat: number, lon: number) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${this.API_KEY}`
    );
  }


}
