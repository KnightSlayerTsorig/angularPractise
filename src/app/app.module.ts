import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FullUserComponent } from './components/full-user/full-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    UserComponent,
    UsersComponent,
    FullUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'cars', component: CarsComponent
      },
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id/phone', component: FullUserComponent}
        ]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
