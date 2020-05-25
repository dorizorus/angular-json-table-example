import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Person} from '../../models/person';
import {VehicleService} from '../vehicle/vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {}

  getPersonsFromServer(): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:8080/test/all');
  }
}
