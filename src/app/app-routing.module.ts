import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './core/core.module#CoreModule'
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
