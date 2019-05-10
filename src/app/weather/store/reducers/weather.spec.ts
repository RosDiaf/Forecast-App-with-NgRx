import * as WeatherForecastActions from '../actions/weather';
import { weatherForecastReducer } from './weather';
import { initialState } from '../weatherInitialState';
import { forecast } from '../../../../assets/mock/forecast';

describe('Weather Forecast Reducer', () => {
    it('should return the default state', () => {
        const actions = {};
        const state = weatherForecastReducer(undefined, actions);
        expect(state).toBe(initialState);
    });

    it('should return error if service fails', () => {
        const actions = new WeatherForecastActions.DataFailureAction(forecast);
        const state = weatherForecastReducer(undefined, actions);
        expect(state).toEqual({
            error: forecast
        });
    });

    it('should load data successfully', () => {
        const actions = new WeatherForecastActions.DataSuccessfullyLoaded(forecast);
        const state = weatherForecastReducer(initialState, actions);

        expect(state).toEqual({
            ...initialState,
            CITY_STATE: forecast.city,
            FORECAST_STATE: forecast.list.map(item => {
                return { 
                    item: item.main.temp,
                    temp_min: item.main.temp_min,
                    temp_max: item.main.temp_max,
                    pressure: item.main.pressure,
                    sea_level: item.main.sea_level,
                    grnd_level: item.main.grnd_level,
                    humidity: item.main.humidity,
                    temp_kf: item.main.temp_kf
                }
            }),
            WEATHER_DESCRIPTION_STATE: forecast.list.map(item => {
                return {
                    id: item.weather[0].id,
                    main: item.weather[0].main,
                    description: item.weather[0].description,
                    icon: item.weather[0].icon
                }
            }),
            CLOUD_STATE: forecast.list.map(item => {
                return {
                    all: item.clouds.all
                }
            }),
            WIND_STATE: forecast.list.map(item => {
                return {
                    speed: item.wind.speed,
                    deg: item.wind.deg
                }
            }),
            WEATHERSYS_STATE: forecast.list.map(item => {
                return {
                    pod: item.sys.pod
                }
            }),
            WEATHERLIST_STATE: forecast.list.map(item => {
                return {
                    dt: item.dt,
                    main: item.main,
                    weather: item.weather,
                    clouds: item.clouds,
                    wind: item.wind,
                    sys: item.sys,
                    dt_txt: item.dt_txt
                }
            }),
            WEATHER_STATE: {
                city: forecast.city,
                cod: forecast.cod,
                message: forecast.message,
                cnt: forecast.cnt,
                list: forecast.list
            },
            SUMMARY_STATE: {
                city: forecast.city.name
            }
        });
    })
});
