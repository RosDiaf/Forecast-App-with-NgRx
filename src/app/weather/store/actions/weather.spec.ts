import { LoadData, DataSuccessfullyLoaded, DataFailureAction } from './weather'

describe('Load data', () => {
    it('it should create LOAD_FORECAST_DATA action', () => {
        const payload = {
            city: 'london'
        }
        const action = new LoadData(payload)

        expect({...action}).toEqual({
            type: 'LOAD_FORECAST_DATA',
            payload,
        });
    });

    it('it should create FORECAST_DATA_SUCCESSFULLY_LOADED action', () => {
        const payload = {
            city: 'london'
        }
        const action = new DataSuccessfullyLoaded(payload)

        expect({...action}).toEqual({
            type: 'FORECAST_DATA_SUCCESSFULLY_LOADED',
            payload,
        });
    });

    it('it should create FORECAST_DATA_FAILED action', () => {
        const payload = {
            city: 'london'
        }
        const action = new DataFailureAction(payload)

        expect({...action}).toEqual({
            type: 'FORECAST_DATA_FAILED',
            payload,
        });
    });
});