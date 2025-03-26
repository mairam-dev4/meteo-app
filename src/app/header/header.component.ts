import { Component, inject, NgModule, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from '../header.service';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [NgbNavModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  city = 'Dakar'
  dataWeather: any;
  forecast: any[] = [];
 
  currentDate = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  ngOnInit(): void {
    this.getCoordinate();
  }

  
  
  onClick(){
    this.getCoordinate();
  }

  private service = inject(HeaderService)



getCoordinate(){
  this.service.getCoordinate(this.city).subscribe({
    next: (response:any) => {
     

          if (response.length > 0) {
            this.getData(response[0].lat, response[0].lon);
            this.city =response[0].name;
            this.getForecast(response[0].lat, response[0].lon);
          }
        },

       error: (error: any) => {
        
         console.log(error);
    }
});
}

  getData(latitude: number, longitude: number){

    console.log('res',latitude, longitude)

    this.service.getData(latitude, longitude).pipe().subscribe({
      next: (res) => {
        console.log(res)
        this.dataWeather = res;
      }, 
      error: (error) => {
        alert('Erreur lors de la récupération des données météo actuelles.');
        console.log(error);
      }
    })

  }

  getForecast(latitude: number, longitude: number) {
    this.service.getForecast(latitude, longitude).subscribe({
      next: (res: any) => {
        this.forecast = res.list.filter((item: any, index: number) => index % 8 === 0);
      },
      error: (error) => {
        alert('Erreur lors de la récupération des prévisions météo.');
         console.log(error)
        }
    });
  }

  
daysOfWeek: string[] = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

getDayName(index: number): string {
  const today = new Date().getDay(); 
  return this.daysOfWeek[(today + index+1) % 7];
}

getWeatherIcon(weather: string): string {
  switch (weather.toLowerCase()) {
    case 'clear':
    case 'sunny':
      return 'fa-solid fa-sun';
    case 'clouds':
      return 'fa-solid fa-cloud';
    case 'rain':
      return 'fa-solid fa-cloud-showers-heavy';
    case 'snow':
      return 'fa-solid fa-snowflake';
    default:
      return 'fa-solid fa-cloud-sun';
  }
}

 traduireMeteo(condition: string): string {
  switch (condition.toLowerCase()) {
    case 'clear':
    case 'sunny':
      return 'Ensoleillé';
    case 'clouds':
      return 'Nuageux';
    case 'rain':
      return 'Pluvieux';
    case 'snow':
      return 'Neigeux';
    default:
      return 'Partiellement nuageux';
  }
}


  
}
