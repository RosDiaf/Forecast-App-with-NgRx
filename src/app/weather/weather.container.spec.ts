import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { StoreModule, Store} from '@ngrx/store'

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainer ],
      imports: [HttpClientModule, StoreModule.forRoot({})],
      providers: [WeatherService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // PLEASE IMPLEMENT MORE TESTS
  describe('Subscrbe to service', () => {
    let service: WeatherService;
    let response;
    let cityFormObj;
    beforeEach(() => {
      cityFormObj = {
        city: 'London'
      }
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
    
    it('should subscribe to data when city provided', fakeAsync(() => {
      service = TestBed.get(WeatherService);
      spyOn(service, 'searchWeatherForCity').and.returnValue(
        Observable.create((observer: Observer<{ response }>) => {
          observer.next(response);
          console.log(response)
          return observer;
        })
      );
      component.citySearch(cityFormObj);
    }));

    it('should set error message to true if service fails', fakeAsync(() => {
      service = TestBed.get(WeatherService);
      spyOn(service, 'searchWeatherForCity').and.returnValue(
        Observable.create((observer: Observer<{response}>) => {
          return observer.error('something went wrong');
        })
      );
      component.citySearch(cityFormObj);
    }));
  });
});
