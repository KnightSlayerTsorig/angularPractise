import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
