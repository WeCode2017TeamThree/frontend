import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from '../home/home.component';
import { MapComponent } from '../map/map.component';
import { FormComponent } from '../form/form.component';
import { AboutComponent } from '../about/about.component';

import { AgmCoreModule } from '@agm/core';
import { ApiService } from '../api.service';
import { FiltersComponent } from '../filters/filters.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPwigZHPp6qPQ2Sf2S22cH44gd0lTUa3s'
    }),
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    MapComponent,
    FormComponent,
    AboutComponent,
    FiltersComponent
  ],
  providers: [ApiService]
})
export class CoreModule { }
