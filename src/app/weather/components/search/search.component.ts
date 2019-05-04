import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  @Output() cityName = new EventEmitter();
  searchCityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.buildSearchCityForm();
  }

  buildSearchCityForm() {
    this.searchCityForm = this.formBuilder.group({
      city: this.formBuilder.control(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z])([A-Za-z]*)+$')]),
    });
  }

  search() {
    // TO BE IMPLEMENTED
    if (this.searchCityForm.valid) {
      this.cityName.emit(this.searchCityForm.value);
    }
  }
}
