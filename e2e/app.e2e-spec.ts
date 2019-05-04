import { AppPage } from './app.po';

describe('angular-weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('e2e are running empty, please implement', () => {
    expect(page);
  });

  describe('Initial page', () => {
    beforeEach(() => {
      page.navigateTo();
    });

    it('has table', () => {
      expect(page.getElement('table')).toEqual('table');
    });

    it('has table header', () => {
      expect(page.getElement('thead')).toEqual('thead');
    });

    it('has table body', () => {
      expect(page.getElement('tbody')).toEqual('tbody');
    });

    it('has city header', () => {
      expect(page.getElement('#city-header')).toEqual('th');
    });

    it('has th element for time values', () => {
      expect(page.getElement('#time')).toEqual('th');
    });

    it('has td element for city values', () => {
      expect(page.getElement('#city-value')).toEqual('td');
    });

    it('has td element for temperature values', () => {
      expect(page.getElement('#temp-value')).toEqual('td');
    });
  });

  describe('Search form', () => {
    it('has input element for entering city', () => {
      expect(page.getElement('#city')).toEqual('input');
    });

    it('has search button element for submitting search', () => {
      expect(page.getElement('#search-button')).toEqual('button');
    });

    xit('has error message for invalid city name', () => {
      // Submit wrong value to see error message
      page.getTextBox('city').sendKeys('London%%^^&');
      expect(page.getElementText('error')).toEqual('Enter valid city');
    });

    it('search should be valid', () => {
      page.getTextBox('city').sendKeys('London');
      let form = page.getForm('searchCityForm').getAttribute('class');
      expect(form).toContain('ng-valid'); 
    });

    it('Login form should be invalid', () => {
      page.getTextBox('city').sendKeys('');
      let form = page.getForm('searchCityForm').getAttribute('class');
      expect(form).toContain('ng-untouched');
    });
  });
});