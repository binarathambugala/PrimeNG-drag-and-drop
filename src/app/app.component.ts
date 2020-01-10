import { Component } from "@angular/core";
import { Sale } from "./domain/sale";
import { Car } from "./domain/car";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep .drag-column {
        padding-right: 0.5em;
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
    `
  ]
})
export class AppComponent {
  sale1: Sale;
  sale2: Sale;
  sales: Sale[];

  availableCars: Car[];

  draggedCar: Car;

  constructor() {}

  ngOnInit() {
    this.sale1 = { id: 1, name: "Sale 1", cars: [] };
    this.sale2 = { id: 2, name: "Sale 2", cars: [] };
    this.sales = [];

    let sale3: Sale = { id: 3, name: "Sale 3", cars: [] = [] };
    let sale4: Sale = { id: 4, name: "Sale 4", cars: [] = [] };
    let sale5: Sale = { id: 4, name: "Sale 5", cars: [] = [] };

    this.sales = [sale3, sale4, sale5];

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
  }

  dragStart(event, car: Car) {
    this.draggedCar = car;
  }

  drop(event, sale: Sale) {
    if (this.draggedCar) {
      let draggedCarIndex = this.findIndex(this.draggedCar);
      sale.cars = [...sale.cars, this.draggedCar];
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

  getSales() {
    return this.sales;
  }
}
