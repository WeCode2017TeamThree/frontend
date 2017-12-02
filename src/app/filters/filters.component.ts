import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() filters;

  features: string[] = [
    'restrooms',
    'wifi',
    'charge_phone',
    'shower',
    'laundry',
    'camp'
  ];

  constructor() { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    const value = form.form.value;
    var result = {
      feature_types: []
    };

    for (var key in value) {
      if (value[key]) {
        result.feature_types.push(key);
      }
    }
    this.filters.next(result);
  }
}
