import { Component } from "@angular/core";
import { Car } from "./domain/car";
import { CarService } from "./services/car.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  availableCars: Car[];

  selectedCars: Car[];

  draggedCar: Car;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.selectedCars = [];
    this.carService.getCarsSmall().then(cars => (this.availableCars = cars));
  }

  dragStart(event, car: Car) {
    this.draggedCar = car;
  }

  drop(event) {
    if (this.draggedCar) {
      let draggedCarIndex = this.findIndex(this.draggedCar);
      this.selectedCars = [...this.selectedCars, this.draggedCar];
      this.availableCars = this.availableCars.filter(
        (val, i) => i != draggedCarIndex
      );
      this.draggedCar = null;
    }
  }

  dragEnd(event) {
    this.draggedCar = null;
  }

  findIndex(car: Car) {
    let index = -1;
    for (let i = 0; i < this.availableCars.length; i++) {
      if (car.vin === this.availableCars[i].vin) {
        index = i;
        break;
      }
    }
    return index;
  }
}
