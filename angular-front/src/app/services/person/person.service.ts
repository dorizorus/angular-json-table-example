import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[];
  constructor(private http: HttpClient) {}

  getPersonsFromServer(): Observable<Person[]> {
    return this.http.get<Person[]>('http://localhost:8080/test/all');
  }
}
