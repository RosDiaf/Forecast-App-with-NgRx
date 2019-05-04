import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getElement(elem) {
    return element(by.css(elem)).getTagName()
  }

  getElementText(name) {
    return element(by.css(name)).getText();
  }

  getTextBox(name) {
    return element(by.name(name));
  }

  getForm(name) {
    return element(by.name(name));
  }
}
