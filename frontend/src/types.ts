export enum SelectedTab {
  CARS = "cars",
  DRIVERS = "drivers",
  TRAVELS = "travels",
}

export interface Car {
  id: number;
  model: string;
  licensePlate: string;
  distance: number;
}

export interface Driver {
  id: number;
  firstName: string;
  lastName: string;
  jmbg: string;
}

export interface Travel {
  id: number;
  distance: number;
}
