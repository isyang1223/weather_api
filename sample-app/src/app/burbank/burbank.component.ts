import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let observable = this._httpService.getWeather("burbank");
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
