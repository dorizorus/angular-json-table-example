import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicle} from '../../models/vehicle';
import {PersonService} from '../person/person.service';
import {Person} from '../../models/person';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient, private personService: PersonService) {
  }


  getVehiclesFromServer(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>('http://localhost:8080/test/all');
  }

}
