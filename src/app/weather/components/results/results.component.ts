import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnChanges {
  @Input() cityStateValues: any;

  cityStateValuesArr: any = [];

  constructor() {}

  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
    if(this.cityStateValues) {
      this.cityStateValuesArr.push(this.cityStateValues);
    }
  }
}