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
    Summary } from '../../model/weather';

export interface AppState {
    CITY_STATE: State
    COORD_STATE: State
    FORECAST_STATE: State
    WEATHER_DESCRIPTION_STATE: State
    CLOUD_STATE: State
    WIND_STATE: State
    WEATHERSYS_STATE: State
    WEATHERLIST_STATE: State
    WEATHER_STATE: State
    SUMMARY_STATE: State
    ERROR: State
}

export interface State {
    CITY_STATE: City;
    COORD_STATE: Coordinates;
    FORECAST_STATE: Forecast[];
    WEATHER_DESCRIPTION_STATE: WeatherDescription[];
    CLOUD_STATE: Clouds[];
    WIND_STATE: Wind[];
    WEATHERSYS_STATE: WeatherSys[];
    WEATHERLIST_STATE: WeatherList[];
    WEATHER_STATE: Weather;
    SUMMARY_STATE: Summary;
    ERROR: {}
}

export const initialState  = {
    CITY_STATE: {
        id: 2643743,
        name: 'London',
        population: 5500000,
        coord: {
            lon: 51.5073,
            lat: -0.1277
        },
        country: 'GB'
    },
    COORD_STATE: {
        lon: 51.5073,
        lat: -0.1277
    },
    FORECAST_STATE: {
        temp: 14.89,
        temp_min: 14.89,
        temp_max: 15.14,
        pressure: 1019.85,
        sea_level: 1019.85,
        grnd_level: 1012.4,
        humidity: 57,
        temp_kf: -0.25
    },
    WEATHER_DESCRIPTION_STATE: {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
    },
    CLOUD_STATE: {
        all: 100
    },
    WIND_STATE: {
        speed: 0.97,
        deg: 303.502
    },
    WEATHERSYS_STATE: {
        pod: 'd'
    },
    WEATHERLIST_STATE: [
        {
            dt: 1554001200,
            main: {
                "grnd_level": 1006.82,
                "humidity": 74,
                "pressure": 1014.39,
                "sea_level": 1014.39,
                "temp": 7.72,
                "temp_kf": -1.27,
                "temp_max": 8.99,
                "temp_min": 7.72,
            },
            weather:[{
                id: 803, main: "Clouds", description: "broken clouds", icon: "04d"
            }],
            clouds: [{ all: 64 }],
            wind: [{ speed: 5.27, deg: 57.5019 }],
            sys: [{ pod: "d" }],
            dt_txt: '2019-03-31 15:00:00'
        },
        {
            "dt": 1553979600,
            "main": {
              "temp": 12.11,
              "temp_min": 12.11,
              "temp_max": 12.3,
              "pressure": 1021.27,
              "sea_level": 1021.27,
              "grnd_level": 1013.71,
              "humidity": 77,
              "temp_kf": -0.19
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 88
            },
            "wind": {
              "speed": 1.15,
              "deg": 350.005
            },
            "rain": {
              "3h": 0.14
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2019-03-30 21:00:00"
          },
          {
            "dt": 1553990400,
            "main": {
              "temp": 9.85,
              "temp_min": 9.85,
              "temp_max": 9.98,
              "pressure": 1021.74,
              "sea_level": 1021.74,
              "grnd_level": 1014,
              "humidity": 86,
              "temp_kf": -0.13
            },
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "clouds": {
              "all": 64
            },
            "wind": {
              "speed": 1.61,
              "deg": 344.003
            },
            "rain": {
              "3h": 0.035
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2019-03-31 00:00:00"
          },
          {
            "dt": 1554001200,
            "main": {
              "temp": 7.91,
              "temp_min": 7.91,
              "temp_max": 7.98,
              "pressure": 1022.56,
              "sea_level": 1022.56,
              "grnd_level": 1014.93,
              "humidity": 100,
              "temp_kf": -0.06
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 56
            },
            "wind": {
              "speed": 4.46,
              "deg": 55.0028
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2019-03-31 03:00:00"
          },
          {
            "dt": 1554012000,
            "main": {
              "temp": 7.07,
              "temp_min": 7.07,
              "temp_max": 7.07,
              "pressure": 1024.02,
              "sea_level": 1024.02,
              "grnd_level": 1016.37,
              "humidity": 92,
              "temp_kf": 0
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
              "all": 80
            },
            "wind": {
              "speed": 4.75,
              "deg": 58.0025
            },
            "rain": {
              "3h": 0.095
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-31 06:00:00"
          },
          {
            "dt": 1554022800,
            "main": {
              "temp": 8.46,
              "temp_min": 8.46,
              "temp_max": 8.46,
              "pressure": 1025.6,
              "sea_level": 1025.6,
              "grnd_level": 1018.04,
              "humidity": 84,
              "temp_kf": 0
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
              "speed": 5.5,
              "deg": 62.5028
            },
            "rain": {
              "3h": 0.425
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-31 09:00:00"
          },
          {
            "dt": 1554033600,
            "main": {
              "temp": 10.46,
              "temp_min": 10.46,
              "temp_max": 10.46,
              "pressure": 1026.15,
              "sea_level": 1026.15,
              "grnd_level": 1018.67,
              "humidity": 69,
              "temp_kf": 0
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
              "all": 48
            },
            "wind": {
              "speed": 6.01,
              "deg": 74.5027
            },
            "rain": {
              "3h": 0.185
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2019-03-31 12:00:00"
          },
    ],
    WEATHER_STATE: {
        city: {
            id: 2643743,
            name: 'London',
            population: 5500000,
            coord: {
                lon: 51.5073,
                lat: -0.1277
            },
            country: 'GB'
        },
        cod: '200',
        message: 0.01,
        cnt: 8,
        list: []
    },
    SUMMARY_STATE: {
        city: 'London'
    }
}
