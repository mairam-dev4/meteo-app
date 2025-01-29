import { Component, inject, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from '../header.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-header',
  imports: [NgbNavModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  city = 'Dakar'
  dataWeather: any;
 
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
      console.log(response);
          this.getData(response[0]?.lat, response[0]?.lon);
    },
    error: (error: any) => {
      console.log(error);
    }
  })
}

  getData(latitude: number, longitude: number){

    console.log('res',latitude, longitude)

    this.service.getData(latitude, longitude).pipe().subscribe({
      next: (res) => {
        console.log(res)
        this.dataWeather = res;
      }, 
      error: (error) => {
        console.log(error);
      }
    })

  }
  
}
