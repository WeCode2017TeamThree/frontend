import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from '../home/home.component';
import { MapComponent } from '../map/map.component';
import { FormComponent } from '../form/form.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPwigZHPp6qPQ2Sf2S22cH44gd0lTUa3s'
    }),
    FormsModule
  ],
  declarations: [
    HomeComponent,
    MapComponent,
    FormComponent
  ]
})
export class CoreModule { }
