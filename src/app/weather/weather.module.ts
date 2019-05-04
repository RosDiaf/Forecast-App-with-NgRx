import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherForecastActions, WeatherForecastEffects, weatherForecastReducer } from './store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('forecast', weatherForecastReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([WeatherForecastEffects]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService,
  ]
})
export class WeatherModule { }
