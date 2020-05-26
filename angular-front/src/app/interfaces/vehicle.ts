import {Garage} from './garage';

export interface Vehicle {
  'id': number;
  'model': string;
  'garage': Garage;
}
