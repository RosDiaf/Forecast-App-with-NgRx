import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) { }

  public searchWeatherForCity(city): Observable<any> {
    return this.http.get(`${this.url}?q=${city}&cnt=${this.params.cnt}&units=${this.params.units}&APPID=${this.params.APPID}`).pipe(
        map((response) => response));
  }
}

