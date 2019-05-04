import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';

import { WeatherForecastEffects } from './weather';
import * as WeatherForecastActions from '../actions/weather';
import { WeatherService } from '../../weather.service';

 
describe('My Effects', () => {
  let effects: WeatherForecastEffects;
  let actions: Observable<any>;
  let response;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
        // any modules needed
      ],
      providers: [
        WeatherService,
        WeatherForecastEffects,
        provideMockActions(() => actions),
        {
          provide: WeatherService,
          useValue: jasmine.createSpyObj('weatherService', ['searchWeatherForCity'])
        }
        // other providers
      ],
    });
 
    effects = TestBed.get(WeatherForecastEffects);
  });

  beforeEach(() => {
    response = {  
      "id":2643743,
      "name":"London",
      "coord":{  
          "lat":51.5073,
          "lon":-0.1277
      },
      "list": [
        {
          "dt": 1553968800,
          "main": {
            "temp": 14.89,
            "temp_min": 14.89,
            "temp_max": 15.14,
            "pressure": 1019.85,
            "sea_level": 1019.85,
            "grnd_level": 1012.4,
            "humidity": 57,
            "temp_kf": -0.25
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 0.97,
            "deg": 303.502
          },
          "rain": {
            "3h": 0.03
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2019-03-30 18:00:00"
        }
      ],
      "country":"GB",
      "population":1000000
    }
  });
 
  xit('should work', () => {
    const action = new WeatherForecastActions.LoadData(response);
    const completion = new WeatherForecastActions.DataSuccessfullyLoaded(response);
    const weatherService = TestBed.get(WeatherService);

    // let weatherService: WeatherService;
    // spyOn(weatherService, 'searchWeatherForCity').and.returnValues(response);

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax

    // spyOn(weatherService, 'searchWeatherForCity').and.returnValue(
    //   Observable.create((observer: Observer<{ response }>) => {
    //     observer.next(response);
    //     console.log(response)
    //     return observer;
    //   })
    // );

    actions = cold('--a-', { a: action });
    // weatherService.searchWeatherForCity('London');
    const result = actions.map(s => `${Number(s) + 1}`);
    const expected = cold('--b', { b: completion });
    console.log(actions)
    console.log(expected)
    console.log(effects.createArticle$)
    console.log(result)
    expect(effects.createArticle$).toBeObservable(expected);
  });
});
