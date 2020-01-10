import { Component } from "@angular/core";
import { Car } from "./domain/car";
import { CarService } from "./services/car.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
   styles: [`
        :host ::ng-deep .drag-column {
            padding-right: .5em;
        }

        :host ::ng-deep .drop-column {
            border: 1px solid #c8c8c8;
            background-color: #ffffff;
        }

        .ui-g li {
            list-style-type: none;
            padding: 10px;
            margin-bottom: 5px;
            border: 1px solid #c8c8c8;
            background-color: #ffffff;
        }
    `]
})
export class AppComponent {
  availableCars: Car[];

  selectedCars: Car[];

  draggedCar: Car;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.selectedCars = [];

    this.availableCars = [
      { brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff" },
      { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
      { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
      { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
      { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
      { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
      { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
      { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
      { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
      { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" }
    ];
    // this.carService.getCarsSmall().then(cars => (this.availableCars = cars));
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
