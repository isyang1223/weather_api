import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  cities = {"sanjose": 5392171, 'seattle': 5809844, 'burbank': 5331836, 'dallas': 4190598, 'washington': 4138106, 'chicago': 4887398}

  getWeather(city){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=' + this.cities[city] + '&APPID=3fb22e5c13b46e2d1f8f6226563e0fac')
   
 
  }
}
