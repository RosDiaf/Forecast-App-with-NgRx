import * as WeatherForecastActions from '../actions/weather';
import { weatherForecastReducer } from '../reducers/weather';
import { initialState } from '../weatherInitialState';
import { weatherForecastSelectors } from './weather'
import { createSelector, createFeatureSelector, Store } from '@ngrx/store';
import { AppState } from '../../store/weatherInitialState';
import { forecast } from '../../../../assets/mock/forecast';

describe('Forecast Selectors', () => {
    it('should return the city state', () => {
        expect(weatherForecastSelectors.getCityState.projector(initialState)).toEqual(initialState.CITY_STATE)
    });

    it('should return the forecast state', () => {
        expect(weatherForecastSelectors
            .getForecastState
            .projector(initialState))
            .toEqual(initialState.FORECAST_STATE)
    });

    it('should return the weather description state', () => {
        expect(weatherForecastSelectors
            .getWeatherDescriptionState
            .projector(initialState))
            .toEqual(initialState.WEATHER_DESCRIPTION_STATE)
    });

    it('should return the cloud state', () => {
        expect(weatherForecastSelectors
            .getCloudsState
            .projector(initialState))
            .toEqual(initialState.CLOUD_STATE)
    });

    it('should return the wind state', () => {
        expect(weatherForecastSelectors
            .getWindState
            .projector(initialState))
            .toEqual(initialState.WIND_STATE)
    });

    it('should return the weather sys state', () => {
        expect(weatherForecastSelectors
            .getWeatherSysState
            .projector(initialState))
            .toEqual(initialState.WEATHERSYS_STATE)
    });

    it('should return the weather list state', () => {
        expect(weatherForecastSelectors
            .getWeatherListState
            .projector(initialState))
            .toEqual(initialState.WEATHERLIST_STATE)
    });

    it('should return the full weather state', () => {
        expect(weatherForecastSelectors
            .getFullWeatherState
            .projector(initialState))
            .toEqual(initialState.WEATHER_STATE)
    });

    it('should return the summary state', () => {
        expect(weatherForecastSelectors
            .getSummaryState
            .projector(initialState))
            .toEqual(initialState.SUMMARY_STATE)
    });
});