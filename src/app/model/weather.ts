export interface City {
  id: number;
  name: string;
  population?: number;
  coord?: Coordinates;
  country?: string;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Forecast {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface WeatherSys {
  pod: string;
}

export interface WeatherList {
  dt: number;
  main: Forecast[];
  weather: WeatherDescription[];
  clouds: Clouds[];
  wind: Wind[];
  sys: WeatherSys[];
  dt_txt: string;
}

export interface Weather {
  city?: City;
  cod?: string;
  message?: number;
  cnt?: number;
  list?: WeatherList[];
}

export interface Summary {
  city: string;
}


export class CityName implements City {
  id: number;
  name: string;
  population?: number;
  coord?: Coordinates;
  country?: string;

  constructor(id: number, 
    name: string,
    population?: number,
    coord?: Coordinates,
    country?: string) 
  {
    this.id = id;
    this.name = name;
    this.population = population;
    this.coord = coord;
    this.country = country;
  }
}

export class CityForecast implements Forecast {
  public temp: number;
  public temp_min: number;
  public temp_max: number;
  public pressure: number;
  public sea_level: number;
  public grnd_level: number;
  public humidity: number;
  public temp_kf: number;

  constructor(temp: number,
              temp_min: number,
              temp_max: number,
              pressure: number,
              sea_level: number,
              grnd_level: number,
              humidity: number,
              temp_kf: number) {

    this.temp = temp;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.pressure = pressure;
    this.sea_level = sea_level;
    this.grnd_level = grnd_level; 
    this.humidity = humidity;
    this.temp_kf = temp_kf;
  }
}

export class CityCoordinates implements Coordinates {
  lon: number;
  lat: number;

  constructor(
    lon: number,
    lat: number) {

    this.lon = lon;
    this.lat = lat;
  }
}

export class CityWeatherDescription implements WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;

  constructor(id: number,
              main: string,
              description: string,
              icon: string) {

      this.id = id;
      this.main = main;
      this.description = description,
      this.icon = icon;
  }
}

export class CityWeatherList implements WeatherList {
  dt: number;
  main: Forecast[];
  weather: WeatherDescription[];
  clouds: Clouds[];
  wind: Wind[];
  sys: WeatherSys[];
  dt_txt: string;

  constructor(dt: number,
              main: Forecast[],
              weather: WeatherDescription[],
              clouds: Clouds[],
              wind: Wind[],
              sys: WeatherSys[],
              dt_txt: string) {
      
    this.dt = dt;
    this.main = main;
    this.weather = weather;
    this.clouds = clouds;
    this.wind = wind;
    this.sys = sys;
    this.dt_txt = dt_txt;
  }
}

export class CloudsForecast implements Clouds {
  all: number;

  constructor(all: number) {
    this.all = all;
  }
}

export class WindForecast implements Wind {
  speed: number;
  deg: number;

  constructor(speed: number, deg: number) {
    this.speed = speed;
    this.deg = deg;
  }
}

export class WeatherSysForecast implements WeatherSys {
  pod: string;

  constructor(pod: string) {
    this.pod = pod;
  }
}

export class WeatherForecast implements Weather {
  city?: City;
  cod?: string;
  message?: number;
  cnt?: number;
  list?: WeatherList[];

  constructor(city: City,
              cod: string,
              message: number,
              cnt: number,
              list: WeatherList[]
  ) {
    this.city = city;
    this.cod = cod;
    this.message = message;
    this.cnt = cnt;
    this.list = list;
  }
}

export class SummaryForecast implements Summary {
  city: string;

  constructor(city: string) {
    this.city = city;
  }
}