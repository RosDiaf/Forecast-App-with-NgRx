import * as WeatherForecastActions from '../actions/weather';
import { initialState, AppState } from '../weatherInitialState';

export function weatherForecastReducer(state = initialState, action: WeatherForecastActions.WeatherForecastActions) {
    switch(action.type) {
        case WeatherForecastActions.FORECAST_DATA_SUCCESSFULLY_LOADED:
            return {
                ...state,
                CITY_STATE:  action.payload.city,
                FORECAST_STATE: action.payload.list.map(item => {
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
                WEATHER_DESCRIPTION_STATE: action.payload.list.map(item => {
                    return {
                        id: item.weather[0].id,
                        main: item.weather[0].main,
                        description: item.weather[0].description,
                        icon: item.weather[0].icon
                    }
                }),
                CLOUD_STATE: action.payload.list.map(item => {
                    return {
                        all: item.clouds.all
                    }
                }),
                WIND_STATE: action.payload.list.map(item => {
                    return {
                        speed: item.wind.speed,
                        deg: item.wind.deg
                    }
                }),
                WEATHERSYS_STATE: action.payload.list.map(item => {
                    return {
                        pod: item.sys.pod
                    }
                }),
                WEATHERLIST_STATE: action.payload.list.map(item => {
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
                    city: action.payload.city,
                    cod: action.payload.cod,
                    message: action.payload.message,
                    cnt: action.payload.cnt,
                    list: action.payload.list
                },
                SUMMARY_STATE: {
                    city: action.payload.city.name
                }
            }
        case WeatherForecastActions.FORECAST_DATA_FAILED:
            return {
                error: action.payload
            }
        default:
            return state;
    }
}

export const getForecast = (state: AppState) => state