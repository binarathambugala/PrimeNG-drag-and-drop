import Car from "./car";

export interface Sale {
  id?;
  name?;
  cars?: Car[];
}
