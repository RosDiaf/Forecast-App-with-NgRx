import { createSelector, createFeatureSelector, Store } from '@ngrx/store';
import { AppState } from '../../store/weatherInitialState';
import * as weatherForecastReducer from '../reducers/weather';
import { 
    City, 
    Coordinates, 
    Forecast, 
    WeatherDescription, 
    Clouds, 
    Wind, 
    WeatherSys,
    WeatherList,
    Weather,
    Summary } from '../../../model/weather';

// TO BE IMPLEMENTED IF NF-RX IS USED

export const getWeatherState = createFeatureSelector<AppState>('forecast');

export const getWeatherForecast = createSelector(
    getWeatherState, weatherForecastReducer.getForecast);

export const getCityState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.CITY_STATE
    }
)

export const getForecastState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.FORECAST_STATE
    }
)

export const getWeatherDescriptionState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.WEATHER_DESCRIPTION_STATE
    }
)

export const getCloudsState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.CLOUD_STATE
    }
)

export const getWindState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.WIND_STATE
    }
)

export const getWeatherSysState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.WEATHERSYS_STATE
    }
)

export const getWeatherListState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.WEATHERLIST_STATE
    }
)

export const getFullWeatherState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.WEATHER_STATE
    }
)

export const getSummaryState = createSelector(
    getWeatherState, (state: AppState) => {
        return state.SUMMARY_STATE
    }
)

export const weatherForecastSelectors = {
    getWeatherForecast,
    getCityState,
    getForecastState,
    getWeatherDescriptionState,
    getCloudsState,
    getWindState,
    getWeatherSysState,
    getWeatherListState,
    getFullWeatherState,
    getSummaryState
}