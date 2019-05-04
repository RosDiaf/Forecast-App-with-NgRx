import { Action } from '@ngrx/store';

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
export const LOAD_FORECAST_DATA = 'LOAD_FORECAST_DATA';
export const FORECAST_DATA_SUCCESSFULLY_LOADED = 'FORECAST_DATA_SUCCESSFULLY_LOADED';
export const FORECAST_DATA_FAILED = 'FORECAST_DATA_FAILED';

export class LoadData implements Action {
    readonly type = LOAD_FORECAST_DATA;
    constructor(public payload: any) {}
}

export class DataSuccessfullyLoaded implements Action {
    readonly type = FORECAST_DATA_SUCCESSFULLY_LOADED;
    constructor(public payload: any) {}
}

export class DataFailureAction implements Action {
    readonly type = FORECAST_DATA_FAILED;
    constructor(public payload: any) {}
}

export type WeatherForecastActions = LoadData | DataSuccessfullyLoaded | DataFailureAction