import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  features: string[] = [
    'restrooms',
    'wifi',
    'charge_phone',
    'shower',
    'laundry',
    'camp'
  ]

  onSubmit(form: NgForm) { 
    console.log(form.form.value);
  }
}
