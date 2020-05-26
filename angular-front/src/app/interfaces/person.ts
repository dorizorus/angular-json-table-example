import {Vehicle} from './vehicle';

export interface Person {
  'id': number;
  'name': string;
  'vehicles': Vehicle[];
}
