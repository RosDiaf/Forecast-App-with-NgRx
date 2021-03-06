import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

import { AppState } from './store/weatherInitialState';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators'
import { Store, select } from '@ngrx/store';
import * as weatherForecast from './store/reducers/weather';
import * as WeatherForecastActions from './store/actions/weather';
import { weatherForecastSelectors } from './store/selectors/weather';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (cityName)='citySearch($event)'></app-search>
  <app-results [cityStateValues]='cityStateValues'>
  </app-results>`
})
export class WeatherContainer implements OnInit {
  isServiceFail: boolean;
  cityStateValues: object;
  city$: Observable<any>;

  constructor(private weatherService: WeatherService, private store: Store<AppState>) {}

  ngOnInit() {
    this.city$ = this.store.pipe(select(weatherForecastSelectors.getCityState));

    this.store.pipe(select(weatherForecastSelectors.getWeatherForecast)).subscribe(data => {
      this.cityStateValues = data;
    });
  }

  citySearch(cityFormObj) {
    // TO BE IMPLMENTED
    this.store.dispatch(new WeatherForecastActions.LoadData(cityFormObj.city));
  }
}