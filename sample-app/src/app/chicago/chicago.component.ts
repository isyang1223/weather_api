import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any;
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let observable = this._httpService.getWeather("chicago");
    observable.subscribe(data => {
      console.log(data)
      console.log(data["name"])
      this.city = data

      this.city.main.temp = Math.round(this.city.main.temp * 9 / 5 - 459.67)
      this.city.main.temp_min = Math.round(this.city.main.temp_min * 9 / 5 - 459.67)
      this.city.main.temp_max = Math.round(this.city.main.temp_max * 9 / 5 - 459.67)
    })
  }

}