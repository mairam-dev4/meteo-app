import { Component, inject, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from '../header.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [NgbNavModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  city = 'Dakar'


  ngOnInit(): void {
    this.getData()
  }
  onClick(){

  }

  private service = inject(HeaderService)





  getData(){

    this.service.getData(this.city).pipe().subscribe({
      next: (res) => {
        console.log(res)
      }, 
      error: (error) => {
        console.log(error);
      }
    })

  }
  
}
