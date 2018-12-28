import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  apiKey = '0910895edbd94022bae62013182812';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  this.url = 'http://api.apixu.com/v1/current.json?key='+this.apiKey+'&q';
  }

getWeather(city) {

 return this.http.get(this.url+'='+city);
}

}
