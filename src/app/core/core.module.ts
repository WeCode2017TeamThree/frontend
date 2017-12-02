import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from '../home/home.component';
import { MapComponent } from '../map/map.component';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPwigZHPp6qPQ2Sf2S22cH44gd0lTUa3s'
    })
  ],
  declarations: [
    HomeComponent,
    MapComponent
  ]
})
export class CoreModule { }
