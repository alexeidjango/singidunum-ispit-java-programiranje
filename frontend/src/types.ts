export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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
  lastServiceDistance: number;
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
  carId: number;
  driverId: number;
  car: Car;
  driver: Driver;
  createdAt: string;
  updatedAt: string;
}
