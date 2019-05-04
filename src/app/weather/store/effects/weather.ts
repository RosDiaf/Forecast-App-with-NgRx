import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { _throw as throwError } from 'rxjs/observable/throw';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'; 
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { WeatherService } from '../../weather.service';
import * as WeatherForecastActions from '../actions/weather';

@Injectable()
export class WeatherForecastEffects {
  @Effect() 
  createArticle$: Observable<Action> = this.actions$.pipe(
    ofType<WeatherForecastActions.LoadData>(WeatherForecastActions.LOAD_FORECAST_DATA),
    map(action => action.payload),
    mergeMap(city => 
       this.weatherService.searchWeatherForCity(city)
       .map(res => new WeatherForecastActions.DataSuccessfullyLoaded(res))
       .catch(error => of(new WeatherForecastActions.DataFailureAction(error)))
    ));

  constructor(private weatherService: WeatherService, private actions$: Actions) {}
}