import {Component, OnInit} from '@angular/core';
import {ICar} from '../../interfaces/cars.interface';
import {cars} from '../../data/carsData';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: ICar[] = cars;
  counter = 0;
  showNextCar(): number{
    if (this.counter < cars.length - 1) {
      return this.counter += 1;
    }
    else {
      return this.counter = 0;
    }
  }
  showPreviousCar(): number{
    if (this.counter <= cars.length - 1 && this.counter >= 1) {
      return this.counter -= 1;
    }
    else if (this.counter === 0) {
      return this.counter = cars.length - 1;
    }
  }
}
